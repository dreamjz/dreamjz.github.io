const e=JSON.parse('{"key":"v-37c3b518","path":"/note/vue/vue-3/fundamentals/01-fundamentals/01.2.template_syntax.html","title":"4. 模板语法","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"4.1 文本插值","slug":"_4-1-文本插值","link":"#_4-1-文本插值","children":[]},{"level":2,"title":"4.2 原始 HTML","slug":"_4-2-原始-html","link":"#_4-2-原始-html","children":[]},{"level":2,"title":"4.3 Attribute 绑定","slug":"_4-3-attribute-绑定","link":"#_4-3-attribute-绑定","children":[{"level":3,"title":"4.3.1 简写","slug":"_4-3-1-简写","link":"#_4-3-1-简写","children":[]},{"level":3,"title":"4.3.2 布尔型 Attribute","slug":"_4-3-2-布尔型-attribute","link":"#_4-3-2-布尔型-attribute","children":[]},{"level":3,"title":"4.3.2 动态绑定多个值","slug":"_4-3-2-动态绑定多个值","link":"#_4-3-2-动态绑定多个值","children":[]},{"level":3,"title":"4.3.3 使用 JavaScript 表达式","slug":"_4-3-3-使用-javascript-表达式","link":"#_4-3-3-使用-javascript-表达式","children":[]}]},{"level":2,"title":"4.4 指令 Directives","slug":"_4-4-指令-directives","link":"#_4-4-指令-directives","children":[{"level":3,"title":"4.4.3 参数 Arguments","slug":"_4-4-3-参数-arguments","link":"#_4-4-3-参数-arguments","children":[]},{"level":3,"title":"4.4.4 动态参数","slug":"_4-4-4-动态参数","link":"#_4-4-4-动态参数","children":[]},{"level":3,"title":"4.4.5 修饰符 Modifiers","slug":"_4-4-5-修饰符-modifiers","link":"#_4-4-5-修饰符-modifiers","children":[]}]}],"readingTime":{"minutes":4.54,"words":1362},"filePathRelative":"note/vue/vue-3/fundamentals/01-fundamentals/01.2.template_syntax.md","excerpt":"<h1> 4. 模板语法</h1>\\n<p>Vue 使用一种基于 HTML 的模板语法，可以被符合规范的浏览器和 HTML 解析器解析。</p>\\n<p>底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。</p>\\n<p>结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。</p>\\n<h2> 4.1 文本插值</h2>\\n<p>使用“Mustache”语法 (双大括号)：</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>span</span><span class=\\"token punctuation\\">&gt;</span></span>Message: {{ msg }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>span</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
