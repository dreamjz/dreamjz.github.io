import{_ as o,X as i,Y as p,Z as n,$ as s,a0 as e,a1 as t,F as l}from"./framework-8cb7ec75.js";const c={},u=n("h2",{id:"introduction-简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#introduction-简介","aria-hidden":"true"},"#"),s(" Introduction 简介")],-1),r=n("code",null,"log",-1),d=n("code",null,"logrus",-1),k={href:"https://github.com/sirupsen/logrus",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"log",-1),m=t(`<h2 id="quick-start-快速开始" tabindex="-1"><a class="header-anchor" href="#quick-start-快速开始" aria-hidden="true">#</a> Quick Start 快速开始</h2><p>在 go module 中导入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go get -u github.com/sirupsen/logrus latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// logrus/quick-start/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/sirupsen/logrus&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	logrus<span class="token punctuation">.</span><span class="token function">SetLevel</span><span class="token punctuation">(</span>logrus<span class="token punctuation">.</span>TraceLevel<span class="token punctuation">)</span>

	log<span class="token punctuation">.</span><span class="token function">Trace</span><span class="token punctuation">(</span><span class="token string">&quot;Something very low level.&quot;</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token string">&quot;Useful debugging information.&quot;</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;Something noteworthy happened!&quot;</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span><span class="token function">Warn</span><span class="token punctuation">(</span><span class="token string">&quot;You should probably take a look at this.&quot;</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Something failed but I&#39;m not quitting.&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// Calls os.Exit(1) after logging</span>
log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;Bye.&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// Calls panic() after logging</span>
log<span class="token punctuation">.</span><span class="token function">Panic</span><span class="token punctuation">(</span><span class="token string">&quot;I&#39;m bailing.&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
         
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/logrus-quick-start.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>logrus</code>的使用比较简单，与<code>log</code>相比其支持更多的日志级别：</p><ul><li><code>Panic</code>:记录日志之后调用<code>panic</code></li><li><code>Fatal</code>:致命错误，出现错误时程序无法运转。输出日志后程序退出</li><li><code>Error</code>:错误日志，需要查看错误原因</li><li><code>Warn</code>:警告信息，提醒开发人员</li><li><code>Info</code>:关键操作，核心流程的日志</li><li><code>Debug</code>:一般程序中输出的调试信息</li><li><code>Trace</code>:最低级别的日志</li></ul><p>上述的日志级别由上至下依次降低，<code>Trace</code>最低，<code>Panic</code>最高。<code>logrus.SetLevel</code>可以设置输入的日志级别，低于此日志级别不会输出，默认的级别为<code>Info</code></p><h2 id="定制" tabindex="-1"><a class="header-anchor" href="#定制" aria-hidden="true">#</a> 定制</h2><h3 id="输出文件名" tabindex="-1"><a class="header-anchor" href="#输出文件名" aria-hidden="true">#</a> 输出文件名</h3><p>调用<code>logrus.SetReporCaller(true)</code>，将会在日志中添加文件名和函数名</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// report-caller/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;github.com/sirupsen/logrus&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	logrus<span class="token punctuation">.</span><span class="token function">SetReportCaller</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

	logrus<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;Something noteworthy happened!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go                                                       
INFO<span class="token punctuation">[</span>0000<span class="token punctuation">]</span>/home/username/go-daily-lib-note/logrus/report-caller/main.go:8 main.main<span class="token punctuation">(</span><span class="token punctuation">)</span> Something noteworthy happened<span class="token operator">!</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加字段" tabindex="-1"><a class="header-anchor" href="#添加字段" aria-hidden="true">#</a> 添加字段</h3><p>有时需要在输出中添加字段，可以通过<code>logrus.WithField</code>和<code>logrus.WithFields</code>实现，<code>logrus.WithFields</code>接收一个<code>logrus.Fields</code>类型的参数，底层实际为<code>map[string]interface{}</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// logrus/logrus.go</span>
<span class="token comment">// Fields type, used to pass to \`WithFields\`.</span>
<span class="token keyword">type</span> Fields <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// with-feild/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;github.com/sirupsen/logrus&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	logrus<span class="token punctuation">.</span><span class="token function">WithFields</span><span class="token punctuation">(</span>logrus<span class="token punctuation">.</span>Fields<span class="token punctuation">{</span>
		<span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span>   <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;kesa&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;Info message&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go
INFO<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> Info message                                  <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>kesa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要在一个函数中所有日志都需要添加某些字段，可以使用<code>WithFields</code>的返回值。例如在Web请求处理函数中，日志中需要加上<code>user_id</code>和<code>ip</code>:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// with-feild/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;github.com/sirupsen/logrus&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
	<span class="token function">loggerInFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">loggerInFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	requestLogger <span class="token operator">:=</span> logrus<span class="token punctuation">.</span><span class="token function">WithFields</span><span class="token punctuation">(</span>logrus<span class="token punctuation">.</span>Fields<span class="token punctuation">{</span>
		<span class="token string">&quot;user_id&quot;</span><span class="token punctuation">:</span> <span class="token number">11001</span><span class="token punctuation">,</span>
		<span class="token string">&quot;ip&quot;</span><span class="token punctuation">:</span>      <span class="token string">&quot;192.168.2.231&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	requestLogger<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;info msg&quot;</span><span class="token punctuation">)</span>
	requestLogger<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;error msg&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>INFO<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> info msg                                      <span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token number">192.168</span>.2.231 <span class="token assign-left variable">user_id</span><span class="token operator">=</span><span class="token number">11001</span>
ERRO<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> error msg                                     <span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token number">192.168</span>.2.231 <span class="token assign-left variable">user_id</span><span class="token operator">=</span><span class="token number">11001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>WithField</code>返回一个<code>logrus.Entry</code>类型的值，将保存用户设置的<code>logrus.Fields</code>保存下来，调用<code>Entry</code>的方法输出日志时，设置的<code>Fields</code>也会被输出</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// logrus/entry.go</span>
<span class="token keyword">type</span> Entry <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Logger <span class="token operator">*</span>Logger

	<span class="token comment">// Contains all the fields set by the user.</span>
	Data Fields

	<span class="token comment">// Time at which the log entry was created</span>
	Time time<span class="token punctuation">.</span>Time

	<span class="token comment">// Level the log entry was logged at: Trace, Debug, Info, Warn, Error, Fatal or Panic</span>
	<span class="token comment">// This field will be set on entry firing and the value will be equal to the one in Logger struct field.</span>
	Level Level

	<span class="token comment">// Calling method, with package name</span>
	Caller <span class="token operator">*</span>runtime<span class="token punctuation">.</span>Frame

	<span class="token comment">// Message passed to Trace, Debug, Info, Warn, Error, Fatal or Panic</span>
	Message <span class="token builtin">string</span>

	<span class="token comment">// When formatter is called in entry.log(), a Buffer may be set to entry</span>
	Buffer <span class="token operator">*</span>bytes<span class="token punctuation">.</span>Buffer

	<span class="token comment">// Contains the context set by the user. Useful for hook processing etc.</span>
	Context context<span class="token punctuation">.</span>Context

	<span class="token comment">// err may contain a field formatting error</span>
	err <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出重定向" tabindex="-1"><a class="header-anchor" href="#输出重定向" aria-hidden="true">#</a> 输出重定向</h3><p>日志默认输出到<code>io.Stderr</code>,可以调用<code>logrus.SetOutput</code>传入一个<code>io.Writer</code>参数。后续调用相关方法写入到<code>io.Writer</code>中。和<code>log</code>类似，我们传入一个<code>io.MultiWriter</code>同时将日志写入文本文件，标准输出和<code>bytes.Buffer</code>中</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;bytes&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/sirupsen/logrus&quot;</span>
	<span class="token string">&quot;io&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	writer1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">{</span><span class="token punctuation">}</span>
	writer2 <span class="token operator">:=</span> os<span class="token punctuation">.</span>Stdout
	writer3<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;./output_redirection.log&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_WRONLY<span class="token operator">|</span>os<span class="token punctuation">.</span>O_CREATE<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;create file failed :&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	logrus<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>io<span class="token punctuation">.</span><span class="token function">MultiWriter</span><span class="token punctuation">(</span>writer3<span class="token punctuation">,</span> writer2<span class="token punctuation">,</span> writer1<span class="token punctuation">)</span><span class="token punctuation">)</span>
	logrus<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;Info message&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;BUF:&quot;</span><span class="token punctuation">,</span> writer1<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go 
<span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token string">&quot;2021-10-28T14:17:06+08:00&quot;</span> <span class="token assign-left variable">level</span><span class="token operator">=</span>info <span class="token assign-left variable">msg</span><span class="token operator">=</span><span class="token string">&quot;Info message&quot;</span>
BUF: <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token string">&quot;2021-10-28T14:17:06+08:00&quot;</span> <span class="token assign-left variable">level</span><span class="token operator">=</span>info <span class="token assign-left variable">msg</span><span class="token operator">=</span><span class="token string">&quot;Info message&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到此处的日志格式为 plain text,而[quick start](#Quick Start 快速开始)中的日志为带颜色的格式;<code>logrus</code>日志输出时会检测输出是否为TTY(Teletypewriter,linux终端),如果是则会输出带颜色的格式(<code>quick-start</code>中输出到linux的标准输出，所以是彩色格式)</p><p>上例中使用了多个输出：标准输出，<code>bytes.Buffer</code>，文件,故输出格式为plain text</p><p>也可以强制使用带颜色的格式，<code>logrus.SetFormatter</code>指定格式：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>logrus<span class="token punctuation">.</span><span class="token function">SetFormatter</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>logrus<span class="token punctuation">.</span>TextFormatter<span class="token punctuation">{</span>
		ForceColors<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义" aria-hidden="true">#</a> 自定义</h3><p><strong>考虑到易用性，库一般会使用默认值创建一个对象，包外层的函数一般是操作这个默认对象</strong></p><p>例如<code>log</code>中的<code>std</code>,<code>flag</code>中的<code>CommandLine</code>,这个技巧在很多库中都有应用，<code>logrus</code>也是如此：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// logrus/exported.go</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
	<span class="token comment">// std is the name of the standard logger in stdlib \`log\`</span>
	std <span class="token operator">=</span> <span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">StandardLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Logger <span class="token punctuation">{</span>
	<span class="token keyword">return</span> std
<span class="token punctuation">}</span>

<span class="token comment">// SetOutput sets the standard logger output.</span>
<span class="token keyword">func</span> <span class="token function">SetOutput</span><span class="token punctuation">(</span>out io<span class="token punctuation">.</span>Writer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// SetFormatter sets the standard logger formatter.</span>
<span class="token keyword">func</span> <span class="token function">SetFormatter</span><span class="token punctuation">(</span>formatter Formatter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token punctuation">.</span><span class="token function">SetFormatter</span><span class="token punctuation">(</span>formatter<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// SetReportCaller sets whether the standard logger will include the calling</span>
<span class="token comment">// method as a field.</span>
<span class="token keyword">func</span> <span class="token function">SetReportCaller</span><span class="token punctuation">(</span>include <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token punctuation">.</span><span class="token function">SetReportCaller</span><span class="token punctuation">(</span>include<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// SetLevel sets the standard logger level.</span>
<span class="token keyword">func</span> <span class="token function">SetLevel</span><span class="token punctuation">(</span>level Level<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token punctuation">.</span><span class="token function">SetLevel</span><span class="token punctuation">(</span>level<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可创建自定义的<code>logrus.Logger</code>对象：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>myLogger <span class="token operator">:=</span> logrus<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="日志格式" tabindex="-1"><a class="header-anchor" href="#日志格式" aria-hidden="true">#</a> 日志格式</h3><h4 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h4><p><code>logrus</code>支持两种日志格式，文本和JSON，默认为文本格式，可以通过<code>logrus.SetFormatter</code>设置：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// set-formatter.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;github.com/sirupsen/logrus&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	logrus<span class="token punctuation">.</span><span class="token function">SetFormatter</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>logrus<span class="token punctuation">.</span>JSONFormatter<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

	logrus<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;Info message&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>% go run ./main.go 
<span class="token punctuation">{</span><span class="token string">&quot;level&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;info&quot;</span>,<span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Info message&quot;</span>,<span class="token string">&quot;time&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;2021-10-28T15:08:48+08:00&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义格式" tabindex="-1"><a class="header-anchor" href="#自定义格式" aria-hidden="true">#</a> 自定义格式</h4><p>实现<code>logrus.Formatter</code>可以实现自定义的格式：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// logrus/formatter.go</span>
<span class="token keyword">type</span> Formatter <span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token function">Format</span><span class="token punctuation">(</span><span class="token operator">*</span>Entry<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置钩子(Hook)</p><p>可以为<code>logrus</code>设置钩子，每条日志输出前都会执行钩子的特定方法。所以可以添加输出字段、根据级别将日志输出到不同的目的地。<code>logrus</code>也内置了一个<code>syslog</code>的钩子，将日志输出<code>syslog</code>中。这里我们实现一个钩子，在输出的日志中增加一个<code>app=logrus_note</code>字段</p><p>首先实现<code>logrus.Hook</code>接口</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// A hook to be fired when logging on the logging levels returned from</span>
<span class="token comment">// \`Levels()\` on your implementation of the interface. Note that this is not</span>
<span class="token comment">// fired in a goroutine or a channel with workers, you should handle such</span>
<span class="token comment">// functionality yourself if your call is non-blocking and you don&#39;t wish for</span>
<span class="token comment">// the logging calls for levels returned from \`Levels()\` to block.</span>
<span class="token keyword">type</span> Hook <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Levels</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Level
	<span class="token function">Fire</span><span class="token punctuation">(</span><span class="token operator">*</span>Entry<span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Levels</code>方法返回感兴趣的日志级别，输出其他日志不会触发钩子，<code>Fire</code>是日志输出前调用的钩子方法</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/sirupsen/logrus&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> AppHook <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	AppName <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ah <span class="token operator">*</span>AppHook<span class="token punctuation">)</span> <span class="token function">Levels</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>logrus<span class="token punctuation">.</span>Level <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>logrus<span class="token punctuation">.</span>Level<span class="token punctuation">{</span>logrus<span class="token punctuation">.</span>InfoLevel<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ah <span class="token operator">*</span>AppHook<span class="token punctuation">)</span> <span class="token function">Fire</span><span class="token punctuation">(</span>entry <span class="token operator">*</span>logrus<span class="token punctuation">.</span>Entry<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Fire !&quot;</span><span class="token punctuation">)</span>
	entry<span class="token punctuation">.</span>Data<span class="token punctuation">[</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> ah<span class="token punctuation">.</span>AppName
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	myHook <span class="token operator">:=</span> <span class="token operator">&amp;</span>AppHook<span class="token punctuation">{</span>AppName<span class="token punctuation">:</span> <span class="token string">&quot;logrus_note&quot;</span><span class="token punctuation">}</span>
	logrus<span class="token punctuation">.</span><span class="token function">AddHook</span><span class="token punctuation">(</span>myHook<span class="token punctuation">)</span>

	logrus<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;info message&quot;</span><span class="token punctuation">)</span>
	logrus<span class="token punctuation">.</span><span class="token function">Warn</span><span class="token punctuation">(</span><span class="token string">&quot;waring message&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>% go run ./main.go
Fire <span class="token operator">!</span>
INFO<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> info message                                  <span class="token assign-left variable">app</span><span class="token operator">=</span>logrus_note
WARN<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> waring message                               
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以导入第三方的hook，将日志发送到<code>redis/mongodb</code>等存储中:</p>`,53),g={href:"https://github.com/weekface/mgorus",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/rogierlommers/logrus-redis-hook",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/vladoatanasov/logrus_amqp",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>以logrus-redis-hool为例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	logredis <span class="token string">&quot;github.com/rogierlommers/logrus-redis-hook&quot;</span>
	<span class="token string">&quot;github.com/sirupsen/logrus&quot;</span>
	<span class="token string">&quot;io/ioutil&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	hookConfig <span class="token operator">:=</span> logredis<span class="token punctuation">.</span>HookConfig<span class="token punctuation">{</span>
		Host<span class="token punctuation">:</span>     <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
		Key<span class="token punctuation">:</span>      <span class="token string">&quot;logKey&quot;</span><span class="token punctuation">,</span>
		Format<span class="token punctuation">:</span>   <span class="token string">&quot;v0&quot;</span><span class="token punctuation">,</span>
		App<span class="token punctuation">:</span>      <span class="token string">&quot;logrus_note&quot;</span><span class="token punctuation">,</span>
		Hostname<span class="token punctuation">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
		TTL<span class="token punctuation">:</span>      <span class="token number">3600</span><span class="token punctuation">,</span>
		Port<span class="token punctuation">:</span>     <span class="token number">6379</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	hook<span class="token punctuation">,</span> err <span class="token operator">:=</span> logredis<span class="token punctuation">.</span><span class="token function">NewHook</span><span class="token punctuation">(</span>hookConfig<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		logrus<span class="token punctuation">.</span><span class="token function">AddHook</span><span class="token punctuation">(</span>hook<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		logrus<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;logredis error :%q&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	logrus<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;info message &quot;</span><span class="token punctuation">)</span>

	logrus<span class="token punctuation">.</span><span class="token function">WithField</span><span class="token punctuation">(</span><span class="token string">&quot;app_name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;logrus_note&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;additional fields&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// do not sent log to default writer</span>
	logrus<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>ioutil<span class="token punctuation">.</span>Discard<span class="token punctuation">)</span>

	logrus<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;send to redis&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> go run ./main.go
INFO<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> info message                                 
INFO<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> additional fields                             <span class="token assign-left variable">app_name</span><span class="token operator">=</span>logrus_note
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/logrus-redis-hook.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="第三方格式" tabindex="-1"><a class="header-anchor" href="#第三方格式" aria-hidden="true">#</a> 第三方格式</h4>`,5),q=n("code",null,"logrus",-1),y={href:"https://github.com/antonfisher/nested-logrus-formatter",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 3rd-formatter/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	nested <span class="token string">&quot;github.com/antonfisher/nested-logrus-formatter&quot;</span>
	<span class="token string">&quot;github.com/sirupsen/logrus&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	logrus<span class="token punctuation">.</span><span class="token function">SetFormatter</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>nested<span class="token punctuation">.</span>Formatter<span class="token punctuation">{</span>
		HideKeys<span class="token punctuation">:</span>    <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	logrus<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;Info msg&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>% go run ./main.go
Oct 28 15:22:43.102 [INFO] Info msg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>nested</code>格式提供了多个字段控制行为：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Formatter - logrus formatter, implements logrus.Formatter</span>
<span class="token keyword">type</span> Formatter <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// FieldsOrder - default: fields sorted alphabetically</span>
	FieldsOrder <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>

	<span class="token comment">// TimestampFormat - default: time.StampMilli = &quot;Jan _2 15:04:05.000&quot;</span>
	TimestampFormat <span class="token builtin">string</span>

	<span class="token comment">// HideKeys - show [fieldValue] instead of [fieldKey:fieldValue]</span>
	HideKeys <span class="token builtin">bool</span>

	<span class="token comment">// NoColors - disable colors</span>
	NoColors <span class="token builtin">bool</span>

	<span class="token comment">// NoFieldsColors - apply colors only to the level, default is level + fields</span>
	NoFieldsColors <span class="token builtin">bool</span>

	<span class="token comment">// NoFieldsSpace - no space between fields</span>
	NoFieldsSpace <span class="token builtin">bool</span>

	<span class="token comment">// ShowFullLevel - show a full level [WARNING] instead of [WARN]</span>
	ShowFullLevel <span class="token builtin">bool</span>

	<span class="token comment">// NoUppercaseLevel - no upper case for level value</span>
	NoUppercaseLevel <span class="token builtin">bool</span>

	<span class="token comment">// TrimMessages - trim whitespaces on messages</span>
	TrimMessages <span class="token builtin">bool</span>

	<span class="token comment">// CallerFirst - print caller info first</span>
	CallerFirst <span class="token builtin">bool</span>

	<span class="token comment">// CustomCallerFormatter - set custom formatter for caller info</span>
	CustomCallerFormatter <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>runtime<span class="token punctuation">.</span>Frame<span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中<code>HidKeys:true</code>隐藏日志中字段的Key，仅展示value（logrus默认输出Key-Value形式）</p><h2 id="conclusion-总结" tabindex="-1"><a class="header-anchor" href="#conclusion-总结" aria-hidden="true">#</a> Conclusion 总结</h2><p>本文介绍了<code>logrus</code>的基本用法，其拥有较高的扩展性，可以引入三方格式和Hoo</p><p>来增强功能，也较受欢迎</p><h2 id="reference-参考" tabindex="-1"><a class="header-anchor" href="#reference-参考" aria-hidden="true">#</a> Reference 参考</h2>`,9),F={href:"https://github.com/sirupsen/logrus",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/sirupsen/logrus/wiki/Hooks",target:"_blank",rel:"noopener noreferrer"},x={href:"https://darjun.github.io/2020/02/07/godailylib/logrus/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.cnblogs.com/sparkdev/p/11460821.html",target:"_blank",rel:"noopener noreferrer"};function I(L,N){const a=l("ExternalLinkIcon");return i(),p("div",null,[u,n("p",null,[s("golang标准库"),r,s("仅提供了三组接口，功能过于简单。本次将介绍一个开源log库--"),d,s(","),n("a",k,[s("logrus"),e(a)]),s("完全兼容标准"),v,s("库，支持文本，JSON两种日志输出格式。有很多知名的开源项目如docker就使用了此库")]),m,n("ul",null,[n("li",null,[n("a",g,[s("mgorus"),e(a)]),s(": 将日志发送到 mongodb")]),n("li",null,[n("a",b,[s("logrus-redis-hook"),e(a)]),s(": 将日志发送到 redis")]),n("li",null,[n("a",h,[s("logrus-amqp"),e(a)]),s(": 将日志发送到 ActiveMQ")])]),f,n("p",null,[q,s("可以引入第三方格式支持，以"),n("a",y,[s("nested-logrus-formatter"),e(a)])]),w,n("ol",null,[n("li",null,[n("a",F,[s("logrus"),e(a)]),s(" github-repo")]),n("li",null,[n("a",_,[s("Hooks"),e(a)]),s(" logrus hook")]),n("li",null,[n("a",x,[s("logrus"),e(a)]),s(" darjun blog")]),n("li",null,[n("a",S,[s("TTY"),e(a)]),s(" sparkdev blog")])])])}const T=o(c,[["render",I],["__file","logrus.html.vue"]]);export{T as default};
