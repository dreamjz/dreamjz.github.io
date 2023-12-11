const e=JSON.parse('{"key":"v-2c184d82","path":"/reading/sc/golang/concurrency-in-go/03.sync.html","title":"3. sync","lang":"zh-CN","frontmatter":{"title":"3. sync","date":"2023-09-27T00:00:00.000Z","category":["golang"],"article":false},"headers":[{"level":2,"title":"3.1 WaitGroup","slug":"_3-1-waitgroup","link":"#_3-1-waitgroup","children":[]},{"level":2,"title":"3.2 互斥锁和读写锁","slug":"_3-2-互斥锁和读写锁","link":"#_3-2-互斥锁和读写锁","children":[{"level":3,"title":"Mutex 互斥锁","slug":"mutex-互斥锁","link":"#mutex-互斥锁","children":[]},{"level":3,"title":"RWMutex 读写锁","slug":"rwmutex-读写锁","link":"#rwmutex-读写锁","children":[]}]},{"level":2,"title":"3.3 Cond","slug":"_3-3-cond","link":"#_3-3-cond","children":[{"level":3,"title":"Cond.Singal()和Cond.Broadcast()","slug":"cond-singal-和cond-broadcast","link":"#cond-singal-和cond-broadcast","children":[]}]},{"level":2,"title":"3.4 Once","slug":"_3-4-once","link":"#_3-4-once","children":[]},{"level":2,"title":"3.5 Pool","slug":"_3-5-pool","link":"#_3-5-pool","children":[]},{"level":2,"title":"3.6 Channel","slug":"_3-6-channel","link":"#_3-6-channel","children":[{"level":3,"title":"Channel的操作","slug":"channel的操作","link":"#channel的操作","children":[]}]},{"level":2,"title":"3.7 select","slug":"_3-7-select","link":"#_3-7-select","children":[]},{"level":2,"title":"3.8 GOMAXPROCS","slug":"_3-8-gomaxprocs","link":"#_3-8-gomaxprocs","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1701449868000},"readingTime":{"minutes":6.6,"words":1979},"filePathRelative":"reading/sc/golang/concurrency-in-go/03.sync.md","localizedDate":"2023年9月27日","excerpt":"<h2> 3.1 WaitGroup</h2>\\n<p><code>WaitGroup</code>可以视作并发安全的计数器：</p>\\n<ul>\\n<li><code>Add()</code>：添加计数次数</li>\\n<li><code>Done()</code>：计数器减一</li>\\n<li><code>Wait()</code>：阻塞直到计数器归零</li>\\n</ul>"}');export{e as data};