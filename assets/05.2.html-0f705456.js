import{_ as p,Z as o,$ as c,a0 as n,a1 as s,a2 as e,a4 as t,H as i}from"./framework-d03928c9.js";const l={},u=t('<p>使用<strong>数组</strong>设计哈希表的三个要点:</p><ol><li><strong>哈希函数</strong>: 将 Key 映射为桶中的存储位置</li><li><strong>存储桶</strong>: 将哈希值相同的元素存储在同一个桶中</li><li><strong>哈希冲突</strong>: 若桶中元素过多则需要进行扩容, 重新分配元素的位置</li></ol><h2 id="_5-2-1-问题30-插入-删除和随机访问都是-o-1-的容器" tabindex="-1"><a class="header-anchor" href="#_5-2-1-问题30-插入-删除和随机访问都是-o-1-的容器" aria-hidden="true">#</a> 5.2.1 问题30: 插入, 删除和随机访问都是*O(1)*的容器</h2>',3),d={href:"https://leetcode.cn/problems/FortPu/",target:"_blank",rel:"noopener noreferrer"},r=t(`<blockquote><p>设计一个支持在<em>平均</em> 时间复杂度 <strong>O(1)</strong> 下，执行以下操作的数据结构：</p><ul><li><code>insert(val)</code>：当元素 <code>val</code> 不存在时返回 <code>true</code> ，并向集合中插入该项，否则返回 <code>false</code> 。</li><li><code>remove(val)</code>：当元素 <code>val</code> 存在时返回 <code>true</code> ，并从集合中移除该项，否则返回 <code>false</code> 。</li><li><code>getRandom</code>：随机返回现有集合中的一项。每个元素应该有 <strong>相同的概率</strong> 被返回。</li></ul><p><strong>示例 :</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: inputs = [&quot;RandomizedSet&quot;, &quot;insert&quot;, &quot;remove&quot;, &quot;insert&quot;, &quot;getRandom&quot;, &quot;remove&quot;, &quot;insert&quot;, &quot;getRandom&quot;]
[[], [1], [2], [2], [], [1], [2], []]
输出: [null, true, false, true, 2, true, false, 2]
解释:
RandomizedSet randomSet = new RandomizedSet();  // 初始化一个空的集合
randomSet.insert(1); // 向集合中插入 1 ， 返回 true 表示 1 被成功地插入

randomSet.remove(2); // 返回 false，表示集合中不存在 2 

randomSet.insert(2); // 向集合中插入 2 返回 true ，集合现在包含 [1,2] 

randomSet.getRandom(); // getRandom 应随机返回 1 或 2 
  
randomSet.remove(1); // 从集合中移除 1 返回 true 。集合现在包含 [2] 

randomSet.insert(2); // 2 已在集合中，所以返回 false 

randomSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>-231 &lt;= val &lt;= 231 - 1</code></li><li>最多进行<code> 2 * 105</code> 次 <code>insert</code> ， <code>remove</code> 和 <code>getRandom</code> 方法调用</li><li>当调用 <code>getRandom</code> 方法时，集合中至少有一个元素</li></ul></blockquote><h3 id="_5-2-1-1-分析" tabindex="-1"><a class="header-anchor" href="#_5-2-1-1-分析" aria-hidden="true">#</a> 5.2.1.1 分析</h3><p>题中要求有两个:</p><ul><li>插入和删除时间为O(1), 可以使用哈希表实现</li><li>等概率返回元素, 可以使用数组实现</li></ul><p>由于哈希表不能实现等概率返回元素, 那么可以将哈希表和数组相结合来解决:</p><ol><li>将元素存储于数组中</li><li>构建哈希表(val, index), index 为数组的索引位置</li><li>生成(0, n-1)的随机数来返回数组中的元素, 其概率都是相等的</li></ol><h3 id="_5-2-1-2-题解" tabindex="-1"><a class="header-anchor" href="#_5-2-1-2-题解" aria-hidden="true">#</a> 5.2.1.2 题解</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> RandomizedSet <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    NumsToLoc <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    Nums      <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">/** Initialize your data structure here. */</span>
<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> RandomizedSet <span class="token punctuation">{</span>
    <span class="token keyword">return</span> RandomizedSet<span class="token punctuation">{</span>
       NumsToLoc<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       Nums<span class="token punctuation">:</span>      <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/** Inserts a value to the set. Returns true if the set did not already contain the specified element. */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>RandomizedSet<span class="token punctuation">)</span> <span class="token function">Insert</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> this<span class="token punctuation">.</span>NumsToLoc<span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// insert val to the end of &#39;nums&#39;</span>
    this<span class="token punctuation">.</span>NumsToLoc<span class="token punctuation">[</span>val<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Nums<span class="token punctuation">)</span>
    this<span class="token punctuation">.</span>Nums <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Nums<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">/** Removes a value from the set. Returns true if the set contained the specified element. */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>RandomizedSet<span class="token punctuation">)</span> <span class="token function">Remove</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> this<span class="token punctuation">.</span>NumsToLoc<span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    nums <span class="token operator">:=</span> this<span class="token punctuation">.</span>Nums
    <span class="token comment">/** 删除元素 */</span>
    loc <span class="token operator">:=</span> this<span class="token punctuation">.</span>NumsToLoc<span class="token punctuation">[</span>val<span class="token punctuation">]</span>
    <span class="token comment">// 和最后一个元素交换后删除</span>
    lastEle <span class="token operator">:=</span> nums<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    nums<span class="token punctuation">[</span>loc<span class="token punctuation">]</span> <span class="token operator">=</span> lastEle
    this<span class="token punctuation">.</span>NumsToLoc<span class="token punctuation">[</span>lastEle<span class="token punctuation">]</span> <span class="token operator">=</span> loc
    <span class="token function">delete</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>NumsToLoc<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
    this<span class="token punctuation">.</span>Nums <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">/** Get a random element from the set. */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>RandomizedSet<span class="token punctuation">)</span> <span class="token function">GetRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    randIdx <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> this<span class="token punctuation">.</span>Nums<span class="token punctuation">[</span>randIdx<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Your RandomizedSet object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Insert(val);
 * param_2 := obj.Remove(val);
 * param_3 := obj.GetRandom();
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2-2-问题31-最近最少使用缓存-lru" tabindex="-1"><a class="header-anchor" href="#_5-2-2-问题31-最近最少使用缓存-lru" aria-hidden="true">#</a> 5.2.2 问题31: 最近最少使用缓存 LRU</h2>`,9),k={href:"https://leetcode.cn/problems/OrIXps/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://baike.baidu.com/item/LRU",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>实现 <code>LRUCache</code> 类：</p><ul><li><p><code>LRUCache(int capacity)</code> 以正整数作为容量 <code>capacity</code> 初始化 LRU 缓存</p></li><li><p><code>int get(int key)</code> 如果关键字 <code>key</code> 存在于缓存中，则返回关键字的值，否则返回 <code>-1</code> 。</p></li><li><p><code>void put(int key, int value)</code> 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。</p></li><li><p><code>O(1)</code> 时间复杂度内完成这两种操作</p></li></ul><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入
[&quot;LRUCache&quot;, &quot;put&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;get&quot;, &quot;get&quot;]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= capacity &lt;= 3000</code></li><li><code>0 &lt;= key &lt;= 10000</code></li><li><code>0 &lt;= value &lt;= 105</code></li><li>最多调用 <code>2 * 105</code> 次 <code>get</code> 和 <code>put</code></li></ul>`,6),b=t(`<h3 id="_5-2-2-1-分析" tabindex="-1"><a class="header-anchor" href="#_5-2-2-1-分析" aria-hidden="true">#</a> 5.2.2.1 分析</h3><p>哈希表的插入和查找时间为O(1), 但是无法获取元素的使用情况.</p><p>可将元素按照访问顺序存入链表中, 每次进行操作时, 就将该元素移动至末尾, 那么头节点就自然是使用次数最少的那个元素了.</p><p>由于需要删除头节点, 效率最高的是使用双向链表, 只需修改指针指向即可.</p><p>流程如下:</p><ol><li>构建哈希表(key, node), node 代表一个元素节点</li><li>按照访问顺序将元素插入双向链表中</li><li>每次进行操作, 将元素移动至表尾</li><li>若容量已满, 则删除头节点</li></ol><h3 id="_5-2-2-2-题解" tabindex="-1"><a class="header-anchor" href="#_5-2-2-2-题解" aria-hidden="true">#</a> 5.2.2.2 题解</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> LRUCache <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    cache    <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token operator">*</span>ListNode31
    Capacity <span class="token builtin">int</span>
    <span class="token comment">/* 哨兵节点 */</span>
    head <span class="token operator">*</span>ListNode31
    tail <span class="token operator">*</span>ListNode31
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ListNode31 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Key  <span class="token builtin">int</span>
    Val  <span class="token builtin">int</span>
    Prev <span class="token operator">*</span>ListNode31
    Next <span class="token operator">*</span>ListNode31
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>lru <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">MoveToTail</span><span class="token punctuation">(</span>node <span class="token operator">*</span>ListNode31<span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lru<span class="token punctuation">.</span><span class="token function">DeleteNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    node<span class="token punctuation">.</span>Val <span class="token operator">=</span> val
    lru<span class="token punctuation">.</span><span class="token function">InsertToTail</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>lru <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">DeleteNode</span><span class="token punctuation">(</span>node <span class="token operator">*</span>ListNode31<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>Prev<span class="token punctuation">.</span>Next <span class="token operator">=</span> node<span class="token punctuation">.</span>Next
    node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Prev <span class="token operator">=</span> node<span class="token punctuation">.</span>Prev
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>lru <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">InsertToTail</span><span class="token punctuation">(</span>node <span class="token operator">*</span>ListNode31<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lru<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>Prev<span class="token punctuation">.</span>Next <span class="token operator">=</span> node
    node<span class="token punctuation">.</span>Prev <span class="token operator">=</span> lru<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>Prev
    node<span class="token punctuation">.</span>Next <span class="token operator">=</span> lru<span class="token punctuation">.</span>tail
    lru<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>Prev <span class="token operator">=</span> node
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ConstructorLRU</span><span class="token punctuation">(</span>capacity <span class="token builtin">int</span><span class="token punctuation">)</span> LRUCache <span class="token punctuation">{</span>
    head <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode31<span class="token punctuation">{</span>Key<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> Val<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
    tail <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode31<span class="token punctuation">{</span>Key<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> Val<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
    head<span class="token punctuation">.</span>Next <span class="token operator">=</span> tail
    tail<span class="token punctuation">.</span>Prev <span class="token operator">=</span> head

    <span class="token keyword">return</span> LRUCache<span class="token punctuation">{</span>
       cache<span class="token punctuation">:</span>    <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token operator">*</span>ListNode31<span class="token punctuation">,</span> capacity<span class="token punctuation">)</span><span class="token punctuation">,</span>
       Capacity<span class="token punctuation">:</span> capacity<span class="token punctuation">,</span>
       head<span class="token punctuation">:</span>     head<span class="token punctuation">,</span>
       tail<span class="token punctuation">:</span>     tail<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>lru <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">,</span> ok <span class="token operator">:=</span> lru<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
    lru<span class="token punctuation">.</span><span class="token function">MoveToTail</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span> <span class="token comment">// 移动至表尾</span>
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>Val
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>lru <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">Put</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">,</span> value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> node<span class="token punctuation">,</span> ok <span class="token operator">:=</span> lru<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
       lru<span class="token punctuation">.</span><span class="token function">MoveToTail</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>lru<span class="token punctuation">.</span>cache<span class="token punctuation">)</span> <span class="token operator">==</span> lru<span class="token punctuation">.</span>Capacity <span class="token punctuation">{</span>
          <span class="token comment">/* 移除头节点 */</span>
          toBeDeleted <span class="token operator">:=</span> lru<span class="token punctuation">.</span>head<span class="token punctuation">.</span>Next
          lru<span class="token punctuation">.</span><span class="token function">DeleteNode</span><span class="token punctuation">(</span>toBeDeleted<span class="token punctuation">)</span>
          <span class="token function">delete</span><span class="token punctuation">(</span>lru<span class="token punctuation">.</span>cache<span class="token punctuation">,</span> toBeDeleted<span class="token punctuation">.</span>Key<span class="token punctuation">)</span>
       <span class="token punctuation">}</span>

       newNode <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode31<span class="token punctuation">{</span>Key<span class="token punctuation">:</span> key<span class="token punctuation">,</span> Val<span class="token punctuation">:</span> value<span class="token punctuation">}</span>
       lru<span class="token punctuation">.</span><span class="token function">InsertToTail</span><span class="token punctuation">(</span>newNode<span class="token punctuation">)</span>
       lru<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newNode
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,9),h={href:"https://book.douban.com/subject/35543447/",target:"_blank",rel:"noopener noreferrer"};function f(g,y){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",d,[s("LCR 030. O(1) 时间插入、删除和获取随机元素"),e(a)])]),r,n("p",null,[n("a",k,[s("LCR 031. LRU 缓存"),e(a)])]),n("blockquote",null,[n("p",null,[s("运用所掌握的数据结构，设计和实现一个 "),n("a",v,[s("LRU (Least Recently Used，最近最少使用) 缓存机制"),e(a)]),s(" 。")]),m]),b,n("ol",null,[n("li",null,[n("a",h,[s("剑指Offer（专项突破版）"),e(a)])])])])}const _=p(l,[["render",f],["__file","05.2.html.vue"]]);export{_ as default};
