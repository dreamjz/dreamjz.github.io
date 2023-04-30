const l=JSON.parse('{"key":"v-64cfc26e","path":"/note/golang/concurrency/GMPModel.html","title":"GMP 原理分析","lang":"zh-CN","frontmatter":{"title":"GMP 原理分析","date":"2022-01-11T00:00:00.000Z","category":["golang"],"tag":["GMP"],"timeline":true},"headers":[{"level":2,"title":"1. Golang 调度器的由来","slug":"_1-golang-调度器的由来","link":"#_1-golang-调度器的由来","children":[{"level":3,"title":"1.1 单进程时代无需调度器","slug":"_1-1-单进程时代无需调度器","link":"#_1-1-单进程时代无需调度器","children":[]},{"level":3,"title":"1.2 多进程 / 线程时代的调度器","slug":"_1-2-多进程-线程时代的调度器","link":"#_1-2-多进程-线程时代的调度器","children":[]},{"level":3,"title":"1.3 使用协程来提高 CPU 利用率","slug":"_1-3-使用协程来提高-cpu-利用率","link":"#_1-3-使用协程来提高-cpu-利用率","children":[]},{"level":3,"title":"1.4 Go 协程 goroutine","slug":"_1-4-go-协程-goroutine","link":"#_1-4-go-协程-goroutine","children":[]},{"level":3,"title":"1.5 已废弃的 groutine 调度器","slug":"_1-5-已废弃的-groutine-调度器","link":"#_1-5-已废弃的-groutine-调度器","children":[]}]},{"level":2,"title":"2. GMP 模型设计思想","slug":"_2-gmp-模型设计思想","link":"#_2-gmp-模型设计思想","children":[{"level":3,"title":"2.1 GMP 模型","slug":"_2-1-gmp-模型","link":"#_2-1-gmp-模型","children":[]},{"level":3,"title":"2.2 调度器的设计","slug":"_2-2-调度器的设计","link":"#_2-2-调度器的设计","children":[]},{"level":3,"title":"2.3 go func() 调度流程","slug":"_2-3-go-func-调度流程","link":"#_2-3-go-func-调度流程","children":[]},{"level":3,"title":"2.4 调度器的生命周期","slug":"_2-4-调度器的生命周期","link":"#_2-4-调度器的生命周期","children":[]},{"level":3,"title":"2.5 可视化 GMP","slug":"_2-5-可视化-gmp","link":"#_2-5-可视化-gmp","children":[]}]},{"level":2,"title":"3. 调度器场景解析","slug":"_3-调度器场景解析","link":"#_3-调度器场景解析","children":[{"level":3,"title":"3.1 G1 创建 G2","slug":"_3-1-g1-创建-g2","link":"#_3-1-g1-创建-g2","children":[]},{"level":3,"title":"3.2 本地队列执行","slug":"_3-2-本地队列执行","link":"#_3-2-本地队列执行","children":[]},{"level":3,"title":"3.3 本地队列容量已满","slug":"_3-3-本地队列容量已满","link":"#_3-3-本地队列容量已满","children":[]},{"level":3,"title":"3.4 负载均衡","slug":"_3-4-负载均衡","link":"#_3-4-负载均衡","children":[]},{"level":3,"title":"3.5 本地队列容量未满","slug":"_3-5-本地队列容量未满","link":"#_3-5-本地队列容量未满","children":[]},{"level":3,"title":"3.6 唤醒正在休眠的 M","slug":"_3-6-唤醒正在休眠的-m","link":"#_3-6-唤醒正在休眠的-m","children":[]},{"level":3,"title":"3.7 从全局队列中获取 G","slug":"_3-7-从全局队列中获取-g","link":"#_3-7-从全局队列中获取-g","children":[]},{"level":3,"title":"3.8 从 P 的本地队列中偷取 G (work stealing)","slug":"_3-8-从-p-的本地队列中偷取-g-work-stealing","link":"#_3-8-从-p-的本地队列中偷取-g-work-stealing","children":[]},{"level":3,"title":"3.9 自旋线程","slug":"_3-9-自旋线程","link":"#_3-9-自旋线程","children":[]},{"level":3,"title":"3.10 G 发生阻塞系统调用","slug":"_3-10-g-发生阻塞系统调用","link":"#_3-10-g-发生阻塞系统调用","children":[]},{"level":3,"title":"3.11 G 发生非阻塞系统调用","slug":"_3-11-g-发生非阻塞系统调用","link":"#_3-11-g-发生非阻塞系统调用","children":[]}]},{"level":2,"title":"4. 小结","slug":"_4-小结","link":"#_4-小结","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":17.55,"words":5266},"filePathRelative":"note/golang/concurrency/GMPModel.md","localizedDate":"2022年1月11日","excerpt":"<h2> 1. Golang 调度器的由来</h2>\\n<h3> 1.1 单进程时代无需调度器</h3>\\n<p>在早期的操作系统中一个程序就是一个进程，只有一个进程运行完毕之后才能运行下一个进程，所有的进程只能串行发生。</p>\\n<figure><img src=\\"https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/06IoYRyruP.png!large\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>早期的单进程操作系统，面临着两个问题：</p>"}');export{l as data};