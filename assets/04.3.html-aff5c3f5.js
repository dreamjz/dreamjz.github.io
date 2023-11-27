import{_ as n,Z as s,$ as a,a4 as e}from"./framework-d03928c9.js";const t={},o=e(`<h1 id="_4-3-常量" tabindex="-1"><a class="header-anchor" href="#_4-3-常量" aria-hidden="true">#</a> 4.3 常量</h1><ul><li><p>使用 <code>const</code> 定义</p></li><li><p>存储不会改变的数据</p></li><li><p>数据类型只能为：布尔型、数字型、字符串</p></li><li><p>格式：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> indetifier <span class="token punctuation">[</span><span class="token keyword">type</span><span class="token punctuation">]</span> <span class="token operator">=</span> value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>显式类型定义：<code>const str string = &quot;A&quot;</code></li><li>隐式类型定义：<code>const Pi = 3.14</code></li></ul></li><li><p>常量值必须是<strong>编译期</strong>可确定的</p></li></ul><h2 id="_4-3-1-赋值" tabindex="-1"><a class="header-anchor" href="#_4-3-1-赋值" aria-hidden="true">#</a> 4.3.1 赋值</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
	q<span class="token punctuation">,</span> w<span class="token punctuation">,</span> e <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span>
    z <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">)</span>
<span class="token comment">// \\ 用于连接</span>
<span class="token keyword">const</span> Ln2 <span class="token operator">=</span> <span class="token number">0.693147180559945309417232121458</span>\\
			<span class="token number">176568075500134360255254120680009</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-3-2-枚举" tabindex="-1"><a class="header-anchor" href="#_4-3-2-枚举" aria-hidden="true">#</a> 4.3.2 枚举</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	Unkown <span class="token operator">=</span> <span class="token number">0</span>
    Female <span class="token operator">=</span> <span class="token number">1</span>
    Male <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iota" tabindex="-1"><a class="header-anchor" href="#iota" aria-hidden="true">#</a> <strong>iota</strong></h3><p><code>iota</code> 默认为 0，在新的一行被使用时自动加 1，没有赋值的常量使用上一行的表达式。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 赋值一个常量时，之后没赋值的常量都会应用上一行的赋值表达式</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
	a <span class="token operator">=</span> <span class="token boolean">iota</span>  <span class="token comment">// a = 0</span>
	b         <span class="token comment">// b = 1</span>
	c         <span class="token comment">// c = 2</span>
	d <span class="token operator">=</span> <span class="token number">5</span>     <span class="token comment">// d = 5   </span>
	e         <span class="token comment">// e = 5</span>
<span class="token punctuation">)</span>

<span class="token comment">// 赋值两个常量，iota 只会增长一次，而不会因为使用了两次就增长两次</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
	Apple<span class="token punctuation">,</span> Banana <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token comment">// Apple=1 Banana=2</span>
	Cherimoya<span class="token punctuation">,</span> Durian                  <span class="token comment">// Cherimoya=2 Durian=3</span>
	Elderberry<span class="token punctuation">,</span> Fig                    <span class="token comment">// Elderberry=3, Fig=4</span>

<span class="token punctuation">)</span>

<span class="token comment">// 使用 iota 结合 位运算 表示资源状态的使用案例</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
	Open <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token boolean">iota</span>  <span class="token comment">// 0001</span>
	Close             <span class="token comment">// 0010</span>
	Pending           <span class="token comment">// 0100</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	<span class="token boolean">_</span>           <span class="token operator">=</span> <span class="token boolean">iota</span>             <span class="token comment">// 使用 _ 忽略不需要的 iota</span>
	KB <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> <span class="token boolean">iota</span><span class="token punctuation">)</span>          <span class="token comment">// 1 &lt;&lt; (10*1)</span>
	MB                             <span class="token comment">// 1 &lt;&lt; (10*2)</span>
	GB                             <span class="token comment">// 1 &lt;&lt; (10*3)</span>
	TB                             <span class="token comment">// 1 &lt;&lt; (10*4)</span>
	PB                             <span class="token comment">// 1 &lt;&lt; (10*5)</span>
	EB                             <span class="token comment">// 1 &lt;&lt; (10*6)</span>
	ZB                             <span class="token comment">// 1 &lt;&lt; (10*7)</span>
	YB                             <span class="token comment">// 1 &lt;&lt; (10*8)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[o];function p(c,i){return s(),a("div",null,l)}const r=n(t,[["render",p],["__file","04.3.html.vue"]]);export{r as default};
