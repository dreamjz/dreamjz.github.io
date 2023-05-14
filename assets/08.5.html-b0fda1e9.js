import{_ as n,Z as s,$ as a,a3 as e}from"./framework-09afcf0b.js";const i={},t=e(`<h1 id="_8-5-map-的排序" tabindex="-1"><a class="header-anchor" href="#_8-5-map-的排序" aria-hidden="true">#</a> 8.5 map 的排序</h1><p>map 是<strong>无序</strong>的。</p><p>若需按顺序访问可以：</p><ul><li>将key进行排序</li><li>按照排序后的key获取val</li></ul><p>需要有序列表的形式，可以使用结构体切片：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> s <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    key <span class="token builtin">string</span>
    val <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> ss <span class="token punctuation">[</span><span class="token punctuation">]</span>s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function c(o,p){return s(),a("div",null,l)}const r=n(i,[["render",c],["__file","08.5.html.vue"]]);export{r as default};
