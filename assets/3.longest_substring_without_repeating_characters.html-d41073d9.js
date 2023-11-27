import{_ as a,Z as e,$ as t,a0 as n,a1 as o,a2 as c,a4 as p,H as i}from"./framework-d03928c9.js";const l={},u={href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/",target:"_blank",rel:"noopener noreferrer"},d=p(`<blockquote><p>给定一个字符串 <code>s</code> ，请你找出其中不含有重复字符的 <strong>最长子串</strong> 的长度。</p><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;abcabcbb&quot;
输出: 3 
解释: 因为无重复字符的最长子串是 &quot;abc&quot;，所以其长度为 3。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;bbbbb&quot;
输出: 1
解释: 因为无重复字符的最长子串是 &quot;b&quot;，所以其长度为 1。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: s = &quot;pwwkew&quot;
输出: 3
解释: 因为无重复字符的最长子串是 &quot;wke&quot;，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，&quot;pwke&quot; 是一个子序列，不是子串。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>0 &lt;= s.length &lt;= 5 * 10^4</code></li><li><code>s</code> 由英文字母、数字、符号和空格组成</li></ul></blockquote><h2 id="_1-滑动窗口" tabindex="-1"><a class="header-anchor" href="#_1-滑动窗口" aria-hidden="true">#</a> 1. 滑动窗口</h2><p>对于区间<code>[i,j]</code>, 使用哈希表<code>cnts</code>统计区间内字符的出现的次数. 若字符的次数全部都为1, 则表示其是无重复子串.</p><p>使用<code>cntDup</code>统计重复字符的个数, 若存在重复字符, 就减小区间并更新次数, 直到不存在重复字符为止.</p><p>流程如下:</p><ol><li>遍历字符串<code>S</code>, 对于区间<code>[i,j]</code>, <code>i</code>和<code>j</code>从<code>0</code>开始.</li><li>统计<code>[i,j]</code>的字符出现次数 <ul><li>若存在字符次数为 2, 表示有重复, 则<code>cntDup</code>增加</li></ul></li><li>若区间<code>[i,j]</code>存在重复字符(<code>cntDup &gt; 0</code>), 减小区间(<code>i++</code>), 删除字符. <ul><li>若删除字符后, 字符的次数为1, 那么重复字符的个数减少<code>cntDup--</code>, 直到无重复字符</li></ul></li><li>当前区间<code>[i,j]</code>表示一个无重复字符子串, 记录其长度, 更新最大长度<code>maxLen</code>;</li><li>继续步骤 2), 直到 <code>j</code>到达字符串末尾<code>j &gt; len(s)</code>.</li><li>返回最大长度</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">lengthOfLongestSubstring</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token comment">// 边界</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    cnts <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">)</span> <span class="token comment">// 字符次数</span>
    cntDup <span class="token operator">:=</span> <span class="token number">0</span>              <span class="token comment">// 重复字符个数</span>
    maxLen <span class="token operator">:=</span> <span class="token number">1</span>
    
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
        cj <span class="token operator">:=</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        cnts<span class="token punctuation">[</span>cj<span class="token punctuation">]</span><span class="token operator">++</span>
        <span class="token comment">// 出现重复</span>
        <span class="token keyword">if</span> cnts<span class="token punctuation">[</span>cj<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
            cntDup<span class="token operator">++</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 存在重复则减小区间</span>
        <span class="token keyword">for</span> cntDup <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            ci <span class="token operator">:=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            cnts<span class="token punctuation">[</span>ci<span class="token punctuation">]</span><span class="token operator">--</span>
            i<span class="token operator">++</span>
             
            <span class="token keyword">if</span> cnts<span class="token punctuation">[</span>ci<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                cntDup<span class="token operator">--</span>
            <span class="token punctuation">}</span> 
        <span class="token punctuation">}</span>

        curLen <span class="token operator">:=</span> j<span class="token operator">-</span>i<span class="token operator">+</span><span class="token number">1</span>
        <span class="token keyword">if</span> curLen <span class="token operator">&gt;</span> maxLen <span class="token punctuation">{</span>
            maxLen <span class="token operator">=</span> curLen
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> maxLen
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>因为仅包含ASCII 码, 可以用数组当作哈希表</li></ul>`,8);function r(v,k){const s=i("ExternalLinkIcon");return e(),t("div",null,[n("p",null,[n("a",u,[o("3. 无重复字符的最长子串"),c(s)])]),d])}const b=a(l,[["render",r],["__file","3.longest_substring_without_repeating_characters.html.vue"]]);export{b as default};
