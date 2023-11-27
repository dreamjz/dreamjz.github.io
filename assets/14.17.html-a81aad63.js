import{_ as n,Z as s,$ as a,a4 as t}from"./framework-d03928c9.js";const p={},e=t(`<h1 id="_14-17-通过通道并发访问对象" tabindex="-1"><a class="header-anchor" href="#_14-17-通过通道并发访问对象" aria-hidden="true">#</a> 14.17 通过通道并发访问对象</h1><p>为了保护对象被并发访问修改，我们可以使用协程在后台顺序执行匿名函数来替代使用同步互斥锁。</p><p>在下面的程序中我们有一个类型 <code>Person</code> 中包含一个字段 <code>chF</code> ，这是一个用于存放匿名函数的通道。</p><p>这个结构在构造函数 <code>NewPerson()</code> 中初始化的同时会启动一个后台协程 <code>backend()</code>。<code>backend()</code> 方法会在一个无限循环中执行 <code>chF</code> 中放置的所有函数，有效地将它们序列化从而提供了安全的并发访问。更改和读取 <code>salary</code> 的方法会通过将一个匿名函数写入 <code>chF</code> 通道中，然后让 <code>backend()</code> 按顺序执行以达到其目的。需注意的是 <code>Salary()</code> 方法创建的闭包函数是如何将 <code>fChan</code> 通道包含在其中的。</p><p>这是一个简化的例子，它不应该被用在这种案例下。但是它却向我们展示了在更复杂的场景中该如何解决这种问题。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name   <span class="token builtin">string</span>
	salary <span class="token builtin">float64</span>
	chF    <span class="token keyword">chan</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> salary <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token operator">*</span>Person <span class="token punctuation">{</span>
	p <span class="token operator">:=</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>name<span class="token punctuation">,</span> salary<span class="token punctuation">,</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
	<span class="token keyword">go</span> p<span class="token punctuation">.</span><span class="token function">backend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> p
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">backend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> f <span class="token operator">:=</span> <span class="token keyword">range</span> p<span class="token punctuation">.</span>chF <span class="token punctuation">{</span>
		<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Set salary.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">SetSalary</span><span class="token punctuation">(</span>sal <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>chF <span class="token operator">&lt;-</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> p<span class="token punctuation">.</span>salary <span class="token operator">=</span> sal <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Retrieve salary.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">Salary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	fChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">float64</span><span class="token punctuation">)</span>
	p<span class="token punctuation">.</span>chF <span class="token operator">&lt;-</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> fChan <span class="token operator">&lt;-</span> p<span class="token punctuation">.</span>salary <span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">&lt;-</span>fChan
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">&quot;Person - name is: &quot;</span> <span class="token operator">+</span> p<span class="token punctuation">.</span>Name <span class="token operator">+</span> <span class="token string">&quot; - salary is: &quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">FormatFloat</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">Salary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token char">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	bs <span class="token operator">:=</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">&quot;Smith Bill&quot;</span><span class="token punctuation">,</span> <span class="token number">2500.5</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>bs<span class="token punctuation">)</span>
	bs<span class="token punctuation">.</span><span class="token function">SetSalary</span><span class="token punctuation">(</span><span class="token number">4000.25</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Salary changed:&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>bs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person - name is: Smith Bill - salary is: 2500.50
Salary changed:
Person - name is: Smith Bill - salary is: 4000.25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","14.17.html.vue"]]);export{k as default};
