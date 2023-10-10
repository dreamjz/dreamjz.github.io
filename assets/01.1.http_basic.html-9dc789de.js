import{_ as p,Z as o,$ as c,a0 as n,a1 as a,a2 as t,a3 as e,H as i}from"./framework-09afcf0b.js";const l={},u=e(`<h2 id="_1-使用标准库-net-http" tabindex="-1"><a class="header-anchor" href="#_1-使用标准库-net-http" aria-hidden="true">#</a> 1. 使用标准库 <code>net/http</code></h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 注册路由</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> indexHandler<span class="token punctuation">)</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> helloHandler<span class="token punctuation">)</span>

	<span class="token comment">// 监听并启动 HTTP 服务</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">indexHandler</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;URL.path = %q\\n&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">helloHandler</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 输出所有 http 请求头 request.Header</span>
	<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> req<span class="token punctuation">.</span>Header <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;Header[%q] =  %q\\n&quot;</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>indexHandler</code>：路由<code>/</code>绑定的处理函数，响应当前请求的 URL 路径</li><li><code>helloHandler</code>：路由<code>/hello</code> 绑定的处理函数，响应当前请求的请求头</li><li><code>ListenAndServe(addr string, handler Handler)</code>：启动 Web 服务 <ul><li><code>addr</code>：监听地址</li><li><code>handler</code>：处理所有 HTTP 请求的实例，默认为 nil；可作为 Web 框架的入口</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> http://localhost:8000
URL.path <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span>
$ <span class="token function">curl</span> http://localhost:8000/hello
Header<span class="token punctuation">[</span><span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span>  <span class="token punctuation">[</span><span class="token string">&quot;curl/8.0.1&quot;</span><span class="token punctuation">]</span>
Header<span class="token punctuation">[</span><span class="token string">&quot;Accept&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span>  <span class="token punctuation">[</span><span class="token string">&quot;*/*&quot;</span><span class="token punctuation">]</span>
Header<span class="token punctuation">[</span><span class="token string">&quot;Accept-Encoding&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span>  <span class="token punctuation">[</span><span class="token string">&quot;gzip&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-http-handler接口" tabindex="-1"><a class="header-anchor" href="#_2-http-handler接口" aria-hidden="true">#</a> 2. <code>http.Handler</code>接口</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Handler <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">ServeHTTP</span><span class="token punctuation">(</span>ResponseWriter<span class="token punctuation">,</span> <span class="token operator">*</span>Request<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>http.Handler</code>是接口类型，只要自定义的类型实现了该接口，那么将自定义类型的实例作为<code>ListenAndServe</code>的第二个参数传入，该实例将接管所有的 HTTP 请求的处理。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Engine is the uni handler for all request</span>
<span class="token keyword">type</span> Engine <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>engine <span class="token operator">*</span>Engine<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> req<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;URL.Path = %q\\n&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token string">&quot;/hello&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> req<span class="token punctuation">.</span>Header <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;Header[%q] = %q\\n&quot;</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;404 NOT FOUND: %s\\n&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>URL<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	engine <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Engine<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">,</span> engine<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Engine</code>实现了<code>http.Handler</code>接口，其方法<code>ServeHTTP</code>有两个参数： <ul><li><code>http.ResponseWriter</code>：用于构造 HTTP Response</li><li><code>*http.Request</code>：包含HTTP请求的所有信息</li></ul></li><li><code>ListenAndServe</code>函数的第二参数传入创建的<code>Engine</code>实例，接管所有的 HTTP 请求的处理</li></ul><h2 id="_3-gee-框架雏形" tabindex="-1"><a class="header-anchor" href="#_3-gee-框架雏形" aria-hidden="true">#</a> 3. Gee 框架雏形</h2>`,10),d={href:"https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/Gee/day1-basic",target:"_blank",rel:"noopener noreferrer"},r=e(`<p>重新组织上述代码，目录结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>base3/
	gee/
  	|--gee.go
  	|--go.mod
main.go
go.mod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>base3/go.mod</code>:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>module base3

<span class="token keyword">go</span> <span class="token number">1.20</span>

require <span class="token punctuation">(</span>
	gee v0<span class="token punctuation">.</span><span class="token number">0.0</span>
<span class="token punctuation">)</span>
<span class="token comment">// 将 gee 指向 ./gee</span>
replace gee <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">.</span><span class="token operator">/</span>gee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（备注：在 gov1.18 及之后可以使用 go workspace 替代 replace 使用）</p><p>使用 <code>go work</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go work init <span class="token builtin class-name">.</span>
$ go work use ./gee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// base3/go.work</span>
<span class="token keyword">go</span> <span class="token number">1.20</span>

use <span class="token punctuation">(</span>
	<span class="token punctuation">.</span>
	<span class="token punctuation">.</span><span class="token operator">/</span>gee
<span class="token punctuation">)</span>

<span class="token comment">// base3/go.mod</span>
<span class="token comment">// 使用了 go work，无需使用 replace</span>
module base3

<span class="token keyword">go</span> <span class="token number">1.20</span>

require <span class="token punctuation">(</span>
	gee v0<span class="token punctuation">.</span><span class="token number">0.0</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-gee-go" tabindex="-1"><a class="header-anchor" href="#_3-1-gee-go" aria-hidden="true">#</a> 3.1 gee.go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> gee

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// HandlerFunc defines the request handler used by gee engine</span>
<span class="token keyword">type</span> HandlerFunc <span class="token keyword">func</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span>

<span class="token comment">// Engine implement the http.Handler</span>
<span class="token keyword">type</span> Engine <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	router <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>HandlerFunc
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>engine <span class="token operator">*</span>Engine<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	key <span class="token operator">:=</span> req<span class="token punctuation">.</span>Method <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path
	<span class="token keyword">if</span> handler<span class="token punctuation">,</span> ok <span class="token operator">:=</span> engine<span class="token punctuation">.</span>router<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		<span class="token function">handler</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> req<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;404 NOT FOUND: %s\\n&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>URL<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>engine <span class="token operator">*</span>Engine<span class="token punctuation">)</span> <span class="token function">addRoute</span><span class="token punctuation">(</span>method <span class="token builtin">string</span><span class="token punctuation">,</span> pattern <span class="token builtin">string</span><span class="token punctuation">,</span> handler HandlerFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	key <span class="token operator">:=</span> method <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> pattern
	engine<span class="token punctuation">.</span>router<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> handler
<span class="token punctuation">}</span>

<span class="token comment">// GET  add GET request route</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>engine <span class="token operator">*</span>Engine<span class="token punctuation">)</span> <span class="token function">GET</span><span class="token punctuation">(</span>pattern <span class="token builtin">string</span><span class="token punctuation">,</span> handler HandlerFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	engine<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// POST  add POST request route</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>engine <span class="token operator">*</span>Engine<span class="token punctuation">)</span> <span class="token function">POST</span><span class="token punctuation">(</span>pattern <span class="token builtin">string</span><span class="token punctuation">,</span> handler HandlerFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	engine<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Run start a http server</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>engine <span class="token operator">*</span>Engine<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span>addr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span>addr<span class="token punctuation">,</span> engine<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// New is the constructor of gee.Engine</span>
<span class="token keyword">func</span> <span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Engine <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Engine<span class="token punctuation">{</span>
		router<span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>HandlerFunc<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>HandlerFunc</code>：自定义的请求处理函数，交由调用方实现</li><li><code>Engine.router</code>：路由表，绑定<strong>请求方法及路径</strong>和对应的<strong>处理函数</strong></li><li><code>*Engine.addRoute</code>：添加新的路由映射到路由表中</li><li><code>*Engine.Run</code>：封装<code>http.ListenAndServe</code>函数</li><li><code>*Engine.ServeHTTP</code>：实现的<code>http.Handler</code>接口方法，根据请求获取对应的处理函数，路由表中不存在则返回 404</li></ul><h3 id="_3-2-main-go" tabindex="-1"><a class="header-anchor" href="#_3-2-main-go" aria-hidden="true">#</a> 3.2 main.go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;gee&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gee<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;URL.Path = %q\\n&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> req<span class="token punctuation">.</span>Header <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;Header[%q] = %q\\n&quot;</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程如下：</p><ol><li>创建 <code>gee.Engine</code>实例</li><li>注册路由，<code>/</code>和<code>/hello</code></li><li>启动 HTTP 服务</li></ol><p>启动并测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> http://localhost:8000
URL.path <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span>
$ <span class="token function">curl</span> http://localhost:8000/hello
Header<span class="token punctuation">[</span><span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span>  <span class="token punctuation">[</span><span class="token string">&quot;curl/8.0.1&quot;</span><span class="token punctuation">]</span>
Header<span class="token punctuation">[</span><span class="token string">&quot;Accept&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span>  <span class="token punctuation">[</span><span class="token string">&quot;*/*&quot;</span><span class="token punctuation">]</span>
Header<span class="token punctuation">[</span><span class="token string">&quot;Accept-Encoding&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span>  <span class="token punctuation">[</span><span class="token string">&quot;gzip&quot;</span><span class="token punctuation">]</span>
$ <span class="token function">curl</span> http://localhost:8000/path
<span class="token number">404</span> NOT FOUND: /path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-小结" tabindex="-1"><a class="header-anchor" href="#_4-小结" aria-hidden="true">#</a> 4. 小结</h2><p>现阶段 Gee 的雏形已完成，实现了以下功能：</p><ol><li>路由映射表</li><li>注册<strong>静态路由</strong></li><li>启动 HTTP 服务</li></ol><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,21),k={href:"https://geektutu.com/post/gee-day1.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://go.dev/doc/tutorial/workspaces",target:"_blank",rel:"noopener noreferrer"};function m(b,g){const s=i("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",d,[a("https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/Gee/day1-basic"),t(s)])]),r,n("ol",null,[n("li",null,[n("a",k,[a("https://geektutu.com/post/gee-day1.html"),t(s)])]),n("li",null,[n("a",v,[a("https://go.dev/doc/tutorial/workspaces"),t(s)])])])])}const q=p(l,[["render",m],["__file","01.1.http_basic.html.vue"]]);export{q as default};
