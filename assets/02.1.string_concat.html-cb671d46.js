const e=JSON.parse('{"key":"v-1244a7cb","path":"/reading/golang/high-performance-go/02-datastructure/02.1.string_concat.html","title":"2.1 字符串高效拼接","lang":"zh-CN","frontmatter":{"title":"2.1 字符串高效拼接","date":"2023-10-03T00:00:00.000Z","category":["golang"],"article":false},"headers":[{"level":2,"title":"1. String","slug":"_1-string","link":"#_1-string","children":[{"level":3,"title":"1.1 拼接方式","slug":"_1-1-拼接方式","link":"#_1-1-拼接方式","children":[]},{"level":3,"title":"1.2. Benchmark","slug":"_1-2-benchmark","link":"#_1-2-benchmark","children":[]},{"level":3,"title":"1.3 推荐使用 strings.Builder","slug":"_1-3-推荐使用-strings-builder","link":"#_1-3-推荐使用-strings-builder","children":[]}]},{"level":2,"title":"2. 原理","slug":"_2-原理","link":"#_2-原理","children":[{"level":3,"title":"2.1 +","slug":"_2-1","link":"#_2-1","children":[]},{"level":3,"title":"2.2 strings.Builder 和 bytes.Buffer","slug":"_2-2-strings-builder-和-bytes-buffer","link":"#_2-2-strings-builder-和-bytes-buffer","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1699943615000},"readingTime":{"minutes":3.87,"words":1161},"filePathRelative":"reading/golang/high-performance-go/02-datastructure/02.1.string_concat.md","localizedDate":"2023年10月3日","excerpt":"<h2> 1. String</h2>\\n<p>Goalang 中的 string 是只读类型，字符串的拼接实际上会创建新字符串再将内容进行拷贝，若存在大量的拼接操作，会对性能产生严重影响。</p>\\n<h3> 1.1 拼接方式</h3>"}');export{e as data};