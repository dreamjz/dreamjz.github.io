const e=JSON.parse(`{"key":"v-cff5dd62","path":"/note/vue/vue-3/fundamentals/01-fundamentals/01.3.reactivity_fundamental.html","title":"5. 响应式基础","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"5.1 声明响应式状态","slug":"_5-1-声明响应式状态","link":"#_5-1-声明响应式状态","children":[{"level":3,"title":"5.1.1  <script setup>","slug":"_5-1-1-script-setup","link":"#_5-1-1-script-setup","children":[]},{"level":3,"title":"5.1.2 DOM 更新时机","slug":"_5-1-2-dom-更新时机","link":"#_5-1-2-dom-更新时机","children":[]},{"level":3,"title":"5.1.3 深层响应性","slug":"_5-1-3-深层响应性","link":"#_5-1-3-深层响应性","children":[]},{"level":3,"title":"5.1.4 响应式代理 vs. 原始对象","slug":"_5-1-4-响应式代理-vs-原始对象","link":"#_5-1-4-响应式代理-vs-原始对象","children":[]},{"level":3,"title":"5.1.5 reactive() 的局限性","slug":"_5-1-5-reactive-的局限性","link":"#_5-1-5-reactive-的局限性","children":[]}]},{"level":2,"title":"5.2 用 ref() 定义响应式变量","slug":"_5-2-用-ref-定义响应式变量","link":"#_5-2-用-ref-定义响应式变量","children":[{"level":3,"title":"5.2.1 ref 在模板中的解包","slug":"_5-2-1-ref-在模板中的解包","link":"#_5-2-1-ref-在模板中的解包","children":[]},{"level":3,"title":"5.2.2 ref 在响应式对象中的解包","slug":"_5-2-2-ref-在响应式对象中的解包","link":"#_5-2-2-ref-在响应式对象中的解包","children":[]},{"level":3,"title":"5.2.3 数组和集合类型的 ref 解包","slug":"_5-2-3-数组和集合类型的-ref-解包","link":"#_5-2-3-数组和集合类型的-ref-解包","children":[]}]}],"readingTime":{"minutes":6.3,"words":1890},"filePathRelative":"note/vue/vue-3/fundamentals/01-fundamentals/01.3.reactivity_fundamental.md","excerpt":"<h1> 5. 响应式基础</h1>\\n<h2> 5.1 声明响应式状态</h2>\\n<p>使用 <a href=\\"https://cn.vuejs.org/api/reactivity-core.html#reactive\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>reactive()</code></a> 函数创建一个响应式对象或数组：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> reactive <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vue'</span>\\n<span class=\\"token keyword\\">const</span> state <span class=\\"token operator\\">=</span> <span class=\\"token function\\">reactive</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">count</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{e as data};
