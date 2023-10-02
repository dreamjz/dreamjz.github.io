const e=JSON.parse('{"key":"v-dab163b2","path":"/leetcode/solution/25.reverse_nodes_in_k_group.html","title":"25. Reverse Nodes in k-Group","lang":"zh-CN","frontmatter":{"title":"25. Reverse Nodes in k-Group","date":"2023-09-18T00:00:00.000Z","category":["algorithm"]},"headers":[{"level":2,"title":"1. 流程模拟","slug":"_1-流程模拟","link":"#_1-流程模拟","children":[]},{"level":2,"title":"2. 变形: 不满k个也反转","slug":"_2-变形-不满k个也反转","link":"#_2-变形-不满k个也反转","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":1.58,"words":473},"filePathRelative":"leetcode/solution/25.reverse_nodes_in_k_group.md","localizedDate":"2023年9月18日","excerpt":"<p><a href=\\"https://leetcode.cn/problems/reverse-nodes-in-k-group/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">25. K 个一组翻转链表</a></p>\\n<blockquote>\\n<p>给你链表的头节点 <code>head</code> ，每 <code>k</code> 个节点一组进行翻转，请你返回修改后的链表。</p>\\n<p><code>k</code> 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 <code>k</code> 的整数倍，那么请将最后剩余的节点保持原有顺序。</p>\\n<p>你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。</p>\\n<p><strong>示例 1：</strong></p>\\n<figure><img src=\\"https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入：head = [1,2,3,4,5], k = 2\\n输出：[2,1,4,3,5]\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>示例 2：</strong></p>\\n<figure><img src=\\"https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入：head = [1,2,3,4,5], k = 3\\n输出：[3,2,1,4,5]\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>提示：</strong></p>\\n<ul>\\n<li>链表中的节点数目为 <code>n</code></li>\\n<li><code>1 &lt;= k &lt;= n &lt;= 5000</code></li>\\n<li><code>0 &lt;= Node.val &lt;= 1000</code></li>\\n</ul>\\n</blockquote>"}');export{e as data};
