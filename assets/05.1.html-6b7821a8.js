import{_ as n,Z as s,$ as a,a4 as e}from"./framework-d03928c9.js";const i={},o=e(`<h1 id="_5-1-if-else-结构" tabindex="-1"><a class="header-anchor" href="#_5-1-if-else-结构" aria-hidden="true">#</a> 5.1 if-else 结构</h1><p><code>if</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> condition <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if-else</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> condition <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>else if</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> condition <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> condition <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>条件语句中可以包含初始化语句</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> initialization<span class="token punctuation">;</span> condition <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> n <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述<code>n</code> 的作用域仅在<code>if</code> 代码块中。</p>`,11),c=[o];function l(t,d){return s(),a("div",null,c)}const u=n(i,[["render",l],["__file","05.1.html.vue"]]);export{u as default};
