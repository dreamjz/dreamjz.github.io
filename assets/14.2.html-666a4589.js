import{_ as n,Z as s,$ as a,a3 as e}from"./framework-09afcf0b.js";const t={},p=e(`<h1 id="_14-2-channel" tabindex="-1"><a class="header-anchor" href="#_14-2-channel" aria-hidden="true">#</a> 14.2 Channel</h1><h2 id="_14-2-1-概念" tabindex="-1"><a class="header-anchor" href="#_14-2-1-概念" aria-hidden="true">#</a> 14.2.1 概念</h2><p>通道(Channel)：</p><ul><li>负责协程间的通讯；</li></ul><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20230512232915346.png" alt="image-20230512232915346" tabindex="0" loading="lazy"><figcaption>image-20230512232915346</figcaption></figure><ul><li><p><strong>声明</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> identifier <span class="token keyword">chan</span> datatype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>默认零值为 <code>nil</code></p></li><li><p>使用 <code>make()</code> 初始化</p></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> datatype<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_14-2-2-通信操作符" tabindex="-1"><a class="header-anchor" href="#_14-2-2-通信操作符" aria-hidden="true">#</a> 14.2.2 通信操作符 <code>&lt;-</code></h2><p>信息按照箭头的方向流动：</p><ul><li><p>流向通道（发送）</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ch <span class="token operator">&lt;-</span> int1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将变量<code>int1</code>的值发送至<code>ch</code></p></li><li><p>从通道流出（接收）</p><ol><li><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>int2 <span class="token operator">=</span> <span class="token operator">&lt;-</span> ch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从<code>ch</code>中获取数据并赋值给<code>int2</code></p></li><li><p>单独调用<code>&lt;- ch</code>获取下一个值，可用于验证：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> <span class="token operator">&lt;-</span> ch <span class="token operator">!=</span> <span class="token number">1</span> <span class="token punctuation">{</span> <span class="token comment">//... }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol></li></ul><p><strong>通道的发送和接收都是原子操作</strong></p><p><a href="path/14_2_goroutine.go">14_2_goroutine.go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> chapter_14

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">gr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
   <span class="token keyword">go</span> <span class="token function">sendString</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
   <span class="token keyword">go</span> <span class="token function">getString</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
   
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sendString</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   ch <span class="token operator">&lt;-</span> <span class="token string">&quot;A&quot;</span>
   ch <span class="token operator">&lt;-</span> <span class="token string">&quot;B&quot;</span>
   ch <span class="token operator">&lt;-</span> <span class="token string">&quot;C&quot;</span>
   ch <span class="token operator">&lt;-</span> <span class="token string">&quot;D&quot;</span>
   ch <span class="token operator">&lt;-</span> <span class="token string">&quot;E&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getString</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> s <span class="token builtin">string</span>
   <span class="token keyword">for</span> <span class="token punctuation">{</span>
      s <span class="token operator">=</span> <span class="token operator">&lt;-</span>ch
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>A
B
C
D
E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：不要使用打印状态来表明通道的发送和接收顺序：由于打印状态和通道实际发生读写的时间延迟会导致和真实发生的顺序不同。</strong></p><h2 id="_14-2-3-通道阻塞" tabindex="-1"><a class="header-anchor" href="#_14-2-3-通道阻塞" aria-hidden="true">#</a> 14.2.3 通道阻塞</h2><p>无缓冲的channel的发送/接受操作在对方准备好之前是阻塞的：</p><ul><li>同一个通道，<strong>发送</strong>在接受者准备好之前是阻塞的，即等待channel再次变为可用状态（通道值被接收时，可以传入变量）</li><li>同一个通道，<strong>接收</strong>操作是阻塞的（通道中没有数据），直到发送者向通道中发送数据</li></ul><p><a href="path/14_2_channel_block.go">14_2_channel_block.go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> chapter_14

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">chblock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">pump</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">suck</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>ch<span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">pump</span><span class="token punctuation">(</span>out <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">21</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		out <span class="token operator">&lt;-</span> i
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>pump</code> : 向通道中发送数据，但因<code>fmt.Println(&lt;-ch)</code>之后没有接受者将会阻塞，故仅输出一个数据<code>0</code></li></ul><p>定义<code>suck</code>函数在无限循环中读取:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">suck</span><span class="token punctuation">(</span>in <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d, &quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>in<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">chblock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">pump</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">suck</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	<span class="token comment">//fmt.Println(&lt;-ch)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_14-2-4-通过通道交换数据进行协程同步" tabindex="-1"><a class="header-anchor" href="#_14-2-4-通过通道交换数据进行协程同步" aria-hidden="true">#</a> 14.2.4 通过通道交换数据进行协程同步</h2><p>通过通道(channel) , 协程可以在通信中某刻同步交换数据。</p><p>若在通道两端互相阻塞对方则会形成死锁，Go 会检测并触发panic</p><p><a href="path/14_2_deadlock.go">14_2_deadlock.go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">dl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">1</span>
	<span class="token keyword">go</span> <span class="token function">fn</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">fn</span><span class="token punctuation">(</span>in <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>in<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述例子中<code>ch</code>两端的协程均休眠，形成死锁</p><h2 id="_14-2-5-带缓冲的通道" tabindex="-1"><a class="header-anchor" href="#_14-2-5-带缓冲的通道" aria-hidden="true">#</a> 14.2.5 带缓冲的通道</h2><p>无缓冲的通道容量为1，可使用<code>make()</code>设置通道容量</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> datatype<span class="token punctuation">,</span> buf_size<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>buf_size</code>是通道可以同时容纳的元素个数。</p><ul><li>在<strong>缓冲满载</strong>之前，带缓冲的通道<strong>发送数据</strong>时不会阻塞。</li><li>在<strong>缓冲变空</strong>之前，带缓冲的通道<strong>接收数据</strong>时不会阻塞。</li></ul><p>内置<code>cap()</code>可获取通道容量。</p><ul><li><p>若容量大于0，通道是异步的：缓冲满载（发送）/变空（接收）之前不会阻塞，元素按照FIFO（先进先出）的顺序接收。</p></li><li><p>若容量为0（无缓冲），通道是同步的：通信仅在双方准备好时才可成功。</p></li></ul><p><code>ch := make(chan type, buf_size)</code></p><p><code>value</code>:</p><ul><li><code>0</code>: synchronous, unbuffered</li><li><code>&gt;0</code>: asynchronous, buffered</li></ul><h2 id="_14-2-6-信号量模式" tabindex="-1"><a class="header-anchor" href="#_14-2-6-信号量模式" aria-hidden="true">#</a> 14.2.6 信号量模式</h2><p>使用信号量(semaphore)模式通过通道进行同步。</p><p>例如从通道中获取处理结果：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">compute</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	ch <span class="token operator">&lt;-</span> <span class="token function">someComputation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// when it completes, signal on the channel.</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> 	<span class="token comment">// allocate a channel.</span>
	<span class="token keyword">go</span> <span class="token function">compute</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>		<span class="token comment">// start something in a goroutines</span>
	<span class="token function">doSomethingElseForAWhile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	result <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-2-7-通道工厂模式" tabindex="-1"><a class="header-anchor" href="#_14-2-7-通道工厂模式" aria-hidden="true">#</a> 14.2.7 通道工厂模式</h2><p>不将通道作为参数传给协程，而是利用函数生成通道并返回，函数内部有匿名函数被协程调用。</p><p><a href="path/14_2_channel_factory.go">14_2_channel_factory.go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> chapter_14

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;fmt&quot;</span>
   <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">cf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   ch <span class="token operator">:=</span> <span class="token function">pump2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">go</span> <span class="token function">suck2</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
   time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">pump2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
   ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
   <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
         ch <span class="token operator">&lt;-</span> i
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">return</span> ch
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">suck2</span><span class="token punctuation">(</span>in <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>in<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-2-8-for-range" tabindex="-1"><a class="header-anchor" href="#_14-2-8-for-range" aria-hidden="true">#</a> 14.2.8 for range</h2><p>可以在channel上使用<code>for-range</code>:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> ch <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从通道中读取数据直到通道关闭。</p><h2 id="_14-2-9-通道的方向" tabindex="-1"><a class="header-anchor" href="#_14-2-9-通道的方向" aria-hidden="true">#</a> 14.2.9 通道的方向</h2><p>可在定义时指定通道的方向：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> send_only <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span>
<span class="token keyword">var</span> recv_only <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>只接收的通道<code>&lt;-chan T</code>无法关闭，因为关闭通道是发送者表示不再给通道发送值，故对接收通道无意义。</p><p>双向通道可赋值给单向通道：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> sch <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span>
<span class="token keyword">var</span> rch <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span>
ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
sch <span class="token operator">=</span> ch2
rch <span class="token operator">=</span> ch2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-2-10-管道和选择器模式" tabindex="-1"><a class="header-anchor" href="#_14-2-10-管道和选择器模式" aria-hidden="true">#</a> 14.2.10 管道和选择器模式</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>sendChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
receiveChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token keyword">go</span> <span class="token function">processChannel</span><span class="token punctuation">(</span>sendChan<span class="token punctuation">,</span> receiveChan<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">processChannel</span><span class="token punctuation">(</span>in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> out <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> inValue <span class="token operator">:=</span> <span class="token keyword">range</span> in <span class="token punctuation">{</span>
		result <span class="token operator">:=</span> <span class="token operator">...</span> <span class="token comment">/// processing inValue</span>
		out <span class="token operator">&lt;-</span> result
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过定义通道的方向来限制对通道的操作</p><p>例子：<a href="path/14_2_sieve.go">14_2_sieve.go</a> 通过选择器筛选素数</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20230513211309341.png" alt="image-20230513211309341" tabindex="0" loading="lazy"><figcaption>image-20230513211309341</figcaption></figure><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> chapter_14

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">sieve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">generate</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		prime <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>prime<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
		ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">filter</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span> ch1<span class="token punctuation">,</span> prime<span class="token punctuation">)</span>
		ch <span class="token operator">=</span> ch1
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">generate</span><span class="token punctuation">(</span>out <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		out <span class="token operator">&lt;-</span> i
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">filter</span><span class="token punctuation">(</span>in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> out <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">,</span> prime <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		i <span class="token operator">:=</span> <span class="token operator">&lt;-</span>in
		<span class="token keyword">if</span> i<span class="token operator">%</span>prime <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			out <span class="token operator">&lt;-</span> i
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","14.2.html.vue"]]);export{d as default};
