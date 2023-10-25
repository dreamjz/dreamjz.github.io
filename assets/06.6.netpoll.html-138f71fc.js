const n=JSON.parse('{"key":"v-62f503b0","path":"/reading/golang/the-design-and-implementation-of-golang/part3-runtime/06-concurrency/06.6.netpoll.html","title":"6.6 网络轮询器","lang":"zh-CN","frontmatter":{"title":"6.6 网络轮询器","date":"2023-10-02T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"6.6.1 设计原理","slug":"_6-6-1-设计原理","link":"#_6-6-1-设计原理","children":[{"level":3,"title":"I/O 模型","slug":"i-o-模型","link":"#i-o-模型","children":[]},{"level":3,"title":"多模块","slug":"多模块","link":"#多模块","children":[]}]},{"level":2,"title":"6.6.2 数据结构","slug":"_6-6-2-数据结构","link":"#_6-6-2-数据结构","children":[]},{"level":2,"title":"6.6.3 多路复用","slug":"_6-6-3-多路复用","link":"#_6-6-3-多路复用","children":[{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"轮询事件","slug":"轮询事件","link":"#轮询事件","children":[]},{"level":3,"title":"事件循环","slug":"事件循环","link":"#事件循环","children":[]},{"level":3,"title":"截止日期","slug":"截止日期","link":"#截止日期","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1696286681000},"readingTime":{"minutes":12.19,"words":3658},"filePathRelative":"reading/golang/the-design-and-implementation-of-golang/part3-runtime/06-concurrency/06.6.netpoll.md","localizedDate":"2023年10月2日","excerpt":"<h2> 6.6.1 设计原理</h2>\\n<h3> I/O 模型</h3>\\n<p>操作系统中包含：</p>\\n<ol>\\n<li>阻塞 I/O</li>\\n<li>非阻塞 I/O</li>\\n<li>信号驱动 I/O</li>\\n<li>异步 I/O</li>\\n<li>I/O 多路复用</li>\\n</ol>\\n<h4> 阻塞 I/O</h4>\\n<p>阻塞 I/O 是最常见的 I/O 模型，通过 <code>read</code> 或者 <code>write</code> 等系统调用读写文件或者网络时，应用程序会被阻塞：</p>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token class-name\\">ssize_t</span> <span class=\\"token function\\">read</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> fd<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">void</span> <span class=\\"token operator\\">*</span>buf<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">size_t</span> count<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\">ssize_t</span> <span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> fd<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">const</span> <span class=\\"token keyword\\">void</span> <span class=\\"token operator\\">*</span>buf<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">size_t</span> nbytes<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
