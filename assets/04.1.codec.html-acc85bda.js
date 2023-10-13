const e=JSON.parse('{"key":"v-525590ac","path":"/reading/golang/7-days-golang/04-GeeRPC/04.1.codec.html","title":"1. 服务端和消息编码","lang":"zh-CN","frontmatter":{"title":"1. 服务端和消息编码","date":"2023-10-12T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. 消息的序列化和反序列化","slug":"_1-消息的序列化和反序列化","link":"#_1-消息的序列化和反序列化","children":[{"level":3,"title":"1.1 Header 结构","slug":"_1-1-header-结构","link":"#_1-1-header-结构","children":[]},{"level":3,"title":"1.2 Codec 接口","slug":"_1-2-codec-接口","link":"#_1-2-codec-接口","children":[]},{"level":3,"title":"1.3 GobCodec","slug":"_1-3-gobcodec","link":"#_1-3-gobcodec","children":[]}]},{"level":2,"title":"2. 通信过程","slug":"_2-通信过程","link":"#_2-通信过程","children":[{"level":3,"title":"2.1 服务端","slug":"_2-1-服务端","link":"#_2-1-服务端","children":[]}]},{"level":2,"title":"3. 简易客户端","slug":"_3-简易客户端","link":"#_3-简易客户端","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":5.21,"words":1563},"filePathRelative":"reading/golang/7-days-golang/04-GeeRPC/04.1.codec.md","localizedDate":"2023年10月12日","excerpt":"<p><a href=\\"https://github.com/dreamjz/golang-notes/tree/main/books/7-days-golang/GeeRPC/day1-codec\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">day1-codec</a></p>\\n<h2> 1. 消息的序列化和反序列化</h2>\\n<p>典型的 RPC 调用如下：</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code>err <span class=\\"token operator\\">=</span> client<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Call</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Arith.Multiply\\"</span><span class=\\"token punctuation\\">,</span> args<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">&amp;</span>reply<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
