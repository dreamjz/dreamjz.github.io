const e=JSON.parse('{"key":"v-3ed9ab45","path":"/reading/golang/7-days-golang/02-GeeCache-DitributedCache/02.5.distributed_nodes.html","title":"5. 分布式节点","lang":"zh-CN","frontmatter":{"title":"5. 分布式节点","date":"2023-10-10T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. PeerPicker 和 PeerGetter 接口","slug":"_1-peerpicker-和-peergetter-接口","link":"#_1-peerpicker-和-peergetter-接口","children":[]},{"level":2,"title":"2. HTTP 客户端","slug":"_2-http-客户端","link":"#_2-http-客户端","children":[]},{"level":2,"title":"3. 主流程","slug":"_3-主流程","link":"#_3-主流程","children":[]},{"level":2,"title":"4. Demo 测试","slug":"_4-demo-测试","link":"#_4-demo-测试","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":3.71,"words":1113},"filePathRelative":"reading/golang/7-days-golang/02-GeeCache-DitributedCache/02.5.distributed_nodes.md","localizedDate":"2023年10月10日","excerpt":"<p><a href=\\"https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day5-distributed-nodes\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day5-distributed-nodes</a></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>DAY5-DISTRIBUTED-NODES\\n│  go.mod\\n│  go.work\\n│  main.go\\n│  run.sh\\n│  \\n└─geecache\\n    │  byteview.go\\n    │  cache.go\\n    │  consistenthash.go\\n    │  consistenthash_test.go\\n    │  geecache.go\\n    │  geecache_test.go\\n    │  go.mod\\n    │  http.go\\n    │  peers.go\\n    │\\n    ├─consistenthash\\n    │      consistenthash.go\\n    │      consistenthash_test.go\\n    │\\n    └─lru\\n            lru.go\\n            lru_test.go\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};