const n=JSON.parse('{"key":"v-49ff0382","path":"/note/golang/open-source-books/the-way-to-go/13/13.1.html","title":"13.1 错误处理","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"13.1.1 定义错误","slug":"_13-1-1-定义错误","link":"#_13-1-1-定义错误","children":[]},{"level":2,"title":"13.1.2 使用 fmt 创建错误对象","slug":"_13-1-2-使用-fmt-创建错误对象","link":"#_13-1-2-使用-fmt-创建错误对象","children":[]}],"readingTime":{"minutes":0.36,"words":109},"filePathRelative":"note/golang/open-source-books/the-way-to-go/13/13.1.md","excerpt":"<h1> 13.1 错误处理</h1>\\n<p>Go 有预先定义的 <code>error</code> 接口类型</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">type</span> <span class=\\"token builtin\\">error</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">Error</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">string</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};