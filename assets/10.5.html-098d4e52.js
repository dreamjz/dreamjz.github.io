import{_ as n,Z as s,$ as a,a4 as e}from"./framework-d03928c9.js";const i={},t=e(`<h1 id="_10-5-匿名字段和内嵌结构体" tabindex="-1"><a class="header-anchor" href="#_10-5-匿名字段和内嵌结构体" aria-hidden="true">#</a> 10.5 匿名字段和内嵌结构体</h1><h2 id="_10-5-1-定义" tabindex="-1"><a class="header-anchor" href="#_10-5-1-定义" aria-hidden="true">#</a> 10.5.1 定义</h2><ul><li><strong>匿名字段</strong>：只有类型的字段，字段名就是类型名</li><li><strong>内嵌结构体</strong>：匿名字段类型是结构体</li></ul><h2 id="_10-5-2-内嵌结构体" tabindex="-1"><a class="header-anchor" href="#_10-5-2-内嵌结构体" aria-hidden="true">#</a> 10.5.2 内嵌结构体</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> A <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ax<span class="token punctuation">,</span> ay <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> B <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    A
    bx<span class="token punctuation">,</span> by <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以直接访问内嵌结构体字段</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>b <span class="token operator">:=</span> B<span class="token punctuation">{</span><span class="token punctuation">}</span>
b<span class="token punctuation">.</span>ax <span class="token operator">=</span> <span class="token number">1</span>
b<span class="token punctuation">.</span>ay <span class="token operator">=</span> <span class="token number">2</span>
b<span class="token punctuation">.</span>bx <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-5-3-命名冲突" tabindex="-1"><a class="header-anchor" href="#_10-5-3-命名冲突" aria-hidden="true">#</a> 10.5.3 命名冲突</h2><p>当两个字段拥有相同的名字：</p><ul><li>外层名字覆盖内层</li><li>同一层出现，则需指明</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> A <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    a <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> B <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">,</span> b <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> C <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    A
    B
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>c<span class="token punctuation">.</span>a <span class="token comment">// 错误，存在二义性</span>
c<span class="token punctuation">.</span>A<span class="token punctuation">.</span>a
c<span class="token punctuation">.</span>B<span class="token punctuation">.</span>a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[t];function c(p,o){return s(),a("div",null,l)}const u=n(i,[["render",c],["__file","10.5.html.vue"]]);export{u as default};
