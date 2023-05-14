import{_ as n,Z as s,$ as a,a3 as e}from"./framework-09afcf0b.js";const t={},i=e(`<h1 id="_11-2-接口嵌套接口" tabindex="-1"><a class="header-anchor" href="#_11-2-接口嵌套接口" aria-hidden="true">#</a> 11.2 接口嵌套接口</h1><p>一个接口可以包含一个或多个其他的接口，这相当于直接将这些内嵌接口的方法列举在外层接口中一样。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> ReadWrite <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Read</span><span class="token punctuation">(</span>b Buffer<span class="token punctuation">)</span> <span class="token builtin">bool</span>
    <span class="token function">Write</span><span class="token punctuation">(</span>b Buffer<span class="token punctuation">)</span> <span class="token builtin">bool</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Lock <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> File <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    ReadWrite
    Lock
    <span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[i];function o(p,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","11.2.html.vue"]]);export{d as default};
