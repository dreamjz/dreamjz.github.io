import{_ as n,Z as s,$ as a,a4 as t}from"./framework-d03928c9.js";const e={},p=t(`<h1 id="_14-8-惰性生成器" tabindex="-1"><a class="header-anchor" href="#_14-8-惰性生成器" aria-hidden="true">#</a> 14.8 惰性生成器</h1><h2 id="_14-8-1-生成器" tabindex="-1"><a class="header-anchor" href="#_14-8-1-生成器" aria-hidden="true">#</a> 14.8.1 生成器</h2><p>指的是被调用时返回序列中的下一个值的函数：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>    <span class="token function">generateInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">0</span>
    <span class="token function">generateInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">1</span>
    <span class="token function">generateInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">2</span>
    <span class="token operator">...</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回下一个值而不是整个序列，被称为惰性求值：仅在需要的时候获取数据，同时保留相关变量资源。比如生成一个无限数量的整数序列，再进行调用会比较困难。</p><p><a href="path/14_8_lazy_evaluation.go">14_8_lazy_evaluation.go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> chapter_14

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">var</span> resume <span class="token keyword">chan</span> <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">mainLazyEvaluation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	resume <span class="token operator">=</span> <span class="token function">integers</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">generate1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">generate1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
 	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">generate1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">integers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	yield <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	count <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			yield <span class="token operator">&lt;-</span> count
			count<span class="token operator">++</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> yield
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">generate1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&lt;-</span>resume
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-8-2-惰性生成器工厂函数" tabindex="-1"><a class="header-anchor" href="#_14-8-2-惰性生成器工厂函数" aria-hidden="true">#</a> 14.8.2 惰性生成器工厂函数</h2><p>工厂函数以函数和初始状态作为参数，返回一个无参的、返回值为生成序列的函数。</p><p>传入的函数计算出下一个返回值和下一个状态参数。</p><p><a href="path/14_8_lazy_evaluator_factory.go">14_8_lazy_evaluator_factory.go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> chapter_14

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Any <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">type</span> EvalFunc <span class="token keyword">func</span><span class="token punctuation">(</span>Any<span class="token punctuation">)</span> <span class="token punctuation">(</span>Any<span class="token punctuation">,</span> Any<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">mainLazyEvaluatorFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	evenFunc <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>state Any<span class="token punctuation">)</span> <span class="token punctuation">(</span>Any<span class="token punctuation">,</span> Any<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		os <span class="token operator">:=</span> state<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
		ns <span class="token operator">:=</span> os <span class="token operator">+</span> <span class="token number">2</span>
		<span class="token keyword">return</span> os<span class="token punctuation">,</span> ns
	<span class="token punctuation">}</span>
	even <span class="token operator">:=</span> <span class="token function">BuildLazyIntEvaluator</span><span class="token punctuation">(</span>evenFunc<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%dth even number: %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token function">even</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BuidlLazyEvaluator</span><span class="token punctuation">(</span>evalFunc EvalFunc<span class="token punctuation">,</span> initState Any<span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Any <span class="token punctuation">{</span>
	retChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> Any<span class="token punctuation">)</span>
	loopFunc <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> actState Any <span class="token operator">=</span> initState
		<span class="token keyword">var</span> retVal Any
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			retVal<span class="token punctuation">,</span> actState <span class="token operator">=</span> <span class="token function">evalFunc</span><span class="token punctuation">(</span>actState<span class="token punctuation">)</span>
			retChan <span class="token operator">&lt;-</span> retVal
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	retFunc <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Any <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">&lt;-</span>retChan
	<span class="token punctuation">}</span>
	<span class="token keyword">go</span> <span class="token function">loopFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> retFunc
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BuildLazyIntEvaluator</span><span class="token punctuation">(</span>evalFunc EvalFunc<span class="token punctuation">,</span> initState Any<span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	ef <span class="token operator">:=</span> <span class="token function">BuidlLazyEvaluator</span><span class="token punctuation">(</span>evalFunc<span class="token punctuation">,</span> initState<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">ef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0th even number: 0
1th even number: 2
2th even number: 4
3th even number: 6
4th even number: 8
5th even number: 10
6th even number: 12
7th even number: 14
8th even number: 16
9th even number: 18
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-8-3-斐波那契生成器" tabindex="-1"><a class="header-anchor" href="#_14-8-3-斐波那契生成器" aria-hidden="true">#</a> 14.8.3 斐波那契生成器</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> chapter_14

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">mainFibEvaluator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fibFunc <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>state Any<span class="token punctuation">)</span> <span class="token punctuation">(</span>Any<span class="token punctuation">,</span> Any<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		os <span class="token operator">:=</span> state<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">uint64</span><span class="token punctuation">)</span>
		v1 <span class="token operator">:=</span> os<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
		v2 <span class="token operator">:=</span> os<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
		ns <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">uint64</span><span class="token punctuation">{</span>v2<span class="token punctuation">,</span> v1 <span class="token operator">+</span> v2<span class="token punctuation">}</span>
		<span class="token keyword">return</span> v1<span class="token punctuation">,</span> ns
	<span class="token punctuation">}</span>
	fib <span class="token operator">:=</span> <span class="token function">BuildLazyUint64Evaluator</span><span class="token punctuation">(</span>fibFunc<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">uint64</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%dth fib : %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BuildLazyUint64Evaluator</span><span class="token punctuation">(</span>evalFunc EvalFunc<span class="token punctuation">,</span> initState Any<span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">uint64</span> <span class="token punctuation">{</span>
	ef <span class="token operator">:=</span> <span class="token function">BuidlLazyEvaluator</span><span class="token punctuation">(</span>evalFunc<span class="token punctuation">,</span> initState<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">uint64</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">ef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">uint64</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0th fib : 0
1th fib : 1
2th fib : 1
3th fib : 2
4th fib : 3
5th fib : 5
6th fib : 8
7th fib : 13
8th fib : 21
9th fib : 34
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","14.8.html.vue"]]);export{r as default};
