const n=JSON.parse('{"key":"v-5bb14210","path":"/note/golang/golang-daily-lib/go-homedir.html","title":"go-homedir","lang":"zh-CN","frontmatter":{"title":"go-homedir","date":"2021-10-21T00:00:00.000Z","category":["golang"],"tag":["golang daily lib"],"timeline":true,"article":false},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"快速使用 quick start","slug":"快速使用-quick-start","link":"#快速使用-quick-start","children":[]},{"level":2,"title":"高级用法","slug":"高级用法","link":"#高级用法","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"updatedTime":1699943930000},"readingTime":{"minutes":3.01,"words":903},"filePathRelative":"note/golang/golang-daily-lib/go-homedir.md","localizedDate":"2021年10月21日","excerpt":"<h2> 简介</h2>\\n<p><code>go-homedir</code>顾名思义用来获取用户的主目录。实际上使用<code>os/user</code>也可以获取这个信息</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">package</span> main\\n\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">(</span>\\n\\t<span class=\\"token string\\">\\"fmt\\"</span>\\n\\t<span class=\\"token string\\">\\"log\\"</span>\\n\\t<span class=\\"token string\\">\\"os/user\\"</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\tu<span class=\\"token punctuation\\">,</span> err <span class=\\"token operator\\">:=</span> user<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Current</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token keyword\\">if</span> err <span class=\\"token operator\\">!=</span> <span class=\\"token boolean\\">nil</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\tlog<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Fatal</span><span class=\\"token punctuation\\">(</span>err<span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%#v\\"</span><span class=\\"token punctuation\\">,</span> u<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
