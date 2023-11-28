import{_ as n,Z as a,$ as s,a3 as e}from"./framework-dee406ed.js";const o={},i=e(`<h1 id="_5-4-for-结构" tabindex="-1"><a class="header-anchor" href="#_5-4-for-结构" aria-hidden="true">#</a> 5.4 for 结构</h1><p>Go 中的循环只有 <code>for</code>。</p><h2 id="_5-4-1-基于计数器的迭代" tabindex="-1"><a class="header-anchor" href="#_5-4-1-基于计数器的迭代" aria-hidden="true">#</a> 5.4.1 基于计数器的迭代</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> 初始化语句；条件语句；修饰语句 <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>i := 0</code>: 循环开始前执行，且整个循环中只会执行这一次</li><li><code>i &lt; 5</code>： 开始循环前判断，若为 false 则退出循环</li><li><code>i++</code>：循环计数器</li></ul><p>可以使用多个计数器：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> N<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token punctuation">,</span> j <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-4-2-基于条件判断的迭代" tabindex="-1"><a class="header-anchor" href="#_5-4-2-基于条件判断的迭代" aria-hidden="true">#</a> 5.4.2 基于条件判断的迭代</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> 条件语句 <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-4-3-无限循环" tabindex="-1"><a class="header-anchor" href="#_5-4-3-无限循环" aria-hidden="true">#</a> 5.4.3 无限循环</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-4-4-for-range-结构" tabindex="-1"><a class="header-anchor" href="#_5-4-4-for-range-结构" aria-hidden="true">#</a> 5.4.4 for-range 结构</h2><p>用于迭代集合</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> collection <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>index</code>: 索引</li><li><code>value</code>: 索引值的拷贝，对其修改不会影响原值。 但是若其类型为指针，则修改会影响原值。</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> i<span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[i];function c(t,p){return a(),s("div",null,l)}const r=n(o,[["render",c],["__file","05.4.html.vue"]]);export{r as default};