import{_ as t,X as p,Y as o,Z as n,$ as a,a0 as e,a1 as i,F as c}from"./framework-8cb7ec75.js";const l={},u=i(`<h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>minidb 为 rosedb 的 mini 版本，用于理解 bitcask 存储模型以及 rosedb。</p><p>minidb 中没有实现 bitcask 模型的多个数据文件机制，为了简化只使用了一个数据文件进行读写，但不妨碍理解 bitcask 模型。</p><h2 id="_2-存储模型" tabindex="-1"><a class="header-anchor" href="#_2-存储模型" aria-hidden="true">#</a> 2. 存储模型</h2><p>存储，其核心问题是：如何存放数据以及如何取出数据。</p><p>计算机中有内存和磁盘，内存是易失性的，掉电之后数据全部丢失，所以想要在系统崩溃重启后依然正常使用，需要将数据存储在非易失介质中（如磁盘等）。</p><p>那么对于一个单机版的 k-v 存储引擎，我们需要设计数据在内存中应该如何存放，在磁盘中应该如何存放。根据优秀前辈的研究和总结，主要将数据存储模型分为两类：<mark>B+ 树</mark> 和 <mark>LSM 树</mark>。</p><h3 id="_2-1-b-树" tabindex="-1"><a class="header-anchor" href="#_2-1-b-树" aria-hidden="true">#</a> 2.1 B+ 树</h3><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/640.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>B+ 树由二叉查找树演化而来，通过增加每层节点的数量，来降低树的高度，适配磁盘的页，尽量减少磁盘 IO 操作。</p><p>B+ 树查询性能比较稳定，在写入或更新时，会查找并定位到磁盘中的位置并进行原地操作，注意这里是随机 IO，并且大量的插入或删除还有可能触发页分裂和合并，写入性能一般，因此 B+ 树适合 <mark>读多写少</mark> 的场景。</p><h3 id="_2-2-lsm-树" tabindex="-1"><a class="header-anchor" href="#_2-2-lsm-树" aria-hidden="true">#</a> 2.2 LSM 树</h3><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/640-16480900289396.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>LSM Tree (Log Structured Merge Tree, 日志结构合并树) 其实不是一种具体的树类型的数据结构，而是一种数据存储模型，其核心思想基于一个事实：<mark>顺序 IO 远快于随机 IO</mark>。</p><p>和 B+ 树不同，在 LSM 中数据的插入、更新、删除都会被记录成一条日志，然后追加写入到磁盘文件当中，这样所有的操作都是顺序 IO，因此 LSM 树适用于 <mark>写多读少</mark> 的场景。</p><h2 id="_3-minidb" tabindex="-1"><a class="header-anchor" href="#_3-minidb" aria-hidden="true">#</a> 3. minidb</h2><p>minidb 基于一种更加简单的存储结构，总体上和 LSM 类似。下面通过简单例子看下 minidb 当中数据的 PUT、GET、DELETE 流程。</p><h3 id="_3-1-put" tabindex="-1"><a class="header-anchor" href="#_3-1-put" aria-hidden="true">#</a> 3.1 PUT</h3><p>我们需要存储一条记录，分别是 key 和 value。首先，为防止数据丢失，我们会将 key 和 value 封装成一条记录（称作 Entry），追加到磁盘文件中。Entry 的大致由 key、value、key size、value size、写入时间组成。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/640-16480905734318.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那么磁盘文件的结构非常简单，就是多个 Entry 的集合。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/640-164809062250110.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><mark>磁盘更新完了，再来更新内存</mark>， 内存当中可以选择一个简单的数据结构，如哈希表。哈希表的 key 对应存放的是 Entry 在磁盘中的位置，便于查找时进行获取。</p><p>至此 minidb 的数据存储的流程结束了，只有两个步骤： 一次磁盘记录的追加，一次内存当中的索引更新。</p><h3 id="_3-2-get" tabindex="-1"><a class="header-anchor" href="#_3-2-get" aria-hidden="true">#</a> 3.2 GET</h3><p>获取一条数据，首先在内存中的哈希表查找到 key 对应的索引信息，其中包含了的 value 存储在磁盘文件中的位置，然后直接根据这个位置，在磁盘中取出 value 即可。</p><h3 id="_3-3-del" tabindex="-1"><a class="header-anchor" href="#_3-3-del" aria-hidden="true">#</a> 3.3 DEL</h3><p>删除操作，并不会定位到原记录进行删除，而是首先将删除的操作封装成 Entry，追加到磁盘中，只是需要标识 Entry 的类型是删除。</p><p>之后在内存当中的哈希表删除对应的 key 的索引信息，至此删除操作便完成了。</p><p>可以看到，无论是插入、查询、删除都只有两个步骤：<mark>一次内存中的索引更新，一次磁盘文件的记录追加</mark>。所以无论数据规模如何，minidb 的写入性能较为稳定。</p><h3 id="_3-4-merge" tabindex="-1"><a class="header-anchor" href="#_3-4-merge" aria-hidden="true">#</a> 3.4 Merge</h3><p>最后再来看下一个比较重要的操作，由于磁盘记录一直在追加写入的，导致文件容量会一直增加。并且对于同一个 key，可能会在文件中存在多条 Entry（更新和删除 key 也会追加记录），那么在数据文件中，其实存在冗余的 Entry 数据。</p><p>例如，针对 key A，先后设其 value 为 10、20、30，那么磁盘就会存在三条记录：</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/640-164809160525512.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此时 A 的最新值是 30，那么前两条记录已经是无效的了。</p><p>针对上述情形，我们需要定期合并数据文件，清理无效的 Entry 数据，这个过程一般叫做 <mark>merge</mark>。</p><p>Merge 的思路也较为简单，取出原数据文件的所有 Entry，将有效的 Entry 重新写入到一个新建的临时文件中，最后将原数据文件删除，临时文件就是新的数据文件了。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/640-164809182080214.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这就是 minidb 的底层数据存储模型，名为 <mark>bitcask</mark>，rosedb 也是采用这种模型。其本质属于类 LSM 模型，核心思想是利用顺序 IO 来提升写性能，只不过在实现上比 LSM 简单。</p><h2 id="_4-代码实现" tabindex="-1"><a class="header-anchor" href="#_4-代码实现" aria-hidden="true">#</a> 4. 代码实现</h2><p>下面看下几个核心步骤的 Code 实现</p><h3 id="_4-1-open" tabindex="-1"><a class="header-anchor" href="#_4-1-open" aria-hidden="true">#</a> 4.1 Open</h3><p>打开数据库，需要先加载数据文件，取出文件中的 Entry 数据，还原索引状态，关键代码如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span>dirPath <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>MiniDB<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 如果数据库目录不存在，则新建一个</span>
   <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Stat</span><span class="token punctuation">(</span>dirPath<span class="token punctuation">)</span><span class="token punctuation">;</span> os<span class="token punctuation">.</span><span class="token function">IsNotExist</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">MkdirAll</span><span class="token punctuation">(</span>dirPath<span class="token punctuation">,</span> os<span class="token punctuation">.</span>ModePerm<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 加载数据文件</span>
   dbFile<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">NewDBFile</span><span class="token punctuation">(</span>dirPath<span class="token punctuation">)</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
   <span class="token punctuation">}</span>

   db <span class="token operator">:=</span> <span class="token operator">&amp;</span>MiniDB<span class="token punctuation">{</span>
      dbFile<span class="token punctuation">:</span> dbFile<span class="token punctuation">,</span>
      indexes<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int64</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      dirPath<span class="token punctuation">:</span> dirPath<span class="token punctuation">,</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 加载索引</span>
   db<span class="token punctuation">.</span><span class="token function">loadIndexesFromFile</span><span class="token punctuation">(</span>dbFile<span class="token punctuation">)</span>
   <span class="token keyword">return</span> db<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-put" tabindex="-1"><a class="header-anchor" href="#_4-2-put" aria-hidden="true">#</a> 4.2 PUT</h3><p>先更新磁盘，写入一条记录，再更新内存：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>db <span class="token operator">*</span>MiniDB<span class="token punctuation">)</span> <span class="token function">Put</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> value <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
   offset <span class="token operator">:=</span> db<span class="token punctuation">.</span>dbFile<span class="token punctuation">.</span>Offset
   <span class="token comment">// 封装成 Entry</span>
   entry <span class="token operator">:=</span> <span class="token function">NewEntry</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> PUT<span class="token punctuation">)</span>
   <span class="token comment">// 追加到数据文件当中</span>
   err <span class="token operator">=</span> db<span class="token punctuation">.</span>dbFile<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span>

   <span class="token comment">// 写到内存</span>
   db<span class="token punctuation">.</span>indexes<span class="token punctuation">[</span><span class="token function">string</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> offset
   <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-get" tabindex="-1"><a class="header-anchor" href="#_4-3-get" aria-hidden="true">#</a> 4.3 GET</h3><p>从内存中去除索引信息，判断是否存在，不存在直接返回，存在则从硬盘中取出数据。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>db <span class="token operator">*</span>MiniDB<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>val <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 从内存当中取出索引信息</span>
   offset<span class="token punctuation">,</span> ok <span class="token operator">:=</span> db<span class="token punctuation">.</span>indexes<span class="token punctuation">[</span><span class="token function">string</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">]</span>
   <span class="token comment">// key 不存在</span>
   <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 从磁盘中读取数据</span>
   <span class="token keyword">var</span> e <span class="token operator">*</span>Entry
   e<span class="token punctuation">,</span> err <span class="token operator">=</span> db<span class="token punctuation">.</span>dbFile<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>offset<span class="token punctuation">)</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">if</span> e <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      val <span class="token operator">=</span> e<span class="token punctuation">.</span>Value
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-delete" tabindex="-1"><a class="header-anchor" href="#_4-4-delete" aria-hidden="true">#</a> 4.4 DELETE</h3><p>DEL 和 PUT 类似，只是 Entry 被标记为了 DEL，然后封装成了 Entry 写入到文件中：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>db <span class="token operator">*</span>MiniDB<span class="token punctuation">)</span> <span class="token function">Del</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 从内存当中取出索引信息</span>
   <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> db<span class="token punctuation">.</span>indexes<span class="token punctuation">[</span><span class="token function">string</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">]</span>
   <span class="token comment">// key 不存在，忽略</span>
   <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 封装成 Entry 并写入</span>
   e <span class="token operator">:=</span> <span class="token function">NewEntry</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> DEL<span class="token punctuation">)</span>
   err <span class="token operator">=</span> db<span class="token punctuation">.</span>dbFile<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 删除内存中的 key</span>
   <span class="token function">delete</span><span class="token punctuation">(</span>db<span class="token punctuation">.</span>indexes<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-merge" tabindex="-1"><a class="header-anchor" href="#_4-5-merge" aria-hidden="true">#</a> 4.5 Merge</h3><p>合并文件操作：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>db <span class="token operator">*</span>MiniDB<span class="token punctuation">)</span> <span class="token function">Merge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
   <span class="token comment">// 读取原数据文件中的 Entry</span>
   <span class="token keyword">for</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span>dbFile<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>offset<span class="token punctuation">)</span>
      <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">return</span> err
      <span class="token punctuation">}</span>
      <span class="token comment">// 内存中的索引状态是最新的，直接对比过滤出有效的 Entry</span>
      <span class="token keyword">if</span> off<span class="token punctuation">,</span> ok <span class="token operator">:=</span> db<span class="token punctuation">.</span>indexes<span class="token punctuation">[</span><span class="token function">string</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Key<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token operator">&amp;&amp;</span> off <span class="token operator">==</span> offset <span class="token punctuation">{</span>
         validEntries <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>validEntries<span class="token punctuation">,</span> e<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      offset <span class="token operator">+=</span> e<span class="token punctuation">.</span><span class="token function">GetSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>validEntries<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
      <span class="token comment">// 新建临时文件</span>
      mergeDBFile<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">NewMergeDBFile</span><span class="token punctuation">(</span>db<span class="token punctuation">.</span>dirPath<span class="token punctuation">)</span>
      <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> err
      <span class="token punctuation">}</span>
      <span class="token keyword">defer</span> os<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>mergeDBFile<span class="token punctuation">.</span>File<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

      <span class="token comment">// 重新写入有效的 entry</span>
      <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> entry <span class="token operator">:=</span> <span class="token keyword">range</span> validEntries <span class="token punctuation">{</span>
         writeOff <span class="token operator">:=</span> mergeDBFile<span class="token punctuation">.</span>Offset
         err <span class="token operator">:=</span> mergeDBFile<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span>
         <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> err
         <span class="token punctuation">}</span>

         <span class="token comment">// 更新索引</span>
         db<span class="token punctuation">.</span>indexes<span class="token punctuation">[</span><span class="token function">string</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span>Key<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> writeOff
      <span class="token punctuation">}</span>

      <span class="token comment">// 删除旧的数据文件</span>
      os<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>db<span class="token punctuation">.</span>dbFile<span class="token punctuation">.</span>File<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token comment">// 临时文件变更为新的数据文件</span>
      os<span class="token punctuation">.</span><span class="token function">Rename</span><span class="token punctuation">(</span>mergeDBFile<span class="token punctuation">.</span>File<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> db<span class="token punctuation">.</span>dirPath<span class="token operator">+</span><span class="token function">string</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>PathSeparator<span class="token punctuation">)</span><span class="token operator">+</span>FileName<span class="token punctuation">)</span>

      db<span class="token punctuation">.</span>dbFile <span class="token operator">=</span> mergeDBFile
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-小结" tabindex="-1"><a class="header-anchor" href="#_5-小结" aria-hidden="true">#</a> 5. 小结</h2><p>除去测试文件，minidb 的<mark>核心代码只有300行</mark>，但包含了 bitcask 存储模型的主要思想，并且也是 rosedb 的底层基础。</p><p>虽然 bitcask 简单易懂，但是也存在不少问题，在 rosedb 中也对其进行了优化。</p><p>bitcask 最初源于 Riak 项目的底层存储模型，而 Riak 是一个分布式 k-v 存储，在 NoSQL 的排名中也名列前茅：</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/640-164809387798316.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>豆瓣使用的分布式 k-v 存储，其实也是基于的 bitcask 模型，并对其进行了很多优化。但是纯粹基于 bitcask 的 k-v 存储并不多。</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,63),r={href:"https://mp.weixin.qq.com/s/s8s6VtqwdyjthR6EtuhnUA",target:"_blank",rel:"noopener noreferrer"},d={href:"https://riak.com/assets/bitcask-intro.pdf",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=c("ExternalLinkIcon");return p(),o("div",null,[u,n("ol",null,[n("li",null,[n("a",r,[a("从零实现一个 k-v 存储引擎"),e(s)])]),n("li",null,[n("a",d,[a("bitcask"),e(s)])])])])}const f=t(l,[["render",k],["__file","minidb.html.vue"]]);export{f as default};