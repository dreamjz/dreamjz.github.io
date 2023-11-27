import{_ as o,Z as t,$ as l,a0 as n,a1 as a,a2 as e,a4 as i,H as p}from"./framework-d03928c9.js";const c={},d=n("p",null,"d环形链表:",-1),r={href:"https://leetcode.cn/problems/linked-list-cycle/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://leetcode.cn/problems/linked-list-cycle-ii/",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="_1-判断是否有环-快慢指针" tabindex="-1"><a class="header-anchor" href="#_1-判断是否有环-快慢指针" aria-hidden="true">#</a> 1. 判断是否有环 (快慢指针)</h2><blockquote><p>给你一个链表的头节点 <code>head</code> ，判断链表中是否有环。</p><p>如果链表中有某个节点，可以通过连续跟踪 <code>next</code> 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 <code>pos</code> 来表示链表尾连接到链表中的位置（索引从 0 开始）。<strong>注意：<code>pos</code> 不作为参数进行传递</strong> 。仅仅是为了标识链表的实际情况。</p><p><em>如果链表中存在环</em> ，则返回 <code>true</code> 。 否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>链表中节点的数目范围是 <code>[0, 10^4]</code></li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li><li><code>pos</code> 为 <code>-1</code> 或者链表中的一个 <strong>有效索引</strong> 。</li></ul></blockquote><p>定义快慢指针, 慢指针每次走一步, 快指针每次走两步, 如果两者相遇则一定有环.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">hasCycle</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token comment">// 边界</span>
    <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    slow<span class="token punctuation">,</span> fast <span class="token operator">:=</span> head<span class="token punctuation">,</span> head

    <span class="token keyword">for</span> fast <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>Next
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next
        <span class="token keyword">if</span> fast <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> slow <span class="token operator">==</span> fast <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-找出环的入口" tabindex="-1"><a class="header-anchor" href="#_2-找出环的入口" aria-hidden="true">#</a> 2. 找出环的入口</h2><blockquote><p>给定一个链表的头节点 <code>head</code> ，返回链表开始入环的第一个节点。 <em>如果链表无环，则返回 <code>null</code>。</em></p><p>如果链表中有某个节点，可以通过连续跟踪 <code>next</code> 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 <code>pos</code> 来表示链表尾连接到链表中的位置（<strong>索引从 0 开始</strong>）。如果 <code>pos</code> 是 <code>-1</code>，则在该链表中没有环。<strong>注意：<code>pos</code> 不作为参数进行传递</strong>，仅仅是为了标识链表的实际情况。</p><p><strong>不允许修改</strong> 链表。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>链表中节点的数目范围在范围 <code>[0, 10^4]</code> 内</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li><li><code>pos</code> 的值为 <code>-1</code> 或者链表中的一个有效索引</li></ul></blockquote><h3 id="_2-1-找出环中节点数" tabindex="-1"><a class="header-anchor" href="#_2-1-找出环中节点数" aria-hidden="true">#</a> 2.1 找出环中节点数</h3><p>快慢指针相遇的节点一定是环中节点, 那么环中节点绕一圈回到自身, 节点的数量就是环中节点数,</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>

    inLoop <span class="token operator">:=</span> <span class="token function">nodeInLoop</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>
    <span class="token keyword">if</span> inLoop <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
    
    cnt <span class="token operator">:=</span> <span class="token function">cycleNodeCount</span><span class="token punctuation">(</span>inLoop<span class="token punctuation">)</span>

    <span class="token comment">// 前后指针</span>
    front <span class="token operator">:=</span> head
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cnt<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        front <span class="token operator">=</span> front<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>

    back <span class="token operator">:=</span> head
    <span class="token keyword">for</span> back <span class="token operator">!=</span> front <span class="token punctuation">{</span>
        back <span class="token operator">=</span> back<span class="token punctuation">.</span>Next
        front <span class="token operator">=</span> front<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> back
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">cycleNodeCount</span><span class="token punctuation">(</span>node <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    count <span class="token operator">:=</span> <span class="token number">1</span>
    cur <span class="token operator">:=</span> node<span class="token punctuation">.</span>Next 
    <span class="token keyword">for</span> cur <span class="token operator">!=</span> node <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
        count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">nodeInLoop</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    slow<span class="token punctuation">,</span> fast <span class="token operator">:=</span> head<span class="token punctuation">,</span> head
    
    <span class="token keyword">for</span> fast <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>Next
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next
        <span class="token keyword">if</span> fast <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> slow <span class="token operator">==</span> fast <span class="token punctuation">{</span>
            <span class="token keyword">return</span> slow
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-无需找出环中节点数" tabindex="-1"><a class="header-anchor" href="#_2-2-无需找出环中节点数" aria-hidden="true">#</a> 2.2 无需找出环中节点数</h3><p>快慢节点相遇时, 快指针比慢指针多走<code>k</code>步, <code>k</code>一定是环中节点数的整数倍, 那么只需新定义一个指针从头开始, 和快指针一起同步移动, 相遇的位置一定是环的入口.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>

    inLoop <span class="token operator">:=</span> <span class="token function">findNodeInLoop</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>
    <span class="token keyword">if</span> inLoop <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>

    node <span class="token operator">:=</span> head 

    <span class="token keyword">for</span> node <span class="token operator">!=</span> inLoop <span class="token punctuation">{</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>Next
        inLoop <span class="token operator">=</span> inLoop<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> node
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">findNodeInLoop</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    slow<span class="token punctuation">,</span> fast <span class="token operator">:=</span> head<span class="token punctuation">,</span> head 
    
    <span class="token keyword">for</span> fast <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>Next
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next
        <span class="token keyword">if</span> fast <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next 
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> slow <span class="token operator">==</span> fast <span class="token punctuation">{</span>
            <span class="token keyword">return</span> slow
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,13),k={href:"https://leetcode.cn/problems/linked-list-cycle/solutions",target:"_blank",rel:"noopener noreferrer"};function b(m,g){const s=p("ExternalLinkIcon");return t(),l("div",null,[d,n("ul",null,[n("li",null,[n("a",r,[a("141. 环形链表"),e(s)])]),n("li",null,[n("a",u,[a("142. 环形链表 II"),e(s)])])]),v,n("ol",null,[n("li",null,[n("a",k,[a("https://leetcode.cn/problems/linked-list-cycle/solutions"),e(s)])])])])}const h=o(c,[["render",b],["__file","141.142.linked_list_cycle.html.vue"]]);export{h as default};
