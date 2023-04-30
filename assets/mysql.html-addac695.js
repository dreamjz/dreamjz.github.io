const l=JSON.parse('{"key":"v-57cc0d8b","path":"/interview/mysql/mysql.html","title":"Mysql","lang":"zh-CN","frontmatter":{"title":"Mysql","date":"2022-04-02T00:00:00.000Z","timeline":false},"headers":[{"level":2,"title":"1. 事务的四个特性","slug":"_1-事务的四个特性","link":"#_1-事务的四个特性","children":[]},{"level":2,"title":"2. 视图","slug":"_2-视图","link":"#_2-视图","children":[]},{"level":2,"title":"3. drop, delete, truncate","slug":"_3-drop-delete-truncate","link":"#_3-drop-delete-truncate","children":[]},{"level":2,"title":"4. JOIN","slug":"_4-join","link":"#_4-join","children":[]},{"level":2,"title":"5. MySQL 索引","slug":"_5-mysql-索引","link":"#_5-mysql-索引","children":[]},{"level":2,"title":"6. MySQL 存储引擎","slug":"_6-mysql-存储引擎","link":"#_6-mysql-存储引擎","children":[]},{"level":2,"title":"7. MySQL 事务隔离级别","slug":"_7-mysql-事务隔离级别","link":"#_7-mysql-事务隔离级别","children":[{"level":3,"title":"7.1 事务并发的问题","slug":"_7-1-事务并发的问题","link":"#_7-1-事务并发的问题","children":[]},{"level":3,"title":"7.2 MySQL 事务隔离级别","slug":"_7-2-mysql-事务隔离级别","link":"#_7-2-mysql-事务隔离级别","children":[]}]},{"level":2,"title":"8. utf8 和 utf8mb4","slug":"_8-utf8-和-utf8mb4","link":"#_8-utf8-和-utf8mb4","children":[]},{"level":2,"title":"9. MySQL 乐观锁和悲观锁","slug":"_9-mysql-乐观锁和悲观锁","link":"#_9-mysql-乐观锁和悲观锁","children":[]},{"level":2,"title":"10. MVCC","slug":"_10-mvcc","link":"#_10-mvcc","children":[]},{"level":2,"title":"11.","slug":"_11","link":"#_11","children":[]}],"readingTime":{"minutes":4.48,"words":1345},"filePathRelative":"interview/mysql/mysql.md","localizedDate":"2022年4月2日","excerpt":"<h2> 1. 事务的四个特性</h2>\\n<p>ACID (Atomicity, Correspondence, Isolation, Durability)。</p>\\n<ol>\\n<li><strong>原子性</strong>（Atomicity)：事务中的操作，要么<strong>全部成功</strong>，要么<strong>全部失败</strong>。事务在执行过程中发生错误，就会回滚（Rollback）到事务开始前的状态，就像事务从未发生过一样。</li>\\n<li><strong>一致性</strong> (Correspondence)：事务开始前和结束后，必须使数据库从一个一致性状态变换到另一个一致性状态，数据库的完整性约束没有被破坏。\\n假设用户A和用户B两者的钱加起来一共是5000，那么不管A和B之间如何转账，转几次账，事务结束后两个用户的钱相加起来应该还得是5000，这就是事务的一致性。</li>\\n<li><strong>隔离性</strong> (Isolation)：多个用户并发访问数据库时，每个事务之间不能相互干扰，由此引申出<strong>隔离级别</strong>。</li>\\n<li><strong>持久性</strong> (Durability):  事务一旦被提交，对数据库的改动是永久性的。</li>\\n</ol>"}');export{l as data};
