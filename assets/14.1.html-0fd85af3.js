const e=JSON.parse('{"key":"v-4ab840b9","path":"/reading/algorithm/offer_oriented/AL_DS/14_dynamic_programming/14.1.html","title":"14.1 动态规划基础","lang":"zh-CN","frontmatter":{"title":"14.1 动态规划基础","date":"2023-09-15T00:00:00.000Z","category":["algorithm"]},"headers":[{"level":2,"title":"14.1.1 分治法 和 动态规划","slug":"_14-1-1-分治法-和-动态规划","link":"#_14-1-1-分治法-和-动态规划","children":[]},{"level":2,"title":"14.1.2 问题88: 爬楼梯的最小成本","slug":"_14-1-2-问题88-爬楼梯的最小成本","link":"#_14-1-2-问题88-爬楼梯的最小成本","children":[{"level":3,"title":"14.1.2.1 分析&题解","slug":"_14-1-2-1-分析-题解","link":"#_14-1-2-1-分析-题解","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":4.85,"words":1456},"filePathRelative":"reading/algorithm/offer_oriented/AL_DS/14_dynamic_programming/14.1.md","localizedDate":"2023年9月15日","excerpt":"<p>若解决一个问题有很多步, 每步都有多个选择, 需要得出最优解或者求出解的数量, 那么就适合使用动态规划.</p>\\n<p>可以看出动态规划和回溯法应用场景类似, 但区别在于:</p>\\n<ul>\\n<li>回溯法: 列出所有的解</li>\\n<li>动态规划: 给出最优解 或 解的数量</li>\\n</ul>\\n<h2> 14.1.1 分治法 和 动态规划</h2>\\n<p><strong>分治法</strong> 使用递归的思路将大问题分解成小问题, 每个小问题之间<strong>没有重叠</strong>部分, 可以直接用递归代码写出算法. 例如: 快速排序.</p>\\n<p><strong>动态规划</strong> 使用递归的思路将大问题分解成小问题, 再将小问题的解合并形成大问题的解. <strong>关键</strong>在于找出小问题的解和大问题解的 <strong>状态转移方程</strong> .</p>"}');export{e as data};
