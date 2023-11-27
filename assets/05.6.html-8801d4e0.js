import{_ as n,Z as s,$ as a,a4 as t}from"./framework-d03928c9.js";const e={},p=t(`<h1 id="_5-6-标签与-goto" tabindex="-1"><a class="header-anchor" href="#_5-6-标签与-goto" aria-hidden="true">#</a> 5.6 标签与 goto</h1><p><strong>特别注意</strong> 使用标签和 <code>goto</code> 语句是不被鼓励的：它们会很快导致非常糟糕的程序设计，而且总有更加可读的替代方案来实现相同的需求。</p><p><code>for</code>、<code>switch</code> 或 <code>select</code> 语句都可以配合标签 (label) 形式的标识符使用，即某一行第一个以冒号 (<code>:</code>) 结尾的单词（gofmt 会将后续代码自动移至下一行）。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">labelInFor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
LABEL1<span class="token punctuation">:</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> j <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span> LABEL1
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;i is: %d, and j is: %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>i is<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> and j is<span class="token punctuation">:</span> <span class="token number">0</span>
i is<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> and j is<span class="token punctuation">:</span> <span class="token number">1</span>
i is<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> and j is<span class="token punctuation">:</span> <span class="token number">0</span>
i is<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> and j is<span class="token punctuation">:</span> <span class="token number">1</span>
i is<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> and j is<span class="token punctuation">:</span> <span class="token number">0</span>
i is<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> and j is<span class="token punctuation">:</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>goto</code> 模拟循环</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	i<span class="token operator">:=</span><span class="token number">0</span>
	HERE<span class="token punctuation">:</span>
		<span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		i<span class="token operator">++</span>
		<span class="token keyword">if</span> i<span class="token operator">==</span><span class="token number">5</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">goto</span> HERE
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","05.6.html.vue"]]);export{d as default};
