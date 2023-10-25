const l=JSON.parse('{"key":"v-8b794278","path":"/interview/golang/0.basics.html","title":"Basics","lang":"zh-CN","frontmatter":{"title":"Basics"},"headers":[{"level":2,"title":"1. Goalng 安全读写共享变量方式","slug":"_1-goalng-安全读写共享变量方式","link":"#_1-goalng-安全读写共享变量方式","children":[]},{"level":2,"title":"2. Channel 有无缓冲的区别","slug":"_2-channel-有无缓冲的区别","link":"#_2-channel-有无缓冲的区别","children":[]},{"level":2,"title":"3. GMP 模型","slug":"_3-gmp-模型","link":"#_3-gmp-模型","children":[{"level":3,"title":"GMP 流程","slug":"gmp-流程","link":"#gmp-流程","children":[]},{"level":3,"title":"自旋","slug":"自旋","link":"#自旋","children":[]},{"level":3,"title":"休眠","slug":"休眠","link":"#休眠","children":[]}]},{"level":2,"title":"4. 常用并发控制","slug":"_4-常用并发控制","link":"#_4-常用并发控制","children":[{"level":3,"title":"channel","slug":"channel","link":"#channel","children":[]},{"level":3,"title":"sync.WaitGroup","slug":"sync-waitgroup","link":"#sync-waitgroup","children":[]},{"level":3,"title":"context","slug":"context","link":"#context","children":[]}]},{"level":2,"title":"5. Slice 为 nil 和 empty Slice","slug":"_5-slice-为-nil-和-empty-slice","link":"#_5-slice-为-nil-和-empty-slice","children":[]},{"level":2,"title":"6. 进程 线程 协程","slug":"_6-进程-线程-协程","link":"#_6-进程-线程-协程","children":[{"level":3,"title":"进程","slug":"进程","link":"#进程","children":[]},{"level":3,"title":"线程","slug":"线程","link":"#线程","children":[]},{"level":3,"title":"协程","slug":"协程","link":"#协程","children":[]}]},{"level":2,"title":"7. 数据竞争 (Data Race) 如何解决","slug":"_7-数据竞争-data-race-如何解决","link":"#_7-数据竞争-data-race-如何解决","children":[]},{"level":2,"title":"8. Channel","slug":"_8-channel","link":"#_8-channel","children":[{"level":3,"title":"实现原理","slug":"实现原理","link":"#实现原理","children":[]},{"level":3,"title":"特点","slug":"特点","link":"#特点","children":[]}]},{"level":2,"title":"9. GC","slug":"_9-gc","link":"#_9-gc","children":[]},{"level":2,"title":"10. GC 触发条件","slug":"_10-gc-触发条件","link":"#_10-gc-触发条件","children":[]},{"level":2,"title":"11. 栈空间管理","slug":"_11-栈空间管理","link":"#_11-栈空间管理","children":[]},{"level":2,"title":"12. Golang 锁","slug":"_12-golang-锁","link":"#_12-golang-锁","children":[]},{"level":2,"title":"13. defer","slug":"_13-defer","link":"#_13-defer","children":[]},{"level":2,"title":"14. select","slug":"_14-select","link":"#_14-select","children":[]},{"level":2,"title":"15. Go 中原子操作和 CAS","slug":"_15-go-中原子操作和-cas","link":"#_15-go-中原子操作和-cas","children":[]},{"level":2,"title":"16. 内存逃逸","slug":"_16-内存逃逸","link":"#_16-内存逃逸","children":[]},{"level":2,"title":"17. Go 对象的内存分配","slug":"_17-go-对象的内存分配","link":"#_17-go-对象的内存分配","children":[]},{"level":2,"title":"18. 栈和堆","slug":"_18-栈和堆","link":"#_18-栈和堆","children":[]},{"level":2,"title":"19. 堆内存分配","slug":"_19-堆内存分配","link":"#_19-堆内存分配","children":[]},{"level":2,"title":"20. defer 中的变量","slug":"_20-defer-中的变量","link":"#_20-defer-中的变量","children":[]},{"level":2,"title":"21. new 和 make","slug":"_21-new-和-make","link":"#_21-new-和-make","children":[]},{"level":2,"title":"22. G0","slug":"_22-g0","link":"#_22-g0","children":[]}],"git":{"updatedTime":1698124819000},"readingTime":{"minutes":12.87,"words":3860},"filePathRelative":"interview/golang/0.basics.md","excerpt":"<h2> 1. Goalng 安全读写共享变量方式</h2>\\n<ul>\\n<li>sync.Mutex 加锁</li>\\n<li>channel</li>\\n<li>atomic</li>\\n</ul>\\n<h2> 2. Channel 有无缓冲的区别</h2>\\n<ul>\\n<li>无缓冲：<code>make(chan T)</code>， 发送和接收是<strong>同步</strong>的\\n<ul>\\n<li>发送阻塞，直到数据被接收</li>\\n<li>接收阻塞，直到读取到数据</li>\\n</ul>\\n</li>\\n<li>有缓冲：<code>make(chan T, buf_size)</code>，发送和接收<strong>不同步</strong>\\n<ul>\\n<li>缓冲区<strong>满</strong>时，发送阻塞</li>\\n<li>缓冲区<strong>空</strong>时，接收阻塞</li>\\n</ul>\\n</li>\\n</ul>"}');export{l as data};