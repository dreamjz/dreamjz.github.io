const e=JSON.parse('{"key":"v-426816ea","path":"/reading/golang/7-days-golang/02-GeeCache-DitributedCache/02.2.concurrency.html","title":"2. 单机并发缓存","lang":"zh-CN","frontmatter":{"title":"2. 单机并发缓存","date":"2023-10-10T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. 支持并发读写","slug":"_1-支持并发读写","link":"#_1-支持并发读写","children":[{"level":3,"title":"1.1 byteview","slug":"_1-1-byteview","link":"#_1-1-byteview","children":[]},{"level":3,"title":"1.2 cache","slug":"_1-2-cache","link":"#_1-2-cache","children":[]}]},{"level":2,"title":"2. 核心数据结构","slug":"_2-核心数据结构","link":"#_2-核心数据结构","children":[{"level":3,"title":"2.1 Getter 接口","slug":"_2-1-getter-接口","link":"#_2-1-getter-接口","children":[]},{"level":3,"title":"2.2 Group","slug":"_2-2-group","link":"#_2-2-group","children":[]}]},{"level":2,"title":"3. 测试","slug":"_3-测试","link":"#_3-测试","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":3.57,"words":1070},"filePathRelative":"reading/golang/7-days-golang/02-GeeCache-DitributedCache/02.2.concurrency.md","localizedDate":"2023年10月10日","excerpt":"<p><a href=\\"https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day2-concurrency\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day2-concurrency</a></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>DAY2-CONCURRENCY\\n│  byteview.go\\n│  cache.go\\n│  geecache.go\\n│  geecache_test.go\\n│  go.mod\\n│  \\n└─lru\\n        lru.go\\n        lru_test.go\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};