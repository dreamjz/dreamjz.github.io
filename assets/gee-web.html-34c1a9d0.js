const e=JSON.parse('{"key":"v-0f79baa2","path":"/note/golang/github-repos/7days-golang/gee-web.html","title":"Gee Web","lang":"zh-CN","frontmatter":{"title":"Gee Web","date":"2022-04-02T00:00:00.000Z","category":["golang"],"timeline":true},"headers":[{"level":2,"title":"1. Day0 - 设计框架","slug":"_1-day0-设计框架","link":"#_1-day0-设计框架","children":[]},{"level":2,"title":"2. Day1 - HTTP 基础","slug":"_2-day1-http-基础","link":"#_2-day1-http-基础","children":[{"level":3,"title":"2.1 标准库启动 Web 服务","slug":"_2-1-标准库启动-web-服务","link":"#_2-1-标准库启动-web-服务","children":[]},{"level":3,"title":"2.2 实现 http.Handler 接口","slug":"_2-2-实现-http-handler-接口","link":"#_2-2-实现-http-handler-接口","children":[]},{"level":3,"title":"2.3 Gee 框架雏形","slug":"_2-3-gee-框架雏形","link":"#_2-3-gee-框架雏形","children":[]}]},{"level":2,"title":"3. Day2 - 上下文","slug":"_3-day2-上下文","link":"#_3-day2-上下文","children":[{"level":3,"title":"3.1 设计 Context","slug":"_3-1-设计-context","link":"#_3-1-设计-context","children":[]},{"level":3,"title":"3.2 具体实现","slug":"_3-2-具体实现","link":"#_3-2-具体实现","children":[]}]},{"level":2,"title":"4. Day3 - 前缀树路由","slug":"_4-day3-前缀树路由","link":"#_4-day3-前缀树路由","children":[{"level":3,"title":"4.1 Trie 树","slug":"_4-1-trie-树","link":"#_4-1-trie-树","children":[]},{"level":3,"title":"4.2 Router","slug":"_4-2-router","link":"#_4-2-router","children":[]},{"level":3,"title":"4.3 Context","slug":"_4-3-context","link":"#_4-3-context","children":[]},{"level":3,"title":"4.4 Gee","slug":"_4-4-gee","link":"#_4-4-gee","children":[]}]},{"level":2,"title":"5. Day4 - 分组控制","slug":"_5-day4-分组控制","link":"#_5-day4-分组控制","children":[{"level":3,"title":"5.1 路由分组","slug":"_5-1-路由分组","link":"#_5-1-路由分组","children":[]},{"level":3,"title":"5.2 Group","slug":"_5-2-group","link":"#_5-2-group","children":[]},{"level":3,"title":"5.3 Main","slug":"_5-3-main","link":"#_5-3-main","children":[]}]},{"level":2,"title":"6. Day5 - 中间件","slug":"_6-day5-中间件","link":"#_6-day5-中间件","children":[{"level":3,"title":"6.1 中间件","slug":"_6-1-中间件","link":"#_6-1-中间件","children":[]},{"level":3,"title":"6.2 设计","slug":"_6-2-设计","link":"#_6-2-设计","children":[]},{"level":3,"title":"6.3 使用","slug":"_6-3-使用","link":"#_6-3-使用","children":[]}]},{"level":2,"title":"7. Day6 - 模板","slug":"_7-day6-模板","link":"#_7-day6-模板","children":[{"level":3,"title":"7.1 静态文件 (Serve Static Files)","slug":"_7-1-静态文件-serve-static-files","link":"#_7-1-静态文件-serve-static-files","children":[]},{"level":3,"title":"7.2 HTML 模板渲染","slug":"_7-2-html-模板渲染","link":"#_7-2-html-模板渲染","children":[]}]},{"level":2,"title":"8. Day7 - 错误恢复","slug":"_8-day7-错误恢复","link":"#_8-day7-错误恢复","children":[{"level":3,"title":"8.1 Panic","slug":"_8-1-panic","link":"#_8-1-panic","children":[]},{"level":3,"title":"8.2 Defer","slug":"_8-2-defer","link":"#_8-2-defer","children":[]},{"level":3,"title":"8.3 Recover","slug":"_8-3-recover","link":"#_8-3-recover","children":[]},{"level":3,"title":"8.4 Gee 错误处理","slug":"_8-4-gee-错误处理","link":"#_8-4-gee-错误处理","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1682725586000},"readingTime":{"minutes":22.14,"words":6643},"filePathRelative":"note/golang/github-repos/7days-golang/gee-web.md","localizedDate":"2022年4月2日","excerpt":"<h2> 1. Day0 - 设计框架</h2>\\n<p>Golang 中标准库 <code>net/http</code> 提供了基础的 Web 功能，即监听端口，映射静态路由，解析静态路由和 HTTP 报文。但是一些 Web 开发中的简单需求并不支持，需要手工实现：</p>\\n<ul>\\n<li>动态路由：例如<code>hello/:name</code>，<code>hello/*</code>这类的规则。</li>\\n<li>鉴权：没有分组/统一鉴权的能力，需要在每个路由映射的handler中实现。</li>\\n<li>模板：没有统一简化的HTML机制。</li>\\n<li>…</li>\\n</ul>"}');export{e as data};