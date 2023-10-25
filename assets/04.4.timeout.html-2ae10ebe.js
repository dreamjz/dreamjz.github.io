const e=JSON.parse('{"key":"v-204f3e44","path":"/reading/golang/7-days-golang/04-GeeRPC/04.4.timeout.html","title":"4. 超时处理","lang":"zh-CN","frontmatter":{"title":"4. 超时处理","date":"2023-10-12T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. 超时","slug":"_1-超时","link":"#_1-超时","children":[{"level":3,"title":"1.1 创建连接超时","slug":"_1-1-创建连接超时","link":"#_1-1-创建连接超时","children":[]},{"level":3,"title":"1.2 Client.Call 超时","slug":"_1-2-client-call-超时","link":"#_1-2-client-call-超时","children":[]},{"level":3,"title":"1.3 服务端处理超时","slug":"_1-3-服务端处理超时","link":"#_1-3-服务端处理超时","children":[]}]},{"level":2,"title":"2. 单元测试","slug":"_2-单元测试","link":"#_2-单元测试","children":[{"level":3,"title":"2.1 连接超时","slug":"_2-1-连接超时","link":"#_2-1-连接超时","children":[]},{"level":3,"title":"2.2 服务端处理超时","slug":"_2-2-服务端处理超时","link":"#_2-2-服务端处理超时","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1697170525000},"readingTime":{"minutes":3.64,"words":1091},"filePathRelative":"reading/golang/7-days-golang/04-GeeRPC/04.4.timeout.md","localizedDate":"2023年10月12日","excerpt":"<p><a href=\\"https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeRPC/day4-timeout\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">day4-timeout</a></p>\\n<h2> 1. 超时</h2>\\n<p>超时处理是 RPC 框架一个比较基本的能力，如果缺少超时处理机制，无论是服务端还是客户端都容易因为网络或其他错误导致挂死，资源耗尽，这些问题的出现大大地降低了服务的可用性。因此，需要在 RPC 框架中加入超时处理的能力。</p>\\n"}');export{e as data};