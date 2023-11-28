import{_ as o,Z as p,$ as l,a0 as n,a1 as s,a2 as t,a3 as e,H as i}from"./framework-dee406ed.js";const c={},u=n("p",null,"回文是一类特殊字符串: 从头到尾读取和从尾到头读取所获取的结果相同.",-1),r=n("h2",{id:"_3-3-1-问题18-有效的回文",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-3-1-问题18-有效的回文","aria-hidden":"true"},"#"),s(" 3.3.1 问题18: 有效的回文")],-1),d={href:"https://leetcode.cn/problems/XltzEq/",target:"_blank",rel:"noopener noreferrer"},k=e(`<blockquote><p>给定一个字符串 <code>s</code> ，验证 <code>s</code> 是否是 <strong>回文串</strong> ，只考虑字母和数字字符，可以忽略字母的大小写。</p><p>本题中，将空字符串定义为有效的 <strong>回文串</strong> 。</p><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;A man, a plan, a canal: Panama&quot;
输出: true
解释：&quot;amanaplanacanalpanama&quot; 是回文串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;race a car&quot;
输出: false
解释：&quot;raceacar&quot; 不是回文串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 2 * 105</code></li><li>字符串 <code>s</code> 由 ASCII 字符组成</li></ul></blockquote><h3 id="_3-3-1-1-分析" tabindex="-1"><a class="header-anchor" href="#_3-3-1-1-分析" aria-hidden="true">#</a> 3.3.1.1 分析</h3><p>使用双指针从两边开始反向移动, 判断指针指向的字符是否相同, 跳过非字母/数字的字符.</p><p>不考虑大小写, 则可以将字母都转换成小写.</p><h3 id="_3-3-1-2-题解" tabindex="-1"><a class="header-anchor" href="#_3-3-1-2-题解" aria-hidden="true">#</a> 3.3.1.2 题解</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token comment">// 边界</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 双指针</span>
	left<span class="token punctuation">,</span> right <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
	<span class="token keyword">for</span> left <span class="token operator">&lt;</span> right <span class="token punctuation">{</span>
		lc <span class="token operator">:=</span> <span class="token function">rune</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span>
		rc <span class="token operator">:=</span> <span class="token function">rune</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span>

		<span class="token keyword">if</span> <span class="token operator">!</span><span class="token function">isLetterOrDigigt</span><span class="token punctuation">(</span>lc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left<span class="token operator">++</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token operator">!</span><span class="token function">isLetterOrDigigt</span><span class="token punctuation">(</span>rc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right<span class="token operator">--</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// to lower case</span>
		lc <span class="token operator">=</span> unicode<span class="token punctuation">.</span><span class="token function">ToLower</span><span class="token punctuation">(</span>lc<span class="token punctuation">)</span>
		rc <span class="token operator">=</span> unicode<span class="token punctuation">.</span><span class="token function">ToLower</span><span class="token punctuation">(</span>rc<span class="token punctuation">)</span>
		<span class="token keyword">if</span> lc <span class="token operator">!=</span> rc <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>

		left<span class="token operator">++</span>
		right<span class="token operator">--</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">isLetterOrDigigt</span><span class="token punctuation">(</span>c <span class="token builtin">rune</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> unicode<span class="token punctuation">.</span><span class="token function">IsLetter</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">||</span> unicode<span class="token punctuation">.</span><span class="token function">IsDigit</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-2-问题19-最多删除一个字符得到回文" tabindex="-1"><a class="header-anchor" href="#_3-3-2-问题19-最多删除一个字符得到回文" aria-hidden="true">#</a> 3.3.2 问题19: 最多删除一个字符得到回文</h2>`,7),v={href:"https://leetcode.cn/problems/RQku0D/",target:"_blank",rel:"noopener noreferrer"},m=e(`<blockquote><p>给定一个非空字符串 <code>s</code>，请判断如果 <strong>最多</strong> 从字符串中删除一个字符能否得到一个回文字符串。</p><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;aba&quot;
输出: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;abca&quot;
输出: true
解释: 可以删除 &quot;c&quot; 字符 或者 &quot;b&quot; 字符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;abc&quot;
输出: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 105</code></li><li><code>s</code> 由小写英文字母组成</li></ul></blockquote><h3 id="_3-3-2-1-分析" tabindex="-1"><a class="header-anchor" href="#_3-3-2-1-分析" aria-hidden="true">#</a> 3.3.2.1 分析</h3><p>使用双指针从两端开始, 比较字符是否相同.</p><p>不相同的话, 则分别删除两个字符后再判断是否是回文串.</p><h3 id="_3-3-2-2-题解" tabindex="-1"><a class="header-anchor" href="#_3-3-2-2-题解" aria-hidden="true">#</a> 3.3.2.2 题解</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">validPalindrome</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	left<span class="token punctuation">,</span> right <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
	<span class="token keyword">for</span> left <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">!=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		left<span class="token operator">++</span>
		right<span class="token operator">--</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> left <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span> <span class="token operator">||</span> <span class="token function">isPalindrome19</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> left<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPalindrome19</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">isPalindrome19</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> left<span class="token punctuation">,</span> right <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> left <span class="token operator">&lt;</span> right <span class="token punctuation">{</span>
		<span class="token keyword">if</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">!=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>
		left<span class="token operator">++</span>
		right<span class="token operator">--</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-3-问题20-回文子串的个数" tabindex="-1"><a class="header-anchor" href="#_3-3-3-问题20-回文子串的个数" aria-hidden="true">#</a> 3.3.3 问题20: 回文子串的个数</h2>`,7),b={href:"https://leetcode.cn/problems/a7VOhD/",target:"_blank",rel:"noopener noreferrer"},h=e(`<blockquote><p>给定一个字符串 <code>s</code> ，请计算这个字符串中有多少个回文子字符串。</p><p>具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;abc&quot;
输出：3
解释：三个回文子串: &quot;a&quot;, &quot;b&quot;, &quot;c&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;aaa&quot;
输出：6
解释：6个回文子串: &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;aa&quot;, &quot;aa&quot;, &quot;aaa&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> 由小写英文字母组成</li></ul></blockquote><h3 id="_3-3-3-1-分析" tabindex="-1"><a class="header-anchor" href="#_3-3-3-1-分析" aria-hidden="true">#</a> 3.3.3.1 分析</h3><p>遍历字符串, 对于一个字符 <code>s[i]</code>, 以其为对称中心则有:</p><ul><li>若为奇数回文: 对称中心是自身 <code>s[i]</code></li><li>若为偶数回文: 对称中心是 <code>[s[i], s[i+1]]</code></li></ul><p>从对称中心向两边同时扩展, 若两边的字符相同的为回文子串.</p><h3 id="_3-3-3-2-题解" tabindex="-1"><a class="header-anchor" href="#_3-3-3-2-题解" aria-hidden="true">#</a> 3.3.3.2 题解</h3>`,6),g=n("p",null,[s("使用了两重循环, 时间复杂度: O("),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mi",null,"n"),n("mn",null,"2")])]),n("annotation",{encoding:"application/x-tex"},"n^2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8141em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"n"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])])])])]),s(")")],-1),f=e(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">countSubstrings</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    count <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token comment">// 边界</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> count
    <span class="token punctuation">}</span>

    <span class="token comment">// 扫描 s</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
       <span class="token comment">// 奇数长回文</span>
       count <span class="token operator">+=</span> <span class="token function">countPalindrome</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
       <span class="token comment">// 偶数长回文</span>
       count <span class="token operator">+=</span> <span class="token function">countPalindrome</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> count
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">countPalindrome</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> c1<span class="token punctuation">,</span> c2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    count <span class="token operator">:=</span> <span class="token number">0</span>
    left<span class="token punctuation">,</span> right <span class="token operator">:=</span> c1<span class="token punctuation">,</span> c2
    <span class="token comment">// 从中心向两边扩展</span>
    <span class="token keyword">for</span> left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">!=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> count
       <span class="token punctuation">}</span>
       count<span class="token operator">++</span>
       left<span class="token operator">--</span>
       right<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,2),_={href:"https://book.douban.com/subject/35543447/",target:"_blank",rel:"noopener noreferrer"};function x(q,w){const a=i("ExternalLinkIcon");return p(),l("div",null,[u,r,n("p",null,[n("a",d,[s("LCR 018. 验证回文串"),t(a)])]),k,n("p",null,[n("a",v,[s("LCR 019. 验证回文串 II"),t(a)])]),m,n("p",null,[n("a",b,[s("LCR 020. 回文子串"),t(a)])]),h,g,f,n("ol",null,[n("li",null,[n("a",_,[s("剑指Offer（专项突破版）"),t(a)])])])])}const L=o(c,[["render",x],["__file","03.3.html.vue"]]);export{L as default};
