const n=JSON.parse('{"key":"v-411e643a","path":"/note/golang/open-source-books/the-way-to-go/05/05.6.html","title":"5.6 标签与 goto","lang":"zh-CN","frontmatter":{},"headers":[],"readingTime":{"minutes":0.69,"words":208},"filePathRelative":"note/golang/open-source-books/the-way-to-go/05/05.6.md","excerpt":"<h1> 5.6 标签与 goto</h1>\\n<p><strong>特别注意</strong> 使用标签和 <code>goto</code> 语句是不被鼓励的：它们会很快导致非常糟糕的程序设计，而且总有更加可读的替代方案来实现相同的需求。</p>\\n<p><code>for</code>、<code>switch</code> 或 <code>select</code> 语句都可以配合标签 (label) 形式的标识符使用，即某一行第一个以冒号 (<code>:</code>) 结尾的单词（gofmt 会将后续代码自动移至下一行）。</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">labelInFor</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\nLABEL1<span class=\\"token punctuation\\">:</span>\\n\\t<span class=\\"token keyword\\">for</span> i <span class=\\"token operator\\">:=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">for</span> j <span class=\\"token operator\\">:=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> j <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span> j<span class=\\"token operator\\">++</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token keyword\\">if</span> j <span class=\\"token operator\\">==</span> <span class=\\"token number\\">2</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t<span class=\\"token keyword\\">continue</span> LABEL1\\n\\t\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t\\t\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"i is: %d, and j is: %d\\\\n\\"</span><span class=\\"token punctuation\\">,</span> i<span class=\\"token punctuation\\">,</span> j<span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};