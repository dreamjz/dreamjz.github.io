import{_ as t,Z as o,$ as p,a0 as n,a1 as a,a2 as e,a3 as i,H as l}from"./framework-09afcf0b.js";const c={},u=i(`<h2 id="_1-dead-code" tabindex="-1"><a class="header-anchor" href="#_1-dead-code" aria-hidden="true">#</a> 1. Dead code</h2><blockquote><p>In compiler theory, dead code elimination (also known as DCE, dead code removal, dead code stripping, or dead code strip) is a compiler optimization to remove code which does not affect the program results.</p><p>Removing such code has several benefits: it shrinks program size, an important consideration in some contexts, and it allows the running program to avoid executing irrelevant operations, which reduces its running time.</p></blockquote><p>死码消除(dead code elimination, DCE)是一种编译器优化技术，用处是在编译阶段去掉对程序运行结果没有任何影响的代码。</p><p>死码消除有很多好处：减小程序体积，程序运行过程中避免执行无用的指令，缩短运行时间。</p><h3 id="_1-1-使用常量提升性能" tabindex="-1"><a class="header-anchor" href="#_1-1-使用常量提升性能" aria-hidden="true">#</a> 1.1 使用常量提升性能</h3><p>定义全局变量 <code>a,b</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> num1 <span class="token operator">&gt;</span> num2 <span class="token punctuation">{</span>
		<span class="token keyword">return</span> num1
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> num2
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">==</span> a <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将<code>a,b</code> 改为常量：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> num1 <span class="token operator">&gt;</span> num2 <span class="token punctuation">{</span>
		<span class="token keyword">return</span> num1
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> num2
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">==</span> a <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译之后查看大小：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-lh</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;main_&#39;</span>
<span class="token number">1</span>.4M  main_const
<span class="token number">1</span>.8M  main_var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到改成常量之后，体积减小了 0.4 M。</p><p>查看编译优化决策：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go build <span class="token parameter variable">-gcflags</span> <span class="token string">&quot;-m&quot;</span> main.go
./main.go:5:6: can inline max
./main.go:15:8: inlining call to max
./main.go:16:14: inlining call to fmt.Println
./main.go:16:14: <span class="token punctuation">..</span>. argument does not escape
./main.go:16:15: a escapes to heap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到<code>max</code>函数使用内联编译，即在调用处展开：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> result <span class="token builtin">int</span>
	<span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token punctuation">{</span>
		result <span class="token operator">=</span> a
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		result <span class="token operator">=</span> b
    <span class="token punctuation">}</span>
	<span class="token keyword">if</span> result <span class="token operator">==</span> a <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若此时<code>a, b </code>为常量，则在编译期即可计算：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> result <span class="token builtin">int</span>
	<span class="token keyword">if</span> <span class="token number">10</span> <span class="token operator">&gt;</span> <span class="token number">20</span> <span class="token punctuation">{</span>
		result <span class="token operator">=</span> <span class="token number">10</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		result <span class="token operator">=</span> <span class="token number">20</span>
    <span class="token punctuation">}</span>
	<span class="token keyword">if</span> result <span class="token operator">==</span> <span class="token number">10</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 10 &gt; 20 恒为 false</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token number">20</span> <span class="token operator">==</span> <span class="token number">10</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 20 == 10 恒为 false</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，若全局变量<code>a,b</code>不是常量而是变量，编译器无法得知变量的值是否能够改变，无法消除 Dead Code。</p><h3 id="_1-2-可推断的局部变量" tabindex="-1"><a class="header-anchor" href="#_1-2-可推断的局部变量" aria-hidden="true">#</a> 1.2 可推断的局部变量</h3><p>若变量的值可以推断时，也会触发编译器优化：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span>
	<span class="token keyword">if</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">==</span> a <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-lh</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;main_&quot;</span>                                    
 <span class="token number">1</span>.4M  main_const
 <span class="token number">1</span>.4M  main_locvar_infer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出触发了Dead code 消除。</p><p>若将局部变量放入并发函数中：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		b<span class="token punctuation">,</span> a <span class="token operator">=</span> a<span class="token punctuation">,</span> b
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">==</span> a <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-lh</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;main_&quot;</span>                                    
<span class="token number">1</span>.4M main_const
<span class="token number">1</span>.8M main_locvar_goroutine
<span class="token number">1</span>.4M main_locvar_infer
<span class="token number">1</span>.8M main_var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时无法推断出变量的值了。</p><h2 id="_2-调试-debug-模式" tabindex="-1"><a class="header-anchor" href="#_2-调试-debug-模式" aria-hidden="true">#</a> 2. 调试(Debug)模式</h2><p>在源代码中，定义全局常量 debug，值设置为 <code>false</code>，在需要增加调试代码的地方，使用条件语句 <code>if debug</code> 包裹，例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> debug <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> debug <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;debug mode is enabled&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是正常编译，常量 debug 始终等于 <code>false</code>，调试语句在编译过程中会被消除，不会影响最终的二进制大小，也不会对运行效率产生任何影响。</p><p>在进行单元测试或者是简单的集成测试时，希望能够执行一些额外的操作，例如打印日志，或者是修改变量的值。提交代码时，再将 debug 修改为 false，开发过程中增加的额外的调试代码在编译时会被消除，不会对正式版本产生任何的影响。</p><p>Golang 的标准库中有不少使用这种模式的代码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go/src <span class="token punctuation">[</span> <span class="token function">grep</span> <span class="token parameter variable">-nr</span> <span class="token string">&quot;const debug = false&quot;</span>                                                                                                                                                              <span class="token punctuation">]</span> <span class="token number">8</span>:31 下午
cmd/compile/internal/syntax/parser.go:15:const debug <span class="token operator">=</span> <span class="token boolean">false</span>
cmd/compile/internal/types2/initorder.go:25:    const debug <span class="token operator">=</span> <span class="token boolean">false</span>
cmd/compile/internal/types2/check.go:22:const debug <span class="token operator">=</span> <span class="token boolean">false</span> // leave on during development
cmd/fix/main.go:47:const debug <span class="token operator">=</span> <span class="token boolean">false</span> // display incorrectly reformatted <span class="token builtin class-name">source</span> and <span class="token builtin class-name">exit</span>
cmd/vendor/golang.org/x/tools/go/analysis/passes/cgocall/cgocall.go:24:const debug <span class="token operator">=</span> <span class="token boolean">false</span>
cmd/vendor/golang.org/x/tools/go/analysis/passes/lostcancel/lostcancel.go:35:const debug <span class="token operator">=</span> <span class="token boolean">false</span>
cmd/vendor/golang.org/x/tools/internal/typeparams/normalize.go:17:const debug <span class="token operator">=</span> <span class="token boolean">false</span>
cmd/vendor/golang.org/x/tools/internal/facts/facts.go:53:const debug <span class="token operator">=</span> <span class="token boolean">false</span>
cmd/vendor/golang.org/x/mod/modfile/read.go:673:        const debug <span class="token operator">=</span> <span class="token boolean">false</span>
net/http/transport_test.go:2250:        const debug <span class="token operator">=</span> <span class="token boolean">false</span>
go/internal/gcimporter/gcimporter.go:26:const debug <span class="token operator">=</span> <span class="token boolean">false</span>
go/types/initorder.go:25:       const debug <span class="token operator">=</span> <span class="token boolean">false</span>
go/types/check.go:23:const debug <span class="token operator">=</span> <span class="token boolean">false</span> // leave on during development
internal/zstd/block.go:12:const debug <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-条件编译" tabindex="-1"><a class="header-anchor" href="#_2-1-条件编译" aria-hidden="true">#</a> 2.1 条件编译</h3><p>使用<code>build tags</code>可以实现条件编译，此时无需修改代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// debug.go， 使用 debug</span>

<span class="token comment">// +build debug</span>

<span class="token keyword">package</span> main

<span class="token keyword">const</span> debug <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// release.go 不启用 debug</span>

<span class="token comment">// +build !debug</span>

<span class="token keyword">package</span> main

<span class="token keyword">const</span> debug <span class="token operator">=</span> <span class="token boolean">false</span>


<span class="token comment">// main.go </span>
<span class="token keyword">package</span> main 

<span class="token keyword">import</span> <span class="token string">&quot;log&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> debug <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;debug mode is enabled&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go build <span class="token parameter variable">-tags</span> debug <span class="token parameter variable">-o</span> ./main_debug 
$ go build <span class="token parameter variable">-o</span> ./main_no_debug
$ ./main_no_debug  
$ ./main_debug
debug mode is enabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（备注：<code>// +build</code>在<code>v1.18</code>后建议使用<code>//go:build</code>，两种方式都要留出一个空白行）</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,41),d={href:"https://en.wikipedia.org/wiki/Dead_code_elimination",target:"_blank",rel:"noopener noreferrer"},r={href:"https://geektutu.com/post/hpg-dead-code-elimination.html",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=l("ExternalLinkIcon");return o(),p("div",null,[u,n("ol",null,[n("li",null,[n("a",d,[a("Dead code elimination - wikipedia"),e(s)])]),n("li",null,[n("a",r,[a("https://geektutu.com/post/hpg-dead-code-elimination.html"),e(s)])])])])}const g=t(c,[["render",k],["__file","04.3.deadcode.html.vue"]]);export{g as default};
