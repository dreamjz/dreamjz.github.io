import{_ as n,Z as s,$ as a,a3 as t}from"./framework-dee406ed.js";const e={},p=t(`<h1 id="_10-4-带标签的结构体" tabindex="-1"><a class="header-anchor" href="#_10-4-带标签的结构体" aria-hidden="true">#</a> 10.4 带标签的结构体</h1><p><strong>标签(tag)</strong>： 附属于字段的字符串，只能通过<code>reflect</code>包访问。</p><p>​ <a href="path/10_4_struct_tag.go">10_4_struct_tag.go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> TagType <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	f1 <span class="token builtin">int</span>  <span class="token string">&quot;Field01&quot;</span>
	f2 <span class="token builtin">bool</span> <span class="token string">&quot;Field02&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">structag</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	tt <span class="token operator">:=</span> TagType<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token function">refTag</span><span class="token punctuation">(</span>tt<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token function">refTag</span><span class="token punctuation">(</span>tt<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">refTag</span><span class="token punctuation">(</span>tt TagType<span class="token punctuation">,</span> i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ttType <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>tt<span class="token punctuation">)</span>
	f <span class="token operator">:=</span> ttType<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>Tag<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Field01
Field02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","10.4.html.vue"]]);export{d as default};
