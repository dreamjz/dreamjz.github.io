import{_ as e,Z as p,$ as o,a0 as n,a1 as a,a2 as t,a3 as c,H as i}from"./framework-dee406ed.js";const l={},u=c(`<h2 id="_1-数据结构" tabindex="-1"><a class="header-anchor" href="#_1-数据结构" aria-hidden="true">#</a> 1. 数据结构</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> hchan <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	qcount   <span class="token builtin">uint</span>
	dataqsiz <span class="token builtin">uint</span>
	buf      unsafe<span class="token punctuation">.</span>Pointer
	elemsize <span class="token builtin">uint16</span>
	closed   <span class="token builtin">uint32</span>
	elemtype <span class="token operator">*</span>_type
	sendx    <span class="token builtin">uint</span>
	recvx    <span class="token builtin">uint</span>
	recvq    waitq
	sendq    waitq

	lock mutex
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>qcount</code>：Channel 元素个数</li><li><code>dataqsiz</code>：Channel 循环队列长度</li><li><code>buf</code>：Channel 缓冲区数据指针</li><li><code>sendx</code>：发送操作处理到的位置</li><li><code>recvx</code>：接收操作处理到的位置</li><li><code>elemtype</code>, <code>elemsize</code>：Channel 元素的类型和大小</li><li><code>recvq</code>，<code>sendq</code>：阻塞的 goroutine， 双向链表</li></ul><h2 id="_2-发送数据" tabindex="-1"><a class="header-anchor" href="#_2-发送数据" aria-hidden="true">#</a> 2. 发送数据</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">chansend</span><span class="token punctuation">(</span>c <span class="token operator">*</span>hchan<span class="token punctuation">,</span> ep unsafe<span class="token punctuation">.</span>Pointer<span class="token punctuation">,</span> block <span class="token builtin">bool</span><span class="token punctuation">,</span> callerpc <span class="token builtin">uintptr</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> c <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>block <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>
		<span class="token function">gopark</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> waitReasonChanSendNilChan<span class="token punctuation">,</span> traceEvGoStop<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;unreachable&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> debugChan <span class="token punctuation">{</span>
		<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;chansend: chan=&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
		<span class="token function">racereadpc</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">raceaddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> callerpc<span class="token punctuation">,</span> abi<span class="token punctuation">.</span><span class="token function">FuncPCABIInternal</span><span class="token punctuation">(</span>chansend<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token operator">!</span>block <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">.</span>closed <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">full</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> t0 <span class="token builtin">int64</span>
	<span class="token keyword">if</span> blockprofilerate <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		t0 <span class="token operator">=</span> <span class="token function">cputicks</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">lock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>

	<span class="token keyword">if</span> c<span class="token punctuation">.</span>closed <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">plainError</span><span class="token punctuation">(</span><span class="token string">&quot;send on closed channel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> sg <span class="token operator">:=</span> c<span class="token punctuation">.</span>recvq<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> sg <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">// Found a waiting receiver. We pass the value we want to send</span>
		<span class="token comment">// directly to the receiver, bypassing the channel buffer (if any).</span>
		<span class="token function">send</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> sg<span class="token punctuation">,</span> ep<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> c<span class="token punctuation">.</span>qcount <span class="token operator">&lt;</span> c<span class="token punctuation">.</span>dataqsiz <span class="token punctuation">{</span>
		<span class="token comment">// Space is available in the channel buffer. Enqueue the element to send.</span>
		qp <span class="token operator">:=</span> <span class="token function">chanbuf</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> c<span class="token punctuation">.</span>sendx<span class="token punctuation">)</span>
		<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
			<span class="token function">racenotify</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> c<span class="token punctuation">.</span>sendx<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token function">typedmemmove</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>elemtype<span class="token punctuation">,</span> qp<span class="token punctuation">,</span> ep<span class="token punctuation">)</span>
		c<span class="token punctuation">.</span>sendx<span class="token operator">++</span>
		<span class="token keyword">if</span> c<span class="token punctuation">.</span>sendx <span class="token operator">==</span> c<span class="token punctuation">.</span>dataqsiz <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span>sendx <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token punctuation">}</span>
		c<span class="token punctuation">.</span>qcount<span class="token operator">++</span>
		<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token operator">!</span>block <span class="token punctuation">{</span>
		<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Block on the channel. Some receiver will complete our operation for us.</span>
	gp <span class="token operator">:=</span> <span class="token function">getg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	mysg <span class="token operator">:=</span> <span class="token function">acquireSudog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	mysg<span class="token punctuation">.</span>releasetime <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">if</span> t0 <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		mysg<span class="token punctuation">.</span>releasetime <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// No stack splits between assigning elem and enqueuing mysg</span>
	<span class="token comment">// on gp.waiting where copystack can find it.</span>
	mysg<span class="token punctuation">.</span>elem <span class="token operator">=</span> ep
	mysg<span class="token punctuation">.</span>waitlink <span class="token operator">=</span> <span class="token boolean">nil</span>
	mysg<span class="token punctuation">.</span>g <span class="token operator">=</span> gp
	mysg<span class="token punctuation">.</span>isSelect <span class="token operator">=</span> <span class="token boolean">false</span>
	mysg<span class="token punctuation">.</span>c <span class="token operator">=</span> c
	gp<span class="token punctuation">.</span>waiting <span class="token operator">=</span> mysg
	gp<span class="token punctuation">.</span>param <span class="token operator">=</span> <span class="token boolean">nil</span>
	c<span class="token punctuation">.</span>sendq<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>mysg<span class="token punctuation">)</span>
	<span class="token comment">// Signal to anyone trying to shrink our stack that we&#39;re about</span>
	<span class="token comment">// to park on a channel. The window between when this G&#39;s status</span>
	<span class="token comment">// changes and when we set gp.activeStackChans is not safe for</span>
	<span class="token comment">// stack shrinking.</span>
	atomic<span class="token punctuation">.</span><span class="token function">Store8</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>gp<span class="token punctuation">.</span>parkingOnChan<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token function">gopark</span><span class="token punctuation">(</span>chanparkcommit<span class="token punctuation">,</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span><span class="token punctuation">,</span> waitReasonChanSend<span class="token punctuation">,</span> traceEvGoBlockSend<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token comment">// Ensure the value being sent is kept alive until the</span>
	<span class="token comment">// receiver copies it out. The sudog has a pointer to the</span>
	<span class="token comment">// stack object, but sudogs aren&#39;t considered as roots of the</span>
	<span class="token comment">// stack tracer.</span>
	<span class="token function">KeepAlive</span><span class="token punctuation">(</span>ep<span class="token punctuation">)</span>

	<span class="token comment">// someone woke us up.</span>
	<span class="token keyword">if</span> mysg <span class="token operator">!=</span> gp<span class="token punctuation">.</span>waiting <span class="token punctuation">{</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;G waiting list is corrupted&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	gp<span class="token punctuation">.</span>waiting <span class="token operator">=</span> <span class="token boolean">nil</span>
	gp<span class="token punctuation">.</span>activeStackChans <span class="token operator">=</span> <span class="token boolean">false</span>
	closed <span class="token operator">:=</span> <span class="token operator">!</span>mysg<span class="token punctuation">.</span>success
	gp<span class="token punctuation">.</span>param <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token keyword">if</span> mysg<span class="token punctuation">.</span>releasetime <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token function">blockevent</span><span class="token punctuation">(</span>mysg<span class="token punctuation">.</span>releasetime<span class="token operator">-</span>t0<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	mysg<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token function">releaseSudog</span><span class="token punctuation">(</span>mysg<span class="token punctuation">)</span>
	<span class="token keyword">if</span> closed <span class="token punctuation">{</span>
		<span class="token keyword">if</span> c<span class="token punctuation">.</span>closed <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;chansend: spurious wakeup&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">plainError</span><span class="token punctuation">(</span><span class="token string">&quot;send on closed channel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="直接发送" tabindex="-1"><a class="header-anchor" href="#直接发送" aria-hidden="true">#</a> 直接发送</h3><p>若存在等待接收的 goroutine 时，从等待接收队列中取出 goroutine，将数据发送给等待的 goroutine，并将其设置为下一个被执行的 goroutine</p><p>发送数据后，并不会马上执行接收方 goroutine，只是将其设置为 P 的下一个待执行的 goroutine</p><h3 id="发送到缓冲区" tabindex="-1"><a class="header-anchor" href="#发送到缓冲区" aria-hidden="true">#</a> 发送到缓冲区</h3><p>若存在缓冲区且缓冲区未满，则将数据存储至 <code>sendx</code> 上</p><h3 id="阻塞" tabindex="-1"><a class="header-anchor" href="#阻塞" aria-hidden="true">#</a> 阻塞</h3><p>若缓冲区已满 或 没有等待接收的 goroutine，则将当前 goroutine 加入到 <code>sendq</code> 等待发送队列中，当前 goroutine 陷入阻塞，让出处理器的使用权</p><h2 id="_3-接收数据" tabindex="-1"><a class="header-anchor" href="#_3-接收数据" aria-hidden="true">#</a> 3. 接收数据</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">chanrecv</span><span class="token punctuation">(</span>c <span class="token operator">*</span>hchan<span class="token punctuation">,</span> ep unsafe<span class="token punctuation">.</span>Pointer<span class="token punctuation">,</span> block <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>selected<span class="token punctuation">,</span> received <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// raceenabled: don&#39;t need to check ep, as it is always on the stack</span>
	<span class="token comment">// or is new memory allocated by reflect.</span>

	<span class="token keyword">if</span> debugChan <span class="token punctuation">{</span>
		<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;chanrecv: chan=&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> c <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>block <span class="token punctuation">{</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token function">gopark</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> waitReasonChanReceiveNilChan<span class="token punctuation">,</span> traceEvGoStop<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;unreachable&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">if</span> <span class="token operator">!</span>block <span class="token operator">&amp;&amp;</span> <span class="token function">empty</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// The channel is irreversibly closed. Re-check whether the channel has any pending data</span>
		<span class="token comment">// to receive, which could have arrived between the empty and closed checks above.</span>
		<span class="token comment">// Sequential consistency is also required here, when racing with such a send.</span>
		<span class="token keyword">if</span> <span class="token function">empty</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// The channel is irreversibly closed and empty.</span>
			<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
				<span class="token function">raceacquire</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">raceaddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> ep <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				<span class="token function">typedmemclr</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>elemtype<span class="token punctuation">,</span> ep<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> t0 <span class="token builtin">int64</span>
	<span class="token keyword">if</span> blockprofilerate <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		t0 <span class="token operator">=</span> <span class="token function">cputicks</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">lock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>

	<span class="token keyword">if</span> c<span class="token punctuation">.</span>closed <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">.</span>qcount <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
			<span class="token function">raceacquire</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">raceaddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token keyword">if</span> ep <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token function">typedmemclr</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>elemtype<span class="token punctuation">,</span> ep<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> sg <span class="token operator">:=</span> c<span class="token punctuation">.</span>sendq<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> sg <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">// Found a waiting sender. If buffer is size 0, receive value</span>
		<span class="token comment">// directly from sender. Otherwise, receive from head of queue</span>
		<span class="token comment">// and add sender&#39;s value to the tail of the queue (both map to</span>
		<span class="token comment">// the same buffer slot because the queue is full).</span>
		<span class="token function">recv</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> sg<span class="token punctuation">,</span> ep<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> c<span class="token punctuation">.</span>qcount <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token comment">// Receive directly from queue</span>
		qp <span class="token operator">:=</span> <span class="token function">chanbuf</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> c<span class="token punctuation">.</span>recvx<span class="token punctuation">)</span>
		<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
			<span class="token function">racenotify</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> c<span class="token punctuation">.</span>recvx<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> ep <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token function">typedmemmove</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>elemtype<span class="token punctuation">,</span> ep<span class="token punctuation">,</span> qp<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token function">typedmemclr</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>elemtype<span class="token punctuation">,</span> qp<span class="token punctuation">)</span>
		c<span class="token punctuation">.</span>recvx<span class="token operator">++</span>
		<span class="token keyword">if</span> c<span class="token punctuation">.</span>recvx <span class="token operator">==</span> c<span class="token punctuation">.</span>dataqsiz <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span>recvx <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token punctuation">}</span>
		c<span class="token punctuation">.</span>qcount<span class="token operator">--</span>
		<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token operator">!</span>block <span class="token punctuation">{</span>
		<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// no sender available: block on this channel.</span>
	gp <span class="token operator">:=</span> <span class="token function">getg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	mysg <span class="token operator">:=</span> <span class="token function">acquireSudog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	mysg<span class="token punctuation">.</span>releasetime <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">if</span> t0 <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		mysg<span class="token punctuation">.</span>releasetime <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// No stack splits between assigning elem and enqueuing mysg</span>
	<span class="token comment">// on gp.waiting where copystack can find it.</span>
	mysg<span class="token punctuation">.</span>elem <span class="token operator">=</span> ep
	mysg<span class="token punctuation">.</span>waitlink <span class="token operator">=</span> <span class="token boolean">nil</span>
	gp<span class="token punctuation">.</span>waiting <span class="token operator">=</span> mysg
	mysg<span class="token punctuation">.</span>g <span class="token operator">=</span> gp
	mysg<span class="token punctuation">.</span>isSelect <span class="token operator">=</span> <span class="token boolean">false</span>
	mysg<span class="token punctuation">.</span>c <span class="token operator">=</span> c
	gp<span class="token punctuation">.</span>param <span class="token operator">=</span> <span class="token boolean">nil</span>
	c<span class="token punctuation">.</span>recvq<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>mysg<span class="token punctuation">)</span>
	<span class="token comment">// Signal to anyone trying to shrink our stack that we&#39;re about</span>
	<span class="token comment">// to park on a channel. The window between when this G&#39;s status</span>
	<span class="token comment">// changes and when we set gp.activeStackChans is not safe for</span>
	<span class="token comment">// stack shrinking.</span>
	atomic<span class="token punctuation">.</span><span class="token function">Store8</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>gp<span class="token punctuation">.</span>parkingOnChan<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token function">gopark</span><span class="token punctuation">(</span>chanparkcommit<span class="token punctuation">,</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span><span class="token punctuation">,</span> waitReasonChanReceive<span class="token punctuation">,</span> traceEvGoBlockRecv<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

	<span class="token comment">// someone woke us up</span>
	<span class="token keyword">if</span> mysg <span class="token operator">!=</span> gp<span class="token punctuation">.</span>waiting <span class="token punctuation">{</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;G waiting list is corrupted&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	gp<span class="token punctuation">.</span>waiting <span class="token operator">=</span> <span class="token boolean">nil</span>
	gp<span class="token punctuation">.</span>activeStackChans <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token keyword">if</span> mysg<span class="token punctuation">.</span>releasetime <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token function">blockevent</span><span class="token punctuation">(</span>mysg<span class="token punctuation">.</span>releasetime<span class="token operator">-</span>t0<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	success <span class="token operator">:=</span> mysg<span class="token punctuation">.</span>success
	gp<span class="token punctuation">.</span>param <span class="token operator">=</span> <span class="token boolean">nil</span>
	mysg<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token function">releaseSudog</span><span class="token punctuation">(</span>mysg<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">,</span> success
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="直接接收" tabindex="-1"><a class="header-anchor" href="#直接接收" aria-hidden="true">#</a> 直接接收</h3><p>若当前的等待发送队列 <code>sendq</code>存在等待发送的 goroutine，获取发送的数据</p><h3 id="从缓冲区接收" tabindex="-1"><a class="header-anchor" href="#从缓冲区接收" aria-hidden="true">#</a> 从缓冲区接收</h3><p>若缓冲区存在数据，则直接从 <code>recvx</code> 循环数组中读取</p><h3 id="阻塞-1" tabindex="-1"><a class="header-anchor" href="#阻塞-1" aria-hidden="true">#</a> 阻塞</h3><p>若缓冲区为空 或 不存在等待发送的 goroutine，则将当前 goroutine 加入 <code>recvq</code> 接收等待队列</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,21),r={href:"https://github.com/golang/go/tree/release-branch.go1.18/src",target:"_blank",rel:"noopener noreferrer"},k={href:"https://draveness.me/golang/",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const s=i("ExternalLinkIcon");return p(),o("div",null,[u,n("ol",null,[n("li",null,[n("a",r,[a("https://github.com/golang/go/tree/release-branch.go1.18/src"),t(s)])]),n("li",null,[n("a",k,[a("https://draveness.me/golang/"),t(s)])])])])}const h=e(l,[["render",d],["__file","3.channel_underlying.html.vue"]]);export{h as default};
