const l=JSON.parse('{"key":"v-4420a349","path":"/note/interview/golang/chatgpt/1.qa.html","title":"ChatGPT Golang 面试题 - 100","lang":"zh-CN","frontmatter":{"title":"ChatGPT Golang 面试题 - 100","article":false},"headers":[{"level":2,"title":"1. 什么是Goroutine？如何创建一个Goroutine？","slug":"_1-什么是goroutine-如何创建一个goroutine","link":"#_1-什么是goroutine-如何创建一个goroutine","children":[]},{"level":2,"title":"2. 切片（slice）和数组（array）之间的主要区别是什么？","slug":"_2-切片-slice-和数组-array-之间的主要区别是什么","link":"#_2-切片-slice-和数组-array-之间的主要区别是什么","children":[]},{"level":2,"title":"3. 什么是Golang中的接口（interface）？如何实现接口？","slug":"_3-什么是golang中的接口-interface-如何实现接口","link":"#_3-什么是golang中的接口-interface-如何实现接口","children":[]},{"level":2,"title":"4. 如何避免Golang中的内存泄漏？","slug":"_4-如何避免golang中的内存泄漏","link":"#_4-如何避免golang中的内存泄漏","children":[]},{"level":2,"title":"5. 什么是Golang中的通道（channel）？如何使用它们进行并发通信？","slug":"_5-什么是golang中的通道-channel-如何使用它们进行并发通信","link":"#_5-什么是golang中的通道-channel-如何使用它们进行并发通信","children":[]},{"level":2,"title":"6. 解释一下Golang的垃圾回收机制（Garbage Collection）。","slug":"_6-解释一下golang的垃圾回收机制-garbage-collection-。","link":"#_6-解释一下golang的垃圾回收机制-garbage-collection-。","children":[]},{"level":2,"title":"7. 什么是函数闭包（closure）？如何创建和使用闭包？","slug":"_7-什么是函数闭包-closure-如何创建和使用闭包","link":"#_7-什么是函数闭包-closure-如何创建和使用闭包","children":[]},{"level":2,"title":"8. Golang中的defer语句有什么作用？它按照什么顺序执行？","slug":"_8-golang中的defer语句有什么作用-它按照什么顺序执行","link":"#_8-golang中的defer语句有什么作用-它按照什么顺序执行","children":[]},{"level":2,"title":"9. Golang中的反射（reflection）是什么？它有什么用途？","slug":"_9-golang中的反射-reflection-是什么-它有什么用途","link":"#_9-golang中的反射-reflection-是什么-它有什么用途","children":[]},{"level":2,"title":"10. 如何在Golang中进行错误处理，包括panic和recover机制？","slug":"_10-如何在golang中进行错误处理-包括panic和recover机制","link":"#_10-如何在golang中进行错误处理-包括panic和recover机制","children":[]},{"level":2,"title":"11. 什么是切片的容量（capacity）和长度（length）？","slug":"_11-什么是切片的容量-capacity-和长度-length","link":"#_11-什么是切片的容量-capacity-和长度-length","children":[]},{"level":2,"title":"12. Golang中的并发安全（concurrency safety）是什么意思？","slug":"_12-golang中的并发安全-concurrency-safety-是什么意思","link":"#_12-golang中的并发安全-concurrency-safety-是什么意思","children":[]},{"level":2,"title":"13. Golang中的map和slice是否是并发安全的？","slug":"_13-golang中的map和slice是否是并发安全的","link":"#_13-golang中的map和slice是否是并发安全的","children":[]},{"level":2,"title":"14. 解释Golang中的HTTP服务器（HTTP server）和HTTP处理器（HTTP handler）的概念。","slug":"_14-解释golang中的http服务器-http-server-和http处理器-http-handler-的概念。","link":"#_14-解释golang中的http服务器-http-server-和http处理器-http-handler-的概念。","children":[]},{"level":2,"title":"15. 什么是Golang中的接口嵌入（interface embedding）？","slug":"_15-什么是golang中的接口嵌入-interface-embedding","link":"#_15-什么是golang中的接口嵌入-interface-embedding","children":[]},{"level":2,"title":"16. Golang中的递归（recursion）有哪些优点和缺点？","slug":"_16-golang中的递归-recursion-有哪些优点和缺点","link":"#_16-golang中的递归-recursion-有哪些优点和缺点","children":[]},{"level":2,"title":"17. Golang中的\\"panic\\"和\\"recover\\"机制的主要用途是什么？","slug":"_17-golang中的-panic-和-recover-机制的主要用途是什么","link":"#_17-golang中的-panic-和-recover-机制的主要用途是什么","children":[]},{"level":2,"title":"18. 什么是函数字面量（function literal）和匿名函数（anonymous function）？","slug":"_18-什么是函数字面量-function-literal-和匿名函数-anonymous-function","link":"#_18-什么是函数字面量-function-literal-和匿名函数-anonymous-function","children":[]},{"level":2,"title":"19. Golang中的\\"for\\"循环可以有哪些不同形式？","slug":"_19-golang中的-for-循环可以有哪些不同形式","link":"#_19-golang中的-for-循环可以有哪些不同形式","children":[]},{"level":2,"title":"20. 什么是Golang中的Goroutine泄漏（Goroutine leak）？","slug":"_20-什么是golang中的goroutine泄漏-goroutine-leak","link":"#_20-什么是golang中的goroutine泄漏-goroutine-leak","children":[]},{"level":2,"title":"21. Golang中的\\"select\\"语句的用途是什么？","slug":"_21-golang中的-select-语句的用途是什么","link":"#_21-golang中的-select-语句的用途是什么","children":[]},{"level":2,"title":"22. 什么是Golang中的方法接收器（method receiver）？","slug":"_22-什么是golang中的方法接收器-method-receiver","link":"#_22-什么是golang中的方法接收器-method-receiver","children":[]},{"level":2,"title":"23. Golang中的变量作用域（variable scope）有哪些？","slug":"_23-golang中的变量作用域-variable-scope-有哪些","link":"#_23-golang中的变量作用域-variable-scope-有哪些","children":[]},{"level":2,"title":"24. 什么是Golang中的字符串（string）和字符（rune）？","slug":"_24-什么是golang中的字符串-string-和字符-rune","link":"#_24-什么是golang中的字符串-string-和字符-rune","children":[]},{"level":2,"title":"25. 解释Golang中的HTTP客户端（HTTP client）。","slug":"_25-解释golang中的http客户端-http-client-。","link":"#_25-解释golang中的http客户端-http-client-。","children":[]},{"level":2,"title":"26. 什么是Golang中的错误类型（error type）和错误接口（error interface）？","slug":"_26-什么是golang中的错误类型-error-type-和错误接口-error-interface","link":"#_26-什么是golang中的错误类型-error-type-和错误接口-error-interface","children":[]},{"level":2,"title":"27. Golang中的\\"new\\"函数和\\"make\\"函数的区别是什么？","slug":"_27-golang中的-new-函数和-make-函数的区别是什么","link":"#_27-golang中的-new-函数和-make-函数的区别是什么","children":[]},{"level":2,"title":"28. 什么是Golang中的Goroutine调度（Goroutine scheduling）？","slug":"_28-什么是golang中的goroutine调度-goroutine-scheduling","link":"#_28-什么是golang中的goroutine调度-goroutine-scheduling","children":[]},{"level":2,"title":"29. Golang中的并发锁（concurrency lock）有哪些类型？","slug":"_29-golang中的并发锁-concurrency-lock-有哪些类型","link":"#_29-golang中的并发锁-concurrency-lock-有哪些类型","children":[]},{"level":2,"title":"30. 什么是Golang中的内存模型（memory model）？","slug":"_30-什么是golang中的内存模型-memory-model","link":"#_30-什么是golang中的内存模型-memory-model","children":[]},{"level":2,"title":"31. Golang中的数组和切片有哪些初始化方式？","slug":"_31-golang中的数组和切片有哪些初始化方式","link":"#_31-golang中的数组和切片有哪些初始化方式","children":[]},{"level":2,"title":"32. 什么是Golang中的内存分配（memory allocation）？","slug":"_32-什么是golang中的内存分配-memory-allocation","link":"#_32-什么是golang中的内存分配-memory-allocation","children":[]},{"level":2,"title":"33. Golang中的函数参数传递是值传递还是引用传递？","slug":"_33-golang中的函数参数传递是值传递还是引用传递","link":"#_33-golang中的函数参数传递是值传递还是引用传递","children":[]},{"level":2,"title":"34. 什么是Golang中的零值（zero value）？","slug":"_34-什么是golang中的零值-zero-value","link":"#_34-什么是golang中的零值-zero-value","children":[]},{"level":2,"title":"35. 解释Golang中的\\"自定义结构体类型\\"（custom struct type）。","slug":"_35-解释golang中的-自定义结构体类型-custom-struct-type-。","link":"#_35-解释golang中的-自定义结构体类型-custom-struct-type-。","children":[]},{"level":2,"title":"36. Golang中的\\"range\\"关键字的用途是什么？","slug":"_36-golang中的-range-关键字的用途是什么","link":"#_36-golang中的-range-关键字的用途是什么","children":[]},{"level":2,"title":"37. 什么是Golang中的运行时（runtime）？","slug":"_37-什么是golang中的运行时-runtime","link":"#_37-什么是golang中的运行时-runtime","children":[]},{"level":2,"title":"38. Golang中的\\"make\\"函数用于创建哪种数据类型？","slug":"_38-golang中的-make-函数用于创建哪种数据类型","link":"#_38-golang中的-make-函数用于创建哪种数据类型","children":[]},{"level":2,"title":"39. 解释Golang中的\\"函数闭包\\"（function closure）。","slug":"_39-解释golang中的-函数闭包-function-closure-。","link":"#_39-解释golang中的-函数闭包-function-closure-。","children":[]},{"level":2,"title":"40. 什么是Golang中的互斥锁（mutex）？","slug":"_40-什么是golang中的互斥锁-mutex","link":"#_40-什么是golang中的互斥锁-mutex","children":[]},{"level":2,"title":"41. Golang中的\\"通道\\"（channel）可以被关闭吗？有什么作用？","slug":"_41-golang中的-通道-channel-可以被关闭吗-有什么作用","link":"#_41-golang中的-通道-channel-可以被关闭吗-有什么作用","children":[]},{"level":2,"title":"42. 什么是Golang中的数据序列化（data serialization）？","slug":"_42-什么是golang中的数据序列化-data-serialization","link":"#_42-什么是golang中的数据序列化-data-serialization","children":[]},{"level":2,"title":"43. Golang中的\\"结构体\\"（struct）和\\"指针\\"（pointer）之间的关系是什么？","slug":"_43-golang中的-结构体-struct-和-指针-pointer-之间的关系是什么","link":"#_43-golang中的-结构体-struct-和-指针-pointer-之间的关系是什么","children":[]},{"level":2,"title":"44. 什么是Golang中的并行编程（parallel programming）？","slug":"_44-什么是golang中的并行编程-parallel-programming","link":"#_44-什么是golang中的并行编程-parallel-programming","children":[]},{"level":2,"title":"45. Golang中的\\"panic\\"和\\"recover\\"是否仅限于处理错误？","slug":"_45-golang中的-panic-和-recover-是否仅限于处理错误","link":"#_45-golang中的-panic-和-recover-是否仅限于处理错误","children":[]},{"level":2,"title":"46. 什么是Golang中的命令行参数（command-line arguments）？","slug":"_46-什么是golang中的命令行参数-command-line-arguments","link":"#_46-什么是golang中的命令行参数-command-line-arguments","children":[]},{"level":2,"title":"47. Golang中的\\"切片\\"（slice）可以包含哪些类型的元素？","slug":"_47-golang中的-切片-slice-可以包含哪些类型的元素","link":"#_47-golang中的-切片-slice-可以包含哪些类型的元素","children":[]},{"level":2,"title":"48. 什么是Golang中的零值接口（zero value interface）？","slug":"_48-什么是golang中的零值接口-zero-value-interface","link":"#_48-什么是golang中的零值接口-zero-value-interface","children":[]},{"level":2,"title":"49. Golang中的\\"函数\\"（function）和\\"方法\\"（method）之间的区别是什么？","slug":"_49-golang中的-函数-function-和-方法-method-之间的区别是什么","link":"#_49-golang中的-函数-function-和-方法-method-之间的区别是什么","children":[]},{"level":2,"title":"50. 什么是Golang中的\\"接口组合\\"（interface composition）？","slug":"_50-什么是golang中的-接口组合-interface-composition","link":"#_50-什么是golang中的-接口组合-interface-composition","children":[]},{"level":2,"title":"51. Golang中的\\"defer\\"语句是否会导致资源泄漏？","slug":"_51-golang中的-defer-语句是否会导致资源泄漏","link":"#_51-golang中的-defer-语句是否会导致资源泄漏","children":[]},{"level":2,"title":"52. 什么是Golang中的\\"反射\\"（reflection）？","slug":"_52-什么是golang中的-反射-reflection","link":"#_52-什么是golang中的-反射-reflection","children":[]},{"level":2,"title":"53. Golang中的\\"垃圾回收\\"（garbage collection）是否会导致暂停？","slug":"_53-golang中的-垃圾回收-garbage-collection-是否会导致暂停","link":"#_53-golang中的-垃圾回收-garbage-collection-是否会导致暂停","children":[]},{"level":2,"title":"54. 什么是Golang中的\\"HTTP路由\\"（HTTP routing）？","slug":"_54-什么是golang中的-http路由-http-routing","link":"#_54-什么是golang中的-http路由-http-routing","children":[]},{"level":2,"title":"55. Golang中的\\"空白标识符\\"（underscore）有什么用途？","slug":"_55-golang中的-空白标识符-underscore-有什么用途","link":"#_55-golang中的-空白标识符-underscore-有什么用途","children":[]},{"level":2,"title":"56. 什么是Golang中的\\"模块\\"（module）？","slug":"_56-什么是golang中的-模块-module","link":"#_56-什么是golang中的-模块-module","children":[]},{"level":2,"title":"57. Golang中的\\"接口\\"（interface）是否支持多继承？","slug":"_57-golang中的-接口-interface-是否支持多继承","link":"#_57-golang中的-接口-interface-是否支持多继承","children":[]},{"level":2,"title":"58. 什么是Golang中的\\"多返回值\\"（multiple return values）？","slug":"_58-什么是golang中的-多返回值-multiple-return-values","link":"#_58-什么是golang中的-多返回值-multiple-return-values","children":[]},{"level":2,"title":"59. Golang中的\\"切片\\"（slice）和\\"切片切割\\"（slice slicing）是什么？","slug":"_59-golang中的-切片-slice-和-切片切割-slice-slicing-是什么","link":"#_59-golang中的-切片-slice-和-切片切割-slice-slicing-是什么","children":[]},{"level":2,"title":"60. 什么是Golang中的\\"协程\\"（coroutine）？","slug":"_60-什么是golang中的-协程-coroutine","link":"#_60-什么是golang中的-协程-coroutine","children":[]},{"level":2,"title":"61. Golang中的\\"文件处理\\"（file handling）有哪些方法？","slug":"_61-golang中的-文件处理-file-handling-有哪些方法","link":"#_61-golang中的-文件处理-file-handling-有哪些方法","children":[]},{"level":2,"title":"62. 什么是Golang中的\\"Map\\"和\\"字典\\"（dictionary）？","slug":"_62-什么是golang中的-map-和-字典-dictionary","link":"#_62-什么是golang中的-map-和-字典-dictionary","children":[]},{"level":2,"title":"63. Golang中的\\"并发通信\\"（concurrent communication）有哪些方式？","slug":"_63-golang中的-并发通信-concurrent-communication-有哪些方式","link":"#_63-golang中的-并发通信-concurrent-communication-有哪些方式","children":[]},{"level":2,"title":"64. 什么是Golang中的\\"分片\\"（sharding）？","slug":"_64-什么是golang中的-分片-sharding","link":"#_64-什么是golang中的-分片-sharding","children":[]},{"level":2,"title":"65. Golang中的\\"字符串连接\\"（string concatenation）应该如何处理？","slug":"_65-golang中的-字符串连接-string-concatenation-应该如何处理","link":"#_65-golang中的-字符串连接-string-concatenation-应该如何处理","children":[]},{"level":2,"title":"66. 什么是Golang中的\\"交叉编译\\"（cross-compilation）？","slug":"_66-什么是golang中的-交叉编译-cross-compilation","link":"#_66-什么是golang中的-交叉编译-cross-compilation","children":[]},{"level":2,"title":"67. Golang中的\\"空指针\\"（nil pointer）和\\"零值\\"（zero value）有何不同？","slug":"_67-golang中的-空指针-nil-pointer-和-零值-zero-value-有何不同","link":"#_67-golang中的-空指针-nil-pointer-和-零值-zero-value-有何不同","children":[]},{"level":2,"title":"68. 什么是Golang中的\\"接口隐式实现\\"（implicit interface implementation）？","slug":"_68-什么是golang中的-接口隐式实现-implicit-interface-implementation","link":"#_68-什么是golang中的-接口隐式实现-implicit-interface-implementation","children":[]},{"level":2,"title":"69. Golang中的\\"闭包\\"（closure）是否会导致内存泄漏？","slug":"_69-golang中的-闭包-closure-是否会导致内存泄漏","link":"#_69-golang中的-闭包-closure-是否会导致内存泄漏","children":[]},{"level":2,"title":"70. 什么是Golang中的\\"JSON编码\\"和\\"JSON解码\\"（JSON encoding and decoding）？","slug":"_70-什么是golang中的-json编码-和-json解码-json-encoding-and-decoding","link":"#_70-什么是golang中的-json编码-和-json解码-json-encoding-and-decoding","children":[]},{"level":2,"title":"71. Golang中的\\"死锁\\"（deadlock）是什么？如何避免死锁？","slug":"_71-golang中的-死锁-deadlock-是什么-如何避免死锁","link":"#_71-golang中的-死锁-deadlock-是什么-如何避免死锁","children":[]},{"level":2,"title":"72. 什么是Golang中的\\"内嵌结构\\"（embedded structure）？","slug":"_72-什么是golang中的-内嵌结构-embedded-structure","link":"#_72-什么是golang中的-内嵌结构-embedded-structure","children":[]},{"level":2,"title":"73. Golang中的\\"迭代\\"（iteration）和\\"循环\\"（loop）之间有何不同？","slug":"_73-golang中的-迭代-iteration-和-循环-loop-之间有何不同","link":"#_73-golang中的-迭代-iteration-和-循环-loop-之间有何不同","children":[]},{"level":2,"title":"74. 什么是Golang中的\\"运行时恐慌\\"（runtime panic）？","slug":"_74-什么是golang中的-运行时恐慌-runtime-panic","link":"#_74-什么是golang中的-运行时恐慌-runtime-panic","children":[]},{"level":2,"title":"75. Golang中的\\"协程调度\\"（goroutine scheduling）是如何工作的？","slug":"_75-golang中的-协程调度-goroutine-scheduling-是如何工作的","link":"#_75-golang中的-协程调度-goroutine-scheduling-是如何工作的","children":[]},{"level":2,"title":"76. 什么是Golang中的\\"普通函数\\"（plain function）和\\"递归函数\\"（recursive function）？","slug":"_76-什么是golang中的-普通函数-plain-function-和-递归函数-recursive-function","link":"#_76-什么是golang中的-普通函数-plain-function-和-递归函数-recursive-function","children":[]},{"level":2,"title":"77. Golang中的\\"字符串比较\\"（string comparison）应该如何处理？","slug":"_77-golang中的-字符串比较-string-comparison-应该如何处理","link":"#_77-golang中的-字符串比较-string-comparison-应该如何处理","children":[]},{"level":2,"title":"78. 什么是Golang中的\\"初始化函数\\"（init function）？","slug":"_78-什么是golang中的-初始化函数-init-function","link":"#_78-什么是golang中的-初始化函数-init-function","children":[]},{"level":2,"title":"79. Golang中的\\"空接口\\"（empty interface）是否有什么用途？","slug":"_79-golang中的-空接口-empty-interface-是否有什么用途","link":"#_79-golang中的-空接口-empty-interface-是否有什么用途","children":[]},{"level":2,"title":"80. 什么是Golang中的\\"RWMutex\\"和\\"Mutex\\"？","slug":"_80-什么是golang中的-rwmutex-和-mutex","link":"#_80-什么是golang中的-rwmutex-和-mutex","children":[]},{"level":2,"title":"81. Golang中的\\"迭代顺序\\"（iteration order）是否保证是有序的？","slug":"_81-golang中的-迭代顺序-iteration-order-是否保证是有序的","link":"#_81-golang中的-迭代顺序-iteration-order-是否保证是有序的","children":[]},{"level":2,"title":"82. 什么是Golang中的\\"包\\"（package）？","slug":"_82-什么是golang中的-包-package","link":"#_82-什么是golang中的-包-package","children":[]},{"level":2,"title":"83. Golang中的\\"垃圾回收触发条件\\"（garbage collection trigger conditions）是什么？","slug":"_83-golang中的-垃圾回收触发条件-garbage-collection-trigger-conditions-是什么","link":"#_83-golang中的-垃圾回收触发条件-garbage-collection-trigger-conditions-是什么","children":[]},{"level":2,"title":"84. 什么是Golang中的\\"测试\\"（testing）和\\"性能测试\\"（performance testing）？","slug":"_84-什么是golang中的-测试-testing-和-性能测试-performance-testing","link":"#_84-什么是golang中的-测试-testing-和-性能测试-performance-testing","children":[]},{"level":2,"title":"85. Golang中的\\"并发模型\\"（concurrency model）有哪些？","slug":"_85-golang中的-并发模型-concurrency-model-有哪些","link":"#_85-golang中的-并发模型-concurrency-model-有哪些","children":[]},{"level":2,"title":"86. 什么是Golang中的\\"通道缓冲\\"（channel buffering）？","slug":"_86-什么是golang中的-通道缓冲-channel-buffering","link":"#_86-什么是golang中的-通道缓冲-channel-buffering","children":[]},{"level":2,"title":"87. Golang中的\\"函数参数传递\\"（function parameter passing）是值传递还是引用传递？","slug":"_87-golang中的-函数参数传递-function-parameter-passing-是值传递还是引用传递","link":"#_87-golang中的-函数参数传递-function-parameter-passing-是值传递还是引用传递","children":[]},{"level":2,"title":"88. 什么是Golang中的\\"并发安全\\"（concurrency safety）？","slug":"_88-什么是golang中的-并发安全-concurrency-safety","link":"#_88-什么是golang中的-并发安全-concurrency-safety","children":[]},{"level":2,"title":"89. Golang中的\\"select语句\\"（select statement）是否可以用于多个通道？","slug":"_89-golang中的-select语句-select-statement-是否可以用于多个通道","link":"#_89-golang中的-select语句-select-statement-是否可以用于多个通道","children":[]},{"level":2,"title":"90. 什么是Golang中的\\"内存分配\\"（memory allocation）？","slug":"_90-什么是golang中的-内存分配-memory-allocation","link":"#_90-什么是golang中的-内存分配-memory-allocation","children":[]},{"level":2,"title":"91. Golang中的\\"垃圾回收\\"（garbage collection）如何工作？","slug":"_91-golang中的-垃圾回收-garbage-collection-如何工作","link":"#_91-golang中的-垃圾回收-garbage-collection-如何工作","children":[]},{"level":2,"title":"92. 什么是Golang中的\\"单元测试\\"（unit testing）？","slug":"_92-什么是golang中的-单元测试-unit-testing","link":"#_92-什么是golang中的-单元测试-unit-testing","children":[]},{"level":2,"title":"93. Golang中的\\"同步\\"（synchronization）和\\"互斥锁\\"（mutex）有何不同？","slug":"_93-golang中的-同步-synchronization-和-互斥锁-mutex-有何不同","link":"#_93-golang中的-同步-synchronization-和-互斥锁-mutex-有何不同","children":[]},{"level":2,"title":"94. 什么是Golang中的\\"异常\\"（panic）？","slug":"_94-什么是golang中的-异常-panic","link":"#_94-什么是golang中的-异常-panic","children":[]},{"level":2,"title":"95. Golang中的\\"反射\\"（reflection）如何使用？","slug":"_95-golang中的-反射-reflection-如何使用","link":"#_95-golang中的-反射-reflection-如何使用","children":[]},{"level":2,"title":"96. 什么是Golang中的\\"通道关闭\\"（channel closing）？","slug":"_96-什么是golang中的-通道关闭-channel-closing","link":"#_96-什么是golang中的-通道关闭-channel-closing","children":[]},{"level":2,"title":"97. Golang中的\\"写入屏障\\"（write barrier）和\\"读取屏障\\"（read barrier）有什么作用？","slug":"_97-golang中的-写入屏障-write-barrier-和-读取屏障-read-barrier-有什么作用","link":"#_97-golang中的-写入屏障-write-barrier-和-读取屏障-read-barrier-有什么作用","children":[]},{"level":2,"title":"98. 什么是Golang中的\\"并发控制\\"（concurrency control）？","slug":"_98-什么是golang中的-并发控制-concurrency-control","link":"#_98-什么是golang中的-并发控制-concurrency-control","children":[]},{"level":2,"title":"99. Golang中的\\"环境变量\\"（environment variables）如何访问？","slug":"_99-golang中的-环境变量-environment-variables-如何访问","link":"#_99-golang中的-环境变量-environment-variables-如何访问","children":[]},{"level":2,"title":"100. 什么是Golang中的\\"并发设计模式\\"（concurrency design patterns）？","slug":"_100-什么是golang中的-并发设计模式-concurrency-design-patterns","link":"#_100-什么是golang中的-并发设计模式-concurrency-design-patterns","children":[]}],"git":{"updatedTime":1699946055000},"readingTime":{"minutes":18.23,"words":5468},"filePathRelative":"note/interview/golang/chatgpt/1.qa.md","excerpt":"<h2> 1. 什么是Goroutine？如何创建一个Goroutine？</h2>\\n<p>Goroutine是Golang中的轻量级线程，由Golang的运行时环境管理。Goroutines用于并发执行函数，可以充分利用多核处理器的性能。</p>"}');export{l as data};
