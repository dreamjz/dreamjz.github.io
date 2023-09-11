import{_ as t,Z as i,$ as p,a0 as n,a1 as s,a2 as l,a3 as a,H as o}from"./framework-09afcf0b.js";const c={},r=n("p",null,[n("strong",null,"双向链表"),s("中每个节点包含指向下一节点和上一节点的指针, 可以从两个方向遍历.")],-1),d=n("p",null,[n("strong",null,"循环链表"),s("的尾节点和头节点相连形成环. 因为可以从任意节点出发到达任意节点, 所以循环链表的任意节点都可以是头节点.")],-1),u=n("h2",{id:"_4-5-1-问题28-展平多级双向链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-5-1-问题28-展平多级双向链表","aria-hidden":"true"},"#"),s(" 4.5.1 问题28: 展平多级双向链表")],-1),m={href:"https://leetcode.cn/problems/Qv1Da2/",target:"_blank",rel:"noopener noreferrer"},v=a(`<blockquote><p>多级双向链表中，除了指向下一个节点和前一个节点指针之外，它还有一个子链表指针，可能指向单独的双向链表。这些子列表也可能会有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。</p><p>给定位于列表第一级的头节点，请扁平化列表，即将这样的多级双向链表展平成普通的双向链表，使所有结点出现在单级双链表中。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
输出：[1,2,3,7,8,11,12,9,10,4,5,6]
解释：

输入的多级列表如下图所示：



扁平化后的链表如下图：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,null,3]
输出：[1,3,2]
解释：

输入的多级列表如下图所示：

  1---2---NULL
  |
  3---NULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = []
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如何表示测试用例中的多级链表？</strong></p><p>以 <strong>示例 1</strong> 为例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>序列化其中的每一级之后：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1,2,3,4,5,6,null]
[7,8,9,10,null]
[11,12,null]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了将每一级都序列化到一起，我们需要每一级中添加值为 null 的元素，以表示没有节点连接到上一级的上级节点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1,2,3,4,5,6,null]
[null,null,7,8,9,10,null]
[null,11,12,null]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>合并所有序列化结果，并去除末尾的 null 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>节点数目不超过 <code>1000</code></li><li><code>1 &lt;= Node.val &lt;= 10^5</code></li></ul></blockquote><h3 id="_4-5-1-1-分析" tabindex="-1"><a class="header-anchor" href="#_4-5-1-1-分析" aria-hidden="true">#</a> 4.5.1.1 分析</h3><p>首先理清展开的逻辑:</p><ol><li>将子链表展开, 形成不含子链表的链表</li><li>将已展开的子链表插入回原链表中</li></ol><p>由于子链表也可包含子链表, 所以操作是递归的.</p><h3 id="_4-5-1-2-题解" tabindex="-1"><a class="header-anchor" href="#_4-5-1-2-题解" aria-hidden="true">#</a> 4.5.1.2 题解</h3>`,6),k=n("p",null,[s("时间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])]),s(" , 遍历每个节点")],-1),h=n("p",null,[s("空间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"k"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(k)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),n("span",{class:"mclose"},")")])])]),s(", k 为子链表的层数")],-1),b=a(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Node <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Val   <span class="token builtin">int</span>
    Next  <span class="token operator">*</span>Node
    Prev  <span class="token operator">*</span>Node
    Child <span class="token operator">*</span>Node
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">flatten</span><span class="token punctuation">(</span>root <span class="token operator">*</span>Node<span class="token punctuation">)</span> <span class="token operator">*</span>Node <span class="token punctuation">{</span>
    <span class="token function">flattenGetTail</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">flattenGetTail</span><span class="token punctuation">(</span>head <span class="token operator">*</span>Node<span class="token punctuation">)</span> <span class="token operator">*</span>Node <span class="token punctuation">{</span>
    node <span class="token operator">:=</span> head
    <span class="token keyword">var</span> tail <span class="token operator">*</span>Node <span class="token comment">// 展开后的尾节点</span>

    <span class="token comment">// 遍历链表</span>
    <span class="token keyword">for</span> node <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
       next <span class="token operator">:=</span> node<span class="token punctuation">.</span>Next
       <span class="token comment">// 展开子链表</span>
       <span class="token keyword">if</span> node<span class="token punctuation">.</span>Child <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
          child <span class="token operator">:=</span> node<span class="token punctuation">.</span>Child                <span class="token comment">// 子链表头节点</span>
          childTail <span class="token operator">:=</span> <span class="token function">flattenGetTail</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span> <span class="token comment">// 递归展开子链表, 返回展开后的尾节点</span>

          <span class="token comment">// 插入原链表</span>
          node<span class="token punctuation">.</span>Child <span class="token operator">=</span> <span class="token boolean">nil</span> <span class="token comment">// 断开子链表</span>
          node<span class="token punctuation">.</span>Next <span class="token operator">=</span> child
          child<span class="token punctuation">.</span>Prev <span class="token operator">=</span> node
          childTail<span class="token punctuation">.</span>Next <span class="token operator">=</span> next
          <span class="token keyword">if</span> next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">// 注意双向链表的指针有两个</span>
             next<span class="token punctuation">.</span>Prev <span class="token operator">=</span> childTail
          <span class="token punctuation">}</span>
          <span class="token comment">// 更新当前展开的尾节点</span>
          tail <span class="token operator">=</span> childTail
       <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 递归出口, 无子链表</span>
          tail <span class="token operator">=</span> node
       <span class="token punctuation">}</span>
       <span class="token comment">// 更新当前节点</span>
       node <span class="token operator">=</span> next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> tail
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-2-问题29-排序的循环链表" tabindex="-1"><a class="header-anchor" href="#_4-5-2-问题29-排序的循环链表" aria-hidden="true">#</a> 4.5.2 问题29: 排序的循环链表</h2>`,2),g={href:"https://leetcode.cn/problems/4ueAj6/",target:"_blank",rel:"noopener noreferrer"},x=a(`<blockquote><p>给定<strong>循环单调非递减列表</strong>中的一个点，写一个函数向这个列表中插入一个新元素 <code>insertVal</code> ，使这个列表仍然是循环升序的。</p><p>给定的可以是这个列表中任意一个顶点的指针，并不一定是这个列表中最小元素的指针。</p><p>如果有多个满足条件的插入位置，可以选择任意一个位置插入新的值，插入后整个列表仍然保持有序。</p><p>如果列表为空（给定的节点是 <code>null</code>），需要创建一个循环有序列表并返回这个节点。否则。请返回原先给定的节点。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/01/19/example_1_before_65p.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [3,4,1], insertVal = 2
输出：[3,4,1,2]
解释：在上图中，有一个包含三个元素的循环有序列表，你获得值为 3 的节点的指针，我们需要向表中插入元素 2 。新插入的节点应该在 1 和 3 之间，插入之后，整个列表如上图所示，最后返回节点 3 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [], insertVal = 1
输出：[1]
解释：列表为空（给定的节点是 null），创建一个循环有序列表并返回这个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1], insertVal = 0
输出：[1,0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>0 &lt;= Number of Nodes &lt;= 5 * 10^4</code></li><li><code>-10^6 &lt;= Node.val &lt;= 10^6</code></li><li><code>-10^6 &lt;= insertVal &lt;= 10^6</code></li></ul></blockquote><h3 id="_4-5-2-1-分析" tabindex="-1"><a class="header-anchor" href="#_4-5-2-1-分析" aria-hidden="true">#</a> 4.5.2.1 分析</h3><h4 id="找出规则" tabindex="-1"><a class="header-anchor" href="#找出规则" aria-hidden="true">#</a> 找出规则</h4>`,3),N=n("p",null,[s("要插入一个节点 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msub",null,[n("mi",null,"N"),n("mi",null,"i")])]),n("annotation",{encoding:"application/x-tex"},"N_i")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.3117em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"i")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])])])])]),s(", 那么这个节点值一定满足: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msub",null,[n("mi",null,"N"),n("mrow",null,[n("mi",null,"i"),n("mo",null,"−"),n("mn",null,"1")])]),n("mo",null,"≤"),n("msub",null,[n("mi",null,"N"),n("mi",null,"i")]),n("mo",null,"≤"),n("msub",null,[n("mi",null,"N"),n("mrow",null,[n("mi",null,"i"),n("mo",null,"+"),n("mn",null,"1")])])]),n("annotation",{encoding:"application/x-tex"},"N_{i-1} \\le N_i \\le N_{i+1}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8917em","vertical-align":"-0.2083em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.3117em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mathnormal mtight"},"i"),n("span",{class:"mbin mtight"},"−"),n("span",{class:"mord mtight"},"1")])])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2083em"}},[n("span")])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"≤"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.3117em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"i")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"≤"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8917em","vertical-align":"-0.2083em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.3117em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mathnormal mtight"},"i"),n("span",{class:"mbin mtight"},"+"),n("span",{class:"mord mtight"},"1")])])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2083em"}},[n("span")])])])])])])])]),s(" . 那么问题就转化成在链表中寻找满足这种条件的节点.")],-1),y=a(`<h4 id="边界条件" tabindex="-1"><a class="header-anchor" href="#边界条件" aria-hidden="true">#</a> 边界条件</h4><ol><li>空链表: 此时插入的节点就是头节点</li><li>仅有一个节点: 将插入节点与其链接即可</li><li>最大(小)值: 若插入的节点大于(小于)最大(小)值, 则插入到头节点和尾节点之间.</li></ol><h3 id="_4-5-2-2-题解" tabindex="-1"><a class="header-anchor" href="#_4-5-2-2-题解" aria-hidden="true">#</a> 4.5.2.2 题解</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Node29 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Val  <span class="token builtin">int</span>
    Next <span class="token operator">*</span>Node29
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">insert</span><span class="token punctuation">(</span>aNode <span class="token operator">*</span>Node29<span class="token punctuation">,</span> x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Node29 <span class="token punctuation">{</span>
    newNode <span class="token operator">:=</span> <span class="token operator">&amp;</span>Node29<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> x<span class="token punctuation">}</span>
    <span class="token comment">// 边界条件</span>
    <span class="token keyword">if</span> aNode <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">// 空链表</span>
       newNode<span class="token punctuation">.</span>Next <span class="token operator">=</span> newNode
       <span class="token keyword">return</span> newNode
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> aNode<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">// 只有一个节点</span>
       aNode<span class="token punctuation">.</span>Next <span class="token operator">=</span> newNode
       newNode<span class="token punctuation">.</span>Next <span class="token operator">=</span> aNode
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
       <span class="token function">insertCore</span><span class="token punctuation">(</span>aNode<span class="token punctuation">,</span> newNode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> aNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">insertCore</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> node <span class="token operator">*</span>Node29<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cur <span class="token operator">:=</span> head
    next <span class="token operator">:=</span> cur<span class="token punctuation">.</span>Next
    biggest <span class="token operator">:=</span> cur

    <span class="token comment">// 寻找插入位置</span>
    <span class="token keyword">for</span> <span class="token operator">!</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>Val <span class="token operator">&lt;=</span> node<span class="token punctuation">.</span>Val <span class="token operator">&amp;&amp;</span> next<span class="token punctuation">.</span>Val <span class="token operator">&gt;=</span> node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> next <span class="token operator">!=</span> head <span class="token punctuation">{</span>
       cur <span class="token operator">=</span> next
       next <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
       <span class="token keyword">if</span> cur<span class="token punctuation">.</span>Val <span class="token operator">&gt;=</span> biggest<span class="token punctuation">.</span>Val <span class="token punctuation">{</span>
          biggest <span class="token operator">=</span> cur
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 插入</span>
    <span class="token keyword">if</span> cur<span class="token punctuation">.</span>Val <span class="token operator">&lt;=</span> node<span class="token punctuation">.</span>Val <span class="token operator">&amp;&amp;</span> next<span class="token punctuation">.</span>Val <span class="token operator">&gt;=</span> node<span class="token punctuation">.</span>Val <span class="token punctuation">{</span> <span class="token comment">// 插入位置在中间</span>
       cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> node
       node<span class="token punctuation">.</span>Next <span class="token operator">=</span> next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 插入位置为末尾</span>
       node<span class="token punctuation">.</span>Next <span class="token operator">=</span> biggest<span class="token punctuation">.</span>Next
       biggest<span class="token punctuation">.</span>Next <span class="token operator">=</span> node
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,5),f={href:"https://book.douban.com/subject/35543447/",target:"_blank",rel:"noopener noreferrer"};function _(w,V){const e=o("ExternalLinkIcon");return i(),p("div",null,[r,d,u,n("p",null,[n("a",m,[s("LCR 028. 扁平化多级双向链表"),l(e)])]),v,k,h,b,n("p",null,[n("a",g,[s("LCR 029. 循环有序列表的插入"),l(e)])]),x,N,y,n("ol",null,[n("li",null,[n("a",f,[s("剑指Offer（专项突破版）"),l(e)])])])])}const z=t(c,[["render",_],["__file","04.5.html.vue"]]);export{z as default};
