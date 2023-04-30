import{_ as e,X as t,Y as a,a1 as i}from"./framework-8cb7ec75.js";const r={},n=i(`<h2 id="_1-事务的四个特性" tabindex="-1"><a class="header-anchor" href="#_1-事务的四个特性" aria-hidden="true">#</a> 1. 事务的四个特性</h2><p>ACID (Atomicity, Correspondence, Isolation, Durability)。</p><ol><li><strong>原子性</strong>（Atomicity)：事务中的操作，要么<strong>全部成功</strong>，要么<strong>全部失败</strong>。事务在执行过程中发生错误，就会回滚（Rollback）到事务开始前的状态，就像事务从未发生过一样。</li><li><strong>一致性</strong> (Correspondence)：事务开始前和结束后，必须使数据库从一个一致性状态变换到另一个一致性状态，数据库的完整性约束没有被破坏。 假设用户A和用户B两者的钱加起来一共是5000，那么不管A和B之间如何转账，转几次账，事务结束后两个用户的钱相加起来应该还得是5000，这就是事务的一致性。</li><li><strong>隔离性</strong> (Isolation)：多个用户并发访问数据库时，每个事务之间不能相互干扰，由此引申出<strong>隔离级别</strong>。</li><li><strong>持久性</strong> (Durability): 事务一旦被提交，对数据库的改动是永久性的。</li></ol><h2 id="_2-视图" tabindex="-1"><a class="header-anchor" href="#_2-视图" aria-hidden="true">#</a> 2. 视图</h2><p>视图是<strong>虚拟</strong>表，只包含查询的数据。</p><p>使用视图可以简化复杂的 SQL 操作。</p><p>视图不能被索引，也不能有关联的触发器或默认值，若视图内有 <code>order by</code> ，在使用视图时将会覆盖。</p><p>创建视图：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> view_name <span class="token keyword">AS</span> sql_statement<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-drop-delete-truncate" tabindex="-1"><a class="header-anchor" href="#_3-drop-delete-truncate" aria-hidden="true">#</a> 3. drop, delete, truncate</h2><ol><li>drop 直接删除表；</li><li>truncate 删除表中所有数据，相关的触发器和索引等会被删除，重新添加数据则 ID 从新开始；</li><li>delete 删除数据，但依赖的 约束，触发器和索引等不会被删除；</li><li>delete 属于 DML，可以回滚；drop 和 truncate 属于 DDL 不能回滚。</li><li>执行效率：drop &gt; truncate &gt; delete。</li></ol><h2 id="_4-join" tabindex="-1"><a class="header-anchor" href="#_4-join" aria-hidden="true">#</a> 4. JOIN</h2><h2 id="_5-mysql-索引" tabindex="-1"><a class="header-anchor" href="#_5-mysql-索引" aria-hidden="true">#</a> 5. MySQL 索引</h2><p>MySQL 索引使用 B+ 树，查询效率高（时间复杂度 <em>O(logN)</em> ），适配磁盘的页，尽量减少磁盘 IO 操作，适合<strong>读多写少</strong>的场景。</p><h2 id="_6-mysql-存储引擎" tabindex="-1"><a class="header-anchor" href="#_6-mysql-存储引擎" aria-hidden="true">#</a> 6. MySQL 存储引擎</h2><table><thead><tr><th>Name</th><th>Decription</th></tr></thead><tbody><tr><td>InnoDB</td><td>默认引擎</td></tr></tbody></table><h2 id="_7-mysql-事务隔离级别" tabindex="-1"><a class="header-anchor" href="#_7-mysql-事务隔离级别" aria-hidden="true">#</a> 7. MySQL 事务隔离级别</h2><h3 id="_7-1-事务并发的问题" tabindex="-1"><a class="header-anchor" href="#_7-1-事务并发的问题" aria-hidden="true">#</a> 7.1 事务并发的问题</h3><ol><li><p><strong>脏读 (Dirty Read)</strong> 一个事务读取了另一个事务未提交的数据。</p></li><li><p><strong>不可重复读 (Non-repeatable Read)</strong></p><p>在一个事务中两次查询的数据不一致。</p></li><li><p><strong>幻读 (Phantom Read)</strong> 当用户读取某一范围的数据行时，另一事物又在该范围插入新行，再次读取时会发现出现“幻影”行。</p></li></ol><h3 id="_7-2-mysql-事务隔离级别" tabindex="-1"><a class="header-anchor" href="#_7-2-mysql-事务隔离级别" aria-hidden="true">#</a> 7.2 MySQL 事务隔离级别</h3><table><thead><tr><th>事务隔离级别</th><th>脏读</th><th>不可重复读</th><th>幻读</th></tr></thead><tbody><tr><td>读未提交</td><td>Y</td><td>Y</td><td>Y</td></tr><tr><td>读已提交</td><td>N</td><td>Y</td><td>Y</td></tr><tr><td>可重复读</td><td>N</td><td>N</td><td>Y</td></tr><tr><td>串行化（序列化）</td><td>N</td><td>N</td><td>N</td></tr></tbody></table><ul><li><strong>读未提交 (Read Uncommitted)</strong> 一个事务可以读取另一个未提交事务的数据。 <ul><li>所有事务都可以看到其他事务的执行结果；</li><li>此隔离级别使用较少；</li><li>引发的问题为 <strong>脏读 (Dirty Read)</strong>：读取未提交的数据；</li></ul></li><li><strong>读已提交 (Read Committed)</strong> 一个事务等另一事物提交后才能提交数据，可以避免脏读。 <ul><li>出现的问题是 <strong>不可重复读 (Non-Repeatable Read)</strong>；</li></ul></li><li><strong>可重复读 (Repeatable Read)</strong> 开始事务时，已读取的数据无法进行修改操作，可避免脏读和不可重复读。 <ul><li>MySQL 默认隔离级别；</li><li>确保同一事务的多个实例在并发读取数据时，会看到同样的数据行；</li><li>出现的问题是 <strong>幻读 (Phantom Read)</strong>：当事务读取某一范围的数据行之后，另一事物在范围内插入了新行，再次读取时出现了“幻影”行；</li><li>InnoDB 和 Falcon 通过 MVCC (Multiversion Concurrency Control, 多版本并发控制)机制解决该问题；</li><li>InnoDB 通过 MVCC 支持高并发，默认为可重复度，通过间隙锁 (Netx-key Locks) 策略防止幻读出现；</li></ul></li><li>可串行化 (Serializable) 事务串行化顺序执行，可避免脏读、不可重复度和幻读。 <ul><li>强制事务排序，不可能冲突，在每个读数据上添加共享锁，解决幻读问题；</li><li>会导致大量的超时现象和锁竞争；</li></ul></li></ul><h2 id="_8-utf8-和-utf8mb4" tabindex="-1"><a class="header-anchor" href="#_8-utf8-和-utf8mb4" aria-hidden="true">#</a> 8. utf8 和 utf8mb4</h2><p>utf8mb4 中的 mb4 为 <em>most bytes 4</em>，专门用于兼容四字节的 unicode；</p><p>MySQL 中的 utf8 最多支持长度为 3 字节；</p><h2 id="_9-mysql-乐观锁和悲观锁" tabindex="-1"><a class="header-anchor" href="#_9-mysql-乐观锁和悲观锁" aria-hidden="true">#</a> 9. MySQL 乐观锁和悲观锁</h2><ul><li><p><strong>悲观锁 (Pessimistic Lock)</strong> 每次获取数据时都会认为会被别人修改，所以在每次获取数据时都会上锁。 适用于<strong>写多读少</strong>的场景；</p></li><li><p><strong>乐观锁 (Optimistic Lock)</strong> 每次获取数据时，认为别人不会修改，所以不会上锁，但是在更新时会判断期间数据是否被更新，一般有两种方式：</p><ol><li>使用数据版本 (Version) 记录机制。为数据增加一个版本标识，每次更新数据时则将 version 加一，当提交时，将第一次读取的 ver 和数据库当前的 ver 进行比较，若相同则继续更新；</li><li>增加控制字段，时间戳，在更新时比较时间戳；</li></ol><p>乐观锁适用于<strong>读多写少</strong>的场景。</p><p>乐观锁一般流程如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. SELECT data AS old_data, version AS old_version FROM …;
2. 根据获取的数据进行业务操作，得到new_data和new_version
3. UPDATE SET data = new_data, version = new_version WHERE version = old_version
if (updated row &gt; 0) {
    // 乐观锁获取成功，操作完成
} else {
    // 乐观锁获取失败，回滚并重试
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_10-mvcc" tabindex="-1"><a class="header-anchor" href="#_10-mvcc" aria-hidden="true">#</a> 10. MVCC</h2><h2 id="_11" tabindex="-1"><a class="header-anchor" href="#_11" aria-hidden="true">#</a> 11.</h2>`,29),d=[n];function l(s,o){return t(),a("div",null,d)}const c=e(r,[["render",l],["__file","mysql.html.vue"]]);export{c as default};
