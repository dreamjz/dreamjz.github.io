const e=JSON.parse('{"key":"v-79bbef41","path":"/leetcode/array/724_Pivot_Index.html","title":"724. Find Pivot Index","lang":"zh-CN","frontmatter":{"title":"724. Find Pivot Index","date":"2022-02-22T00:00:00.000Z","category":["leetcode"],"tag":["array"],"timeline":true},"headers":[{"level":2,"title":"1. 题目描述","slug":"_1-题目描述","link":"#_1-题目描述","children":[]},{"level":2,"title":"2. 示例","slug":"_2-示例","link":"#_2-示例","children":[]},{"level":2,"title":"3. 初见思路","slug":"_3-初见思路","link":"#_3-初见思路","children":[]},{"level":2,"title":"4. 题解","slug":"_4-题解","link":"#_4-题解","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":1.77,"words":530},"filePathRelative":"leetcode/array/724_Pivot_Index.md","localizedDate":"2022年2月22日","excerpt":"<h2> 1. 题目描述</h2>\\n<p>给你一个整数数组 nums ，请计算数组的 中心下标 。</p>\\n<p>数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。</p>\\n<p>如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。</p>\\n<p>如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。</p>\\n<h2> 2. 示例</h2>\\n<p>示例 1：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入：nums = [1, 7, 3, 6, 5, 6]\\n输出：3\\n解释：\\n中心下标是 3 。\\n左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，\\n右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};