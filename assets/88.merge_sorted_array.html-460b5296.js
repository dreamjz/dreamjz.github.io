import{_ as p,Z as t,$ as o,a0 as n,a1 as a,a2 as e,a3 as c,H as l}from"./framework-09afcf0b.js";const i={},u={href:"https://leetcode.cn/problems/merge-sorted-array/",target:"_blank",rel:"noopener noreferrer"},r=c(`<blockquote><p>给你两个按 <strong>非递减顺序</strong> 排列的整数数组 <code>nums1</code> 和 <code>nums2</code>，另有两个整数 <code>m</code> 和 <code>n</code> ，分别表示 <code>nums1</code> 和 <code>nums2</code> 中的元素数目。</p><p>请你 <strong>合并</strong> <code>nums2</code> 到 <code>nums1</code> 中，使合并后的数组同样按 <strong>非递减顺序</strong> 排列。</p><p>**注意：**最终，合并后数组不应由函数返回，而是存储在数组 <code>nums1</code> 中。为了应对这种情况，<code>nums1</code> 的初始长度为 <code>m + n</code>，其中前 <code>m</code> 个元素表示应合并的元素，后 <code>n</code> 个元素为 <code>0</code> ，应忽略。<code>nums2</code> 的长度为 <code>n</code> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>nums1.length == m + n</code></li><li><code>nums2.length == n</code></li><li><code>0 &lt;= m, n &lt;= 200</code></li><li><code>1 &lt;= m + n &lt;= 200</code></li><li><code>-10^9 &lt;= nums1[i], nums2[j] &lt;= 10^9</code></li></ul></blockquote><h2 id="_1-使用辅助数组" tabindex="-1"><a class="header-anchor" href="#_1-使用辅助数组" aria-hidden="true">#</a> 1. 使用辅助数组</h2><h3 id="_1-1-使用-append" tabindex="-1"><a class="header-anchor" href="#_1-1-使用-append" aria-hidden="true">#</a> 1.1 使用 append</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">merge</span><span class="token punctuation">(</span>nums1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> m <span class="token builtin">int</span><span class="token punctuation">,</span> nums2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token comment">// 辅助数组</span>
    res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> m<span class="token operator">+</span>n<span class="token punctuation">)</span>
    p1<span class="token punctuation">,</span> p2 <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>

    <span class="token keyword">for</span> p1 <span class="token operator">&lt;</span> m <span class="token operator">&amp;&amp;</span> p2 <span class="token operator">&lt;</span> n <span class="token punctuation">{</span>
        <span class="token keyword">if</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span><span class="token punctuation">)</span>
            p1<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">)</span>
            p2<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> p1 <span class="token operator">==</span> m <span class="token punctuation">{</span>
        res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">copy</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-使用指针" tabindex="-1"><a class="header-anchor" href="#_1-2-使用指针" aria-hidden="true">#</a> 1.2 使用指针</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">merge</span><span class="token punctuation">(</span>nums1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> m <span class="token builtin">int</span><span class="token punctuation">,</span> nums2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token comment">// 辅助数组</span>
    res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> m<span class="token operator">+</span>n<span class="token punctuation">)</span> 
    p1<span class="token punctuation">,</span> p2 <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    p3 <span class="token operator">:=</span> <span class="token number">0</span> 

    <span class="token keyword">for</span> p3 <span class="token operator">&lt;</span> m<span class="token operator">+</span>n <span class="token punctuation">{</span>
        val <span class="token operator">:=</span> <span class="token number">0</span>
        <span class="token keyword">if</span> p1 <span class="token operator">&gt;</span> m<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
            val <span class="token operator">=</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span>
            p2<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> p2 <span class="token operator">&gt;</span> n<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
            val <span class="token operator">=</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span>
            p1<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            val <span class="token operator">=</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span>
            p1<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            val <span class="token operator">=</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span>
            p2<span class="token operator">++</span>
        <span class="token punctuation">}</span>

        res<span class="token punctuation">[</span>p3<span class="token punctuation">]</span> <span class="token operator">=</span> val
        p3<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token function">copy</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-无辅助数组" tabindex="-1"><a class="header-anchor" href="#_2-无辅助数组" aria-hidden="true">#</a> 2. 无辅助数组</h2><p>因为<code>nums1</code>需要直接将结果插入<code>nums1</code>中, 那么采用倒序插入的方式, 避免将原数据覆盖</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">merge</span><span class="token punctuation">(</span>nums1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> m <span class="token builtin">int</span><span class="token punctuation">,</span> nums2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token comment">// 辅助数组</span>
    res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> m<span class="token operator">+</span>n<span class="token punctuation">)</span> 
    p1<span class="token punctuation">,</span> p2 <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    p3 <span class="token operator">:=</span> <span class="token number">0</span> 

    <span class="token keyword">for</span> p3 <span class="token operator">&lt;</span> m<span class="token operator">+</span>n <span class="token punctuation">{</span>
        val <span class="token operator">:=</span> <span class="token number">0</span>
        <span class="token keyword">if</span> p1 <span class="token operator">&gt;</span> m<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
            val <span class="token operator">=</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span>
            p2<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> p2 <span class="token operator">&gt;</span> n<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
            val <span class="token operator">=</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span>
            p1<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            val <span class="token operator">=</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span>
            p1<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            val <span class="token operator">=</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span>
            p2<span class="token operator">++</span>
        <span class="token punctuation">}</span>

        res<span class="token punctuation">[</span>p3<span class="token punctuation">]</span> <span class="token operator">=</span> val
        p3<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token function">copy</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,10),d={href:"https://leetcode.cn/problems/merge-sorted-array/solutions",target:"_blank",rel:"noopener noreferrer"};function k(m,v){const s=l("ExternalLinkIcon");return t(),o("div",null,[n("p",null,[n("a",u,[a("88. 合并两个有序数组"),e(s)])]),r,n("ol",null,[n("li",null,[n("a",d,[a("https://leetcode.cn/problems/merge-sorted-array/solutions"),e(s)])])])])}const g=p(i,[["render",k],["__file","88.merge_sorted_array.html.vue"]]);export{g as default};
