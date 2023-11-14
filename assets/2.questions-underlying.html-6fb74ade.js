const l=JSON.parse('{"key":"v-fb0c35ce","path":"/note/interview/golang/2.questions-underlying.html","title":"Questions - underlying","lang":"zh-CN","frontmatter":{"title":"Questions - underlying","article":false},"headers":[{"level":2,"title":"1. init() 函数执行时机","slug":"_1-init-函数执行时机","link":"#_1-init-函数执行时机","children":[]},{"level":2,"title":"2. 局部变量内存分配在栈上还是堆上","slug":"_2-局部变量内存分配在栈上还是堆上","link":"#_2-局部变量内存分配在栈上还是堆上","children":[]},{"level":2,"title":"3. 空接口类型可以比较么","slug":"_3-空接口类型可以比较么","link":"#_3-空接口类型可以比较么","children":[]},{"level":2,"title":"4. 两个 nil 可能不相等么","slug":"_4-两个-nil-可能不相等么","link":"#_4-两个-nil-可能不相等么","children":[]},{"level":2,"title":"5. 简述 GC 的原理","slug":"_5-简述-gc-的原理","link":"#_5-简述-gc-的原理","children":[{"level":3,"title":"三色标记法","slug":"三色标记法","link":"#三色标记法","children":[]},{"level":3,"title":"写屏障","slug":"写屏障","link":"#写屏障","children":[]},{"level":3,"title":"完整流程","slug":"完整流程","link":"#完整流程","children":[]}]},{"level":2,"title":"6. 函数返回局部变量的指针是否安全","slug":"_6-函数返回局部变量的指针是否安全","link":"#_6-函数返回局部变量的指针是否安全","children":[]},{"level":2,"title":"7. 非接口类型的变量一定能狗调用指针方法集么","slug":"_7-非接口类型的变量一定能狗调用指针方法集么","link":"#_7-非接口类型的变量一定能狗调用指针方法集么","children":[]},{"level":2,"title":"8. 简述变量在转换成接口类型后可调用方法集的情况","slug":"_8-简述变量在转换成接口类型后可调用方法集的情况","link":"#_8-简述变量在转换成接口类型后可调用方法集的情况","children":[]},{"level":2,"title":"9. 简述 Golang 内存管理","slug":"_9-简述-golang-内存管理","link":"#_9-简述-golang-内存管理","children":[{"level":3,"title":"内存分配","slug":"内存分配","link":"#内存分配","children":[]}]},{"level":2,"title":"10. 简述 GMP 模型","slug":"_10-简述-gmp-模型","link":"#_10-简述-gmp-模型","children":[{"level":3,"title":"GMP 流程","slug":"gmp-流程","link":"#gmp-流程","children":[]},{"level":3,"title":"自旋","slug":"自旋","link":"#自旋","children":[]},{"level":3,"title":"休眠","slug":"休眠","link":"#休眠","children":[]}]},{"level":2,"title":"11. Goroutine 何时发生阻塞","slug":"_11-goroutine-何时发生阻塞","link":"#_11-goroutine-何时发生阻塞","children":[]},{"level":2,"title":"12. GMP 有哪些状态","slug":"_12-gmp-有哪些状态","link":"#_12-gmp-有哪些状态","children":[]},{"level":2,"title":"13. GMP 中 P 的作用","slug":"_13-gmp-中-p-的作用","link":"#_13-gmp-中-p-的作用","children":[]},{"level":2,"title":"14. 什么是 work stealing","slug":"_14-什么是-work-stealing","link":"#_14-什么是-work-stealing","children":[]}],"git":{"updatedTime":1699946055000},"readingTime":{"minutes":9.36,"words":2809},"filePathRelative":"note/interview/golang/2.questions-underlying.md","excerpt":"<h2> 1. init() 函数执行时机</h2>\\n<p>Golang 包的初始化顺序：</p>\\n<ol>\\n<li>解析依赖（import），导入其他包</li>\\n<li>初始化常量（const）</li>\\n<li>初始化全局变量（var）</li>\\n<li>执行初始化函数（init），若包中包含多个<code>init</code>函数，则顺序未知</li>\\n<li>执行<code>main</code>函数</li>\\n</ol>"}');export{l as data};