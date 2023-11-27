import{_ as e,Z as p,$ as o,a0 as n,a1 as a,a2 as t,a4 as i,H as c}from"./framework-d03928c9.js";const l={},u={href:"https://leetcode.cn/problems/kth-largest-element-in-an-array/",target:"_blank",rel:"noopener noreferrer"},r=i(`<blockquote><p>给定整数数组 <code>nums</code> 和整数 <code>k</code>，请返回数组中第 <code>**k**</code> 个最大的元素。</p><p>请注意，你需要找的是数组排序后的第 <code>k</code> 个最大的元素，而不是第 <code>k</code> 个不同的元素。</p><p>你必须设计并实现时间复杂度为 <code>O(n)</code> 的算法解决此问题。</p><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [3,2,1,5,6,4], k = 2
输出: 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [3,2,3,1,2,4,5,5,6], k = 4
输出: 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= k &lt;= nums.length &lt;= 10^5</code></li><li><code>-104 &lt;= nums[i] &lt;= 10^4</code></li></ul></blockquote><h2 id="_1-快速选择-快速排序分区" tabindex="-1"><a class="header-anchor" href="#_1-快速选择-快速排序分区" aria-hidden="true">#</a> 1. 快速选择 (快速排序分区)</h2><p>快速选择使用的是快速排序的分区算法, 快速排序的分区算法有两种:</p><ul><li>Lumoto Partition</li><li>Hoare Partition</li></ul><p>关于基准的选择, <strong>随机</strong>选取选取基准可以尽量避开极端情况.</p><h3 id="_1-1-lomuto-partition" tabindex="-1"><a class="header-anchor" href="#_1-1-lomuto-partition" aria-hidden="true">#</a> 1.1 Lomuto Partition</h3><p>快速排序流程:</p><ol><li>选取基准 Pivot</li><li>将小于于<code>Pivot</code>的数字放在其左边, 大于等于<code>Pivot</code>的放在右边, 形成左右分区; 左分区所有数字小于基准, 右分区所有数字大于等于基准; 对于左右分区, 继续 步骤1). 直到区间为空为止.</li><li>所有数字排序完毕</li></ol><p>分区流程:</p><ol><li>选取最右边的数作为基准</li><li>左分区索引<code>i</code>, 遍历数组, 将小于基准的数字和左分区数字交换; 直到结束为止;</li><li>将左分区边界右边的数字和基准交换, <strong>返回</strong>当前<strong>基准位置</strong></li></ol><p>伪代码如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Sorts a (portion of an) array, divides it into partitions, then sorts those
algorithm quicksort(A, lo, hi) is 
  // Ensure indices are in correct order
  if lo &gt;= hi || lo &lt; 0 then 
    return
    
  // Partition array and get the pivot index
  p := partition(A, lo, hi) 
      
  // Sort the two partitions
  quicksort(A, lo, p - 1) // Left side of pivot
  quicksort(A, p + 1, hi) // Right side of pivot

// Divides array into two partitions
algorithm partition(A, lo, hi) is 
  pivot := A[hi] // Choose the last element as the pivot

  // Temporary pivot index
  i := lo - 1

  for j := lo to hi - 1 do 
    // If the current element is less than or equal to the pivot
    if A[j] &lt;= pivot then 
      // Move the temporary pivot index forward
      i := i + 1
      // Swap the current element with the element at the temporary pivot index
      swap A[i] with A[j]

  // Move the pivot element to the correct pivot position (between the smaller and larger elements)
  i := i + 1
  swap A[i] with A[hi]
  return i // the pivot index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 Lumoto Partition 返回的是当前基准所在位置, 那么一定能保证基准左右两边数字的大小关系.</p><ul><li>若<strong>基准位置</strong>正好为 <code>n-k</code>, 则表示其右边的<code>k-1</code>个数字比基准大, 那么<strong>基准</strong>就是<strong>第<code>k</code>大</strong>的数字.</li><li>若<strong>基准位置</strong>小于<code> n-k</code>, 表示<strong>第<code>k</code>大</strong>数字在其若<strong>右分区</strong>, 继续对右分区进行<code>Partition</code>, 寻找基准.</li><li>若<strong>基准位置</strong>大于<code> n-k</code>, 表示<strong>第<code>k</code>大</strong>数字在其若<strong>左分区</strong>, 继续对左分区进行<code>Partition</code>, 寻找基准.</li></ul><p>每次只需要寻找一个分区即可, 无需等待数组排序完毕. 题解如下(Lumoto 分区法现在会超时, 因为加了新的测试用例):</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">findKthLargest</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    pi <span class="token operator">:=</span> <span class="token function">lomutoPartition</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    t <span class="token operator">:=</span> n <span class="token operator">-</span> k
    <span class="token keyword">for</span> pi <span class="token operator">!=</span> t <span class="token punctuation">{</span>
        <span class="token keyword">if</span> pi <span class="token operator">&lt;</span> t <span class="token punctuation">{</span>
            pi <span class="token operator">=</span> <span class="token function">lomutoPartition</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> pi<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pi <span class="token operator">=</span> <span class="token function">lomutoPartition</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> pi<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> nums<span class="token punctuation">[</span>n<span class="token operator">-</span>k<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">lomutoPartition</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> left<span class="token punctuation">,</span> right <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// random pivot</span>
    pi <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span>right<span class="token operator">-</span>left<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> left
    p <span class="token operator">:=</span> nums<span class="token punctuation">[</span>pi<span class="token punctuation">]</span>
    <span class="token comment">// move to end</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> pi<span class="token punctuation">,</span> right<span class="token punctuation">)</span>

    <span class="token comment">// partition</span>
    i<span class="token punctuation">,</span> j <span class="token operator">:=</span> left<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> left
    <span class="token keyword">for</span> j <span class="token operator">&lt;</span> right <span class="token punctuation">{</span>
        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> p <span class="token punctuation">{</span>
            i<span class="token operator">++</span>
            <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        j<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    
    i<span class="token operator">++</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> i<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token comment">// move pivot to right position</span>
    <span class="token keyword">return</span> i
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-hoare-partition" tabindex="-1"><a class="header-anchor" href="#_1-2-hoare-partition" aria-hidden="true">#</a> 1.2 Hoare Partition</h3><p>快速排序流程:</p><ol><li>选取基准 <code>Pivot</code></li><li>将小于于<code>Pivot</code>的数字放在其左边, 大于等于<code>Pivot</code>的放在右边, 形成左右分区; 左分区所有数字小于基准, 右分区所有数字大于等于基准; 对于左右分区, 继续 步骤1). 直到区间为空为止.</li><li>所有数字排序完毕</li></ol><p>分区流程:</p><ol><li><p>选择中间数字为基准</p></li><li><p>使用双指针<code>i</code>, <code>j</code>; 分别从数组两端向中间移动, 每次都移动一步:</p><ul><li>若<code>nums[i] &lt; pivot</code>, 则<code>i</code>继续向右移动, 跳过这些数字</li><li>若<code>nums[j] &gt; pivot</code>, 则<code>j</code>继续向左移动, 跳过这些数字</li></ul><p>当<code>i&lt;j</code>, 则交换. 直到<code>i &gt;= j</code></p></li><li><p><strong>返回<code>j</code></strong>.</p></li></ol><p>算法伪代码:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Sorts a (portion of an) array, divides it into partitions, then sorts those
algorithm quicksort(A, lo, hi) is 
  if lo &gt;= 0 &amp;&amp; hi &gt;= 0 &amp;&amp; lo &lt; hi then
    p := partition(A, lo, hi) 
    quicksort(A, lo, p) // Note: the pivot is now included
    quicksort(A, p + 1, hi) 

// Divides array into two partitions
algorithm partition(A, lo, hi) is 
  // Pivot value
  pivot := A[ floor((hi - lo)/2) + lo ] // The value in the middle of the array

  // Left index
  i := lo - 1 

  // Right index
  j := hi + 1

  loop forever 
    // Move the left index to the right at least once and while the element at
    // the left index is less than the pivot
    do i := i + 1 while A[i] &lt; pivot
    
    // Move the right index to the left at least once and while the element at
    // the right index is greater than the pivot
    do j := j - 1 while A[j] &gt; pivot

    // If the indices crossed, return
    if i &gt;= j then return j
    
    // Swap the elements at the left and right indices
    swap A[i] with A[j]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 Hoare Partition <strong>返回的值<code>j</code><strong>不一定是基准位置, 所以要使用递归的方式计算, 直到区间长度为1, 此时</strong><code>nums[n-k]</code>为第k大数</strong>.</p><ol><li>若<code>j &lt; n-k </code>, 那么第<code>k</code>大在右分区, 递归调用 <code>partition(nums, j+1, right)</code> ,</li><li>若<code>j &gt;= n-k</code>, 那么第<code>k</code>大在左分区, 递归调用 <code>partition(nums, left, j)</code> , <strong>注意</strong>: 和 lomuto 不同, 左分区包含<code>j</code>自身; 所以左分区的条件一定是 <code>j &gt;= n-k</code></li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">findKthLargest</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">hoarePartition</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token operator">-</span>k<span class="token punctuation">)</span>
<span class="token punctuation">}</span>  

<span class="token keyword">func</span> <span class="token function">hoarePartition</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> t <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> left <span class="token operator">==</span> right <span class="token punctuation">{</span>
        <span class="token keyword">return</span> nums<span class="token punctuation">[</span>t<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    pi <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span>right<span class="token operator">-</span>left<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> left
    p <span class="token operator">:=</span> nums<span class="token punctuation">[</span>pi<span class="token punctuation">]</span>

    i<span class="token punctuation">,</span> j <span class="token operator">:=</span> left<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> right<span class="token operator">+</span><span class="token number">1</span>
    <span class="token keyword">for</span> i <span class="token operator">&lt;</span> j <span class="token punctuation">{</span>
        <span class="token keyword">for</span> i<span class="token operator">++</span><span class="token punctuation">;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> p<span class="token punctuation">;</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> j<span class="token operator">--</span><span class="token punctuation">;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> p<span class="token punctuation">;</span> <span class="token punctuation">{</span>
            j<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> i <span class="token operator">&lt;</span> j <span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> j <span class="token operator">&lt;</span> t <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">hoarePartition</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">,</span> t<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">hoarePartition</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> left<span class="token punctuation">,</span> j<span class="token punctuation">,</span> t<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-堆排序" tabindex="-1"><a class="header-anchor" href="#_2-堆排序" aria-hidden="true">#</a> 2. 堆排序</h2><p>因为需要求第K大的数, 那么结果是K个最大数字中最小的那个. 流程如下:</p><ol><li>构建最小堆</li><li>遍历数组存入数字: <ul><li>若长度小于k, 直接存储</li><li>若长度等于k, 比较堆顶元素, 若大于堆顶, 则入堆.</li></ul></li><li>堆顶元素即位第K大数.</li></ol><p>Golang 标准库可以使用<code>heap</code>包实现堆的操作, 结构体需要实现<code>heap.Interface</code>接口:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Interface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	sort<span class="token punctuation">.</span>Interface
	<span class="token function">Push</span><span class="token punctuation">(</span>x any<span class="token punctuation">)</span> <span class="token comment">// add x as element Len()</span>
	<span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> any   <span class="token comment">// remove and return element Len() - 1.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>sort.Interface</code>:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Interface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">// Len is the number of elements in the collection.</span>
	<span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>

	<span class="token comment">// Less reports whether the element with index i</span>
	<span class="token comment">// must sort before the element with index j.</span>
	<span class="token comment">//</span>
	<span class="token comment">// If both Less(i, j) and Less(j, i) are false,</span>
	<span class="token comment">// then the elements at index i and j are considered equal.</span>
	<span class="token comment">// Sort may place equal elements in any order in the final result,</span>
	<span class="token comment">// while Stable preserves the original input order of equal elements.</span>
	<span class="token comment">//</span>
	<span class="token comment">// Less must describe a transitive ordering:</span>
	<span class="token comment">//  - if both Less(i, j) and Less(j, k) are true, then Less(i, k) must be true as well.</span>
	<span class="token comment">//  - if both Less(i, j) and Less(j, k) are false, then Less(i, k) must be false as well.</span>
	<span class="token comment">//</span>
	<span class="token comment">// Note that floating-point comparison (the &lt; operator on float32 or float64 values)</span>
	<span class="token comment">// is not a transitive ordering when not-a-number (NaN) values are involved.</span>
	<span class="token comment">// See Float64Slice.Less for a correct implementation for floating-point values.</span>
	<span class="token function">Less</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>

	<span class="token comment">// Swap swaps the elements with indexes i and j.</span>
	<span class="token function">Swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>题解:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">findKthLargest</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// minIntHeap </span>
    h <span class="token operator">:=</span> <span class="token operator">&amp;</span>MinIntHeap<span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        <span class="token keyword">if</span> h<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> k <span class="token punctuation">{</span>
            heap<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> h<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> k <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>h<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> n <span class="token punctuation">{</span>
                heap<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span>
                heap<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">*</span>h<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> MinIntHeap <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>MinIntHeap<span class="token punctuation">)</span> <span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span><span class="token operator">*</span>h<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>MinIntHeap<span class="token punctuation">)</span> <span class="token function">Less</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">*</span>h<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token operator">*</span>h<span class="token punctuation">)</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>MinIntHeap<span class="token punctuation">)</span> <span class="token function">Swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token operator">*</span>h<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">*</span>h<span class="token punctuation">)</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>h<span class="token punctuation">)</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">*</span>h<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>MinIntHeap<span class="token punctuation">)</span> <span class="token function">Push</span><span class="token punctuation">(</span>x any<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>h <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token operator">*</span>h<span class="token punctuation">,</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>MinIntHeap<span class="token punctuation">)</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> any <span class="token punctuation">{</span>
    oldLen <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span><span class="token operator">*</span>h<span class="token punctuation">)</span>
    val <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">*</span>h<span class="token punctuation">)</span><span class="token punctuation">[</span>oldLen<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token operator">*</span>h <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>h<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span> oldLen<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> val
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,36),d={href:"https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme",target:"_blank",rel:"noopener noreferrer"},k={href:"https://pkg.go.dev/container/heap@go1.21.1#Interface",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=c("ExternalLinkIcon");return p(),o("div",null,[n("p",null,[n("a",u,[a("215. 数组中的第K个最大元素"),t(s)])]),r,n("ol",null,[n("li",null,[n("a",d,[a("https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme"),t(s)])]),n("li",null,[n("a",k,[a("https://pkg.go.dev/container/heap@go1.21.1#Interface"),t(s)])])])])}const g=e(l,[["render",v],["__file","215.kth_ele_in_arr.html.vue"]]);export{g as default};
