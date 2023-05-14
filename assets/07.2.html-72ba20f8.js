import{_ as e,Z as t,$ as o,a0 as n,a1 as a,a2 as p,a3 as c,H as i}from"./framework-09afcf0b.js";const l={},r=c(`<h1 id="_7-2-切片" tabindex="-1"><a class="header-anchor" href="#_7-2-切片" aria-hidden="true">#</a> 7.2 切片</h1><h2 id="_7-2-1-概念" tabindex="-1"><a class="header-anchor" href="#_7-2-1-概念" aria-hidden="true">#</a> 7.2.1 概念</h2><ul><li><p><strong>切片</strong>(slice) 是对数组的一个连续片段的引用。</p></li><li><p><strong>长度</strong>：切片可索引的长度，可通过<code>len()</code> 获取</p></li><li><p><strong>容量</strong>：切片对应底层数组的长度，可通过<code>cap()</code>获取</p></li><li><p>长度和容量满足不等式: <code>0 &lt;= len(s) &lt;= cap()</code></p></li><li><p>多个切片若底层数组相同，则切片之间的数组是共享的</p></li><li><p><strong>声明</strong>：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> identifier <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>未初始化的切片值为<code>nil</code>, 长度为0</p></li><li><p><strong>初始化</strong>:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 通过数组初始化</span>
<span class="token keyword">var</span> slice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>start<span class="token punctuation">:</span>end<span class="token punctuation">]</span>
<span class="token comment">// 通过数组常量, 例如</span>
<span class="token keyword">var</span> slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示切片由数组的 <code>start</code> 到 <code>end-1</code> 之间的元素构成。 <code>[start:end]</code>为切片表达式：</p><ul><li><code>[:]</code>: 相当于<code>[0:len(arr)]</code></li><li><code>[n:]</code>: 相当于<code>[n:len(arr)]</code></li><li><code>[:m]</code>: 相当于<code>[0:m]</code></li></ul></li></ul><p><strong>底层结构</strong></p><p>切片在内存中的实际上是有三个域的结构体：</p><ul><li>指向相关数组的<strong>指针</strong></li><li>切片<strong>长度</strong></li><li>切片<strong>容量</strong></li></ul><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20230503192833602.png" alt="image-20230503192833602" tabindex="0" loading="lazy"><figcaption>image-20230503192833602</figcaption></figure><h2 id="_7-2-2-将切片传给函数" tabindex="-1"><a class="header-anchor" href="#_7-2-2-将切片传给函数" aria-hidden="true">#</a> 7.2.2 将切片传给函数</h2><p>若函数需要操作数组，可将其切片作为参数：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">sum</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		s <span class="token operator">+=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> s
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
	<span class="token function">sum</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-2-3-使用-make-创建切片" tabindex="-1"><a class="header-anchor" href="#_7-2-3-使用-make-创建切片" aria-hidden="true">#</a> 7.2.3 使用 make() 创建切片</h2><p>可以使用<code>make()</code>创建切片：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> slice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">,</span> <span class="token builtin">cap</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>省略<code>cap</code>: <code>make([]type, len)</code> 那么<code>cap</code>将等于<code>len</code></li></ul><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20230503193523762.png" alt="image-20230503193523762" tabindex="0" loading="lazy"><figcaption>image-20230503193523762</figcaption></figure><h2 id="_7-2-4-new-和-make-的区别" tabindex="-1"><a class="header-anchor" href="#_7-2-4-new-和-make-的区别" aria-hidden="true">#</a> 7.2.4 new() 和 make() 的区别</h2><ul><li><code>new(T)</code>： 为类型T分配一片内存，初始化零值并返回类型为<code>*T</code>的指针 <strong>返回一个指向类型为T，值为零值的地址的指针</strong> 适用于<strong>数组</strong>和<strong>结构体</strong></li><li><code>make(T)</code>： <strong>返回类型为T的初始值</strong> 适用于内建的引用类型：<strong>slice, map 和 channel</strong></li></ul><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20230503194251351.png" alt="image-20230503194251351" tabindex="0" loading="lazy"><figcaption>image-20230503194251351</figcaption></figure><p>换句话说就是，<code>new()</code>只会分配内存和初始化变量，而对于slice, map 和 channel 来说，其底层对应的数据结构并没有初始化，所以需要使用 <code>make()</code> 来进行初始化。</p><h2 id="_7-2-5-多维切片" tabindex="-1"><a class="header-anchor" href="#_7-2-5-多维切片" aria-hidden="true">#</a> 7.2.5 多维切片</h2><p>和数组一样可以由一维组成多维。</p><h2 id="_7-2-6-bytes-包" tabindex="-1"><a class="header-anchor" href="#_7-2-6-bytes-包" aria-hidden="true">#</a> 7.2.6 bytes 包</h2>`,22),u=n("code",null,"[]byte",-1),d=n("code",null,"bytes",-1),k={href:"https://pkg.go.dev/bytes@go1.20.4",target:"_blank",rel:"noopener noreferrer"};function g(m,b){const s=i("ExternalLinkIcon");return t(),o("div",null,[r,n("p",null,[u,a("类型比较常见，可以使用 "),d,a("包专门处理，详见 "),n("a",k,[a("bytes"),p(s)])])])}const v=e(l,[["render",g],["__file","07.2.html.vue"]]);export{v as default};
