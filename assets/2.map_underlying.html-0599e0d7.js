const l=JSON.parse('{"key":"v-4465d670","path":"/blog/sc/golang/how/2.map_underlying.html","title":"map 底层实现总结","lang":"zh-CN","frontmatter":{"title":"map 底层实现总结","date":"2023-10-10T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. 数据结构","slug":"_1-数据结构","link":"#_1-数据结构","children":[{"level":3,"title":"1.1 hmap","slug":"_1-1-hmap","link":"#_1-1-hmap","children":[]},{"level":3,"title":"1.2 bmap","slug":"_1-2-bmap","link":"#_1-2-bmap","children":[]}]},{"level":2,"title":"2. 访问操作","slug":"_2-访问操作","link":"#_2-访问操作","children":[{"level":3,"title":"编译期","slug":"编译期","link":"#编译期","children":[]},{"level":3,"title":"运行时","slug":"运行时","link":"#运行时","children":[]}]},{"level":2,"title":"3. 写入","slug":"_3-写入","link":"#_3-写入","children":[{"level":3,"title":"编译期","slug":"编译期-1","link":"#编译期-1","children":[]},{"level":3,"title":"运行时","slug":"运行时-1","link":"#运行时-1","children":[]}]},{"level":2,"title":"4. 删除","slug":"_4-删除","link":"#_4-删除","children":[{"level":3,"title":"编译期","slug":"编译期-2","link":"#编译期-2","children":[]},{"level":3,"title":"运行时","slug":"运行时-2","link":"#运行时-2","children":[]}]},{"level":2,"title":"5. 扩容","slug":"_5-扩容","link":"#_5-扩容","children":[{"level":3,"title":"扩容条件","slug":"扩容条件","link":"#扩容条件","children":[]},{"level":3,"title":"扩容类型","slug":"扩容类型","link":"#扩容类型","children":[]},{"level":3,"title":"扩容流程","slug":"扩容流程","link":"#扩容流程","children":[]},{"level":3,"title":"扩容操作时机","slug":"扩容操作时机","link":"#扩容操作时机","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1700428079000},"readingTime":{"minutes":6.48,"words":1943},"filePathRelative":"blog/sc/golang/how/2.map_underlying.md","localizedDate":"2023年10月10日","excerpt":"<p>以 <a href=\\"https://github.com/golang/go/tree/release-branch.go1.18/src\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">gov1.18</a>为例总结 map 的底层实现。</p>"}');export{l as data};