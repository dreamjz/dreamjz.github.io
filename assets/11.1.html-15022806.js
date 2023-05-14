import{_ as n,Z as s,$ as a,a3 as e}from"./framework-09afcf0b.js";const t={},p=e(`<h1 id="_11-1-接口" tabindex="-1"><a class="header-anchor" href="#_11-1-接口" aria-hidden="true">#</a> 11.1 接口</h1><p>接口定义一组方法，方法不含实现代码。</p><p>接口中不能有变量。</p><p>定义接口：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Namer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Method1</span><span class="token punctuation">(</span>param_list<span class="token punctuation">)</span> return_type
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般只有一个方法的接口以<code>er</code>结尾(<code>Printer</code>、<code>Reader</code>、<code>Writer</code>、<code>Logger</code>、<code>Converter</code> )，<code>er</code>不适合适时用<code>able</code>结尾,<code>I</code>开头等。</p><p>接口默认零值为<code>nil</code>:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> ai Namer <span class="token comment">// ai: nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接口是一个多字(multiword)结构:</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20230504234830250.png" alt="image-20230504234830250" tabindex="0" loading="lazy"><figcaption>image-20230504234830250</figcaption></figure><p>method table ptr: 方法指针表，根据运行时反射构建。</p><p>当实现 <code>Namer</code> 接口类型变量赋值给 <code>ai(receiver)</code> 时，方法指针表就指向当前方法实现。</p><p>若另一个实现了<code>Namer</code>接口的变量赋值给<code>ai</code>时， <code>receiver</code> 值和方法表指针也会改变。</p><p><strong>实现接口</strong>：</p><ul><li>无需显式声明，接口被隐式实现，多个类型可以实现同一个接口。</li><li>实现接口的类型，除了接口方法外，可以有其他方法</li><li>一个类型可以实现多个接口</li><li>接口是动态类型</li></ul><p><a href="path/11_1_interfaces.go">11_1_interfaces.go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Shaper <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float32</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Square <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	side <span class="token builtin">float32</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>sq <span class="token operator">*</span>Square<span class="token punctuation">)</span> <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float32</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> sq<span class="token punctuation">.</span>side <span class="token operator">*</span> sq<span class="token punctuation">.</span>side
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Rectangle <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	length<span class="token punctuation">,</span> width <span class="token builtin">float32</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Rectangle<span class="token punctuation">)</span> <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float32</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> r<span class="token punctuation">.</span>width <span class="token operator">*</span> r<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">itf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> <span class="token operator">&amp;</span>Rectangle<span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
	s <span class="token operator">:=</span> <span class="token operator">&amp;</span>Square<span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span>

	shapes <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Shaper<span class="token punctuation">{</span>r<span class="token punctuation">,</span> s<span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> shapes <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shapes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>15
25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","11.1.html.vue"]]);export{d as default};
