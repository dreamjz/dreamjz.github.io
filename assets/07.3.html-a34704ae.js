import{_ as p,Z as o,$ as l,a0 as n,a1 as s,a2 as e,a3 as a,H as c}from"./framework-09afcf0b.js";const i={},u=a('<p>二叉树的广度优先搜索是从上到下按层数遍历二叉树.</p><p>通常使用<strong>队列</strong>来实现二叉树的广度优先搜索:</p><ol><li>将根节点放入队列</li><li>从队列中取出节点进行遍历</li><li>若节点存在子节点, 则将子节点放入队列中, 重复步骤 2)</li></ol><p>由于先入先出的特性, 二叉树的节点按照从左至右的顺序进入队列, 因此可以很容易的直到每<strong>层</strong>的最左/右的节点, 或者每层的最值等.</p><p>如果涉及到二叉树的<strong>层</strong>相关的问题, 可以使用广度优先搜索来解决.</p><h2 id="_7-3-1-问题43-在完全二叉树中添加节点" tabindex="-1"><a class="header-anchor" href="#_7-3-1-问题43-在完全二叉树中添加节点" aria-hidden="true">#</a> 7.3.1 问题43: 在完全二叉树中添加节点</h2>',6),r={href:"https://leetcode.cn/problems/NaqhDT/",target:"_blank",rel:"noopener noreferrer"},d=a(`<blockquote><p>完全二叉树是每一层（除最后一层外）都是完全填充（即，节点数达到最大，第 <code>n</code> 层有 <code>2^(n-1)</code> 个节点）的，并且所有的节点都尽可能地集中在左侧。</p><p>设计一个用完全二叉树初始化的数据结构 <code>CBTInserter</code>，它支持以下几种操作：</p><ul><li><code>CBTInserter(TreeNode root)</code> 使用根节点为 <code>root</code> 的给定树初始化该数据结构；</li><li><code>CBTInserter.insert(int v)</code> 向树中插入一个新节点，节点类型为 <code>TreeNode</code>，值为 <code>v</code> 。使树保持完全二叉树的状态，<strong>并返回插入的新节点的父节点的值</strong>；</li><li><code>CBTInserter.get_root()</code> 将返回树的根节点。</li></ul><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：inputs = [&quot;CBTInserter&quot;,&quot;insert&quot;,&quot;get_root&quot;], inputs = [[[1]],[2],[]]
输出：[null,1,[1,2]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：inputs = [&quot;CBTInserter&quot;,&quot;insert&quot;,&quot;insert&quot;,&quot;get_root&quot;], inputs = [[[1,2,3,4,5,6]],[7],[8],[]]
输出：[null,3,4,[1,2,3,4,5,6,7,8]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>最初给定的树是完全二叉树，且包含 <code>1</code> 到 <code>1000</code> 个节点。</li><li>每个测试用例最多调用 <code>CBTInserter.insert</code> 操作 <code>10000</code> 次。</li><li>给定节点或插入节点的每个值都在 <code>0</code> 到 <code>5000</code> 之间。</li></ul></blockquote><h3 id="_7-3-1-1-分析" tabindex="-1"><a class="header-anchor" href="#_7-3-1-1-分析" aria-hidden="true">#</a> 7.3.1.1 分析</h3><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><p><strong>满二叉树</strong></p><blockquote><p>A <strong>full</strong> binary tree is a tree in which every node has either 0 or 2 children.</p></blockquote><p><strong>完全二叉树</strong> (Complete Binary Tree, CBT)</p><blockquote><p>A <strong>complete</strong> binary tree is a binary tree in which every level, <em>except possibly the last</em>, is completely filled, and all nodes in the last level are as far left as possible.</p></blockquote><h4 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h4><p>首先, 根据完全二叉树的定义:</p>`,9),k=n("ul",null,[n("li",null,[s("除了最后一层外, 所有的层数节点都是满的(第n层有"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mn",null,"2"),n("mrow",null,[n("mi",null,"n"),n("mo",null,"−"),n("mn",null,"1")])])]),n("annotation",{encoding:"application/x-tex"},"2^{n-1}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8141em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mathnormal mtight"},"n"),n("span",{class:"mbin mtight"},"−"),n("span",{class:"mord mtight"},"1")])])])])])])])])])])]),s("个节点)")]),n("li",null,"最后一层的节点, 尽量向左靠拢")],-1),v=a(`<p>那么要插入一个节点, 在最后一层从左到右找到空缺的为止插入即可.</p><p>可以看出, 在完全二叉树中添加节点的顺序是按照<strong>广度优先搜索</strong>的顺序来的.</p><p>那么, 问题就转换成了: 使用广度优先搜索, 找出第一个没有左/右子节点的节点, 将新节点插入.</p><h4 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h4><ol><li>构建Inserter: 广度优先搜索, 寻找没有左/右子节点的节点, 加入队列</li><li>插入节点: <ul><li>若插入位置为左节点, 返回父节点</li><li>若插入位置为右节点: <ol><li>将父节点从队列中删除(不满足入队条件)</li><li>左右子节点入队</li></ol></li></ul></li></ol><h3 id="_7-3-1-2-题解" tabindex="-1"><a class="header-anchor" href="#_7-3-1-2-题解" aria-hidden="true">#</a> 7.3.1.2 题解</h3><p>TC: O(n), 广度优先搜索遍历一遍二叉树</p><p>SC: O(n), 需要队列存储节点</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Val   <span class="token builtin">int</span>
    Left  <span class="token operator">*</span>TreeNode
    Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

<span class="token keyword">type</span> CBTInserter <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    queue <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode
    root  <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Constructor43</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> CBTInserter <span class="token punctuation">{</span>
    <span class="token comment">// 使用广度优先搜索, 查找不含左/右子节点的节点</span>
    queue <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
    <span class="token comment">// 广度优先搜索</span>
    <span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
       <span class="token comment">// 出列</span>
       node <span class="token operator">:=</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
       queue <span class="token operator">=</span> queue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
       <span class="token comment">// 添加左右节点</span>
       queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> CBTInserter<span class="token punctuation">{</span>
       queue<span class="token punctuation">:</span> queue<span class="token punctuation">,</span>
       root<span class="token punctuation">:</span>  root<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ci <span class="token operator">*</span>CBTInserter<span class="token punctuation">)</span> <span class="token function">Insert</span><span class="token punctuation">(</span>v <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    node <span class="token operator">:=</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> v<span class="token punctuation">}</span>
    <span class="token comment">// 获取最左边的有空缺的节点</span>
    parent <span class="token operator">:=</span> ci<span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> parent<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">// 插入左边</span>
       parent<span class="token punctuation">.</span>Left <span class="token operator">=</span> node
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 插入右边</span>
       parent<span class="token punctuation">.</span>Right <span class="token operator">=</span> node
       <span class="token comment">// 此时左右节点都存在, 出队</span>
       ci<span class="token punctuation">.</span>queue <span class="token operator">=</span> ci<span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
       <span class="token comment">// 子节点入队</span>
       ci<span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ci<span class="token punctuation">.</span>queue<span class="token punctuation">,</span> parent<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> parent<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> parent<span class="token punctuation">.</span>Val
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ci <span class="token operator">*</span>CBTInserter<span class="token punctuation">)</span> <span class="token function">GetRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
    <span class="token keyword">return</span> ci<span class="token punctuation">.</span>root
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-3-2-问题44-二叉树每层的最大值" tabindex="-1"><a class="header-anchor" href="#_7-3-2-问题44-二叉树每层的最大值" aria-hidden="true">#</a> 7.3.2 问题44: 二叉树每层的最大值</h2>`,10),m={href:"https://leetcode.cn/problems/hPov7L/",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>给定一棵二叉树的根节点 <code>root</code> ，请找出该二叉树中每一层的最大值。</p><p><strong>示例1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: root = [1,3,2,5,3,null,9]
输出: [1,3,9]
解释:
          1
         / \\
        3   2
       / \\   \\  
      5   3   9 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: root = [1,2,3]
输出: [1,3]
解释:
          1
         / \\
        2   3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: root = [1]
输出: [1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例4：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: root = [1,null,2]
输出: [1,2]
解释:      
           1 
            \\
             2     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例5：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: root = []
输出: []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>二叉树的节点个数的范围是 <code>[0,10^4]</code></li><li><code>-2^31 &lt;= Node.val &lt;= 2^31 - 1</code></li></ul>`,13),g=a(`<h3 id="_7-3-2-1-分析-题解" tabindex="-1"><a class="header-anchor" href="#_7-3-2-1-分析-题解" aria-hidden="true">#</a> 7.3.2.1 分析&amp;题解</h3><p>涉及到二叉树的层, 可以使用队列进行广度优先搜索.</p><h4 id="一个队列" tabindex="-1"><a class="header-anchor" href="#一个队列" aria-hidden="true">#</a> 一个队列</h4><p>使用一个队列, 需要引入两个变量<code>cur, next</code>, 分别对当前层和下一层节点进行计数:</p><ol><li>根节点入队, cur++; 根节点出队, cur--</li><li>子节点入队, next++</li><li>当cur为0, 表示当前层已经遍历完毕; 可找出当前层的最大值; 将next赋值给cur, 重新开始下一层.</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">largestValuesWithSingleQ</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	result <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token comment">// 边界条件</span>
	<span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> result
	<span class="token punctuation">}</span>

	<span class="token comment">// 当前和下一层的节点数</span>
	cur<span class="token punctuation">,</span> next <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
	<span class="token comment">// 每层最大节点</span>
	maxVal <span class="token operator">:=</span> math<span class="token punctuation">.</span>MinInt
	<span class="token comment">// 广度优先搜索</span>
	q <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	q <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
	cur<span class="token operator">++</span>
	<span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token comment">// 当前层节点出队</span>
		node <span class="token operator">:=</span> q<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
		q <span class="token operator">=</span> q<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
		maxVal <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>maxVal<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
		cur<span class="token operator">--</span>
		<span class="token comment">// 添加下一层</span>
		<span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			q <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
			next<span class="token operator">++</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			q <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
			next<span class="token operator">++</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 当前层结束</span>
		<span class="token keyword">if</span> cur <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			result <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> maxVal<span class="token punctuation">)</span>
			maxVal <span class="token operator">=</span> math<span class="token punctuation">.</span>MinInt
			cur <span class="token operator">=</span> next
			next <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="两个队列" tabindex="-1"><a class="header-anchor" href="#两个队列" aria-hidden="true">#</a> 两个队列</h4><p>将不同层的节点放入两个队列中.</p><ol><li>将当前层节点放入q1</li><li>下一层节点放入q2</li><li>当q1为空时, 当前层已经遍历完毕; q2赋值给q1, 重置q2, 开始新的一层</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">largestValuesWithDoubleQ</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	result <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token comment">// 边界</span>
	<span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> result
	<span class="token punctuation">}</span>
	<span class="token comment">// 双队列</span>
	q1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	q2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token comment">// 最大值</span>
	maxVal <span class="token operator">:=</span> math<span class="token punctuation">.</span>MinInt
	<span class="token comment">// 广度优先遍历</span>
	q1 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>q1<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>q1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token comment">// 出队</span>
		node <span class="token operator">:=</span> q1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
		q1 <span class="token operator">=</span> q1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
		maxVal <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>maxVal<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
		<span class="token comment">// 下一层入队</span>
		<span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			q2 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>q2<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			q2 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>q2<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 当前层结束</span>
		<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>q1<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			result <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> maxVal<span class="token punctuation">)</span>
			maxVal <span class="token operator">=</span> math<span class="token punctuation">.</span>MinInt
			<span class="token comment">// 开始下一层</span>
			q1<span class="token punctuation">,</span> q2 <span class="token operator">=</span> q2<span class="token punctuation">,</span> q1
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-3-3-问题45-二叉树最底层左边的值" tabindex="-1"><a class="header-anchor" href="#_7-3-3-问题45-二叉树最底层左边的值" aria-hidden="true">#</a> 7.3.3 问题45: 二叉树最底层左边的值</h2>`,11),h={href:"https://leetcode.cn/problems/LwUNpT/",target:"_blank",rel:"noopener noreferrer"},f=a(`<blockquote><p>给定一个二叉树的 <strong>根节点</strong> <code>root</code>，请找出该二叉树的 <strong>最底层 最左边</strong> 节点的值。</p><p>假设二叉树中至少有一个节点。</p><p><strong>示例 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/14/tree1.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: root = [2,1,3]
输出: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/14/tree2.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [1,2,3,4,null,5,6,null,null,7]
输出: 7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示:</strong></p><ul><li>二叉树的节点个数的范围是 <code>[1,10^4]</code></li><li><code>-2^31 &lt;= Node.val &lt;= 2^31 - 1</code></li></ul></blockquote><h3 id="_7-3-3-1-分析-题解" tabindex="-1"><a class="header-anchor" href="#_7-3-3-1-分析-题解" aria-hidden="true">#</a> 7.3.3.1 分析&amp;题解</h3><p>和寻找每层最大值类似, 涉及到层需要使用广度优先遍历, 又因为需要统计每层那么可以使用双队列来解决.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">findBottomLeftValue</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	bottomVal <span class="token operator">:=</span> root<span class="token punctuation">.</span>Val
	<span class="token comment">// 广度优先</span>
	q1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 当前层</span>
	q2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 下一层</span>
	q1 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>q1<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>q1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token comment">// 出队</span>
		node <span class="token operator">:=</span> q1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
		q1 <span class="token operator">=</span> q1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
		<span class="token comment">// 下一层入队</span>
		<span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			q2 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>q2<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			q2 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>q2<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 当前层结束</span>
		<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>q1<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			<span class="token comment">// 下一层</span>
			q1<span class="token punctuation">,</span> q2 <span class="token operator">=</span> q2<span class="token punctuation">,</span> q1
			<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>q1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
				<span class="token comment">// 下一层最左</span>
				bottomVal <span class="token operator">=</span> q1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Val
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> bottomVal
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-3-4-问题46-二叉树的右侧视图" tabindex="-1"><a class="header-anchor" href="#_7-3-4-问题46-二叉树的右侧视图" aria-hidden="true">#</a> 7.3.4 问题46: 二叉树的右侧视图</h2>`,5),q={href:"https://leetcode.cn/problems/WNC0Lk/",target:"_blank",rel:"noopener noreferrer"},x=a(`<blockquote><p>给定一个二叉树的 <strong>根节点</strong> <code>root</code>，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。</p><p><strong>示例 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/14/tree.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [1,2,3,null,5,null,4]
输出: [1,3,4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [1,null,3]
输出: [1,3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: []
输出: []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示:</strong></p><ul><li>二叉树的节点个数的范围是 <code>[0,100]</code></li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul></blockquote><h3 id="_7-3-4-1-分析-题解" tabindex="-1"><a class="header-anchor" href="#_7-3-4-1-分析-题解" aria-hidden="true">#</a> 7.3.4.1 分析&amp;题解</h3><p>右侧视图实际上是寻找每层最右侧的节点, 那么使用双队列+广度优先搜索即可解决.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">rightSideView</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	result <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token comment">// 边界</span>
	<span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> result
	<span class="token punctuation">}</span>

	<span class="token comment">// 广度优先</span>
	q1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 当前层</span>
	q2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 下一层</span>
	q1 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>q1<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>q1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token comment">// 出队</span>
		node <span class="token operator">:=</span> q1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
		q1 <span class="token operator">=</span> q1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
		<span class="token comment">// 下层入队</span>
		<span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			q2 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>q2<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			q2 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>q2<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 当前层结束</span>
		<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>q1<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			<span class="token comment">// 最右侧节点</span>
			result <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
			<span class="token comment">// 开始下一层</span>
			q1<span class="token punctuation">,</span> q2 <span class="token operator">=</span> q2<span class="token punctuation">,</span> q1
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,5),_={href:"https://book.douban.com/subject/35543447/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees",target:"_blank",rel:"noopener noreferrer"};function w(T,N){const t=c("ExternalLinkIcon");return o(),l("div",null,[u,n("p",null,[n("a",r,[s("LCR 043. 完全二叉树插入器"),e(t)])]),d,k,v,n("blockquote",null,[n("p",null,[n("a",m,[s("LCR 044. 在每个树行中找最大值"),e(t)])]),b]),g,n("p",null,[n("a",h,[s("LCR 045. 找树左下角的值"),e(t)])]),f,n("p",null,[n("a",q,[s("LCR 046. 二叉树的右视图"),e(t)])]),x,n("ol",null,[n("li",null,[n("a",_,[s("剑指Offer（专项突破版）"),e(t)])]),n("li",null,[n("a",y,[s("Binary Tree"),e(t)]),s(" wiki")])])])}const L=p(i,[["render",w],["__file","07.3.html.vue"]]);export{L as default};
