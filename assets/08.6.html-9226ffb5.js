import{_ as n,Z as s,$ as a,a3 as t}from"./framework-09afcf0b.js";const p={},e=t(`<h1 id="_8-6-k-v-对调" tabindex="-1"><a class="header-anchor" href="#_8-6-k-v-对调" aria-hidden="true">#</a> 8.6 k，v 对调</h1><p>若map的val唯一，且k，v类型相同，可以进行简单对调</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
m1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
    m1<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> k
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","08.6.html.vue"]]);export{k as default};