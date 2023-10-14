const e=JSON.parse('{"key":"v-3a6b5c2f","path":"/reading/golang/7-days-golang/02-GeeCache-DitributedCache/02.7.protobuf.html","title":"7. 使用 protobuf","lang":"zh-CN","frontmatter":{"title":"7. 使用 protobuf","date":"2023-10-10T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. protobuf","slug":"_1-protobuf","link":"#_1-protobuf","children":[]},{"level":2,"title":"2. 使用 protobuf","slug":"_2-使用-protobuf","link":"#_2-使用-protobuf","children":[{"level":3,"title":"2.1 定义消息类型","slug":"_2-1-定义消息类型","link":"#_2-1-定义消息类型","children":[]},{"level":3,"title":"2.2 生成代码","slug":"_2-2-生成代码","link":"#_2-2-生成代码","children":[]},{"level":3,"title":"2.3 使用接口","slug":"_2-3-使用接口","link":"#_2-3-使用接口","children":[]}]},{"level":2,"title":"3. 测试","slug":"_3-测试","link":"#_3-测试","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":1.9,"words":571},"filePathRelative":"reading/golang/7-days-golang/02-GeeCache-DitributedCache/02.7.protobuf.md","localizedDate":"2023年10月10日","excerpt":"<p><a href=\\"https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day7-protobuf\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeCache/day7-protobuf</a></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>DAY7-PROTOBUF\\n│  go.mod\\n│  go.work\\n│  go.work.sum\\n│  main.go\\n│  run.sh\\n│  \\n└─geecache\\n    │  byteview.go\\n    │  cache.go\\n    │  consistenthash.go\\n    │  consistenthash_test.go\\n    │  geecache.go\\n    │  geecache_test.go\\n    │  go.mod\\n    │  go.sum\\n    │  http.go\\n    │  peers.go\\n    │\\n    ├─consistenthash\\n    │      consistenthash.go\\n    │      consistenthash_test.go\\n    │\\n    ├─geecachepb\\n    │      geecachepb.pb.go\\n    │      geecachepb.proto\\n    │\\n    ├─lru\\n    │      lru.go\\n    │      lru_test.go\\n    │\\n    └─singleflight\\n            singleflight.go\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};