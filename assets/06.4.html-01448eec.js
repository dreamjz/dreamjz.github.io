const n=JSON.parse('{"key":"v-3a7a929c","path":"/note/golang/open-source-books/the-way-to-go/06/06.4.html","title":"6.4 defer 和追踪","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"defer","slug":"defer","link":"#defer","children":[]},{"level":2,"title":"追踪","slug":"追踪","link":"#追踪","children":[]},{"level":2,"title":"记录参数和返回值","slug":"记录参数和返回值","link":"#记录参数和返回值","children":[]}],"git":{"updatedTime":1684038853000},"readingTime":{"minutes":1.04,"words":313},"filePathRelative":"note/golang/open-source-books/the-way-to-go/06/06.4.md","excerpt":"<h1> 6.4 defer 和追踪</h1>\\n<h2> defer</h2>\\n<p><code>defer</code> 允许推迟语句到函数返回之前的时候才执行。</p>\\n<p>例： <a href=\\"https://github.com/dreamjz/golang-notes/tree/main/open-source-books/the-way-to-go/chapter-06/06_4_defer.go\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">06_4_defer.go</a></p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">deferF</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token function\\">f1</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">f1</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"f1 top\\"</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token keyword\\">defer</span> <span class=\\"token function\\">f2</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"f1 bottom\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">f2</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"f2\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
