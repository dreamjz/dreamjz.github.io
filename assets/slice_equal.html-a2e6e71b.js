const e=JSON.parse('{"key":"v-95a1fcd4","path":"/blog/golang/performance/slice_equal.html","title":"判断切片是否相同的两种方式性能比较","lang":"zh-CN","frontmatter":{"title":"判断切片是否相同的两种方式性能比较","date":"2023-10-15T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. 实现","slug":"_1-实现","link":"#_1-实现","children":[{"level":3,"title":"1.1 单元测试","slug":"_1-1-单元测试","link":"#_1-1-单元测试","children":[]}]},{"level":2,"title":"2. Benchmark","slug":"_2-benchmark","link":"#_2-benchmark","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1697546786000},"readingTime":{"minutes":2.14,"words":641},"filePathRelative":"blog/golang/performance/slice_equal.md","localizedDate":"2023年10月15日","excerpt":"<p>比较两个切片可以使用两种方式：</p>\\n<ol>\\n<li>遍历切片比较每个元素，可以判断临界条件以快速失败提高性能</li>\\n<li>使用反射，<code>reflect.DeepEqual(x, y any) bool</code>，因为是通用型函数，并且使用反射获取类型信息，在有性能要求的场景中不建议使用</li>\\n</ol>"}');export{e as data};
