import{_ as n,Z as a,$ as s,a3 as e}from"./framework-dee406ed.js";const t={},p=e(`<h1 id="_7-1-数组" tabindex="-1"><a class="header-anchor" href="#_7-1-数组" aria-hidden="true">#</a> 7.1 数组</h1><h2 id="_7-1-1-概念" tabindex="-1"><a class="header-anchor" href="#_7-1-1-概念" aria-hidden="true">#</a> 7.1.1 概念</h2><ul><li><p><strong>数组</strong>是具有相同<strong>唯一类型</strong>的一组已编号且长度固定的数据项序列。</p></li><li><p>数组<strong>长度</strong>必须是常量表达式，且为非负整数。</p><ul><li>数组长度也是数组类型的一部分，故<code>[5]int</code> 和<code>[10]int</code>属于不同类型。</li><li>数组长度必须在声明时给出</li><li>数组最大为2GB</li></ul></li><li><p>数组元素可以通过<strong>索引</strong>获取，从0开始</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> arr <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token comment">// 可以改变元素值</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>声明</strong>：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> identifier <span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">]</span><span class="token keyword">type</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> arr1 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>声明数组时，所有的数组元素将会为默认的零值。</p></li><li><p>内存中结构为： <img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20230503185401595.png" alt="image-20230503185401595" loading="lazy"></p></li></ul><p>数组是一种<strong>值类型</strong>，故可以通过<code>new()</code>创建:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>new([5]int)</code>: 返回的类型是 <code>*[5]int</code>, 数组的指针；而直接声明的方式返回就是数组类型。</li></ul><p>数组类型的<strong>赋值</strong>，将会进行值的拷贝：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>arr2 <span class="token operator">:=</span> <span class="token operator">*</span>arr
arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改<code>arr2</code> 将不会对<code>arr</code>产生影响</li></ul><h2 id="_7-1-2-数组常量" tabindex="-1"><a class="header-anchor" href="#_7-1-2-数组常量" aria-hidden="true">#</a> 7.1.2 数组常量</h2><p>可以通过数组常量初始化数组, 有三种方式：</p><ul><li><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 指定位置</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_7-1-3-多维数组" tabindex="-1"><a class="header-anchor" href="#_7-1-3-多维数组" aria-hidden="true">#</a> 7.1.3 多维数组</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> screen <span class="token punctuation">[</span>width<span class="token punctuation">]</span><span class="token punctuation">[</span>height<span class="token punctuation">]</span><span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-1-4-将数组传递给函数" tabindex="-1"><a class="header-anchor" href="#_7-1-4-将数组传递给函数" aria-hidden="true">#</a> 7.1.4 将数组传递给函数</h2><p>将大数组传给函数会消耗大量内存，两种方式可以避免：</p><ul><li>传递数组的指针</li><li><strong>传递数组的切片</strong> ：通常使用的方式</li></ul>`,17),o=[p];function l(i,c){return a(),s("div",null,o)}const u=n(t,[["render",l],["__file","07.1.html.vue"]]);export{u as default};