import{_ as o,Z as i,$ as r,a0 as s,a1 as n,a2 as e,a4 as t,H as c}from"./framework-d03928c9.js";const p={},l={href:"https://en.wikipedia.org/wiki/Computer_science",target:"_blank",rel:"noopener noreferrer"},u=s("strong",null,"trie",-1),d={href:"https://en.wikipedia.org/wiki/Help:IPA/English",target:"_blank",rel:"noopener noreferrer"},k={href:"https://en.wikipedia.org/wiki/Help:IPA/English",target:"_blank",rel:"noopener noreferrer"},v=s("strong",null,"digital tree",-1),b=s("strong",null,"prefix tree",-1),h={href:"https://en.wikipedia.org/wiki/M-ary_tree",target:"_blank",rel:"noopener noreferrer"},m=s("em",null,"k",-1),_={href:"https://en.wikipedia.org/wiki/Search_tree",target:"_blank",rel:"noopener noreferrer"},f={href:"https://en.wikipedia.org/wiki/Tree_(data_structure)",target:"_blank",rel:"noopener noreferrer"},g={href:"https://en.wikipedia.org/wiki/Data_structure",target:"_blank",rel:"noopener noreferrer"},w={href:"https://en.wikipedia.org/wiki/String_(computer_science)",target:"_blank",rel:"noopener noreferrer"},q={href:"https://en.wikipedia.org/wiki/Character_(computing)",target:"_blank",rel:"noopener noreferrer"},y=s("p",null,"前缀树, 又称字典树, 用树状结构来表示字典中的所有单词; 除根节点外, 每个节点表示一个字母, 单词则由路径表示.",-1),T=s("h2",{id:"_10-1-1-实现前缀树",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_10-1-1-实现前缀树","aria-hidden":"true"},"#"),n(" 10.1.1 实现前缀树")],-1),x={href:"https://leetcode.cn/problems/QC3q1f/",target:"_blank",rel:"noopener noreferrer"},W={href:"https://baike.baidu.com/item/%E5%AD%97%E5%85%B8%E6%A0%91/9825209?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},E=s("strong",null,"前缀树",-1),S=t(`<p>请你实现 Trie 类：</p><ul><li><code>Trie()</code> 初始化前缀树对象。</li><li><code>void insert(String word)</code> 向前缀树中插入字符串 <code>word</code> 。</li><li><code>boolean search(String word)</code> 如果字符串 <code>word</code> 在前缀树中，返回 <code>true</code>（即，在检索之前已经插入）；否则，返回 <code>false</code> 。</li><li><code>boolean startsWith(String prefix)</code> 如果之前已经插入的字符串 <code>word</code> 的前缀之一为 <code>prefix</code> ，返回 <code>true</code> ；否则，返回 <code>false</code> 。</li></ul><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入
inputs = [&quot;Trie&quot;, &quot;insert&quot;, &quot;search&quot;, &quot;search&quot;, &quot;startsWith&quot;, &quot;insert&quot;, &quot;search&quot;]
inputs = [[], [&quot;apple&quot;], [&quot;apple&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;]]
输出
[null, null, true, false, true, null, true]

解释
Trie trie = new Trie();
trie.insert(&quot;apple&quot;);
trie.search(&quot;apple&quot;);   // 返回 True
trie.search(&quot;app&quot;);     // 返回 False
trie.startsWith(&quot;app&quot;); // 返回 True
trie.insert(&quot;app&quot;);
trie.search(&quot;app&quot;);     // 返回 True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= word.length, prefix.length &lt;= 2000</code></li><li><code>word</code> 和 <code>prefix</code> 仅由小写英文字母组成</li><li><code>insert</code>、<code>search</code> 和 <code>startsWith</code> 调用次数 <strong>总计</strong> 不超过 <code>3 * 10^4</code> 次</li></ul>`,6),C=t(`<h3 id="_10-1-1-1-分析" tabindex="-1"><a class="header-anchor" href="#_10-1-1-1-分析" aria-hidden="true">#</a> 10.1.1.1 分析</h3><p>因为单词仅由26个字母组成, 那么每个节点子子节点数量最大为26, 可以用数组表示<code>[26]*Trie</code>. 还需要一个变量<code>isWord</code>表示是否是完整单词.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Trie <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    children <span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token operator">*</span>Trie
    isWord <span class="token builtin">bool</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>search</strong></p><p>查找操作从根节点出发, 寻找每个字母是否在前缀树路径中存在:</p><ol><li>若有字母不在路径中, 返回false</li><li>若匹配到完整路径, 结果取决于最后一个节点的<code>isWord</code>, 表示完整单词是否存在.</li></ol><p><strong>startWith</strong></p><p>和<code>search</code>类似, 但是匹配到最后一个字母时, 无需判断<code>isWord</code>.</p><h3 id="_10-1-1-2-题解" tabindex="-1"><a class="header-anchor" href="#_10-1-1-2-题解" aria-hidden="true">#</a> 10.1.1.2 题解</h3><p>单词长度为n, <code>insert</code>, <code>search</code>,<code>startWith</code> 时间复杂度均为 O(n)</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Trie <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	children <span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token operator">*</span>Trie
	isWord <span class="token builtin">bool</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Trie <span class="token punctuation">{</span>
	<span class="token keyword">return</span> Trie<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Trie<span class="token punctuation">)</span> <span class="token function">Insert</span><span class="token punctuation">(</span>word <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	cur <span class="token operator">:=</span> t
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> word <span class="token punctuation">{</span>
		c <span class="token operator">-=</span> <span class="token char">&#39;a&#39;</span>
		<span class="token keyword">if</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>Trie<span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
	cur<span class="token punctuation">.</span>isWord <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Trie<span class="token punctuation">)</span> <span class="token function">Search</span><span class="token punctuation">(</span>word <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	cur <span class="token operator">:=</span> t
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> word <span class="token punctuation">{</span>
		c <span class="token operator">-=</span> <span class="token char">&#39;a&#39;</span>
		<span class="token keyword">if</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>
		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> cur<span class="token punctuation">.</span>isWord
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Trie<span class="token punctuation">)</span> <span class="token function">StartsWith</span><span class="token punctuation">(</span>prefix <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	cur <span class="token operator">:=</span> t
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> prefix <span class="token punctuation">{</span>
		c <span class="token operator">-=</span> <span class="token char">&#39;a&#39;</span>
		<span class="token keyword">if</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>
		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,12),I={href:"https://book.douban.com/subject/35543447/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://en.wikipedia.org/wiki/Trie",target:"_blank",rel:"noopener noreferrer"};function B(N,V){const a=c("ExternalLinkIcon");return i(),r("div",null,[s("blockquote",null,[s("p",null,[n("In "),s("a",l,[n("computer science"),e(a)]),n(", a "),u,n(" ("),s("a",d,[n("/ˈtriː/"),e(a)]),n(", "),s("a",k,[n("/ˈtraɪ/"),e(a)]),n("), also called "),v,n(" or "),b,n(", is a type of "),s("a",h,[m,n("-ary"),e(a)]),n(),s("a",_,[n("search tree"),e(a)]),n(", a "),s("a",f,[n("tree"),e(a)]),n(),s("a",g,[n("data structure"),e(a)]),n(" used for locating specific keys from within a set. These keys are most often "),s("a",w,[n("strings"),e(a)]),n(", with links between nodes defined not by the entire key, but by individual "),s("a",q,[n("characters"),e(a)]),n(".")])]),y,T,s("p",null,[s("a",x,[n("LCR 062. 实现 Trie (前缀树)"),e(a)])]),s("blockquote",null,[s("p",null,[s("strong",null,[s("a",W,[n("Trie"),e(a)])]),n('（发音类似 "try"）或者说 '),E,n(" 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。")]),S]),C,s("ol",null,[s("li",null,[s("a",I,[n("剑指Offer（专项突破版）"),e(a)])]),s("li",null,[s("a",A,[n("Trie"),e(a)]),n(" wiki")])])])}const L=o(p,[["render",B],["__file","10.1.html.vue"]]);export{L as default};
