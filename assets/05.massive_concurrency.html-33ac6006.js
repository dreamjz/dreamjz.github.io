import{_ as e,Z as o,$ as c,a0 as n,a1 as s,a2 as t,a3 as p,H as l}from"./framework-dee406ed.js";const i={},u=p(`<h2 id="_5-1-异常传递" tabindex="-1"><a class="header-anchor" href="#_5-1-异常传递" aria-hidden="true">#</a> 5.1 异常传递</h2><p>出现异常通常表示系统进入了一个无法满足用户操作的状态，此时系统需要传达几个关键的信息：</p><ol><li><strong>发生了什么</strong> 包含对异常的描述；例如：磁盘已满，连接重置等</li><li><strong>发生在什么时间，什么位置</strong> 异常发生的完整<strong>调用栈</strong>信息以及异常<strong>发生的时间</strong></li><li><strong>对用户友好的信息</strong> 对发送给用户的信息进行自定义</li><li><strong>告诉用户如何获取更多信息</strong> 在发给用户的信息中应告知详细的异常信息在哪里可以获取</li></ol><p>异常可分为两类：</p><ol><li>Bug：未知的错误，没有预先定义的异常</li><li>已知异常：已预先定义的异常</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">mainFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">SetFlags</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>Ltime <span class="token operator">|</span> log<span class="token punctuation">.</span>LUTC<span class="token punctuation">)</span>
	err <span class="token operator">:=</span> <span class="token function">runJob</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		msg <span class="token operator">:=</span> <span class="token string">&quot;There was a unexpected issue, please report as a bug&quot;</span> <span class="token comment">// 未知异常，BUG</span>
		<span class="token keyword">var</span> intermediateErr intermediateErr
		<span class="token keyword">if</span> errors<span class="token punctuation">.</span><span class="token function">As</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token operator">&amp;</span>intermediateErr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			msg <span class="token operator">=</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 已知异常</span>
		<span class="token punctuation">}</span>
		<span class="token function">handleErr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> err<span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">handleErr</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">,</span> msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">SetPrefix</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;[logID: %d]&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;[%v] %v&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> MyError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Inner      <span class="token builtin">error</span> <span class="token comment">// 原始错误</span>
	Message    <span class="token builtin">string</span>
	StackTrace <span class="token builtin">string</span>         <span class="token comment">// 调用栈</span>
	Misc       <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>any <span class="token comment">// 相关信息</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>err MyError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> err<span class="token punctuation">.</span>Message
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">wrapError</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">,</span> msg <span class="token builtin">string</span><span class="token punctuation">)</span> MyError <span class="token punctuation">{</span>
	<span class="token keyword">return</span> MyError<span class="token punctuation">{</span>
		Inner<span class="token punctuation">:</span>      err<span class="token punctuation">,</span>
		Message<span class="token punctuation">:</span>    msg<span class="token punctuation">,</span>
		StackTrace<span class="token punctuation">:</span> <span class="token function">string</span><span class="token punctuation">(</span>debug<span class="token punctuation">.</span><span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		Misc<span class="token punctuation">:</span>       <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>any<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 中层组件</span>
<span class="token keyword">type</span> intermediateErr <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token builtin">error</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">runJob</span><span class="token punctuation">(</span>id <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	jobPath <span class="token operator">:=</span> <span class="token string">&quot;bad/path&quot;</span>
	isExec<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">isGloballyExec</span><span class="token punctuation">(</span>jobPath<span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> intermediateErr<span class="token punctuation">{</span><span class="token function">wrapError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;bad/path not available&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token comment">// 封装底层错误</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token operator">!</span>isExec <span class="token punctuation">{</span>
		<span class="token keyword">return</span> intermediateErr<span class="token punctuation">{</span><span class="token function">wrapError</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token string">&quot;bad/path is not executable&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span>jobPath<span class="token punctuation">,</span> <span class="token string">&quot;--id=&quot;</span><span class="token operator">+</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 底层组件</span>
<span class="token keyword">type</span> lowLevelErr <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token builtin">error</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">isGloballyExec</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	info<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Stat</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">,</span> lowLevelErr<span class="token punctuation">{</span><span class="token function">wrapError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token comment">// 封装系统错误</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> info<span class="token punctuation">.</span><span class="token function">Mode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Perm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&amp;</span><span class="token number">0100</span> <span class="token operator">==</span> <span class="token number">0100</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
<span class="token punctuation">[</span>logID<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token number">13</span><span class="token punctuation">:</span><span class="token number">15</span><span class="token punctuation">:</span><span class="token number">12</span> ch05<span class="token punctuation">.</span>intermediateErr<span class="token punctuation">{</span><span class="token builtin">error</span><span class="token punctuation">:</span>ch05<span class="token punctuation">.</span>MyError<span class="token punctuation">{</span>Inner<span class="token punctuation">:</span>ch05<span class="token punctuation">.</span>lowLevelErr<span class="token punctuation">{</span><span class="token builtin">error</span><span class="token punctuation">:</span>ch05<span class="token punctuation">.</span>MyError<span class="token punctuation">{</span><span class="token operator">...</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> bad<span class="token operator">/</span>path not available
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由输出可以看到，标准输出中只显示了异常的信息和LogID，在日志中则记录了更为详细的信息。</p><h2 id="_5-2-超时和取消" tabindex="-1"><a class="header-anchor" href="#_5-2-超时和取消" aria-hidden="true">#</a> 5.2 超时和取消</h2><p>系统需要<strong>超时</strong>的情景：</p><ol><li><strong>系统饱和</strong> 若系统已经饱和，则<strong>超出</strong>的请求应<strong>返回超时</strong>，而不是长时间的等待</li><li><strong>陈旧的数据</strong> 数据通常有一个<strong>窗口期</strong>，若数据的处理已经过期，那么请求应该超时</li><li><strong>防止死锁</strong> 为了防止死锁，在所有的<strong>并发</strong>处理中添加超时，这样即使发生死锁也会在超时时间到达时<strong>解除阻塞</strong>状态</li></ol><p>并发进程需要<strong>取消</strong>的原因：</p><ol><li><strong>超时</strong> 超时是隐式的取消</li><li><strong>用户干预</strong> 用户在使用并发程序时，可以取消已经开始的操作</li><li><strong>复制请求</strong> 发送同一份数据到多个请求，当一个请求返回时，取消其余的请求</li></ol><h2 id="_5-3-心跳" tabindex="-1"><a class="header-anchor" href="#_5-3-心跳" aria-hidden="true">#</a> 5.3 心跳</h2><p><strong>心跳</strong>是并发进程向外界发送信号的一种方式。</p><p>心跳可以使得外界能够了解系统的运行情况，并在系统出现异常时进行检测。心跳通常有两类：</p><ol><li>定期发出的心跳：每隔一段时间发出的心跳</li><li>工作单元开始时发出的心跳</li></ol><h3 id="定期心跳" tabindex="-1"><a class="header-anchor" href="#定期心跳" aria-hidden="true">#</a> 定期心跳</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">heartbeat1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	doWork <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> pulseInterval time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		heartbeat <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
		resCh <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>resCh<span class="token punctuation">)</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>heartbeat<span class="token punctuation">)</span>

			pulse <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Tick</span><span class="token punctuation">(</span>pulseInterval<span class="token punctuation">)</span>
			workGen <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Tick</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> pulseInterval<span class="token punctuation">)</span>

			sendPulse <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> heartbeat <span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">:</span>
				<span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token comment">// 防止阻塞，当无法发出心跳时</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>

			sendResult <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>r time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">for</span> <span class="token punctuation">{</span>
					<span class="token keyword">select</span> <span class="token punctuation">{</span>
					<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
						<span class="token keyword">return</span>
					<span class="token keyword">case</span> <span class="token operator">&lt;-</span>pulse<span class="token punctuation">:</span>
						<span class="token function">sendPulse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
					<span class="token keyword">case</span> resCh <span class="token operator">&lt;-</span> r<span class="token punctuation">:</span>
						<span class="token keyword">return</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">for</span> <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>pulse<span class="token punctuation">:</span>
					<span class="token function">sendPulse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token keyword">case</span> r <span class="token operator">:=</span> <span class="token operator">&lt;-</span>workGen<span class="token punctuation">:</span>
					<span class="token function">sendResult</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> heartbeat<span class="token punctuation">,</span> resCh
	<span class="token punctuation">}</span>

	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">AfterFunc</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	timeout <span class="token operator">:=</span> <span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second
	heartbeat<span class="token punctuation">,</span> resCh <span class="token operator">:=</span> <span class="token function">doWork</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> timeout<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>heartbeat<span class="token punctuation">:</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;pulse&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">case</span> r<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>resCh<span class="token punctuation">:</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
pulse
pulse
<span class="token number">3</span>
pulse
pulse
<span class="token number">5</span>
pulse
pulse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出每个结果之间有两次心跳。</p><h3 id="定期心跳-检测-goroutine-的运行" tabindex="-1"><a class="header-anchor" href="#定期心跳-检测-goroutine-的运行" aria-hidden="true">#</a> 定期心跳 检测 goroutine 的运行</h3><p>定期心跳的一个作用是判断一个 goroutine 是否正常运行，将上述的<code>doWork</code>函数进行修改：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>doWork <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> pulseInterval time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		heartbeat <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
		resCh <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 不关闭 channel</span>
            <span class="token comment">// defer close(resCh)</span>
			<span class="token comment">// defer close(heartbeat)</span>
            <span class="token operator">...</span>
    		<span class="token comment">// 两次循环结束</span>
    		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>pulse<span class="token punctuation">:</span>
					<span class="token function">sendPulse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token keyword">case</span> r <span class="token operator">:=</span> <span class="token operator">&lt;-</span>workGen<span class="token punctuation">:</span>
					<span class="token function">sendResult</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
        	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    	<span class="token operator">...</span>
	<span class="token punctuation">}</span>
	<span class="token operator">...</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>heartbeat<span class="token punctuation">:</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;pulse&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">case</span> r<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>resCh<span class="token punctuation">:</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">Second</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment">// 长时间未收到心跳</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;goroutine is no healthy&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>   
<span class="token operator">...</span>
    
<span class="token comment">// output</span>
pulse
pulse
goroutine is no healthy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工作 goroutine 只进行了两次发送循环就结束了，此时检测 goroutine 可以根据心跳情况判断是否有在正常工作。</p><h3 id="工作单元开始时的心跳" tabindex="-1"><a class="header-anchor" href="#工作单元开始时的心跳" aria-hidden="true">#</a> 工作单元开始时的心跳</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">heartbeat3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	doWork <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		heartbeat <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 缓冲大小为 1</span>
		resCh <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>resCh<span class="token punctuation">)</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>heartbeat<span class="token punctuation">)</span>

			<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> heartbeat <span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">:</span> <span class="token comment">// 工作开始前的 心跳</span>
				<span class="token keyword">default</span><span class="token punctuation">:</span>
				<span class="token punctuation">}</span>

				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> resCh <span class="token operator">&lt;-</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> heartbeat<span class="token punctuation">,</span> resCh
	<span class="token punctuation">}</span>

	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

	hb<span class="token punctuation">,</span> res <span class="token operator">:=</span> <span class="token function">doWork</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>hb<span class="token punctuation">:</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;pulse&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">case</span> r<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>res<span class="token punctuation">:</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
pulse
<span class="token number">11</span>
pulse
<span class="token number">17</span>
pulse
<span class="token number">15</span>
pulse
<span class="token number">5</span>
pulse
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>heartbeat := make(chan struct{}, 1)</code>：心跳通道的缓冲大小为1，确保即使消息没有被接收也能至少发出一个心跳</li></ul><p>由结果可以看出，每次发送结果前会先发送一次心跳。</p><h3 id="使用心跳进行测试" tabindex="-1"><a class="header-anchor" href="#使用心跳进行测试" aria-hidden="true">#</a> 使用心跳进行测试</h3><p>对于一个并发的工作，在数据处理开始前可能会出现某种延迟，给测试带来很大的不确定性：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">doWork1</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>

		<span class="token comment">// 模拟运行延迟</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>

		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
				<span class="token keyword">return</span>
			<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> v<span class="token punctuation">:</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试函数：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Test_doWork1</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

	nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
	res <span class="token operator">:=</span> <span class="token function">doWork1</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> nums<span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> n<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>res<span class="token punctuation">:</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> n <span class="token operator">!=</span> v <span class="token punctuation">{</span>
				t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;get: %v, want: %v&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">:</span>
			t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;test time out&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
<span class="token operator">==</span><span class="token operator">=</span> RUN   Test_doWork1
    heartbeats_test<span class="token punctuation">.</span><span class="token keyword">go</span><span class="token punctuation">:</span><span class="token number">37</span><span class="token punctuation">:</span> test time out
<span class="token operator">--</span><span class="token operator">-</span> FAIL<span class="token punctuation">:</span> Test_doWork1 <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">.</span>00s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试中加入了超时，防止进入死锁状态。</p><p>因为代码中延迟是固定的，所以测试一定会超时。但是在实际的运行过程中，工作延迟无法确定，那么测试时无法给出一个准确的超时时间，给测试带来了很多的不确定性。</p><p>通过<strong>工作心跳</strong>可以在测试时避免引入超时：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">doWork2</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	hb <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>hb<span class="token punctuation">)</span>

		<span class="token comment">// 模拟运行延迟</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>

		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> hb <span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">:</span>
			<span class="token keyword">default</span><span class="token punctuation">:</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
				<span class="token keyword">return</span>
			<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> v<span class="token punctuation">:</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> hb<span class="token punctuation">,</span> out
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试时，在检测到工作心跳开始后才进行测试：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Test_doWork2</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

	nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
	hb<span class="token punctuation">,</span> res <span class="token operator">:=</span> <span class="token function">doWork2</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> nums<span class="token punctuation">)</span>

	<span class="token operator">&lt;-</span>hb

	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> n<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>res<span class="token punctuation">:</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> n <span class="token operator">!=</span> v <span class="token punctuation">{</span>
				t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;get: %v, want: %v&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<strong>工作心跳</strong>进行测试，当工作延迟非常大的时候，此时可以使用<strong>定期心跳</strong>进行测试，并可以<strong>控制</strong>测试时的<strong>超时</strong>时间：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">doWork3</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> interval time<span class="token punctuation">.</span>Duration<span class="token punctuation">,</span> nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	hb <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>hb<span class="token punctuation">)</span>

		<span class="token comment">// 模拟延迟</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>

		pulse <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Tick</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span>

	numLoop<span class="token punctuation">:</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>pulse<span class="token punctuation">:</span>
					<span class="token keyword">select</span> <span class="token punctuation">{</span>
					<span class="token keyword">case</span> hb <span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">:</span>
					<span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token comment">// 心跳信号可跳过</span>
					<span class="token punctuation">}</span>
				<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> v<span class="token punctuation">:</span>
					<span class="token keyword">continue</span> numLoop <span class="token comment">// 继续外层循环</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> hb<span class="token punctuation">,</span> out
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Test_doWork3</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

	nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
	timeout <span class="token operator">:=</span> <span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second
	hb<span class="token punctuation">,</span> res <span class="token operator">:=</span> <span class="token function">doWork3</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> timeout<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span> nums<span class="token punctuation">)</span>

	<span class="token operator">&lt;-</span>hb <span class="token comment">// 进入处理循环</span>

	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> n<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>res<span class="token punctuation">:</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> n <span class="token operator">!=</span> v <span class="token punctuation">{</span>
				t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;get: %v, want: %v&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>hb<span class="token punctuation">:</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">:</span>
			t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;text time out&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-4-复制请求" tabindex="-1"><a class="header-anchor" href="#_5-4-复制请求" aria-hidden="true">#</a> 5.4 复制请求</h2><p>当接收到一个工作请求时，可以启用多个并发进程进行处理，在最快的进程返回之后，取消其余的进程。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">rc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	doWork <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> id <span class="token builtin">int</span><span class="token punctuation">,</span> wg <span class="token operator">*</span>sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">,</span> out <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// 模拟随机延迟</span>
		procTime <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second

		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>procTime<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
		<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> id<span class="token punctuation">:</span>
		<span class="token punctuation">}</span>

		t <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span>
		<span class="token keyword">if</span> t <span class="token operator">&lt;</span> procTime <span class="token punctuation">{</span> <span class="token comment">// 被取消时，预计处理时间</span>
			t <span class="token operator">=</span> procTime
		<span class="token punctuation">}</span>

		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d took %v\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> t<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	in <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">doWork</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token operator">&amp;</span>wg<span class="token punctuation">,</span> in<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	res <span class="token operator">:=</span> <span class="token operator">&lt;-</span>in
	<span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Receive result from #&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
<span class="token number">1</span> took 3s
<span class="token number">9</span> took 3s
<span class="token number">8</span> took <span class="token number">1</span><span class="token punctuation">.</span>0049034s
<span class="token number">4</span> took 2s
<span class="token number">7</span> took 3s
<span class="token number">5</span> took 6s
<span class="token number">6</span> took 7s
<span class="token number">3</span> took 2s
<span class="token number">10</span> took 10s
<span class="token number">2</span> took 6s
Receive result from # <span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-5-速率限制" tabindex="-1"><a class="header-anchor" href="#_5-5-速率限制" aria-hidden="true">#</a> 5.5 速率限制</h2><p>速率限制，是指<strong>限制</strong>某种资源在某段时间内的访问次数。</p><p>速率限制的好处：</p><ol><li>防止恶意攻击，如：DDoS</li><li>防止因大量突发请求导致系统崩溃</li><li>可以为系统不同的收费服务，分配不同的访问速率</li><li>限制付费服务的速率，防止产生高额的账单</li><li>...</li><li>....</li></ol><h3 id="令牌桶算法" tabindex="-1"><a class="header-anchor" href="#令牌桶算法" aria-hidden="true">#</a> 令牌桶算法</h3><p>大多数限速使用令牌桶算法，相关概念：</p><ol><li>令牌(token)：用户访问资源需要令牌，没有令牌的请求将被拒绝</li><li>桶(bucket)：存放令牌</li><li>桶深度(depth)：桶能够存储的令牌的最大数量</li><li>添加速率(rate)：向桶中添加新令牌的速率</li></ol><p>假设系统有两个API：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> APIConnection <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>APIConnection <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>APIConnection<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>APIConnection<span class="token punctuation">)</span> <span class="token function">ReadFile</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token comment">// 假设访问成功</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>APIConnection<span class="token punctuation">)</span> <span class="token function">ResolveAddress</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启用20个 goroutine 分别读取文件和解析地址各10次：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">requestWithoutLimit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">SetFlags</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>Ltime <span class="token operator">|</span> log<span class="token punctuation">.</span>LUTC<span class="token punctuation">)</span>

	conn <span class="token operator">:=</span> <span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	ctx <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

			<span class="token keyword">if</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Can not read file: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Read file&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

			<span class="token keyword">if</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">ResolveAddress</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Can not resolve address: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Resolve address&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Resolve address
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Read file
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Read file
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Resolve address
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Read file
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Read file
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Read file
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Read file
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Read file
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Read file
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Read file
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Read file
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Resolve address
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Resolve address
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Resolve address
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Resolve address
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Resolve address
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Resolve address
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Resolve address
<span class="token number">15</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">21</span> Resolve address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，所有的请求几乎时同一时间完成的。</p>`,56),k={id:"golang-org-x-time-rate",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#golang-org-x-time-rate","aria-hidden":"true"},"#",-1),d={href:"http://golang.org/x/time/rate",target:"_blank",rel:"noopener noreferrer"},v={href:"https://pkg.go.dev/golang.org/x/time/rate#section-sourcefiles",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"golang.org/x/time/rate",-1),b=p(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Limit <span class="token builtin">float64</span>
<span class="token keyword">func</span> <span class="token function">NewLimiter</span><span class="token punctuation">(</span>r Limit<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Limiter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Limit</code>：表示时间发生的频率</li><li><code>NewLimiter</code>：传入时间发生的频率<code>r</code>，和令牌桶深度<code>b</code>，返回限速器<code>*Limiter</code></li></ul><p>以下的辅助函数可用于根据时间间隔生成速率：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Every</span><span class="token punctuation">(</span>interval time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> Limit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Wait</code>和<code>WaitN</code>用于阻塞请求：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>lim <span class="token operator">*</span>Limiter<span class="token punctuation">)</span> <span class="token function">Wait</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>lim <span class="token operator">*</span>Limiter<span class="token punctuation">)</span> <span class="token function">WaitN</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Wait</code>：<code>WaitN(ctx, 1)</code>的缩写</li><li><code>WaitN</code>：会阻塞，直到限速器允许发生 n 次事件；以下情况会返回错误： <ol><li>当 n 超过 limit</li><li>context 超时</li><li>context 被取消</li></ol></li></ul><p>修改之前的API接口，引入限速器：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">type</span> APIConnection <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	limiter <span class="token operator">*</span>rate<span class="token punctuation">.</span>Limiter
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>APIConnection <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>APIConnection<span class="token punctuation">{</span>
		limiter<span class="token punctuation">:</span> rate<span class="token punctuation">.</span><span class="token function">NewLimiter</span><span class="token punctuation">(</span>rate<span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>APIConnection<span class="token punctuation">)</span> <span class="token function">ReadFile</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> a<span class="token punctuation">.</span>limiter<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>APIConnection<span class="token punctuation">)</span> <span class="token function">ResolveAddress</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> a<span class="token punctuation">.</span>limiter<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">req</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Done.&quot;</span><span class="token punctuation">)</span>

	log<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">SetFlags</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>Ltime <span class="token operator">|</span> log<span class="token punctuation">.</span>LUTC<span class="token punctuation">)</span>
	ctx <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

	conn <span class="token operator">:=</span> <span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			conn<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Read file&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			conn<span class="token punctuation">.</span><span class="token function">ResolveAddress</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Resolve address&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// output </span>
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">27</span><span class="token punctuation">:</span><span class="token number">50</span> Read file
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">27</span><span class="token punctuation">:</span><span class="token number">51</span> Resolve address
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">27</span><span class="token punctuation">:</span><span class="token number">52</span> Read file
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">27</span><span class="token punctuation">:</span><span class="token number">53</span> Resolve address
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">27</span><span class="token punctuation">:</span><span class="token number">54</span> Read file
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">27</span><span class="token punctuation">:</span><span class="token number">55</span> Resolve address
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">27</span><span class="token punctuation">:</span><span class="token number">56</span> Resolve address
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">27</span><span class="token punctuation">:</span><span class="token number">57</span> Read file
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">27</span><span class="token punctuation">:</span><span class="token number">58</span> Resolve address
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">27</span><span class="token punctuation">:</span><span class="token number">59</span> Read file
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">28</span><span class="token punctuation">:</span><span class="token number">00</span> Resolve address
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">28</span><span class="token punctuation">:</span><span class="token number">01</span> Resolve address
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">28</span><span class="token punctuation">:</span><span class="token number">02</span> Read file
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">28</span><span class="token punctuation">:</span><span class="token number">03</span> Resolve address
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">28</span><span class="token punctuation">:</span><span class="token number">04</span> Read file
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">28</span><span class="token punctuation">:</span><span class="token number">05</span> Read file
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">28</span><span class="token punctuation">:</span><span class="token number">06</span> Resolve address
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">28</span><span class="token punctuation">:</span><span class="token number">07</span> Read file
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">28</span><span class="token punctuation">:</span><span class="token number">08</span> Read file
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">28</span><span class="token punctuation">:</span><span class="token number">09</span> Resolve address
<span class="token number">16</span><span class="token punctuation">:</span><span class="token number">28</span><span class="token punctuation">:</span><span class="token number">09</span> Done<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，每秒只能访问一次API接口。</p><h3 id="组合限速器" tabindex="-1"><a class="header-anchor" href="#组合限速器" aria-hidden="true">#</a> 组合限速器</h3><p>当需要从不同的维度对速率进行限制时，可以将多个限速器组合起来。</p><p>组合多个限速器时需要将<strong>等待时间最长</strong>（<strong>速率最小的</strong>）放在限速器队列的最前端。</p><p>例如，组合两个限制：</p><ol><li>限速A：每秒 2 个</li><li>限速B：每分钟 10 个</li></ol><p>假设不同限速器的令牌是同时减少的，若先减少A的令牌，然后减少B的令牌；当B的令牌用完时，需要6秒恢复一个，但是这6秒内A的令牌在一直恢复，程序可以一直以A的速率执行，此时6秒内可能执行了 12 次，超过了B的限制，此时B的限速已经失效。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">type</span> RateLimiter <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Wait</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span>
	<span class="token function">Limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> rate<span class="token punctuation">.</span>Limit
<span class="token punctuation">}</span>

