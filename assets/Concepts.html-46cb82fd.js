import{_ as e,X as p,Y as i,Z as n,$ as s,a0 as t,a1 as o,F as c}from"./framework-8cb7ec75.js";const l={},u=o(`<h2 id="_1-集合、列表和数组" tabindex="-1"><a class="header-anchor" href="#_1-集合、列表和数组" aria-hidden="true">#</a> 1. 集合、列表和数组</h2><h3 id="_1-1-集合" tabindex="-1"><a class="header-anchor" href="#_1-1-集合" aria-hidden="true">#</a> 1.1 集合</h3><p>定义：由一个或多个确定的元素所构成的整体</p><p>特性：</p><ul><li>集合中的元素类型不一定相同</li><li>集合中的元素没有顺序</li></ul><p>这样的集合并不直接存在于编程语言中，实际编程语言中的很多数据结构是在集合的基础上添加一些规则形成的。</p><h3 id="_1-2-列表" tabindex="-1"><a class="header-anchor" href="#_1-2-列表" aria-hidden="true">#</a> 1.2 列表</h3><p>列表（线性表）定义：是一种数据项构成的有限序列，即按照一定的线性顺序，排列而成的数据项的集合。</p><p>列表的概念是在集合的特征上形成的，它具有顺序，且长度可变。在编程语言中，列表常见的表现形式有数组和链表，还有两种特殊类型的列表栈和队列。</p><h3 id="_1-3-数组" tabindex="-1"><a class="header-anchor" href="#_1-3-数组" aria-hidden="true">#</a> 1.3 数组</h3><p>数组是列表的实现方式之一，其具有列表的特征，同时具有自己的特征。</p><p>特点：</p><ul><li>数组使用名为<code>索引</code>的数字来标识每项数据在数组中的位置，可以根据索引快速访问数组元素<img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/628b6f699aa49ffcc9d3c75806457c4a1a66ffe025bb651d9f8e78b4242249b9-4.png" alt="" loading="lazy"></li><li>数组中的元素在内存中是连续存储的，且每个元素占用相同大小的内存。<img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/7b17543e4e39ae894bba0b2b6f8431b40d3df04556df06a3b974146d9e5c7d0d-5-16455816794353.png" alt="" loading="lazy"></li></ul><p>数组和列表的区别：</p><ul><li>索引： 列表没有索引，是其与数组最大的区别</li><li>存储方式：列表元素在内存中不一定是连续的（如：链表），数组元素在内存中是连续的</li></ul><h3 id="_1-4-小结" tabindex="-1"><a class="header-anchor" href="#_1-4-小结" aria-hidden="true">#</a> 1.4 小结</h3><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/1611678316-LgeBpB-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-数组的操作" tabindex="-1"><a class="header-anchor" href="#_2-数组的操作" aria-hidden="true">#</a> 2. 数组的操作</h2><h3 id="_2-1-读取元素" tabindex="-1"><a class="header-anchor" href="#_2-1-读取元素" aria-hidden="true">#</a> 2.1 读取元素</h3><p>读取数组元素，是通过访问索引的方式来读取的。</p><p>对于数组，计算机会在内存中为其申请一段<strong>连续</strong>的空间，并会记下索引<code>0</code>处的内存地址。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/273ac74bdd7a19d72c2bf60d84ddd66f09b45de4d8c36333bf5f1fee2c7a8330-图片2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>例如想要访问索引为<code>2</code>的元素时，计算过程如下：</p><ul><li>找到该数组的索引<code>0</code> 的内存地址：<code>2008</code></li><li>内存地址加上索引值，作为目标元素的地址，即<code>2008 + 2 = 2010</code>, 此内存地址存储的元素为<code>D</code></li></ul><p>计算内存的过程很快，一旦知道了内存地址可立即访问到该元素，因此其时间复杂度为常数级，为<em>O(1)</em>。</p><h3 id="_2-2-查找元素" tabindex="-1"><a class="header-anchor" href="#_2-2-查找元素" aria-hidden="true">#</a> 2.2 查找元素</h3><p>查找元素时，只需从数组开头逐步向后查找即可。<img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/3d9c20552e0e9c4650f4a267f4066aa71338ad0013514559b57a1bf786d662ba-4.gif" alt="" loading="lazy"></p><p>最坏情况下，目标元素不在数组中，需要查找<code>n</code>次，<code>n</code>为数组长度，故查找时间复杂度为<em>O(N)</em>。</p><h3 id="_2-3-插入元素" tabindex="-1"><a class="header-anchor" href="#_2-3-插入元素" aria-hidden="true">#</a> 2.3 插入元素</h3><p>若插入元素在数组末尾则仅需一步。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/2b53523dc1a745d89fbc11ba776eaa2d0f220acf4c232b1a83f939c973141280-6.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>若插入其他位置，则需要为插入元素<strong>腾出</strong>空间后再进行插入。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/22ce7dbf8cd441fd7425499cd8154d1c4211a6a42ec3f3995520ee76ce7183c7-7.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>频繁的插入操作会耗费大量的时间，可以采用链表的结构来解决此问题。</p><h3 id="_2-4-删除元素" tabindex="-1"><a class="header-anchor" href="#_2-4-删除元素" aria-hidden="true">#</a> 2.4 删除元素</h3><p>与插入类似，删除某个元素之后，后续的元素需要填补空缺的位置。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/4df7a5a75e5f76b6e7e4540f9403c7c2fee5197a1f30421b4f5d32fdca2cf360-8.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>最坏情况下，删除第一个元素，操作步数为 <code>1 + (n-1) = n</code>, <code>1</code> 为删除操作，<code>n-1</code> 为移动元素操作。 删除操作为线性时间复杂度，<em>O(N)</em>, <em>N</em> 为数组长度。</p><h3 id="_2-5-小结" tabindex="-1"><a class="header-anchor" href="#_2-5-小结" aria-hidden="true">#</a> 2.5 小结</h3><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/1617108025-oQRoDO-数组的操作.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3-二维数组" tabindex="-1"><a class="header-anchor" href="#_3-二维数组" aria-hidden="true">#</a> 3. 二维数组</h2><p>二维数组是数组元素为数组的数组，其本质上仍是一个一维数组。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/e64116dc9c9c8f9f8ad2a5c251c0e76a677ba874a3bab0e22ce164384237a55c-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>例如：二维数组 <code>A = [[1, 2, 3, 4],[2, 4, 5, 6],[1, 4, 6, 8]]</code>, 计算机同样会在内存中申请一段 <strong>连续</strong> 空间，并记录第一行数组的索引位置，即 <code>A[0][0]</code> 的内存地址。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/1600741130-xzcLML-WechatIMG2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4-字符串" tabindex="-1"><a class="header-anchor" href="#_4-字符串" aria-hidden="true">#</a> 4. 字符串</h2><p>字符串是由零个或多个字符组成的有限序列，一般记为 s=a<sub>1</sub>a<sub>2</sub>...a<sub>n</sub> d, 在编程语言中表示文本的数据类型。</p><p>字符串的基本操作对象通常是<strong>字符串整体或者子串</strong>，例如: 将 <code>I like leetcode</code> 翻转之后的 <code>edocteel ekil I</code> 通常是没有意义的，一般希望输出的是<code>Leetcode like I</code>。</p><h3 id="_4-1-比较函数" tabindex="-1"><a class="header-anchor" href="#_4-1-比较函数" aria-hidden="true">#</a> 4.1 比较函数</h3><p>在 golang 中字符串可以使用运算符直接比较，也可以使用<code>strings.Compare(a, b string) int </code> 进行比较</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>	<span class="token comment">// built-in operator</span>
	of <span class="token operator">:=</span> <span class="token string">&quot;%s %s %s : %v\\n&quot;</span>
	s1<span class="token punctuation">,</span> s2 <span class="token operator">:=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;def&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>of<span class="token punctuation">,</span>s1<span class="token punctuation">,</span><span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>s2<span class="token punctuation">,</span>s1<span class="token operator">==</span>s2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>of<span class="token punctuation">,</span>s1<span class="token punctuation">,</span><span class="token string">&quot;&lt;=&quot;</span><span class="token punctuation">,</span>s2<span class="token punctuation">,</span>s1<span class="token operator">&lt;=</span>s2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>of<span class="token punctuation">,</span>s1<span class="token punctuation">,</span><span class="token string">&quot;&gt;=&quot;</span><span class="token punctuation">,</span>s2<span class="token punctuation">,</span>s1<span class="token operator">&gt;=</span>s2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>of<span class="token punctuation">,</span>s1<span class="token punctuation">,</span><span class="token string">&quot;&lt;&quot;</span><span class="token punctuation">,</span>s2<span class="token punctuation">,</span>s1<span class="token operator">&lt;</span>s2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>of<span class="token punctuation">,</span>s1<span class="token punctuation">,</span><span class="token string">&quot;&gt;&quot;</span><span class="token punctuation">,</span>s2<span class="token punctuation">,</span>s1<span class="token operator">&gt;</span>s2<span class="token punctuation">)</span>
	<span class="token comment">// strings.Compare</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s compare to %s : %v&quot;</span><span class="token punctuation">,</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">Compare</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>abc == def : false
abc &lt;= def : true
abc &gt;= def : false
abc &lt; def : true
abc &gt; def : false
abc compare to def : -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于<code>strings.Compare</code>:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Compare returns an integer comparing two strings lexicographically.</span>
<span class="token comment">// The result will be 0 if a==b, -1 if a &lt; b, and +1 if a &gt; b.</span>
<span class="token comment">//</span>
<span class="token comment">// Compare is included only for symmetry with package bytes.</span>
<span class="token comment">// It is usually clearer and always faster to use the built-in</span>
<span class="token comment">// string comparison operators ==, &lt;, &gt;, and so on.</span>
<span class="token keyword">func</span> <span class="token function">Compare</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token comment">// NOTE(rsc): This function does NOT call the runtime cmpstring function,</span>
	<span class="token comment">// because we do not want to provide any performance justification for</span>
	<span class="token comment">// using strings.Compare. Basically no one should use strings.Compare.</span>
	<span class="token comment">// As the comment above says, it is here only for symmetry with package bytes.</span>
	<span class="token comment">// If performance is important, the compiler should be changed to recognize</span>
	<span class="token comment">// the pattern so that all code doing three-way comparisons, not just code</span>
	<span class="token comment">// using strings.Compare, can benefit.</span>
	<span class="token keyword">if</span> a <span class="token operator">==</span> b <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">0</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> a <span class="token operator">&lt;</span> b <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">+</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>strings.Compare</code>函数只是为了和<code>bytes</code>包对称，使用内建的操作符性能要更好，并且函数本身也是用了内建操作符进行计算，故不建议使用此函数进行字符串比较。</p><h3 id="_4-2-拼接函数" tabindex="-1"><a class="header-anchor" href="#_4-2-拼接函数" aria-hidden="true">#</a> 4.2 拼接函数</h3><p>某些语言(如 C++) 中字符串是可变的，可以像改变数组元素那样修改字符串。</p><p>在字符串不可变的语言中，想要修改字符串则需要创建新的字符串。</p><h3 id="_4-3-字符串匹配算法-kmp" tabindex="-1"><a class="header-anchor" href="#_4-3-字符串匹配算法-kmp" aria-hidden="true">#</a> 4.3 字符串匹配算法 KMP</h3><p>字符串模式匹配：给定两个串 S=S<sub>1</sub>S<sub>2</sub>...S<sub>n</sub> 和 T=T<sub>1</sub> ... T<sub>m</sub> 在主串 S 中寻找子串 T 的过程称为模式匹配，T 为模式。</p><p>Knuth-Morris-Pratt (KMP) 算法是一种改进的字符串匹配算法，其核心是利用匹配失败后的信息，尽量减少模式串与主串的匹配次数以大到快速匹配的目的。时间复杂度为 <em>O(m + n)</em>。</p><h4 id="_4-3-1-kmp-算法的流程" tabindex="-1"><a class="header-anchor" href="#_4-3-1-kmp-算法的流程" aria-hidden="true">#</a> 4.3.1 KMP 算法的流程</h4><ol><li><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050103.png" alt="" loading="lazy"> 首先，字符串 “BBC ABCDAB ABCDABCDABDE” 的第一个字符和搜索此 “ABCDABD” 的第一个比较。因为 B 与 A 不匹配，所以搜索词后移一位。</p></li><li><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050104.png" alt="" loading="lazy"> B 与 A 不匹配，搜索词再次后移</p></li><li><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050105.png" alt="" loading="lazy"> 直到字符串有一个字符与搜索此的第一个字符相同为止。</p></li><li><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050106.png" alt="" loading="lazy"> 接着比较字符串和搜索此的下一个字符，还是相同。</p></li><li><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050107.png" alt="" loading="lazy"> 直到字符串中有一个字符和搜索词对应的字符不同为止。</p></li><li><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050108.png" alt="" loading="lazy"> 此时最自然的反应是将搜索此整个后移一位，从头开始比较（这就是暴力匹配 BF 的思想)。但是这样效率很差，因为要将搜索位置移动到已经比较过的位置，重比一遍。</p></li><li><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050107-164679313573925.png" alt="" loading="lazy"> 一个基本事实是，当空格和 D 不匹配时，其实已经直到前面六个字符为 “ABCDAB”。KMP 算法的思想是，利用这个已知的信息，不将搜索位置移动到比较过的位置，继续后移，从而提高效率。</p></li><li><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050109.png" alt="" loading="lazy"> 如何做到这一点？KMP 针对搜索词，计算出一张 “部分匹配表” (Partial Match Table)。</p></li><li><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050107-164679345312728.png" alt="" loading="lazy"> 已知空格与 D 不匹配时，前面六个字符 “ABCDAB” 是匹配的。查表可知，最后一个匹配字符 B 对应的“部分匹配值”为2， 因此按照下列公式算出向后移动的位数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>移动位数 = 已匹配的字符数 - 对应的部分匹配值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为 6 - 2 等于 4，所以将搜索词向后移动 4 位。</p></li><li><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050110.png" alt="" loading="lazy"> 因为空格和 C 不匹配，搜索词继续后移。这时，已匹配的字符数为 2 (AB)，对应的部分匹配值为 0。所以移动位数为 2 = 2 - 0，向后移动两位。</p></li><li><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050111.png" alt="" loading="lazy"> 因为空格与 A 不匹配，继续后移一位。</p></li><li><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050112.png" alt="" loading="lazy"> 逐位比较，直到发现 C 和 D 不匹配，于是移动位数 = 6 - 2，继续将搜索词向后移动 4 位。</p></li><li><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050113.png" alt="" loading="lazy"> 逐位比较，直到搜索词的最后一位，发现完全匹配，于是搜索完成。若需要继续搜索（找出全部匹配)，移动位数 = 7 - 0，在将搜索词向后移动 7 位，再次进行搜索。</p></li></ol><h4 id="_4-3-2-部分匹配表" tabindex="-1"><a class="header-anchor" href="#_4-3-2-部分匹配表" aria-hidden="true">#</a> 4.3.2 部分匹配表</h4><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050114.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在介绍“部分匹配表”如何产生之前，先了解两个概念：</p><ul><li>前缀：除最后一个字符之外，一个字符串全部头部组合</li><li>后缀：除第一个字符之外，一个字符串全部尾部组合</li></ul><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050109-164679724556437.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“部分匹配值” 就是“前缀”和“后缀”的最长的共有元素的长度。以“ABCDABD”为例：</p><ul><li>“A”的前缀和后缀都为空集，共有元素长度为 0</li><li>“AB”的前缀为 [A], 后缀为 [B]，共有元素长度为 0</li><li>“ABC” 的前缀为 [A, AB]，后缀为 [BC, C]，共有元素长度为 0</li><li>“ABCD” 的前缀为 [A, AB, ABC]，后缀为 [BCD, CD, D]，共有元素长度为 0</li><li>“ABCDA” 的前缀为 [A, AB, ABC, ABCD]，后缀为 [BCDA, CDA, DA, A]，共有元素 A，长度为 1</li><li>“ABCDAB” 的前缀为 [A, AB, ABC, ABCD, ABCDA]，后缀为 [BCDAB, CDAB, DAB, AB, B]，共有元素为 AB，长度为 2</li><li>&quot;ABCDABD&quot;的前缀为[A, AB, ABC, ABCD, ABCDA, ABCDAB]，后缀为[BCDABD, CDABD, DABD, ABD, BD, D]，共有元素的长度为0</li></ul><p><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050112-164680204085640.png" alt="" loading="lazy"> 部分匹配的本质是，有时候，字符串的头部和尾部会重复。比如，“ABCDAB” 之中有两个“AB”，那么它的部分匹配值就是 2（“AB”的长度）。搜索词移动时，第一个“AB”向后移动 4 位（已匹配字符数- 部分匹配值)，就可以来到第二个“AB”的位置。</p><h4 id="_4-3-3-程序实现" tabindex="-1"><a class="header-anchor" href="#_4-3-3-程序实现" aria-hidden="true">#</a> 4.3.3 程序实现</h4><p>接下来使用代码实现字符串模式匹配</p><p>首先是 <strong>BF 暴力匹配</strong>的实现：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// tips/kmp/kmp.go	</span>
<span class="token keyword">func</span> <span class="token function">BF</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> t <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	n<span class="token punctuation">,</span> m <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
	i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
	<span class="token keyword">for</span> i <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> m <span class="token punctuation">{</span>
		<span class="token keyword">if</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> t<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">{</span>
			i<span class="token operator">++</span>
			j<span class="token operator">++</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			i <span class="token operator">=</span> i <span class="token operator">-</span> j <span class="token operator">+</span> <span class="token number">1</span>
			j <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> j <span class="token operator">==</span> m <span class="token punctuation">{</span>
		<span class="token keyword">return</span> i <span class="token operator">-</span> j
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>若当前字符匹配成功则 <code>i++, j++</code> 继续匹配下一个字符</li><li>若不同，则 i 回到本次匹配的起始位置的下一个 <code>i-j+1</code> ，j 回到起始位置 0，开始新一轮的匹配</li><li>当 j 到达模式 T 的尾部时表示匹配成功，返回 S 中的下标 <code>i-j</code></li><li>没有匹配成功则返回 -1</li></ul><p>接下来是 <strong>KMP 算法</strong> 的实现：</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bg2013050109-164679724556437.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由上述的 KMP 流程中可以看到“部分匹配表”的生成，部分匹配值是<strong>以当前搜索词结尾</strong>的子串的<strong>最大公共前后缀</strong>的长度。</p><p>在 KMP 算法中，使用一个 <code>next</code> 数组来保存模式串中下一个开始匹配的字符的下标，其规则是<strong>除当前字符之外</strong>的子串的最大公共前后缀的长度。以上图为例，对应的 <code>next</code> 数组为：</p><table><thead><tr><th>搜索词</th><th>A</th><th>B</th><th>C</th><th>D</th><th>A</th><th>B</th><th>D</th></tr></thead><tbody><tr><td>部分匹配值</td><td>-1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>2</td></tr></tbody></table><ul><li>约定 <code>next[0]</code> 设为 -1</li><li>同时可以看出此表相当于上表向右移动一格</li></ul><p>这个人工分析出来的表，需要将其转换成计算机能够处理的方式。</p><p>首先计算模式串指针 j 在匹配失败（失配）时，需要移动的位数，之前有提到的移动公式 <code>已匹配的字符数 - 部分匹配值</code>，已匹配字符数为 <code>j-1</code>，而部分匹配表对应值为 <code>pt[j - 1]</code> ，因为 next 表相当于 Pt 表向右移动一格，则可以得出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>next[j] = pt[j-1]
k = (j - 1) - pt[j]
-&gt;
k = (j - 1) - next[j-1]
-&gt;
k = j - next[j]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>j 需要移动的位数 k = j - next[j]，那么 j 在模式串移动了 k 位之后，所在的位置即为 j 在失配后回溯的位置：j - k = next[j]。</p><p>接下来计算 next[j] 的值，根据 next 数组的构建规则，已知 next[0] 为 -1，next[1] 为 0，所以我们只需要计算 j &gt; 1 时的情形。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l5enNpcg==,size_16,color_FFFFFF,t_70.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>当模式串字符 P<sub>k</sub> = P<sub>j</sub> 时，可以得出 next[j+1] = next[j] + 1 = k + 1</li><li>当 P<sub>k</sub> ≠ P<sub>j</sub> 时，此时需要找到更短一些的最长公共前后缀，如上图中蓝色部分，那么此时只需比较 P<sub>next[k]</sub> 和 P<sub>j</sub> 即可，若仍不相同，则继续按照此规则寻找。</li></ol><p>将上面的计算方式写成 Code：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">buildNext</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
    next <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
    j<span class="token punctuation">,</span> k <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span>
    next<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> k
    <span class="token keyword">for</span> j <span class="token operator">&lt;</span> n<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> k <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> p<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> p<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            j<span class="token operator">++</span>
            k<span class="token operator">++</span>
            next<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> k <span class="token comment">// next[j+1]=next[j]+1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            k <span class="token operator">=</span> next<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>KMP 算法：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">kmp</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    next <span class="token operator">:=</span> <span class="token function">buildNext</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
    i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    m<span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">&lt;</span> m <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> n <span class="token punctuation">{</span>
        <span class="token keyword">if</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span>
            j<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            j <span class="token operator">=</span> next<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> j <span class="token operator">==</span> n <span class="token punctuation">{</span>
        <span class="token keyword">return</span> i <span class="token operator">-</span> j
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-双指针技巧" tabindex="-1"><a class="header-anchor" href="#_5-双指针技巧" aria-hidden="true">#</a> 5. 双指针技巧</h2><h3 id="_5-1-双指针" tabindex="-1"><a class="header-anchor" href="#_5-1-双指针" aria-hidden="true">#</a> 5.1 双指针</h3><p>通常迭代数组仅需一个指针即可，但有时需要使用两个指针进行迭代。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/bfdf27723d1b26ee06a56adbf6206fb9d1f7446e297ce05e74e0275b268cd945-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>示例：反转数组</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reverseString</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	left<span class="token punctuation">,</span> right <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
	<span class="token keyword">for</span> left <span class="token operator">&lt;</span> right <span class="token punctuation">{</span>
		b<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>left<span class="token punctuation">]</span>
		left<span class="token operator">++</span>
		right<span class="token operator">--</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>左右两边的指针向中间移动，交换彼此的值，直到两者相遇。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/84f9f1fce23655fcc653179b26d9800edf54858f790be1bc7573eb228f2aac00-2.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_5-2-快慢指针" tabindex="-1"><a class="header-anchor" href="#_5-2-快慢指针" aria-hidden="true">#</a> 5.2 快慢指针</h3><p>快慢指针 指的是使用两个不同步的指针来解决问题，指针的移动方向相同。而上文提到的双指针的运动方向是相反的。</p><p>示例：</p><blockquote><p>一个数组 <code>nums</code> 和 值 <code>val</code>, 需要 <strong>原地</strong> 移除所有数值等于 <code>val</code> 的元素, 并返回移除后数组的新长度.</p></blockquote><ol><li><p>若没有空间复杂度的限制 可以创建一个新的数组, 将原数组中不等于 <code>val</code> 的值放入新数组即可. <img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/3f8b23cdbbb25f753c89a309a2860081e0dbb7d7097a2664100849424b07235a-3.png" alt="" loading="lazy"></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">removeElement</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        <span class="token keyword">if</span> v <span class="token operator">!=</span> val <span class="token punctuation">{</span>
            arr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>若有空间限制 此时应在原数组上进行操作, 可以采用快慢指针的思想: 初始化一个快指针 <code>fast</code> 和一个慢指针 <code>slow</code>, <code>fast</code> 每次移动一步,而 <code>slow</code> 仅当 <code>fast</code> 指向的值不等于 <code>val</code> 时才移动一步. <img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/353657e00bf49ad5c6aeb8e97414d1d610083acdb580e7c2b0fe036a523129f5-4.gif" alt="" loading="lazy"></p></li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">removeElement</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    slow<span class="token punctuation">,</span> fast <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token keyword">for</span> fast <span class="token operator">&lt;</span>  <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span> <span class="token operator">!=</span> val <span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span>
            slow<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        fast<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> slow
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,108),r={href:"https://leetcode-cn.com/leetbook/read/array-and-string/xkhi75/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://segmentfault.com/a/1190000040275250",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/yyzsir/article/details/89462339",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zh.wikipedia.org/wiki/KMP%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"};function g(v,h){const a=c("ExternalLinkIcon");return p(),i("div",null,[u,n("ol",null,[n("li",null,[n("a",r,[s("字符串和数组"),t(a)]),s(" leetcode")]),n("li",null,[n("a",d,[s("Golang 字符串拼接方式比较"),t(a)]),s(" jankin")]),n("li",null,[n("a",k,[s("字符串匹配的KMP算法"),t(a)]),s(" 阮一峰")]),n("li",null,[n("a",m,[s("KMP 算法详解"),t(a)]),s(" yyzsir")]),n("li",null,[n("a",b,[s("KMP算法"),t(a)]),s(" wikipedia")])])])}const y=e(l,[["render",g],["__file","Concepts.html.vue"]]);export{y as default};