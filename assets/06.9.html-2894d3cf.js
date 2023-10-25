const n=JSON.parse('{"key":"v-4302cdb7","path":"/note/golang/open-source-books/the-way-to-go/06/06.9.html","title":"6.9 应用闭包：将函数作为返回值","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"工厂函数","slug":"工厂函数","link":"#工厂函数","children":[]},{"level":2,"title":"高阶函数","slug":"高阶函数","link":"#高阶函数","children":[]}],"git":{"updatedTime":1684038853000},"readingTime":{"minutes":0.99,"words":297},"filePathRelative":"note/golang/open-source-books/the-way-to-go/06/06.9.md","excerpt":"<h1> 6.9 应用闭包：将函数作为返回值</h1>\\n<p><a href=\\"path/06_9_function_return.go\\">06_9_function_return.go</a></p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">functionReturn</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\tp2 <span class=\\"token operator\\">:=</span> <span class=\\"token function\\">add2</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"p2(3): %d \\\\n\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">p2</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n\\ttwoAdder <span class=\\"token operator\\">:=</span> <span class=\\"token function\\">adder</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"twoAdder(3): %d\\\\n\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">twoAdder</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">add2</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span>b <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span>b <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">return</span> b <span class=\\"token operator\\">+</span> <span class=\\"token number\\">2</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">adder</span><span class=\\"token punctuation\\">(</span>a <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span>b <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span>b <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">return</span> a <span class=\\"token operator\\">+</span> b\\n\\t<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
