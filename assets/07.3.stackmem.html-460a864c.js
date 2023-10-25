const e=JSON.parse('{"key":"v-35640268","path":"/reading/golang/the-design-and-implementation-of-golang/part3-runtime/07-memory/07.3.stackmem.html","title":"7.3 栈空间内存管理","lang":"zh-CN","frontmatter":{"title":"7.3 栈空间内存管理","date":"2023-10-02T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"7.3.1 设计原理","slug":"_7-3-1-设计原理","link":"#_7-3-1-设计原理","children":[{"level":3,"title":"寄存器","slug":"寄存器","link":"#寄存器","children":[]},{"level":3,"title":"线程栈","slug":"线程栈","link":"#线程栈","children":[]},{"level":3,"title":"逃逸分析","slug":"逃逸分析","link":"#逃逸分析","children":[]},{"level":3,"title":"栈内存空间","slug":"栈内存空间","link":"#栈内存空间","children":[]}]},{"level":2,"title":"7.3.2 栈操作","slug":"_7-3-2-栈操作","link":"#_7-3-2-栈操作","children":[{"level":3,"title":"栈初始化","slug":"栈初始化","link":"#栈初始化","children":[]},{"level":3,"title":"栈分配","slug":"栈分配","link":"#栈分配","children":[]},{"level":3,"title":"栈扩容","slug":"栈扩容","link":"#栈扩容","children":[]},{"level":3,"title":"栈缩容","slug":"栈缩容","link":"#栈缩容","children":[]},{"level":3,"title":"Reference","slug":"reference","link":"#reference","children":[]}]}],"git":{"updatedTime":1696286681000},"readingTime":{"minutes":10.53,"words":3159},"filePathRelative":"reading/golang/the-design-and-implementation-of-golang/part3-runtime/07-memory/07.3.stackmem.md","localizedDate":"2023年10月2日","excerpt":"<h2> 7.3.1 设计原理</h2>\\n<p>栈内存一般由编译器<strong>自动分配</strong>和<strong>释放</strong>，其中存储着函数的入参以及局部变量，这些参数会随着函数的创建而创建，函数的返回而消亡。</p>\\n<h3> 寄存器</h3>\\n<p>寄存器是 CPU 中的稀缺资源,存储能力非常有限，但是能提供最快的读写速度，充分利用寄存器的速度可以构建高性能的应用程序。</p>\\n<p>栈寄存器是 CPU 寄存器中的一种，它的主要作用是跟踪函数的调用栈，Go 语言的汇编代码包含 BP 和 SP 两个栈寄存器，分别存储了栈的<strong>基址指针</strong>和<strong>栈顶</strong>的地址，BP 和 SP 之间的内存就是当前函数的调用栈。</p>"}');export{e as data};