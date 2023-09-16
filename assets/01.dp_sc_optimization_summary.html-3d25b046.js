const s=JSON.parse('{"key":"v-810fe0d8","path":"/blog/algorithm/dynamic-programming/01.dp_sc_optimization_summary.html","title":"动态规划空间复杂度优化总结","lang":"zh-CN","frontmatter":{"title":"动态规划空间复杂度优化总结","date":"2023-09-16T00:00:00.000Z","category":["algorithm"]},"headers":[{"level":2,"title":"1. 通用方式: 行数为2的二维数组","slug":"_1-通用方式-行数为2的二维数组","link":"#_1-通用方式-行数为2的二维数组","children":[]},{"level":2,"title":"2. 一维数组","slug":"_2-一维数组","link":"#_2-一维数组","children":[{"level":3,"title":"2.1 计算时需要左侧和正上方的数据","slug":"_2-1-计算时需要左侧和正上方的数据","link":"#_2-1-计算时需要左侧和正上方的数据","children":[]},{"level":3,"title":"2.2 计算时需要左上方和正上方的数据","slug":"_2-2-计算时需要左上方和正上方的数据","link":"#_2-2-计算时需要左上方和正上方的数据","children":[]},{"level":3,"title":"2.3 计算时需要左侧, 上方, 左上方三个数据","slug":"_2-3-计算时需要左侧-上方-左上方三个数据","link":"#_2-3-计算时需要左侧-上方-左上方三个数据","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":5.56,"words":1668},"filePathRelative":"blog/algorithm/dynamic-programming/01.dp_sc_optimization_summary.md","localizedDate":"2023年9月16日","excerpt":"<p>使用动态规划解决问题时, 若使用从下至上的迭代法, 可能需要使用二维数组来缓存计算结果.</p>\\n<p>二维数组的空间复杂度为 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>O</mi><mo stretchy=\\"false\\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">O(n^2)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02778em;\\">O</span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">n</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span><span class=\\"mclose\\">)</span></span></span></span>,  那么需要优化缓存的大小以提高效率.</p>"}');export{s as data};
