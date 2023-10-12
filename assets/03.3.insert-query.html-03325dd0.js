const e=JSON.parse('{"key":"v-74f2b977","path":"/reading/golang/7-days-golang/03-GeeORM/03.3.insert-query.html","title":"3. 新增和查询","lang":"zh-CN","frontmatter":{"title":"3. 新增和查询","date":"2023-10-11T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. Clause 构造 SQL","slug":"_1-clause-构造-sql","link":"#_1-clause-构造-sql","children":[{"level":3,"title":"1.1 单元测试","slug":"_1-1-单元测试","link":"#_1-1-单元测试","children":[]}]},{"level":2,"title":"2. Insert 实现","slug":"_2-insert-实现","link":"#_2-insert-实现","children":[{"level":3,"title":"2.1 schema","slug":"_2-1-schema","link":"#_2-1-schema","children":[]},{"level":3,"title":"2.2 session","slug":"_2-2-session","link":"#_2-2-session","children":[]}]},{"level":2,"title":"3. Find 实现","slug":"_3-find-实现","link":"#_3-find-实现","children":[{"level":3,"title":"3.1 session","slug":"_3-1-session","link":"#_3-1-session","children":[]},{"level":3,"title":"3.2 单元测试","slug":"_3-2-单元测试","link":"#_3-2-单元测试","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":3.42,"words":1025},"filePathRelative":"reading/golang/7-days-golang/03-GeeORM/03.3.insert-query.md","localizedDate":"2023年10月11日","excerpt":"<p><a href=\\"https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeORM/day3-insert-query\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">day3-insert-query</a></p>\\n<h2> 1. Clause 构造 SQL</h2>\\n<p>查询语句一般由多个子句(clause)组成，例如：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">SELECT</span> col1<span class=\\"token punctuation\\">,</span> clo2<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n\\t<span class=\\"token keyword\\">FROM</span> table_name\\n\\t<span class=\\"token keyword\\">WHERE</span> <span class=\\"token punctuation\\">[</span>condition<span class=\\"token punctuation\\">]</span>\\n\\t<span class=\\"token keyword\\">GROUP</span> <span class=\\"token keyword\\">BY</span> col1\\n\\t<span class=\\"token keyword\\">HAVING</span> <span class=\\"token punctuation\\">[</span>condition<span class=\\"token punctuation\\">]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
