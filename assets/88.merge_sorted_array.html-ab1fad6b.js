const e=JSON.parse('{"key":"v-1af74c42","path":"/leetcode/solution/88.merge_sorted_array.html","title":"88. Merge Sorted Array","lang":"zh-CN","frontmatter":{"title":"88. Merge Sorted Array","date":"2023-09-20T00:00:00.000Z","category":["algorithm"]},"headers":[{"level":2,"title":"1. 使用辅助数组","slug":"_1-使用辅助数组","link":"#_1-使用辅助数组","children":[{"level":3,"title":"1.1 使用 append","slug":"_1-1-使用-append","link":"#_1-1-使用-append","children":[]},{"level":3,"title":"1.2 使用指针","slug":"_1-2-使用指针","link":"#_1-2-使用指针","children":[]}]},{"level":2,"title":"2. 无辅助数组","slug":"_2-无辅助数组","link":"#_2-无辅助数组","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":2.1,"words":630},"filePathRelative":"leetcode/solution/88.merge_sorted_array.md","localizedDate":"2023年9月20日","excerpt":"<p><a href=\\"https://leetcode.cn/problems/merge-sorted-array/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">88. 合并两个有序数组</a></p>\\n<blockquote>\\n<p>给你两个按 <strong>非递减顺序</strong> 排列的整数数组 <code>nums1</code> 和 <code>nums2</code>，另有两个整数 <code>m</code> 和 <code>n</code> ，分别表示 <code>nums1</code> 和 <code>nums2</code> 中的元素数目。</p>\\n<p>请你 <strong>合并</strong> <code>nums2</code> 到 <code>nums1</code> 中，使合并后的数组同样按 <strong>非递减顺序</strong> 排列。</p>\\n<p>**注意：**最终，合并后数组不应由函数返回，而是存储在数组 <code>nums1</code> 中。为了应对这种情况，<code>nums1</code> 的初始长度为 <code>m + n</code>，其中前 <code>m</code> 个元素表示应合并的元素，后 <code>n</code> 个元素为 <code>0</code> ，应忽略。<code>nums2</code> 的长度为 <code>n</code> 。</p>\\n<p><strong>示例 1：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\\n输出：[1,2,2,3,5,6]\\n解释：需要合并 [1,2,3] 和 [2,5,6] 。\\n合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>示例 2：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入：nums1 = [1], m = 1, nums2 = [], n = 0\\n输出：[1]\\n解释：需要合并 [1] 和 [] 。\\n合并结果是 [1] 。\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>示例 3：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入：nums1 = [0], m = 0, nums2 = [1], n = 1\\n输出：[1]\\n解释：需要合并的数组是 [] 和 [1] 。\\n合并结果是 [1] 。\\n注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>提示：</strong></p>\\n<ul>\\n<li><code>nums1.length == m + n</code></li>\\n<li><code>nums2.length == n</code></li>\\n<li><code>0 &lt;= m, n &lt;= 200</code></li>\\n<li><code>1 &lt;= m + n &lt;= 200</code></li>\\n<li><code>-10^9 &lt;= nums1[i], nums2[j] &lt;= 10^9</code></li>\\n</ul>\\n</blockquote>"}');export{e as data};
