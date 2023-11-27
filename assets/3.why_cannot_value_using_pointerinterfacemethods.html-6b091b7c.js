import{_ as i,Z as o,$ as l,a0 as n,a1 as a,a2 as t,a4 as e,H as c}from"./framework-d03928c9.js";const p={},d=e(`<p>为何值类型的变量转换成接口变量之后无法调用接收者为指针的接口方法？</p><h2 id="_1-接口和方法集" tabindex="-1"><a class="header-anchor" href="#_1-接口和方法集" aria-hidden="true">#</a> 1. 接口和方法集</h2><p>对于变量的类型和其接口方法的接收者类型，当其转换成接口后的方法调用情况如下:</p><table><thead><tr><th>变量类型\\接口方法接收者类型</th><th>值</th><th>指针</th></tr></thead><tbody><tr><td>值</td><td>可</td><td>不可</td></tr><tr><td>指针</td><td>可</td><td>可</td></tr></tbody></table><p>当尝试使用值类型的变量转换成接口，然后调用指针类型的方法：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Duck <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Quack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Cat <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Cat<span class="token punctuation">)</span> <span class="token function">Quack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> d Duck <span class="token operator">=</span> Cat<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;cat&quot;</span><span class="token punctuation">}</span>
	d<span class="token punctuation">.</span><span class="token function">Quack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若编译文件，则会出现错误：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go tool compile main.go
main.go:14:15: cannot use Cat<span class="token punctuation">{</span>…<span class="token punctuation">}</span> <span class="token punctuation">(</span>value of <span class="token builtin class-name">type</span> Cat<span class="token punctuation">)</span> as Duck value <span class="token keyword">in</span> variable declaration: Cat does not implement Duck <span class="token punctuation">(</span>method Quack has pointer receiver<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Cat</code>并未实现<code>Duck</code>接口，方法<code>Quack</code>的接收者为指针类型。</p><h2 id="_2-why" tabindex="-1"><a class="header-anchor" href="#_2-why" aria-hidden="true">#</a> 2. Why</h2><p>根本原因：<strong>Golang 的函数参数传递是 值传递</strong>，即函数的参数是原参数的一份拷贝。</p><p>对于变量的类型：</p><ol><li><strong>指针</strong>类型，转换成接口后，<strong>接口</strong>变量<strong>持有</strong>的是<strong>原变量的指针</strong><ul><li>可直接调用接收者为指针类型的接口方法</li><li>可间接调用接收者为值类型（自动<strong>解引用</strong>）的接口方法</li></ul></li><li><strong>值</strong>类型，转换成接口后，<strong>接口</strong>变量<strong>持有</strong>的是<strong>原变量的拷贝</strong><ul><li>可直接调用接收者为值类型的接口方法</li><li><strong>不可</strong>调用接收者为指针类型的接口方法，无法获取原变量的指针，即接口持有的值类型变量<strong>无法寻址</strong></li></ul></li></ol><p>上述的原因是从<strong>宏观</strong>层面上得出的结论，但是要想知道是如何发生拷贝的或者说为什么无法寻址，需要具体分析函数的执行情况。</p><h2 id="_3-golang-assembly" tabindex="-1"><a class="header-anchor" href="#_3-golang-assembly" aria-hidden="true">#</a> 3. Golang Assembly</h2><blockquote><p>The Go compiler outputs an abstract, portable form of assembly that doesn&#39;t actually map to any real hardware. The Go assembler then uses this pseudo-assembly output in order to generate concrete, machine-specific instructions for the targeted hardware.</p></blockquote><p>Golang 的汇编是伪汇编代码，最终根据不同的机器指令生成具体的汇编代码。</p>`,17),u={href:"https://9p.io/sys/doc/asm.html",target:"_blank",rel:"noopener noreferrer"},r=n("code",null,"Plan 9 assemblers",-1),m=n("code",null,"MOVQ AX DI",-1),v=e(`<p>Golang 汇编中有四个伪寄存器：</p><ul><li><code>FP</code>: Frame pointer: arguments and locals.</li><li><code>PC</code>: Program counter: jumps and branches.</li><li><code>SB</code>: Static base pointer: global symbols.</li><li><code>SP</code>: Stack pointer: the highest address within the local stack frame.</li></ul><p>其中，需要关注的是<code>SP</code>表示当前栈帧的栈顶地址，<code>SB</code>用于表示基址，即在内存中的初始位置，例如：foo(SB) 是 foo 在内存中的地址。</p><h2 id="_4-how" tabindex="-1"><a class="header-anchor" href="#_4-how" aria-hidden="true">#</a> 4. How</h2><p>想要知道为何不能调用指针类型的接口方法，需要分析两点：</p><ol><li>变量到接口变量的<strong>类型转换</strong></li><li>接口变量<strong>调用方法</strong></li></ol><h3 id="指针类型-接口" tabindex="-1"><a class="header-anchor" href="#指针类型-接口" aria-hidden="true">#</a> 指针类型 -&gt; 接口</h3><p>首先分析，变量为指针类型时，转换成接口后如何调用方法的。</p><p>以下面代码为例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Duck <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Quack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">Quack2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Cat <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Cat<span class="token punctuation">)</span> <span class="token function">Quack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Cat<span class="token punctuation">)</span> <span class="token function">Quack2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> d Duck 
    d <span class="token operator">=</span> <span class="token operator">&amp;</span>Cat<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;mycat&quot;</span><span class="token punctuation">}</span>
	d<span class="token punctuation">.</span><span class="token function">Quack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    d<span class="token punctuation">.</span><span class="token function">Quack2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，值类型<code>Cat</code>实现了接口<code>Duck</code>。</p><p>现将其编译成汇编，查看其执行流程:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go tool compile <span class="token parameter variable">-S</span> <span class="token parameter variable">-N</span> <span class="token parameter variable">-l</span> main.go <span class="token operator">&gt;</span> asm.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>go tool compile -S -N -l</code>： 编译文件，<code>-N</code>关闭编译器优化，<code>-l</code>关闭内联编译，<code>-S</code>输出为汇编格式</li></ul><p>只需关注其类型转换和函数调用流程。</p><p>首先分析类型转换部分：</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>main.main STEXT size=171 args=0x0 locals=0x38 funcid=0x0 align=0x0
...
0x001e 00030 (D:\\tmp\\gotmp\\main.go:17)	LEAQ	type:main.Cat(SB), AX
...
0x0025 00037 (D:\\tmp\\gotmp\\main.go:17)	CALL	runtime.newobject(SB)
0x002a 00042 (D:\\tmp\\gotmp\\main.go:17)	MOVQ	AX, main..autotmp_2+16(SP)
0x002f 00047 (D:\\tmp\\gotmp\\main.go:17)	MOVQ	$5, 8(AX)
...
0x0044 00068 (D:\\tmp\\gotmp\\main.go:17)	LEAQ	go:string.&quot;mycat&quot;(SB), CX
0x004b 00075 (D:\\tmp\\gotmp\\main.go:17)	MOVQ	CX, (AX)
...
0x0050 00080 (D:\\tmp\\gotmp\\main.go:17)	MOVQ	AX, DI
...
0x0062 00098 (D:\\tmp\\gotmp\\main.go:17)	MOVQ	main..autotmp_2+16(SP), AX
0x0067 00103 (D:\\tmp\\gotmp\\main.go:17)	MOVQ	AX, main..autotmp_1+24(SP)
0x006c 00108 (D:\\tmp\\gotmp\\main.go:17)	LEAQ	go:itab.*&lt;unlinkable&gt;.Cat,&lt;unlinkable&gt;.Duck(SB), CX
0x0073 00115 (D:\\tmp\\gotmp\\main.go:17)	MOVQ	CX, main.d+32(SP)
0x0078 00120 (D:\\tmp\\gotmp\\main.go:17)	MOVQ	AX, main.d+40(SP)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),g={href:"https://github.com/golang/go/blob/release-branch.go1.20/src/runtime/malloc.go#L1253",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"runtime.newobject",-1),k=n("code",null,"Cat",-1),h=n("code",null,"*Cat",-1),_=n("li",null,[a("向"),n("code",null,"*Cat"),a("指向的堆内存中写入数据，相当于"),n("code",null,'&StringHeader{Data: &"mycat", Len: 5}')],-1),f=n("li",null,[a("然后初始化接口类型，相当于"),n("code",null,"&iface{itab: ..., data: *Cat}")],-1),x=e(`<p>类型转换的栈内存如下图所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------+                              
|                   ------------+                  
|      *Cat         |           |                  
---------------------   40 SP   |                  
|                   |           |  +--------------+
|    *itav,Duck     |           |  |              |
---------------------   32 SP   |  |     5        |
|                   |           |  ----------------
|       ...         |           |  |              |
---------------------   24 SP   |---    &quot;mycat&quot;   |
|                   |              +--------------+
|       ...         |                              
---------------------   16 SP            Heap      
|                   |                              
|       ...         |                              
+-------------------+   SP                         
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数调用部分：</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>main.Duck.Quack STEXT dupok size=108 args=0x10 locals=0x10 funcid=0x15 align=0x0
	...
	0x001d 00029 (&lt;autogenerated&gt;:1)	MOVQ	AX, main..this+24(SP)
	0x0022 00034 (&lt;autogenerated&gt;:1)	MOVQ	BX, main..this+32(SP)
	0x0027 00039 (&lt;autogenerated&gt;:1)	TESTB	AL, (AX)
	0x0029 00041 (&lt;autogenerated&gt;:1)	MOVQ	24(AX), CX
	0x002d 00045 (&lt;autogenerated&gt;:1)	MOVQ	BX, AX
	0x0030 00048 (&lt;autogenerated&gt;:1)	PCDATA	$1, $1
	0x0030 00048 (&lt;autogenerated&gt;:1)	CALL	CX
	0x0032 00050 (&lt;autogenerated&gt;:1)	MOVQ	8(SP), BP
	0x0037 00055 (&lt;autogenerated&gt;:1)	ADDQ	$16, SP
	0x003b 00059 (&lt;autogenerated&gt;:1)	RET
	...
	
main.Duck.Quack2 STEXT dupok size=108 args=0x10 locals=0x10 funcid=0x15 align=0x0
	...
	0x001d 00029 (&lt;autogenerated&gt;:1)	MOVQ	AX, main..this+24(SP)
	0x0022 00034 (&lt;autogenerated&gt;:1)	MOVQ	BX, main..this+32(SP)
	0x0027 00039 (&lt;autogenerated&gt;:1)	TESTB	AL, (AX)
	0x0029 00041 (&lt;autogenerated&gt;:1)	MOVQ	32(AX), CX
	0x002d 00045 (&lt;autogenerated&gt;:1)	MOVQ	BX, AX
	0x0030 00048 (&lt;autogenerated&gt;:1)	PCDATA	$1, $1
	0x0030 00048 (&lt;autogenerated&gt;:1)	CALL	CX
	...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>AX</code>指向的是<code>Duck</code>变量的地址</p></li><li><p><code>24(AX)</code>是<code>Duck</code>变量中函数指针数组的位置：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> itab <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	inter <span class="token operator">*</span>interfacetype <span class="token comment">// 8 Byte</span>
	_type <span class="token operator">*</span>_type		 <span class="token comment">// 8 Byte</span>
	hash  <span class="token builtin">uint32</span> 		 <span class="token comment">// 4 Byte</span>
	<span class="token boolean">_</span>     <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">byte</span>		 <span class="token comment">// 4 Byte</span>
	fun   <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token builtin">uintptr</span> <span class="token comment">// variable sized. fun[0]==0 means _type does not implement inter.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>24(AX)</code>：函数<code>Quack()</code></p></li><li><p><code>32(AX)</code>：函数<code>Quack2()</code></p></li></ul><h3 id="值类型-接口" tabindex="-1"><a class="header-anchor" href="#值类型-接口" aria-hidden="true">#</a> 值类型 -&gt; 接口</h3><p>若改为值类型，如代码所示：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Duck <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Quack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Cat <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c Cat<span class="token punctuation">)</span> <span class="token function">Quack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> d Duck
	d <span class="token operator">=</span> Cat<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;mycat&quot;</span><span class="token punctuation">}</span>
	d<span class="token punctuation">.</span><span class="token function">Quack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后分析类型转换部分：</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>main.main STEXT size=156 args=0x0 locals=0x60 funcid=0x0 align=0x0
	...
	0x0024 00036 (D:\\tmp\\gotmp\\main.go:15)	LEAQ	go:string.&quot;mycat&quot;(SB), CX
	0x002b 00043 (D:\\tmp\\gotmp\\main.go:15)	MOVQ	CX, main..autotmp_1+72(SP)
	0x0030 00048 (D:\\tmp\\gotmp\\main.go:15)	MOVQ	$5, main..autotmp_1+80(SP)
	0x0039 00057 (D:\\tmp\\gotmp\\main.go:15)	MOVQ	CX, main..autotmp_2+56(SP)
	0x003e 00062 (D:\\tmp\\gotmp\\main.go:15)	MOVQ	$5, main..autotmp_2+64(SP)
	0x0047 00071 (D:\\tmp\\gotmp\\main.go:15)	LEAQ	main..autotmp_2+56(SP), CX
	...
	0x004e 00078 (D:\\tmp\\gotmp\\main.go:15)	MOVQ	main..autotmp_2+56(SP), AX
	0x0053 00083 (D:\\tmp\\gotmp\\main.go:15)	MOVQ	AX, main..autotmp_3+40(SP)
	0x0058 00088 (D:\\tmp\\gotmp\\main.go:15)	MOVQ	$5, main..autotmp_3+48(SP)
	...
	0x0066 00102 (D:\\tmp\\gotmp\\main.go:15)	CALL	runtime.convTstring(SB)
	0x006b 00107 (D:\\tmp\\gotmp\\main.go:15)	MOVQ	AX, main..autotmp_4+16(SP)
	0x0070 00112 (D:\\tmp\\gotmp\\main.go:15)	LEAQ	go:itab.&lt;unlinkable&gt;.Cat,&lt;unlinkable&gt;.Duck(SB), CX
	0x0077 00119 (D:\\tmp\\gotmp\\main.go:15)	MOVQ	CX, main.d+24(SP)
	0x007c 00124 (D:\\tmp\\gotmp\\main.go:15)	MOVQ	AX, main.d+32(SP)
	...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),y=n("li",null,[a("初始化变量，"),n("code",null,'Cat{Name: "mycat"}'),a(", 此时初始化位置为"),n("strong",null,"栈"),a("，（上个程序"),n("code",null,'&Cat{Name: "mycat"}'),a("初始化位置为"),n("strong",null,"堆"),a("）")],-1),C={href:"https://github.com/golang/go/blob/release-branch.go1.20/src/runtime/iface.go#L388",target:"_blank",rel:"noopener noreferrer"},Q=n("code",null,"runtime.convTstring",-1),S=n("code",null,"Cat.Name",-1),D=n("strong",null,"堆",-1),X=n("code",null,"Cat",-1),w=n("code",null,"Name",-1),A=n("li",null,[a("初始化接口变量，此时接口变量持有的是新的Cat变量，"),n("strong",null,"原变量的地址已无法获取")],-1),P=n("p",null,"综上，因为值类型的变量在转换成接口类型时，发生了值的拷贝，接口类型持有的变量不再是原变量，导致无法获取原变量的地址。",-1),V=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),a(" Reference")],-1),M={href:"https://draveness.me/golang",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/unknwon/the-way-to-go_ZH_CN/blob/master/eBook/11.6.md",target:"_blank",rel:"noopener noreferrer"},B={href:"https://go.dev/doc/asm#data-offsets",target:"_blank",rel:"noopener noreferrer"},L={href:"https://cmc.gitbook.io/go-internals/chapter-i-go-assembly#pseudo-assembly",target:"_blank",rel:"noopener noreferrer"},N={href:"https://9p.io/sys/doc/asm.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://textik.com/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.cnblogs.com/jiujuan/p/16555192.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://stuff.mit.edu/afs/sipb/project/golang/arch/amd64_deb40/doc/asm.html",target:"_blank",rel:"noopener noreferrer"};function $(j,G){const s=c("ExternalLinkIcon");return o(),l("div",null,[d,n("p",null,[a("Golang 采用 "),n("a",u,[r,t(s)]),a("，其语法和汇编有些许差异，比如：指令的计算方向和汇编相反，从左到右；"),m,a("表示将 AX的内容移动至DI。")]),v,n("ul",null,[n("li",null,[a("首先调用"),n("a",g,[b,t(s)]),a("在堆上初始化类型"),k,a("，并返回指针"),h]),_,f]),x,n("ul",null,[y,n("li",null,[n("a",C,[Q,t(s)]),a("将当前的字符串，即"),S,a("拷贝到"),D,a("上，返回新分配的内存地址（这个地址就是新的"),X,a("变量的地址，因为"),w,a("是Cat的第一个字段，Cat的地址和Name是一样的）")]),A]),P,V,n("ol",null,[n("li",null,[n("a",M,[a("https://draveness.me/golang"),t(s)])]),n("li",null,[n("a",O,[a("https://github.com/unknwon/the-way-to-go_ZH_CN/blob/master/eBook/11.6.md"),t(s)])]),n("li",null,[n("a",B,[a("https://go.dev/doc/asm#data-offsets"),t(s)])]),n("li",null,[n("a",L,[a("https://cmc.gitbook.io/go-internals/chapter-i-go-assembly#pseudo-assembly"),t(s)])]),n("li",null,[n("a",N,[a("https://9p.io/sys/doc/asm.html"),t(s)])]),n("li",null,[n("a",T,[a("https://textik.com/"),t(s)])]),n("li",null,[n("a",E,[a("https://www.cnblogs.com/jiujuan/p/16555192.html"),t(s)])]),n("li",null,[n("a",q,[a("https://stuff.mit.edu/afs/sipb/project/golang/arch/amd64_deb40/doc/asm.html"),t(s)])])])])}const z=i(p,[["render",$],["__file","3.why_cannot_value_using_pointerinterfacemethods.html.vue"]]);export{z as default};
