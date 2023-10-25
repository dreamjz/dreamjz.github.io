const n=JSON.parse('{"key":"v-2057ad0f","path":"/reading/golang/high-performance-go/02-datastructure/02.6.mem_alignment.html","title":"2.7 内存对齐","lang":"zh-CN","frontmatter":{"title":"2.7 内存对齐","date":"2023-10-03T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. 获取变量占用的内存大小","slug":"_1-获取变量占用的内存大小","link":"#_1-获取变量占用的内存大小","children":[]},{"level":2,"title":"2. 内存对齐","slug":"_2-内存对齐","link":"#_2-内存对齐","children":[{"level":3,"title":"2.1 为什么需要内存对齐","slug":"_2-1-为什么需要内存对齐","link":"#_2-1-为什么需要内存对齐","children":[]},{"level":3,"title":"2.2 unsafe.Alignof","slug":"_2-2-unsafe-alignof","link":"#_2-2-unsafe-alignof","children":[]},{"level":3,"title":"2.3 对齐保证(align guarantee)","slug":"_2-3-对齐保证-align-guarantee","link":"#_2-3-对齐保证-align-guarantee","children":[]}]},{"level":2,"title":"3. 内存对齐技巧","slug":"_3-内存对齐技巧","link":"#_3-内存对齐技巧","children":[{"level":3,"title":"3.1 合理布局减少内存占用","slug":"_3-1-合理布局减少内存占用","link":"#_3-1-合理布局减少内存占用","children":[]},{"level":3,"title":"3.2 空结构体的内存对齐","slug":"_3-2-空结构体的内存对齐","link":"#_3-2-空结构体的内存对齐","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1696770322000},"readingTime":{"minutes":4.31,"words":1294},"filePathRelative":"reading/golang/high-performance-go/02-datastructure/02.6.mem_alignment.md","localizedDate":"2023年10月3日","excerpt":"<h2> 1. 获取变量占用的内存大小</h2>\\n<p>Golang 中可以使用 <code>unsafe.Sizeof</code>获取变量的内存占用。</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">type</span> Args <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n    num1 <span class=\\"token builtin\\">int</span>\\n    num2 <span class=\\"token builtin\\">int</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">type</span> Flag <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n    num1 <span class=\\"token builtin\\">int16</span>\\n    num2 <span class=\\"token builtin\\">int32</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    fmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span>unsafe<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Sizeof</span><span class=\\"token punctuation\\">(</span>Args<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    fmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span>unsafe<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Sizeof</span><span class=\\"token punctuation\\">(</span>Flag<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// output</span>\\n<span class=\\"token number\\">16</span>\\n<span class=\\"token number\\">8</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
