const n=JSON.parse('{"key":"v-5e331da4","path":"/reading/golang/7-days-golang/01-Gee-Web/00.0.preface.html","title":"0. 为何需要Web框架","lang":"zh-CN","frontmatter":{"title":"0. 为何需要Web框架","date":"2023-10-09T00:00:00.000Z","category":["golang"],"article":false},"headers":[{"level":2,"title":"1. 使用标准库处理 Web 请求","slug":"_1-使用标准库处理-web-请求","link":"#_1-使用标准库处理-web-请求","children":[]},{"level":2,"title":"2. Web 框架","slug":"_2-web-框架","link":"#_2-web-框架","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1699943615000},"readingTime":{"minutes":0.52,"words":156},"filePathRelative":"reading/golang/7-days-golang/01-Gee-Web/00.0.preface.md","localizedDate":"2023年10月9日","excerpt":"<h2> 1. 使用标准库处理 Web 请求</h2>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\thttp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">HandleFunc</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/\\"</span><span class=\\"token punctuation\\">,</span> handler<span class=\\"token punctuation\\">)</span>\\n\\tlog<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Fatal</span><span class=\\"token punctuation\\">(</span>http<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ListenAndServe</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\":8000\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">nil</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">handler</span><span class=\\"token punctuation\\">(</span>w http<span class=\\"token punctuation\\">.</span>ResponseWriter<span class=\\"token punctuation\\">,</span> r <span class=\\"token operator\\">*</span>http<span class=\\"token punctuation\\">.</span>Request<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Fprintf</span><span class=\\"token punctuation\\">(</span>w<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"URL.path = %s\\"</span><span class=\\"token punctuation\\">,</span> r<span class=\\"token punctuation\\">.</span>URL<span class=\\"token punctuation\\">.</span>Path<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
