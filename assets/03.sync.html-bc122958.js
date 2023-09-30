import{_ as a,Z as t,$ as p,a0 as n,a1 as e,a2 as o,a3 as c,H as i}from"./framework-09afcf0b.js";const l={},u=c(`<h2 id="_3-1-waitgroup" tabindex="-1"><a class="header-anchor" href="#_3-1-waitgroup" aria-hidden="true">#</a> 3.1 WaitGroup</h2><p><code>WaitGroup</code>可以视作并发安全的计数器：</p><ul><li><code>Add()</code>：添加计数次数</li><li><code>Done()</code>：计数器减一</li><li><code>Wait()</code>：阻塞直到计数器归零</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">wg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	hello <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>wg <span class="token operator">*</span>sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">,</span> id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello from %d\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	numGreeters <span class="token operator">:=</span> <span class="token number">5</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>numGreeters<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numGreeters<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>wg<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hello from 5
Hello from 1
Hello from 2
Hello from 3
Hello from 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>wg.Add(numGreeters)</code>：设定并发计数</li><li><code>defer wg.Done()</code>：保证并发结束时，计数器减一</li><li><code>wg.Wait()</code>：goroutine 阻塞直到计数器归零</li></ul><h2 id="_3-2-互斥锁和读写锁" tabindex="-1"><a class="header-anchor" href="#_3-2-互斥锁和读写锁" aria-hidden="true">#</a> 3.2 互斥锁和读写锁</h2><h3 id="mutex-互斥锁" tabindex="-1"><a class="header-anchor" href="#mutex-互斥锁" aria-hidden="true">#</a> Mutex 互斥锁</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">mu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> count <span class="token builtin">int</span>
	<span class="token keyword">var</span> lock sync<span class="token punctuation">.</span>Mutex

	increment <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">defer</span> lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		count<span class="token operator">++</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Incrementing: %d\\n&quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	decrement <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">defer</span> lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		count<span class="token operator">--</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Decrementing: %d\\n&quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> arithmetic sync<span class="token punctuation">.</span>WaitGroup
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		arithmetic<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> arithmetic<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		arithmetic<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> arithmetic<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	arithmetic<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意上述代码中<strong>使用<code>defer</code>来解锁</strong>，这样能够保证即使后序代码出现了<code>panic</code>也会<strong>将锁释放</strong>，以免导致死锁。</p><h3 id="rwmutex-读写锁" tabindex="-1"><a class="header-anchor" href="#rwmutex-读写锁" aria-hidden="true">#</a> RWMutex 读写锁</h3><p>使用读写锁可以更加细度的控制读写权限：</p><ol><li>读锁和读锁之间<strong>不是互斥的</strong>，只要没有写锁，就可以获取读锁</li><li>写锁和写锁是互斥的</li><li>写锁和读锁是互斥的</li></ol><p>读写锁适用于<strong>读多写少</strong>的场景。</p><p>例如：（备注：原书中的示例并不能体现RW锁的优势，我自己写了个）</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">usingRWMu</span><span class="token punctuation">(</span>count <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> rw sync<span class="token punctuation">.</span>RWMutex
	<span class="token keyword">go</span> <span class="token function">producer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>wg<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rw<span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">consumer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>wg<span class="token punctuation">,</span> rw<span class="token punctuation">.</span><span class="token function">RLocker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">usingMu</span><span class="token punctuation">(</span>count <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> mu sync<span class="token punctuation">.</span>Mutex
	<span class="token keyword">go</span> <span class="token function">producer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>wg<span class="token punctuation">,</span> <span class="token operator">&amp;</span>mu<span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">consumer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>wg<span class="token punctuation">,</span> <span class="token operator">&amp;</span>mu<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">producer</span><span class="token punctuation">(</span>wg <span class="token operator">*</span>sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">,</span> lock sync<span class="token punctuation">.</span>Locker<span class="token punctuation">,</span> count <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">consumer</span><span class="token punctuation">(</span>wg <span class="token operator">*</span>sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">,</span> lock sync<span class="token punctuation">.</span>Locker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中：</p><ul><li><code>producer</code>：生产者只有一个，且只写入五次数据</li><li><code>consumer</code>：消费者会有多个，每次读取一次数据，读取时间为1纳秒</li></ul><p>Benchmark:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">BenchmarkLock</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	tests <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
		name <span class="token builtin">string</span>
		f    <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">{</span>
		<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;UsingMutex&quot;</span><span class="token punctuation">,</span> f<span class="token punctuation">:</span> usingMu<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;UsingRWMutex&quot;</span><span class="token punctuation">,</span> f<span class="token punctuation">:</span> usingRWMu<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token number">10</span><span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> <span class="token number">1000</span><span class="token punctuation">;</span> k <span class="token operator">*=</span> <span class="token number">10</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tt <span class="token operator">:=</span> <span class="token keyword">range</span> tests <span class="token punctuation">{</span>
			b<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%-15s_%.0e&quot;</span><span class="token punctuation">,</span> tt<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token function">float64</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
					tt<span class="token punctuation">.</span><span class="token function">f</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BenchmarkLock/UsingMutex______1e+01-12                 8         150001075 ns/op            3139 B/op         29 allocs/op
BenchmarkLock/UsingRWMutex____1e+01-12                74          29271991 ns/op            1754 B/op         25 allocs/op
BenchmarkLock/UsingMutex______1e+02-12                 1        1503635900 ns/op           43440 B/op        338 allocs/op
BenchmarkLock/UsingRWMutex____1e+02-12                75          29191513 ns/op           12575 B/op        209 allocs/op
BenchmarkLock/UsingMutex______1e+03-12                 1        14825565800 ns/op         563904 B/op       3658 allocs/op
BenchmarkLock/UsingRWMutex____1e+03-12                68          27025094 ns/op          117468 B/op       2036 allocs/op
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出在<strong>读多写少</strong>的情境下，使用读写锁效率比互斥锁要高。</p><h2 id="_3-3-cond" tabindex="-1"><a class="header-anchor" href="#_3-3-cond" aria-hidden="true">#</a> 3.3 Cond</h2><p>若想要goroutine在特定的条件下暂停运行，若使用一个无限循环<code>for !condition{}</code> 这样将会消耗一个CPU核心的所有周期，是非常低效的。</p><p>使用<code>sync.Cond</code>可以高效的实现：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>c <span class="token operator">:=</span> sync<span class="token punctuation">.</span><span class="token function">NewCond</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>sync<span class="token punctuation">.</span>Mutex<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>L<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token operator">!</span><span class="token function">condition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//... make use of condition ...</span>
c<span class="token punctuation">.</span>L<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cond-singal-和cond-broadcast" tabindex="-1"><a class="header-anchor" href="#cond-singal-和cond-broadcast" aria-hidden="true">#</a> <code>Cond.Singal()</code>和<code>Cond.Broadcast()</code></h3><p>当使用<code>Cond.Wait</code>时，会将当前的goroutine加入FIFO列表中:</p><ol><li>当调用<code>Cond.Signal</code>时会唤醒最先加入队列中的goroutine（也就是等待时间最长的）</li><li>当调用<code>Cond.Broadcast()</code>时，会唤醒所有等待中的goroutine</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">cond</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	c <span class="token operator">:=</span> sync<span class="token punctuation">.</span><span class="token function">NewCond</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>sync<span class="token punctuation">.</span>Mutex<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
	done <span class="token operator">:=</span> <span class="token boolean">false</span>
	<span class="token keyword">go</span> <span class="token function">reader</span><span class="token punctuation">(</span><span class="token string">&quot;reader1&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>wg<span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token operator">&amp;</span>done<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">reader</span><span class="token punctuation">(</span><span class="token string">&quot;reader2&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>wg<span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token operator">&amp;</span>done<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">reader</span><span class="token punctuation">(</span><span class="token string">&quot;reader3&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>wg<span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token operator">&amp;</span>done<span class="token punctuation">)</span>

	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span> <span class="token comment">// 确保消费者已经进入等待状态</span>

	<span class="token keyword">go</span> <span class="token function">writer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>wg<span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token operator">&amp;</span>done<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">reader</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> wg <span class="token operator">*</span>sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">,</span> c <span class="token operator">*</span>sync<span class="token punctuation">.</span>Cond<span class="token punctuation">,</span> done <span class="token operator">*</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>L<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token operator">!</span><span class="token operator">*</span>done <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s is waiting\\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	c<span class="token punctuation">.</span>L<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s is reading\\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">writer</span><span class="token punctuation">(</span>wg <span class="token operator">*</span>sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">,</span> c <span class="token operator">*</span>sync<span class="token punctuation">.</span>Cond<span class="token punctuation">,</span> done <span class="token operator">*</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	c<span class="token punctuation">.</span>L<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;start writing&quot;</span><span class="token punctuation">)</span>
	<span class="token operator">*</span>done <span class="token operator">=</span> <span class="token boolean">true</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;done&quot;</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>L<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;notify all&quot;</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span><span class="token function">Broadcast</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 通知等待时间最长的那个</span>
	<span class="token comment">//fmt.Println(&quot;notify one&quot;)</span>
	<span class="token comment">//c.Signal()</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 调用 broadcast
reader3 is waiting
reader2 is waiting
reader1 is waiting
start writing
done
notify all
reader1 is reading
reader3 is reading
reader2 is reading

// 调用 signal
reader3 is waiting
reader1 is waiting
reader2 is waiting
start writing
done
notify one
reader3 is reading
fatal error: all goroutines are asleep - deadlock!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，<code>Cond.Signal</code>唤醒了最先等待的<code>reader3</code>，因为只唤醒了一个导致所有的goroutine均进入休眠，触发了死锁。</p><h2 id="_3-4-once" tabindex="-1"><a class="header-anchor" href="#_3-4-once" aria-hidden="true">#</a> 3.4 Once</h2><p><code>sync.Once</code>的方法<code>Once.Do()</code>能够保证函数<strong>只会</strong>被<strong>调用一次</strong>。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">once</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> once1<span class="token punctuation">,</span> once2 sync<span class="token punctuation">.</span>Once
	<span class="token keyword">var</span> count1<span class="token punctuation">,</span> count2 <span class="token builtin">int</span>

	incre1 <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count1<span class="token operator">++</span>
	<span class="token punctuation">}</span>

	incre2 <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count2<span class="token operator">++</span>
	<span class="token punctuation">}</span>

	decre <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count2<span class="token operator">--</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		once1<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>incre1<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>count1<span class="token punctuation">)</span>

	once2<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>incre2<span class="token punctuation">)</span>
	once2<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>decre<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>count2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// output</span>
<span class="token number">1</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>once1.Do(incre1)</code>：在循环中执行了5次，但是<code>incre1</code>只会被执行一次</li><li><code>once2.Do</code>：分别传入不同的函数执行，只有<code>incre2</code>执行了一次，后序的函数不会被执行</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">onceDeadlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> once1<span class="token punctuation">,</span> once2 sync<span class="token punctuation">.</span>Once

	<span class="token keyword">var</span> f1<span class="token punctuation">,</span> f2 <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	f1 <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		once1<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>f2<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	f2 <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		once2<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	once1<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span>
	once2<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>f2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码会引发<strong>死锁</strong>，因为执行<code>f2</code>时，需要等待<code>once1.Do(f2)</code>返回才可以，此时两者相互等待触发死锁。</p><h2 id="_3-5-pool" tabindex="-1"><a class="header-anchor" href="#_3-5-pool" aria-hidden="true">#</a> 3.5 Pool</h2><p>Pool 模式是一种创建和提供可供使用的固定数量实例或Pool实例的方法。通常用于约束创建昂贵的场景（如数据库连接），以便创建固定数量的实例，但不确定数量的操作仍可请求访问这些场景。</p><p>Golang 中<code>sync.Pool</code>可以用于实现自定义的对象池，：</p><ul><li><p><code>Pool.New</code>：<code>New</code>是<code>Pool</code>的一个字段，类型为<code>func() any</code>，用于创建新的对象</p></li><li><p><code>Pool.Get() any</code>：Get 方法获取从 Pool 中获取一个对象，若没有则调用<code>New</code>创建对象</p></li><li><p><code>Pool.Put(any)</code>：将对象放回 Pool 中</p></li></ul><p>使用要点：</p><ol><li>使用<code>Pool.New</code>创建对象是线程安全的</li><li>使用<code>Pool.Get() any</code>获取对象时，不能对获取的对象状态做任何的假设（因为是不确定的）</li><li>通常使用<code>defer pool.Put()</code>的形式以确保取出的对象被放回 Pool 中</li><li>Pool 内的分布必须大致均匀</li></ol><p>使用<code>sync.Pool</code>有两个常见的场景：</p><ol><li>创建对象比较昂贵，如内存占用大</li><li>创建对象耗时较长，提前创建对象缓存，可提高效率</li></ol><p>例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">pool1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> numCreated <span class="token builtin">int</span>
	pool <span class="token operator">:=</span> sync<span class="token punctuation">.</span>Pool<span class="token punctuation">{</span>
		New<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> any <span class="token punctuation">{</span>
			numCreated<span class="token operator">++</span>
			a <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span> <span class="token operator">&amp;</span>a
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	num <span class="token operator">:=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			a <span class="token operator">:=</span> pool<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
			<span class="token keyword">defer</span> pool<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

			<span class="token comment">// do something</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>numCreated<span class="token punctuation">,</span> <span class="token string">&quot; slices created&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// ouput</span>
<span class="token number">25</span>  slices created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由上述代码可以看出，若不使用 Pool ，将<strong>可能</strong>快速创建大量的切片，占用大量内存并使得GC产生大量负载。</p><h2 id="_3-6-channel" tabindex="-1"><a class="header-anchor" href="#_3-6-channel" aria-hidden="true">#</a> 3.6 Channel</h2><p>Channel 按照是否有缓冲区可分为：</p><ol><li>无缓冲 Channel；<code>make(chan Type), make(chan Type, 0)</code></li><li>有缓冲 Channel；<code>make(chan Type, size)</code></li></ol><p>Channel 按照读写方向可分为：</p><ol><li>双向Channel；<code>chan Type</code></li><li>只读Channel；<code>&lt;-chan Type</code></li><li>只写Channel；<code>chan&lt;- Type</code></li></ol><p>从channel中<strong>读取数据</strong>有两种形式：</p><ol><li><code>v := &lt;-ch</code>；</li><li><code>v, ok := &lt;-ch</code>；<code>ok</code>表示通道是否关闭，<code>false</code>表示通道<strong>已关闭</strong>后读取的值</li></ol><p><code>for-range</code>循环遍历<code>channel</code>，会持续读取<code>channel</code>中的数据（若没有则阻塞），直到<code>channel</code>被关闭：</p><ol><li><code>for range ch {}</code></li><li><code>for v := range ch {}</code></li></ol><h3 id="channel的操作" tabindex="-1"><a class="header-anchor" href="#channel的操作" aria-hidden="true">#</a> Channel的操作</h3><p>下表给出在不同的channel的状态下不同的操作的结果：</p><table><thead><tr><th>操作</th><th>Channel状态</th><th>结果</th></tr></thead><tbody><tr><td>Read</td><td>nil</td><td>阻塞</td></tr><tr><td></td><td>打开 且 非空</td><td>输出值，（true）</td></tr><tr><td></td><td>打开 且 为空</td><td>阻塞</td></tr><tr><td></td><td>关闭</td><td>默认零值，false</td></tr><tr><td></td><td>只写</td><td>编译错误</td></tr><tr><td>Write</td><td>nil</td><td>阻塞</td></tr><tr><td></td><td>打开 且 缓冲已满</td><td>阻塞</td></tr><tr><td></td><td>打开 且 缓冲未满</td><td>写入值</td></tr><tr><td></td><td>关闭</td><td>panic</td></tr><tr><td></td><td>只读</td><td>编译错误</td></tr><tr><td>Close</td><td>nil</td><td>panic</td></tr><tr><td></td><td>打开 且 非空</td><td>关闭Channel；可继续读取，直到缓冲区为空，<code>v</code> 为默认零值，<code>ok</code>为false</td></tr><tr><td></td><td>打开 且 为空</td><td>关闭Channel；可继续读取，<code>v</code> 为默认零值，<code>ok</code>为false</td></tr><tr><td></td><td>关闭</td><td>panic</td></tr><tr><td></td><td>只读</td><td>编译错误</td></tr></tbody></table><h2 id="_3-7-select" tabindex="-1"><a class="header-anchor" href="#_3-7-select" aria-hidden="true">#</a> 3.7 select</h2><p><code>select</code>语句结构：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">select</span> <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token operator">...</span> <span class="token punctuation">:</span> <span class="token comment">// ... case1</span>
<span class="token keyword">case</span> <span class="token operator">...</span> <span class="token punctuation">:</span> <span class="token comment">// ... case2</span>
<span class="token operator">...</span>
<span class="token keyword">default</span><span class="token punctuation">:</span>
    <span class="token comment">// ... default</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>select</code>执行顺序：</p><ol><li>若有<code>default</code>，则在无channel可用时直接执行<code>default</code></li><li>若无<code>default</code>： <ol><li>在无channel可用时，阻塞当前goroutine</li><li>有多个chennel可用时，随机选择可用分支执行</li></ol></li></ol><h2 id="_3-8-gomaxprocs" tabindex="-1"><a class="header-anchor" href="#_3-8-gomaxprocs" aria-hidden="true">#</a> 3.8 GOMAXPROCS</h2><p>通常<code>GOMAXPROCS</code>和CPU的核心数相同。但在需要测试并发问题时，可以增大此值，使得出现竞争的概率增大，提前暴露问题。</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,69),d={href:"https://book.douban.com/subject/30424330/",target:"_blank",rel:"noopener noreferrer"};function r(k,v){const s=i("ExternalLinkIcon");return t(),p("div",null,[u,n("ol",null,[n("li",null,[n("a",d,[e("Go 语言并发之道"),o(s)])])])])}const b=a(l,[["render",r],["__file","03.sync.html.vue"]]);export{b as default};
