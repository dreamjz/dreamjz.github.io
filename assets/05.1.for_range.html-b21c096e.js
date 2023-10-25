const n=JSON.parse('{"key":"v-06735c8b","path":"/reading/golang/the-design-and-implementation-of-golang/part2-foundation/ch05-keyword/05.1.for_range.html","title":"5.1 for and range","lang":"zh-CN","frontmatter":{"title":"5.1 for and range","date":"2023-09-25T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"5.1.1 现象","slug":"_5-1-1-现象","link":"#_5-1-1-现象","children":[{"level":3,"title":"循环永动机","slug":"循环永动机","link":"#循环永动机","children":[]},{"level":3,"title":"神奇的指针","slug":"神奇的指针","link":"#神奇的指针","children":[]},{"level":3,"title":"清空","slug":"清空","link":"#清空","children":[]},{"level":3,"title":"哈希表的随机遍历","slug":"哈希表的随机遍历","link":"#哈希表的随机遍历","children":[]}]},{"level":2,"title":"5.1.2 for","slug":"_5-1-2-for","link":"#_5-1-2-for","children":[]},{"level":2,"title":"5.1.3 for-range","slug":"_5-1-3-for-range","link":"#_5-1-3-for-range","children":[{"level":3,"title":"数组和切片","slug":"数组和切片","link":"#数组和切片","children":[]},{"level":3,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[]},{"level":3,"title":"字符串","slug":"字符串","link":"#字符串","children":[]},{"level":3,"title":"通道","slug":"通道","link":"#通道","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1695906150000},"readingTime":{"minutes":6.07,"words":1821},"filePathRelative":"reading/golang/the-design-and-implementation-of-golang/part2-foundation/ch05-keyword/05.1.for_range.md","localizedDate":"2023年9月25日","excerpt":"<p>Golang 中的循环有两种：</p>\\n<ol>\\n<li><code>for</code></li>\\n<li><code>for-range</code></li>\\n</ol>\\n<p><code>for-range</code>在编译时将会被转换成普通的<code>for</code>循环，在最终编译的汇编中的结构是相同的。</p>\\n<h2> 5.1.1 现象</h2>\\n<h3> 循环永动机</h3>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\tarr <span class=\\"token operator\\">:=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">{</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token keyword\\">for</span> <span class=\\"token boolean\\">_</span><span class=\\"token punctuation\\">,</span> v <span class=\\"token operator\\">:=</span> <span class=\\"token keyword\\">range</span> arr <span class=\\"token punctuation\\">{</span>\\n\\t\\tarr <span class=\\"token operator\\">=</span> <span class=\\"token function\\">append</span><span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">,</span> v<span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n$ <span class=\\"token keyword\\">go</span> run main<span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">go</span>\\n<span class=\\"token number\\">1</span> <span class=\\"token number\\">2</span> <span class=\\"token number\\">3</span> <span class=\\"token number\\">1</span> <span class=\\"token number\\">2</span> <span class=\\"token number\\">3</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
