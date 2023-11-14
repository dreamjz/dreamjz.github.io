const e=JSON.parse('{"key":"v-6f5a92a8","path":"/note/interview/golang/3.questions-concurrency.html","title":"Questions - concurrency","lang":"zh-CN","frontmatter":{"title":"Questions - concurrency","article":false},"headers":[{"level":2,"title":"1. 有缓冲和无缓冲的 Channel 区别","slug":"_1-有缓冲和无缓冲的-channel-区别","link":"#_1-有缓冲和无缓冲的-channel-区别","children":[]},{"level":2,"title":"2. 简述 协程泄露(Goroutine Leak)","slug":"_2-简述-协程泄露-goroutine-leak","link":"#_2-简述-协程泄露-goroutine-leak","children":[]},{"level":2,"title":"3. GOMAXPROCS 作用","slug":"_3-gomaxprocs-作用","link":"#_3-gomaxprocs-作用","children":[]},{"level":2,"title":"4. mutex 有几种模式","slug":"_4-mutex-有几种模式","link":"#_4-mutex-有几种模式","children":[]},{"level":2,"title":"5. Goroutine 何时发生内存泄露","slug":"_5-goroutine-何时发生内存泄露","link":"#_5-goroutine-何时发生内存泄露","children":[{"level":3,"title":"暂时性内存泄露","slug":"暂时性内存泄露","link":"#暂时性内存泄露","children":[]},{"level":3,"title":"永久性内存泄露","slug":"永久性内存泄露","link":"#永久性内存泄露","children":[]}]},{"level":2,"title":"6. Go 的竞争条件","slug":"_6-go-的竞争条件","link":"#_6-go-的竞争条件","children":[]},{"level":2,"title":"7. 如果若干个goroutine，有一个panic会怎么做？","slug":"_7-如果若干个goroutine-有一个panic会怎么做","link":"#_7-如果若干个goroutine-有一个panic会怎么做","children":[]},{"level":2,"title":"8. defer 可以捕获子 goroutine 的 panic 么","slug":"_8-defer-可以捕获子-goroutine-的-panic-么","link":"#_8-defer-可以捕获子-goroutine-的-panic-么","children":[]}],"git":{"updatedTime":1699946055000},"readingTime":{"minutes":3.54,"words":1062},"filePathRelative":"note/interview/golang/3.questions-concurrency.md","excerpt":"<h2> 1. 有缓冲和无缓冲的 Channel 区别</h2>\\n<ul>\\n<li>无缓冲 Channel：\\n<ul>\\n<li>发送：发送时若无接收者则阻塞，直到接收者接收</li>\\n<li>接收：接收时若无发送者则阻塞，直到发送者发送</li>\\n</ul>\\n</li>\\n<li>有缓冲 Channel：\\n<ul>\\n<li>发送：仅在缓冲以满时阻塞</li>\\n<li>接收：仅在缓冲为空时阻塞</li>\\n</ul>\\n</li>\\n</ul>"}');export{e as data};