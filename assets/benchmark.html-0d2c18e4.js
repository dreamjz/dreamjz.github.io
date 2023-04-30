const n=JSON.parse('{"key":"v-40f6cc6c","path":"/note/golang/open-source-books/high-performance-go/performance-analysis/benchmark.html","title":"Benchmark","lang":"zh-CN","frontmatter":{"title":"Benchmark","date":"2022-04-12T00:00:00.000Z","category":["golang"],"timeline":true},"headers":[{"level":2,"title":"1. Benchmark 基准测试","slug":"_1-benchmark-基准测试","link":"#_1-benchmark-基准测试","children":[]},{"level":2,"title":"2. Benchmark","slug":"_2-benchmark","link":"#_2-benchmark","children":[{"level":3,"title":"2.1 计算第 N 个斐波那契数","slug":"_2-1-计算第-n-个斐波那契数","link":"#_2-1-计算第-n-个斐波那契数","children":[]},{"level":3,"title":"2.2 基准测试","slug":"_2-2-基准测试","link":"#_2-2-基准测试","children":[]},{"level":3,"title":"2.3 测试次数","slug":"_2-3-测试次数","link":"#_2-3-测试次数","children":[]},{"level":3,"title":"2.4 提升准确度","slug":"_2-4-提升准确度","link":"#_2-4-提升准确度","children":[]},{"level":3,"title":"2.5 内存分配情况","slug":"_2-5-内存分配情况","link":"#_2-5-内存分配情况","children":[]},{"level":3,"title":"2.6 测试不同的输入","slug":"_2-6-测试不同的输入","link":"#_2-6-测试不同的输入","children":[]}]},{"level":2,"title":"3. 注意事项","slug":"_3-注意事项","link":"#_3-注意事项","children":[{"level":3,"title":"3.1 RestTimer","slug":"_3-1-resttimer","link":"#_3-1-resttimer","children":[]},{"level":3,"title":"3.2 StopTimer & StartTimer","slug":"_3-2-stoptimer-starttimer","link":"#_3-2-stoptimer-starttimer","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":4.66,"words":1397},"filePathRelative":"note/golang/open-source-books/high-performance-go/performance-analysis/benchmark.md","localizedDate":"2022年4月12日","excerpt":"<h2> 1. Benchmark 基准测试</h2>\\n<p>Go 标准库的 <code>testing</code> 框架提供了基准测试 (benchmark) 的能力，可以很容易对某一段代码进行测试。</p>\\n<p>性能测试易受环境影响，所以需要保证测试环境的稳定。</p>\\n<h2> 2. Benchmark</h2>\\n<h3> 2.1 计算第 N 个斐波那契数</h3>\\n<p>新增 <code>fib.go</code> 实现函数 <code>fib</code> 用于计算第 N 个斐波那契数。</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">fib</span><span class=\\"token punctuation\\">(</span>n <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> n <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">||</span> n <span class=\\"token operator\\">==</span> <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> n\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">fib</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token operator\\">-</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> <span class=\\"token function\\">fib</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
