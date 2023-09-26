const e=JSON.parse('{"key":"v-05eaf603","path":"/leetcode/146.LRU_cache.html","title":"146. LRU Cache","lang":"zh-CN","frontmatter":{"title":"146. LRU Cache","date":"2023-09-18T00:00:00.000Z","category":["algorithm"]},"headers":[{"level":2,"title":"1. 哈希表 + 双向链表","slug":"_1-哈希表-双向链表","link":"#_1-哈希表-双向链表","children":[]}],"readingTime":{"minutes":2.36,"words":707},"filePathRelative":"leetcode/146.LRU_cache.md","localizedDate":"2023年9月18日","excerpt":"<p><a href=\\"https://leetcode.cn/problems/lru-cache/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">146. LRU 缓存</a></p>\\n<blockquote>\\n<p>请你设计并实现一个满足 <a href=\\"https://baike.baidu.com/item/LRU\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">LRU (最近最少使用) 缓存</a> 约束的数据结构。</p>\\n<p>实现 <code>LRUCache</code> 类：</p>\\n<ul>\\n<li><code>LRUCache(int capacity)</code> 以 <strong>正整数</strong> 作为容量 <code>capacity</code> 初始化 LRU 缓存</li>\\n<li><code>int get(int key)</code> 如果关键字 <code>key</code> 存在于缓存中，则返回关键字的值，否则返回 <code>-1</code> 。</li>\\n<li><code>void put(int key, int value)</code> 如果关键字 <code>key</code> 已经存在，则变更其数据值 <code>value</code> ；如果不存在，则向缓存中插入该组 <code>key-value</code> 。如果插入操作导致关键字数量超过 <code>capacity</code> ，则应该 <strong>逐出</strong> 最久未使用的关键字。</li>\\n</ul>\\n<p>函数 <code>get</code> 和 <code>put</code> 必须以 <code>O(1)</code> 的平均时间复杂度运行。</p>\\n<p><strong>示例：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入\\n[\\"LRUCache\\", \\"put\\", \\"put\\", \\"get\\", \\"put\\", \\"get\\", \\"put\\", \\"get\\", \\"get\\", \\"get\\"]\\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]\\n输出\\n[null, null, null, 1, null, -1, null, -1, 3, 4]\\n\\n解释\\nLRUCache lRUCache = new LRUCache(2);\\nlRUCache.put(1, 1); // 缓存是 {1=1}\\nlRUCache.put(2, 2); // 缓存是 {1=1, 2=2}\\nlRUCache.get(1);    // 返回 1\\nlRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}\\nlRUCache.get(2);    // 返回 -1 (未找到)\\nlRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}\\nlRUCache.get(1);    // 返回 -1 (未找到)\\nlRUCache.get(3);    // 返回 3\\nlRUCache.get(4);    // 返回 4\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>提示：</strong></p>\\n<ul>\\n<li><code>1 &lt;= capacity &lt;= 3000</code></li>\\n<li><code>0 &lt;= key &lt;= 10000</code></li>\\n<li><code>0 &lt;= value &lt;= 10^5</code></li>\\n<li>最多调用 <code>2 * 10^5</code> 次 <code>get</code> 和 <code>put</code></li>\\n</ul>\\n</blockquote>"}');export{e as data};