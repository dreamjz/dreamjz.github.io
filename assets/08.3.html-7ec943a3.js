const n=JSON.parse('{"key":"v-3251793d","path":"/note/golang/open-source-books/the-way-to-go/08/08.3.html","title":"8.3 for range","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1684038853000},"readingTime":{"minutes":0.1,"words":31},"filePathRelative":"note/golang/open-source-books/the-way-to-go/08/08.3.md","excerpt":"<h1> 8.3 for range</h1>\\n<p><code>for-range</code> 遍历map:</p>\\n<ul>\\n<li>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">for</span> key<span class=\\"token punctuation\\">,</span> val <span class=\\"token operator\\">:=</span> <span class=\\"token keyword\\">range</span> m <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// ...</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">for</span> key <span class=\\"token operator\\">:=</span> <span class=\\"token keyword\\">range</span> m <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// ...</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">for</span> <span class=\\"token boolean\\">_</span><span class=\\"token punctuation\\">,</span> val <span class=\\"token operator\\">:=</span> <span class=\\"token keyword\\">range</span> m <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// ...</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>"}');export{n as data};