<span class="token keyword">type</span> MultiLimiter <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	limiters <span class="token punctuation">[</span><span class="token punctuation">]</span>RateLimiter
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewMultiLimiter</span><span class="token punctuation">(</span>lims <span class="token operator">...</span>RateLimiter<span class="token punctuation">)</span> <span class="token operator">*</span>MultiLimiter <span class="token punctuation">{</span>
	<span class="token comment">// 按照 limit 升序排列, 即按照等待时间降序</span>
	sort<span class="token punctuation">.</span><span class="token function">Slice</span><span class="token punctuation">(</span>lims<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> lims<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> lims<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>MultiLimiter<span class="token punctuation">{</span>limiters<span class="token punctuation">:</span> lims<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MultiLimiter<span class="token punctuation">)</span> <span class="token function">Wait</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> m<span class="token punctuation">.</span>limiters <span class="token punctuation">{</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> m<span class="token punctuation">.</span>limiters<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> err
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MultiLimiter<span class="token punctuation">)</span> <span class="token function">Limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> rate<span class="token punctuation">.</span>Limit <span class="token punctuation">{</span>
	<span class="token keyword">return</span> m<span class="token punctuation">.</span>limiters<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>NewMultiLimiter</code>: 将限速器按照速率升序排列（等待时间降序排列）</li><li><code>Wait</code>：减少每一个限速器的令牌桶</li><li><code>Limit()</code>：整体速率取决于最小的那个</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">mullim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Done.&quot;</span><span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">SetFlags</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>LUTC <span class="token operator">|</span> log<span class="token punctuation">.</span>Ltime<span class="token punctuation">)</span>

	conn <span class="token operator">:=</span> <span class="token function">OpenConn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

	ctx <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;#%d Read file\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">ResolveAddress</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;#%d Resolve address\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> APIConn <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	limiter RateLimiter
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">OpenConn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>APIConn <span class="token punctuation">{</span>
	<span class="token comment">// 2 per sec</span>
	secondLimiter <span class="token operator">:=</span> rate<span class="token punctuation">.</span><span class="token function">NewLimiter</span><span class="token punctuation">(</span><span class="token function">Per</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token comment">// 10 per min</span>
	minuteLimiter <span class="token operator">:=</span> rate<span class="token punctuation">.</span><span class="token function">NewLimiter</span><span class="token punctuation">(</span><span class="token function">Per</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Minute<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>APIConn<span class="token punctuation">{</span>
		limiter<span class="token punctuation">:</span> <span class="token function">NewMultiLimiter</span><span class="token punctuation">(</span>secondLimiter<span class="token punctuation">,</span> minuteLimiter<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>APIConn<span class="token punctuation">)</span> <span class="token function">ReadFile</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> a<span class="token punctuation">.</span>limiter<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>APIConn<span class="token punctuation">)</span> <span class="token function">ResolveAddress</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> a<span class="token punctuation">.</span>limiter<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Per</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> d time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> rate<span class="token punctuation">.</span>Limit <span class="token punctuation">{</span>
	<span class="token keyword">return</span> rate<span class="token punctuation">.</span><span class="token function">Every</span><span class="token punctuation">(</span>d <span class="token operator">/</span> time<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">44</span><span class="token punctuation">:</span><span class="token number">47</span> #<span class="token number">0</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">44</span><span class="token punctuation">:</span><span class="token number">47</span> #<span class="token number">3</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">44</span><span class="token punctuation">:</span><span class="token number">48</span> #<span class="token number">1</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">44</span><span class="token punctuation">:</span><span class="token number">48</span> #<span class="token number">0</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">44</span><span class="token punctuation">:</span><span class="token number">49</span> #<span class="token number">9</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">44</span><span class="token punctuation">:</span><span class="token number">49</span> #<span class="token number">1</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">44</span><span class="token punctuation">:</span><span class="token number">50</span> #<span class="token number">2</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">44</span><span class="token punctuation">:</span><span class="token number">50</span> #<span class="token number">3</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">44</span><span class="token punctuation">:</span><span class="token number">51</span> #<span class="token number">2</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">44</span><span class="token punctuation">:</span><span class="token number">51</span> #<span class="token number">6</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">44</span><span class="token punctuation">:</span><span class="token number">53</span> #<span class="token number">4</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">44</span><span class="token punctuation">:</span><span class="token number">59</span> #<span class="token number">5</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">45</span><span class="token punctuation">:</span><span class="token number">05</span> #<span class="token number">4</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">45</span><span class="token punctuation">:</span><span class="token number">11</span> #<span class="token number">5</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">45</span><span class="token punctuation">:</span><span class="token number">17</span> #<span class="token number">6</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">45</span><span class="token punctuation">:</span><span class="token number">23</span> #<span class="token number">8</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">45</span><span class="token punctuation">:</span><span class="token number">29</span> #<span class="token number">7</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">45</span><span class="token punctuation">:</span><span class="token number">35</span> #<span class="token number">8</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">45</span><span class="token punctuation">:</span><span class="token number">41</span> #<span class="token number">9</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">45</span><span class="token punctuation">:</span><span class="token number">47</span> #<span class="token number">7</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">45</span><span class="token punctuation">:</span><span class="token number">47</span> Done<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>44:51</code>到<code>44:53</code>只经过了两秒，是因为分钟级的限速器在之前的时间中已经恢复了一个令牌了。</p><p>上述的限速器组合在<strong>时间维度上</strong>，还可以从资源的维度进行组合：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">type</span> APIConn1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	diskLimiter<span class="token punctuation">,</span>
	netLimiter<span class="token punctuation">,</span>
	apiLimiter RateLimiter
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">OpenAPIConn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>APIConn1 <span class="token punctuation">{</span>
	<span class="token comment">// api limiter</span>
	<span class="token comment">// 2 per sec</span>
	secondLimiter <span class="token operator">:=</span> rate<span class="token punctuation">.</span><span class="token function">NewLimiter</span><span class="token punctuation">(</span><span class="token function">Per</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token comment">// 10 per min</span>
	minuteLimiter <span class="token operator">:=</span> rate<span class="token punctuation">.</span><span class="token function">NewLimiter</span><span class="token punctuation">(</span><span class="token function">Per</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Minute<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

	<span class="token comment">// disk limiter</span>
	diskLimiter <span class="token operator">:=</span> rate<span class="token punctuation">.</span><span class="token function">NewLimiter</span><span class="token punctuation">(</span>rate<span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token comment">// net limiter</span>
	netLimiter <span class="token operator">:=</span> rate<span class="token punctuation">.</span><span class="token function">NewLimiter</span><span class="token punctuation">(</span><span class="token function">Per</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>APIConn1<span class="token punctuation">{</span>
		diskLimiter<span class="token punctuation">:</span> diskLimiter<span class="token punctuation">,</span>
		netLimiter<span class="token punctuation">:</span>  netLimiter<span class="token punctuation">,</span>
		apiLimiter<span class="token punctuation">:</span>  <span class="token function">NewMultiLimiter</span><span class="token punctuation">(</span>secondLimiter<span class="token punctuation">,</span> minuteLimiter<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>APIConn1<span class="token punctuation">)</span> <span class="token function">ReadFile1</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">NewMultiLimiter</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>apiLimiter<span class="token punctuation">,</span> a<span class="token punctuation">.</span>diskLimiter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>APIConn1<span class="token punctuation">)</span> <span class="token function">ResolveAddress1</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">NewMultiLimiter</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>apiLimiter<span class="token punctuation">,</span> a<span class="token punctuation">.</span>netLimiter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">mullim1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Done.&quot;</span><span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">SetFlags</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>LUTC <span class="token operator">|</span> log<span class="token punctuation">.</span>Ltime<span class="token punctuation">)</span>

	conn <span class="token operator">:=</span> <span class="token function">OpenAPIConn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

	ctx <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">ReadFile1</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;#%d Read file\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">ResolveAddress1</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;#%d Resolve address\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">14</span> #<span class="token number">0</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">14</span> #<span class="token number">0</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">15</span> #<span class="token number">2</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">15</span> #<span class="token number">9</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">16</span> #<span class="token number">4</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">16</span> #<span class="token number">4</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">17</span> #<span class="token number">5</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">17</span> #<span class="token number">5</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">18</span> #<span class="token number">6</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">18</span> #<span class="token number">6</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">20</span> #<span class="token number">7</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">26</span> #<span class="token number">7</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">32</span> #<span class="token number">8</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">38</span> #<span class="token number">8</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">44</span> #<span class="token number">3</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">50</span> #<span class="token number">9</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">57</span><span class="token punctuation">:</span><span class="token number">56</span> #<span class="token number">1</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">02</span> #<span class="token number">2</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">08</span> #<span class="token number">1</span> Resolve address
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">14</span> #<span class="token number">3</span> Read file
<span class="token number">17</span><span class="token punctuation">:</span><span class="token number">58</span><span class="token punctuation">:</span><span class="token number">14</span> Done<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-6-治愈异常的-goroutine" tabindex="-1"><a class="header-anchor" href="#_5-6-治愈异常的-goroutine" aria-hidden="true">#</a> 5.6 治愈异常的 goroutine</h2><p>在长期运行的系统中，经常会有一些长时间运行的 goroutine，可能其中的一些 goroutine 进入了不正常的状态难以恢复，此时就需要一个<strong>监控机制</strong>，来监控 goroutine 并重启异常的 goroutine。重启的过程就被称为治愈(healing)。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> StartGoroutineFn <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> pulseInterval time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewSteward</span><span class="token punctuation">(</span>timeout time<span class="token punctuation">.</span>Duration<span class="token punctuation">,</span> startGoroutine StartGoroutineFn<span class="token punctuation">)</span> StartGoroutineFn <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> pulseInterval time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
		hb <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>hb<span class="token punctuation">)</span>

			<span class="token keyword">var</span> wardDone <span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
			<span class="token keyword">var</span> wardHb <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

			startWard <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 启动 goroutine 函数</span>
				wardDone <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
				wardHb <span class="token operator">=</span> <span class="token function">startGoroutine</span><span class="token punctuation">(</span><span class="token function">or</span><span class="token punctuation">(</span>wardDone<span class="token punctuation">,</span> done<span class="token punctuation">)</span><span class="token punctuation">,</span> timeout<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 管理员被关闭时，监控区也关闭</span>
			<span class="token punctuation">}</span>

			<span class="token function">startWard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 启动 goroutine</span>

			pulse <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Tick</span><span class="token punctuation">(</span>pulseInterval<span class="token punctuation">)</span>

		monitorLoop<span class="token punctuation">:</span>
			<span class="token keyword">for</span> <span class="token punctuation">{</span>
				timeoutSignal <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token comment">// 监控超时</span>

				<span class="token keyword">for</span> <span class="token punctuation">{</span>
					<span class="token keyword">select</span> <span class="token punctuation">{</span>
					<span class="token keyword">case</span> <span class="token operator">&lt;-</span>pulse<span class="token punctuation">:</span> <span class="token comment">// 管理员心跳</span>
						<span class="token keyword">select</span> <span class="token punctuation">{</span>
						<span class="token keyword">case</span> hb <span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">:</span> <span class="token comment">// 发送管理员心跳</span>
						<span class="token keyword">default</span><span class="token punctuation">:</span>
						<span class="token punctuation">}</span>
					<span class="token keyword">case</span> <span class="token operator">&lt;-</span>wardHb<span class="token punctuation">:</span> <span class="token comment">// 读取 监控区 心跳</span>
						<span class="token keyword">continue</span> monitorLoop
					<span class="token keyword">case</span> <span class="token operator">&lt;-</span>timeoutSignal<span class="token punctuation">:</span> <span class="token comment">// 监控超时，重启被监控的 goroutine</span>
						log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;steward: ward unhealthy; restarting&quot;</span><span class="token punctuation">)</span>
						<span class="token function">close</span><span class="token punctuation">(</span>wardDone<span class="token punctuation">)</span> <span class="token comment">// 关闭监控区 goroutine</span>
						<span class="token function">startWard</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">// 启动</span>
						<span class="token keyword">continue</span> monitorLoop
					<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span> <span class="token comment">// 管理员被关闭</span>
						<span class="token keyword">return</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> hb
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>NewSteward</code>生成新的管理员，并返回<code>StartGoroutineFn</code>表示管理员也是被监控的。</p><p>函数流程如下：</p><ol><li>启动监控区 goroutine</li><li>循环监听： <ol><li>向外界发送自身的心跳</li><li>监听监控区心跳</li><li>监控超时则重启监控区</li><li>监听是否自己被关闭</li></ol></li></ol><p>测试：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">or</span><span class="token punctuation">(</span>dones <span class="token operator">...</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> <span class="token function">len</span><span class="token punctuation">(</span>dones<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> dones<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>

	orDone <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>orDone<span class="token punctuation">)</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>dones<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>dones<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token function">append</span><span class="token punctuation">(</span>dones<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> orDone<span class="token punctuation">)</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> orDone
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">monitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">SetFlags</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>Ltime <span class="token operator">|</span> log<span class="token punctuation">.</span>LUTC<span class="token punctuation">)</span>

	<span class="token comment">// 监控区 goroutine</span>
	<span class="token comment">// 什么也不做，等待被关闭</span>
	doWork <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">_</span> time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ward: hello, I&#39;m irresponsible...&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token operator">&lt;-</span>done
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ward: I&#39;m halting&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 管理员函数，设置 4 秒的超时</span>
	doWorkWithSteward <span class="token operator">:=</span> <span class="token function">NewSteward</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span> doWork<span class="token punctuation">)</span>

	<span class="token comment">// 9 秒后关闭管理员和监控区</span>
	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">AfterFunc</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Halting steward and ward&quot;</span><span class="token punctuation">)</span>
		<span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// 监控管理员心跳</span>
	<span class="token keyword">for</span> <span class="token keyword">range</span> <span class="token function">doWorkWithSteward</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token number">4</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>

	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Done&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>doWork</code>：创建一个什么都不做的监控区，等待重启</li><li>设置9秒后关闭管理员及其监控区</li><li>监听管理员心跳</li></ul><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>18:36:59 ward: hello, I&#39;m irresponsible...
18:37:03 steward: ward unhealthy; restarting
18:37:03 ward: hello, I&#39;m irresponsible...
18:37:03 ward: I&#39;m halting
18:37:07 steward: ward unhealthy; restarting
18:37:07 ward: hello, I&#39;m irresponsible...
18:37:07 ward: I&#39;m halting
18:37:08 Halting steward and ward
18:37:08 Done	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,34),w={href:"https://book.douban.com/subject/30424330/",target:"_blank",rel:"noopener noreferrer"};function f(y,g){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,n("h3",k,[r,s(),n("a",d,[s("golang.org/x/time/rate"),t(a)])]),n("p",null,[n("a",v,[m,t(a)]),s("实现令牌桶限速器，其中：")]),b,n("ol",null,[n("li",null,[n("a",w,[s("Go 语言并发之道"),t(a)])])])])}const x=e(i,[["render",f],["__file","05.massive_concurrency.html.vue"]]);export{x as default};
