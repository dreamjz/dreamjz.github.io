const e=JSON.parse('{"key":"v-1c69d004","path":"/reading/sc/golang/concurrency-in-go/04.pattern.html","title":"4. 并发模式","lang":"zh-CN","frontmatter":{"title":"4. 并发模式","date":"2023-09-28T00:00:00.000Z","category":["golang"],"article":false},"headers":[{"level":2,"title":"4.1 for-select","slug":"_4-1-for-select","link":"#_4-1-for-select","children":[{"level":3,"title":"向channel中发送迭代变量","slug":"向channel中发送迭代变量","link":"#向channel中发送迭代变量","children":[]},{"level":3,"title":"循环等待停止","slug":"循环等待停止","link":"#循环等待停止","children":[]}]},{"level":2,"title":"4.2 防止 goroutine 泄露 (done-channel 模式)","slug":"_4-2-防止-goroutine-泄露-done-channel-模式","link":"#_4-2-防止-goroutine-泄露-done-channel-模式","children":[{"level":3,"title":"goroutine 持续处于阻塞态","slug":"goroutine-持续处于阻塞态","link":"#goroutine-持续处于阻塞态","children":[]},{"level":3,"title":"goroutine 持续工作","slug":"goroutine-持续工作","link":"#goroutine-持续工作","children":[]}]},{"level":2,"title":"4.3 or-channel","slug":"_4-3-or-channel","link":"#_4-3-or-channel","children":[]},{"level":2,"title":"4.4 错误处理","slug":"_4-4-错误处理","link":"#_4-4-错误处理","children":[]},{"level":2,"title":"4.5 Pipeline","slug":"_4-5-pipeline","link":"#_4-5-pipeline","children":[{"level":3,"title":"批处理","slug":"批处理","link":"#批处理","children":[]},{"level":3,"title":"流处理","slug":"流处理","link":"#流处理","children":[]},{"level":3,"title":"生成器","slug":"生成器","link":"#生成器","children":[]}]},{"level":2,"title":"4.6 Fan-in Fan-out 扇入 扇出","slug":"_4-6-fan-in-fan-out-扇入-扇出","link":"#_4-6-fan-in-fan-out-扇入-扇出","children":[]},{"level":2,"title":"4.7 or-done-channel","slug":"_4-7-or-done-channel","link":"#_4-7-or-done-channel","children":[]},{"level":2,"title":"4.8 tee-channel","slug":"_4-8-tee-channel","link":"#_4-8-tee-channel","children":[]},{"level":2,"title":"4.9 桥接 channel","slug":"_4-9-桥接-channel","link":"#_4-9-桥接-channel","children":[]},{"level":2,"title":"4.10 队列","slug":"_4-10-队列","link":"#_4-10-队列","children":[]},{"level":2,"title":"4.11 context","slug":"_4-11-context","link":"#_4-11-context","children":[{"level":3,"title":"done-channel模式 和 context包","slug":"done-channel模式-和-context包","link":"#done-channel模式-和-context包","children":[]},{"level":3,"title":"数据存储和获取","slug":"数据存储和获取","link":"#数据存储和获取","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1701449868000},"readingTime":{"minutes":14.9,"words":4471},"filePathRelative":"reading/sc/golang/concurrency-in-go/04.pattern.md","localizedDate":"2023年9月28日","excerpt":"<h2> 4.1 for-select</h2>\\n<p><code>for-select</code>模式常见的有两种：</p>\\n<ol>\\n<li>向channel中发送迭代变量</li>\\n<li>循环等待停止</li>\\n</ol>"}');export{e as data};
