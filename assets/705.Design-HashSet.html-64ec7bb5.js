import{_ as p,Z as e,$ as o,a0 as n,a1 as a,a2 as t,a3 as c,H as l}from"./framework-09afcf0b.js";const i={},u=c(`<h2 id="_1-题目描述" tabindex="-1"><a class="header-anchor" href="#_1-题目描述" aria-hidden="true">#</a> 1. 题目描述</h2><p>实现 <code>MyHashSet</code>:</p><ul><li><code>void add(key)</code> : 向哈希集合中插入值 <code>key</code></li><li><code>bool contains(key)</code>: 返回哈希集合中是否存在这个值 <code>key</code></li><li><code>void remove(key)</code>: 将给定值 <code>key</code> 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：
[&quot;MyHashSet&quot;, &quot;add&quot;, &quot;add&quot;, &quot;contains&quot;, &quot;contains&quot;, &quot;add&quot;, &quot;contains&quot;, &quot;remove&quot;, &quot;contains&quot;]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
输出：
[null, null, null, true, false, null, true, null, false]

解释：
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // 返回 True
myHashSet.contains(3); // 返回 False ，（未找到）
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // 返回 True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // 返回 False ，（已移除）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-题解" tabindex="-1"><a class="header-anchor" href="#_2-题解" aria-hidden="true">#</a> 2. 题解</h2><h3 id="_2-1-概念" tabindex="-1"><a class="header-anchor" href="#_2-1-概念" aria-hidden="true">#</a> 2.1 概念</h3><p>实现哈希集合需要：</p><ul><li>哈希函数：将集合中任意可能的元素映射到一个固定范围的整数值，将该元素存储到整数值对应的地址上</li><li>冲突处理：不同的元素可能映射到相同的整数值，因此需要在整数值出现<strong>冲突</strong>时，进行冲突处理，一般有以下解决方案： <ul><li>链地址法：为每个哈希值维护一个链表，并将具有相同哈希值的元素放入链表中</li><li>开放地址法：当发现哈希值 h 处产生冲突时，根据某种策略寻找下一不冲突的位置</li><li>再哈希法：当出现哈希冲突后，使用另一个哈希函数产生一个新的地址</li></ul></li><li>扩容：当哈希表元素过多时，冲突概率将会增大，查询效率将会降低。需要开辟新的空间以缓解哈希冲突</li></ul><h3 id="_2-2-链地址法" tabindex="-1"><a class="header-anchor" href="#_2-2-链地址法" aria-hidden="true">#</a> 2.2 链地址法</h3><p>设哈希表的大小为 <em>base</em>, 可以采用<strong>除留余数法</strong>设计一个哈希函数：<em>hash(x) = x mod base</em>。然后开辟一个大小为 <em>base</em> 的数组，数组的每一个位置为链表，当发生哈希冲突之后，插入对应的位置中。</p><blockquote><p><strong>数据结构教程</strong>：一般情况下，base 可以选为<strong>质数</strong>或者不包含小于 20 的质因子的合数</p></blockquote><p>base 应当选取一个质数，可以令 base = 769。</p><p>使用 <strong>Go</strong>，采用内建的链表</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> base <span class="token operator">=</span> <span class="token number">769</span>

<span class="token keyword">type</span> MyHashSet <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	data <span class="token punctuation">[</span><span class="token punctuation">]</span>list<span class="token punctuation">.</span>List
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>MyHashSet<span class="token punctuation">)</span> <span class="token function">hash</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> key <span class="token operator">%</span> base
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> MyHashSet <span class="token punctuation">{</span>
    <span class="token keyword">return</span> MyHashSet<span class="token punctuation">{</span>data<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>list<span class="token punctuation">.</span>List<span class="token punctuation">,</span> base<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>MyHashSet<span class="token punctuation">)</span> <span class="token function">Contains</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    h <span class="token operator">:=</span> s<span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">for</span> e <span class="token operator">:=</span> s<span class="token punctuation">.</span>data<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> e<span class="token punctuation">.</span>Value<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>MyHashSet<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>s<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        h <span class="token operator">:=</span> s<span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        s<span class="token punctuation">.</span>data<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>MyHashSet<span class="token punctuation">)</span> <span class="token function">Remove</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    h <span class="token punctuation">;</span><span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">for</span> e <span class="token operator">:=</span> s<span class="token punctuation">.</span>data<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> e<span class="token punctuation">.</span>Value<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token punctuation">{</span>
            s<span class="token punctuation">.</span>data<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <strong>C</strong> ，采用自定义的链表</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>#include <span class="token operator">&lt;</span>stdlib<span class="token punctuation">.</span>h<span class="token operator">&gt;</span>
<span class="token comment">// 引入 stdbool 以使用 bool 类型</span>
#include <span class="token operator">&lt;</span>stdbool<span class="token punctuation">.</span>h<span class="token operator">&gt;</span>

<span class="token comment">// --- Linked List ---</span>
typedef List Node<span class="token punctuation">;</span>
typedef <span class="token keyword">struct</span> List <span class="token punctuation">{</span>
    <span class="token builtin">int</span> val<span class="token punctuation">;</span>
    Node next<span class="token punctuation">;</span>
<span class="token punctuation">}</span> List<span class="token punctuation">;</span>

void <span class="token function">listPushFront</span><span class="token punctuation">(</span>Node<span class="token operator">*</span> head<span class="token punctuation">,</span> <span class="token builtin">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Node tmp <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token function">sizeof</span><span class="token punctuation">(</span><span class="token operator">*</span>tmp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tmp<span class="token operator">-</span><span class="token operator">&gt;</span>val <span class="token operator">=</span> x<span class="token punctuation">;</span>
    tmp<span class="token operator">-</span><span class="token operator">&gt;</span>next <span class="token operator">=</span> head<span class="token operator">-</span><span class="token operator">&gt;</span>next<span class="token punctuation">;</span>
    head<span class="token operator">-</span><span class="token operator">&gt;</span>next <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

void <span class="token function">listDelete</span><span class="token punctuation">(</span>Node<span class="token operator">*</span> head<span class="token punctuation">,</span> <span class="token builtin">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>Node t <span class="token operator">=</span> head<span class="token operator">-</span><span class="token operator">&gt;</span>next<span class="token punctuation">;</span> t<span class="token punctuation">;</span> t <span class="token operator">=</span> t<span class="token operator">-</span><span class="token operator">&gt;</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token operator">-</span><span class="token operator">&gt;</span>val <span class="token operator">==</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            Node tmp <span class="token operator">=</span> t<span class="token operator">-</span><span class="token operator">&gt;</span>next<span class="token punctuation">;</span>
            t<span class="token operator">-</span><span class="token operator">&gt;</span>next <span class="token operator">=</span> tmp<span class="token operator">-</span><span class="token operator">&gt;</span>next<span class="token punctuation">;</span>
            <span class="token function">free</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 因为 HashSet 中不能有相同的元素</span>
            <span class="token comment">// 所以这里直接退出</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">bool</span> <span class="token function">listContains</span><span class="token punctuation">(</span>Node<span class="token operator">*</span> head<span class="token punctuation">,</span> <span class="token builtin">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>Node t <span class="token operator">=</span> head<span class="token operator">-</span><span class="token operator">&gt;</span>next<span class="token punctuation">;</span> t<span class="token punctuation">;</span> t <span class="token operator">=</span> t<span class="token operator">-</span><span class="token operator">&gt;</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token operator">-</span><span class="token operator">&gt;</span>val <span class="token operator">==</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

void <span class="token function">listFree</span><span class="token punctuation">(</span>Node<span class="token operator">*</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> head<span class="token operator">-</span><span class="token operator">&gt;</span>next<span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Node tmp <span class="token operator">=</span> head<span class="token operator">-</span><span class="token operator">&gt;</span>next<span class="token punctuation">;</span>
        head<span class="token operator">-</span><span class="token operator">&gt;</span>next <span class="token operator">=</span> tmp<span class="token operator">-</span><span class="token operator">&gt;</span>next<span class="token punctuation">;</span>
        <span class="token function">free</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// --- HashSet ---</span>
<span class="token keyword">const</span> <span class="token builtin">int</span> base <span class="token operator">=</span> <span class="token number">769</span><span class="token punctuation">;</span>

typedef <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Node<span class="token operator">*</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span> MyHashSet<span class="token punctuation">;</span>

<span class="token builtin">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token builtin">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> key <span class="token operator">%</span> base<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

MyHashSet<span class="token operator">*</span> <span class="token function">myHashSetCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MyHashSet<span class="token operator">*</span> set <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token function">sizeof</span><span class="token punctuation">(</span><span class="token operator">*</span>set<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Array of Node</span>
    set<span class="token operator">-</span><span class="token operator">&gt;</span>data <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token function">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span> <span class="token operator">*</span> base<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> base<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        set<span class="token operator">-</span><span class="token operator">&gt;</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        set<span class="token operator">-</span><span class="token operator">&gt;</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next <span class="token operator">=</span> NULL<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> set<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token builtin">bool</span> <span class="token function">myHashSetContains</span><span class="token punctuation">(</span>MyHashSet<span class="token operator">*</span> s<span class="token punctuation">,</span> <span class="token builtin">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">int</span> h <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">listContains</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>s<span class="token operator">-</span><span class="token operator">&gt;</span>data<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

void <span class="token function">myHashAdd</span><span class="token punctuation">(</span>MyHashSet<span class="token operator">*</span> s<span class="token punctuation">,</span> <span class="token builtin">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">myHashSetContains</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">int</span> h <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">listPushFront</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>s<span class="token operator">-</span><span class="token operator">&gt;</span>data<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

void <span class="token function">myHashSetRemove</span><span class="token punctuation">(</span>MyHashSet<span class="token operator">*</span> s<span class="token punctuation">,</span> <span class="token builtin">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">int</span> h <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">listDelete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>s<span class="token operator">-</span><span class="token operator">&gt;</span>data<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

void <span class="token function">myHashSetFree</span><span class="token punctuation">(</span>MyHashSet<span class="token operator">*</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> base<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">listFree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>s<span class="token operator">-</span><span class="token operator">&gt;</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">free</span><span class="token punctuation">(</span>s<span class="token operator">-</span><span class="token operator">&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-复杂度分析" tabindex="-1"><a class="header-anchor" href="#_2-3-复杂度分析" aria-hidden="true">#</a> 2.3 复杂度分析</h3><ul><li><strong>时间复杂度</strong>： <em>O(n/b)</em>，n 为哈希表中元素数量，b 为链表数量。假设哈希值为均匀分布的，那么每个表的大概长度为 n/b。</li><li><strong>复杂度</strong>：<em>O(n+b)</em></li></ul><h2 id="_3-golang-list" tabindex="-1"><a class="header-anchor" href="#_3-golang-list" aria-hidden="true">#</a> 3. Golang list</h2><p>Golang 中，列表使用 <code>container/list</code> 包实现，内部采用了双链表数据结构，其能够高效的进行任意位置的元素插入和删除操作。</p><h3 id="_3-1-用法" tabindex="-1"><a class="header-anchor" href="#_3-1-用法" aria-hidden="true">#</a> 3.1 用法</h3><p><strong>初始化</strong></p><p>初始化可以使用 <code>list.New()</code> 或 直接声明变量：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>list1 <span class="token operator">:=</span> list<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// OR </span>
<span class="token keyword">var</span> list2 list<span class="token punctuation">.</span>List
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>New()</code> 函数会执行 <code>list.List</code> 的 <code>Init()</code> 函数：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Init initializes or clears list l.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>List <span class="token punctuation">{</span>
	l<span class="token punctuation">.</span>root<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token operator">&amp;</span>l<span class="token punctuation">.</span>root
	l<span class="token punctuation">.</span>root<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token operator">&amp;</span>l<span class="token punctuation">.</span>root
	l<span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">return</span> l
<span class="token punctuation">}</span>

<span class="token comment">// New returns an initialized list.</span>
<span class="token keyword">func</span> <span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>List <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">new</span><span class="token punctuation">(</span>List<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过我们在使用未初始化的 list，调用相关方法如 <code>PushFront</code> 时是不会出现错误的，是因为在这些方法中会调用 <code>lazyInit()</code> 方法：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// PushBack inserts a new element e with value v at the back of list l and returns e.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">PushBack</span><span class="token punctuation">(</span>v <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">*</span>Element <span class="token punctuation">{</span>
	l<span class="token punctuation">.</span><span class="token function">lazyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> l<span class="token punctuation">.</span><span class="token function">insertValue</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> l<span class="token punctuation">.</span>root<span class="token punctuation">.</span>prev<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// lazyInit lazily initializes a zero List value.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">lazyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> l<span class="token punctuation">.</span>root<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		l<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>插入元素</strong></p><p>双链表支持队列前和队列后插入，常见的插入方法有：</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>func (l *List) PushFront(v interface{}) *Element</code></td><td>将元素插入表头</td></tr><tr><td><code>func (l *List) PushBack(v interface{}) *Element</code></td><td>将元素插入表尾</td></tr><tr><td><code>InsertAfter(v interface {}, mark * Element) * Element</code></td><td>在 mark 之后插入</td></tr><tr><td><code>InsertBefore(v interface {}, mark * Element) *Element</code></td><td>在 mark 之前插入</td></tr><tr><td><code>PushBackList(other *List)</code></td><td>将 other 添加到表尾</td></tr><tr><td><code>PushFrontList(other *List)</code></td><td>将 other 添加到表头</td></tr></tbody></table><p><strong>删除元素</strong></p><p>删除元素通过方法 <code>Remove()</code> 删除：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">Remove</span><span class="token punctuation">(</span>e <span class="token operator">*</span>Element<span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意删除元素需要使用 <code>*Element</code> 类型</p><p><strong>遍历列表</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> e <span class="token operator">:=</span> l<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do sth.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,38),r={href:"https://leetcode-cn.com/problems/design-hashset/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://leetcode-cn.com/problems/design-hashset/solution/she-ji-ha-xi-ji-he-by-leetcode-solution-xp4t/",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const s=l("ExternalLinkIcon");return e(),o("div",null,[u,n("ol",null,[n("li",null,[n("a",r,[a("705.Design-HashSet"),t(s)])]),n("li",null,[n("a",k,[a("Solution"),t(s)])])])])}const h=p(i,[["render",d],["__file","705.Design-HashSet.html.vue"]]);export{h as default};