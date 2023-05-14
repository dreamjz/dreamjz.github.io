import{_ as a,Z as e,$ as t,a0 as n,a1 as p,a2 as o,a3 as i,H as c}from"./framework-09afcf0b.js";const l={},r=i(`<h2 id="_1-题目描述" tabindex="-1"><a class="header-anchor" href="#_1-题目描述" aria-hidden="true">#</a> 1. 题目描述</h2><p>给定一个字符串 s，翻转每个单词的字符顺序，同时仍保留空格和单词的初始顺序。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1：
输入：s = &quot;Let&#39;s take LeetCode contest&quot;
输出：&quot;s&#39;teL ekat edoCteeL tsetnoc&quot;

示例 2:
输入： s = &quot;God Ding&quot;
输出：&quot;doG gniD&quot;
 
提示：
1 &lt;= s.length &lt;= 5 * 104
s 包含可打印的 ASCII 字符。
s 不包含任何开头或结尾空格。
s 里 至少 有一个词。
s 中的所有单词都用一个空格隔开。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-题解" tabindex="-1"><a class="header-anchor" href="#_2-题解" aria-hidden="true">#</a> 2. 题解</h2><p>此题可以看做是 <a href="">151</a> 的简化版本，没有多余的空格并且字符串不会为空。可以使用快慢指针来确定单词边界，翻转每个单词。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token comment">// 使用快慢指针</span>
    left<span class="token punctuation">,</span> right <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token keyword">for</span> right <span class="token operator">&lt;</span> n <span class="token punctuation">{</span>
        <span class="token comment">// find space</span>
        <span class="token keyword">for</span> right <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span> <span class="token punctuation">{</span>
            right<span class="token operator">++</span>
        <span class="token punctuation">}</span> 
        <span class="token function">reverseByteSlice</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
        right<span class="token operator">++</span>
        left <span class="token operator">=</span> right
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">reverseByteSlice</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> start<span class="token punctuation">,</span> end <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">for</span> start <span class="token operator">&lt;</span> end <span class="token punctuation">{</span>
        <span class="token comment">// exchange</span>
        b<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>start<span class="token punctuation">]</span>
        start<span class="token operator">++</span>
        end<span class="token operator">--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,7),u={href:"https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=c("ExternalLinkIcon");return e(),t("div",null,[r,n("ol",null,[n("li",null,[n("a",u,[p("557. Reverse Words In a String III"),o(s)])])])])}const m=a(l,[["render",d],["__file","557.Reverse-Words-In-a-String-III.html.vue"]]);export{m as default};
