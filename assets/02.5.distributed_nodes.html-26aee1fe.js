import{_ as e,Z as p,$ as o,a0 as n,a1 as a,a2 as t,a4 as c,H as i}from"./framework-d03928c9.js";const l={},u={href:"https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day5-distributed-nodes",target:"_blank",rel:"noopener noreferrer"},r=c(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DAY5-DISTRIBUTED-NODES
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
    └─lru
            lru.go
            lru_test.go

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-peerpicker-和-peergetter-接口" tabindex="-1"><a class="header-anchor" href="#_1-peerpicker-和-peergetter-接口" aria-hidden="true">#</a> 1. PeerPicker 和 PeerGetter 接口</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// PeerPicker is the interface that must be implemented to locate</span>
<span class="token comment">// the peer that owns a specific key</span>
<span class="token keyword">type</span> PeerPicker <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">PickPeer</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>PeerGetter<span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// PeerGetter is the interface that must be implemented by a peer</span>
<span class="token keyword">type</span> PeerGetter <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Get</span><span class="token punctuation">(</span>group<span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>PickPeer</code>：根据 key 选取节点</li><li><code>Get</code>：在对应的节点的对应的 group 中获取key对应的值</li></ul><h2 id="_2-http-客户端" tabindex="-1"><a class="header-anchor" href="#_2-http-客户端" aria-hidden="true">#</a> 2. HTTP 客户端</h2><p><code>HTTPPool</code>已经实现了服务端功能，现在来实现客户端功能。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	defaultBasePath <span class="token operator">=</span> <span class="token string">&quot;/geecache/&quot;</span>
	defaultReplicas <span class="token operator">=</span> <span class="token number">50</span>
<span class="token punctuation">)</span>

<span class="token comment">// HTTPPool implements PeerPicker for a pool of HTTP peers</span>
<span class="token keyword">type</span> HTTPPool <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	self        <span class="token builtin">string</span>     <span class="token comment">// 自己的地址，主机+端口</span>
	basePath    <span class="token builtin">string</span>     <span class="token comment">// 节点间通讯地址的前缀</span>
	mu          sync<span class="token punctuation">.</span>Mutex <span class="token comment">// guards peers and httpGetters</span>
	peers       <span class="token operator">*</span>consistenthash<span class="token punctuation">.</span>Map
	httpGetters <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">*</span>httpGetter
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>peers</code>：用于根据 key 选择节点</li><li><code>httpGetters</code>：映射节点和对应的<code>httpGetter</code></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token boolean">_</span> PeerGetter <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>httpGetter<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>

<span class="token keyword">type</span> httpGetter <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	baseURL <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>httpGetter<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>group<span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	u <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>
		<span class="token string">&quot;%v%v/%v&quot;</span><span class="token punctuation">,</span>
		h<span class="token punctuation">.</span>baseURL<span class="token punctuation">,</span>
		url<span class="token punctuation">.</span><span class="token function">QueryEscape</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span><span class="token punctuation">,</span>
		url<span class="token punctuation">.</span><span class="token function">QueryEscape</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">)</span>

	res<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> res<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> res<span class="token punctuation">.</span>StatusCode <span class="token operator">!=</span> http<span class="token punctuation">.</span>StatusOK <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;server returned: %v&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>Status<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	bytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> io<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;reading response body: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> bytes<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过调用<code>http.Get</code>函数获取返回值。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Set updates the pool&#39;s list of peers</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>HTTPPool<span class="token punctuation">)</span> <span class="token function">Set</span><span class="token punctuation">(</span>peers <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> p<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	p<span class="token punctuation">.</span>peers <span class="token operator">=</span> consistenthash<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>defaultReplicas<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
	p<span class="token punctuation">.</span>peers<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>peers<span class="token operator">...</span><span class="token punctuation">)</span>
	p<span class="token punctuation">.</span>httpGetters <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">*</span>httpGetter<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>peers<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> peer <span class="token operator">:=</span> <span class="token keyword">range</span> peers <span class="token punctuation">{</span>
		p<span class="token punctuation">.</span>httpGetters<span class="token punctuation">[</span>peer<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>httpGetter<span class="token punctuation">{</span>baseURL<span class="token punctuation">:</span> peer <span class="token operator">+</span> p<span class="token punctuation">.</span>basePath<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// PickPeer picks a peer according to key</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>HTTPPool<span class="token punctuation">)</span> <span class="token function">PickPeer</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>PeerGetter<span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> p<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> peer <span class="token operator">:=</span> p<span class="token punctuation">.</span>peers<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> peer <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> peer <span class="token operator">!=</span> p<span class="token punctuation">.</span>self <span class="token punctuation">{</span>
		p<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;Pick peer %s&quot;</span><span class="token punctuation">,</span> peer<span class="token punctuation">)</span>
		<span class="token keyword">return</span> p<span class="token punctuation">.</span>httpGetters<span class="token punctuation">[</span>peer<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Set</code>： <ol><li>使用默认<code>replicas</code>创建<code>consistenthash.Map</code>实例</li><li>添加传入的节点</li><li>添加节点/<code>httpGetter</code>映射</li></ol></li><li><code>PickPeer</code>：根据 key 获取节点对应的 <code>httpGetter</code></li></ul><h2 id="_3-主流程" tabindex="-1"><a class="header-anchor" href="#_3-主流程" aria-hidden="true">#</a> 3. 主流程</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Group is a cache namespace and associated data loaded spread over</span>
<span class="token keyword">type</span> Group <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name      <span class="token builtin">string</span>
	getter    Getter
	mainCache cache
	peers     PeerPicker
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>peers PeerPicker</code>：调用<code>PickPeer</code>获取key对应的节点，并获取key对应的value</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// RegisterPeers registers a PeerPicker for choosing remote peer</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>Group<span class="token punctuation">)</span> <span class="token function">RegisterPeers</span><span class="token punctuation">(</span>peers PeerPicker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> g<span class="token punctuation">.</span>peers <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;RegisterPeerPicker called more than once&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	g<span class="token punctuation">.</span>peers <span class="token operator">=</span> peers
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册节点。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>Group<span class="token punctuation">)</span> <span class="token function">load</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ByteView<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>Group<span class="token punctuation">)</span> <span class="token function">getFromPeer</span><span class="token punctuation">(</span>peer PeerGetter<span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ByteView<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	bytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> peer<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span>name<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> ByteView<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> ByteView<span class="token punctuation">{</span>b<span class="token punctuation">:</span> bytes<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>load</code>： <ol><li>从其他节点查询键</li><li>若查询失败，则在本地查询源数据</li></ol></li><li><code>getFromPeer</code>：通过key选择节点并查询</li></ul><h2 id="_4-demo-测试" tabindex="-1"><a class="header-anchor" href="#_4-demo-测试" aria-hidden="true">#</a> 4. Demo 测试</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;geecache&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> db <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
	<span class="token string">&quot;Tom&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;630&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;Jack&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;589&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;Sam&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;567&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	protocol <span class="token operator">=</span> <span class="token string">&quot;http://&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">createGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>geecache<span class="token punctuation">.</span>Group <span class="token punctuation">{</span>
	<span class="token keyword">return</span> geecache<span class="token punctuation">.</span><span class="token function">NewGroup</span><span class="token punctuation">(</span><span class="token string">&quot;scores&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">&lt;&lt;</span><span class="token number">10</span><span class="token punctuation">,</span> geecache<span class="token punctuation">.</span><span class="token function">GetterFunc</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;[SlowDB] search key&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
		<span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> db<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;%s not exist&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">startCacheServer</span><span class="token punctuation">(</span>addr <span class="token builtin">string</span><span class="token punctuation">,</span> addrs <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> gee <span class="token operator">*</span>geecache<span class="token punctuation">.</span>Group<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	peers <span class="token operator">:=</span> geecache<span class="token punctuation">.</span><span class="token function">NewHTTPPool</span><span class="token punctuation">(</span>addr<span class="token punctuation">)</span>
	peers<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>addrs<span class="token operator">...</span><span class="token punctuation">)</span>
	gee<span class="token punctuation">.</span><span class="token function">RegisterPeers</span><span class="token punctuation">(</span>peers<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;geecache is running at&quot;</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span>addr<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>protocol<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> peers<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">startAPIServer</span><span class="token punctuation">(</span>apiAddr <span class="token builtin">string</span><span class="token punctuation">,</span> gee <span class="token operator">*</span>geecache<span class="token punctuation">.</span>Group<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	http<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token string">&quot;/api&quot;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span><span class="token function">HandlerFunc</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		key <span class="token operator">:=</span> req<span class="token punctuation">.</span>URL<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span>
		view<span class="token punctuation">,</span> err <span class="token operator">:=</span> gee<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			http<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		w<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/octet-stream&quot;</span><span class="token punctuation">)</span>
		w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>view<span class="token punctuation">.</span><span class="token function">ByteSlice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;fontend server is running at&quot;</span><span class="token punctuation">,</span> apiAddr<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span>apiAddr<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>protocol<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> <span class="token punctuation">(</span>
		port <span class="token builtin">int</span>
		api  <span class="token builtin">bool</span>
	<span class="token punctuation">)</span>
	flag<span class="token punctuation">.</span><span class="token function">IntVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>port<span class="token punctuation">,</span> <span class="token string">&quot;port&quot;</span><span class="token punctuation">,</span> <span class="token number">8001</span><span class="token punctuation">,</span> <span class="token string">&quot;GeeCache server port&quot;</span><span class="token punctuation">)</span>
	flag<span class="token punctuation">.</span><span class="token function">BoolVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>api<span class="token punctuation">,</span> <span class="token string">&quot;api&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;Start a api server&quot;</span><span class="token punctuation">)</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	apiAddr <span class="token operator">:=</span> <span class="token string">&quot;http://localhost:9999&quot;</span>
	addrMap <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
		<span class="token number">8001</span><span class="token punctuation">:</span> <span class="token string">&quot;http://localhost:8001&quot;</span><span class="token punctuation">,</span>
		<span class="token number">8002</span><span class="token punctuation">:</span> <span class="token string">&quot;http://localhost:8002&quot;</span><span class="token punctuation">,</span>
		<span class="token number">8003</span><span class="token punctuation">:</span> <span class="token string">&quot;http://localhost:8003&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> addrs <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> addrMap <span class="token punctuation">{</span>
		addrs <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>addrs<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	gee <span class="token operator">:=</span> <span class="token function">createGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> api <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">startAPIServer</span><span class="token punctuation">(</span>apiAddr<span class="token punctuation">,</span> gee<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token function">startCacheServer</span><span class="token punctuation">(</span>addrMap<span class="token punctuation">[</span>port<span class="token punctuation">]</span><span class="token punctuation">,</span> addrs<span class="token punctuation">,</span> gee<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>startCacheServer</code>：启动缓存服务 <ol><li>创建 <code>HTTPPool</code></li><li>添加节点信息</li><li>注册到 <code>Group</code>中</li><li>启动 HTTP 服务</li></ol></li><li><code>startAPIServer</code>：启动 HTTP 服务</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>
<span class="token comment"># #!/bin/sh</span>
<span class="token comment"># 通过/usr/bin/env运行命令的好处是可以查找当前 environment 中程序的默认版本</span>

<span class="token comment"># trap 收到 EXIT 信号时，执行命令</span>
<span class="token comment"># rm server 移除临时文件</span>
<span class="token comment"># kill 0 关闭当前进程组的所有进程</span>
<span class="token builtin class-name">trap</span> <span class="token string">&quot;rm server; kill 0&quot;</span> EXIT

go build <span class="token parameter variable">-ldflags</span> <span class="token string">&quot;-s -w&quot;</span> <span class="token parameter variable">-o</span> ./server
./server <span class="token parameter variable">-port</span> <span class="token number">8001</span>  <span class="token operator">&amp;</span>
./server <span class="token parameter variable">-port</span> <span class="token number">8002</span> <span class="token operator">&amp;</span>
./server <span class="token parameter variable">-port</span> <span class="token number">8003</span> <span class="token parameter variable">-api</span>  <span class="token operator">&amp;</span>

<span class="token function">sleep</span> <span class="token number">1</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;&gt;&gt;&gt; start test&quot;</span>
<span class="token function">curl</span> <span class="token string">&quot;http://localhost:9999/api?key=Tom&quot;</span> <span class="token operator">&amp;</span>
<span class="token function">curl</span> <span class="token string">&quot;http://localhost:9999/api?key=Tom&quot;</span> <span class="token operator">&amp;</span>
<span class="token function">curl</span> <span class="token string">&quot;http://localhost:9999/api?key=Tom&quot;</span> <span class="token operator">&amp;</span>

<span class="token function">wait</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2023/10/11 05:57:59 geecache is running at http://localhost:8003
2023/10/11 05:57:59 geecache is running at http://localhost:8001
2023/10/11 05:57:59 geecache is running at http://localhost:8002
2023/10/11 05:57:59 fontend server is running at http://localhost:9999
&gt;&gt;&gt; start test
2023/10/11 05:58:00 [Server http://localhost:8003] Pick peer http://localhost:8001
2023/10/11 05:58:00 [Server http://localhost:8003] Pick peer http://localhost:8001
2023/10/11 05:58:00 [Server http://localhost:8003] Pick peer http://localhost:8001
2023/10/11 05:58:00 [Server http://localhost:8001] GET /geecache/scores/Tom
2023/10/11 05:58:00 [SlowDB] search key Tom
2023/10/11 05:58:00 [Server http://localhost:8001] GET /geecache/scores/Tom
2023/10/11 05:58:00 [GeeCache] hit
2023/10/11 05:58:00 [Server http://localhost:8001] GET /geecache/scores/Tom
2023/10/11 05:58:00 [GeeCache] hit
630630630
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,25),k={href:"https://geektutu.com/post/geecache-day5.html",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const s=i("ExternalLinkIcon");return p(),o("div",null,[n("p",null,[n("a",u,[a("https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day5-distributed-nodes"),t(s)])]),r,n("ol",null,[n("li",null,[n("a",k,[a("https://geektutu.com/post/geecache-day5.html"),t(s)])])])])}const g=e(l,[["render",d],["__file","02.5.distributed_nodes.html.vue"]]);export{g as default};
