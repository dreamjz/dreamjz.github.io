import{_ as e,Z as o,$ as p,a0 as n,a1 as s,a2 as t,a3 as c,H as i}from"./framework-09afcf0b.js";const l={},u=c(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>go-homedir</code>顾名思义用来获取用户的主目录。实际上使用<code>os/user</code>也可以获取这个信息</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;os/user&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	u<span class="token punctuation">,</span> err <span class="token operator">:=</span> user<span class="token punctuation">.</span><span class="token function">Current</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v&quot;</span><span class="token punctuation">,</span> u<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&amp;user.User{Uid:&quot;1000&quot;, Gid:&quot;1000&quot;, Username:&quot;username&quot;, Name:&quot;username&quot;, HomeDir:&quot;/home/username&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那为什么需要<code>go-homedir</code>？</p><p>在Darwin系统上,标准库<code>os/user</code>的使用需要cgo。所以，任何使用<code>os/user</code>的代码都不能交叉编译。但是，大多数情况下，使用<code>os/user</code>的目的是为了获取主目录。因此，<code>go-homedir</code>出现了</p><h2 id="快速使用-quick-start" tabindex="-1"><a class="header-anchor" href="#快速使用-quick-start" aria-hidden="true">#</a> 快速使用 quick start</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go get -u github.com/mitchellh/go-homedir v1.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/mitchellh/go-homedir&quot;</span>
	<span class="token string">&quot;log&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dir<span class="token punctuation">,</span> err <span class="token operator">:=</span> homedir<span class="token punctuation">.</span><span class="token function">Dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Home dir:&quot;</span><span class="token punctuation">,</span> dir<span class="token punctuation">)</span>

	dir <span class="token operator">=</span> <span class="token string">&quot;~/dir&quot;</span>
	expandedDir<span class="token punctuation">,</span> err <span class="token operator">:=</span> homedir<span class="token punctuation">.</span><span class="token function">Expand</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Expand of %s is :%s\\n&quot;</span><span class="token punctuation">,</span> dir<span class="token punctuation">,</span> expandedDir<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>go-homedir</code>有两个功能：</p><ul><li><code>Dir</code>：获取用户主目录</li><li><code>Expand</code>:将路径中的第一个<code>~</code>扩展成用户主目录</li></ul><h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法" aria-hidden="true">#</a> 高级用法</h2><p>由于<code>Dir</code>的调用可能涉及一些系统调用和外部执行命令，多次调用耗费性能。所以<code>go-homedir</code>提供了缓存功能，默认情况下，缓存是开启的，可以使用<code>DisableCache</code>设置<code>false</code>来关闭</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/mitchellh/go-homedir&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	homedir<span class="token punctuation">.</span>DisableCache <span class="token operator">=</span> <span class="token boolean">false</span>

	dir<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> homedir<span class="token punctuation">.</span><span class="token function">Dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Home:&quot;</span><span class="token punctuation">,</span> dir<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用缓存时，如过程序中修改了主目录，再次调用<code>Dir</code>返回的是之前已经缓存的目录。若需获取新的主目录，可以先调用<code>Reset</code>清除缓存</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><p><code>go-homedir</code>源码只有一个文件homedir.go，大概看下<code>Dir</code>的实现，去掉缓存相关的Code</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> result <span class="token builtin">string</span>
  <span class="token keyword">var</span> err <span class="token builtin">error</span>
  <span class="token keyword">if</span> runtime<span class="token punctuation">.</span>GOOS <span class="token operator">==</span> <span class="token string">&quot;windows&quot;</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">,</span> err <span class="token operator">=</span> <span class="token function">dirWindows</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// Unix-like system, so just assume Unix</span>
    result<span class="token punctuation">,</span> err <span class="token operator">=</span> <span class="token function">dirUnix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> err
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断当前系统是<code>windows</code>还是<code>unix-like</code>,分别调用不同的方法获取homedir</p><p>先看windows的</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">dirWindows</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// First prefer the HOME environmental variable</span>
	<span class="token keyword">if</span> home <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;HOME&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> home <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> home<span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Prefer standard environment variable USERPROFILE</span>
	<span class="token keyword">if</span> home <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;USERPROFILE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> home <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> home<span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	drive <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;HOMEDRIVE&quot;</span><span class="token punctuation">)</span>
	path <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;HOMEPATH&quot;</span><span class="token punctuation">)</span>
	home <span class="token operator">:=</span> drive <span class="token operator">+</span> path
	<span class="token keyword">if</span> drive <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token operator">||</span> path <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;HOMEDRIVE, HOMEPATH, or USERPROFILE are blank&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> home<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程如下：</p><ul><li>读取环境环境变量<code>HOME</code>,不为空则返回</li><li>读取环境变量<code>USERPROFILE</code>，不为空则返回</li><li>读取环境变量<code>HOMEDRIVE</code>,<code>HOMEPATH</code>,均不为空则拼接后返回</li></ul><p>Unix-like</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">dirUnix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	homeEnv <span class="token operator">:=</span> <span class="token string">&quot;HOME&quot;</span>
	<span class="token keyword">if</span> runtime<span class="token punctuation">.</span>GOOS <span class="token operator">==</span> <span class="token string">&quot;plan9&quot;</span> <span class="token punctuation">{</span>
		<span class="token comment">// On plan9, env vars are lowercase.</span>
		homeEnv <span class="token operator">=</span> <span class="token string">&quot;home&quot;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// First prefer the HOME environmental variable</span>
	<span class="token keyword">if</span> home <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span>homeEnv<span class="token punctuation">)</span><span class="token punctuation">;</span> home <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> home<span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> stdout bytes<span class="token punctuation">.</span>Buffer

	<span class="token comment">// If that fails, try OS specific commands</span>
	<span class="token keyword">if</span> runtime<span class="token punctuation">.</span>GOOS <span class="token operator">==</span> <span class="token string">&quot;darwin&quot;</span> <span class="token punctuation">{</span>
		cmd <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;sh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">\`dscl -q . -read /Users/&quot;$(whoami)&quot; NFSHomeDirectory | sed &#39;s/^[^ ]*: //&#39;\`</span><span class="token punctuation">)</span>
		cmd<span class="token punctuation">.</span>Stdout <span class="token operator">=</span> <span class="token operator">&amp;</span>stdout
		<span class="token keyword">if</span> err <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			result <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">TrimSpace</span><span class="token punctuation">(</span>stdout<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> result <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> result<span class="token punctuation">,</span> <span class="token boolean">nil</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		cmd <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;getent&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;passwd&quot;</span><span class="token punctuation">,</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">Getuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		cmd<span class="token punctuation">.</span>Stdout <span class="token operator">=</span> <span class="token operator">&amp;</span>stdout
		<span class="token keyword">if</span> err <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token comment">// If the error is ErrNotFound, we ignore it. Otherwise, return it.</span>
			<span class="token keyword">if</span> err <span class="token operator">!=</span> exec<span class="token punctuation">.</span>ErrNotFound <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> err
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> passwd <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">TrimSpace</span><span class="token punctuation">(</span>stdout<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> passwd <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
				<span class="token comment">// username:password:uid:gid:gecos:home:shell</span>
				passwdParts <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">SplitN</span><span class="token punctuation">(</span>passwd<span class="token punctuation">,</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
				<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>passwdParts<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> passwdParts<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// If all else fails, try the shell</span>
	stdout<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	cmd <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;sh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cd &amp;&amp; pwd&quot;</span><span class="token punctuation">)</span>
	cmd<span class="token punctuation">.</span>Stdout <span class="token operator">=</span> <span class="token operator">&amp;</span>stdout
	<span class="token keyword">if</span> err <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>

	result <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">TrimSpace</span><span class="token punctuation">(</span>stdout<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> result <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;blank output when reading home directory&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程如下：</p><ul><li>读取环境变量<code>HOME</code>（<code>plan9</code>系统上为<code>home</code>）,不为空则返回</li><li>使用<code>getnet</code>命令查看系统的数据库中的相关记录，我们直到<code>passwd</code>文件中存储了用户信息，包括用户的主目录。使用<code>getnet</code>查看<code>passwd</code>中当前用户的记录，然后找到主目录返回</li><li>若上个步骤失败，<code>cd</code>不加参数可以直接切换到用户主目录，而<code>pwd</code>可显示当前目录，结合两者可以返回用户主目录</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,28),r={href:"https://github.com/mitchellh/go-homedir",target:"_blank",rel:"noopener noreferrer"},d={href:"https://darjun.github.io/2020/01/14/godailylib/go-homedir/",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const a=i("ExternalLinkIcon");return o(),p("div",null,[u,n("ol",null,[n("li",null,[n("a",r,[s("go-homedir"),t(a)]),s(" github repo")]),n("li",null,[n("a",d,[s("go-homedir"),t(a)]),s(" darjun blog")])])])}const g=e(l,[["render",k],["__file","go-homedir.html.vue"]]);export{g as default};
