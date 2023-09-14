import{_ as p,Z as o,$ as l,a0 as n,a1 as s,a2 as t,a3 as e,H as i}from"./framework-09afcf0b.js";const c={},u={href:"https://en.wikipedia.org/wiki/Computer_science",target:"_blank",rel:"noopener noreferrer"},r=n("strong",null,"merge sort",-1),d=n("strong",null,"mergesort",-1),k={href:"https://en.wikipedia.org/wiki/Comparison_sort",target:"_blank",rel:"noopener noreferrer"},m={href:"https://en.wikipedia.org/wiki/Sorting_algorithm",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"Conceptually, a merge sort works as follows:",-1),b=n("li",null,[s("Divide the unsorted list into "),n("em",null,"n"),s(" sublists, each containing one element (a list of one element is considered sorted).")],-1),h={href:"https://en.wikipedia.org/wiki/Merge_algorithm",target:"_blank",rel:"noopener noreferrer"},g=e(`<p>归并排序也是基于分治法的排序算法, 将每个区间分成两个子区间, 将每个子区间排序后进行合并.</p><p>归并排序有递归和迭代两种做法</p><h2 id="_12-4-1-递归" tabindex="-1"><a class="header-anchor" href="#_12-4-1-递归" aria-hidden="true">#</a> 12.4.1 递归</h2><p>时间复杂度: O(nlogn)</p><p>空间复杂度: O(n), 除了创建空间O(n)的辅助数组外, 需要额外的 O(logn) 的递归调用栈空间</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">MergeSortRecursive</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token comment">// only one element or empty</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> arr
	<span class="token punctuation">}</span>

	mid <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
	left <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span>mid<span class="token punctuation">]</span> <span class="token comment">// left half</span>
	right <span class="token operator">:=</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token comment">// right half</span>

	<span class="token comment">// merge two halves</span>
	<span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token function">MergeSortRecursive</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">MergeSortRecursive</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">merge</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token comment">// temporary slice</span>
	maxLen <span class="token operator">:=</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>
	tmp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> maxLen<span class="token punctuation">)</span>

	<span class="token comment">// merge slices</span>
	<span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">len</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> left<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> right<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
			tmp <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> left<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
			left <span class="token operator">=</span> left<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			tmp <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> right<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
			right <span class="token operator">=</span> right<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// add the rest</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		tmp <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> left<span class="token operator">...</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		tmp <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> right<span class="token operator">...</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> tmp
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-4-2-迭代" tabindex="-1"><a class="header-anchor" href="#_12-4-2-迭代" aria-hidden="true">#</a> 12.4.2 迭代</h2><p>对于窗口<code>[start, start+wid*2]</code>:</p><ol><li>每次将相邻的区间进行归并排序. 那么一次循环之后, 所有长度为<code>wid</code>的相邻区间都是已经排好序的.</li><li>将窗口长度乘以2, 重复步骤 1), 若窗口长度超过数组长度, 则结束</li></ol><p>此时整个数组都是已排序的.</p><p>时间复杂度: O(nlogn)</p><p>空间复杂度: O(n), 没有使用递归, 无需调用栈, 空间复杂度优于递归方式</p><p>下一次将区间长度乘以2, 在进行一次循环.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">SortArrMergeSortIterative</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">MergeSortIterative</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">MergeSortIterative</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	length <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
	res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span>

	<span class="token comment">// merge adjacent intervals</span>
	<span class="token comment">// double interval width every time</span>
	<span class="token keyword">for</span> wid <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> wid <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> wid <span class="token operator">*=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
		<span class="token comment">// &quot;start&quot; is the first index of the first interval</span>
		<span class="token keyword">for</span> start <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> start <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> start <span class="token operator">+=</span> wid <span class="token operator">*</span> <span class="token number">2</span> <span class="token punctuation">{</span>
			mid <span class="token operator">:=</span> <span class="token function">min</span><span class="token punctuation">(</span>start<span class="token operator">+</span>wid<span class="token punctuation">,</span> length<span class="token punctuation">)</span>   <span class="token comment">// end of first interval is mid-1</span>
			end <span class="token operator">:=</span> <span class="token function">min</span><span class="token punctuation">(</span>start<span class="token operator">+</span>wid<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span> <span class="token comment">// end of next interval is end-1</span>

			i <span class="token operator">:=</span> start <span class="token comment">// i is index of first interval</span>
			j <span class="token operator">:=</span> mid   <span class="token comment">// j is index of next interval</span>
			k <span class="token operator">:=</span> start <span class="token comment">// k is index of slice res</span>
			<span class="token comment">// merge adjacent intervals</span>
			<span class="token keyword">for</span> i <span class="token operator">&lt;</span> mid <span class="token operator">||</span> j <span class="token operator">&lt;</span> end <span class="token punctuation">{</span>
				<span class="token keyword">if</span> j <span class="token operator">==</span> end <span class="token operator">||</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> mid <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					res<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
					k<span class="token operator">++</span>
					i<span class="token operator">++</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					res<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
					k<span class="token operator">++</span>
					j<span class="token operator">++</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// swap two slice</span>
		res<span class="token punctuation">,</span> arr <span class="token operator">=</span> arr<span class="token punctuation">,</span> res
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-4-3-问题77-链表排序" tabindex="-1"><a class="header-anchor" href="#_12-4-3-问题77-链表排序" aria-hidden="true">#</a> 12.4.3 问题77: 链表排序</h2>`,15),f={href:"https://leetcode.cn/problems/7WHec2/",target:"_blank",rel:"noopener noreferrer"},x=e(`<blockquote><p>给定链表的头结点 <code>head</code> ，请将其按 <strong>升序</strong> 排列并返回 <strong>排序后的链表</strong> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [4,2,1,3]
输出：[1,2,3,4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = []
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>链表中节点的数目在范围 <code>[0, 5 * 10^4]</code> 内</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li></ul><p>**进阶：**你可以在 <code>O(n log n)</code> 时间复杂度和常数级空间复杂度下，对链表进行排序吗？</p></blockquote><h3 id="_12-4-3-1-分析" tabindex="-1"><a class="header-anchor" href="#_12-4-3-1-分析" aria-hidden="true">#</a> 12.4.3.1 分析</h3>`,2),w=n("ul",null,[n("li",null,[n("p",null,"节点的区间比较大, 不适用于计数排序.")]),n("li",null,[n("p",null,[s("若使用冒泡和插入排序, 时间为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mi",null,"n"),n("mn",null,"2")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"n"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])]),n("span",{class:"mclose"},")")])])])])]),n("li",null,[n("p",null,"若使用堆排序, 需额外构造数组来进行, 时间复杂度为 O(nlogn) 空间复杂度为 O(n)")]),n("li",null,[n("p",null,"若使用快速排序, 选取基准时:"),n("ul",null,[n("li",null,"若为随机基准, 选取基准的时间为 O(n)"),n("li",null,[s("若固定为一端, 遇到极端情况, 将退化为"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mi",null,"n"),n("mn",null,"2")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"n"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])]),n("span",{class:"mclose"},")")])])])])])])],-1),_=e(`<p>对于归并排序, 合并两个子链表是可行的:</p><ul><li>拆分子链表, 可以使用快慢指针来进行, 快指针走两步, 慢指针走一步, 当快指针到达尾部时, 慢指针指向链表中间</li></ul><h4 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h4><p>TC: O(nlogn) SC: O(logn), 调用栈, 合并链表无需额外辅助内存</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">sortList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token comment">// Merge Sort</span>

    <span class="token comment">// empty or single node</span>
    <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head
    <span class="token punctuation">}</span>

    <span class="token comment">// split list</span>
    left <span class="token operator">:=</span> head
    right <span class="token operator">:=</span> <span class="token function">splitList</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>

    <span class="token comment">// recursion</span>
    left <span class="token operator">=</span> <span class="token function">sortList</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span>
    right <span class="token operator">=</span> <span class="token function">sortList</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span>

    <span class="token comment">// merge</span>
    <span class="token keyword">return</span> <span class="token function">mergeList</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">splitList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token comment">// fast start from second node</span>
    <span class="token comment">// when fast reach tail</span>
    <span class="token comment">// slow is the previous node of mid node </span>
    slow<span class="token punctuation">,</span> fast <span class="token operator">:=</span> head<span class="token punctuation">,</span> head<span class="token punctuation">.</span>Next 
    <span class="token keyword">for</span> fast <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>Next
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>

    <span class="token comment">// mid node </span>
    right <span class="token operator">:=</span> slow<span class="token punctuation">.</span>Next
    slow<span class="token punctuation">.</span>Next <span class="token operator">=</span> <span class="token boolean">nil</span> <span class="token comment">// break link</span>

    <span class="token keyword">return</span> right
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">mergeList</span><span class="token punctuation">(</span>h1<span class="token punctuation">,</span> h2 <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token comment">// sentinel node</span>
    dummy <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span><span class="token punctuation">}</span>
    cur <span class="token operator">:=</span> dummy
    
    <span class="token keyword">for</span> h1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> h2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> h1<span class="token punctuation">.</span>Val <span class="token operator">&lt;</span> h2<span class="token punctuation">.</span>Val <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> h1
            h1 <span class="token operator">=</span> h1<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> h2
            h2 <span class="token operator">=</span> h2<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span>

        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> h1 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> h2
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> h1
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h3><p>TC: O(nlogn) SC: O(1), 没有递归调用栈</p><p>// TODO: 2023-09-14</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="_12-4-4-问题78-合并排序链表" tabindex="-1"><a class="header-anchor" href="#_12-4-4-问题78-合并排序链表" aria-hidden="true">#</a> 12.4.4 问题78: 合并排序链表</h2>`,10),y={href:"https://leetcode.cn/problems/vvXgSW/",target:"_blank",rel:"noopener noreferrer"},N=e(`<blockquote><p>给定一个链表数组，每个链表都已经按升序排列。</p><p>请将所有链表合并到一个升序链表中，返回合并后的链表。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1-&gt;4-&gt;5,
  1-&gt;3-&gt;4,
  2-&gt;6
]
将它们合并到一个有序链表中得到。
1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：lists = []
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：lists = [[]]
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>k == lists.length</code></li><li><code>0 &lt;= k &lt;= 10^4</code></li><li><code>0 &lt;= lists[i].length &lt;= 500</code></li><li><code>-10^4 &lt;= lists[i][j] &lt;= 10^4</code></li><li><code>lists[i]</code> 按 <strong>升序</strong> 排列</li><li><code>lists[i].length</code> 的总和不超过 <code>10^4</code></li></ul></blockquote><h3 id="_12-4-4-1-分析-题解" tabindex="-1"><a class="header-anchor" href="#_12-4-4-1-分析-题解" aria-hidden="true">#</a> 12.4.4.1 分析&amp;题解</h3><h4 id="最小堆" tabindex="-1"><a class="header-anchor" href="#最小堆" aria-hidden="true">#</a> 最小堆</h4><p>// TODO: 2023-09-14</p><h4 id="分治法" tabindex="-1"><a class="header-anchor" href="#分治法" aria-hidden="true">#</a> 分治法</h4><p>和归并排序类似, 将链表数组拆分成两个子链表, 然后将其排序合并. 递归拆分于合并, 知道所有的链表合并完成.</p><p>TC: O(nlogk), SC: O(logk)</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">mergeKLists</span><span class="token punctuation">(</span>lists <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token comment">// empty</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>lists<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// single node</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>lists<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> lists<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// split lists</span>
    mid <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>lists<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
    left <span class="token operator">:=</span> lists<span class="token punctuation">[</span><span class="token punctuation">:</span>mid<span class="token punctuation">]</span>
    right <span class="token operator">:=</span> lists<span class="token punctuation">[</span>mid<span class="token punctuation">:</span><span class="token punctuation">]</span>
    
    <span class="token comment">// merge</span>
    <span class="token keyword">return</span> <span class="token function">mergeList</span><span class="token punctuation">(</span><span class="token function">mergeKLists</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mergeKLists</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">mergeList</span><span class="token punctuation">(</span>h1<span class="token punctuation">,</span> h2 <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token comment">// sentinel</span>
    dummy <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span><span class="token punctuation">}</span>
    cur <span class="token operator">:=</span> dummy
    <span class="token keyword">for</span> h1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> h2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> h1<span class="token punctuation">.</span>Val <span class="token operator">&lt;</span> h2<span class="token punctuation">.</span>Val <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> h1
            h1 <span class="token operator">=</span> h1<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> h2
            h2 <span class="token operator">=</span> h2<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span>

        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> h1 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> h2
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> h1
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,9),L={href:"https://book.douban.com/subject/35543447/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://en.wikipedia.org/wiki/Merge_sort",target:"_blank",rel:"noopener noreferrer"};function M(S,j){const a=i("ExternalLinkIcon");return o(),l("div",null,[n("blockquote",null,[n("p",null,[s("In "),n("a",u,[s("computer science"),t(a)]),s(", "),r,s(" (also commonly spelled as "),d,s(") is an efficient, general-purpose, and "),n("a",k,[s("comparison-based"),t(a)]),s(),n("a",m,[s("sorting algorithm"),t(a)]),s(".")]),v,n("ol",null,[b,n("li",null,[s("Repeatedly "),n("a",h,[s("merge"),t(a)]),s(" sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.")])])]),g,n("p",null,[n("a",f,[s("LCR 077. 排序链表"),t(a)])]),x,w,_,n("p",null,[n("a",y,[s("LCR 078. 合并 K 个升序链表"),t(a)])]),N,n("ol",null,[n("li",null,[n("a",L,[s("剑指Offer（专项突破版）"),t(a)])]),n("li",null,[n("a",O,[s("https://en.wikipedia.org/wiki/Merge_sort"),t(a)])])])])}const z=p(c,[["render",M],["__file","12.4.html.vue"]]);export{z as default};
