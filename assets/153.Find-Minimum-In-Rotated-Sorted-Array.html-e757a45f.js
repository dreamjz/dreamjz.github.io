const e=JSON.parse('{"key":"v-1e6f1d5c","path":"/leetcode/category/array/153.Find-Minimum-In-Rotated-Sorted-Array.html","title":"153.Find Minimum In Rotated Sorted Array","lang":"zh-CN","frontmatter":{"title":"153.Find Minimum In Rotated Sorted Array","date":"2022-03-23T00:00:00.000Z","category":["leetcode"],"tag":["array"],"timeline":true},"headers":[{"level":2,"title":"1. 题目描述","slug":"_1-题目描述","link":"#_1-题目描述","children":[]},{"level":2,"title":"2. 题解","slug":"_2-题解","link":"#_2-题解","children":[{"level":3,"title":"2.1 直接搜索","slug":"_2-1-直接搜索","link":"#_2-1-直接搜索","children":[]},{"level":3,"title":"2.2 二分查找","slug":"_2-2-二分查找","link":"#_2-2-二分查找","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":2.64,"words":792},"filePathRelative":"leetcode/category/array/153.Find-Minimum-In-Rotated-Sorted-Array.md","localizedDate":"2022年3月23日","excerpt":"<h2> 1. 题目描述</h2>\\n<p>已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次旋转之后，得到输入数组。</p>\\n<p>数组 <code>a[0], a[1], ..., a[n-1]</code> 旋转一次之后为 <code>a[n-1], a[0], ..., a[n-2]</code> 。</p>\\n<p>给一个元素值互不相同的数组 <code>nums</code>, 原来是一个升序排列的数组，并经过了若干次旋转，找出其中的最小元素。</p>\\n<p>必须设计一个时间复杂度为 <em>O(logn)</em> 的算法解决此问题。</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>示例 1：\\n输入：nums = [3,4,5,1,2]\\n输出：1\\n解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。\\n\\n示例 2：\\n输入：nums = [4,5,6,7,0,1,2]\\n输出：0\\n解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。\\n\\n示例 3：\\n输入：nums = [11,13,15,17]\\n输出：11\\n解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
