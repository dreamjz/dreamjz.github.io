const e=JSON.parse('{"key":"v-ef99c07c","path":"/reading/golang/the-design-and-implementation-of-golang/part2-foundation/ch03-datastructure/03.3.hashmap.html","title":"3.3 哈希表","lang":"zh-CN","frontmatter":{"title":"3.3 哈希表","date":"2023-09-20T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"3.3.1 设计原理","slug":"_3-3-1-设计原理","link":"#_3-3-1-设计原理","children":[{"level":3,"title":"哈希函数","slug":"哈希函数","link":"#哈希函数","children":[]},{"level":3,"title":"冲突解决","slug":"冲突解决","link":"#冲突解决","children":[]}]},{"level":2,"title":"3.2.2 数据结构","slug":"_3-2-2-数据结构","link":"#_3-2-2-数据结构","children":[]},{"level":2,"title":"3.3.3 初始化","slug":"_3-3-3-初始化","link":"#_3-3-3-初始化","children":[{"level":3,"title":"字面量","slug":"字面量","link":"#字面量","children":[]},{"level":3,"title":"运行时","slug":"运行时","link":"#运行时","children":[]}]},{"level":2,"title":"3.3.4 读写操作","slug":"_3-3-4-读写操作","link":"#_3-3-4-读写操作","children":[{"level":3,"title":"访问","slug":"访问","link":"#访问","children":[]},{"level":3,"title":"写入","slug":"写入","link":"#写入","children":[]},{"level":3,"title":"扩容","slug":"扩容","link":"#扩容","children":[]},{"level":3,"title":"删除","slug":"删除","link":"#删除","children":[]}]},{"level":2,"title":"3.3.5 小结","slug":"_3-3-5-小结","link":"#_3-3-5-小结","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":14.17,"words":4250},"filePathRelative":"reading/golang/the-design-and-implementation-of-golang/part2-foundation/ch03-datastructure/03.3.hashmap.md","localizedDate":"2023年9月20日","excerpt":"<h2> 3.3.1 设计原理</h2>\\n<p>哈希表的读写性能为<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>O</mi><mo stretchy=\\"false\\">(</mo><mn>1</mn><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">O(1)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02778em;\\">O</span><span class=\\"mopen\\">(</span><span class=\\"mord\\">1</span><span class=\\"mclose\\">)</span></span></span></span>，同时提供键值对的映射。</p>"}');export{e as data};
