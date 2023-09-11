import{_ as a,Z as e,$ as p,a0 as n,a1 as t,a2 as o,a3 as l,H as i}from"./framework-09afcf0b.js";const c={},u=l(`<p>哨兵节点用于简化处理链表的边界条件而引入的附加链表节点.</p><p>哨兵节点位于链表的头部, 其值没有意义. 有意义的信息从第二个节点开始.</p><h2 id="_4-2-1-哨兵节点简化插入操作" tabindex="-1"><a class="header-anchor" href="#_4-2-1-哨兵节点简化插入操作" aria-hidden="true">#</a> 4.2.1 哨兵节点简化插入操作</h2><p>向链表尾部插入节点:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Append</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    newNode <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> val<span class="token punctuation">}</span>
    <span class="token keyword">if</span> head <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> newNode
    <span class="token punctuation">}</span>
    
    node <span class="token operator">:=</span> head
    <span class="token keyword">for</span> node<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    
    node<span class="token punctuation">.</span>Next <span class="token operator">=</span> newNode
    <span class="token keyword">return</span> head
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码需要额外判断输入为空链表时, 则返回链表的头节点就是新节点.</p><p>若引入哨兵节点则可以简化代码逻辑:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Append</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    dummy <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span>
    dummy<span class="token punctuation">.</span>Next <span class="token operator">=</span> head
    
    node <span class="token operator">:=</span> dummy
    <span class="token keyword">for</span> node<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    
    node<span class="token punctuation">.</span>Next <span class="token operator">=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> val<span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-2-哨兵节点简化删除操作" tabindex="-1"><a class="header-anchor" href="#_4-2-2-哨兵节点简化删除操作" aria-hidden="true">#</a> 4.2.2 哨兵节点简化删除操作</h2><p>删除第一个出现的节点:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Delete</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head
    <span class="token punctuation">}</span>
    
    <span class="token keyword">if</span> head<span class="token punctuation">.</span>Val <span class="token operator">==</span> val <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    
    node <span class="token operator">:=</span> head
    <span class="token keyword">for</span> node<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Val <span class="token operator">==</span> val <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>Next <span class="token operator">=</span> node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> head
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码需要额外判断两个特殊情况:</p><ul><li>链表为空</li><li>删除头节点</li></ul><p>可以使用哨兵节点来简化逻辑:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Delete</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    dummy <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span>
    dummy<span class="token punctuation">.</span>Next <span class="token operator">=</span> head
    
    node <span class="token operator">:=</span> dummy
    <span class="token keyword">for</span> node<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Val <span class="token operator">==</span> val <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>Next <span class="token operator">=</span> node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,16),d={href:"https://book.douban.com/subject/35543447/",target:"_blank",rel:"noopener noreferrer"};function r(k,v){const s=i("ExternalLinkIcon");return e(),p("div",null,[u,n("ol",null,[n("li",null,[n("a",d,[t("剑指Offer（专项突破版）"),o(s)])])])])}const b=a(c,[["render",r],["__file","04.2.html.vue"]]);export{b as default};
