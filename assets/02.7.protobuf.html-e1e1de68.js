import{_ as o,Z as p,$ as i,a0 as n,a1 as s,a2 as e,a3 as t,H as c}from"./framework-09afcf0b.js";const l={},r={href:"https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day7-protobuf",target:"_blank",rel:"noopener noreferrer"},u=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DAY7-PROTOBUF
│  go.mod
│  go.work
│  go.work.sum
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
    │  go.sum
    │  http.go
    │  peers.go
    │
    ├─consistenthash
    │      consistenthash.go
    │      consistenthash_test.go
    │
    ├─geecachepb
    │      geecachepb.pb.go
    │      geecachepb.proto
    │
    ├─lru
    │      lru.go
    │      lru_test.go
    │
    └─singleflight
            singleflight.go

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-protobuf" tabindex="-1"><a class="header-anchor" href="#_1-protobuf" aria-hidden="true">#</a> 1. protobuf</h2><p>protobuf 即 Protocol Buffers，Google 开发的一种数据描述语言，是一种轻便高效的结构化数据存储格式，与语言、平台无关，可扩展可序列化。protobuf 以二进制方式存储，占用空间小。</p><p>protobuf 广泛地应用于远程过程调用(RPC) 的二进制传输，使用 protobuf 的目的非常简单，为了获得更高的性能。传输前使用 protobuf 编码，接收方再进行解码，可以显著地降低二进制传输的大小。另外一方面，protobuf 可非常适合传输结构化数据，便于通信字段的扩展。</p><p>使用 protobuf 一般分为以下 2 步：</p><ul><li>按照 protobuf 的语法，在 <code>.proto</code> 文件中定义数据结构，并使用 <code>protoc</code> 生成 Go 代码（<code>.proto</code> 文件是跨平台的，还可以生成 C、Java 等其他源码文件）。</li><li>在项目代码中引用生成的 Go 代码。</li></ul><h2 id="_2-使用-protobuf" tabindex="-1"><a class="header-anchor" href="#_2-使用-protobuf" aria-hidden="true">#</a> 2. 使用 protobuf</h2><h3 id="_2-1-定义消息类型" tabindex="-1"><a class="header-anchor" href="#_2-1-定义消息类型" aria-hidden="true">#</a> 2.1 定义消息类型</h3><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> geecachepb<span class="token punctuation">;</span>
<span class="token keyword">option</span> go_package <span class="token operator">=</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">message</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> group <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> key <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">Response</span> <span class="token punctuation">{</span>
  <span class="token builtin">bytes</span> value <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">service</span> <span class="token class-name">GroupCache</span> <span class="token punctuation">{</span>
  <span class="token keyword">rpc</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token class-name">Request</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">Response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Request</code>： <ul><li><code>group</code>：分组名</li><li><code>key</code>：key</li></ul></li><li><code>Response</code>：<code>bytes</code>，字节数组</li><li><code>GroupCache</code>：服务 <ul><li><code>Get</code>：服务接口</li></ul></li></ul><h3 id="_2-2-生成代码" tabindex="-1"><a class="header-anchor" href="#_2-2-生成代码" aria-hidden="true">#</a> 2.2 生成代码</h3>`,11),d=n("code",null,"protoc",-1),v={href:"https://github.com/protocolbuffers/protobuf/releases/tag/v24.4",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>安装插件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">install</span> google.golang.org/protobuf/cmd/protoc-gen-go@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ protoc <span class="token parameter variable">--go_out</span><span class="token operator">=</span>. *.proto
$ <span class="token function">ls</span> 
geecachepb.pb.go  geecachepb.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-使用接口" tabindex="-1"><a class="header-anchor" href="#_2-3-使用接口" aria-hidden="true">#</a> 2.3 使用接口</h3><p>修改<code>peers.go/PeerGetter </code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// PeerGetter is the interface that must be implemented by a peer</span>
<span class="token keyword">type</span> PeerGetter <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Get</span><span class="token punctuation">(</span>in <span class="token operator">*</span>pb<span class="token punctuation">.</span>Request<span class="token punctuation">,</span> out <span class="token operator">*</span>pb<span class="token punctuation">.</span>Response<span class="token punctuation">)</span> <span class="token builtin">error</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>httpGetter<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>in <span class="token operator">*</span>pb<span class="token punctuation">.</span>Request<span class="token punctuation">,</span> out <span class="token operator">*</span>pb<span class="token punctuation">.</span>Response<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token operator">...</span>
	bytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> io<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;reading response body: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> err <span class="token operator">=</span> proto<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;decoding respose body: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>Group<span class="token punctuation">)</span> <span class="token function">getFromPeer</span><span class="token punctuation">(</span>peer PeerGetter<span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ByteView<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	req <span class="token operator">:=</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>Request<span class="token punctuation">{</span>
		Group<span class="token punctuation">:</span> g<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
		Key<span class="token punctuation">:</span>   key<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	res <span class="token operator">:=</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>Response<span class="token punctuation">{</span><span class="token punctuation">}</span>
	err <span class="token operator">:=</span> peer<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> ByteView<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> ByteView<span class="token punctuation">{</span>b<span class="token punctuation">:</span> res<span class="token punctuation">.</span>Value<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-测试" tabindex="-1"><a class="header-anchor" href="#_3-测试" aria-hidden="true">#</a> 3. 测试</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./run.sh 
go: downloading github.com/golang/protobuf v1.5.0
go: downloading google.golang.org/protobuf v1.31.0
<span class="token number">2023</span>/10/11 07:48:54 geecache is running at http://localhost:8002
<span class="token number">2023</span>/10/11 07:48:54 geecache is running at http://localhost:8001
<span class="token number">2023</span>/10/11 07:48:54 geecache is running at http://localhost:8003
<span class="token number">2023</span>/10/11 07:48:54 fontend server is running at http://localhost:9999
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> start <span class="token builtin class-name">test</span>
<span class="token number">2023</span>/10/11 07:48:55 <span class="token punctuation">[</span>Server http://localhost:8003<span class="token punctuation">]</span> Pick peer http://localhost:8001
<span class="token number">2023</span>/10/11 07:48:55 <span class="token punctuation">[</span>Server http://localhost:8001<span class="token punctuation">]</span> GET /geecache/scores/Tom
<span class="token number">2023</span>/10/11 07:48:55 <span class="token punctuation">[</span>SlowDB<span class="token punctuation">]</span> search key Tom
<span class="token number">630630</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,12),b={href:"https://geektutu.com/post/geecache-day7.html",target:"_blank",rel:"noopener noreferrer"};function m(g,h){const a=c("ExternalLinkIcon");return p(),i("div",null,[n("p",null,[n("a",r,[s("https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day7-protobuf"),e(a)])]),u,n("p",null,[s("下载"),d,s("："),n("a",v,[s("https://github.com/protocolbuffers/protobuf/releases/tag/v24.4"),e(a)])]),k,n("ol",null,[n("li",null,[n("a",b,[s("https://geektutu.com/post/geecache-day7.html"),e(a)])])])])}const _=o(l,[["render",m],["__file","02.7.protobuf.html.vue"]]);export{_ as default};