const n=JSON.parse('{"key":"v-f9303404","path":"/reading/golang/7-days-golang/03-GeeORM/03.2.orm.html","title":"2. 对象表结构映射","lang":"zh-CN","frontmatter":{"title":"2. 对象表结构映射","date":"2023-10-11T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. Dialect","slug":"_1-dialect","link":"#_1-dialect","children":[{"level":3,"title":"1.1 SQLite3","slug":"_1-1-sqlite3","link":"#_1-1-sqlite3","children":[]}]},{"level":2,"title":"2. Schema","slug":"_2-schema","link":"#_2-schema","children":[{"level":3,"title":"2.1 单元测试","slug":"_2-1-单元测试","link":"#_2-1-单元测试","children":[]}]},{"level":2,"title":"3. Session","slug":"_3-session","link":"#_3-session","children":[{"level":3,"title":"3.1 单元测试","slug":"_3-1-单元测试","link":"#_3-1-单元测试","children":[]}]},{"level":2,"title":"4. Engine","slug":"_4-engine","link":"#_4-engine","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":3.94,"words":1182},"filePathRelative":"reading/golang/7-days-golang/03-GeeORM/03.2.orm.md","localizedDate":"2023年10月11日","excerpt":"<p><a href=\\"https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeORM/day2-orm\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">day2-orm</a></p>\\n<h2> 1. Dialect</h2>\\n<p>不同的数据库对于SQL语句支持可能不同，ORM框架需要兼容多种数据库，将各数据不同的地方提取出来单独实现，这种方式被称为<code>Dialect</code>。</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">var</span> dialectsMap <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">map</span><span class=\\"token punctuation\\">[</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">]</span>Dialect<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">type</span> Dialect <span class=\\"token keyword\\">interface</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token function\\">DataTypeOf</span><span class=\\"token punctuation\\">(</span>typ reflect<span class=\\"token punctuation\\">.</span>Value<span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">string</span>\\n\\t<span class=\\"token function\\">TableExistSQL</span><span class=\\"token punctuation\\">(</span>tableName <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>any<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">RegisterDialect</span><span class=\\"token punctuation\\">(</span>name <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span> dialect Dialect<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\tdialectsMap<span class=\\"token punctuation\\">[</span>name<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> dialect\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">GetDialect</span><span class=\\"token punctuation\\">(</span>name <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">(</span>Dialect<span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">bool</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\tdialect<span class=\\"token punctuation\\">,</span> ok <span class=\\"token operator\\">:=</span> dialectsMap<span class=\\"token punctuation\\">[</span>name<span class=\\"token punctuation\\">]</span>\\n\\t<span class=\\"token keyword\\">return</span> dialect<span class=\\"token punctuation\\">,</span> ok\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};