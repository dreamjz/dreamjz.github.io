const l=JSON.parse('{"key":"v-5cef7d72","path":"/blog/sc/golang/how/4.synchronization_primitives.html","title":"同步原语与锁","lang":"zh-CN","frontmatter":{"title":"同步原语与锁","date":"2023-10-10T00:00:00.000Z","category":["golang"]},"headers":[{"level":2,"title":"1. Mutex","slug":"_1-mutex","link":"#_1-mutex","children":[{"level":3,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[]},{"level":3,"title":"状态","slug":"状态","link":"#状态","children":[]},{"level":3,"title":"模式","slug":"模式","link":"#模式","children":[]},{"level":3,"title":"加锁","slug":"加锁","link":"#加锁","children":[]},{"level":3,"title":"解锁","slug":"解锁","link":"#解锁","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"2. RWMutex","slug":"_2-rwmutex","link":"#_2-rwmutex","children":[{"level":3,"title":"数据结构","slug":"数据结构-1","link":"#数据结构-1","children":[]},{"level":3,"title":"写锁","slug":"写锁","link":"#写锁","children":[]},{"level":3,"title":"读锁","slug":"读锁","link":"#读锁","children":[]}]},{"level":2,"title":"3. WaitGroup","slug":"_3-waitgroup","link":"#_3-waitgroup","children":[{"level":3,"title":"数据结构","slug":"数据结构-2","link":"#数据结构-2","children":[]},{"level":3,"title":"防止拷贝","slug":"防止拷贝","link":"#防止拷贝","children":[]},{"level":3,"title":"状态","slug":"状态-1","link":"#状态-1","children":[]},{"level":3,"title":"Add","slug":"add","link":"#add","children":[]},{"level":3,"title":"Done","slug":"done","link":"#done","children":[]},{"level":3,"title":"Wait","slug":"wait","link":"#wait","children":[]}]},{"level":2,"title":"4. Once","slug":"_4-once","link":"#_4-once","children":[{"level":3,"title":"数据结构","slug":"数据结构-3","link":"#数据结构-3","children":[]},{"level":3,"title":"Do","slug":"do","link":"#do","children":[]}]},{"level":2,"title":"5. Cond","slug":"_5-cond","link":"#_5-cond","children":[{"level":3,"title":"数据结构","slug":"数据结构-4","link":"#数据结构-4","children":[]},{"level":3,"title":"Wait","slug":"wait-1","link":"#wait-1","children":[]},{"level":3,"title":"Singal","slug":"singal","link":"#singal","children":[]},{"level":3,"title":"Broadcase","slug":"broadcase","link":"#broadcase","children":[]},{"level":3,"title":"小结","slug":"小结-1","link":"#小结-1","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1700428079000},"readingTime":{"minutes":6.71,"words":2013},"filePathRelative":"blog/sc/golang/how/4.synchronization_primitives.md","localizedDate":"2023年10月10日","excerpt":"<h2> 1. Mutex</h2>\\n<h3> 数据结构</h3>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">type</span> Mutex <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n\\tstate <span class=\\"token builtin\\">int32</span>\\n\\tsema  <span class=\\"token builtin\\">uint32</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{l as data};
