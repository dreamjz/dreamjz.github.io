import{_ as t,Z as p,$ as e,a0 as n,a1 as o,a2 as c,a4 as s,H as l}from"./framework-d03928c9.js";const i={},u=s(`<h2 id="_4-1-for-select" tabindex="-1"><a class="header-anchor" href="#_4-1-for-select" aria-hidden="true">#</a> 4.1 for-select</h2><p><code>for-select</code>模式常见的有两种：</p><ol><li>向channel中发送迭代变量</li><li>循环等待停止</li></ol><h3 id="向channel中发送迭代变量" tabindex="-1"><a class="header-anchor" href="#向channel中发送迭代变量" aria-hidden="true">#</a> 向channel中发送迭代变量</h3><p>将迭代的内容持续的发送到通道中。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>strs <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> str <span class="token operator">:=</span> <span class="token keyword">range</span> strs <span class="token punctuation">{</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
        <span class="token keyword">return</span> 
    <span class="token keyword">case</span> ch <span class="token operator">&lt;-</span> str<span class="token punctuation">:</span>
    	<span class="token comment">// ...    </span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环等待停止" tabindex="-1"><a class="header-anchor" href="#循环等待停止" aria-hidden="true">#</a> 循环等待停止</h3><p>创建无限循环，直到触发停止条件。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
        <span class="token keyword">return</span> 
    <span class="token keyword">case</span> <span class="token operator">...</span> <span class="token comment">//</span>
    <span class="token operator">...</span> 
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token comment">// 其余的工作</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 或者</span>
<span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
    	<span class="token keyword">return</span> 
    <span class="token operator">...</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 其余的工作</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-防止-goroutine-泄露-done-channel-模式" tabindex="-1"><a class="header-anchor" href="#_4-2-防止-goroutine-泄露-done-channel-模式" aria-hidden="true">#</a> 4.2 防止 goroutine 泄露 (done-channel 模式)</h2><p>一个 goroutine 有以下几种方式终止：</p><ol><li>工作已完成</li><li>触发panic终止工作</li><li>收到其他的goroutine的通知，停止工作</li></ol><p>当一个goroutine处于<strong>阻塞</strong>状态且无法被唤醒或者没有被<strong>通知</strong>何时停止时，其将一直保持在内存中，过多的类似情况将会导致内存泄露。</p><h3 id="goroutine-持续处于阻塞态" tabindex="-1"><a class="header-anchor" href="#goroutine-持续处于阻塞态" aria-hidden="true">#</a> goroutine 持续处于阻塞态</h3><p>例如，下面的代码中的gorutine将一直处于阻塞态：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">fs1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	doWork <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>strch <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
		completed <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>completed<span class="token punctuation">)</span>
			<span class="token keyword">for</span> str <span class="token operator">:=</span> <span class="token keyword">range</span> strch <span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> completed
	<span class="token punctuation">}</span>

	completed <span class="token operator">:=</span> <span class="token function">doWork</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>
	<span class="token operator">&lt;-</span>completed
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码向<code>doWork</code>传入了一个<code>nil</code>通道，新的goroutine在读取时将永远进入阻塞状态。</p><p>避免这种情况，需要向goroutine传入一个通道以通知其何时结束：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">fs2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	doWork <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>strch <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
		completed <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>completed<span class="token punctuation">)</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;goroutine starting ...&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">for</span> <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> str <span class="token operator">:=</span> <span class="token operator">&lt;-</span>strch<span class="token punctuation">:</span>
					fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> completed
	<span class="token punctuation">}</span>

	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	completed <span class="token operator">:=</span> <span class="token function">doWork</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">,</span> done<span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Canceling work of goroutine...&quot;</span><span class="token punctuation">)</span>
		<span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token operator">&lt;-</span>completed
<span class="token punctuation">}</span>

<span class="token comment">// output</span>
goroutine starting <span class="token operator">...</span>
Canceling work of goroutine<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，父协程的另一个子协程在等待一秒后关闭通道，此时正在工作（被阻塞）的子协程收到通知停止工作。</p><h3 id="goroutine-持续工作" tabindex="-1"><a class="header-anchor" href="#goroutine-持续工作" aria-hidden="true">#</a> goroutine 持续工作</h3><p>下例中，协程会持续工作下去无法被停止：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">fs3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	randGen <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
			<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Closing output channel...&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">for</span> <span class="token punctuation">{</span>
				out <span class="token operator">&lt;-</span> rand<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> out
	<span class="token punctuation">}</span>

	in <span class="token operator">:=</span> <span class="token function">randGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> n<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>in<span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Receiving: &quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Receiving done...&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
Receiving<span class="token punctuation">:</span>  <span class="token number">476485380518016684</span>
Receiving<span class="token punctuation">:</span>  <span class="token number">6023384071323969085</span>
Receiving<span class="token punctuation">:</span>  <span class="token number">2320634544446194988</span>
Receiving<span class="token punctuation">:</span>  <span class="token number">7599105886652685216</span>
Receiving<span class="token punctuation">:</span>  <span class="token number">6600473839265802854</span>
Receiving done<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，父协程在读取了5个数字后结束，但是子协程依然在无限循环中工作下去。</p><p>可以向子协程传入通道以通知其停止。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">fs4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	randGen <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
			<span class="token keyword">for</span> <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> rand<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> out
	<span class="token punctuation">}</span>

	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	in <span class="token operator">:=</span> <span class="token function">randGen</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> n<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>in<span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Receiving: &quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// output</span>
Receiving<span class="token punctuation">:</span>  <span class="token number">5765501585996642873</span>
Receiving<span class="token punctuation">:</span>  <span class="token number">1097901739950203962</span>
Receiving<span class="token punctuation">:</span>  <span class="token number">5923671937547588944</span>
Receiving<span class="token punctuation">:</span>  <span class="token number">2825262626940893067</span>
Receiving<span class="token punctuation">:</span>  <span class="token number">2469149525637622718</span>
Receiving done<span class="token operator">...</span>
Closing output channel<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，子协程的输出通道被关闭了，子协程的工作也结束了。</p><p>为保证goroutine不会泄露，可以遵守约定：<strong>如果一个goroutine负责创建goroutine，那么其应当负责确保创建的子goroutine可以被停止</strong></p><h2 id="_4-3-or-channel" tabindex="-1"><a class="header-anchor" href="#_4-3-or-channel" aria-hidden="true">#</a> 4.3 or-channel</h2><p>当存在多个<code>done-channel</code>模式时，若需要其中任意一个关闭时，关闭整体的<code>done-channle</code>，可以采用<code>or-channel</code>模式。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">or</span><span class="token punctuation">(</span>chans <span class="token operator">...</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> <span class="token function">len</span><span class="token punctuation">(</span>chans<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 递归出口</span>
	<span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> chans<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>

	orDone <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>orDone<span class="token punctuation">)</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>chans<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>chans<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>	
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token function">append</span><span class="token punctuation">(</span>chans<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> orDone<span class="token punctuation">)</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">// 递归的创建 done-chan 树</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> orDone
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">orDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sig <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>after time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
		done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
			time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>after<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> done
	<span class="token punctuation">}</span>

	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token operator">&lt;-</span><span class="token function">or</span><span class="token punctuation">(</span>
		<span class="token function">sig</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Hour<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">sig</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Minute<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">sig</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Hour<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">sig</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Minute<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">sig</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Done after: &quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// output</span>
Done after<span class="token punctuation">:</span>  <span class="token number">1</span><span class="token punctuation">.</span>0027397s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>or</code>：递归的创建了一个<code>done-channel</code> 树形结构，只要其中有一个<code>done-channel</code>被关闭，就会关闭其父节点的<code>done-channel</code>直到最初的根节点<code>done-channel</code>被关闭</li><li><code>sig</code>：创建了一个会定时关闭的<code>chan</code></li></ul><p>由输出可以看出，在<code>1s</code>之后，其中的一个<code>chan</code>被关闭，导致<strong>整体</strong>的<code>or-chan</code>被关闭了。</p><h2 id="_4-4-错误处理" tabindex="-1"><a class="header-anchor" href="#_4-4-错误处理" aria-hidden="true">#</a> 4.4 错误处理</h2><p>当 goroutine 中出现<strong>错误</strong>时应该将其和<strong>执行结果结合</strong>并<strong>返回</strong>给父goroutine进行处理。</p><p>下例中，goroutine 将出现的错误进行简单的处理，而父 goroutine 对出现的错误一无所知。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">eh1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	checkStatus <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>urls <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token operator">*</span>http<span class="token punctuation">.</span>Response <span class="token punctuation">{</span>
		respch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>http<span class="token punctuation">.</span>Response<span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>respch<span class="token punctuation">)</span>
			<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> url <span class="token operator">:=</span> <span class="token keyword">range</span> urls <span class="token punctuation">{</span>
				resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
				<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
					fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
					<span class="token keyword">continue</span>
				<span class="token punctuation">}</span>

				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> respch <span class="token operator">&lt;-</span> resp<span class="token punctuation">:</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> respch
	<span class="token punctuation">}</span>

	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

	urls <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;https://google.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://badhost&quot;</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> resp <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">checkStatus</span><span class="token punctuation">(</span>urls<span class="token punctuation">,</span> done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Response: &quot;</span><span class="token punctuation">,</span> resp<span class="token punctuation">.</span>Status<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将返回结果和错误耦合在一起之后返回给父 goroutine， 此时可以使用标准的<code>error</code>处理流程进行处理，而且父 goroutine 能够对子协程的执行情况有更多的控制。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Result <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	err  <span class="token builtin">error</span>
	resp <span class="token operator">*</span>http<span class="token punctuation">.</span>Response
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">eh2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	checkStatus <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>urls <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token operator">*</span>Result <span class="token punctuation">{</span>
		resCh <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>Result<span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>resCh<span class="token punctuation">)</span>
			<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> url <span class="token operator">:=</span> <span class="token keyword">range</span> urls <span class="token punctuation">{</span>
				resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>

				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> resCh <span class="token operator">&lt;-</span> <span class="token operator">&amp;</span>Result<span class="token punctuation">{</span>err<span class="token punctuation">,</span> resp<span class="token punctuation">}</span><span class="token punctuation">:</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> resCh
	<span class="token punctuation">}</span>

	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

	urls <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;https://google.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://badhost&quot;</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> res <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">checkStatus</span><span class="token punctuation">(</span>urls<span class="token punctuation">,</span> done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> res<span class="token punctuation">.</span>err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Err: &quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Status: &quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>resp<span class="token punctuation">.</span>Status<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// output</span>
Status<span class="token punctuation">:</span>  <span class="token number">200</span> OK
Err<span class="token punctuation">:</span>  Get <span class="token string">&quot;https://badhost&quot;</span><span class="token punctuation">:</span> EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-pipeline" tabindex="-1"><a class="header-anchor" href="#_4-5-pipeline" aria-hidden="true">#</a> 4.5 Pipeline</h2><p>Pipeline 是指将数据视作<strong>流</strong>进行处理，数据会从一个 stage 传输到另一个 stage。（备注：这里书中说的 stage 可以理解为流水线工作的一个步骤/流程）</p><h3 id="批处理" tabindex="-1"><a class="header-anchor" href="#批处理" aria-hidden="true">#</a> 批处理</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">batchProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	multiply <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>vals <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> multiplier <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
		muls <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>vals<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> vals <span class="token punctuation">{</span>
			muls<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> v <span class="token operator">*</span> multiplier
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> muls
	<span class="token punctuation">}</span>

	add <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>vals <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> additive <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
		adds <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>vals<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> vals <span class="token punctuation">{</span>
			adds<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> v <span class="token operator">+</span> additive
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> adds
	<span class="token punctuation">}</span>

	ints <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token function">multiply</span><span class="token punctuation">(</span>ints<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d, &quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述的例子中，每个 stage 处理一个切片内的所有数据，并返回一个切片的，这种操作形式被称为<strong>批处理</strong>。</p><p>可以看出，批处理每个 stage 都要维持<strong>两倍</strong>的切片<strong>内存</strong>占用。</p><h3 id="流处理" tabindex="-1"><a class="header-anchor" href="#流处理" aria-hidden="true">#</a> 流处理</h3><p>若将上述的例子改成：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">streamProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	multiply <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">,</span> mul <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> val <span class="token operator">*</span> mul
	<span class="token punctuation">}</span>

	add <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">,</span> additive <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> val <span class="token operator">+</span> additive
	<span class="token punctuation">}</span>

	ints <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> ints <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">multiply</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;, &quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这次每次函数只处理一个数据，被称作<strong>流处理</strong>。</p><p>上述的处理流程每放在了<code>for</code>循环之中进行<strong>顺序处理</strong>，可将每个 stage 交个一个 goroutine 来处理可以极大的提高效率。</p><h4 id="使用-channel" tabindex="-1"><a class="header-anchor" href="#使用-channel" aria-hidden="true">#</a> 使用 channel</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">streamProcWithChan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	intGen <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> vals <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
			<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> vals <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> v<span class="token punctuation">:</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> out
	<span class="token punctuation">}</span>

	multiply <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> mul <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
			<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> in <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> v <span class="token operator">*</span> mul<span class="token punctuation">:</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> out
	<span class="token punctuation">}</span>

	add <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> additive <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
			<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> in <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> v <span class="token operator">+</span> additive<span class="token punctuation">:</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> out
	<span class="token punctuation">}</span>

	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

	<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">add</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token function">multiply</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token function">intGen</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>defer close(done)</code>：创建了一个通道，并在结束时关闭；因为其他的子协程均使用了<code>done-channel</code>模式，那么在父协程关闭<code>done</code>的时候，所有的子协程都将停止工作</li><li>整个处理流程是流水线式的：<code>intGen --&gt; multiply --&gt; add --&gt; output</code>，因为不同的协程之间使用<code>channel</code>通信所以是并发安全的</li></ul><h3 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器" aria-hidden="true">#</a> 生成器</h3><h4 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat" aria-hidden="true">#</a> repeat</h4><p>创建一个 repeat 生成器，用于重复的<strong>生产</strong>（生成）传入的值。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">repeat</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> vals <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> vals <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> v<span class="token punctuation">:</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>repeat</code> 会不断的将输入的值重复传入<code>channel</code>中，直到被通知停止为止。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">gen1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

	<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">take</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token function">repeat</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">take</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
				<span class="token keyword">return</span>
			<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> <span class="token operator">&lt;-</span>in<span class="token punctuation">:</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
<span class="token number">1</span>
<span class="token number">1</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>take</code>：从输入的通道中取出指定数目的元素，并放入输出的通道中</li></ul><h4 id="repeat-function" tabindex="-1"><a class="header-anchor" href="#repeat-function" aria-hidden="true">#</a> repeat function</h4><p>若将<code>repeat</code>生成器的参数改为函数类型，那么就可以实现重复调用函数的功能。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">repeatFn</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> fn <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
				<span class="token keyword">return</span>
			<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">gen2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	genRand <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

	<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">take</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token function">repeatFn</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> genRand<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// output</span>
<span class="token number">91</span>
<span class="token number">85</span>
<span class="token number">99</span>
<span class="token number">47</span>
<span class="token number">74</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-6-fan-in-fan-out-扇入-扇出" tabindex="-1"><a class="header-anchor" href="#_4-6-fan-in-fan-out-扇入-扇出" aria-hidden="true">#</a> 4.6 Fan-in Fan-out 扇入 扇出</h2><ul><li><strong>扇入(fan-in)</strong>： 将<strong>多个</strong>channel的结果<strong>组合</strong>到<strong>一个</strong>channel中</li><li><strong>扇出(fan-out)</strong>：启用<strong>多个</strong>channel处理pipeline的<strong>输入</strong></li></ul><p>使用扇入扇出模式需要满足两个条件：</p><ol><li>每次计算<strong>不依赖</strong>之前的 stage 的计算结果； 因为并发的过程中，stage 的运行顺序是完全未知的</li><li>运行需要很长时间； 若pipeline的某一个 stage 运行时间非常长，会导致整个pipeline被阻塞</li></ol><p>下面的例子中，从任意多个随机数中寻找10个素数：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">findPrime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	randIntn <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">5000000000</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
	in <span class="token operator">:=</span> <span class="token function">repeatFn</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> randIntn<span class="token punctuation">)</span>

	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> prime <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">take</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token function">primeFinder</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> in<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>prime<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Processing time: &quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token function">primeFinder</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
		<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> in <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
				<span class="token keyword">return</span>
			<span class="token keyword">default</span><span class="token punctuation">:</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">if</span> <span class="token function">isPrime</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> v<span class="token punctuation">:</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">isPrime</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> n <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>
	r <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">Sqrt</span><span class="token punctuation">(</span><span class="token function">float64</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> r<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> n<span class="token operator">%</span>i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
<span class="token number">4273728947</span>
<span class="token number">173486111</span>
<span class="token number">1703994883</span>
<span class="token number">3005863829</span>
<span class="token number">1167579209</span>
<span class="token number">116591549</span>
<span class="token number">2948090351</span>
<span class="token number">874494619</span>
<span class="token number">362146943</span>
<span class="token number">2720562833</span>
Processing time<span class="token punctuation">:</span>  <span class="token number">4</span><span class="token punctuation">.</span>293ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为每次寻找素数的操作，<strong>不依赖</strong>其他的 stage，那么可以针对寻找素数的 stage 改进为<strong>扇出</strong>：</p><ol><li>获取CPU核心数</li><li>调用多次<code>primeFinder(done, in)</code>，使用多个 goroutine 来寻找素数</li></ol><p>在将<strong>多个</strong> goroutine 的输出流<strong>合并</strong>为一个，即<strong>扇入</strong>。然后从合并的输出流中读取结果。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">findPrimesUsingFaninout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	randIntn <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">5000000000</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

	in <span class="token operator">:=</span> <span class="token function">repeatFn</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> randIntn<span class="token punctuation">)</span>

	<span class="token comment">// fan out</span>
	numFinders <span class="token operator">:=</span> runtime<span class="token punctuation">.</span><span class="token function">NumCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	finders <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> numFinders<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> finders <span class="token punctuation">{</span>
		finders<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">primeFinder</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> in<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// fan in</span>
	<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">take</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token function">fanIn</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> finders<span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Processing time: &quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">fanIn</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> chs <span class="token operator">...</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>

	multiplex <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> c <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
				<span class="token keyword">return</span>
			<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> v<span class="token punctuation">:</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// get value from every channel</span>
	<span class="token comment">// and put into out</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>chs<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> chs <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">multiplex</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// waiting for reading operations</span>
	<span class="token comment">// done, then close out channel</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
<span class="token number">85825093</span>
<span class="token number">115703509</span>
<span class="token number">2927984149</span>
<span class="token number">4584998707</span>
<span class="token number">3213011077</span>
<span class="token number">1945956029</span>
<span class="token number">429187747</span>
<span class="token number">195600227</span>
<span class="token number">4355002273</span>
<span class="token number">3875919389</span>
Processing time<span class="token punctuation">:</span>  <span class="token number">1</span><span class="token punctuation">.</span>0415ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<strong>扇入</strong>函数<code>fanIn</code>中：</p><ol><li>启用了多个 goroutine，将<strong>多个输入</strong>流中的结果放入<strong>同一个输出</strong>流中</li><li>启用了单独的 goroutine，在<strong>合并结束</strong>后<strong>关闭</strong>输出流</li></ol><p>从输出结果上看，使用扇入扇出之后，执行时间减少了约75%。</p><h2 id="_4-7-or-done-channel" tabindex="-1"><a class="header-anchor" href="#_4-7-or-done-channel" aria-hidden="true">#</a> 4.7 or-done-channel</h2><p>当从 channel 中读取时，若需要判断当前操作是否被取消，可能需要如下代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>loop<span class="token punctuation">:</span>
<span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
    	<span class="token keyword">break</span> loop
    <span class="token keyword">case</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>myChan<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
            <span class="token comment">// 退出或者退出循环</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 对获取的 v 进行操作</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若逻辑比较复杂时，特别是有多个嵌套的循环时，代码的可读性会下降。</p><p>可以使用 goroutine 来封装这样的操作：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>orDone <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> c <span class="token operator">&lt;-</span><span class="token keyword">chan</span> any<span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> any <span class="token punctuation">{</span>
    out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> any<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">{</span>
            <span class="token keyword">select</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
                <span class="token keyword">return</span> 
            <span class="token keyword">case</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c<span class="token punctuation">:</span>
                <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> 
                <span class="token punctuation">}</span>    
                <span class="token keyword">select</span> <span class="token punctuation">{</span>
                <span class="token keyword">case</span> out <span class="token operator">&lt;-</span> v<span class="token punctuation">:</span>
                <span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>    
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> out
<span class="token punctuation">}</span>

<span class="token comment">// 使用正常的循环模式</span>
<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">orDone</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> myChan<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>orDone</code>封装了详细的处理过程之后，就能够用一般的循环模式，提高了代码的可读性。</p><h2 id="_4-8-tee-channel" tabindex="-1"><a class="header-anchor" href="#_4-8-tee-channel" aria-hidden="true">#</a> 4.8 tee-channel</h2><p><code>tee-channel</code>模式可以将<strong>一个</strong> channel 中的数据<strong>发送</strong>给两个或<strong>多个</strong>不同的 channel 中。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">teeCh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

	randGen <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	out1<span class="token punctuation">,</span> out2 <span class="token operator">:=</span> <span class="token function">tee</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token function">take</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token function">repeatFn</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> randGen<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> out1 <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;out1: %d, out2: %d\\n&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">,</span> <span class="token operator">&lt;-</span>out2<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">orDoneCh</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
				<span class="token keyword">return</span>
			<span class="token keyword">case</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>in<span class="token punctuation">:</span>
				<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
				<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> v<span class="token punctuation">:</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">tee</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	out1<span class="token punctuation">,</span> out2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out1<span class="token punctuation">)</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out2<span class="token punctuation">)</span>

		<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">orDoneCh</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> in<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			out1A<span class="token punctuation">,</span> out2A <span class="token operator">:=</span> out1<span class="token punctuation">,</span> out2 <span class="token comment">// 使用临时变量</span>
			<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> out1A <span class="token operator">&lt;-</span> v<span class="token punctuation">:</span>
					out1A <span class="token operator">=</span> <span class="token boolean">nil</span> <span class="token comment">// 阻塞写入，以便另一个继续</span>
				<span class="token keyword">case</span> out2A <span class="token operator">&lt;-</span> v<span class="token punctuation">:</span>
					out2A <span class="token operator">=</span> <span class="token boolean">nil</span> <span class="token comment">// 阻塞写入，以便另一个继续</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> out1<span class="token punctuation">,</span> out2
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
out1<span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span> out2<span class="token punctuation">:</span> <span class="token number">7</span>
out1<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> out2<span class="token punctuation">:</span> <span class="token number">4</span>
out1<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> out2<span class="token punctuation">:</span> <span class="token number">12</span>
out1<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span> out2<span class="token punctuation">:</span> <span class="token number">16</span>
out1<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span> out2<span class="token punctuation">:</span> <span class="token number">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在函数<code>tee</code>中：</p><ol><li><code>out1A, out2A</code>：使用了两个临时变量</li><li><code>out1A = nil</code>,<code>out2A = nil</code>：每次<strong>成功写入</strong>后，将临时变量<strong>置空</strong>，以便下一次能够写入另一个通道</li></ol><h2 id="_4-9-桥接-channel" tabindex="-1"><a class="header-anchor" href="#_4-9-桥接-channel" aria-hidden="true">#</a> 4.9 桥接 channel</h2><p>若需要从通道的通道中读取一系列的值，使用桥接模式可以使得调用者只需关注通道中的值，无需处理每个通道。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">func</span> <span class="token function">bridge</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> chIn <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token comment">// 从通道的通道中获取通道</span>
			<span class="token keyword">var</span> c <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
				<span class="token keyword">return</span>
			<span class="token keyword">case</span> vc<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>chIn<span class="token punctuation">:</span>
				<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">}</span>
				c <span class="token operator">=</span> vc
			<span class="token punctuation">}</span>

			<span class="token comment">// 遍历通道，获取值</span>
			<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> c <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">return</span>
				<span class="token keyword">case</span> out <span class="token operator">&lt;-</span> v<span class="token punctuation">:</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>var c &lt;-chan int</code>：临时变量，获取通道中的通道</li><li><code>case out &lt;- v:</code>：将每个通道的值写入同一通道</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">bc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	genCh <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
			<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
				ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
				ch <span class="token operator">&lt;-</span> i
				<span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
				out <span class="token operator">&lt;-</span> ch
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> out
	<span class="token punctuation">}</span>

	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
	<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">bridge</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token function">genCh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
<span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-10-队列" tabindex="-1"><a class="header-anchor" href="#_4-10-队列" aria-hidden="true">#</a> 4.10 队列</h2><p>在 pipeline 中引入队列以提高系统性能，其适用于以下情况：</p><ul><li>一个 stage 中批处理可以节省时间</li><li>一个 stage 产生的延迟会在系统中产生反馈回环； 例如，将数据缓存到内存中，比直接发送到硬盘要快很多；若直接发送到硬盘，当某个 stage 出现阻塞时，整个系统都会阻塞</li></ul><p>使用队列优化，可以使用利特尔法则：</p>`,97),k=n("p",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"L"),n("mo",null,"="),n("mi",null,"λ"),n("mi",null,"W")]),n("annotation",{encoding:"application/x-tex"},"L=λW")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord mathnormal"},"L"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6944em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"λW")])])])],-1),r=s(`<ul><li>L：系统平均负载数</li><li>λ：负载平均到达率</li><li>W: 负载在系统中花费的平均时间</li></ul><h2 id="_4-11-context" tabindex="-1"><a class="header-anchor" href="#_4-11-context" aria-hidden="true">#</a> 4.11 context</h2><p><code>context.Context</code>接口定义了一组方法：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Context <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Deadline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>deadline time<span class="token punctuation">.</span>Time<span class="token punctuation">,</span> ok <span class="token builtin">bool</span><span class="token punctuation">)</span>
	<span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
	<span class="token function">Value</span><span class="token punctuation">(</span>key any<span class="token punctuation">)</span> any
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Deadline()</code>：当为该 context 工作的 work 被取消时，返回设定的 deadline；若没有设定 deadline，ok将为 false</li><li><code>Done()</code>：当为该 context 工作的 work 被取消时，返回已关闭的 channel；若未被取消，则可能返回 nil</li><li><code>Err()</code>：返回当前工作被取消的原因，未被取消则返回 nil</li><li><code>Value(key any)</code>：返回和此 context 关联的 key 的 value，若没有则返回 nil</li></ul><p><code>contex</code>中有两个函数用于生成<strong>空的</strong><code>context.Context</code>:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Context
<span class="token keyword">func</span> <span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Context
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Background()</code>：Background returns a non-nil, empty Context. It is never canceled, has no values, and has no deadline. It is typically used by the main function, initialization, and tests, and as the top-level Context for incoming requests.</li><li><code>TODO</code>：TODO returns a non-nil, empty Context. Code should use context.TODO when it&#39;s unclear which Context to use or it is not yet available (because the surrounding function has not yet been extended to accept a Context parameter).</li></ul><p>以下函数用于生成带有条件的<code>context.Context</code>：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">WithCancel</span><span class="token punctuation">(</span>parent Context<span class="token punctuation">)</span> <span class="token punctuation">(</span>ctx Context<span class="token punctuation">,</span> cancel CancelFunc<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">WithDeadline</span><span class="token punctuation">(</span>parent Context<span class="token punctuation">,</span> deadline time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token punctuation">(</span>Context<span class="token punctuation">,</span> CancelFunc<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">WithTimeout</span><span class="token punctuation">(</span>parent Context<span class="token punctuation">,</span> timeout time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">(</span>Context<span class="token punctuation">,</span> CancelFunc<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>WithCancel</code>：需要主动调用<code>CancelFunc</code>才能取消</li><li><code>WithDeadline</code>：当时间到达设置的<code>deadline</code>时自动取消</li><li><code>WithTimeout</code>：当经过的时间达到 <code>timeout</code>时，自动取消</li></ul><h3 id="done-channel模式-和-context包" tabindex="-1"><a class="header-anchor" href="#done-channel模式-和-context包" aria-hidden="true">#</a> <code>done-channel</code>模式 和 <code>context</code>包</h3><p>下面的示例先使用<code>done-channel</code>模式：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
	LocaleCanceled    <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;locale canceled&quot;</span><span class="token punctuation">)</span>
	LocaleUnsupported <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;locale unsupported&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">doneChannelPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>

	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		err <span class="token operator">:=</span> <span class="token function">printGreeting</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		err <span class="token operator">:=</span> <span class="token function">printFarewell</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printFarewell</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	farewell<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">genFarewell</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>farewell<span class="token punctuation">,</span> <span class="token string">&quot; world&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printGreeting</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	greeting<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">genGreeting</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>greeting<span class="token punctuation">,</span> <span class="token string">&quot; world&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">genFarewell</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> loc<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">locale</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> err
	<span class="token keyword">case</span> loc <span class="token operator">==</span> <span class="token string">&quot;en/us&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;goodbye&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> LocaleUnsupported
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">genGreeting</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> loc<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">locale</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> err
	<span class="token keyword">case</span> loc <span class="token operator">==</span> <span class="token string">&quot;en/us&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> LocaleUnsupported
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">locale</span><span class="token punctuation">(</span>done <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">select</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> LocaleCanceled
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token string">&quot;en/us&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，<code>locale</code>函数需要3秒之后才会执行。因为并发函数执行的顺序无法预知，打招呼函数可能在说再见之后执行。</p><p>若需要新增两个要求：</p><ol><li>若<code>genGreeting</code>函数不想等待<code>locale</code>函数太长时间，在等待1s之后就主动取消执行</li><li>若<code>genGreeting</code>取消，<code>genFarewell</code>也会被取消</li></ol><p>此时可以使用<code>context</code>包方便的实现：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">usingCtx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithCancel</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">printGreetingWithCtx</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 取消所有的 goroutine 工作</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">printFarewellWithCtx</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printGreetingWithCtx</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	greeting<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">genGreetingWithCtx</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>greeting<span class="token punctuation">,</span> <span class="token string">&quot; world&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printFarewellWithCtx</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	farewell<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">genFarewellWithCtx</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>farewell<span class="token punctuation">,</span> <span class="token string">&quot; world&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">genFarewellWithCtx</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> loc<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">localeWithCtx</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> err
	<span class="token keyword">case</span> loc <span class="token operator">!=</span> <span class="token string">&quot;en/us&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> LocaleUnsupported
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;goodbye&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">genGreetingWithCtx</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">switch</span> loc<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">localeWithCtx</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> err
	<span class="token keyword">case</span> loc <span class="token operator">!=</span> <span class="token string">&quot;en/us&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> LocaleUnsupported
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">localeWithCtx</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">select</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ctx<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span><span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token string">&quot;en/us&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
context deadline exceeded
context canceled
<span class="token comment">// test time</span>
<span class="token operator">--</span><span class="token operator">-</span> PASS<span class="token punctuation">:</span> Test_usingCtx <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">.</span>01s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由输出可以看出</p><ul><li><code>context deadline exceeded</code>: 当1s时间到的时候，<code>ctx</code>被关闭，<code>localeWithCtx</code>函数停止工作并返回</li><li><code>context canceled</code>：当<code>printGreetingWithCtx</code>被取消时，主动取消了<code>ctx</code>，导致<code>genFarewell</code>调用链上的<code>localeWithCtx</code>被停止</li></ul><h3 id="数据存储和获取" tabindex="-1"><a class="header-anchor" href="#数据存储和获取" aria-hidden="true">#</a> 数据存储和获取</h3><p><code>context.Context</code>支持存储<code>key-val</code>键值对：</p><ul><li><code>WithValue(parent Context, key, val any) Context</code>：可以设置键值对，并返回新的<code>Context</code></li><li><code>Context.Value(key any) any</code>：则可以根据传入的<code>key</code>返回<code>value</code></li></ul><p>不是所有的数据都适合放入<code>Context</code>中，应该遵循以下建议：</p><ol><li><strong>数据应该通过进程和API边界</strong></li><li><strong>数据应该是不可变的</strong></li><li><strong>数据应该趋向于简单类型</strong></li><li><strong>数据应该是数据，而不是类型或方法</strong></li><li><strong>数据应该用于修饰操作，而不是驱动操作</strong></li></ol><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,27),d={href:"https://book.douban.com/subject/30424330/",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const a=l("ExternalLinkIcon");return p(),e("div",null,[u,k,r,n("ol",null,[n("li",null,[n("a",d,[o("Go 语言并发之道"),c(a)])])])])}const y=t(i,[["render",v],["__file","04.pattern.html.vue"]]);export{y as default};
