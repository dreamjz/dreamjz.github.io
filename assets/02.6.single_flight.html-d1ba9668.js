import{_ as t,Z as p,$ as o,a0 as n,a1 as a,a2 as e,a4 as c,H as i}from"./framework-d03928c9.js";const l={},u={href:"https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day6-single-flight",target:"_blank",rel:"noopener noreferrer"},r=c(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DAY6-SINGLE-FLIGHT
│  go.mod
│  go.work
│  main.go
│  run.sh
│  
└─geecache
    │  byteview.go
    │  cache.go
    │  consistenthash.go
    │  consistenthash_test.go
    │  geecache.go
    │  geecache_test.go
    │  go.mod
    │  http.go
    │  peers.go
    │
    ├─consistenthash
    │      consistenthash.go
    │      consistenthash_test.go
    │
    ├─lru
    │      lru.go
    │      lru_test.go
    │
    └─singleflight
            singleflight.go

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-缓存雪崩、缓存击穿与缓存穿透" tabindex="-1"><a class="header-anchor" href="#_1-缓存雪崩、缓存击穿与缓存穿透" aria-hidden="true">#</a> 1. 缓存雪崩、缓存击穿与缓存穿透</h2><blockquote><p><strong>缓存雪崩</strong>：缓存在同一时刻全部失效，造成瞬时DB请求量大、压力骤增，引起雪崩。缓存雪崩通常因为缓存服务器宕机、缓存的 key 设置了相同的过期时间等引起。</p></blockquote><blockquote><p><strong>缓存击穿</strong>：一个存在的key，在缓存过期的一刻，同时有大量的请求，这些请求都会击穿到 DB ，造成瞬时DB请求量大、压力骤增。</p></blockquote><blockquote><p><strong>缓存穿透</strong>：查询一个不存在的数据，因为不存在则不会写到缓存中，所以每次都会去请求 DB，如果瞬间流量过大，穿透到 DB，导致宕机。</p></blockquote><h2 id="_2-single-flight" tabindex="-1"><a class="header-anchor" href="#_2-single-flight" aria-hidden="true">#</a> 2. Single Flight</h2><p>在之前的测试中，若同时发起大量的请求，会可能导致两种情况：</p><ol><li>若需本地载入 value，会同时发起大量的数据库调用，导致缓存击穿</li><li>若需从其他节点载入，则会同时发起大量的 HTTP 请求，并且可能导致目标节点出现缓存击穿</li></ol><p>实际上，发起的多次请求，因为需要的结果相同，只需要一个请求成功执行并返回结果即可。</p><h3 id="_2-1-实现" tabindex="-1"><a class="header-anchor" href="#_2-1-实现" aria-hidden="true">#</a> 2.1 实现</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> singleflight

<span class="token keyword">import</span> <span class="token string">&quot;sync&quot;</span>

<span class="token keyword">type</span> call <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	wg  sync<span class="token punctuation">.</span>WaitGroup
	val any
	err <span class="token builtin">error</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Group <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	mu sync<span class="token punctuation">.</span>Mutex
	m  <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">*</span>call
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>call</code>：表示请求 <ul><li><code>wg</code>：并发计数器，用于确保请求只会被调用一次</li><li><code>val</code>：请求的结果</li><li><code>err</code>：请求的 error</li></ul></li><li><code>Group</code>： <ul><li><code>mu</code>：互斥锁，保护<code>m</code>的读写</li><li><code>m</code>：存储不同的 key 对应的请求</li></ul></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>Group<span class="token punctuation">)</span> <span class="token function">Do</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">,</span> fn <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>any<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>any<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	g<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> g<span class="token punctuation">.</span>m <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		g<span class="token punctuation">.</span>m <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">*</span>call<span class="token punctuation">)</span> <span class="token comment">// 延迟加载</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 调用已存在</span>
	<span class="token keyword">if</span> c<span class="token punctuation">,</span> ok <span class="token operator">:=</span> g<span class="token punctuation">.</span>m<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		g<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// 等待调用结束</span>
		c<span class="token punctuation">.</span>wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// 直接返回</span>
		<span class="token keyword">return</span> c<span class="token punctuation">.</span>val<span class="token punctuation">,</span> c<span class="token punctuation">.</span>err
	<span class="token punctuation">}</span>
	<span class="token comment">// 调用不存在，创建新调用</span>
	c <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>call<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	g<span class="token punctuation">.</span>m<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> c
	g<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 发起调用</span>
	c<span class="token punctuation">.</span>val<span class="token punctuation">,</span> c<span class="token punctuation">.</span>err <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 调用结束，删除调用</span>
	g<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">delete</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span>m<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
	g<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> c<span class="token punctuation">.</span>val<span class="token punctuation">,</span> c<span class="token punctuation">.</span>err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>若调用表不存在，则创建（延迟加载）</li><li>若key对应的调用已存在，则等待调用完成并返回</li><li>若不存在，则创建新的调用</li><li>执行调用函数<code>fn</code></li><li>调用结束，从调用表中删除</li><li>返回结果</li></ol><p><code>Do</code>保证了任意多次相同的 key 对应的调用函数只会被执行一次，并返回相同的结果。</p><h3 id="_2-2-使用" tabindex="-1"><a class="header-anchor" href="#_2-2-使用" aria-hidden="true">#</a> 2.2 使用</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Group <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token operator">...</span>
	<span class="token comment">// use singleflight.Group to make sure that</span>
	<span class="token comment">// each key is only fetched once</span>
	loader <span class="token operator">*</span>singleflight<span class="token punctuation">.</span>Group
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewGroup</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> cacheBytes <span class="token builtin">int64</span><span class="token punctuation">,</span> getter Getter<span class="token punctuation">)</span> <span class="token operator">*</span>Group <span class="token punctuation">{</span>
	<span class="token operator">...</span>
	g <span class="token operator">:=</span> <span class="token operator">&amp;</span>Group<span class="token punctuation">{</span>
		<span class="token operator">...</span>
		loader<span class="token punctuation">:</span>    <span class="token operator">&amp;</span>singleflight<span class="token punctuation">.</span>Group<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token operator">...</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>Group<span class="token punctuation">)</span> <span class="token function">load</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ByteView<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	view<span class="token punctuation">,</span> err <span class="token operator">:=</span> g<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>any<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> g<span class="token punctuation">.</span>peers <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> peer<span class="token punctuation">,</span> ok <span class="token operator">:=</span> g<span class="token punctuation">.</span>peers<span class="token punctuation">.</span><span class="token function">PickPeer</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
				val<span class="token punctuation">,</span> err <span class="token operator">:=</span> g<span class="token punctuation">.</span><span class="token function">getFromPeer</span><span class="token punctuation">(</span>peer<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
				<span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> val<span class="token punctuation">,</span> <span class="token boolean">nil</span>
				<span class="token punctuation">}</span>
				log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;[GeeCache] Failed to get from peer&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> g<span class="token punctuation">.</span><span class="token function">getLocally</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> ByteView<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> view<span class="token punctuation">.</span><span class="token punctuation">(</span>ByteView<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>load</code>方法中，将原有的执行逻辑放入<code>g.loader.Do</code>中执行，保证每个请求只会被执行一次。</p><h2 id="_3-demo-测试" tabindex="-1"><a class="header-anchor" href="#_3-demo-测试" aria-hidden="true">#</a> 3. Demo 测试</h2><p>发起 10 请求，可以看到请求实际只执行了 3 次。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2023/10/11 07:00:28 [Server http://localhost:8003] Pick peer http://localhost:8001
2023/10/11 07:00:28 [Server http://localhost:8001] GET /geecache/scores/Tom
2023/10/11 07:00:28 [SlowDB] search key Tom
0023/10/11 07:00:28 [Server http://localhost:8003] Pick peer http://localhost:8001
2023/10/11 07:00:28 [Server http://localhost:8001] GET /geecache/scores/Tom
2023/10/11 07:00:28 [GeeCache] hit
2023/10/11 07:00:28 [Server http://localhost:8003] Pick peer http://localhost:8001
2023/10/11 07:00:28 [Server http://localhost:8001] GET /geecache/scores/Tom
2023/10/11 07:00:28 [GeeCache] hit
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,22),d={href:"https://geektutu.com/post/geecache-day6.html",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=i("ExternalLinkIcon");return p(),o("div",null,[n("p",null,[n("a",u,[a("https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day6-single-flight"),e(s)])]),r,n("ol",null,[n("li",null,[n("a",d,[a("https://geektutu.com/post/geecache-day6.html"),e(s)])])])])}const g=t(l,[["render",k],["__file","02.6.single_flight.html.vue"]]);export{g as default};
