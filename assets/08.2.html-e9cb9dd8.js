import{_ as p,Z as o,$ as c,a0 as n,a1 as s,a2 as t,a3 as e,H as l}from"./framework-09afcf0b.js";const i={},u=e(`<p>二叉树的深度优先搜索可分为:</p><ul><li>前序遍历</li><li>中序遍历</li><li>后序遍历</li></ul><h2 id="_8-2-1-前序遍历" tabindex="-1"><a class="header-anchor" href="#_8-2-1-前序遍历" aria-hidden="true">#</a> 8.2.1 前序遍历</h2><p>前序遍历顺序:</p><ol><li>根节点</li><li>左子树</li><li>右子树</li></ol><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">preorderTraversal</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">dfsPreorderRecursively</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token operator">&amp;</span>res<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">dfsPreorderRecursively</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> res <span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> root <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token operator">*</span>res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token operator">*</span>res<span class="token punctuation">,</span> root<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
        <span class="token function">dfsPreorderRecursively</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
        <span class="token function">dfsPreorderRecursively</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">preorderTraversal</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment">// 栈</span>
    st <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment">// 当前遍历节点</span>
    cur <span class="token operator">:=</span> root
    <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">||</span> <span class="token function">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token comment">// 根</span>
            res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> cur<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
            <span class="token comment">// 左子树</span>
            st <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>st<span class="token punctuation">,</span> cur<span class="token punctuation">)</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Left
        <span class="token punctuation">}</span>
        <span class="token comment">// 右子树</span>
        cur <span class="token operator">=</span> st<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        st <span class="token operator">=</span> st<span class="token punctuation">[</span><span class="token number">0</span> <span class="token punctuation">:</span> <span class="token function">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Right
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-2-中序遍历" tabindex="-1"><a class="header-anchor" href="#_8-2-2-中序遍历" aria-hidden="true">#</a> 8.2.2 中序遍历</h2><p>中序遍历的顺序:</p><ol><li>左子树</li><li>根节点</li><li>右子树</li></ol><h3 id="递归-1" tabindex="-1"><a class="header-anchor" href="#递归-1" aria-hidden="true">#</a> 递归</h3><p>优点: 代码逻辑简单</p><p>缺点:</p><ol><li>若二叉树深度过大, 则会导致栈溢出</li><li>代码太简单</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token function">dfsInorderRecursively</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token operator">&amp;</span>res<span class="token punctuation">)</span>
	<span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">dfsInorderRecursively</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> res <span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> root <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">dfsInorderRecursively</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
		<span class="token operator">*</span>res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token operator">*</span>res<span class="token punctuation">,</span> root<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
		<span class="token function">dfsInorderRecursively</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代-1" tabindex="-1"><a class="header-anchor" href="#迭代-1" aria-hidden="true">#</a> 迭代</h3><p>基于栈的后进先出的规则进行迭代.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 栈</span>
    st <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment">// 当前节点</span>
    cur <span class="token operator">:=</span> root
    <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">||</span> <span class="token function">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token comment">// 左子树</span>
        <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            st <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>st<span class="token punctuation">,</span> cur<span class="token punctuation">)</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Left
        <span class="token punctuation">}</span>
        <span class="token comment">// 根</span>
        cur <span class="token operator">=</span> st<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        st <span class="token operator">=</span> st<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> cur<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
        <span class="token comment">// 右子树</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Right
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-3-后序遍历" tabindex="-1"><a class="header-anchor" href="#_8-2-3-后序遍历" aria-hidden="true">#</a> 8.2.3 后序遍历</h2><p>后序遍历顺序:</p><ol><li>左子树</li><li>右子树</li><li>根节点</li></ol><h3 id="递归-2" tabindex="-1"><a class="header-anchor" href="#递归-2" aria-hidden="true">#</a> 递归</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">postorderTraversalWithRecursion</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token function">dfsInorderRecursively</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token operator">&amp;</span>res<span class="token punctuation">)</span>
	<span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">dfsPostorderRecursively</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> res <span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> root <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">dfsInorderRecursively</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
		<span class="token function">dfsInorderRecursively</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
		<span class="token operator">*</span>res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token operator">*</span>res<span class="token punctuation">,</span> root<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代-2" tabindex="-1"><a class="header-anchor" href="#迭代-2" aria-hidden="true">#</a> 迭代</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment">// stack</span>
    st <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment">// current node</span>
    cur <span class="token operator">:=</span> root
    <span class="token comment">// previous node</span>
    <span class="token keyword">var</span> prev <span class="token operator">*</span>TreeNode
    <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">||</span> <span class="token function">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token comment">// left tree</span>
        <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            st <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>st<span class="token punctuation">,</span> cur<span class="token punctuation">)</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Left
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> st<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> cur<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>Right <span class="token operator">!=</span> prev <span class="token punctuation">{</span>
            <span class="token comment">// right tree</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Right
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// root</span>
            res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> cur<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
            st <span class="token operator">=</span> st<span class="token punctuation">[</span><span class="token punctuation">:</span> <span class="token function">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
            prev <span class="token operator">=</span> cur
            cur <span class="token operator">=</span> <span class="token boolean">nil</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-4-问题47-二叉树剪枝" tabindex="-1"><a class="header-anchor" href="#_8-2-4-问题47-二叉树剪枝" aria-hidden="true">#</a> 8.2.4 问题47: 二叉树剪枝</h2>`,28),r={href:"https://leetcode.cn/problems/pOCWxh/",target:"_blank",rel:"noopener noreferrer"},d=e(`<blockquote><p>给定一个二叉树 <strong>根节点</strong> <code>root</code> ，树的每个节点的值要么是 <code>0</code>，要么是 <code>1</code>。请剪除该二叉树中所有节点的值为 <code>0</code> 的子树。</p><p>节点 <code>node</code> 的子树为 <code>node</code> 本身，以及所有 <code>node</code> 的后代。</p><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [1,null,0,0,1]
输出: [1,null,0,null,1] 
解释: 
只有红色节点满足条件“所有不包含 1 的子树”。
右图为返回的答案。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [1,0,1,0,0,0,1]
输出: [1,null,1,null,1]
解释: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [1,1,0,1,1,0,1,0]
输出: [1,1,0,1,1,null,1]
解释: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示:</strong></p><ul><li>二叉树的节点个数的范围是 <code>[1,200]</code></li><li>二叉树节点的值只会是 <code>0</code> 或 <code>1</code></li></ul></blockquote><h3 id="_8-2-4-1-分析-题解" tabindex="-1"><a class="header-anchor" href="#_8-2-4-1-分析-题解" aria-hidden="true">#</a> 8.2.4.1 分析&amp;题解</h3><p>如果要删除一个全是0的子树, 就需要判断左子树和右子树以及当前节点是否全为0.</p><p>这个顺序和后序遍历相同, 那么可以使用后序遍历的递归来解决.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">pruneTree</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 剪除左子树</span>
    root<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token function">pruneTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
    <span class="token comment">// 剪除右子树</span>
    root<span class="token punctuation">.</span>Right <span class="token operator">=</span> <span class="token function">pruneTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
    <span class="token comment">// 剪除当前树</span>
    <span class="token keyword">if</span> root<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>Val <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-5-问题48-序列化和反序列化二叉树" tabindex="-1"><a class="header-anchor" href="#_8-2-5-问题48-序列化和反序列化二叉树" aria-hidden="true">#</a> 8.2.5 问题48: 序列化和反序列化二叉树</h2>`,6),k={href:"https://leetcode.cn/problems/h54YBf/",target:"_blank",rel:"noopener noreferrer"},v=e(`<p>序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。</p><p>请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = []
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [1]
输出：[1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [1,2]
输出：[1,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p>`,12),m={href:"https://leetcode.cn/faq/#binary-tree",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,[s("树中结点数在范围 "),n("code",null,"[0, 10^4]"),s(" 内")],-1),g=n("li",null,[n("code",null,"-1000 <= Node.val <= 1000")],-1),f=e(`<h3 id="_8-2-5-1-分析-题解" tabindex="-1"><a class="header-anchor" href="#_8-2-5-1-分析-题解" aria-hidden="true">#</a> 8.2.5.1 分析&amp;题解</h3><p>使用前序遍历来进行序列化和反序列化.</p><p>序列化: 使用前序遍历递归, 将数值和nil转化成字符串, 使用逗号<code>,</code>拼接</p><p>反序列化: 使用前序遍历递归, 将字符串转化成二叉树</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Codec <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Codec <span class="token punctuation">{</span>
     <span class="token keyword">return</span> Codec<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Serializes a tree to a single string.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Codec<span class="token punctuation">)</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> f <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">string</span>
    f <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> sb strings<span class="token punctuation">.</span>Builder
      <span class="token comment">// 递归出口</span>
      <span class="token keyword">if</span> node <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;null&quot;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// root </span>
      rootStr <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
      <span class="token comment">// left </span>
      leftStr <span class="token operator">:=</span> <span class="token function">f</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
      <span class="token comment">// right </span>
      rightStr <span class="token operator">:=</span> <span class="token function">f</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>

      sb<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>rootStr<span class="token punctuation">)</span>
      sb<span class="token punctuation">.</span><span class="token function">WriteByte</span><span class="token punctuation">(</span><span class="token char">&#39;,&#39;</span><span class="token punctuation">)</span>
      sb<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>leftStr<span class="token punctuation">)</span>
      sb<span class="token punctuation">.</span><span class="token function">WriteByte</span><span class="token punctuation">(</span><span class="token char">&#39;,&#39;</span><span class="token punctuation">)</span>
      sb<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>rightStr<span class="token punctuation">)</span>

      <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Deserializes your encoded data to tree.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Codec<span class="token punctuation">)</span> <span class="token function">deserialize</span><span class="token punctuation">(</span>data <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>    
    strs <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>strs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">dfs</span><span class="token punctuation">(</span>strs <span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span><span class="token operator">*</span>strs<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// node val</span>
  str <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">*</span>strs<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token operator">*</span>strs <span class="token operator">=</span><span class="token punctuation">(</span><span class="token operator">*</span>strs<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> str <span class="token operator">==</span> <span class="token string">&quot;null&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
  <span class="token punctuation">}</span>

  val<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
  <span class="token comment">// root node</span>
  root <span class="token operator">:=</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> val<span class="token punctuation">}</span>
  <span class="token comment">// left tree</span>
  root<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span>
  <span class="token comment">// right tree</span>
  root<span class="token punctuation">.</span>Right <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span>

  <span class="token keyword">return</span> root
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在函数内使用匿名递归函数.</p><h2 id="_8-2-6-问题49-从根节点到叶节点的路径数字之和" tabindex="-1"><a class="header-anchor" href="#_8-2-6-问题49-从根节点到叶节点的路径数字之和" aria-hidden="true">#</a> 8.2.6 问题49: 从根节点到叶节点的路径数字之和</h2>`,7),h={href:"https://leetcode.cn/problems/3Etpl5/",target:"_blank",rel:"noopener noreferrer"},x=e(`<blockquote><p>给定一个二叉树的根节点 <code>root</code> ，树中每个节点都存放有一个 <code>0</code> 到 <code>9</code> 之间的数字。</p><p>每条从根节点到叶节点的路径都代表一个数字：</p><ul><li>例如，从根节点到叶节点的路径 <code>1 -&gt; 2 -&gt; 3</code> 表示数字 <code>123</code> 。</li></ul><p>计算从根节点到叶节点生成的 <strong>所有数字之和</strong> 。</p><p><strong>叶节点</strong> 是指没有子节点的节点。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [1,2,3]
输出：25
解释：
从根到叶子节点路径 1-&gt;2 代表数字 12
从根到叶子节点路径 1-&gt;3 代表数字 13
因此，数字总和 = 12 + 13 = 25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [4,9,0,5,1]
输出：1026
解释：
从根到叶子节点路径 4-&gt;9-&gt;5 代表数字 495
从根到叶子节点路径 4-&gt;9-&gt;1 代表数字 491
从根到叶子节点路径 4-&gt;0 代表数字 40
因此，数字总和 = 495 + 491 + 40 = 1026
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>树中节点的数目在范围 <code>[1, 1000]</code> 内</li><li><code>0 &lt;= Node.val &lt;= 9</code></li><li>树的深度不超过 <code>10</code></li></ul></blockquote><h3 id="_8-2-6-分析-题解" tabindex="-1"><a class="header-anchor" href="#_8-2-6-分析-题解" aria-hidden="true">#</a> 8.2.6 分析&amp;题解</h3><p>路径问题一般使用深度优先搜索, 此问题使用前序遍历.</p><p>对于当前路径表示的数字 <code>path</code>, 下一路径所表示的数字可以由公式 <code>path = path*10 + nodeVal </code>.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">sumNumbers</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// 递归</span>
    <span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> path <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// 递归出口</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    path <span class="token operator">=</span> path<span class="token operator">*</span><span class="token number">10</span> <span class="token operator">+</span> root<span class="token punctuation">.</span>Val
    <span class="token comment">// 叶节点</span>
    <span class="token keyword">if</span> root<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> path
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> path<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-7-问题50-向下路径点之和" tabindex="-1"><a class="header-anchor" href="#_8-2-7-问题50-向下路径点之和" aria-hidden="true">#</a> 8.2.7 问题50: 向下路径点之和</h2>`,6),y={href:"https://leetcode.cn/problems/6eUYwP/",target:"_blank",rel:"noopener noreferrer"},w=e(`<blockquote><p>给定一个二叉树的根节点 <code>root</code> ，和一个整数 <code>targetSum</code> ，求该二叉树里节点值之和等于 <code>targetSum</code> 的 <strong>路径</strong> 的数目。</p><p><strong>路径</strong> 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示:</strong></p><ul><li>二叉树的节点个数的范围是 <code>[0,1000]</code></li><li><code>-10^9 &lt;= Node.val &lt;= 10^9</code></li><li><code>-1000 &lt;= targetSum &lt;= 1000</code></li></ul></blockquote><h3 id="_8-2-7-1-分析-题解" tabindex="-1"><a class="header-anchor" href="#_8-2-7-1-分析-题解" aria-hidden="true">#</a> 8.2.7.1 分析&amp;题解</h3><p>此问题实际上是路径和与两数之和的复合问题. 需要使用前序遍历和哈希表来解决.</p><p>流程:</p><ol><li>构建哈希表(路径和, 出现次数); 初始值 (0, 1)</li><li>进行前序遍历: <ol><li>当前路径中, <code>path-sum</code> 出现的次数;</li><li>左子树路径中出现的次数</li><li>右子树路径中出现的次数</li></ol></li><li>总次数为三条路径次数之和</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">pathSum</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> targetSum <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token comment">// 初始值</span>
	m<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
	<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> m<span class="token punctuation">,</span> targetSum<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> sum<span class="token punctuation">,</span> path <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token comment">// 递归出口</span>
	<span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">0</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 当前路径和</span>
	path <span class="token operator">+=</span> root<span class="token punctuation">.</span>Val
	<span class="token comment">// 寻找目标路径个数</span>
	cnt <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> m<span class="token punctuation">[</span>path<span class="token operator">-</span>sum<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		cnt <span class="token operator">=</span> v
	<span class="token punctuation">}</span>

	<span class="token comment">// 记录次数</span>
	m<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token operator">++</span>

	<span class="token comment">// 左右子树</span>
	cnt <span class="token operator">+=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> m<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
	cnt <span class="token operator">+=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> m<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
	
	<span class="token comment">// 去除已经统计的路径</span>
	m<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token operator">--</span>
	
	<span class="token keyword">return</span> cnt
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-8-问题51-节点之和的最大路径" tabindex="-1"><a class="header-anchor" href="#_8-2-8-问题51-节点之和的最大路径" aria-hidden="true">#</a> 8.2.8 问题51: 节点之和的最大路径</h2>`,7),_={href:"https://leetcode.cn/problems/jC7MId/",target:"_blank",rel:"noopener noreferrer"},T=e(`<blockquote><p><strong>路径</strong> 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 <strong>至多出现一次</strong> 。该路径 <strong>至少包含一个</strong> 节点，且不一定经过根节点。</p><p><strong>路径和</strong> 是路径中各节点值的总和。</p><p>给定一个二叉树的根节点 <code>root</code> ，返回其 <strong>最大路径和</strong>，即所有路径上节点值之和的最大值。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -&gt; 1 -&gt; 3 ，路径和为 2 + 1 + 3 = 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -&gt; 20 -&gt; 7 ，路径和为 15 + 20 + 7 = 42
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>树中节点数目范围是 <code>[1, 3 * 10^4]</code></li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul></blockquote><h3 id="_8-2-8-1-分析-题解" tabindex="-1"><a class="header-anchor" href="#_8-2-8-1-分析-题解" aria-hidden="true">#</a> 8.2.8.1 分析&amp;题解</h3><p>路径可能经过左子树或右子树而不经过根节点, 那么先求出左右子树的路径之和, 再求经过根节点的路径之和, 三者中最大的就是树中最大的路径和.</p><p>先左右子树再根节点, 所以采用后序遍历解决.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">maxPathSum</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	maxSum <span class="token operator">:=</span> math<span class="token punctuation">.</span>MinInt
	<span class="token comment">// 递归函数</span>
	<span class="token keyword">var</span> dfs <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">int</span>
	dfs <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> node <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token number">0</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 计算左右子树最大路径和</span>
		leftMax <span class="token operator">:=</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
		rightMax <span class="token operator">:=</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

		<span class="token comment">// 当前路径和</span>
		path <span class="token operator">:=</span> node<span class="token punctuation">.</span>Val <span class="token operator">+</span> leftMax <span class="token operator">+</span> rightMax

		<span class="token comment">// 更新最大</span>
		maxSum <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>maxSum<span class="token punctuation">,</span> path<span class="token punctuation">)</span>

		<span class="token keyword">return</span> node<span class="token punctuation">.</span>Val <span class="token operator">+</span> <span class="token function">max</span><span class="token punctuation">(</span>leftMax<span class="token punctuation">,</span> rightMax<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

	<span class="token keyword">return</span> maxSum
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,6),N={href:"https://book.douban.com/subject/35543447/",target:"_blank",rel:"noopener noreferrer"};function R(S,L){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",r,[s("LCR 047. 二叉树剪枝"),t(a)])]),d,n("p",null,[n("a",k,[s("LCR 048. 二叉树的序列化与反序列化"),t(a)])]),n("blockquote",null,[v,n("ul",null,[n("li",null,[s("输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 "),n("a",m,[s("LeetCode 序列化二叉树的格式"),t(a)]),s("。你并非必须采取这种方式，也可以采用其他的方法解决这个问题。")]),b,g])]),f,n("p",null,[n("a",h,[s("LCR 049. 求根节点到叶节点数字之和"),t(a)])]),x,n("p",null,[n("a",y,[s("LCR 050. 路径总和 III"),t(a)])]),w,n("p",null,[n("a",_,[s("LCR 051. 二叉树中的最大路径和"),t(a)])]),T,n("ol",null,[n("li",null,[n("a",N,[s("剑指Offer（专项突破版）"),t(a)])])])])}const q=p(i,[["render",R],["__file","08.2.html.vue"]]);export{q as default};
