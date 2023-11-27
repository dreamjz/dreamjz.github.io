import{_ as n,Z as s,$ as a,a4 as t}from"./framework-d03928c9.js";const e={},p=t(`<h1 id="_14-12-链式协程" tabindex="-1"><a class="header-anchor" href="#_14-12-链式协程" aria-hidden="true">#</a> 14.12 链式协程</h1><p><a href="path/14_12_chaning,go">14_12_chaning,go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> chapter_14

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">const</span> N <span class="token operator">=</span> <span class="token number">100000</span>

<span class="token keyword">func</span> <span class="token function">mainChanning</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	leftmost <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> left<span class="token punctuation">,</span> right <span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> leftmost
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		left<span class="token punctuation">,</span> right <span class="token operator">=</span> right<span class="token punctuation">,</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">f</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	right <span class="token operator">&lt;-</span> <span class="token number">0</span>
	x <span class="token operator">:=</span> <span class="token operator">&lt;-</span>leftmost
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">// 100000</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">f</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	left <span class="token operator">&lt;-</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token operator">&lt;-</span>right
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>right &lt;-0</code>: 启动链式协程的计算。 因为无缓冲通道的阻塞，函数<code>f</code> 在最右侧的通道可用之前不会执行。 当最右侧通道（通道链尾）可用时，开始执行</li><li><code>x := &lt;-leftmost</code>: 等待协程链完成</li></ul>`,4),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","14.12.html.vue"]]);export{r as default};
