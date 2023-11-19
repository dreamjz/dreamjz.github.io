const e=JSON.parse('{"key":"v-8043f9a6","path":"/blog/sc/golang/how/5.defer.html","title":"defer 底层实现总结","lang":"zh-CN","frontmatter":{"title":"defer 底层实现总结","date":"2023-10-10T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. 数据结构","slug":"_1-数据结构","link":"#_1-数据结构","children":[]},{"level":2,"title":"2. 内存分配","slug":"_2-内存分配","link":"#_2-内存分配","children":[]},{"level":2,"title":"3. 创建 defer","slug":"_3-创建-defer","link":"#_3-创建-defer","children":[{"level":3,"title":"获取 defer 结构体","slug":"获取-defer-结构体","link":"#获取-defer-结构体","children":[]},{"level":3,"title":"执行顺序","slug":"执行顺序","link":"#执行顺序","children":[]},{"level":3,"title":"拷贝参数","slug":"拷贝参数","link":"#拷贝参数","children":[]}]},{"level":2,"title":"4. 执行 defer","slug":"_4-执行-defer","link":"#_4-执行-defer","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1700428079000},"readingTime":{"minutes":3.63,"words":1088},"filePathRelative":"blog/sc/golang/how/5.defer.md","localizedDate":"2023年10月10日","excerpt":"<h2> 1. 数据结构</h2>\\n<p><code>runtime._defer</code>是延迟调用链表上的元素，所有的<code>runtime._defer</code>构成一个单向链表。</p>"}');export{e as data};
