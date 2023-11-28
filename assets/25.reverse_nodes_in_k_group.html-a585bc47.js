import{_ as t,Z as o,$ as i,a0 as n,a1 as a,a2 as e,a3 as p,H as l}from"./framework-dee406ed.js";const c={},r={href:"https://leetcode.cn/problems/reverse-nodes-in-k-group/",target:"_blank",rel:"noopener noreferrer"},d=p(`<blockquote><p>给你链表的头节点 <code>head</code> ，每 <code>k</code> 个节点一组进行翻转，请你返回修改后的链表。</p><p><code>k</code> 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 <code>k</code> 的整数倍，那么请将最后剩余的节点保持原有顺序。</p><p>你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>链表中的节点数目为 <code>n</code></li><li><code>1 &lt;= k &lt;= n &lt;= 5000</code></li><li><code>0 &lt;= Node.val &lt;= 1000</code></li></ul></blockquote><h2 id="_1-流程模拟" tabindex="-1"><a class="header-anchor" href="#_1-流程模拟" aria-hidden="true">#</a> 1. 流程模拟</h2><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/6.PNG" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>需要使用四个变量记住四个关键节点. 反转链表函数将两节点之间的链表反转.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reverseKGroup</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token comment">// 哨兵节点</span>
    dummy <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span><span class="token punctuation">}</span>
    dummy<span class="token punctuation">.</span>Next <span class="token operator">=</span> head
    
    subHead <span class="token operator">:=</span> head <span class="token comment">// 子链表头节点</span>
    subTail <span class="token operator">:=</span> dummy <span class="token comment">// 子链表尾节点</span>
    subPrev <span class="token operator">:=</span> dummy <span class="token comment">// 子链表的前一节点</span>

    <span class="token keyword">for</span> subHead <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token comment">// 移动尾节点</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            subTail <span class="token operator">=</span> subTail<span class="token punctuation">.</span>Next
            <span class="token comment">// 剩余不满k个 </span>
            <span class="token keyword">if</span> subTail <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>Next  
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        subNext <span class="token operator">:=</span> subTail<span class="token punctuation">.</span>Next <span class="token comment">// 子链表的下一节点</span>
        <span class="token comment">// 反转子链表</span>
        subHead<span class="token punctuation">,</span> subTail <span class="token operator">=</span> <span class="token function">reverse</span><span class="token punctuation">(</span>subHead<span class="token punctuation">,</span> subTail<span class="token punctuation">)</span>

        <span class="token comment">// 连接</span>
        subPrev<span class="token punctuation">.</span>Next <span class="token operator">=</span> subHead
        subTail<span class="token punctuation">.</span>Next <span class="token operator">=</span> subNext

        <span class="token comment">// 更新操作节点</span>
        subPrev <span class="token operator">=</span> subTail
        subHead <span class="token operator">=</span> subTail<span class="token punctuation">.</span>Next        
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">reverse</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> tail <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>ListNode<span class="token punctuation">,</span> <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    prev <span class="token operator">:=</span> tail<span class="token punctuation">.</span>Next 
    cur <span class="token operator">:=</span> head 
    <span class="token keyword">for</span> prev <span class="token operator">!=</span> tail <span class="token punctuation">{</span>
        next <span class="token operator">:=</span> cur<span class="token punctuation">.</span>Next
        cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> prev

        prev <span class="token operator">=</span> cur
        cur <span class="token operator">=</span> next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> tail<span class="token punctuation">,</span> head
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-变形-不满k个也反转" tabindex="-1"><a class="header-anchor" href="#_2-变形-不满k个也反转" aria-hidden="true">#</a> 2. 变形: 不满k个也反转</h2><p>只需改变尾节点的移动逻辑即可, <code>subTail</code>到达整个链表尾节点则停止移动.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// ...</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token comment">// 不满k个则到尾节点为止</span>
            <span class="token keyword">if</span> subTail<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
            subTail <span class="token operator">=</span> subTail<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,9),u={href:"https://leetcode.cn/problems/reverse-nodes-in-k-group/solutions/248591/k-ge-yi-zu-fan-zhuan-lian-biao-by-leetcode-solutio/",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=l("ExternalLinkIcon");return o(),i("div",null,[n("p",null,[n("a",r,[a("25. K 个一组翻转链表"),e(s)])]),d,n("ol",null,[n("li",null,[n("a",u,[a("https://leetcode.cn/problems/reverse-nodes-in-k-group/solutions/248591/k-ge-yi-zu-fan-zhuan-lian-biao-by-leetcode-solutio/"),e(s)])])])])}const g=t(c,[["render",k],["__file","25.reverse_nodes_in_k_group.html.vue"]]);export{g as default};
