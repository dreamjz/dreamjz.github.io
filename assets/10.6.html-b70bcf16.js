import{_ as n,Z as s,$ as a,a3 as t}from"./framework-09afcf0b.js";const p={},e=t(`<h1 id="_10-6-方法" tabindex="-1"><a class="header-anchor" href="#_10-6-方法" aria-hidden="true">#</a> 10.6 方法</h1><h2 id="_10-6-1-定义" tabindex="-1"><a class="header-anchor" href="#_10-6-1-定义" aria-hidden="true">#</a> 10.6.1 定义</h2><p><strong>方法</strong>：作用在**接受者(receiver)**上的函数，接收者是某种类型的变量。</p><p><strong>接收者类型</strong>：可以是任何类型，除了</p><ul><li>接口类型</li><li>指针类型（可以是其他类型的指针）</li></ul><p><strong>方法集(method set)</strong>：类型 <code>T</code>/ <code>*T</code> 上所有方法的合集</p><p><strong>定义</strong>：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>recv receiver_type<span class="token punctuation">)</span> <span class="token function">methodname</span><span class="token punctuation">(</span>parameter_list<span class="token punctuation">)</span> <span class="token punctuation">(</span>return_value_list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>recv</code>: recevier 的实例 <ul><li>若为指针，则会自动解引用</li><li>若方法中不需要使用，可用空白符<code>_</code> 替换</li></ul></li></ul><p><strong>类型</strong>和其<strong>方法</strong>必须在同一个包中。</p><h2 id="_10-6-2-函数和方法的区别" tabindex="-1"><a class="header-anchor" href="#_10-6-2-函数和方法的区别" aria-hidden="true">#</a> 10.6.2 函数和方法的区别</h2><p>函数将变量作为参数：<code>Function(recv)</code> 方法在变量上调用：<code>recv.Method</code></p><p>方法和接收者类型必须在同一个包中定义。</p><h2 id="_10-6-3-指针或值作为接收者" tabindex="-1"><a class="header-anchor" href="#_10-6-3-指针或值作为接收者" aria-hidden="true">#</a> 10.6.3 指针或值作为接收者</h2><ul><li><strong>值</strong>： 作为接收者传递给方法，会进行值的拷贝。 方法中无法对接受者进行修改。</li><li><strong>指针</strong>：作为接收者，方法可以对接受者进行修改</li></ul><p><strong>指针方法和值方法都可以在指针或非指针上调用</strong>。</p><p><a href="path/10_6_methods.go">10_6_methods.go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> A <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	n <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>A<span class="token punctuation">)</span> <span class="token function">set</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a<span class="token punctuation">.</span>n <span class="token operator">=</span> n
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a A<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">methods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 值</span>
	a1 <span class="token operator">:=</span> A<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a1<span class="token punctuation">)</span>
	a1<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a1<span class="token punctuation">)</span>

	<span class="token comment">// 指针</span>
	a2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>A<span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span>
	a2<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">10</span>
<span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-6-4-方法和未导出字段" tabindex="-1"><a class="header-anchor" href="#_10-6-4-方法和未导出字段" aria-hidden="true">#</a> 10.6.4 方法和未导出字段</h2><p>​ 结构体中的未导出字段是无法直接访问的，可以通过<code>setter</code>和<code>getter</code>方法来访问。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> A <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    a <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>A<span class="token punctuation">)</span> <span class="token function">SetA</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">.</span>a <span class="token operator">=</span> n
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>A<span class="token punctuation">)</span> <span class="token function">GetA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span>a
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-6-5-内嵌类型的方法和继承" tabindex="-1"><a class="header-anchor" href="#_10-6-5-内嵌类型的方法和继承" aria-hidden="true">#</a> 10.6.5 内嵌类型的方法和继承</h2><p>当一个匿名类型被内嵌在结构体中时，匿名类型的可见方法也同样被内嵌，这在效果上等同于外层类型 <strong>继承</strong> 了这些方法：<strong>将父类型放在子类型中来实现亚型</strong>。</p><p><a href="path/10_6_method_h.go">10_6_method_h.go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Point <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	x<span class="token punctuation">,</span> y <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Point<span class="token punctuation">)</span> <span class="token function">Abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> math<span class="token punctuation">.</span><span class="token function">Sqrt</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>x<span class="token operator">*</span>p<span class="token punctuation">.</span>x <span class="token operator">+</span> p<span class="token punctuation">.</span>y<span class="token operator">*</span>p<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> NamedPoint <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Point
	name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> NamedPoint2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Point
	name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>np <span class="token operator">*</span>NamedPoint2<span class="token punctuation">)</span> <span class="token function">Abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> np<span class="token punctuation">.</span>Point<span class="token punctuation">.</span><span class="token function">Abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">mh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	n <span class="token operator">:=</span> <span class="token operator">&amp;</span>NamedPoint<span class="token punctuation">{</span>Point<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;Node&quot;</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span><span class="token function">Abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 5</span>

	n2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>NamedPoint2<span class="token punctuation">{</span>Point<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;Node2&quot;</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span><span class="token function">Abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 500</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>Point<span class="token punctuation">.</span><span class="token function">Abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>外层方法和内层同名，将会复写内层方法。</p><h2 id="_10-6-6-如何在类型中嵌入功能" tabindex="-1"><a class="header-anchor" href="#_10-6-6-如何在类型中嵌入功能" aria-hidden="true">#</a> 10.6.6 如何在类型中嵌入功能</h2><ul><li>聚合（组合）： 包含一个所需功能类型的<strong>具名</strong>字段</li><li>内嵌： 内嵌<strong>匿名</strong>所需功能类型</li></ul><h2 id="_10-6-7-多重继承" tabindex="-1"><a class="header-anchor" href="#_10-6-7-多重继承" aria-hidden="true">#</a> 10.6.7 多重继承</h2><p>通过在类型中嵌入所有必要的父类型，可以很简单的实现多重继承。</p>`,31),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","10.6.html.vue"]]);export{r as default};
