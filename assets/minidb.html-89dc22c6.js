const e=JSON.parse('{"key":"v-350af4a0","path":"/note/golang/github-repos/flower-corp/minidb/minidb.html","title":"Minidb","lang":"zh-CN","frontmatter":{"title":"Minidb","date":"2022-03-24T00:00:00.000Z","category":["golang","NoSql"],"tag":["minidb"],"timeline":true},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 存储模型","slug":"_2-存储模型","link":"#_2-存储模型","children":[{"level":3,"title":"2.1 B+ 树","slug":"_2-1-b-树","link":"#_2-1-b-树","children":[]},{"level":3,"title":"2.2 LSM 树","slug":"_2-2-lsm-树","link":"#_2-2-lsm-树","children":[]}]},{"level":2,"title":"3. minidb","slug":"_3-minidb","link":"#_3-minidb","children":[{"level":3,"title":"3.1 PUT","slug":"_3-1-put","link":"#_3-1-put","children":[]},{"level":3,"title":"3.2 GET","slug":"_3-2-get","link":"#_3-2-get","children":[]},{"level":3,"title":"3.3 DEL","slug":"_3-3-del","link":"#_3-3-del","children":[]},{"level":3,"title":"3.4 Merge","slug":"_3-4-merge","link":"#_3-4-merge","children":[]}]},{"level":2,"title":"4. 代码实现","slug":"_4-代码实现","link":"#_4-代码实现","children":[{"level":3,"title":"4.1 Open","slug":"_4-1-open","link":"#_4-1-open","children":[]},{"level":3,"title":"4.2 PUT","slug":"_4-2-put","link":"#_4-2-put","children":[]},{"level":3,"title":"4.3 GET","slug":"_4-3-get","link":"#_4-3-get","children":[]},{"level":3,"title":"4.4 DELETE","slug":"_4-4-delete","link":"#_4-4-delete","children":[]},{"level":3,"title":"4.5 Merge","slug":"_4-5-merge","link":"#_4-5-merge","children":[]}]},{"level":2,"title":"5. 小结","slug":"_5-小结","link":"#_5-小结","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":6.72,"words":2015},"filePathRelative":"note/golang/github-repos/flower-corp/minidb/minidb.md","localizedDate":"2022年3月24日","excerpt":"<h2> 1. 简介</h2>\\n<p>minidb 为 rosedb 的 mini 版本，用于理解 bitcask 存储模型以及 rosedb。</p>\\n<p>minidb 中没有实现 bitcask 模型的多个数据文件机制，为了简化只使用了一个数据文件进行读写，但不妨碍理解 bitcask 模型。</p>\\n<h2> 2. 存储模型</h2>\\n<p>存储，其核心问题是：如何存放数据以及如何取出数据。</p>\\n<p>计算机中有内存和磁盘，内存是易失性的，掉电之后数据全部丢失，所以想要在系统崩溃重启后依然正常使用，需要将数据存储在非易失介质中（如磁盘等）。</p>\\n<p>那么对于一个单机版的 k-v 存储引擎，我们需要设计数据在内存中应该如何存放，在磁盘中应该如何存放。根据优秀前辈的研究和总结，主要将数据存储模型分为两类：<mark>B+ 树</mark> 和 <mark>LSM 树</mark>。</p>"}');export{e as data};
