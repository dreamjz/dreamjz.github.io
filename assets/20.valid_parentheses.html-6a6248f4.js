import{_ as l,Z as p,$ as o,a0 as n,a1 as s,a2 as e,a3 as t,H as c}from"./framework-09afcf0b.js";const i={},u={href:"https://leetcode.cn/problems/valid-parentheses/",target:"_blank",rel:"noopener noreferrer"},r=t(`<blockquote><p>给定一个只包括 <code>&#39;(&#39;</code>，<code>&#39;)&#39;</code>，<code>&#39;{&#39;</code>，<code>&#39;}&#39;</code>，<code>&#39;[&#39;</code>，<code>&#39;]&#39;</code> 的字符串 <code>s</code> ，判断字符串是否有效。</p><p>有效字符串需满足：</p><ol><li>左括号必须用相同类型的右括号闭合。</li><li>左括号必须以正确的顺序闭合。</li><li>每个右括号都有一个对应的相同类型的左括号。</li></ol><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;()&quot;
输出：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;()[]{}&quot;
输出：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;(]&quot;
输出：false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s</code> 仅由括号 <code>&#39;()[]{}&#39;</code> 组成</li></ul></blockquote><h2 id="_1-栈" tabindex="-1"><a class="header-anchor" href="#_1-栈" aria-hidden="true">#</a> 1. 栈</h2><p>由于括号只能和最近的括号配对, 故使用栈来存储括号.</p>`,3),d=n("ol",null,[n("li",null,[s("构建哈希表, 存储括号对, 使得查询时间为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])])]),n("li",null,[s("遍历字符串: "),n("ul",null,[n("li",null,[s("若是右括号: "),n("ul",null,[n("li",null,"栈为空或栈顶元素不匹配, 不合法"),n("li",null,"匹配, 栈顶出栈")])]),n("li",null,"左括号入栈")])]),n("li",null,[s("遍历结束 "),n("ul",null,[n("li",null,"栈为空则括号完全匹配"),n("li",null,"不为空, 还剩下左括号")])])],-1),k=t(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">isValid</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    pairs <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">byte</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span>
        <span class="token char">&#39;)&#39;</span><span class="token punctuation">:</span> <span class="token char">&#39;(&#39;</span><span class="token punctuation">,</span>
        <span class="token char">&#39;]&#39;</span><span class="token punctuation">:</span> <span class="token char">&#39;[&#39;</span><span class="token punctuation">,</span>
        <span class="token char">&#39;}&#39;</span><span class="token punctuation">:</span> <span class="token char">&#39;{&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    st <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
        c <span class="token operator">:=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        p<span class="token punctuation">,</span> ok <span class="token operator">:=</span> pairs<span class="token punctuation">[</span>c<span class="token punctuation">]</span>
        
        <span class="token comment">// 右括号</span>
        <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
            <span class="token comment">// 为空 || 不匹配</span>
            <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> p <span class="token operator">!=</span> st<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 匹配</span>
            st <span class="token operator">=</span> st<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">// 左括号</span>
            st <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>st<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 合法</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,2),v={href:"https://leetcode.cn/problems/valid-parentheses/solutions",target:"_blank",rel:"noopener noreferrer"};function m(b,h){const a=c("ExternalLinkIcon");return p(),o("div",null,[n("p",null,[n("a",u,[s("20. 有效的括号"),e(a)])]),r,d,k,n("ol",null,[n("li",null,[n("a",v,[s("https://leetcode.cn/problems/valid-parentheses/solutions"),e(a)])])])])}const f=l(i,[["render",m],["__file","20.valid_parentheses.html.vue"]]);export{f as default};
