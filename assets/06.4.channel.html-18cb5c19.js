const e=JSON.parse('{"key":"v-35c742aa","path":"/reading/golang/the-design-and-implementation-of-golang/part3-runtime/06-concurrency/06.4.channel.html","title":"6.4 Channel","lang":"zh-CN","frontmatter":{"title":"6.4 Channel","date":"2023-10-01T00:00:00.000Z","category":["golang"],"article":false},"headers":[{"level":2,"title":"6.4.1 设计原理","slug":"_6-4-1-设计原理","link":"#_6-4-1-设计原理","children":[{"level":3,"title":"先入先出 FIFO","slug":"先入先出-fifo","link":"#先入先出-fifo","children":[]}]},{"level":2,"title":"6.4.2 数据结构","slug":"_6-4-2-数据结构","link":"#_6-4-2-数据结构","children":[]},{"level":2,"title":"6.4.3 创建 channel","slug":"_6-4-3-创建-channel","link":"#_6-4-3-创建-channel","children":[]},{"level":2,"title":"6.4.4 发送数据","slug":"_6-4-4-发送数据","link":"#_6-4-4-发送数据","children":[{"level":3,"title":"直接发送","slug":"直接发送","link":"#直接发送","children":[]},{"level":3,"title":"发送到缓冲区","slug":"发送到缓冲区","link":"#发送到缓冲区","children":[]},{"level":3,"title":"阻塞发送","slug":"阻塞发送","link":"#阻塞发送","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"6.4.5 接收数据","slug":"_6-4-5-接收数据","link":"#_6-4-5-接收数据","children":[{"level":3,"title":"直接接收","slug":"直接接收","link":"#直接接收","children":[]},{"level":3,"title":"从缓冲区接收","slug":"从缓冲区接收","link":"#从缓冲区接收","children":[]},{"level":3,"title":"阻塞接收","slug":"阻塞接收","link":"#阻塞接收","children":[]},{"level":3,"title":"小结","slug":"小结-1","link":"#小结-1","children":[]}]},{"level":2,"title":"6.4.6 关闭 channel","slug":"_6-4-6-关闭-channel","link":"#_6-4-6-关闭-channel","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1699943615000},"readingTime":{"minutes":9.27,"words":2782},"filePathRelative":"reading/golang/the-design-and-implementation-of-golang/part3-runtime/06-concurrency/06.4.channel.md","localizedDate":"2023年10月1日","excerpt":"<p><strong>不要通过共享内存的方式进行通信，而是应该通过通信的方式共享内存。</strong></p>\\n<h2> 6.4.1 设计原理</h2>\\n<p>常见的多线程通信是通过<strong>共享内存</strong>来进行的：</p>\\n<figure><img src=\\"https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/202310012235600.png\\" alt=\\"shared-memory\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>shared-memory</figcaption></figure>"}');export{e as data};
