const n=JSON.parse(`{"key":"v-a7271076","path":"/note/vue/vue-3/fundamentals/02-component/02.2.props.html","title":"18. Props","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"18.1 Props 声明","slug":"_18-1-props-声明","link":"#_18-1-props-声明","children":[]},{"level":2,"title":"18.2 传递 prop 的细节","slug":"_18-2-传递-prop-的细节","link":"#_18-2-传递-prop-的细节","children":[{"level":3,"title":"18.2.1 Prop 名字格式","slug":"_18-2-1-prop-名字格式","link":"#_18-2-1-prop-名字格式","children":[]},{"level":3,"title":"18.2.2 静态 vs. 动态 Prop","slug":"_18-2-2-静态-vs-动态-prop","link":"#_18-2-2-静态-vs-动态-prop","children":[]},{"level":3,"title":"18.2.3 传递不同的值类型","slug":"_18-2-3-传递不同的值类型","link":"#_18-2-3-传递不同的值类型","children":[]},{"level":3,"title":"18.2.4 使用一个对象绑定多个 prop","slug":"_18-2-4-使用一个对象绑定多个-prop","link":"#_18-2-4-使用一个对象绑定多个-prop","children":[]}]},{"level":2,"title":"18.3 单向数据流","slug":"_18-3-单向数据流","link":"#_18-3-单向数据流","children":[{"level":3,"title":"18.3.1 更改对象 / 数组类型的 props","slug":"_18-3-1-更改对象-数组类型的-props","link":"#_18-3-1-更改对象-数组类型的-props","children":[]}]},{"level":2,"title":"18.4 Prop 校验","slug":"_18-4-prop-校验","link":"#_18-4-prop-校验","children":[{"level":3,"title":"18.4.1 运行时类型检查","slug":"_18-4-1-运行时类型检查","link":"#_18-4-1-运行时类型检查","children":[]}]},{"level":2,"title":"18.5 Boolean 类型转换","slug":"_18-5-boolean-类型转换","link":"#_18-5-boolean-类型转换","children":[]}],"readingTime":{"minutes":6.94,"words":2081},"filePathRelative":"note/vue/vue-3/fundamentals/02-component/02.2.props.md","excerpt":"<h1> 18. Props</h1>\\n<h2> 18.1 Props 声明</h2>\\n<p>一个组件需要显式声明它所接受的 props。</p>\\n<p>在使用 <code>&lt;script setup&gt;</code> 的单文件组件中，props 可以使用 <code>defineProps()</code> 宏来声明：</p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">setup</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">const</span> props <span class=\\"token operator\\">=</span> <span class=\\"token function\\">defineProps</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'foo'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>props<span class=\\"token punctuation\\">.</span>foo<span class=\\"token punctuation\\">)</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
