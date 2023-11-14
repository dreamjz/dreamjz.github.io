const n=JSON.parse('{"key":"v-681ca6cc","path":"/reading/golang/high-performance-go/02-datastructure/02.2.slice.html","title":"2.2 Slice 性能及陷阱","lang":"zh-CN","frontmatter":{"title":"2.2 Slice 性能及陷阱","date":"2023-10-03T00:00:00.000Z","category":["golang"],"article":false},"headers":[{"level":2,"title":"1. 数组","slug":"_1-数组","link":"#_1-数组","children":[{"level":3,"title":"1.1 类型","slug":"_1-1-类型","link":"#_1-1-类型","children":[]},{"level":3,"title":"1.2 赋值","slug":"_1-2-赋值","link":"#_1-2-赋值","children":[]}]},{"level":2,"title":"2. 切片","slug":"_2-切片","link":"#_2-切片","children":[]},{"level":2,"title":"3. 操作","slug":"_3-操作","link":"#_3-操作","children":[{"level":3,"title":"3.1 copy","slug":"_3-1-copy","link":"#_3-1-copy","children":[]},{"level":3,"title":"3.2 append","slug":"_3-2-append","link":"#_3-2-append","children":[]},{"level":3,"title":"3.3 delete","slug":"_3-3-delete","link":"#_3-3-delete","children":[]},{"level":3,"title":"3.4 delete (GC)","slug":"_3-4-delete-gc","link":"#_3-4-delete-gc","children":[]},{"level":3,"title":"3.5 insert","slug":"_3-5-insert","link":"#_3-5-insert","children":[]},{"level":3,"title":"3.6 filter","slug":"_3-6-filter","link":"#_3-6-filter","children":[]},{"level":3,"title":"3.7 push","slug":"_3-7-push","link":"#_3-7-push","children":[]},{"level":3,"title":"3.8 pop","slug":"_3-8-pop","link":"#_3-8-pop","children":[]}]},{"level":2,"title":"4. 性能陷阱","slug":"_4-性能陷阱","link":"#_4-性能陷阱","children":[{"level":3,"title":"4.1 大量内存得不到释放","slug":"_4-1-大量内存得不到释放","link":"#_4-1-大量内存得不到释放","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1699943615000},"readingTime":{"minutes":3.39,"words":1016},"filePathRelative":"reading/golang/high-performance-go/02-datastructure/02.2.slice.md","localizedDate":"2023年10月3日","excerpt":"<h2> 1. 数组</h2>\\n<h3> 1.1 类型</h3>\\n<p>Golang 中的数组类型由两个因素确定：</p>\\n<ol>\\n<li>数组长度</li>\\n<li>元素类型</li>\\n</ol>\\n<p>只有两者均相同时，才是相同类型：</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code>a <span class=\\"token operator\\">:=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">{</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">}</span>\\nb <span class=\\"token operator\\">:=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">}</span>\\nc <span class=\\"token operator\\">:=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">{</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
