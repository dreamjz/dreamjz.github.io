import{_ as p,Z as o,$ as c,a0 as n,a1 as a,a2 as t,a4 as e,H as i}from"./framework-d03928c9.js";const u={},l=e('<h2 id="_1-路由分组" tabindex="-1"><a class="header-anchor" href="#_1-路由分组" aria-hidden="true">#</a> 1. 路由分组</h2><p>分组控制(Group Control)是 Web 框架应提供的基础功能之一。</p><p>若不进行路由分组，那么就需要针对每一个路由分别进行设置和操作。</p><p>对路由进行分组的好处：</p><ol><li>统一管理同一组的路由</li><li>实现路由组嵌套，不同的子路由可以使用单独的中间件，也可以共享父路由的中间件</li></ol><p>通过分组和中间件的组合，提高了系统的可扩展性。</p><h2 id="_2-实现" tabindex="-1"><a class="header-anchor" href="#_2-实现" aria-hidden="true">#</a> 2. 实现</h2>',7),r={href:"https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/Gee/day4-router-group",target:"_blank",rel:"noopener noreferrer"},d=e(`<p>当前项目结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DAY4-ROUTER-GROUP
│  go.mod
│  go.work
│  main.go
│
└─gee
        context.go
        gee.go
        go.mod
        router.go
        router_group.go
        router_test.go
        trie.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-router-group" tabindex="-1"><a class="header-anchor" href="#_2-1-router-group" aria-hidden="true">#</a> 2.1 router_group</h3><p>路由分组需要实现的功能：</p><ol><li>添加子分组，通过当前分组创建子分组</li><li>注册路由，可以为当前分组注册路由</li></ol><p>路由分组的数据结构如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> RouterGroup <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	prefix      <span class="token builtin">string</span>        <span class="token comment">// 路由组前缀</span>
	middlewares <span class="token punctuation">[</span><span class="token punctuation">]</span>HandlerFunc <span class="token comment">// 中间件</span>
	parent      <span class="token operator">*</span>RouterGroup  <span class="token comment">// 父母分组</span>
	engine      <span class="token operator">*</span>Engine       <span class="token comment">// 所有分组持有同一个 Engine 实例</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>prefix</code>：当前路由的前缀</li><li><code>middlewares</code>：中间件函数列表</li><li><code>parent</code>：父母分组，用于分组嵌套</li><li><code>engine</code>：所有的分组持有同一个<code>Engine</code>实例，那么<code>RouterGroup</code>就具备<code>Engine</code>的所有功能，如注册路由</li></ul><h3 id="_2-2-gee" tabindex="-1"><a class="header-anchor" href="#_2-2-gee" aria-hidden="true">#</a> 2.2 gee</h3><p>所有的路由分组组成一个树形结构，所有的节点拥有一个指向其父母节点的指针。</p><p><code>Engine</code>可以视作树的根节点，此时<code>Engine</code>与路由相关的功能就交给<code>RouterGroup</code>实现。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Engine <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token operator">*</span>RouterGroup
	router <span class="token operator">*</span>router
	groups <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>RouterGroup <span class="token comment">// store all groups</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>groups</code>：<code>Engine</code>实例存储所有的分组</li></ul><h3 id="_2-3-router-group" tabindex="-1"><a class="header-anchor" href="#_2-3-router-group" aria-hidden="true">#</a> 2.3 router_group</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> gee

<span class="token keyword">import</span> <span class="token string">&quot;log&quot;</span>

<span class="token keyword">type</span> RouterGroup <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	prefix      <span class="token builtin">string</span>        <span class="token comment">// 路由组前缀</span>
	middlewares <span class="token punctuation">[</span><span class="token punctuation">]</span>HandlerFunc <span class="token comment">// 中间件</span>
	parent      <span class="token operator">*</span>RouterGroup  <span class="token comment">// 父母分组</span>
	engine      <span class="token operator">*</span>Engine       <span class="token comment">// 所有分组持有同一个 Engine 实例</span>
<span class="token punctuation">}</span>

<span class="token comment">// Group create a new RouterGroup</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>group <span class="token operator">*</span>RouterGroup<span class="token punctuation">)</span> <span class="token function">Group</span><span class="token punctuation">(</span>prefix <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>RouterGroup <span class="token punctuation">{</span>
	engine <span class="token operator">:=</span> group<span class="token punctuation">.</span>engine
	newGroup <span class="token operator">:=</span> <span class="token operator">&amp;</span>RouterGroup<span class="token punctuation">{</span>
		prefix<span class="token punctuation">:</span> group<span class="token punctuation">.</span>prefix <span class="token operator">+</span> prefix<span class="token punctuation">,</span>
		parent<span class="token punctuation">:</span> group<span class="token punctuation">,</span>
		engine<span class="token punctuation">:</span> engine<span class="token punctuation">,</span> <span class="token comment">// All group share one Engine instance</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// Add to group lists</span>
	engine<span class="token punctuation">.</span>groups <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>engine<span class="token punctuation">.</span>groups<span class="token punctuation">,</span> newGroup<span class="token punctuation">)</span>
	<span class="token keyword">return</span> newGroup
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>group <span class="token operator">*</span>RouterGroup<span class="token punctuation">)</span> <span class="token function">addRoute</span><span class="token punctuation">(</span>method <span class="token builtin">string</span><span class="token punctuation">,</span> path <span class="token builtin">string</span><span class="token punctuation">,</span> handler HandlerFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	pattern <span class="token operator">:=</span> group<span class="token punctuation">.</span>prefix <span class="token operator">+</span> path
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Route %4s - %s&quot;</span><span class="token punctuation">,</span> method<span class="token punctuation">,</span> pattern<span class="token punctuation">)</span>
	group<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>group <span class="token operator">*</span>RouterGroup<span class="token punctuation">)</span> <span class="token function">GET</span><span class="token punctuation">(</span>pattern <span class="token builtin">string</span><span class="token punctuation">,</span> handler HandlerFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	group<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>group <span class="token operator">*</span>RouterGroup<span class="token punctuation">)</span> <span class="token function">POST</span><span class="token punctuation">(</span>pattern <span class="token builtin">string</span><span class="token punctuation">,</span> handler HandlerFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	group<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-demo" tabindex="-1"><a class="header-anchor" href="#_3-demo" aria-hidden="true">#</a> 3. Demo</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gee<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/index&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gee<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">HTML</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">&quot;&lt;h1&gt;Index Page&lt;/h1&gt;&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	v1 <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/v1&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		v1<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gee<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span><span class="token function">HTML</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">&quot;&lt;h1&gt;Welcome v1&lt;/h1&gt;&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

		v1<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gee<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">&quot;Hello %s, you&#39;re at %s\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	v2 <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/v2&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		v2<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/hello/:name&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gee<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">&quot;Hello %s, you&#39;re at %s\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span>

	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> http://localhost:8000/v1/hello?name<span class="token operator">=</span>alice
Hello alice, you<span class="token string">&#39;re at /v1/hello

$ curl http://localhost:8000/v2/
404 NOT FOUND: /v2/

$ curl http://localhost:8000/v2/hello/alice
Hello alice, you&#39;</span>re at /v2/hello/alice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,19),k={href:"https://geektutu.com/post/gee-day4.html",target:"_blank",rel:"noopener noreferrer"};function v(m,g){const s=i("ExternalLinkIcon");return o(),c("div",null,[l,n("p",null,[n("a",r,[a("https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/Gee/day4-router-group"),t(s)])]),d,n("ol",null,[n("li",null,[n("a",k,[a("https://geektutu.com/post/gee-day4.html"),t(s)])])])])}const h=p(u,[["render",v],["__file","01.4.group.html.vue"]]);export{h as default};
