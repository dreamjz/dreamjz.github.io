const e=JSON.parse('{"key":"v-0894e1ba","path":"/leetcode/solution/102.binary_tree_level_order_traversal.html","title":"102. Binary Tree Level Order Traversal","lang":"zh-CN","frontmatter":{"title":"102. Binary Tree Level Order Traversal","date":"2023-09-18T00:00:00.000Z","category":["algorithm"]},"headers":[{"level":2,"title":"1. 广度优先 BFS","slug":"_1-广度优先-bfs","link":"#_1-广度优先-bfs","children":[{"level":3,"title":"1.1 双队列","slug":"_1-1-双队列","link":"#_1-1-双队列","children":[]},{"level":3,"title":"1.2 单队列","slug":"_1-2-单队列","link":"#_1-2-单队列","children":[]}]},{"level":2,"title":"2. 深度优先 DFS","slug":"_2-深度优先-dfs","link":"#_2-深度优先-dfs","children":[{"level":3,"title":"2.1 递归","slug":"_2-1-递归","link":"#_2-1-递归","children":[]},{"level":3,"title":"2.2 迭代+栈","slug":"_2-2-迭代-栈","link":"#_2-2-迭代-栈","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":2.84,"words":853},"filePathRelative":"leetcode/solution/102.binary_tree_level_order_traversal.md","localizedDate":"2023年9月18日","excerpt":"<p><a href=\\"https://leetcode.cn/problems/binary-tree-level-order-traversal/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">102. 二叉树的层序遍历</a></p>\\n<blockquote>\\n<p>给你二叉树的根节点 <code>root</code> ，返回其节点值的 <strong>层序遍历</strong> 。 （即逐层地，从左到右访问所有节点）。</p>\\n<p><strong>示例 1：</strong></p>\\n<figure><img src=\\"https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入：root = [3,9,20,null,null,15,7]\\n输出：[[3],[9,20],[15,7]]\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>示例 2：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入：root = [1]\\n输出：[[1]]\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>示例 3：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入：root = []\\n输出：[]\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>提示：</strong></p>\\n<ul>\\n<li>树中节点数目在范围 <code>[0, 2000]</code> 内</li>\\n<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>\\n</ul>\\n</blockquote>"}');export{e as data};