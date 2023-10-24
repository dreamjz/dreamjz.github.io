import{_ as n,Z as s,$ as a,a3 as e}from"./framework-09afcf0b.js";const i={},t=e(`<h2 id="_1-过期删除" tabindex="-1"><a class="header-anchor" href="#_1-过期删除" aria-hidden="true">#</a> 1. 过期删除</h2><p>每当我们对一个 key 设置了过期时间时，Redis 会把该 key 带上过期时间存储到一个<strong>过期字典</strong>（expires dict）中，也就是说「过期字典」保存了数据库中所有 key 的过期时间。</p><p>过期字典存储在 redisDb 结构中，如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">redisDb</span> <span class="token punctuation">{</span>
    dict <span class="token operator">*</span>dict<span class="token punctuation">;</span>    <span class="token comment">/* 数据库键空间，存放着所有的键值对 */</span>
    dict <span class="token operator">*</span>expires<span class="token punctuation">;</span> <span class="token comment">/* 键的过期时间 */</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> redisDb<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过期字典数据结构结构如下：</p><ul><li>过期字典的 key 是一个指针，指向某个键对象；</li><li>过期字典的 value 是一个 long long 类型的整数，这个整数保存了 key 的过期时间；</li></ul><p>过期字典的数据结构如下图所示：</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/redis/过期策略/过期字典数据结构.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>字典实际上是哈希表，哈希表的最大好处就是让我们可以用 O(1) 的时间复杂度来快速查找。当我们查询一个 key 时，Redis 首先检查该 key 是否存在于过期字典中：</p><ul><li>如果不在，则正常读取键值；</li><li>如果存在，则会获取该 key 的过期时间，然后与当前系统时间进行比对，如果比系统时间大，那就没有过期，否则判定该 key 已过期。</li></ul><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/redis/过期策略/过期判断流程.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="删除策略" tabindex="-1"><a class="header-anchor" href="#删除策略" aria-hidden="true">#</a> 删除策略</h3><p>三种过期删除策略：</p><ul><li>定时删除；</li><li>惰性删除；</li><li>定期删除；</li></ul><h4 id="定时删除" tabindex="-1"><a class="header-anchor" href="#定时删除" aria-hidden="true">#</a> 定时删除</h4><p>定时删除策略的做法是，<strong>在设置 key 的过期时间时，同时创建一个定时事件，当时间到达时，由事件处理器自动执行 key 的删除操作。</strong></p><p>定时删除策略的<strong>优点</strong>：</p><ul><li>可以保证过期 key 会被尽快删除，也就是内存可以被尽快地释放。因此，定时删除对内存是最友好的。</li></ul><p>定时删除策略的<strong>缺点</strong>：</p><ul><li>在过期 key 比较多的情况下，删除过期 key 可能会占用相当一部分 CPU 时间，在内存不紧张但 CPU 时间紧张的情况下，将 CPU 时间用于删除和当前任务无关的过期键上，无疑会对服务器的响应时间和吞吐量造成影响。所以，定时删除策略对 CPU 不友好</li></ul><h4 id="惰性删除" tabindex="-1"><a class="header-anchor" href="#惰性删除" aria-hidden="true">#</a> 惰性删除</h4><p>惰性删除策略的做法是，<strong>不主动删除过期键，每次从数据库访问 key 时，都检测 key 是否过期，如果过期则删除该 key。</strong></p><p>惰性删除策略的<strong>优点</strong>：</p><ul><li>因为每次访问时，才会检查 key 是否过期，所以此策略只会使用很少的系统资源，因此，惰性删除策略对 CPU 时间最友好。</li></ul><p>惰性删除策略的<strong>缺点</strong>：</p><ul><li>如果一个 key 已经过期，而这个 key 又仍然保留在数据库中，那么只要这个过期 key 一直没有被访问，它所占用的内存就不会释放，造成了一定的内存空间浪费。所以，惰性删除策略对内存不友好</li></ul><h4 id="定期删除" tabindex="-1"><a class="header-anchor" href="#定期删除" aria-hidden="true">#</a> 定期删除</h4><p><strong>每隔一段时间「随机」从数据库中取出一定数量的 key 进行检查，并删除其中的过期key。</strong></p><p>定期删除策略的<strong>优点</strong>：</p><ul><li>通过限制删除操作执行的时长和频率，来减少删除操作对 CPU 的影响，同时也能删除一部分过期的数据减少了过期键对空间的无效占用。</li></ul><p>定期删除策略的<strong>缺点</strong>：</p><ul><li>内存清理方面没有定时删除效果好，同时没有惰性删除使用的系统资源少。</li><li>难以确定删除操作执行的时长和频率。如果执行的太频繁，定期删除策略变得和定时删除策略一样，对CPU不友好；如果执行的太少，那又和惰性删除一样了，过期 key 占用的内存不会及时得到释放</li></ul><h4 id="redis-删除策略" tabindex="-1"><a class="header-anchor" href="#redis-删除策略" aria-hidden="true">#</a> Redis 删除策略</h4><p><strong>Redis 选择「惰性删除+定期删除」这两种策略配和使用</strong></p><p>Redis 的惰性删除策略由 db.c 文件中的 <code>expireIfNeeded</code> 函数实现，代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">expireIfNeeded</span><span class="token punctuation">(</span>redisDb <span class="token operator">*</span>db<span class="token punctuation">,</span> robj <span class="token operator">*</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断 key 是否过期</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">keyIsExpired</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token comment">/* 删除过期键 */</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token comment">// 如果 server.lazyfree_lazy_expire 为 1 表示异步删除，反之同步删除；</span>
    <span class="token keyword">return</span> server<span class="token punctuation">.</span>lazyfree_lazy_expire <span class="token operator">?</span> <span class="token function">dbAsyncDelete</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span>key<span class="token punctuation">)</span> <span class="token operator">:</span>
                                         <span class="token function">dbSyncDelete</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Redis 在访问或者修改 key 之前，都会调用 expireIfNeeded 函数对其进行检查，检查 key 是否过期：</p><ul><li>如果过期，则删除该 key，至于选择异步删除，还是选择同步删除，根据 <code>lazyfree_lazy_expire</code> 参数配置决定（Redis 4.0版本开始提供参数），然后返回 null 客户端；</li><li>如果没有过期，不做任何处理，然后返回正常的键值对给客户端；</li></ul><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/redis/过期策略/惰性删除.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>每隔一段时间「随机」从数据库中取出一定数量的 key 进行检查，并删除其中的过期key。</strong></p><p><em>1、这个间隔检查的时间是多长呢？</em></p><p>在 Redis 中，默认每秒进行 10 次过期检查一次数据库，此配置可通过 Redis 的配置文件 redis.conf 进行配置，配置键为 hz 它的默认值是 hz 10。</p><p>特别强调下，每次检查数据库并不是遍历过期字典中的所有 key，而是从数据库中随机抽取一定数量的 key 进行过期检查。</p><p><em>2、随机抽查的数量是多少呢？</em></p><p>定期删除的实现在 expire.c 文件下的 <code>activeExpireCycle</code> 函数中，其中随机抽查的数量由 <code>ACTIVE_EXPIRE_CYCLE_LOOKUPS_PER_LOOP</code> 定义的，它是写死在代码中的，数值是 20。</p><p>数据库每轮抽查时，会随机选择 20 个 key 判断是否过期。</p><p>接下来，Redis 的定期删除的流程：</p><ol><li>从过期字典中随机抽取 20 个 key；</li><li>检查这 20 个 key 是否过期，并删除已过期的 key；</li><li>如果本轮检查的已过期 key 的数量，超过 5 个（20/4），也就是「已过期 key 的数量」占比「随机抽取 key 的数量」大于 25%，则继续重复步骤 1；如果已过期的 key 比例小于 25%，则停止继续删除过期 key，然后等待下一轮再检查。</li></ol><p>Redis 为了保证定期删除不会出现循环过度，导致线程卡死现象，为此增加了定期删除循环流程的时间上限，默认不会超过 25ms。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/redis/过期策略/定时删除流程.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_2-内存淘汰" tabindex="-1"><a class="header-anchor" href="#_2-内存淘汰" aria-hidden="true">#</a> 2. 内存淘汰</h2><p>Redis 内存淘汰策略共有八种，这八种策略大体分为「不进行数据淘汰」和「进行数据淘汰」两类策略。</p><p><em>1、不进行数据淘汰的策略</em></p><p><strong>noeviction</strong>（Redis3.0之后，默认的内存淘汰策略） ：它表示当运行内存超过最大设置内存时，不淘汰任何数据，这时如果有新的数据写入，会报错通知禁止写入，不淘汰任何数据，但是如果没用数据写入的话，只是单纯的查询或者删除操作的话，还是可以正常工作。</p><p><em>2、进行数据淘汰的策略</em></p><p>针对「进行数据淘汰」这一类策略，又可以细分为「在设置了过期时间的数据中进行淘汰」和「在所有数据范围内进行淘汰」这两类策略。</p><p>在设置了过期时间的数据中进行淘汰：</p><ul><li><strong>volatile-random</strong>：随机淘汰设置了过期时间的任意键值；</li><li><strong>volatile-ttl</strong>：优先淘汰更早过期的键值。</li><li><strong>volatile-lru</strong>（Redis3.0 之前，默认的内存淘汰策略）：淘汰所有设置了过期时间的键值中，最久未使用的键值；</li><li><strong>volatile-lfu</strong>（Redis 4.0 后新增的内存淘汰策略）：淘汰所有设置了过期时间的键值中，最少使用的键值；</li></ul><p>在所有数据范围内进行淘汰：</p><ul><li><strong>allkeys-random</strong>：随机淘汰任意键值;</li><li><strong>allkeys-lru</strong>：淘汰整个键值中最久未使用的键值；</li><li><strong>allkeys-lfu</strong>（Redis 4.0 后新增的内存淘汰策略）：淘汰整个键值中最少使用的键值</li></ul><h3 id="查看当前淘汰策略" tabindex="-1"><a class="header-anchor" href="#查看当前淘汰策略" aria-hidden="true">#</a> 查看当前淘汰策略</h3><p>可以使用 <code>config get maxmemory-policy</code> 命令，来查看当前 Redis 的内存淘汰策略，命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get maxmemory-policy
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;maxmemory-policy&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;noeviction&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lru" tabindex="-1"><a class="header-anchor" href="#lru" aria-hidden="true">#</a> LRU</h3><p><strong>LRU</strong> 全称是 Least Recently Used 翻译为<strong>最近最少使用</strong>，会选择淘汰最近最少使用的数据。</p><p>传统 LRU 算法的实现是基于「链表」结构，链表中的元素按照操作顺序从前往后排列，最新操作的键会被移动到表头，当需要内存淘汰时，只需要删除链表尾部的元素即可，因为链表尾部的元素就代表最久未被使用的元素。</p><p>Redis 并没有使用这样的方式实现 LRU 算法，因为传统的 LRU 算法存在两个问题：</p><ul><li>需要用链表管理所有的缓存数据，这会带来额外的空间开销；</li><li>当有数据被访问时，需要在链表上把该数据移动到头端，如果有大量数据被访问，就会带来很多链表移动操作，会很耗时，进而会降低 Redis 缓存性能。</li></ul><h3 id="redis-中的近似-lru" tabindex="-1"><a class="header-anchor" href="#redis-中的近似-lru" aria-hidden="true">#</a> Redis 中的近似 LRU</h3><p>Redis 实现的是一种<strong>近似 LRU 算法</strong>，目的是为了更好的节约内存，它的<strong>实现方式是在 Redis 的对象结构体中添加一个额外的字段，用于记录此数据的最后一次访问时间</strong>。</p><p>当 Redis 进行内存淘汰时，会使用<strong>随机采样的方式来淘汰数据</strong>，它是随机取 5 个值（此值可配置），然后<strong>淘汰最久没有使用的那个</strong>。</p><p>Redis 实现的 LRU 算法的优点：</p><ul><li>不用为所有的数据维护一个大链表，节省了空间占用；</li><li>不用在每次数据访问时都移动链表项，提升了缓存的性能；</li></ul><p>但是 LRU 算法有一个问题，<strong>无法解决缓存污染问题</strong>，比如应用一次读取了大量的数据，而这些数据只会被读取这一次，那么这些数据会留存在 Redis 缓存中很长一段时间，造成缓存污染。</p><h3 id="lfu" tabindex="-1"><a class="header-anchor" href="#lfu" aria-hidden="true">#</a> LFU</h3><p>LFU 全称是 Least Frequently Used 翻译为<strong>最近最不常用</strong>，LFU 算法是根据数据访问次数来淘汰数据的，它的核心思想是“如果数据过去被访问多次，那么将来被访问的频率也更高”。</p><p>所以， LFU 算法会记录每个数据的访问次数。当一个数据被再次访问时，就会增加该数据的访问次数。这样就解决了偶尔被访问一次之后，数据留存在缓存中很长一段时间的问题，相比于 LRU 算法也更合理一些。</p><h3 id="redis-中的-lfu" tabindex="-1"><a class="header-anchor" href="#redis-中的-lfu" aria-hidden="true">#</a> Redis 中的 LFU</h3><p>LFU 算法相比于 LRU 算法的实现，多记录了「数据的访问频次」的信息。Redis 对象的结构如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">redisObject</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
      
    <span class="token comment">// 24 bits，用于记录对象的访问信息</span>
    <span class="token keyword">unsigned</span> lru<span class="token operator">:</span><span class="token number">24</span><span class="token punctuation">;</span>  
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> robj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在 LRU 算法中</strong>，Redis 对象头的 24 bits 的 lru 字段是用来记录 key 的访问时间戳，因此在 LRU 模式下，Redis可以根据对象头中的 lru 字段记录的值，来比较最后一次 key 的访问时间长，从而淘汰最久未被使用的 key。</p><p><strong>在 LFU 算法中</strong>，Redis对象头的 24 bits 的 lru 字段被分成两段来存储，高 16bit 存储 ldt(Last Decrement Time)，低 8bit 存储 logc(Logistic Counter)。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/redis/过期策略/lru字段.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>ldt 是用来记录 key 的访问时间戳；</li><li>logc 是用来记录 key 的访问频次，它的值越小表示使用频率越低，越容易淘汰，每个新加入的 key 的logc 初始值为 5。</li></ul><p>logc 并不是单纯的访问次数，而是访问频次（访问频率），因为 <strong>logc 会随时间推移而衰减的</strong>。</p><p>在每次 key 被访问时，会先对 logc 做一个衰减操作，衰减的值跟前后访问时间的差距有关系，如果上一次访问的时间与这一次访问的时间差距很大，那么衰减的值就越大，这样实现的 LFU 算法是根据<strong>访问频率</strong>来淘汰数据的，而不只是访问次数。访问频率需要考虑 key 的访问是多长时间段内发生的。key 的先前访问距离当前时间越长，那么这个 key 的访问频率相应地也就会降低，这样被淘汰的概率也会更大。</p><p>对 logc 做完衰减操作后，就开始对 logc 进行增加操作，增加操作并不是单纯的 + 1，而是根据概率增加，如果 logc 越大的 key，它的 logc 就越难再增加。</p><p>所以，Redis 在访问 key 时，对于 logc 是这样变化的：</p><ol><li>先按照上次访问距离当前的时长，来对 logc 进行衰减；</li><li>然后，再按照一定概率增加 logc 的值</li></ol><p>redis.conf 提供了两个配置项，用于调整 LFU 算法从而控制 logc 的增长和衰减：</p><ul><li><code>lfu-decay-time</code> 用于调整 logc 的衰减速度，它是一个以分钟为单位的数值，默认值为1，lfu-decay-time 值越大，衰减越慢；</li><li><code>lfu-log-factor</code> 用于调整 logc 的增长速度，lfu-log-factor 值越大，logc 增长越慢</li></ul><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>Redis 使用的过期删除策略是「惰性删除+定期删除」，删除的对象是已过期的 key。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/redis/过期策略/过期删除策略.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>内存淘汰策略是解决内存过大的问题，当 Redis 的运行内存超过最大运行内存时，就会触发内存淘汰策略，Redis 4.0 之后共实现了 8 种内存淘汰策略，我也对这 8 种的策略进行分类，如下：</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/redis/过期策略/内存淘汰策略.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,96),l=[t];function o(p,c){return s(),a("div",null,l)}const d=n(i,[["render",o],["__file","04.mem.html.vue"]]);export{d as default};
