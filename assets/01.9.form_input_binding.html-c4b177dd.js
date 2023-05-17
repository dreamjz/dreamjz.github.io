const n=JSON.parse('{"key":"v-a2e20f30","path":"/note/vue/vue-3/fundamentals/01-fundamentals/01.9.form_input_binding.html","title":"11. 表单输入绑定","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"11.1 基本用法","slug":"_11-1-基本用法","link":"#_11-1-基本用法","children":[{"level":3,"title":"11.1.1 文本","slug":"_11-1-1-文本","link":"#_11-1-1-文本","children":[]},{"level":3,"title":"11.1.2 多行文本","slug":"_11-1-2-多行文本","link":"#_11-1-2-多行文本","children":[]},{"level":3,"title":"11.1.3 复选框","slug":"_11-1-3-复选框","link":"#_11-1-3-复选框","children":[]},{"level":3,"title":"11.1.4 单选按钮","slug":"_11-1-4-单选按钮","link":"#_11-1-4-单选按钮","children":[]},{"level":3,"title":"11.1.5 选择器","slug":"_11-1-5-选择器","link":"#_11-1-5-选择器","children":[]}]},{"level":2,"title":"11.2 值绑定","slug":"_11-2-值绑定","link":"#_11-2-值绑定","children":[{"level":3,"title":"11.2.1 复选框","slug":"_11-2-1-复选框","link":"#_11-2-1-复选框","children":[]},{"level":3,"title":"11.2.2 单选按钮","slug":"_11-2-2-单选按钮","link":"#_11-2-2-单选按钮","children":[]},{"level":3,"title":"11.2.3 选择器选项","slug":"_11-2-3-选择器选项","link":"#_11-2-3-选择器选项","children":[]}]},{"level":2,"title":"11.3 修饰符","slug":"_11-3-修饰符","link":"#_11-3-修饰符","children":[{"level":3,"title":"11.3.1 .lazy","slug":"_11-3-1-lazy","link":"#_11-3-1-lazy","children":[]},{"level":3,"title":"11.3.2 .number","slug":"_11-3-2-number","link":"#_11-3-2-number","children":[]},{"level":3,"title":"11.3.3 .trim","slug":"_11-3-3-trim","link":"#_11-3-3-trim","children":[]}]}],"readingTime":{"minutes":4.6,"words":1381},"filePathRelative":"note/vue/vue-3/fundamentals/01-fundamentals/01.9.form_input_binding.md","excerpt":"<h1> 11. 表单输入绑定</h1>\\n<p>处理表单时，需要将表单输入框的内容同步给 JavaScript 中相应的变量。</p>\\n<p>手动连接值绑定和更改事件监听器可能会很麻烦：</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span>\\n  <span class=\\"token attr-name\\">:value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span>\\n  <span class=\\"token attr-name\\">@input</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>event =&gt; text = event.target.value<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
