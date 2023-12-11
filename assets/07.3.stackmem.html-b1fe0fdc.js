const e=JSON.parse('{"key":"v-73f12fbe","path":"/reading/sc/golang/the-design-and-implementation-of-golang/part3-runtime/07-memory/07.3.stackmem.html","title":"7.3 栈空间内存管理","lang":"zh-CN","frontmatter":{"title":"7.3 栈空间内存管理","date":"2023-10-02T00:00:00.000Z","category":["golang"],"article":false},"headers":[{"level":2,"title":"7.3.1 设计原理","slug":"_7-3-1-设计原理","link":"#_7-3-1-设计原理","children":[{"level":3,"title":"寄存器","slug":"寄存器","link":"#寄存器","children":[]},{"level":3,"title":"线程栈","slug":"线程栈","link":"#线程栈","children":[]},{"level":3,"title":"逃逸分析","slug":"逃逸分析","link":"#逃逸分析","children":[]},{"level":3,"title":"栈内存空间","slug":"栈内存空间","link":"#栈内存空间","children":[]}]},{"level":2,"title":"7.3.2 栈操作","slug":"_7-3-2-栈操作","link":"#_7-3-2-栈操作","children":[{"level":3,"title":"栈初始化","slug":"栈初始化","link":"#栈初始化","children":[]},{"level":3,"title":"栈分配","slug":"栈分配","link":"#栈分配","children":[]},{"level":3,"title":"栈扩容","slug":"栈扩容","link":"#栈扩容","children":[]},{"level":3,"title":"栈缩容","slug":"栈缩容","link":"#栈缩容","children":[]},{"level":3,"title":"Reference","slug":"reference","link":"#reference","children":[]}]}],"git":{"updatedTime":1701449868000},"readingTime":{"minutes":10.54,"words":3161},"filePathRelative":"reading/sc/golang/the-design-and-implementation-of-golang/part3-runtime/07-memory/07.3.stackmem.md","localizedDate":"2023年10月2日","excerpt":"<h2> 7.3.1 设计原理</h2>\\n<p>栈内存一般由编译器<strong>自动分配</strong>和<strong>释放</strong>，其中存储着函数的入参以及局部变量，这些参数会随着函数的创建而创建，函数的返回而消亡。</p>"}');export{e as data};