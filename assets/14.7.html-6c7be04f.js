const n=JSON.parse('{"key":"v-3bf91cce","path":"/note/golang/open-source-books/the-way-to-go/14/14.7.html","title":"14.7 互斥锁和通道","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1684038853000},"readingTime":{"minutes":0.39,"words":116},"filePathRelative":"note/golang/open-source-books/the-way-to-go/14/14.7.md","excerpt":"<h1> 14.7 互斥锁和通道</h1>\\n<p>普遍的经验法则：</p>\\n<ul>\\n<li>\\n<p>使用锁的情景：</p>\\n<ul>\\n<li>访问共享数据结构中的缓存信息</li>\\n<li>保存应用程序上下文和状态信息数据</li>\\n</ul>\\n</li>\\n<li>\\n<p>使用通道的情景：</p>\\n<ul>\\n<li>与异步操作的结果进行交互</li>\\n<li>分发任务</li>\\n<li>传递数据所有权</li>\\n</ul>\\n</li>\\n</ul>\\n<p>当你发现你的锁使用规则变得很复杂时，可以反省使用通道会不会使问题变得简单些。</p>\\n"}');export{n as data};
