const e=JSON.parse('{"key":"v-517adfe4","path":"/reading/algorithm/offer_oriented/AL_DS/11_binary_search/11.3.html","title":"11.3 在数值范围内二分查找","lang":"zh-CN","frontmatter":{"title":"11.3 在数值范围内二分查找","date":"2023-09-13T00:00:00.000Z","category":["algorithm"]},"headers":[{"level":2,"title":"11.3.1 问题72: 平方根","slug":"_11-3-1-问题72-平方根","link":"#_11-3-1-问题72-平方根","children":[{"level":3,"title":"11.3.1.1 分析&题解","slug":"_11-3-1-1-分析-题解","link":"#_11-3-1-1-分析-题解","children":[]}]},{"level":2,"title":"11.3.2 问题73: 狒狒吃香蕉","slug":"_11-3-2-问题73-狒狒吃香蕉","link":"#_11-3-2-问题73-狒狒吃香蕉","children":[{"level":3,"title":"11.3.2.1 分析&题解","slug":"_11-3-2-1-分析-题解","link":"#_11-3-2-1-分析-题解","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1694640689000},"readingTime":{"minutes":2.5,"words":751},"filePathRelative":"reading/algorithm/offer_oriented/AL_DS/11_binary_search/11.3.md","localizedDate":"2023年9月13日","excerpt":"<p>使用二分查找的要点:</p>\\n<ul>\\n<li>解的范围确定, 即解的最大/小值已知</li>\\n<li>每次都能将范围缩小<strong>一半</strong></li>\\n</ul>\\n<h2> 11.3.1 问题72: 平方根</h2>\\n<p><a href=\\"https://leetcode.cn/problems/jJ0w9p/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">LCR 072. x 的平方根</a></p>\\n<blockquote>\\n<p>给定一个非负整数 <code>x</code> ，计算并返回 <code>x</code> 的平方根，即实现 <code>int sqrt(int x)</code> 函数。</p>\\n<p>正数的平方根有两个，只输出其中的正数平方根。</p>\\n<p>如果平方根不是整数，输出只保留整数的部分，小数部分将被舍去。</p>\\n<p><strong>示例 1:</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入: x = 4\\n输出: 2\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>示例 2:</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入: x = 8\\n输出: 2\\n解释: 8 的平方根是 2.82842...，由于小数部分将被舍去，所以返回 2\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>提示:</strong></p>\\n<ul>\\n<li><code>0 &lt;= x &lt;= 2^31 - 1</code></li>\\n</ul>\\n</blockquote>"}');export{e as data};
