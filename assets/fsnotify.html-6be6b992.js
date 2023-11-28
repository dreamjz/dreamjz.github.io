import{_ as o,Z as p,$ as c,a0 as n,a1 as s,a2 as t,a3 as e,H as i}from"./framework-dee406ed.js";const l={},u=e(`<h2 id="introduction-简介" tabindex="-1"><a class="header-anchor" href="#introduction-简介" aria-hidden="true">#</a> Introduction 简介</h2><p>在上一篇介绍<a href="/note/golang/golang-daily-lib/viper">viper</a>的文章中，viper内部使用了<code>fsnotify</code>库实现监听文件修改并自动重新加载</p><p><code>fsnotify</code>是一个基于Go的跨平台文件系统通知库（Cross-platform file system notifications for Go）</p><h2 id="quick-start-快速开始" tabindex="-1"><a class="header-anchor" href="#quick-start-快速开始" aria-hidden="true">#</a> Quick start 快速开始</h2><p>在go module中导入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go get -u github.com/fsnotify/fsnotify latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/fsnotify/fsnotify&quot;</span>
	<span class="token string">&quot;log&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	watcher<span class="token punctuation">,</span> err <span class="token operator">:=</span> fsnotify<span class="token punctuation">.</span><span class="token function">NewWatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;create new watcher failed:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> watcher<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> event<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>watcher<span class="token punctuation">.</span>Events<span class="token punctuation">:</span>
				<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">}</span>
				log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s : %s\\n&quot;</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> event<span class="token punctuation">.</span>Op<span class="token punctuation">)</span>
			<span class="token keyword">case</span> err<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>watcher<span class="token punctuation">.</span>Errors<span class="token punctuation">:</span>
				<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">}</span>
				log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;error:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	err <span class="token operator">=</span> watcher<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;../resources&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;add watch path failed:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token operator">&lt;-</span>done
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动程序后在<code>../resources</code>目录下执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> test_fs.txt
<span class="token builtin class-name">echo</span> <span class="token string">&#39;test&#39;</span> <span class="token operator">&gt;&gt;</span> test_fs.txt
<span class="token function">mv</span> test_fs.txt fs.txt
<span class="token function">rm</span> fs.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go run ./main.go
2021/10/26 10:21:11 ../resources/test_fs.txt : CREATE
2021/10/26 10:21:11 ../resources/test_fs.txt : CHMOD
2021/10/26 10:21:11 ../resources/test_fs.txt : WRITE
2021/10/26 10:21:11 ../resources/test_fs.txt : RENAME
2021/10/26 10:21:11 ../resources/fs.txt : CREATE
2021/10/26 10:21:11 ../resources/fs.txt : REMOVE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值得注意的是：</p><ul><li>重命名触发了两个事件：原文件的<code>RENAME</code>和新文件的<code>CREATE</code></li><li><code>touch</code>创建文件触发了两个事件:<code>CREATE</code>和<code>CHMOD</code></li></ul><p><code>fsnotify</code>的使用比较简单：</p><ul><li>调用<code>NewWatcher</code>创建监听器</li><li>调用监听器的<code>Add</code>方法添加监听路径</li><li>若目录/文件由事件产生，从监听器的<code>Events</code>通道取出事件；出现错误，从<code>Errors</code>通道取出错误</li><li>由于<code>fsnotify</code>使用了操作系统接口，监听器中保存了系统资源的句柄，使用之后需要关闭</li></ul><h2 id="event-事件" tabindex="-1"><a class="header-anchor" href="#event-事件" aria-hidden="true">#</a> Event 事件</h2><p>上文示例中出现的事件是<code>fsnotify.Event</code>类型：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// fsnotify.go</span>
<span class="token comment">// Event represents a single file system notification.</span>
<span class="token keyword">type</span> Event <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span> <span class="token comment">// Relative path to the file or directory.</span>
	Op   Op     <span class="token comment">// File operation that triggered the event.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>Name</code>为相关的文件/目录，<code>Op</code>为触发事件的文件操作</p><p><code>Op</code>共有五种取值：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// fsnotify.go</span>
<span class="token comment">// Op describes a set of file operations.</span>
<span class="token keyword">type</span> Op <span class="token builtin">uint32</span>

<span class="token comment">// These are the generalized file operations that can trigger a notification.</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
	Create Op <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token boolean">iota</span>
	Write
	Remove
	Rename
	Chmod
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到<code>Op</code>按照位存储的，可以通过<code>&amp;</code>来判断事件:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> event<span class="token punctuation">.</span>Op <span class="token operator">&amp;</span> fsnotify<span class="token punctuation">.</span>Write <span class="token operator">==</span> fsnotify<span class="token punctuation">.</span>Write<span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printlm</span><span class="token punctuation">(</span><span class="token string">&quot;Op is write &quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是使用时无需判断，在<code>Op</code>的<code>String</code>方法中已经处理:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>op Op<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token comment">// Use a buffer for efficient string concatenation</span>
	<span class="token keyword">var</span> buffer bytes<span class="token punctuation">.</span>Buffer

	<span class="token keyword">if</span> op<span class="token operator">&amp;</span>Create <span class="token operator">==</span> Create <span class="token punctuation">{</span>
		buffer<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;|CREATE&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> op<span class="token operator">&amp;</span>Remove <span class="token operator">==</span> Remove <span class="token punctuation">{</span>
		buffer<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;|REMOVE&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> op<span class="token operator">&amp;</span>Write <span class="token operator">==</span> Write <span class="token punctuation">{</span>
		buffer<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;|WRITE&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> op<span class="token operator">&amp;</span>Rename <span class="token operator">==</span> Rename <span class="token punctuation">{</span>
		buffer<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;|RENAME&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> op<span class="token operator">&amp;</span>Chmod <span class="token operator">==</span> Chmod <span class="token punctuation">{</span>
		buffer<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;|CHMOD&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> buffer<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> buffer<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token comment">// Strip leading pipe</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-应用" tabindex="-1"><a class="header-anchor" href="#application-应用" aria-hidden="true">#</a> Application 应用</h2>`,26),r=n("code",null,"fsnotify",-1),d={href:"https://pkg.go.dev/github.com/fsnotify/fsnotify@v1.5.1",target:"_blank",rel:"noopener noreferrer"},k=e(`<p>这里看下<code>viper.WatchConfig</code>是是如何使用<code>fsnotify</code> 的:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// viper.go</span>
<span class="token keyword">func</span> <span class="token function">WatchConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> v<span class="token punctuation">.</span><span class="token function">WatchConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>v <span class="token operator">*</span>Viper<span class="token punctuation">)</span> <span class="token function">WatchConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	initWG <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">{</span><span class="token punctuation">}</span>
	initWG<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		watcher<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">newWatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">defer</span> watcher<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// we have to watch the entire directory to pick up renames/atomic saves in a cross-platform way</span>
		filename<span class="token punctuation">,</span> err <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">getConfigFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;error: %v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			initWG<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>

		configFile <span class="token operator">:=</span> filepath<span class="token punctuation">.</span><span class="token function">Clean</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
		configDir<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> filepath<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>configFile<span class="token punctuation">)</span>
		realConfigFile<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> filepath<span class="token punctuation">.</span><span class="token function">EvalSymlinks</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>

		eventsWG <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">{</span><span class="token punctuation">}</span>
		eventsWG<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> event<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>watcher<span class="token punctuation">.</span>Events<span class="token punctuation">:</span>
					<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span> <span class="token comment">// &#39;Events&#39; channel is closed</span>
						eventsWG<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
						<span class="token keyword">return</span>
					<span class="token punctuation">}</span>
					currentConfigFile<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> filepath<span class="token punctuation">.</span><span class="token function">EvalSymlinks</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
					<span class="token comment">// we only care about the config file with the following cases:</span>
					<span class="token comment">// 1 - if the config file was modified or created</span>
					<span class="token comment">// 2 - if the real path to the config file changed (eg: k8s ConfigMap replacement)</span>
					<span class="token keyword">const</span> writeOrCreateMask <span class="token operator">=</span> fsnotify<span class="token punctuation">.</span>Write <span class="token operator">|</span> fsnotify<span class="token punctuation">.</span>Create
					<span class="token keyword">if</span> <span class="token punctuation">(</span>filepath<span class="token punctuation">.</span><span class="token function">Clean</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>Name<span class="token punctuation">)</span> <span class="token operator">==</span> configFile <span class="token operator">&amp;&amp;</span>
						event<span class="token punctuation">.</span>Op<span class="token operator">&amp;</span>writeOrCreateMask <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span>
						<span class="token punctuation">(</span>currentConfigFile <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> currentConfigFile <span class="token operator">!=</span> realConfigFile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						realConfigFile <span class="token operator">=</span> currentConfigFile
						err <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">ReadInConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
						<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
							log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;error reading config file: %v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
						<span class="token punctuation">}</span>
						<span class="token keyword">if</span> v<span class="token punctuation">.</span>onConfigChange <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
							v<span class="token punctuation">.</span><span class="token function">onConfigChange</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> filepath<span class="token punctuation">.</span><span class="token function">Clean</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>Name<span class="token punctuation">)</span> <span class="token operator">==</span> configFile <span class="token operator">&amp;&amp;</span>
						event<span class="token punctuation">.</span>Op<span class="token operator">&amp;</span>fsnotify<span class="token punctuation">.</span>Remove<span class="token operator">&amp;</span>fsnotify<span class="token punctuation">.</span>Remove <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
						eventsWG<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
						<span class="token keyword">return</span>
					<span class="token punctuation">}</span>

				<span class="token keyword">case</span> err<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>watcher<span class="token punctuation">.</span>Errors<span class="token punctuation">:</span>
					<span class="token keyword">if</span> ok <span class="token punctuation">{</span> <span class="token comment">// &#39;Errors&#39; channel is not closed</span>
						log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;watcher error: %v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
					<span class="token punctuation">}</span>
					eventsWG<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		watcher<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>configDir<span class="token punctuation">)</span>
		initWG<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// done initializing the watch in this go routine, so the parent routine can move on...</span>
		eventsWG<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// now, wait for event loop to end in this go-routine...</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	initWG<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// make sure that the go routine above fully ended before returning</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用流程类似：</p><ul><li>使用<code>NewWatcher</code>创建监听器</li><li><code>v.getConfigFile</code>方法获取配置文件路径，并提取文件名，目录，链接指向路径（若配置文件是一个link）</li><li>使用<code>watcher.Add</code>监听配置目录，并启用新的goroutine处理事件</li></ul><p><code>WatchConfig</code>不能阻塞主goroutine,故创建监听器是在新的goroutine中进行；方法中由两个<code>sync.WaitGroup</code>变量，<code>initWG</code>保证监听器的初始化,<code>eventsWG</code>在events通道关闭，配置删除或遇到错误时退出循环</p><p>之后就是核心代码：</p><ul><li>事件触发后，判断是否是关于配置文件的事件且仅处理<code>Create</code>和<code>Write</code>事件</li><li>调用<code>v.ReadInConfig</code>加载配置(配置文件的link发生改变也会触发重新加载)</li><li>若注册事件回调函数，则以事件为参数调用回调参数</li></ul><h2 id="conclusion-总结" tabindex="-1"><a class="header-anchor" href="#conclusion-总结" aria-hidden="true">#</a> Conclusion 总结</h2><p><code>fsnotify</code>的接口非常简单直接，所有系统相关的复杂性都被封装起来了。这也是我们平时设计模块和接口时可以参考的案例</p><h2 id="reference-参考" tabindex="-1"><a class="header-anchor" href="#reference-参考" aria-hidden="true">#</a> Reference 参考</h2>`,10),v={href:"https://pkg.go.dev/github.com/fsnotify/fsnotify@v1.5.1",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/fsnotify/fsnotify",target:"_blank",rel:"noopener noreferrer"},f={href:"https://darjun.github.io/2020/01/19/godailylib/fsnotify/",target:"_blank",rel:"noopener noreferrer"};function b(g,h){const a=i("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[r,s("的应用比较广泛，在"),n("a",d,[s("godoc"),t(a)]),s("页面上可以看到其被超过3000个项目引用")]),k,n("ol",null,[n("li",null,[n("a",v,[s("fsnotify"),t(a)]),s(" godocs")]),n("li",null,[n("a",m,[s("fsnotify"),t(a)]),s(" github-repo")]),n("li",null,[n("a",f,[s("fsnotify"),t(a)]),s(" darjun/blog")])])])}const w=o(l,[["render",b],["__file","fsnotify.html.vue"]]);export{w as default};
