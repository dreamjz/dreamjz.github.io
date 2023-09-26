const l=JSON.parse('{"key":"v-4c4310cf","path":"/reading/golang/the-design-and-implementation-of-golang/part2-foundation/ch03-datastructure/3.0.chpater_summary.html","title":"第三章笔记总结","lang":"zh-CN","frontmatter":{"title":"第三章笔记总结","date":"2023-09-24T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. 数组","slug":"_1-数组","link":"#_1-数组","children":[{"level":3,"title":"1.1 定义","slug":"_1-1-定义","link":"#_1-1-定义","children":[]},{"level":3,"title":"1.2 类型","slug":"_1-2-类型","link":"#_1-2-类型","children":[]},{"level":3,"title":"1.3 初始化","slug":"_1-3-初始化","link":"#_1-3-初始化","children":[]},{"level":3,"title":"1.4 访问和赋值","slug":"_1-4-访问和赋值","link":"#_1-4-访问和赋值","children":[]}]},{"level":2,"title":"2. 切片","slug":"_2-切片","link":"#_2-切片","children":[{"level":3,"title":"2.1 定义","slug":"_2-1-定义","link":"#_2-1-定义","children":[]},{"level":3,"title":"2.2 类型","slug":"_2-2-类型","link":"#_2-2-类型","children":[]},{"level":3,"title":"2.3 数据结构","slug":"_2-3-数据结构","link":"#_2-3-数据结构","children":[]},{"level":3,"title":"2.4 初始化","slug":"_2-4-初始化","link":"#_2-4-初始化","children":[]},{"level":3,"title":"2.5 访问","slug":"_2-5-访问","link":"#_2-5-访问","children":[]},{"level":3,"title":"2.6 追加和扩容","slug":"_2-6-追加和扩容","link":"#_2-6-追加和扩容","children":[]},{"level":3,"title":"2.7 拷贝","slug":"_2-7-拷贝","link":"#_2-7-拷贝","children":[]}]},{"level":2,"title":"3. 哈希表","slug":"_3-哈希表","link":"#_3-哈希表","children":[{"level":3,"title":"3.1 定义","slug":"_3-1-定义","link":"#_3-1-定义","children":[]},{"level":3,"title":"3.2 设计原理","slug":"_3-2-设计原理","link":"#_3-2-设计原理","children":[]},{"level":3,"title":"3.3 数据结构","slug":"_3-3-数据结构","link":"#_3-3-数据结构","children":[]},{"level":3,"title":"3.4 初始化","slug":"_3-4-初始化","link":"#_3-4-初始化","children":[]},{"level":3,"title":"3.5 读写操作","slug":"_3-5-读写操作","link":"#_3-5-读写操作","children":[]}]},{"level":2,"title":"4. 字符串","slug":"_4-字符串","link":"#_4-字符串","children":[{"level":3,"title":"4.1 定义","slug":"_4-1-定义","link":"#_4-1-定义","children":[]},{"level":3,"title":"4.2 类型","slug":"_4-2-类型","link":"#_4-2-类型","children":[]},{"level":3,"title":"4.3 数据结构","slug":"_4-3-数据结构","link":"#_4-3-数据结构","children":[]},{"level":3,"title":"4.4 初始化和解析","slug":"_4-4-初始化和解析","link":"#_4-4-初始化和解析","children":[]},{"level":3,"title":"4.5 拼接","slug":"_4-5-拼接","link":"#_4-5-拼接","children":[]},{"level":3,"title":"4.6 类型转换","slug":"_4-6-类型转换","link":"#_4-6-类型转换","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":14.58,"words":4375},"filePathRelative":"reading/golang/the-design-and-implementation-of-golang/part2-foundation/ch03-datastructure/3.0.chpater_summary.md","localizedDate":"2023年9月24日","excerpt":"<h2> 1. 数组</h2>\\n<h3> 1.1 定义</h3>\\n<p><strong>数组</strong>是由<strong>相同类型</strong>的<strong>元素</strong>组成的数据结构，使用一块<strong>连续的内存</strong>来保存数据。</p>\\n<h3> 1.2 类型</h3>\\n<p>Golang 数组的类型包含两点：</p>\\n<ul>\\n<li>数组长度</li>\\n<li>元素类型</li>\\n</ul>\\n<p>只有两者相同才是同一类型，例：</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span> <span class=\\"token comment\\">// 不是同一类型</span>\\n<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token keyword\\">interface</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span> <span class=\\"token comment\\">// 不是同一类型</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{l as data};