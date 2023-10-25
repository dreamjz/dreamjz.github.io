const e=JSON.parse('{"key":"v-c4551e66","path":"/reading/golang/high-performance-go/02-datastructure/02.4.reflect.html","title":"2.4 反射性能","lang":"zh-CN","frontmatter":{"title":"2.4 反射性能","date":"2023-10-03T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. 反射的用途","slug":"_1-反射的用途","link":"#_1-反射的用途","children":[]},{"level":2,"title":"2. 反射如何简化代码","slug":"_2-反射如何简化代码","link":"#_2-反射如何简化代码","children":[]},{"level":2,"title":"3. 反射的性能","slug":"_3-反射的性能","link":"#_3-反射的性能","children":[{"level":3,"title":"3.1 创建对象","slug":"_3-1-创建对象","link":"#_3-1-创建对象","children":[]},{"level":3,"title":"3.2 修改字段的值","slug":"_3-2-修改字段的值","link":"#_3-2-修改字段的值","children":[]},{"level":3,"title":"3.3 FieldByName 和 Field","slug":"_3-3-fieldbyname-和-field","link":"#_3-3-fieldbyname-和-field","children":[]}]},{"level":2,"title":"4. 如何提高性能","slug":"_4-如何提高性能","link":"#_4-如何提高性能","children":[{"level":3,"title":"4.1 避免使用反射","slug":"_4-1-避免使用反射","link":"#_4-1-避免使用反射","children":[]},{"level":3,"title":"4.2 缓存","slug":"_4-2-缓存","link":"#_4-2-缓存","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1696770322000},"readingTime":{"minutes":4.5,"words":1350},"filePathRelative":"reading/golang/high-performance-go/02-datastructure/02.4.reflect.md","localizedDate":"2023年10月3日","excerpt":"<h2> 1. 反射的用途</h2>\\n<p>标准库 <a href=\\"https://golang.org/pkg/reflect/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">reflect</a> 为 Go 语言提供了运行时动态获取对象的类型和值以及动态创建对象的能力。反射可以帮助抽象和简化代码，提高开发效率。</p>\\n<h2> 2. 反射如何简化代码</h2>\\n<p>假设有一个配置类 Config，每个字段是一个配置项。</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">type</span> Config <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n\\tName    <span class=\\"token builtin\\">string</span> <span class=\\"token string\\">`json:\\"server-name\\"`</span>\\n\\tIP      <span class=\\"token builtin\\">string</span> <span class=\\"token string\\">`json:\\"server-ip\\"`</span>\\n\\tURL     <span class=\\"token builtin\\">string</span> <span class=\\"token string\\">`json:\\"server-url\\"`</span>\\n\\tTimeout <span class=\\"token builtin\\">string</span> <span class=\\"token string\\">`json:\\"timeout\\"`</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};