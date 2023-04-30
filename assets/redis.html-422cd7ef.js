const e=JSON.parse('{"key":"v-822adc4e","path":"/interview/redis/redis.html","title":"Redis","lang":"zh-CN","frontmatter":{"title":"Redis","date":"2022-04-02T00:00:00.000Z","timeline":false},"headers":[{"level":2,"title":"1. 数据结构及使用场景","slug":"_1-数据结构及使用场景","link":"#_1-数据结构及使用场景","children":[]},{"level":2,"title":"2. 持久化方式","slug":"_2-持久化方式","link":"#_2-持久化方式","children":[]},{"level":2,"title":"3. 数据过期 和 缓存淘汰 策略","slug":"_3-数据过期-和-缓存淘汰-策略","link":"#_3-数据过期-和-缓存淘汰-策略","children":[{"level":3,"title":"数据过期","slug":"数据过期","link":"#数据过期","children":[]},{"level":3,"title":"缓存淘汰","slug":"缓存淘汰","link":"#缓存淘汰","children":[]}]},{"level":2,"title":"4. 单线程 Redis 为什么快","slug":"_4-单线程-redis-为什么快","link":"#_4-单线程-redis-为什么快","children":[]},{"level":2,"title":"5. 如何解决缓存雪崩","slug":"_5-如何解决缓存雪崩","link":"#_5-如何解决缓存雪崩","children":[]},{"level":2,"title":"6. 如何解决缓存穿透","slug":"_6-如何解决缓存穿透","link":"#_6-如何解决缓存穿透","children":[]},{"level":2,"title":"7. 主从 哨兵 集群","slug":"_7-主从-哨兵-集群","link":"#_7-主从-哨兵-集群","children":[]}],"readingTime":{"minutes":3.76,"words":1129},"filePathRelative":"interview/redis/redis.md","localizedDate":"2022年4月2日","excerpt":"<h2> 1. 数据结构及使用场景</h2>\\n<ul>\\n<li>String 字符串\\nKey 都为字符串类型，Set key val 使用的是字符串；</li>\\n<li>Hash 哈希\\n键值对结构；</li>\\n<li>List 列表（双向链表）\\n存储多个有序的字符串；</li>\\n<li>Set 集合\\n集合中不允许有重复元素，元素是无序的。可以进行相关的集合计算（交并补等）；</li>\\n<li>Zset （Sorted Set，有序集合）\\n采用跳表实现，相较于 Set  多了 Score 从，元素可按照 Score 进行排列；</li>\\n</ul>\\n<h2> 2. 持久化方式</h2>\\n<ol>\\n<li>RDB ：快照形式将内存中的数据保存到一个 dump 文件中，定时保存；\\n当 Redis 需要持久化时，会 fork 一个子进程，子进程将数据写入磁盘上的临时 RDB 文件中。当子进程写完后，将原来的 RDB 替换掉。</li>\\n<li>AOF： 把所有的修改命令存到一个文件中；\\n使用 AOF 做持久化，每一个写命令都将追加到 <code>appendonly.aof</code> 文件中。AOF 的默认策略是每秒中同步一次。\\n缺点：AOF 文件体积大于 RDB，且相对较慢；</li>\\n</ol>"}');export{e as data};