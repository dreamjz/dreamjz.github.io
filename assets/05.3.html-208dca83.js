import{_ as n,Z as s,$ as a,a4 as e}from"./framework-d03928c9.js";const i={},c=e(`<h2 id="_5-3-switch-结构" tabindex="-1"><a class="header-anchor" href="#_5-3-switch-结构" aria-hidden="true">#</a> 5.3 switch 结构</h2><h2 id="_5-3-1-形式1" tabindex="-1"><a class="header-anchor" href="#_5-3-1-形式1" aria-hidden="true">#</a> 5.3.1 形式1</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">switch</span> var1 <span class="token punctuation">{</span>
<span class="token keyword">case</span> val1<span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
<span class="token keyword">case</span> val2<span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
<span class="token keyword">default</span><span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>switch var1</code>: 变量可以是任意类型</p></li><li><p><code>case</code>:</p><ul><li><p><code>val1</code>: 必须是和变量相同类型的值</p></li><li><p>当匹配到此 case 时，<strong>自动退出</strong>，不需要使用 <code>break</code></p></li><li><p><code>fallthrough</code>： 希望继续执行可添加 <code>fallthrough</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">switch</span> i <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">fallthrough</span>
<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>return</code>： 可以通过 <code>return</code> 来退出</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">switch</span> i <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> 
<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><code>default</code>: 当没有任何匹配时执行</p></li></ul><h2 id="_5-3-2-形式2" tabindex="-1"><a class="header-anchor" href="#_5-3-2-形式2" aria-hidden="true">#</a> 5.3.2 形式2</h2><p>switch 不提供被判断的值，而在 case 中测试不同条件</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">switch</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> condition1<span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">case</span> condition2<span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">switch</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> i <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">case</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-3-3-形式3" tabindex="-1"><a class="header-anchor" href="#_5-3-3-形式3" aria-hidden="true">#</a> 5.3.3 形式3</h2><p>switch 包含初始化语句：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">switch</span> initialization <span class="token punctuation">{</span>
    <span class="token keyword">case</span> val1<span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
	<span class="token keyword">case</span> val2<span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">switch</span> a<span class="token punctuation">,</span> b <span class="token operator">:=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr1<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> a <span class="token operator">&lt;</span> b<span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">case</span> a <span class="token operator">==</span> b<span class="token punctuation">:</span> 
    <span class="token comment">// ...</span>
    <span class="token keyword">case</span> a <span class="token operator">&gt;</span> b<span class="token punctuation">:</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[c];function t(o,p){return s(),a("div",null,l)}const u=n(i,[["render",t],["__file","05.3.html.vue"]]);export{u as default};
