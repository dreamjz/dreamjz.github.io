import{_ as a,X as e,Y as t,Z as n,$ as p,a0 as i,a1 as o,F as l}from"./framework-8cb7ec75.js";const c={},u=o(`<h2 id="_1-题目描述" tabindex="-1"><a class="header-anchor" href="#_1-题目描述" aria-hidden="true">#</a> 1. 题目描述</h2><p>给你一个整数数组 nums ，请计算数组的 中心下标 。</p><p>数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。</p><p>如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。</p><p>如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。</p><h2 id="_2-示例" tabindex="-1"><a class="header-anchor" href="#_2-示例" aria-hidden="true">#</a> 2. 示例</h2><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [1, 7, 3, 6, 5, 6]
输出：3
解释：
中心下标是 3 。
左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [1, 2, 3]
输出：-1
解释：
数组中不存在满足此条件的中心下标
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [2, 1, -1]
输出：0
解释：
中心下标是 0 。
左侧数之和 sum = 0 ，（下标 0 左侧不存在元素），
右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-初见思路" tabindex="-1"><a class="header-anchor" href="#_3-初见思路" aria-hidden="true">#</a> 3. 初见思路</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">pivotIndex</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        left <span class="token operator">:=</span> <span class="token function">calSlice</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        right <span class="token operator">:=</span> <span class="token function">calSlice</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> left <span class="token operator">==</span> right <span class="token punctuation">{</span>
            <span class="token keyword">return</span> i
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">calSlice</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    sum <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> v
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历数组，计算每个元素两边的和是否相等，此方式的时间复杂度较高。</p><h2 id="_4-题解" tabindex="-1"><a class="header-anchor" href="#_4-题解" aria-hidden="true">#</a> 4. 题解</h2><p>记数组全部元素之和为 <em>total</em>, 当遍历到第 <em>i</em> 个元素时，设其左边的元素和为 <em>sum</em>, 则右边的元素和为 total - nums<sub>i</sub> - sum, 若左右两边之和相等则有 sum = total - nums<sub>i</sub> - sum, 即 2*sum + num<sub>i</sub> = total 。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">pivotIndex</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    total <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        total <span class="token operator">+=</span> v
    <span class="token punctuation">}</span>

    sum <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token number">2</span><span class="token operator">*</span>sum <span class="token operator">+</span> v <span class="token operator">==</span> total <span class="token punctuation">{</span>
            <span class="token keyword">return</span> i
        <span class="token punctuation">}</span>
        sum <span class="token operator">+=</span> v
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong></p><ul><li>时间复杂度：O(n)<em>O</em>(<em>n</em>)，其中 <em>n</em> 为数组的长度。</li><li>空间复杂度：O(1)<em>O</em>(1)。</li></ul><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,21),r={href:"https://leetcode-cn.com/problems/find-pivot-index/",target:"_blank",rel:"noopener noreferrer"};function d(m,v){const s=l("ExternalLinkIcon");return e(),t("div",null,[u,n("ol",null,[n("li",null,[n("a",r,[p("724. find_pivot_index"),i(s)])])])])}const b=a(c,[["render",d],["__file","724_Pivot_Index.html.vue"]]);export{b as default};
