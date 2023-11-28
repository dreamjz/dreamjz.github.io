import{_ as n,Z as s,$ as a,a3 as t}from"./framework-dee406ed.js";const e={},c=t(`<h1 id="_10-3-使用自定义包中的结构体" tabindex="-1"><a class="header-anchor" href="#_10-3-使用自定义包中的结构体" aria-hidden="true">#</a> 10.3 使用自定义包中的结构体</h1><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> structPack

<span class="token keyword">type</span> ExpStruct <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Mi1 <span class="token builtin">int</span>
    Mf1 <span class="token builtin">float32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;./struct_pack/structPack&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    struct1 <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>structPack<span class="token punctuation">.</span>ExpStruct<span class="token punctuation">)</span>
    struct1<span class="token punctuation">.</span>Mi1 <span class="token operator">=</span> <span class="token number">10</span>
    struct1<span class="token punctuation">.</span>Mf1 <span class="token operator">=</span> <span class="token number">16.</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Mi1 = %d\\n&quot;</span><span class="token punctuation">,</span> struct1<span class="token punctuation">.</span>Mi1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Mf1 = %f\\n&quot;</span><span class="token punctuation">,</span> struct1<span class="token punctuation">.</span>Mf1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[c];function p(o,l){return s(),a("div",null,i)}const r=n(e,[["render",p],["__file","10.3.html.vue"]]);export{r as default};
