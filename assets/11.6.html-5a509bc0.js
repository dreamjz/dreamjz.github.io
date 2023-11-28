import{_ as n,Z as s,$ as a,a3 as e}from"./framework-dee406ed.js";const t={},p=e(`<h1 id="_11-6-使用方法集与接口" tabindex="-1"><a class="header-anchor" href="#_11-6-使用方法集与接口" aria-hidden="true">#</a> 11.6 使用方法集与接口</h1><p>在接口上调用方法时，必须有和方法定义时相同的接收者类型或者是可以根据具体类型 <code>P</code> 直接辨识的：</p><ul><li>指针方法可以通过指针调用</li><li>值方法可以通过值调用</li><li>接收者是值的方法可以通过指针调用，因为指针会首先被解引用</li><li>接收者是指针的方法不可以通过值调用，因为存储在接口中的值没有地址</li></ul><p>将一个值赋值给一个接口时，编译器会确保所有可能的接口方法都可以在此值上被调用，因此不正确的赋值在编译期就会失败。</p><p>Go 语言规范定义了<strong>接口方法集</strong>的调用规则：</p><ul><li>类型 <code>*T</code> 的可调用方法集包含接受者为 <code>*T</code> 或 <code>T</code> 的所有方法集</li><li>类型 <code>T</code> 的可调用方法集包含接受者为 <code>T</code> 的所有方法</li><li>类型 <code>T</code> 的可调用方法集<strong>不</strong>包含接受者为 <code>*T</code> 的方法</li></ul><p>因为接口变量中存储的值是<strong>不可寻址</strong>的，所以不能调用接收者为指针的方法。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Shaper2 <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float32</span>
	<span class="token function">Perimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float32</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Square2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	side <span class="token builtin">float32</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Square2<span class="token punctuation">)</span> <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float32</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> s<span class="token punctuation">.</span>side <span class="token operator">*</span> s<span class="token punctuation">.</span>side
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Square2<span class="token punctuation">)</span> <span class="token function">Perimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float32</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> s<span class="token punctuation">.</span>side <span class="token operator">*</span> <span class="token number">4</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">mthds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s1 <span class="token operator">:=</span> Square2<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>
	s2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Square2<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>

	<span class="token keyword">var</span> shape Shaper2
	<span class="token comment">// Cannot use &#39;s1&#39; (type Square2) as the type Shaper2</span>
	<span class="token comment">// Type does not implement &#39;Shaper2&#39; as the</span>
	<span class="token comment">// &#39;Area&#39; method has a pointer receiver</span>
	<span class="token comment">// shape = s1</span>
	shape <span class="token operator">=</span> s2
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","11.6.html.vue"]]);export{d as default};
