import{_ as p,Z as o,$ as c,a0 as n,a1 as s,a2 as e,a3 as t,H as l}from"./framework-09afcf0b.js";const i={},u={href:"https://leetcode.cn/problems/lru-cache/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://baike.baidu.com/item/LRU",target:"_blank",rel:"noopener noreferrer"},r=t(`<p>实现 <code>LRUCache</code> 类：</p><ul><li><code>LRUCache(int capacity)</code> 以 <strong>正整数</strong> 作为容量 <code>capacity</code> 初始化 LRU 缓存</li><li><code>int get(int key)</code> 如果关键字 <code>key</code> 存在于缓存中，则返回关键字的值，否则返回 <code>-1</code> 。</li><li><code>void put(int key, int value)</code> 如果关键字 <code>key</code> 已经存在，则变更其数据值 <code>value</code> ；如果不存在，则向缓存中插入该组 <code>key-value</code> 。如果插入操作导致关键字数量超过 <code>capacity</code> ，则应该 <strong>逐出</strong> 最久未使用的关键字。</li></ul><p>函数 <code>get</code> 和 <code>put</code> 必须以 <code>O(1)</code> 的平均时间复杂度运行。</p><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= capacity &lt;= 3000</code></li><li><code>0 &lt;= key &lt;= 10000</code></li><li><code>0 &lt;= value &lt;= 10^5</code></li><li>最多调用 <code>2 * 10^5</code> 次 <code>get</code> 和 <code>put</code></li></ul>`,7),k=t(`<h2 id="_1-哈希表-双向链表" tabindex="-1"><a class="header-anchor" href="#_1-哈希表-双向链表" aria-hidden="true">#</a> 1. 哈希表 + 双向链表</h2><p>若使用哈希表, 无法表示最近最少使用的值.</p><p>若使用哈希表+单向链表, 那么删除节点时需要去寻找前一节点, 时间为O(n), 而双向链表寻找前一节点的时间为O(1).</p><p>哈希表的值, 存储在双向链表中. 每当进行<code>put</code>或<code>get</code>操作时, 将操作节点移动到表尾. 那么, 表头的节点一定时最近最少使用的节点.</p><p><code>put</code>:</p><ul><li>若缓存未满, 则插入链表尾部.</li><li>缓存已满, 删除头节点, 插入链表尾部.</li></ul><p><code>get</code>:</p><ol><li>获取节点值</li><li>删除节点, 插入到表尾</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> LRUCache <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    head <span class="token operator">*</span>DoublyListNode
    tail <span class="token operator">*</span>DoublyListNode
    cache <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token operator">*</span>DoublyListNode
    Capacity <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> DoublyListNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Key <span class="token builtin">int</span>
    Val <span class="token builtin">int</span>
    Prev <span class="token operator">*</span>DoublyListNode
    Next <span class="token operator">*</span>DoublyListNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span>capacity <span class="token builtin">int</span><span class="token punctuation">)</span> LRUCache <span class="token punctuation">{</span>
    head <span class="token operator">:=</span> <span class="token operator">&amp;</span>DoublyListNode<span class="token punctuation">{</span>Key<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> Val<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
    tail <span class="token operator">:=</span> <span class="token operator">&amp;</span>DoublyListNode<span class="token punctuation">{</span>Key<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> Val<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
    head<span class="token punctuation">.</span>Next <span class="token operator">=</span> tail
    tail<span class="token punctuation">.</span>Prev <span class="token operator">=</span> head

    <span class="token keyword">return</span> LRUCache<span class="token punctuation">{</span>
        head<span class="token punctuation">:</span> head<span class="token punctuation">,</span>
        tail<span class="token punctuation">:</span> tail<span class="token punctuation">,</span>
        cache<span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token operator">*</span>DoublyListNode<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        Capacity<span class="token punctuation">:</span> capacity<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">,</span> ok <span class="token operator">:=</span> c<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>

    c<span class="token punctuation">.</span><span class="token function">moveToTail</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>Val 
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">Put</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">,</span> value <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> node<span class="token punctuation">,</span> ok <span class="token operator">:=</span> c<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
        c<span class="token punctuation">.</span><span class="token function">moveToTail</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>cache<span class="token punctuation">)</span> <span class="token operator">==</span> c<span class="token punctuation">.</span>Capacity <span class="token punctuation">{</span>
            toBeDel <span class="token operator">:=</span> c<span class="token punctuation">.</span>head<span class="token punctuation">.</span>Next
            c<span class="token punctuation">.</span><span class="token function">deleteNode</span><span class="token punctuation">(</span>toBeDel<span class="token punctuation">)</span>
            <span class="token function">delete</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>cache<span class="token punctuation">,</span> toBeDel<span class="token punctuation">.</span>Key<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        node <span class="token operator">:=</span> <span class="token operator">&amp;</span>DoublyListNode<span class="token punctuation">{</span>Key<span class="token punctuation">:</span> key<span class="token punctuation">,</span> Val<span class="token punctuation">:</span> value<span class="token punctuation">}</span>
        c<span class="token punctuation">.</span><span class="token function">insertToTail</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
        c<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> node
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">moveToTail</span><span class="token punctuation">(</span>node <span class="token operator">*</span>DoublyListNode<span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token function">deleteNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    node<span class="token punctuation">.</span>Val <span class="token operator">=</span> val
    c<span class="token punctuation">.</span><span class="token function">insertToTail</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>node <span class="token operator">*</span>DoublyListNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>Prev<span class="token punctuation">.</span>Next <span class="token operator">=</span> node<span class="token punctuation">.</span>Next
    node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Prev <span class="token operator">=</span> node<span class="token punctuation">.</span>Prev
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">insertToTail</span><span class="token punctuation">(</span>node <span class="token operator">*</span>DoublyListNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>Prev<span class="token punctuation">.</span>Next <span class="token operator">=</span> node
    node<span class="token punctuation">.</span>Prev <span class="token operator">=</span> c<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>Prev
    node<span class="token punctuation">.</span>Next <span class="token operator">=</span> c<span class="token punctuation">.</span>tail
    c<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>Prev <span class="token operator">=</span> node
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>head</code>, <code>tail</code>: 为哨兵节点, 方便插入和删除</li></ul>`,10);function v(b,m){const a=l("ExternalLinkIcon");return o(),c("div",null,[n("p",null,[n("a",u,[s("146. LRU 缓存"),e(a)])]),n("blockquote",null,[n("p",null,[s("请你设计并实现一个满足 "),n("a",d,[s("LRU (最近最少使用) 缓存"),e(a)]),s(" 约束的数据结构。")]),r]),k])}const y=p(i,[["render",v],["__file","146.LRU_cache.html.vue"]]);export{y as default};
