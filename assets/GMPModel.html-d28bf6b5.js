import{_ as t,X as i,Y as o,Z as n,$ as a,a0 as e,a1 as p,F as r}from"./framework-8cb7ec75.js";const c={},l=p(`<h2 id="_1-golang-调度器的由来" tabindex="-1"><a class="header-anchor" href="#_1-golang-调度器的由来" aria-hidden="true">#</a> 1. Golang 调度器的由来</h2><h3 id="_1-1-单进程时代无需调度器" tabindex="-1"><a class="header-anchor" href="#_1-1-单进程时代无需调度器" aria-hidden="true">#</a> 1.1 单进程时代无需调度器</h3><p>在早期的操作系统中一个程序就是一个进程，只有一个进程运行完毕之后才能运行下一个进程，所有的进程只能串行发生。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/06IoYRyruP.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>早期的单进程操作系统，面临着两个问题：</p><ol><li>单一的执行流程，计算机只能串行处理任务。</li><li>进程阻塞会带来 CPU 时间的浪费。</li></ol><p>后来操作系统有了最早的并发能力：多进程并发。当一个进程阻塞的时候，切换到另外等待执行的进程，这样避免了 CPU 时间的浪费。</p><h3 id="_1-2-多进程-线程时代的调度器" tabindex="-1"><a class="header-anchor" href="#_1-2-多进程-线程时代的调度器" aria-hidden="true">#</a> 1.2 多进程 / 线程时代的调度器</h3><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/sLve6TagD3.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在多进程 / 多线程的操作系统中，解决了阻塞问题，因为一个进程阻塞后 CPU 可以切换至其他进程中执行，调度 CPU 的算法可以保证在运行的进程都可以被分配到 CPU 时间片，宏观上多个进程是在同时运行。</p><p>但是这样会出现新的问题，进程拥有太多的资源，进程的创建、切换及销毁均会产生时间成本，CPU 虽然利用起来了，但是当进程数量过多时，CPU 耗费很大一部分时间用于进程调度。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/dNWd00AiEZ-16418839778108.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>虽然进程看起来很美好，但实际上多线程开发设计会变得更加复杂，需要考虑很多同步竞争的问题。</p><h3 id="_1-3-使用协程来提高-cpu-利用率" tabindex="-1"><a class="header-anchor" href="#_1-3-使用协程来提高-cpu-利用率" aria-hidden="true">#</a> 1.3 使用协程来提高 CPU 利用率</h3><p>多进程、多线程已经提高了系统的并发能力，但是在当今互联网高并发的场景下，为每个任务均创建一个线程是不现实的，会消耗大量的内存（进程虚拟内存会占用 4GiB (32 位)，而线程也要大约 4MiB）。</p><p>此时也出现了新的问题：</p><ul><li>高内存占用</li><li>进程 / 线程调度高消耗 CPU</li></ul><p>之后工程师发现，一个线程可分为“内核态”和“用户态”两种。一个“用户态线程”必须绑定一个“内核态线程”，对于 CPU 来说其并不知道“用户态线程”的存在，只知道运行的是“内核态线程”。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/TfStmYsfyF.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此时，我们将“内核态线程”称作 线程（Thread），“用户态线程”称作 协程（co-routine）.</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/vgzlKzvOUL.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>既然协程可以和线程进行绑定，那么就有三种对应关系：</p><ul><li>1:1 (一对一)</li><li>N:1 (多对一)</li><li>N:M (多对多)</li></ul><h4 id="_1-3-1-多对一" tabindex="-1"><a class="header-anchor" href="#_1-3-1-多对一" aria-hidden="true">#</a> 1.3.1 多对一</h4><p>N 个协程绑定一个线程，优点在于<strong>协程在用户态线程完成切换，不会陷入到内核态，这种切换非常的轻量快速</strong>，但是也会有很大的缺点，多个协程绑定在一个线程上：</p><ul><li>某个程序无法使用硬件的多核加速能力</li><li>一旦某个协程阻塞导致线程阻塞，当前进程文档其他协程均无法执行，此时失去了并发的能力。</li></ul><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/kfPbThcyRU.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_1-3-2-一对一" tabindex="-1"><a class="header-anchor" href="#_1-3-2-一对一" aria-hidden="true">#</a> 1.3.2 一对一</h4><p>一个协程绑定一个线程，此时协程的调度都交由 CPU 完成，但是其创建、销毁和切换的成本较高。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/EhNQY2VCpk.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_1-3-3-多对多" tabindex="-1"><a class="header-anchor" href="#_1-3-3-多对多" aria-hidden="true">#</a> 1.3.3 多对多</h4><p>多个协程绑定多个线程，克服了上述关系的缺点，但是实现起来较为复杂。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/ANDQLx3g9U.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>协程和线程的区别：</p><ul><li>线程由 CPU 进行调度，是抢占式的</li><li>协程由用户态调度，是协作式的（当一个协程让出 CPU 后才可执行下一协程）</li></ul><h3 id="_1-4-go-协程-goroutine" tabindex="-1"><a class="header-anchor" href="#_1-4-go-协程-goroutine" aria-hidden="true">#</a> 1.4 Go 协程 goroutine</h3><p>Go 为了提供更容易的并发方法，使用了 goroutine 和 channel，goroutine 概念来自协程，让一组可复用的函数运行于一组线程之上，即使由协程阻塞了，该线程的其他协程可以被 <code>runtime</code> 调度，转移至其他可以运行的线程上。这些对与开发人员来说是透明的，为开发提供了便利。</p><p>一个 goroutine 非常的轻量，仅占用几 KiB，这样就能在有限的内存空间创建大量的 goroutine，支持更多的并发。虽然一个 goroutine 的栈仅占几KiB，但实际是可伸缩的，<code>runtime</code> 会自动为 goroutine 分配。</p><h3 id="_1-5-已废弃的-groutine-调度器" tabindex="-1"><a class="header-anchor" href="#_1-5-已废弃的-groutine-调度器" aria-hidden="true">#</a> 1.5 已废弃的 groutine 调度器</h3><p>Golang 目前使用的调度器为 2012 年重新设计，之前的调度器存在性能问题，使用了 4 年已被废弃，下面来看看其如何运作的</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/Af6GQ3GSlb.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/uWk9pzdREk.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>M (Thread) 想要执行、放回 G (goroutine) 必须访问全局 G 队列，并且 M 由多个，即多线程访问同一资源需要加锁以保证互斥 / 同步，所以全局 G 队列是有互斥锁进行保护的。</p><p>老的调度器存在以下缺点：</p><ul><li>创建、销毁、调度 G 都需要每个 M 获取锁，这样会形成激烈的 <strong>锁竞争</strong>。</li><li>M 转移 G 会造成 <strong>延迟和额外的系统负载</strong>。比如当 G 中包含创建新协程的时候，M 创建了 G’，为了继续执行 G’，需要将 G’ 交给 M’ 来执行，也会造成了 <strong>很差的局部性</strong>，因为 G’ 和 G 是相关的，最好的是在 M 上执行而不是其他的 M’。</li><li>系统调用 (CPU 在 M 之间的切换) 导致频繁的线程阻塞和取消阻塞操作增加了系统开销。</li></ul><h2 id="_2-gmp-模型设计思想" tabindex="-1"><a class="header-anchor" href="#_2-gmp-模型设计思想" aria-hidden="true">#</a> 2. GMP 模型设计思想</h2><p>为了解决之前的问题，Go 设计了新的调度器，除了 M (Machine, 实际上为 Thread) 和 G (goroutine) 外，引进了 P (Processor)。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/zaZ4nQYcZe.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Processor 包含了运行 goroutine 的资源</strong>，若线程想要运行 goroutine 必须获取 P，P 中还包含了可运行的 G 队列。</p><h3 id="_2-1-gmp-模型" tabindex="-1"><a class="header-anchor" href="#_2-1-gmp-模型" aria-hidden="true">#</a> 2.1 GMP 模型</h3><p>在 Go 中，<strong>线程为运行 goroutine 的实体，调度器的功能是把可运行的 goroutine 分配到工作线程上</strong>。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/Ugu3C2WSpM.jpeg!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><strong>全局队列 (Global Queue)</strong>: 存放等待运行的 G。</li><li><strong>P 的本地队列</strong>： 同全局队列类似，存放的也是等待运行的 G, 存储数量不超过 256 个。新建 G’ 时，G’ 优先加入 P 的本地队列，若队列已满，则会把本地队列中的一半的 G 移动到全局队列。</li><li><strong>P 列表</strong>：所有的 P 都在程序启动时创建，并保存在数组中，最多为 <code>GOMAXPROCS</code> 个。</li><li><strong>M</strong>： 线程想要运行任务就需要获取 P，从 P 的本地队列获取 G，P 队列为空时，M 会尝试从全局队列中获取一些 G 放入 P 的本地队列，或者从其他的 P 的本地队列中<strong>偷取</strong>一半放入自己的 P 本地队列，M 会按照队列先进先出的顺序执行 G。</li></ul><p><strong>Goroutine 调度器和 OS 调度器通过 M 结合起来，每个 M 代表一个内核线程， OS 调度器负责把内核线程分配至 CPU 核心运行</strong>。</p><h4 id="_2-1-1-p-和-m-的数量" tabindex="-1"><a class="header-anchor" href="#_2-1-1-p-和-m-的数量" aria-hidden="true">#</a> 2.1.1 P 和 M 的数量</h4><p><strong>P</strong> 的数量由启动时环境变量 <code>GOMAXPROCS</code> 或 <code>runtime.GOMAXPROCS(int)</code> 决定，这意味着程序执行的任意时刻只会有 <code>GOMAXPROCS</code>个 goroutine 在 <strong>同时</strong> 运行。</p><p><strong>M</strong> 的数量：</p><ul><li>go 语言本身的限制：go 程序启动时，会设置 M 的最大数量， 默认为 10000</li><li><code>runtime/debug</code> 包中的 <code>SetMaxThreads</code> 函数手动设置最大数量</li><li>当一个 M 阻塞了会创建新的 M</li></ul><p>P 和 M 的数量之前没有绝对关系，一个 M 阻塞了，P 就会创建或者切换另一个 M，所以即使 P 的数量为 1，也可能会有多个 M。</p><h4 id="_2-1-2-p-和-m-何时创建" tabindex="-1"><a class="header-anchor" href="#_2-1-2-p-和-m-何时创建" aria-hidden="true">#</a> 2.1.2 P 和 M 何时创建</h4><p>**P **：在确定了 P 的最大数量 n 之后，运行时系统会根据配置创建 n 个 P。</p><p><strong>M</strong>： 没有足够的 M 来关联 P 并运行其中的可运行的 G，当 M 被阻塞了，P 就会寻找空闲的 M，若没有则创建新的 M。</p><h3 id="_2-2-调度器的设计" tabindex="-1"><a class="header-anchor" href="#_2-2-调度器的设计" aria-hidden="true">#</a> 2.2 调度器的设计</h3><ul><li><strong>复用线程</strong>： 避免了频繁创建、销毁线程，而是对线程的复用 <ul><li>Work Stealing 当本线程无可运行的 G, 尝试从其他线程绑定的 P 中偷取 G, 而不是销毁线程</li><li>Hand Off 当线程因 G 进行系统调用而阻塞时，线程释放绑定的 P,将 P 转移至其他空闲的线程执行</li></ul></li><li><strong>利用并行</strong>： <code>GOMAXPROCS</code> 设置 P 的数量，最多有 <code>GOMAXPROCS</code> 个线程分布在多个 CPU 上同时运行。<code>GOMAXPROCS</code> 也限制了并行的程度，比如当 <code>GOMAXPROCS = CPU 核心数 / 2</code> 时最多利用一半的 CPU 核心进行并行。</li><li><strong>抢占</strong>：对于协程 (coroutine) 来说需要协程主动让出 CPU 才能执行下一个，而 go 协程 (goroutine) 最多占用 CPU 10ms，防止其他的 goroutine 饿死。</li><li><strong>全局 G 队列</strong>：在新的调度器中依然有全局 G 队列，但功能已被弱化，仅当 M 执行 Work Stealing 无法从其他的 P 本地队列中获取 G 是才会从全局队列中获取。</li></ul><h3 id="_2-3-go-func-调度流程" tabindex="-1"><a class="header-anchor" href="#_2-3-go-func-调度流程" aria-hidden="true">#</a> 2.3 <code>go func()</code> 调度流程</h3><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/a4vWtvRWGQ.jpeg!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由上图可以看到：</p><ol><li><code>go func()</code> 创建一个 goroutine</li><li>由两个存储 G 的队列，一个是局部调度器 P 的本地队列，一个是全局 G 队列。新创建的 G 会先保存在 P 的本地队列中，若 P 的本地队列已经满了就会保存在全局的队列中</li><li>G 只能运行在 M 中，一个 M 必须持有一个 P, M 与 P 是 1:1 的关系。M 与 P 是 1:1 的关系。M 会从 P 的本地队列弹出一个可执行状态的 G 来执行，如果 P 的本地队列为空，就会从其他的 MP 组合中偷取可执行的 G。</li><li>一个 M 调度 G 执行对的过程是一个循环机制</li><li>当 M 执行某一个 G 时若发生了 <code>syscall</code> 或则其余阻塞操作，M 会阻塞，若当前有一些 G 在执行，<code>runtime</code> 会将此线程 M 从 P 中摘除(detach), 然后再创建一个新的操作系统线程（若有空闲线程则服用）来服务这个 P。</li><li>当 M 系统调用结束时，这个 G 会尝试获取一个空闲的 P 执行，并放入到这个 P 的本地队列。若获取不到 P，那么这个线程 M 编程休眠状态，加入到空闲线程中，然后这个 G 会被放入全局队列中。</li></ol><h3 id="_2-4-调度器的生命周期" tabindex="-1"><a class="header-anchor" href="#_2-4-调度器的生命周期" aria-hidden="true">#</a> 2.4 调度器的生命周期</h3><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/j37FX8nek9.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上图中出现的特殊的 M 和 G:</p><ul><li><strong>M0</strong>: 启动程序后的编号为 0 的主线程，这个 M 对应的实例会在全局变量 <code>runtime.m0</code> 中，不需要在 heap 上分配，M0 负责执行初始化操作和启动第一个 G，在之后 M0 就和其他的 M 一样了。</li><li><strong>G0</strong>: 每次启动一个 M 都会第一个创建的 goroutine， G0 仅用于负责调度的 G，G0 不指向任何可执行的函数，每个 M 都会有一个自己的 G0。在调度或系统调用时会使用 G0 的栈空间，全局变量的 G0 是 M0 的 G0。</li></ul><p>下面追踪一段代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello world&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>runtime</code> 创建最初的线程 <code>M0</code> 和 goroutine <code>g0</code> , 并关联二者</li><li>调度器初始化，初始化 M0, 栈，GC 以及有 GOMAXPROCS 个 P 构成的列表</li><li>示例代码中的 main 函数 <code>main.main</code>, <code>runtime</code> 中也有一个 main 函数 <code>runtime.main</code>，代码经过编译后，<code>runtime.main</code> 会调用 <code>main.main</code> ，程序启动时会为 <code>runtime.main</code> 创建 goroutine，称其为主协程，然后将主协程加入 P 的本地队列。</li><li>启动 M0，M0 已经绑定了 P, 会从 P 的本地队列获取 G，此例中获取到主协程</li><li>G 拥有栈内存，M 根据 G 中的栈信息和调度信息设置运行环境</li><li>M 执行 G</li><li>G 退出，再次回到 M，M 会再次尝试获取 G ，如此重复下去直到 <code>main.main</code> 退出，<code>runtime.main</code> 会执行 Defer 和 Panic 处理，或者调用 <code>runtime.exit</code> 退出</li></ul><p>调度器的生命周期几乎占满了 Go 程序的一生， <code>runtime.main</code> 的 goroutine 执行之前都是为调度器做准备工作，<code>runtime.main</code> 的 goroutine 的运行才是调度器真正的开始，直到 <code>runtime.main</code> 的结束。</p><h3 id="_2-5-可视化-gmp" tabindex="-1"><a class="header-anchor" href="#_2-5-可视化-gmp" aria-hidden="true">#</a> 2.5 可视化 GMP</h3><h4 id="_2-5-1-go-tool-trace" tabindex="-1"><a class="header-anchor" href="#_2-5-1-go-tool-trace" aria-hidden="true">#</a> 2.5.1 go tool trace</h4><p>trace 工具可以记录运行时信息，能提供可视化的 Web 页面</p><p>以下是简单的测试代码，创建 trace （会运行在独立的 goroutine 中），然后 main 打印 “Hello World” 退出：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;runtime/trace&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// create trace file</span>
	f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;trace.out&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE<span class="token operator">|</span>os<span class="token punctuation">.</span>O_WRONLY<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to create trace file: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// remember to close</span>
	<span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// start trace goroutine</span>
	err <span class="token operator">=</span> trace<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to start trace: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// remember to stop</span>
	<span class="token keyword">defer</span> trace<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// main</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行程序会生成 <code>trace.out</code>，使用 trace 工具分析文件就可以在浏览器访问了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go tool trace trace.out
<span class="token number">2022</span>/01/12 <span class="token number">21</span>:57:41 Parsing trace<span class="token punctuation">..</span>.
<span class="token number">2022</span>/01/12 <span class="token number">21</span>:57:41 Splitting trace<span class="token punctuation">..</span>.
<span class="token number">2022</span>/01/12 <span class="token number">21</span>:57:41 Opening browser. Trace viewer is listening on http://127.0.0.1:37259
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在首页点击 <code>view trace </code> 即可看到可视化的调度流程</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20220112221549447.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/vYyO9YJmam.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>G 信息</strong></p><p>点击 Gotoutine 的一段条形图，可以看到</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20220112221803958.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其中 G0 为每个 M 一定会有的初始化的 G，而 G1 就是执行中的主协程了，在所选的这段时间中处于可运行和运行态。</p><p><strong>M 信息</strong></p><p>点击 Threads 的一段可以看到：</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20220112222138530.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其中 M0 是初始化的 M0，而 M1 是用于执行主协程 G1 的线程</p><p><strong>P 信息</strong></p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20220112222432548.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>G1 中调用了 <code>main.main</code> ， 创建了 <code>trace goroutine</code> G6。 G1 运行于 P0 上，G6 运行在 P1 上， 由于 M 和 P 是一一绑定的，这是看下 M 的信息会发现新的线程 M2 执行G6。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20220112222824759.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_2-5-2-debug-trace" tabindex="-1"><a class="header-anchor" href="#_2-5-2-debug-trace" aria-hidden="true">#</a> 2.5.2 debug trace</h4><p>下面利用 debug 的形式来进行跟踪</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go build <span class="token parameter variable">-o</span> trace ./trace.go
$ <span class="token assign-left variable">GODEBUG</span><span class="token operator">=</span>schedtrace<span class="token operator">=</span><span class="token number">1000</span> ./trace
<span class="token assign-left variable">GODEBUG</span><span class="token operator">=</span>schedtrace<span class="token operator">=</span><span class="token number">1000</span> ./trace
SCHED 0ms: <span class="token assign-left variable">gomaxprocs</span><span class="token operator">=</span><span class="token number">16</span> <span class="token assign-left variable">idleprocs</span><span class="token operator">=</span><span class="token number">13</span> <span class="token assign-left variable">threads</span><span class="token operator">=</span><span class="token number">5</span> <span class="token assign-left variable">spinningthreads</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">idlethreads</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">runqueue</span><span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span>
Hello World
SCHED 1005ms: <span class="token assign-left variable">gomaxprocs</span><span class="token operator">=</span><span class="token number">16</span> <span class="token assign-left variable">idleprocs</span><span class="token operator">=</span><span class="token number">16</span> <span class="token assign-left variable">threads</span><span class="token operator">=</span><span class="token number">5</span> <span class="token assign-left variable">spinningthreads</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">idlethreads</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">runqueue</span><span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span>
Hello World
SCHED 2006ms: <span class="token assign-left variable">gomaxprocs</span><span class="token operator">=</span><span class="token number">16</span> <span class="token assign-left variable">idleprocs</span><span class="token operator">=</span><span class="token number">16</span> <span class="token assign-left variable">threads</span><span class="token operator">=</span><span class="token number">5</span> <span class="token assign-left variable">spinningthreads</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">idlethreads</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">runqueue</span><span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span>
Hello World
SCHED 3007ms: <span class="token assign-left variable">gomaxprocs</span><span class="token operator">=</span><span class="token number">16</span> <span class="token assign-left variable">idleprocs</span><span class="token operator">=</span><span class="token number">16</span> <span class="token assign-left variable">threads</span><span class="token operator">=</span><span class="token number">5</span> <span class="token assign-left variable">spinningthreads</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">idlethreads</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">runqueue</span><span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span>
Hello World
SCHED 4009ms: <span class="token assign-left variable">gomaxprocs</span><span class="token operator">=</span><span class="token number">16</span> <span class="token assign-left variable">idleprocs</span><span class="token operator">=</span><span class="token number">16</span> <span class="token assign-left variable">threads</span><span class="token operator">=</span><span class="token number">5</span> <span class="token assign-left variable">spinningthreads</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">idlethreads</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">runqueue</span><span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span>
Hello World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>SCHED</code>: 调试信息输出标志字符串，代表本行为 goroutine 调度器的输出</li><li><code>1005ms</code>: 为程序启动到输出日志的时间</li><li><code>gomaxprocs</code>: P 的数量，本例中为 16， 因为 gomaxprocs 默认与 CPU 的核心数量一致</li><li><code>idleprocs</code>: 处于空闲状态的 P 的数量</li><li><code>thread</code>: 线程数</li><li><code>spiningthreads</code>: 自旋线程数，当 M 在本地队列，全局运行队列中找不到 G 则可以认为 M 正在自旋，也就是说 M 进入了循环寻找可运行 G 的状态</li><li><code>runqueue</code>: Scheduler 全局队列中的 G 数量</li><li><code>[[0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]]</code>: 各个 P 中本地队列的 G 数量</li></ul><h2 id="_3-调度器场景解析" tabindex="-1"><a class="header-anchor" href="#_3-调度器场景解析" aria-hidden="true">#</a> 3. 调度器场景解析</h2><h3 id="_3-1-g1-创建-g2" tabindex="-1"><a class="header-anchor" href="#_3-1-g1-创建-g2" aria-hidden="true">#</a> 3.1 G1 创建 G2</h3><p>P 拥有 G1，M1 获取 P 后开始运行 G1，G1 使用 <code>go func()</code> 创建 G2，为了保证局部性 G2 优先加入到 P1 的本地队列。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/Pm8LOYcsWQ.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-2-本地队列执行" tabindex="-1"><a class="header-anchor" href="#_3-2-本地队列执行" aria-hidden="true">#</a> 3.2 本地队列执行</h3><p>G1 运行完成后 （<code>goexit</code> 函数），M 上运行的 goroutine 切换为 G0， G0 负责调度时协程的切换（<code>schedule</code> 函数）。从 P 的本地队列获取 G2，从 G0 切换到 G2，并开始运行 G2（<code>execute</code> 函数）。实现了线程 M1 的复用。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/JWDtmKG3rK.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-3-本地队列容量已满" tabindex="-1"><a class="header-anchor" href="#_3-3-本地队列容量已满" aria-hidden="true">#</a> 3.3 本地队列容量已满</h3><p>假设每个 P 的队列长度为 3，G2 在运行时创建了 6 个 G，前 3 G（G3，G4，G5）已经加入 P1 的队列，此时 P1 的容量已满。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/UpjRxzIBd3.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-4-负载均衡" tabindex="-1"><a class="header-anchor" href="#_3-4-负载均衡" aria-hidden="true">#</a> 3.4 负载均衡</h3><p>紧接着上面的场景，G2 创建 G7 时，P1 的本地队列已满，需要执行 <strong>负载均衡</strong>（将 P1 中本地队列中前一半的 G 以及新创建的 G <strong>转移</strong> 至全局队列。实际上 不一定是新的 G，如果 G 在 G2 之后就会执行，就会被保存在本地队列，而已存在的 G 会被移动到全局队列）</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/chqTgsiuWi.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>移动至全局队列时，G 的顺序会被打乱，此时加入队列的顺序为 G3 G7 G4。</p><h3 id="_3-5-本地队列容量未满" tabindex="-1"><a class="header-anchor" href="#_3-5-本地队列容量未满" aria-hidden="true">#</a> 3.5 本地队列容量未满</h3><p>G2 创建 G8 时，P1 的本地队列未满，所以 G8 会被 <strong>优先</strong> 加入到 P1 的本地队列。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/nukEY92G6D.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-6-唤醒正在休眠的-m" tabindex="-1"><a class="header-anchor" href="#_3-6-唤醒正在休眠的-m" aria-hidden="true">#</a> 3.6 唤醒正在休眠的 M</h3><p><strong>在创建 G 时，运行的 G 会尝试唤醒休眠的 P M 组合</strong></p><p>假设 G2 唤醒了 M2（和 P2 绑定），此时 M2 会运行 G0，但 P2 队列没有 G，此时 M2 就处于 <strong>自旋</strong> 状态（没有可运行 G 但处于运行状态，不断寻找 G）。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/2FWNXSuHfX.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-7-从全局队列中获取-g" tabindex="-1"><a class="header-anchor" href="#_3-7-从全局队列中获取-g" aria-hidden="true">#</a> 3.7 从全局队列中获取 G</h3><p>M2 尝试从全局队列（GQ）取一批 G 放入 P2 的本地队列（函数：<code>findrunnable()</code>）,M2 从全局队列取的 G 数量满足下列公式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>n = min( len(GQ)/GOMAXPROCS + 1, len(GQ/2) ) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至少从 GQ 中获取一个 G，但不会一次获取过多的 G 到 P 的本地队列，这时 <strong>全局队列到 P 本地队列的负载均衡</strong>。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/0fn8DGqI8N.jpeg!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>假设场景中一共有 4 个 P （ <code>GOMAXPROCS </code> 为 4 ），所以 M2 只能从全局队列取 1 个 G （G3）移动到 P2 本地队列，然后完成 G0 到 G3 的切换，运行 G3。</p><h3 id="_3-8-从-p-的本地队列中偷取-g-work-stealing" tabindex="-1"><a class="header-anchor" href="#_3-8-从-p-的本地队列中偷取-g-work-stealing" aria-hidden="true">#</a> 3.8 从 P 的本地队列中偷取 G (work stealing)</h3><p>假设 G2 一直在 M1 上运行，经过 2 轮之后， M2 已经把 G7, G4 从全局队列中获取并完成运行，全局队列和 P2 的本地队列均已无可运行 G，如下图左半部分所示：</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/qn1NRMLqnp.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>全局队列已经没有 G, 那么 M 就会执行 work stealing, 从其他持有 G 的 P 中偷取一半 G 放入自己的 P 本地队列。上图右半部分， M2 从 M1 的 P1 本地队列获取 G8 来运行。</p><h3 id="_3-9-自旋线程" tabindex="-1"><a class="header-anchor" href="#_3-9-自旋线程" aria-hidden="true">#</a> 3.9 自旋线程</h3><p>G1 本地队列 G5、G6 已经被其他 M 偷走并运行完成，当前 M1 和 M2 分别在运行 G2 和 G8，M3 和 M4 没有可运行的 G，此时 M3 和 M4 处于 <strong>自旋状态</strong>，它们不断寻找可运行的 G。</p><figure><img src="https://cdn.learnku.com/uploads/images/202003/12/58489/1DjlseEGTT.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>处于自旋状态的线程是正在运行的，没有执行 G 而是寻找可运行的 G 。</p><p>那么为什么不销毁线程呢？</p><p>因为需要 <strong>当有新的 G 创建时，立刻有 M 能够运行它</strong>，线程的创建和销毁是需要时间成本的，频繁的创建和销毁会增加时延降低效率。但是过多的自旋线程也会造成 CPU 资源的浪费，所以系统中最多有 <code>GOMAXPROCS</code> 个自旋线程，而多余的空线程会进入休眠状态。</p><h3 id="_3-10-g-发生阻塞系统调用" tabindex="-1"><a class="header-anchor" href="#_3-10-g-发生阻塞系统调用" aria-hidden="true">#</a> 3.10 G 发生阻塞系统调用</h3><p>假设当前除了 M3 和 M4 为自旋线程，还有 M5 和 M6 为空闲线程（没有和 P 绑定，处于休眠状态。当前 P 的最大数量为 4，M 的数量满足 M &gt;= P）。当 M2（P2 绑定）执行的 G8 创建了 G9 并且 G8 进行了 <strong>阻塞的系统调用</strong>，此时 P2 会和 M2 解绑，P2 会进行如下判断：</p><ul><li>若 P2 的本地队列有 G 或者 全局队列中有 G，且存在空闲的 M ，P2 会马上唤醒一个 M 与之绑定</li><li>否则，P 会加入到空闲 P 列表，等待 M 来获取可用的 P</li></ul><p>下图中，P2 的本地队列中有 G9，故可以和 M5 绑定</p><figure><img src="https://cdn.learnku.com/uploads/images/202003/12/58489/k3HKE9U21M.png!large" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-11-g-发生非阻塞系统调用" tabindex="-1"><a class="header-anchor" href="#_3-11-g-发生非阻塞系统调用" aria-hidden="true">#</a> 3.11 G 发生非阻塞系统调用</h3><p>当 G8 创建了 G9，加入此时 G8 发生了 <strong>非阻塞的系统调用</strong>。</p><p>M2 和 P2 会解绑，但 M2 会记住 P2 ，之后 G8 和 M2 进入 <strong>系统调用状态</strong>。当 G8 和 M2 退出系统调用时，会尝试再次获取 P2：</p><ul><li>若无法获取 P2，则获取空闲的 P</li><li>若无空闲 P ，则 G8 将被标记为可运行状态，加入全局队列。此时 M2 因无 P 与之绑定将进入休眠状态（长时间的休眠等待将被 GC 回收销毁）</li></ul><h2 id="_4-小结" tabindex="-1"><a class="header-anchor" href="#_4-小结" aria-hidden="true">#</a> 4. 小结</h2><p>Go 的调度器轻量且简单，让 Go 具有原生的并发能力。<strong>其本质是将大量的 goroutine 分配到少量的线程上执行，并利用多核并行，实现更强大的并发</strong></p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,152),u={href:"https://learnku.com/articles/41728",target:"_blank",rel:"noopener noreferrer"},d={href:"https://learnku.com/blog/Aceld",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zh.wikipedia.org/wiki/%E8%A1%8C%E7%A8%8B%E6%8E%A7%E5%88%B6%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"};function m(k,b){const s=r("ExternalLinkIcon");return i(),o("div",null,[l,n("ol",null,[n("li",null,[n("a",u,[a("Golang 调度器 GMP 原理与调度全分析"),e(s)]),a(),n("a",d,[a("Aceld"),e(s)])]),n("li",null,[n("a",g,[a("进程控制块"),e(s)]),a(" wikipedia")])])])}const f=t(c,[["render",m],["__file","GMPModel.html.vue"]]);export{f as default};
