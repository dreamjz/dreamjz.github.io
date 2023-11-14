const e=JSON.parse('{"key":"v-3204c3dd","path":"/reading/golang/the-design-and-implementation-of-golang/part2-foundation/ch04-basic/04.2.interface.html","title":"4.2 接口","lang":"zh-CN","frontmatter":{"title":"4.2 接口","date":"2023-09-25T00:00:00.000Z","category":["golang"],"article":false},"headers":[{"level":2,"title":"4.2.1 概述","slug":"_4-2-1-概述","link":"#_4-2-1-概述","children":[{"level":3,"title":"隐式接口","slug":"隐式接口","link":"#隐式接口","children":[]},{"level":3,"title":"类型","slug":"类型","link":"#类型","children":[]},{"level":3,"title":"指针和接口","slug":"指针和接口","link":"#指针和接口","children":[]},{"level":3,"title":"nil 和 non-nil","slug":"nil-和-non-nil","link":"#nil-和-non-nil","children":[]}]},{"level":2,"title":"4.2.2 数据结构","slug":"_4-2-2-数据结构","link":"#_4-2-2-数据结构","children":[{"level":3,"title":"空接口 和 _type结构体","slug":"空接口-和-type结构体","link":"#空接口-和-type结构体","children":[]},{"level":3,"title":"接口 和 itab结构体","slug":"接口-和-itab结构体","link":"#接口-和-itab结构体","children":[]}]},{"level":2,"title":"4.2.3 类型转换","slug":"_4-2-3-类型转换","link":"#_4-2-3-类型转换","children":[{"level":3,"title":"指针类型 -> 接口","slug":"指针类型-接口","link":"#指针类型-接口","children":[]},{"level":3,"title":"值类型 -> 接口","slug":"值类型-接口","link":"#值类型-接口","children":[]}]},{"level":2,"title":"4.2.4 类型断言","slug":"_4-2-4-类型断言","link":"#_4-2-4-类型断言","children":[{"level":3,"title":"接口","slug":"接口","link":"#接口","children":[]},{"level":3,"title":"空接口","slug":"空接口","link":"#空接口","children":[]}]},{"level":2,"title":"4.2.5 动态派发","slug":"_4-2-5-动态派发","link":"#_4-2-5-动态派发","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1699943615000},"readingTime":{"minutes":11.79,"words":3538},"filePathRelative":"reading/golang/the-design-and-implementation-of-golang/part2-foundation/ch04-basic/04.2.interface.md","localizedDate":"2023年9月25日","excerpt":"<h2> 4.2.1 概述</h2>\\n<p>在计算机科学中，接口是计算机系统中多个组件共享的边界，不同的组件能够在边界上交换信息。</p>\\n<p>接口的<strong>本质</strong>是引入一个新的中间层，调用方可以通过接口与具体实现分离，解除上下游的耦合，上层的模块不再需要依赖下层的具体模块，只需要依赖一个约定好的接口。</p>\\n<figure><img src=\\"https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/202309260042299.png\\" alt=\\"golang-interface\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>golang-interface</figcaption></figure>"}');export{e as data};
