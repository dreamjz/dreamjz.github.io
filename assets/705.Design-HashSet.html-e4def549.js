const e=JSON.parse('{"key":"v-80131edc","path":"/leetcode/hashtable/705.Design-HashSet.html","title":"705. Design HashSet","lang":"zh-CN","frontmatter":{"title":"705. Design HashSet","date":"2022-03-14T00:00:00.000Z","category":["leetcode"],"timeline":true},"headers":[{"level":2,"title":"1. 题目描述","slug":"_1-题目描述","link":"#_1-题目描述","children":[]},{"level":2,"title":"2. 题解","slug":"_2-题解","link":"#_2-题解","children":[{"level":3,"title":"2.1 概念","slug":"_2-1-概念","link":"#_2-1-概念","children":[]},{"level":3,"title":"2.2 链地址法","slug":"_2-2-链地址法","link":"#_2-2-链地址法","children":[]},{"level":3,"title":"2.3 复杂度分析","slug":"_2-3-复杂度分析","link":"#_2-3-复杂度分析","children":[]}]},{"level":2,"title":"3. Golang list","slug":"_3-golang-list","link":"#_3-golang-list","children":[{"level":3,"title":"3.1 用法","slug":"_3-1-用法","link":"#_3-1-用法","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":4.56,"words":1368},"filePathRelative":"leetcode/hashtable/705.Design-HashSet.md","localizedDate":"2022年3月14日","excerpt":"<h2> 1. 题目描述</h2>\\n<p>实现 <code>MyHashSet</code>:</p>\\n<ul>\\n<li><code>void add(key)</code> : 向哈希集合中插入值 <code>key</code></li>\\n<li><code>bool contains(key)</code>: 返回哈希集合中是否存在这个值 <code>key</code></li>\\n<li><code>void remove(key)</code>: 将给定值 <code>key</code> 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做</li>\\n</ul>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入：\\n[\\"MyHashSet\\", \\"add\\", \\"add\\", \\"contains\\", \\"contains\\", \\"add\\", \\"contains\\", \\"remove\\", \\"contains\\"]\\n[[], [1], [2], [1], [3], [2], [2], [2], [2]]\\n输出：\\n[null, null, null, true, false, null, true, null, false]\\n\\n解释：\\nMyHashSet myHashSet = new MyHashSet();\\nmyHashSet.add(1);      // set = [1]\\nmyHashSet.add(2);      // set = [1, 2]\\nmyHashSet.contains(1); // 返回 True\\nmyHashSet.contains(3); // 返回 False ，（未找到）\\nmyHashSet.add(2);      // set = [1, 2]\\nmyHashSet.contains(2); // 返回 True\\nmyHashSet.remove(2);   // set = [1]\\nmyHashSet.contains(2); // 返回 False ，（已移除）\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
