import{_ as s,Z as a,$ as t,a0 as n,a1 as o,a2 as i,a3 as l,H as c}from"./framework-dee406ed.js";const d={},r={href:"https://leetcode.cn/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"},p=l(`<blockquote><p>给你单链表的头节点 <code>head</code> ，请你反转链表，并返回反转后的链表。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2]
输出：[2,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = []
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>链表中节点的数目范围是 <code>[0, 5000]</code></li><li><code>-5000 &lt;= Node.val &lt;= 5000</code></li></ul></blockquote><h2 id="_1-迭代" tabindex="-1"><a class="header-anchor" href="#_1-迭代" aria-hidden="true">#</a> 1. 迭代</h2><p>需要三个变量: <code>prev</code>前一节点, <code>next</code>下一节点, <code>cur</code>当前节点</p><ol><li>对于当前节点<code>cur</code>, 暂存其下一个节点<code>next = cur.Next</code></li><li>反转 <code>cur.Next = prev</code></li><li>更新当前和前一操作节点: <code>prev = cur</code>, <code>cur = next</code></li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token keyword">var</span> prev <span class="token operator">*</span>ListNode 
    cur <span class="token operator">:=</span> head
    <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        next <span class="token operator">:=</span> cur<span class="token punctuation">.</span>Next
        cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> prev

        prev <span class="token operator">=</span> cur
        cur <span class="token operator">=</span> next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> prev
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-递归" tabindex="-1"><a class="header-anchor" href="#_2-递归" aria-hidden="true">#</a> 2. 递归</h2><p>对于节点<code>i</code>, 其前面的节点都已经反转, 只需反转当前节点即可. 如当前节点为<strong>空</strong>或者是<strong>尾</strong>节点则结束反转.</p><p>反转当前节点时:</p><ul><li>下一节点指向当前节点</li><li>当前节点的下一节点置空(当前节点为头节点时, 反转后的节点一定指向<code>nil</code>)</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head
    <span class="token punctuation">}</span>

    newHead <span class="token operator">:=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>Next<span class="token punctuation">)</span>

    head<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next <span class="token operator">=</span> head
    head<span class="token punctuation">.</span>Next <span class="token operator">=</span> <span class="token boolean">nil</span>
    
    <span class="token keyword">return</span> newHead
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function u(v,k){const e=c("ExternalLinkIcon");return a(),t("div",null,[n("p",null,[n("a",r,[o("206. 反转链表"),i(e)])]),p])}const g=s(d,[["render",u],["__file","206.reverse_linked_list.html.vue"]]);export{g as default};
