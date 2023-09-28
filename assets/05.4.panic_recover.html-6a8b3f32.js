const e=JSON.parse('{"key":"v-50e5a21a","path":"/reading/golang/the-design-and-implementation-of-golang/part2-foundation/ch05-keyword/05.4.panic_recover.html","title":"5.4 panic and recover","lang":"zh-CN","frontmatter":{"title":"5.4 panic and recover","date":"2023-09-25T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"5.4.1 现象","slug":"_5-4-1-现象","link":"#_5-4-1-现象","children":[{"level":3,"title":"跨协程失效","slug":"跨协程失效","link":"#跨协程失效","children":[]},{"level":3,"title":"失效的recover","slug":"失效的recover","link":"#失效的recover","children":[]},{"level":3,"title":"panic嵌套","slug":"panic嵌套","link":"#panic嵌套","children":[]}]},{"level":2,"title":"5.4.2 数据结构","slug":"_5-4-2-数据结构","link":"#_5-4-2-数据结构","children":[]},{"level":2,"title":"5.4.3 panic","slug":"_5-4-3-panic","link":"#_5-4-3-panic","children":[]},{"level":2,"title":"5.4.4 recover","slug":"_5-4-4-recover","link":"#_5-4-4-recover","children":[]},{"level":2,"title":"5.4.5 小结","slug":"_5-4-5-小结","link":"#_5-4-5-小结","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":4.63,"words":1388},"filePathRelative":"reading/golang/the-design-and-implementation-of-golang/part2-foundation/ch05-keyword/05.4.panic_recover.md","localizedDate":"2023年9月25日","excerpt":"<p>Golang 中的<code>panic</code>和<code>recover</code>：</p>\\n<ul>\\n<li>\\n<p><code>panic</code> 能够改变程序的控制流，调用 <code>panic</code> 后会立刻停止执行当前函数的剩余代码，并在当前 Goroutine 中递归执行调用方的 <code>defer</code></p>\\n</li>\\n<li>\\n<p><code>recover</code> 可以中止 <code>panic</code> 造成的程序崩溃。它是一个<strong>只能</strong>在 <code>defer</code> 中发挥作用的函数，在其他作用域中调用不会发挥作用</p>\\n</li>\\n</ul>"}');export{e as data};
