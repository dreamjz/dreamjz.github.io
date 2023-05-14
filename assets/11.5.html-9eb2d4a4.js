const n=JSON.parse('{"key":"v-2f6fbd0a","path":"/note/golang/open-source-books/the-way-to-go/11/11.5.html","title":"11.5 测试一个值是否实现了某个接口","lang":"zh-CN","frontmatter":{},"headers":[],"readingTime":{"minutes":0.19,"words":56},"filePathRelative":"note/golang/open-source-books/the-way-to-go/11/11.5.md","excerpt":"<h1> 11.5 测试一个值是否实现了某个接口</h1>\\n<p>可以通过类型断言判断是否实现了接口</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">type</span> Stringer <span class=\\"token keyword\\">interface</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">String</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">string</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">if</span> sv<span class=\\"token punctuation\\">,</span> ok <span class=\\"token operator\\">:=</span> v<span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">(</span>Stringer<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> ok <span class=\\"token punctuation\\">{</span>\\n    fmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"v implements String(): %s\\\\n\\"</span><span class=\\"token punctuation\\">,</span> sv<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">String</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// note: sv, not v</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
