import{_ as n,Z as s,$ as a,a3 as e}from"./framework-09afcf0b.js";const t={},o=e(`<h1 id="_4-9-指针" tabindex="-1"><a class="header-anchor" href="#_4-9-指针" aria-hidden="true">#</a> 4.9 指针</h1><p>程序在内存存储其值，每个内存块（或字）有一个地址，通常使用十六进制数表示</p><p>Golang的<strong>取址符</strong>为<code>&amp;</code>,在变量前使用就会返回响应变量的内存地址,</p><p>内存地址可以存储在名为指针的特殊数据类型中，指针变量的缩写通常为ptr。</p><p>下面的例子中intP是一个int型指针：<code>*int</code>，intP存储了i1的内存地址；它指向了i1的位置，引用了变量i1</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> intP <span class="token operator">*</span><span class="token builtin">int</span>
<span class="token keyword">var</span> i1 <span class="token operator">=</span> <span class="token number">5</span>
<span class="token comment">//intP指向i1</span>
intP <span class="token operator">=</span> <span class="token operator">&amp;</span>i1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>一个指针变量可以指向任何一个值的内存地址</strong>，指向的值的内存地址，在32位机器中占用4个字节，在64位机器中占用8个字节，并且与它所指向的值的大小无关。</p><p>当一个指针未被分配到任何变量时，其值为nil。</p><p>不能获取字面量或常量的地址，例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> i <span class="token operator">=</span> <span class="token number">5</span>
ptr <span class="token operator">:=</span> <span class="token operator">&amp;</span>i <span class="token comment">//error: cannot take the address of i</span>
ptr2 <span class="token operator">:=</span> <span class="token operator">&amp;</span><span class="token number">10</span> <span class="token comment">//error: cannot take the address of 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Go 中的<strong>指针运算</strong>是不合法的，如 <code>c = *p++</code> 。</p><h2 id="间接引用" tabindex="-1"><a class="header-anchor" href="#间接引用" aria-hidden="true">#</a> 间接引用</h2><p>可以在指针类型前使用符号<code>*</code>来获取指针所指向的内容，这里的<code> *</code> 号是一个类型更改器，使用指针来引用一个值被称为反引用（或者内容或者间接引用）。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>    s <span class="token operator">:=</span> <span class="token string">&quot;good bye&quot;</span>
	<span class="token keyword">var</span> ptrS <span class="token operator">*</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>s
	<span class="token operator">*</span>ptrS <span class="token operator">=</span> <span class="token string">&quot;ciao&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Here is the pointer ptrS :%p \\n&quot;</span><span class="token punctuation">,</span> ptrS<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Here is the string *ptrS : %s\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>ptrS<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Here is the string s : %s\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Here is the pointer ptrS :0xc00009e220 
Here is the string *ptrS : ciao
Here is the string s : ciao
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述例子中，<code>ptrS</code>是指向变量s的指针，在对<code>*ptrS</code>赋值后，s的值也发生了改变</p><p>内存示意图如下：</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20230503103828518.png" alt="image-20230503103828518" tabindex="0" loading="lazy"><figcaption>image-20230503103828518</figcaption></figure><p>不能获取字面量或常量的地址，例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> i <span class="token operator">=</span> <span class="token number">5</span>
ptr <span class="token operator">:=</span> <span class="token operator">&amp;</span>i <span class="token comment">//error: cannot take the address of i</span>
ptr2 <span class="token operator">:=</span> <span class="token operator">&amp;</span><span class="token number">10</span> <span class="token comment">//error: cannot take the address of 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对一个空指针的反向引用是不合法的，并且会使程序崩溃：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> p <span class="token operator">*</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
<span class="token comment">// in Windows: stops only with: &lt;exit code=&quot;-1073741819&quot; msg=&quot;process crashed&quot;/&gt;</span>
<span class="token comment">// runtime error: invalid memory address or nil pointer dereference</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>可以传递一个变量的引用（如函数的参数），这样不会传递变量的拷贝。指针传递是很廉价的，只占用 4 个或 8 个字节。当程序在工作中需要占用大量的内存，或很多变量，或者两者都有，使用指针会减少内存占用和提高效率。被指向的变量也保存在内存中，直到没有任何指针指向它们，所以从它们被创建开始就具有相互独立的生命周期。</p>`,24),p=[o];function i(r,c){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","04.9.html.vue"]]);export{d as default};