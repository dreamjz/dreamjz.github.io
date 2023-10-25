const n=JSON.parse('{"key":"v-35bb2a7b","path":"/note/golang/open-source-books/the-way-to-go/08/08.5.html","title":"8.5 map 的排序","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1684038853000},"readingTime":{"minutes":0.21,"words":64},"filePathRelative":"note/golang/open-source-books/the-way-to-go/08/08.5.md","excerpt":"<h1> 8.5 map 的排序</h1>\\n<p>map 是<strong>无序</strong>的。</p>\\n<p>若需按顺序访问可以：</p>\\n<ul>\\n<li>将key进行排序</li>\\n<li>按照排序后的key获取val</li>\\n</ul>\\n<p>需要有序列表的形式，可以使用结构体切片：</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">type</span> s <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n    key <span class=\\"token builtin\\">string</span>\\n    val <span class=\\"token builtin\\">int</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">var</span> ss <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>s\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
