const n=JSON.parse('{"key":"v-4d1c7b83","path":"/reading/algorithm/offer_oriented/AL_DS/04_List/04.2.html","title":"4.2 哨兵节点","lang":"zh-CN","frontmatter":{"title":"4.2 哨兵节点","date":"2023-09-03T00:00:00.000Z","category":["algorithm"]},"headers":[{"level":2,"title":"4.2.1 哨兵节点简化插入操作","slug":"_4-2-1-哨兵节点简化插入操作","link":"#_4-2-1-哨兵节点简化插入操作","children":[]},{"level":2,"title":"4.2.2 哨兵节点简化删除操作","slug":"_4-2-2-哨兵节点简化删除操作","link":"#_4-2-2-哨兵节点简化删除操作","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1694451412000},"readingTime":{"minutes":1.1,"words":329},"filePathRelative":"reading/algorithm/offer_oriented/AL_DS/04_List/04.2.md","localizedDate":"2023年9月3日","excerpt":"<p>哨兵节点用于简化处理链表的边界条件而引入的附加链表节点.</p>\\n<p>哨兵节点位于链表的头部, 其值没有意义. 有意义的信息从第二个节点开始.</p>\\n<h2> 4.2.1 哨兵节点简化插入操作</h2>\\n<p>向链表尾部插入节点:</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">Append</span><span class=\\"token punctuation\\">(</span>head <span class=\\"token operator\\">*</span>ListNode<span class=\\"token punctuation\\">,</span> val <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span>ListNode <span class=\\"token punctuation\\">{</span>\\n    newNode <span class=\\"token operator\\">:=</span> <span class=\\"token operator\\">&amp;</span>ListNode<span class=\\"token punctuation\\">{</span>Val<span class=\\"token punctuation\\">:</span> val<span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">if</span> head <span class=\\"token operator\\">!=</span> <span class=\\"token boolean\\">nil</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> newNode\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    node <span class=\\"token operator\\">:=</span> head\\n    <span class=\\"token keyword\\">for</span> node<span class=\\"token punctuation\\">.</span>Next <span class=\\"token operator\\">!=</span> <span class=\\"token boolean\\">nil</span> <span class=\\"token punctuation\\">{</span>\\n        node <span class=\\"token operator\\">=</span> node<span class=\\"token punctuation\\">.</span>Next\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    node<span class=\\"token punctuation\\">.</span>Next <span class=\\"token operator\\">=</span> newNode\\n    <span class=\\"token keyword\\">return</span> head\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
