import{_ as e,Z as p,$ as o,a0 as n,a1 as a,a2 as t,a3 as c,H as i}from"./framework-dee406ed.js";const l={},u={href:"https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day3-http-server",target:"_blank",rel:"noopener noreferrer"},r=c(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DAY3-HTTP-SERVER
│  go.mod
│  go.work
│  main.go
│  
└─geecache
    │  byteview.go
    │  cache.go
    │  geecache.go
    │  geecache_test.go
    │  go.mod
    │  http.go
    │
    └─lru
            lru.go
            lru_test.go

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-http-服务端" tabindex="-1"><a class="header-anchor" href="#_1-http-服务端" aria-hidden="true">#</a> 1. HTTP 服务端</h2><p>分布式缓存需要实现节点间的通信，可以基于 HTTP 建立通信机制。</p><h3 id="_1-1-http" tabindex="-1"><a class="header-anchor" href="#_1-1-http" aria-hidden="true">#</a> 1.1 http</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> defaultBasePath <span class="token operator">=</span> <span class="token string">&quot;/geecache/&quot;</span>

<span class="token keyword">var</span> <span class="token boolean">_</span> http<span class="token punctuation">.</span>Handler <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>HTTPPool<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>

<span class="token comment">// HTTPPool implements PeerPicker for a pool of HTTP peers</span>
<span class="token keyword">type</span> HTTPPool <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	self     <span class="token builtin">string</span> <span class="token comment">// 自己的地址，主机+端口</span>
	basePath <span class="token builtin">string</span> <span class="token comment">// 节点间通讯地址的前缀</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewHTTPPool</span><span class="token punctuation">(</span>addr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>HTTPPool <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>HTTPPool<span class="token punctuation">{</span>
		self<span class="token punctuation">:</span>     addr<span class="token punctuation">,</span>
		basePath<span class="token punctuation">:</span> defaultBasePath<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>HTTPPool<span class="token punctuation">)</span> <span class="token function">Log</span><span class="token punctuation">(</span>format <span class="token builtin">string</span><span class="token punctuation">,</span> v <span class="token operator">...</span>any<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;[Server %s] %s&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>self<span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>format<span class="token punctuation">,</span> v<span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>HTTPPool<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	path <span class="token operator">:=</span> req<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path
	<span class="token keyword">if</span> <span class="token operator">!</span>strings<span class="token punctuation">.</span><span class="token function">HasPrefix</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> p<span class="token punctuation">.</span>basePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;HTTPPool serving unexpected path: &quot;</span> <span class="token operator">+</span> path<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	p<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;%s %s&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>Method<span class="token punctuation">,</span> path<span class="token punctuation">)</span>

	<span class="token comment">// /&lt;basepath&gt;/&lt;groupname&gt;/&lt;key&gt; required</span>
	parts <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">SplitN</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>basePath<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>parts<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
		http<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;bad request&quot;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	groupName <span class="token operator">:=</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	key <span class="token operator">:=</span> parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

	group <span class="token operator">:=</span> <span class="token function">GetGroup</span><span class="token punctuation">(</span>groupName<span class="token punctuation">)</span>
	<span class="token keyword">if</span> group <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		http<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;no such group: &quot;</span><span class="token operator">+</span>groupName<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusNotFound<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	view<span class="token punctuation">,</span> err <span class="token operator">:=</span> group<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		http<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	w<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/octet-stream&quot;</span><span class="token punctuation">)</span>
	w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>view<span class="token punctuation">.</span><span class="token function">ByteSlice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>HTTPPool</code>：</p><ul><li><code>self</code>：当前主机的地址，例如：<code>http://example.com:8000</code></li><li><code>basePath</code>：节点间通讯地址前缀，默认为<code>defaultBasePath</code>；例如：<code>http://example.com:8000/geecache/...</code></li></ul><p><code>ServeHTTP</code>流程：</p><ol><li>检查请求路径</li><li>从请求路径中解析出<code>group name</code>和<code>key</code></li><li>通过<code>group name</code>获取 <code>group</code></li><li>通过<code>key</code>获取 value</li><li>将 value 写入 http response</li></ol><h2 id="_2-demo-测试" tabindex="-1"><a class="header-anchor" href="#_2-demo-测试" aria-hidden="true">#</a> 2. Demo 测试</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">var</span> db <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
	<span class="token string">&quot;Tom&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;630&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;Jack&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;589&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;Sam&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;567&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	geecache<span class="token punctuation">.</span><span class="token function">NewGroup</span><span class="token punctuation">(</span>
		<span class="token string">&quot;score&quot;</span><span class="token punctuation">,</span>
		<span class="token number">2</span><span class="token operator">&lt;&lt;</span><span class="token number">10</span><span class="token punctuation">,</span>
		geecache<span class="token punctuation">.</span><span class="token function">GetterFunc</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;[SlowDB] search key&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
			<span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> db<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;%s not exist&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	addr <span class="token operator">:=</span> <span class="token string">&quot;localhost:8000&quot;</span>
	peers <span class="token operator">:=</span> geecache<span class="token punctuation">.</span><span class="token function">NewHTTPPool</span><span class="token punctuation">(</span>addr<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;geecache is running at&quot;</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span>addr<span class="token punctuation">,</span> peers<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\tmp&gt;curl http://localhost:8000/geecache/score/Tom
630
D:\\tmp&gt;curl http://localhost:8000/geecache/score/
key is required
D:\\tmp&gt;curl http://localhost:8000/geecache/score/Alice
Alice not exist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,13),k={href:"https://geektutu.com/post/geecache-day3.html",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const s=i("ExternalLinkIcon");return p(),o("div",null,[n("p",null,[n("a",u,[a("https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day3-http-server"),t(s)])]),r,n("ol",null,[n("li",null,[n("a",k,[a("https://geektutu.com/post/geecache-day3.html"),t(s)])])])])}const g=e(l,[["render",d],["__file","02.3.http_server.html.vue"]]);export{g as default};