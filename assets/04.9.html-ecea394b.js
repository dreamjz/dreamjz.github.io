const n=JSON.parse('{"key":"v-49770e77","path":"/note/golang/open-source-books/the-way-to-go/04/04.9.html","title":"4.9 指针","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"间接引用","slug":"间接引用","link":"#间接引用","children":[]},{"level":2,"title":"应用","slug":"应用","link":"#应用","children":[]}],"readingTime":{"minutes":2.26,"words":678},"filePathRelative":"note/golang/open-source-books/the-way-to-go/04/04.9.md","excerpt":"<h1> 4.9 指针</h1>\\n<p>程序在内存存储其值，每个内存块（或字）有一个地址，通常使用十六进制数表示</p>\\n<p>Golang的<strong>取址符</strong>为<code>&amp;</code>,在变量前使用就会返回响应变量的内存地址,</p>\\n<p>内存地址可以存储在名为指针的特殊数据类型中，指针变量的缩写通常为ptr。</p>\\n<p>下面的例子中intP是一个int型指针：<code>*int</code>，intP存储了i1的内存地址；它指向了i1的位置，引用了变量i1</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">var</span> intP <span class=\\"token operator\\">*</span><span class=\\"token builtin\\">int</span>\\n<span class=\\"token keyword\\">var</span> i1 <span class=\\"token operator\\">=</span> <span class=\\"token number\\">5</span>\\n<span class=\\"token comment\\">//intP指向i1</span>\\nintP <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">&amp;</span>i1\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
