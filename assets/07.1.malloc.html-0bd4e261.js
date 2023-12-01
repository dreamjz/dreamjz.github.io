const l=JSON.parse('{"key":"v-7f45f4a4","path":"/reading/sc/golang/the-design-and-implementation-of-golang/part3-runtime/07-memory/07.1.malloc.html","title":"7.1 内存分配器","lang":"zh-CN","frontmatter":{"title":"7.1 内存分配器","date":"2023-10-02T00:00:00.000Z","category":["golang"],"article":false},"headers":[{"level":2,"title":"7.1.1 设计原理","slug":"_7-1-1-设计原理","link":"#_7-1-1-设计原理","children":[{"level":3,"title":"分配方法","slug":"分配方法","link":"#分配方法","children":[]},{"level":3,"title":"分级分配","slug":"分级分配","link":"#分级分配","children":[]},{"level":3,"title":"虚拟内存布局","slug":"虚拟内存布局","link":"#虚拟内存布局","children":[]},{"level":3,"title":"地址空间","slug":"地址空间","link":"#地址空间","children":[]}]},{"level":2,"title":"7.1.2 内存管理组件","slug":"_7-1-2-内存管理组件","link":"#_7-1-2-内存管理组件","children":[{"level":3,"title":"内存管理单元","slug":"内存管理单元","link":"#内存管理单元","children":[]},{"level":3,"title":"线程缓存","slug":"线程缓存","link":"#线程缓存","children":[]},{"level":3,"title":"中心缓存","slug":"中心缓存","link":"#中心缓存","children":[]},{"level":3,"title":"页堆","slug":"页堆","link":"#页堆","children":[]}]},{"level":2,"title":"7.1.3 内存分配","slug":"_7-1-3-内存分配","link":"#_7-1-3-内存分配","children":[{"level":3,"title":"微对象","slug":"微对象","link":"#微对象","children":[]},{"level":3,"title":"小对象","slug":"小对象","link":"#小对象","children":[]},{"level":3,"title":"大对象","slug":"大对象","link":"#大对象","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1701449868000},"readingTime":{"minutes":18.94,"words":5682},"filePathRelative":"reading/sc/golang/the-design-and-implementation-of-golang/part3-runtime/07-memory/07.1.malloc.md","localizedDate":"2023年10月2日","excerpt":"<p>程序中的数据和变量都会被分配到程序所在的虚拟内存中，内存空间包含两个重要区域：</p>\\n<ul>\\n<li>栈区（Stack）\\n<strong>函数调用</strong>的参数、返回值以及局部变量大都会被分配到栈上，这部分内存会由编译器进行管理</li>\\n<li>堆区（Heap）\\n堆中的对象由内存分配器分配并由垃圾收集器回收</li>\\n</ul>"}');export{l as data};
