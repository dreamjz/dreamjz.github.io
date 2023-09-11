import{_ as p,Z as o,$ as c,a0 as n,a1 as s,a2 as e,a3 as t,H as l}from"./framework-09afcf0b.js";const i={},u=n("p",null,[s("和数组类似, "),n("strong",null,"双指针"),s("法也可用于字符串中.")],-1),r=n("h2",{id:"_3-2-1-问题14-字符串中的变位词",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-2-1-问题14-字符串中的变位词","aria-hidden":"true"},"#"),s(" 3.2.1 问题14: 字符串中的变位词")],-1),d={href:"https://leetcode.cn/problems/MPnaiL/",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>给定两个字符串 <code>s1</code> 和 <code>s2</code>，写一个函数来判断 <code>s2</code> 是否包含 <code>s1</code> 的某个变位词。</p><p>换句话说，第一个字符串的排列之一是第二个字符串的 <strong>子串</strong> 。</p><blockquote><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s1 = &quot;ab&quot; s2 = &quot;eidbaooo&quot;
输出: True
解释: s2 包含 s1 的排列之一 (&quot;ba&quot;).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s1= &quot;ab&quot; s2 = &quot;eidboaoo&quot;
输出: False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s1.length, s2.length &lt;= 104</code></li><li><code>s1</code> 和 <code>s2</code> 仅包含小写字母</li></ul></blockquote><h3 id="_3-2-1-1-分析" tabindex="-1"><a class="header-anchor" href="#_3-2-1-1-分析" aria-hidden="true">#</a> 3.2.1.1 分析</h3><p>变位词指的是, 对于字符串s, 其变位词的字母和出现次数和s相同, 而出现顺序不同. (<code>acb</code>, <code>bca</code> 就是<code>abc</code>的变位词之一).</p><p>对于 s1 的变位词, 其出现字母和次数都是相同的, 那么可以用 (k, v) 为 (字母, 出现次数) 的哈希表 <code>cnt</code> 来表示 s1 及其变位词.</p><p>要判断 s1及其变为词是否为 s2 的子串:</p><ol><li>扫描s1, 将 <code>cnt</code> 对应的字母次数减1, 此时<code>cnt</code>之和必然小于0 (s1 在 <code>cnt</code> 中的字符次数之和为 <code>-len(s1)</code>)</li><li>扫描s2, 使用双指针 <code>left</code>, <code>right</code> 表示子串区间 (<strong>目标</strong>是移动子串区间, 使得区间在 <code>cnt</code> 中出现的次数之和为<code>len(s1)</code>, 也就是<strong>整体</strong>的<code>cnt</code>之和为0): <ol><li>若 s2[right] 字符x出现次数大于0, 则 left 右移, 减少字符, 那么 <code>cnt</code> 之和必然减少1; 持续右移 left, 直到 <code>cnt[x]</code> 之和不大于0</li><li>若此时, 子串长度等于 s1 的长度, 那么 <code>cnt</code> 之和必然为0, 即 s1 为 s2 的子串</li></ol></li></ol><h3 id="_3-2-1-2-题解" tabindex="-1"><a class="header-anchor" href="#_3-2-1-2-题解" aria-hidden="true">#</a> 3.2.1.2 题解</h3><ol><li>扫描 s1, 记录字符出现次数(次数减一)</li><li>扫描 s2, 对于子区间[left, right]: <ol><li>right 处字符x 出现次数加一</li><li>若次数 <code>cnt[x]</code> 大于0, 那么减小区间(left 右移), <code>cnt[s2[left]]</code> 减一, 直到<code>cnt[x]</code> 不大于0为止</li><li>此时<code>cnt</code>之和一定是不大于0的, 若此时区间长度刚好为 <code>len(s1)</code>, 那么此时 <code>cnt</code>之和一定为0, <code>s1</code>为<code>s2</code>的子串</li></ol></li></ol>`,10),v=n("p",null,[s("时间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",null,"+"),n("mi",null,"m"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n+m)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal"},"m"),n("span",{class:"mclose"},")")])])]),s(" 扫描 s1 和 s2")],-1),m=t(`<p>空间复杂度: O(1), 使用的哈希表长度为定值</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">checkInclusion</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2 <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token comment">// 判断特殊情况</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 哈希表, 字符: 次数</span>
	cnt <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>

	<span class="token comment">// 扫描 s1, 次数值减一</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> s1 <span class="token punctuation">{</span>
		cnt<span class="token punctuation">[</span>c<span class="token operator">-</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 扫描 s2, 移动子区间</span>
	left <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> right<span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> s2 <span class="token punctuation">{</span>
		x <span class="token operator">:=</span> c <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span>
		cnt<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">++</span>
		<span class="token comment">// 次数大于0, 减小区间</span>
		<span class="token keyword">for</span> cnt<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			cnt<span class="token punctuation">[</span>s2<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token operator">-</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span>
			left<span class="token operator">++</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 此时 cnt 之和一定是不大于0的</span>
		<span class="token comment">// 若区间长度和s1相同, 那么cnt之和一定为0</span>
		<span class="token keyword">if</span> right<span class="token operator">-</span>left<span class="token operator">+</span><span class="token number">1</span> <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-2-问题15-字符串中所有的变位词" tabindex="-1"><a class="header-anchor" href="#_3-2-2-问题15-字符串中所有的变位词" aria-hidden="true">#</a> 3.2.2 问题15: 字符串中所有的变位词</h2>`,3),b={href:"https://leetcode.cn/problems/VabMRr/",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>输入字符串s1和s2, 输出s2的所有变位词在字符串s1中的下标.</p><p>假设只包含小写字母.</p><blockquote><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;cbaebabacd&quot;, p = &quot;abc&quot;
输出: [0,6]
解释:
起始索引等于 0 的子串是 &quot;cba&quot;, 它是 &quot;abc&quot; 的变位词。
起始索引等于 6 的子串是 &quot;bac&quot;, 它是 &quot;abc&quot; 的变位词。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;abab&quot;, p = &quot;ab&quot;
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 &quot;ab&quot;, 它是 &quot;ab&quot; 的变位词。
起始索引等于 1 的子串是 &quot;ba&quot;, 它是 &quot;ab&quot; 的变位词。
起始索引等于 2 的子串是 &quot;ab&quot;, 它是 &quot;ab&quot; 的变位词。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示:</strong></p><ul><li><code>1 &lt;= s.length, p.length &lt;= 3 * 104</code></li><li><code>s</code> 和 <code>p</code> 仅包含小写字母</li></ul></blockquote><h3 id="_3-2-2-1-分析" tabindex="-1"><a class="header-anchor" href="#_3-2-2-1-分析" aria-hidden="true">#</a> 3.2.2.1 分析</h3><p>思路和判断变位词相同, 对于s1的子串区间[le, ri], 若子串是s2的变位词, 那么<code>le</code>即位其下标.</p><h3 id="_3-2-2-2-题解" tabindex="-1"><a class="header-anchor" href="#_3-2-2-2-题解" aria-hidden="true">#</a> 3.2.2.2 题解</h3><p>时间复杂度: O(n)</p><p>空间复杂度: O(1)</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">findAnagrams</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token comment">// 判断边界</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	result <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token comment">// 哈希表, 字符:次数</span>
	cnt <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>

	<span class="token comment">// 扫描 p</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> p <span class="token punctuation">{</span>
		cnt<span class="token punctuation">[</span>c<span class="token operator">-</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 扫描 s, 移动子区间</span>
	left <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> right<span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
		x <span class="token operator">:=</span> c <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span>
		cnt<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">++</span>
		<span class="token comment">// 右移左指针, 直到cnt[x]不大于0</span>
		<span class="token keyword">for</span> cnt<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			cnt<span class="token punctuation">[</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token operator">-</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span>
			left<span class="token operator">++</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 当子区间长度等于p长度时, 满足p及其变位词为s的子串</span>
		<span class="token keyword">if</span> right<span class="token operator">-</span>left<span class="token operator">+</span><span class="token number">1</span> <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> left<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-3-问题16-不含重复字符的最长字符串" tabindex="-1"><a class="header-anchor" href="#_3-2-3-问题16-不含重复字符的最长字符串" aria-hidden="true">#</a> 3.2.3 问题16: 不含重复字符的最长字符串</h2>`,10),h={href:"https://leetcode.cn/problems/wtcaE1/",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>输入字符串, 求字符串中不含重复字符的最长子串的长度.</p><blockquote><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;abcabcbb&quot;
输出: 3 
解释: 因为无重复字符的最长子字符串是 &quot;abc&quot;，所以其长度为 3。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;bbbbb&quot;
输出: 1
解释: 因为无重复字符的最长子字符串是 &quot;b&quot;，所以其长度为 1。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;pwwkew&quot;
输出: 3
解释: 因为无重复字符的最长子串是 &quot;wke&quot;，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，&quot;pwke&quot; 是一个子序列，不是子串。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;&quot;
输出: 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>0 &lt;= s.length &lt;= 5 * 104</code></li><li><code>s</code> 由英文字母、数字、符号和空格组成</li></ul></blockquote><h3 id="_3-2-3-1-分析" tabindex="-1"><a class="header-anchor" href="#_3-2-3-1-分析" aria-hidden="true">#</a> 3.2.3.1 分析</h3><p>构建哈希表(字符:出现次数), 若字符串不包含重复字符, 那么哈希表中的值一定不会大于1.</p><p>由于字符串由<code>英文字母、数字、符号和空格组成</code>, 那么哈希表长度为<code>ASCII</code>码个数 256.</p><p>使用双指针来表示子字符串:</p><ol><li>若当前区间满足条件, 右指针右移(增加字符), 继续判断</li><li>若当前区间不满足条件, 左指针右移(减少字符), 继续判断</li><li>找出满足条件的最大长度</li></ol><h3 id="_3-2-3-2-题解" tabindex="-1"><a class="header-anchor" href="#_3-2-3-2-题解" aria-hidden="true">#</a> 3.2.3.2 题解</h3><h4 id="多次遍历哈希表" tabindex="-1"><a class="header-anchor" href="#多次遍历哈希表" aria-hidden="true">#</a> 多次遍历哈希表</h4><ol><li>若为空字符串, 返回0</li><li>构建长度为 256 的哈希表</li><li>扫描字符串, 对于子串区间: <ol><li>区间包含重复字符, 减小区间(删除字符), 直到不包含为止</li><li>区间不包含重复字符, 更新最大长度</li></ol></li></ol><p>时间复杂度: O(n), 但是判断是否包含重复字符需要多次遍历哈希表, 当哈希表较大时增大开销.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> ordastring

<span class="token keyword">func</span> <span class="token function">lengthOfLongestSubstring</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    maxLen <span class="token operator">:=</span> <span class="token number">0</span>

    <span class="token comment">// 边界值</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> maxLen
    <span class="token punctuation">}</span>

    <span class="token comment">// 哈希表, 字符:次数, ASCII共256个</span>
    cnt <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">)</span>

    <span class="token comment">// 扫描 s, 移动子区间</span>
    left <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> right<span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
       cnt<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token operator">++</span>
       <span class="token comment">// 包含重复字符则减小区间</span>
       <span class="token keyword">for</span> <span class="token function">hasGreaterThan1</span><span class="token punctuation">(</span>cnt<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 移除字符</span>
          cnt<span class="token punctuation">[</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">--</span>
          left<span class="token operator">++</span>
       <span class="token punctuation">}</span>
       <span class="token comment">// 更新最大长度</span>
       maxLen <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>maxLen<span class="token punctuation">,</span> right<span class="token operator">-</span>left<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> maxLen
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">hasGreaterThan1</span><span class="token punctuation">(</span>cnt <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> cnt <span class="token punctuation">{</span>
       <span class="token keyword">if</span> n <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token boolean">true</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token punctuation">{</span>
       <span class="token keyword">return</span> a
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用缓存避免遍历哈希表" tabindex="-1"><a class="header-anchor" href="#使用缓存避免遍历哈希表" aria-hidden="true">#</a> 使用缓存避免遍历哈希表</h4><p>使用变量 <code>cntDup</code> 来缓存重复字符的情况.</p><p>对于子区间, 若右指针右移(新增一个字符), 若此时<code>cnt[c] &gt; 1</code>表示出现重复字符, 则:</p><ol><li>左指针右移(删除字符), 判断删除后是否还存在重复字符, 存在则继续减小区间, 直到不存在重复字符为止</li></ol><p>此方法避免多次遍历哈希表, 效率有所提升</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">lengthOfLongestSubstringWithCountDup</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    maxLen <span class="token operator">:=</span> <span class="token number">0</span>

    <span class="token comment">// 边界值</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> maxLen
    <span class="token punctuation">}</span>

    <span class="token comment">// 哈希表, 字符:次数</span>
    cnt <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">)</span>

    <span class="token comment">// 扫描s, 移动子区间</span>
    left <span class="token operator">:=</span> <span class="token number">0</span>
    cntDup <span class="token operator">:=</span> <span class="token number">0</span> <span class="token comment">// 标记是否存在重复字符</span>
    <span class="token keyword">for</span> right<span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
       cnt<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token operator">++</span>
       <span class="token keyword">if</span> cnt<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
          cntDup<span class="token operator">++</span>
       <span class="token punctuation">}</span>
       <span class="token comment">// 存在重复字符,减小区间</span>
       <span class="token keyword">for</span> cntDup <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
          <span class="token comment">// 删除字符</span>
          cnt<span class="token punctuation">[</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">--</span>
          <span class="token comment">// 下个区间是否存在重复字符</span>
          <span class="token keyword">if</span> cnt<span class="token punctuation">[</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
             cntDup<span class="token operator">--</span>
          <span class="token punctuation">}</span>
          left<span class="token operator">++</span>
       <span class="token punctuation">}</span>

       maxLen <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>maxLen<span class="token punctuation">,</span> right<span class="token operator">-</span>left<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> maxLen
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-4-问题17-包含所有字符的最短字符串" tabindex="-1"><a class="header-anchor" href="#_3-2-4-问题17-包含所有字符的最短字符串" aria-hidden="true">#</a> 3.2.4 问题17: 包含所有字符的最短字符串</h2>`,19),x={href:"https://leetcode.cn/problems/M1oyTv/",target:"_blank",rel:"noopener noreferrer"},q=t(`<p>输入字符串s和t, 找出字符串s中包含t中所有字符的<strong>最短子串</strong>.</p><p>若不存在, 返回空字符串; 若存在多个, 返回任意一个.</p><blockquote><p><strong>注意：</strong> 对于 <code>t</code> 中重复字符，我们寻找的子字符串中该字符数量必须不少于 <code>t</code> 中该字符数量。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;ADOBECODEBANC&quot;, t = &quot;ABC&quot;
输出：&quot;BANC&quot; 
解释：最短子字符串 &quot;BANC&quot; 包含了字符串 t 的所有字符 &#39;A&#39;、&#39;B&#39;、&#39;C&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;a&quot;, t = &quot;a&quot;
输出：&quot;a&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;a&quot;, t = &quot;aa&quot;
输出：&quot;&quot;
解释：t 中两个字符 &#39;a&#39; 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length, t.length &lt;= 105</code></li><li><code>s</code> 和 <code>t</code> 由英文字母组成</li></ul><p>**进阶：**你能设计一个在 <code>o(n)</code> 时间内解决此问题的算法吗？</p></blockquote><h3 id="_3-2-4-1-分析" tabindex="-1"><a class="header-anchor" href="#_3-2-4-1-分析" aria-hidden="true">#</a> 3.2.4.1 分析</h3><p>构建长度为 52 的哈希表(字符:次数).</p><p>扫描字符串t, 将出现的字符次数加一.</p><p>扫描字符串s, 对于子区间:</p><ol><li>缓存t中存在但是s中不存在的字符个数 (count). count == 0 时表示区间包含所有t的字符</li><li>字符次数减一, 判断是否包含t中所有字符. 若不包含则增加区间, 直到包含为止</li></ol><h3 id="_3-2-4-2-题解" tabindex="-1"><a class="header-anchor" href="#_3-2-4-2-题解" aria-hidden="true">#</a> 3.2.4.2 题解</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;math&quot;</span>

<span class="token keyword">func</span> <span class="token function">minWindow</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> t <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    minStr <span class="token operator">:=</span> <span class="token string">&quot;&quot;</span>

    <span class="token comment">// 边界</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> minStr
    <span class="token punctuation">}</span>

    <span class="token comment">// 构建哈希表, 字符:次数, 长度为英文字符个数</span>
    m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">byte</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">)</span>

    <span class="token comment">// 扫描 t</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> t <span class="token punctuation">{</span>
       m<span class="token punctuation">[</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 扫描 s, 移动子区间</span>
    left<span class="token punctuation">,</span> right <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>       <span class="token comment">// 当前子区间</span>
    minLen <span class="token operator">:=</span> math<span class="token punctuation">.</span>MaxInt     <span class="token comment">// 最小子串长度</span>
    minLeft<span class="token punctuation">,</span> minRight <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token comment">// 最小子串区间</span>
    count <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>           <span class="token comment">// 区间中未包含的t中字符的个数</span>

    <span class="token comment">// 边界值: 右指针已经到达末尾, 此时刚好包含所有的t中字符</span>
    <span class="token comment">// 需要进行最后一次计算</span>
    <span class="token keyword">for</span> right <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// 存在未包含的t中字符, 需要扩大区间</span>
       <span class="token keyword">if</span> count <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
          <span class="token comment">// 包含t中字符</span>
          <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> m<span class="token punctuation">[</span>s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
             <span class="token comment">// 减少次数</span>
             m<span class="token punctuation">[</span>s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">--</span>
             <span class="token comment">// 已包含全部的当前字符</span>
             <span class="token keyword">if</span> m<span class="token punctuation">[</span>s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                count<span class="token operator">--</span>
             <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// 增大区间</span>
          right<span class="token operator">++</span>
       <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 已包含所有的t中字符, 减小区间</span>
          <span class="token comment">// 记录最小区间</span>
          <span class="token comment">// s[l, r] 长度为 r-l</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">&lt;</span> minLen <span class="token punctuation">{</span>
             minLen <span class="token operator">=</span> right <span class="token operator">-</span> left
             minLeft <span class="token operator">=</span> left
             minRight <span class="token operator">=</span> right
          <span class="token punctuation">}</span>

          <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> m<span class="token punctuation">[</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
             <span class="token comment">// 增加次数</span>
             m<span class="token punctuation">[</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>
             <span class="token comment">// 存在不包含的t中字符</span>
             <span class="token keyword">if</span> m<span class="token punctuation">[</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                count<span class="token operator">++</span>
             <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// 减小区间</span>
          left<span class="token operator">++</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 存在</span>
    <span class="token keyword">if</span> minLen <span class="token operator">&lt;</span> math<span class="token punctuation">.</span>MaxInt <span class="token punctuation">{</span>
       <span class="token keyword">return</span> s<span class="token punctuation">[</span>minLeft<span class="token punctuation">:</span>minRight<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,11),w={href:"https://book.douban.com/subject/35543447/",target:"_blank",rel:"noopener noreferrer"};function _(y,L){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,r,n("p",null,[n("a",d,[s("LCR 014. 字符串的排列"),e(a)])]),k,v,m,n("p",null,[n("a",b,[s("LCR 015. 找到字符串中所有字母异位词"),e(a)])]),g,n("p",null,[n("a",h,[s("LCR 016. 无重复字符的最长子串"),e(a)])]),f,n("p",null,[n("a",x,[s("LCR 017. 最小覆盖子串"),e(a)])]),q,n("ol",null,[n("li",null,[n("a",w,[s("剑指Offer（专项突破版）"),e(a)])])])])}const O=p(i,[["render",_],["__file","03.2.html.vue"]]);export{O as default};
