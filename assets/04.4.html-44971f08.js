import{_ as n,Z as s,$ as a,a3 as e}from"./framework-09afcf0b.js";const i={},o=e(`<h1 id="_4-4-变量" tabindex="-1"><a class="header-anchor" href="#_4-4-变量" aria-hidden="true">#</a> 4.4 变量</h1><ul><li><p>使用 <code>var</code> 声明：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> identifier <span class="token keyword">type</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 声明</span>
<span class="token keyword">var</span> a <span class="token builtin">int</span>
<span class="token keyword">var</span> b <span class="token builtin">string</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
	c <span class="token builtin">bool</span>
    d <span class="token operator">*</span><span class="token builtin">int</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>采用驼峰命名法</p></li><li><p>赋值：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 声明并赋值</span>
<span class="token keyword">var</span> e <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 自动推断类型（编译期）</span>
<span class="token keyword">var</span> f <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;f&quot;</span>
<span class="token comment">// 并行赋值</span>
<span class="token keyword">var</span> g<span class="token punctuation">,</span> h <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
<span class="token comment">// 交换</span>
g<span class="token punctuation">,</span> h <span class="token operator">=</span> h<span class="token punctuation">,</span> g <span class="token comment">// g:2, h: 1</span>
<span class="token comment">// 抛弃值</span>
<span class="token boolean">_</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>全局变量</strong>： 可以声明，但不使用</p></li><li><p><strong>局部变量</strong>： 声明后必须使用，可使用 <code>:=</code> 进行简短声明并赋值</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>a <span class="token operator">:=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="_4-4-1-类型" tabindex="-1"><a class="header-anchor" href="#_4-4-1-类型" aria-hidden="true">#</a> 4.4.1 类型</h2><h3 id="值类型" tabindex="-1"><a class="header-anchor" href="#值类型" aria-hidden="true">#</a> 值类型</h3><ul><li><code>int</code>, <code>float</code>, <code>bool</code>, <code>string</code> 属于值类型，使用这些类型的变量直接指向存在内存中的值</li></ul><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/4.4.2_fig4.1.jpg"><ul><li><p>进行赋值 <code>j = i</code> 时，实际上将内存中的值进行拷贝</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20230502151223391.png" alt="image-20230502151223391" tabindex="0" loading="lazy"><figcaption>image-20230502151223391</figcaption></figure></li><li><p>值类型变量的值存在栈中</p></li><li><p>使用 <code>&amp;</code> 获取内存地址： <code>&amp;i</code></p></li></ul><h3 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型" aria-hidden="true">#</a> 引用类型</h3><ul><li><p>引用类型存储的时变量值所在的<strong>内存地址</strong><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20230502151528930.png" alt="image-20230502151528930" loading="lazy"></p></li><li><p>引用类型变量赋值: <code>r2 = r2</code>，只有地址被复制，对 <code>r2</code> 的修改将会影响 <code>r1</code></p></li></ul><h2 id="_4-4-2-init-函数" tabindex="-1"><a class="header-anchor" href="#_4-4-2-init-函数" aria-hidden="true">#</a> 4.4.2 init 函数</h2><p>每个源文件可包含一个或多个 <code>init()</code> 函数，多个会按照从上至下的顺序执行。</p><p>在<strong>包初始化</strong>时<strong>自动执行</strong>且无法人为执行，优先级高于<code>main()</code>。</p><p>变量可在<code>init()</code> 中初始化：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> trans

<span class="token keyword">import</span> <span class="token string">&quot;math&quot;</span>

<span class="token keyword">var</span> Pi <span class="token builtin">float64</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   Pi <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">*</span> math<span class="token punctuation">.</span><span class="token function">Atan</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// init() function computes Pi</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[o];function c(l,p){return s(),a("div",null,t)}const r=n(i,[["render",c],["__file","04.4.html.vue"]]);export{r as default};
