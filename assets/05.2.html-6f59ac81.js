import{_ as n,Z as a,$ as s,a3 as e}from"./framework-dee406ed.js";const o={},t=e(`<h1 id="_5-2-测试多返回值函数的错误" tabindex="-1"><a class="header-anchor" href="#_5-2-测试多返回值函数的错误" aria-hidden="true">#</a> 5.2 测试多返回值函数的错误</h1><p>Go 函数通常通过返回两个返回值：</p><ul><li>返回值和 <code>error</code> 成功执行则<code>error</code>为<code>nil</code>， 否则就会包含相应的错误信息。</li><li>返回值和 <code>bool</code></li></ul><h2 id="处理模式" tabindex="-1"><a class="header-anchor" href="#处理模式" aria-hidden="true">#</a> 处理模式</h2><ul><li><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>val<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> val<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>comma, ok pattern</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> val<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,5),c=[t];function i(l,p){return a(),s("div",null,c)}const r=n(o,[["render",i],["__file","05.2.html.vue"]]);export{r as default};