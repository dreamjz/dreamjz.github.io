const e=JSON.parse('{"key":"v-6a293671","path":"/reading/golang/high-performance-go/04-compile/04.2.mem_escape.html","title":"4.2 内存逃逸分析","lang":"zh-CN","frontmatter":{"title":"4.2 内存逃逸分析","date":"2023-10-05T00:00:00.000Z","category":["golang"],"article":false},"headers":[{"level":2,"title":"1. Stack and Heap","slug":"_1-stack-and-heap","link":"#_1-stack-and-heap","children":[]},{"level":2,"title":"2. 逃逸分析","slug":"_2-逃逸分析","link":"#_2-逃逸分析","children":[{"level":3,"title":"2.1 指针逃逸","slug":"_2-1-指针逃逸","link":"#_2-1-指针逃逸","children":[]},{"level":3,"title":"2.3 动态类型逃逸","slug":"_2-3-动态类型逃逸","link":"#_2-3-动态类型逃逸","children":[]},{"level":3,"title":"2.4 栈空间不足","slug":"_2-4-栈空间不足","link":"#_2-4-栈空间不足","children":[]},{"level":3,"title":"2.5 闭包","slug":"_2-5-闭包","link":"#_2-5-闭包","children":[]}]},{"level":2,"title":"3. 根据逃逸分析提升性能","slug":"_3-根据逃逸分析提升性能","link":"#_3-根据逃逸分析提升性能","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1699943615000},"readingTime":{"minutes":3.67,"words":1101},"filePathRelative":"reading/golang/high-performance-go/04-compile/04.2.mem_escape.md","localizedDate":"2023年10月5日","excerpt":"<h2> 1. Stack and Heap</h2>\\n<p>Golang 程序会在两个区域为变量分配内存：</p>\\n<ol>\\n<li>栈(stack)，每个 goroutine 持有自身独有的栈空间</li>\\n<li>堆(heap)</li>\\n</ol>\\n<p>在栈上分配和回收内存开销很低，仅需两个CPU指令：<code>PUSH</code>和<code>POP</code>。</p>\\n<p>在堆上分配内存，很大的开销来自于 GC。</p>\\n<blockquote>\\n<p>标记清除收集器是跟踪式垃圾收集器，其执行过程可以分成标记（Mark）和清除（Sweep）两个阶段：</p>\\n<ul>\\n<li>标记阶段 — 从根对象出发查找并标记堆中所有存活的对象；</li>\\n<li>清除阶段 — 遍历堆中的全部对象，回收未被标记的垃圾对象并将回收的内存加入空闲链表。</li>\\n</ul>\\n<p>标记清除算法的一个典型耗时是在标记期间，需要暂停程序（Stop the world，STW），标记结束之后，用户程序才可以继续执行。</p>\\n<p>— <a href=\\"https://geektutu.com/post/qa-golang-2.html#Q5-%E7%AE%80%E8%BF%B0-Go-%E8%AF%AD%E8%A8%80GC-%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6-%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">垃圾回收(GC)的工作原理</a></p>\\n</blockquote>"}');export{e as data};
