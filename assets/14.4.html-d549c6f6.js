import{_ as n,Z as s,$ as a,a3 as t}from"./framework-09afcf0b.js";const e={},p=t(`<h1 id="_14-4-select" tabindex="-1"><a class="header-anchor" href="#_14-4-select" aria-hidden="true">#</a> 14.4 select</h1><p><code>select</code>：选择处理列出的多个通道情况中的一个</p><ul><li>若都被阻塞，则会等到其中一个可以处理</li><li>若有多个可以处理，随机选择一个</li><li>若没有通道可操作并且存在<code>default</code>，则执行<code>default</code></li></ul><p>在case中执行<code>return</code>或<code>break</code>则会退出select</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">select</span> <span class="token punctuation">{</span>
<span class="token keyword">case</span> u <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch1<span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
<span class="token keyword">case</span> v <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch2<span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
<span class="token keyword">default</span><span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="path/14_4_select.go">14_4_select.go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> chapter_14

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">mainSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">pump3</span><span class="token punctuation">(</span>ch1<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">pump4</span><span class="token punctuation">(</span>ch2<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">suck3</span><span class="token punctuation">(</span>ch1<span class="token punctuation">,</span> ch2<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">500</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">pump3</span><span class="token punctuation">(</span>out <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		out <span class="token operator">&lt;-</span> i <span class="token operator">+</span> <span class="token number">5</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">pump4</span><span class="token punctuation">(</span>out <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		out <span class="token operator">&lt;-</span> i <span class="token operator">*</span> <span class="token number">2</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">suck3</span><span class="token punctuation">(</span>in1<span class="token punctuation">,</span> in2 <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> u <span class="token operator">:=</span> <span class="token operator">&lt;-</span>in1<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Receive from ch-1: %d\\n&quot;</span><span class="token punctuation">,</span> u<span class="token punctuation">)</span>
		<span class="token keyword">case</span> v <span class="token operator">:=</span> <span class="token operator">&lt;-</span>in2<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Receive from ch-2: %d\\n&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","14.4.html.vue"]]);export{k as default};
