import{_ as o,Z as p,$ as c,a0 as n,a1 as s,a2 as e,a3 as t,H as i}from"./framework-dee406ed.js";const l={},u=n("p",null,"前缀树主要用于字符串查找, 时间复杂度O(k), k为字符串长度.",-1),r=n("p",null,"和哈希表不同, 哈希表需要完整的字符串才能查找, 而前缀树只需要知道前缀就可进行查找.",-1),d=n("h2",{id:"_10-2-1-问题63-替换单词",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_10-2-1-问题63-替换单词","aria-hidden":"true"},"#"),s(" 10.2.1 问题63: 替换单词")],-1),k={href:"https://leetcode.cn/problems/UhWRSj/",target:"_blank",rel:"noopener noreferrer"},v=t(`<blockquote><p>在英语中，有一个叫做 <code>词根(root)</code> 的概念，它可以跟着其他一些词组成另一个较长的单词——我们称这个词为 <code>继承词(successor)</code>。例如，词根<code>an</code>，跟随着单词 <code>other</code>(其他)，可以形成新的单词 <code>another</code>(另一个)。</p><p>现在，给定一个由许多词根组成的词典和一个句子，需要将句子中的所有<code>继承词</code>用<code>词根</code>替换掉。如果<code>继承词</code>有许多可以形成它的<code>词根</code>，则用最短的词根替换它。</p><p>需要输出替换之后的句子。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：dictionary = [&quot;cat&quot;,&quot;bat&quot;,&quot;rat&quot;], sentence = &quot;the cattle was rattled by the battery&quot;
输出：&quot;the cat was rat by the bat&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：dictionary = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;], sentence = &quot;aadsfasf absbs bbab cadsfafs&quot;
输出：&quot;a a b c&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：dictionary = [&quot;a&quot;, &quot;aa&quot;, &quot;aaa&quot;, &quot;aaaa&quot;], sentence = &quot;a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa&quot;
输出：&quot;a a a a a a a a bbb baba a&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：dictionary = [&quot;catt&quot;,&quot;cat&quot;,&quot;bat&quot;,&quot;rat&quot;], sentence = &quot;the cattle was rattled by the battery&quot;
输出：&quot;the cat was rat by the bat&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 5：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：dictionary = [&quot;ac&quot;,&quot;ab&quot;], sentence = &quot;it is abnormal that this solution is accepted&quot;
输出：&quot;it is ab that this solution is ac&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= dictionary.length &lt;= 1000</code></li><li><code>1 &lt;= dictionary[i].length &lt;= 100</code></li><li><code>dictionary[i]</code> 仅由小写字母组成。</li><li><code>1 &lt;= sentence.length &lt;= 10^6</code></li><li><code>sentence</code> 仅由小写字母和空格组成。</li><li><code>sentence</code> 中单词的总量在范围 <code>[1, 1000]</code> 内。</li><li><code>sentence</code> 中每个单词的长度在范围 <code>[1, 1000]</code> 内。</li><li><code>sentence</code> 中单词之间由一个空格隔开。</li><li><code>sentence</code> 没有前导或尾随空格。</li></ul></blockquote><h3 id="_10-2-1-1-分析-题解" tabindex="-1"><a class="header-anchor" href="#_10-2-1-1-分析-题解" aria-hidden="true">#</a> 10.2.1.1 分析&amp;题解</h3><ol><li>使用输入的字典构造前缀树</li><li>遍历字符串的单词, 判断单词前缀是否在前缀树中, 若是, 则用前缀替换</li><li>返回新的字符串</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">replaceWords</span><span class="token punctuation">(</span>dictionary <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> sentence <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token comment">// 构建前缀树</span>
	trie <span class="token operator">:=</span> <span class="token function">buildTrie</span><span class="token punctuation">(</span>dictionary<span class="token punctuation">)</span>

	<span class="token comment">// 替换单词</span>
	<span class="token keyword">var</span> sb strings<span class="token punctuation">.</span>Builder
	sb<span class="token punctuation">.</span><span class="token function">Grow</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">)</span>
	words <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>sentence<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> w <span class="token operator">:=</span> <span class="token keyword">range</span> words <span class="token punctuation">{</span>
		<span class="token comment">// 寻找前缀</span>
		prefix <span class="token operator">:=</span> <span class="token function">findPrefix</span><span class="token punctuation">(</span>trie<span class="token punctuation">,</span> w<span class="token punctuation">)</span>
		<span class="token keyword">if</span> prefix <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
			w <span class="token operator">=</span> prefix
		<span class="token punctuation">}</span>

		sb<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span>
		<span class="token keyword">if</span> i <span class="token operator">!=</span> <span class="token function">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
			sb<span class="token punctuation">.</span><span class="token function">WriteByte</span><span class="token punctuation">(</span><span class="token char">&#39; &#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">findPrefix</span><span class="token punctuation">(</span>root <span class="token operator">*</span>Trie<span class="token punctuation">,</span> w <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	prefix <span class="token operator">:=</span> <span class="token string">&quot;&quot;</span>

	<span class="token keyword">var</span> sb strings<span class="token punctuation">.</span>Builder
	sb<span class="token punctuation">.</span><span class="token function">Grow</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">)</span>
	cur <span class="token operator">:=</span> root
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> w <span class="token punctuation">{</span>
		ch <span class="token operator">:=</span> c
		c <span class="token operator">-=</span> <span class="token char">&#39;a&#39;</span>
		<span class="token comment">// 已找到或者不存在</span>
		<span class="token keyword">if</span> cur<span class="token punctuation">.</span>isWord <span class="token operator">||</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		sb<span class="token punctuation">.</span><span class="token function">WriteRune</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>

		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 已找到</span>
	<span class="token keyword">if</span> cur<span class="token punctuation">.</span>isWord <span class="token punctuation">{</span>
		prefix <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> prefix
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">buildTrie</span><span class="token punctuation">(</span>dic <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Trie <span class="token punctuation">{</span>
	root <span class="token operator">:=</span> <span class="token operator">&amp;</span>Trie<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> w <span class="token operator">:=</span> <span class="token keyword">range</span> dic <span class="token punctuation">{</span>
		root<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token comment">// Trie</span>
<span class="token keyword">type</span> Trie <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	children <span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token operator">*</span>Trie
	isWord   <span class="token builtin">bool</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Trie<span class="token punctuation">)</span> <span class="token function">Insert</span><span class="token punctuation">(</span>w <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cur <span class="token operator">:=</span> t
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> w <span class="token punctuation">{</span>
		c <span class="token operator">-=</span> <span class="token char">&#39;a&#39;</span>
		<span class="token keyword">if</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>Trie<span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>

	cur<span class="token punctuation">.</span>isWord <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-2-2-问题64-神奇字典" tabindex="-1"><a class="header-anchor" href="#_10-2-2-问题64-神奇字典" aria-hidden="true">#</a> 10.2.2 问题64: 神奇字典</h2>`,5),m={href:"https://leetcode.cn/problems/US1pGT/",target:"_blank",rel:"noopener noreferrer"},b=t(`<blockquote><p>设计一个使用单词列表进行初始化的数据结构，单词列表中的单词 <strong>互不相同</strong> 。 如果给出一个单词，请判定能否只将这个单词中<strong>一个</strong>字母换成另一个字母，使得所形成的新单词存在于已构建的神奇字典中。</p><p>实现 <code>MagicDictionary</code> 类：</p><ul><li><code>MagicDictionary()</code> 初始化对象</li><li><code>void buildDict(String[] dictionary)</code> 使用字符串数组 <code>dictionary</code> 设定该数据结构，<code>dictionary</code> 中的字符串互不相同</li><li><code>bool search(String searchWord)</code> 给定一个字符串 <code>searchWord</code> ，判定能否只将字符串中 <strong>一个</strong> 字母换成另一个字母，使得所形成的新字符串能够与字典中的任一字符串匹配。如果可以，返回 <code>true</code> ；否则，返回 <code>false</code> 。</li></ul><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入
inputs = [&quot;MagicDictionary&quot;, &quot;buildDict&quot;, &quot;search&quot;, &quot;search&quot;, &quot;search&quot;, &quot;search&quot;]
inputs = [[], [[&quot;hello&quot;, &quot;leetcode&quot;]], [&quot;hello&quot;], [&quot;hhllo&quot;], [&quot;hell&quot;], [&quot;leetcoded&quot;]]
输出
[null, null, false, true, false, false]

解释
MagicDictionary magicDictionary = new MagicDictionary();
magicDictionary.buildDict([&quot;hello&quot;, &quot;leetcode&quot;]);
magicDictionary.search(&quot;hello&quot;); // 返回 False
magicDictionary.search(&quot;hhllo&quot;); // 将第二个 &#39;h&#39; 替换为 &#39;e&#39; 可以匹配 &quot;hello&quot; ，所以返回 True
magicDictionary.search(&quot;hell&quot;); // 返回 False
magicDictionary.search(&quot;leetcoded&quot;); // 返回 False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= dictionary.length &lt;= 100</code></li><li><code>1 &lt;= dictionary[i].length &lt;= 100</code></li><li><code>dictionary[i]</code> 仅由小写英文字母组成</li><li><code>dictionary</code> 中的所有字符串 <strong>互不相同</strong></li><li><code>1 &lt;= searchWord.length &lt;= 100</code></li><li><code>searchWord</code> 仅由小写英文字母组成</li><li><code>buildDict</code> 仅在 <code>search</code> 之前调用一次</li><li>最多调用 <code>100</code> 次 <code>search</code></li></ul></blockquote><h3 id="_10-2-2-1-分析-题解" tabindex="-1"><a class="header-anchor" href="#_10-2-2-1-分析-题解" aria-hidden="true">#</a> 10.2.2.1 分析&amp;题解</h3><ol><li>构建字典树</li><li>深度优先搜索: <ol><li>递归函数 <code>dfs(node, pos, modified) bool</code><code>node</code>: 当前节点 <code>pos</code>: 带查询的第<code>pos</code>个字符 <code>modified</code>: 是否修改过</li><li>若<code>node</code> 的子节点和<code>pos</code>的字符相同则继续递归</li><li>2)不满足的话, 判断是否修改过, 没有则将任意子节点替换后, 以<code>modified</code>为<code>true</code>继续递归</li><li>已结束查找, 已修改过一次字符后和字典中单词相同(<code>modified == true &amp;&amp; isWord == true</code>)</li><li>上述步骤均不满足, 返回<code>false</code></li></ol></li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> MagicDictionary <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	trie <span class="token operator">*</span>Trie
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> MagicDictionary <span class="token punctuation">{</span>
	<span class="token keyword">return</span> MagicDictionary<span class="token punctuation">{</span>trie<span class="token punctuation">:</span> <span class="token operator">&amp;</span>Trie<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>md <span class="token operator">*</span>MagicDictionary<span class="token punctuation">)</span> <span class="token function">BuildDict</span><span class="token punctuation">(</span>dictionary <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> w <span class="token operator">:=</span> <span class="token keyword">range</span> dictionary <span class="token punctuation">{</span>
		md<span class="token punctuation">.</span>trie<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>md <span class="token operator">*</span>MagicDictionary<span class="token punctuation">)</span> <span class="token function">Search</span><span class="token punctuation">(</span>searchWord <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>md<span class="token punctuation">.</span>trie<span class="token punctuation">,</span> searchWord<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node <span class="token operator">*</span>Trie<span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">,</span> modified <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token comment">// 查找结束</span>
	<span class="token keyword">if</span> s <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> node<span class="token punctuation">.</span>isWord <span class="token operator">&amp;&amp;</span> modified
	<span class="token punctuation">}</span>

	<span class="token comment">// 深度优先</span>
	<span class="token comment">// 当前节点相同则查找子节点</span>
	c <span class="token operator">:=</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span>
	<span class="token keyword">if</span> node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> modified<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 未修改则用任意子节点替换, 继续查找</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>modified <span class="token punctuation">{</span>
		<span class="token keyword">for</span> i<span class="token punctuation">,</span> child <span class="token operator">:=</span> <span class="token keyword">range</span> node<span class="token punctuation">.</span>children <span class="token punctuation">{</span>
			<span class="token keyword">if</span> i <span class="token operator">!=</span> <span class="token function">int</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> child <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> <span class="token function">dfs</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">true</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Trie <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	children <span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token operator">*</span>Trie
	isWord   <span class="token builtin">bool</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Trie<span class="token punctuation">)</span> <span class="token function">Insert</span><span class="token punctuation">(</span>w <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cur <span class="token operator">:=</span> t
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> w <span class="token punctuation">{</span>
		c <span class="token operator">-=</span> <span class="token char">&#39;a&#39;</span>
		<span class="token keyword">if</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>Trie<span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>

	cur<span class="token punctuation">.</span>isWord <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-2-3-问题65-最短的单词编码" tabindex="-1"><a class="header-anchor" href="#_10-2-3-问题65-最短的单词编码" aria-hidden="true">#</a> 10.2.3 问题65: 最短的单词编码</h2>`,5),h={href:"https://leetcode.cn/problems/iSwD2y/",target:"_blank",rel:"noopener noreferrer"},g=t(`<blockquote><p>单词数组 <code>words</code> 的 <strong>有效编码</strong> 由任意助记字符串 <code>s</code> 和下标数组 <code>indices</code> 组成，且满足：</p><ul><li><code>words.length == indices.length</code></li><li>助记字符串 <code>s</code> 以 <code>&#39;#&#39;</code> 字符结尾</li><li>对于每个下标 <code>indices[i]</code> ，<code>s</code> 的一个从 <code>indices[i]</code> 开始、到下一个 <code>&#39;#&#39;</code> 字符结束（但不包括 <code>&#39;#&#39;</code>）的 <strong>子字符串</strong> 恰好与 <code>words[i]</code> 相等</li></ul><p>给定一个单词数组 <code>words</code> ，返回成功对 <code>words</code> 进行编码的最小助记字符串 <code>s</code> 的长度 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：words = [&quot;time&quot;, &quot;me&quot;, &quot;bell&quot;]
输出：10
解释：一组有效编码为 s = &quot;time#bell#&quot; 和 indices = [0, 2, 5] 。
words[0] = &quot;time&quot; ，s 开始于 indices[0] = 0 到下一个 &#39;#&#39; 结束的子字符串，如加粗部分所示 &quot;time#bell#&quot;
words[1] = &quot;me&quot; ，s 开始于 indices[1] = 2 到下一个 &#39;#&#39; 结束的子字符串，如加粗部分所示 &quot;time#bell#&quot;
words[2] = &quot;bell&quot; ，s 开始于 indices[2] = 5 到下一个 &#39;#&#39; 结束的子字符串，如加粗部分所示 &quot;time#bell#&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：words = [&quot;t&quot;]
输出：2
解释：一组有效编码为 s = &quot;t#&quot; 和 indices = [0] 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 2000</code></li><li><code>1 &lt;= words[i].length &lt;= 7</code></li><li><code>words[i]</code> 仅由小写字母组成</li></ul></blockquote><h3 id="_10-2-3-1-分析-题解" tabindex="-1"><a class="header-anchor" href="#_10-2-3-1-分析-题解" aria-hidden="true">#</a> 10.2.3.1 分析&amp;题解</h3><p>如果一个单词是另一个单词的后缀(<code>me</code>, <code>time</code>), 那么在助记字符串中只需出现一个(<code>time</code>).</p><p>若将两个字符串反转, 那么反转后的单词一定是另一个的前缀(<code>em</code>, <code>emit</code>). 此时可以使用前缀树存储单词.</p><p>由于助记词中单词以<code>#</code>结尾, 那么助记词的长度为前缀树根节点到叶节点路径长度加一.</p><p>可以使用深度优先遍历, 计算路径长度.</p><ol><li>构建前缀树, 将单词反向存入前缀树</li><li>深度优先遍历前缀树, 计算根节点到叶节点的路径长度和.</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">minimumLengthEncoding</span><span class="token punctuation">(</span>words <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// 构建前缀树</span>
    reTrie <span class="token operator">:=</span> <span class="token function">buildReTrie</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span>

    <span class="token comment">// 深度优先遍历</span>
    <span class="token comment">// 路径长度和</span>
    sum <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> dfs <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>ReTrie<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    dfs <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>ReTrie<span class="token punctuation">,</span> length <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isLeaf <span class="token operator">:=</span> <span class="token boolean">true</span>
        <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> child <span class="token operator">:=</span> <span class="token keyword">range</span> node<span class="token punctuation">.</span>children <span class="token punctuation">{</span>
            <span class="token keyword">if</span> child <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                isLeaf <span class="token operator">=</span> <span class="token boolean">false</span>
                <span class="token comment">// 遍历子节点</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> length<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 到达叶节点, 统计路径长度</span>
        <span class="token keyword">if</span> isLeaf <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> length
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 单词后多一个&#39;#&#39;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>reTrie<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">buildReTrie</span><span class="token punctuation">(</span>words <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>ReTrie <span class="token punctuation">{</span>
    root <span class="token operator">:=</span> <span class="token operator">&amp;</span>ReTrie<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> w <span class="token operator">:=</span> <span class="token keyword">range</span> words <span class="token punctuation">{</span>
        root<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ReTrie <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    children <span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token operator">*</span>ReTrie
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>rt <span class="token operator">*</span>ReTrie<span class="token punctuation">)</span> <span class="token function">Insert</span><span class="token punctuation">(</span>w <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cur <span class="token operator">:=</span> rt
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">{</span>
        c <span class="token operator">:=</span> w<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span>
        <span class="token keyword">if</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>ReTrie<span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-2-4-问题66-单词之和" tabindex="-1"><a class="header-anchor" href="#_10-2-4-问题66-单词之和" aria-hidden="true">#</a> 10.2.4 问题66: 单词之和</h2>`,9),f={href:"https://leetcode.cn/problems/z1R5dt/",target:"_blank",rel:"noopener noreferrer"},y=t(`<blockquote><p>实现一个 <code>MapSum</code> 类，支持两个方法，<code>insert</code> 和 <code>sum</code>：</p><ul><li><code>MapSum()</code> 初始化 <code>MapSum</code> 对象</li><li><code>void insert(String key, int val)</code> 插入 <code>key-val</code> 键值对，字符串表示键 <code>key</code> ，整数表示值 <code>val</code> 。如果键 <code>key</code> 已经存在，那么原来的键值对将被替代成新的键值对。</li><li><code>int sum(string prefix)</code> 返回所有以该前缀 <code>prefix</code> 开头的键 <code>key</code> 的值的总和。</li></ul><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：
inputs = [&quot;MapSum&quot;, &quot;insert&quot;, &quot;sum&quot;, &quot;insert&quot;, &quot;sum&quot;]
inputs = [[], [&quot;apple&quot;, 3], [&quot;ap&quot;], [&quot;app&quot;, 2], [&quot;ap&quot;]]
输出：
[null, null, 3, null, 5]

解释：
MapSum mapSum = new MapSum();
mapSum.insert(&quot;apple&quot;, 3);  
mapSum.sum(&quot;ap&quot;);           // return 3 (apple = 3)
mapSum.insert(&quot;app&quot;, 2);    
mapSum.sum(&quot;ap&quot;);           // return 5 (apple + app = 3 + 2 = 5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= key.length, prefix.length &lt;= 50</code></li><li><code>key</code> 和 <code>prefix</code> 仅由小写英文字母组成</li><li><code>1 &lt;= val &lt;= 1000</code></li><li>最多调用 <code>50</code> 次 <code>insert</code> 和 <code>sum</code></li></ul></blockquote><h3 id="_10-2-4-1-分析-题解" tabindex="-1"><a class="header-anchor" href="#_10-2-4-1-分析-题解" aria-hidden="true">#</a> 10.2.4.1 分析&amp;题解</h3><p>构建前缀树, 若某个节点代表单词<code>key</code>的结尾那么可以将此节点的值设置为<code>value</code>.</p><p>对于前缀<code>prefix</code>, 查找到<code>prefix</code>在前缀树中的最后一个节点, 那么此节点的任意子树都是符合条件的, 将所有的节点值累加即可.</p><ol><li>构建前缀树, 记录key, value</li><li>深度优先遍历前缀树: <ol><li>找到前缀<code>prefix</code>所在的最后一个节点, 不在直接返回0.</li><li>递归统计节点的所有子树的节点值之和</li></ol></li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> MapSum <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    trie <span class="token operator">*</span>MapTrie
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> MapSum <span class="token punctuation">{</span>
    <span class="token keyword">return</span> MapSum<span class="token punctuation">{</span>trie<span class="token punctuation">:</span> <span class="token operator">&amp;</span>MapTrie<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>ms <span class="token operator">*</span>MapSum<span class="token punctuation">)</span> <span class="token function">Insert</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    ms<span class="token punctuation">.</span>trie<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>ms <span class="token operator">*</span>MapSum<span class="token punctuation">)</span> <span class="token function">Sum</span><span class="token punctuation">(</span>prefix <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    cur <span class="token operator">:=</span> ms<span class="token punctuation">.</span>trie
    <span class="token comment">// find last node in trie of prefix </span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ch <span class="token operator">:=</span> <span class="token keyword">range</span> prefix <span class="token punctuation">{</span>
        c <span class="token operator">:=</span> ch <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span>
        <span class="token comment">// not found</span>
        <span class="token keyword">if</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>

        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// calculate val in all subtree</span>
    <span class="token keyword">var</span> dfsSum <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>MapTrie<span class="token punctuation">)</span> <span class="token builtin">int</span> 
    dfsSum <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>MapTrie<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
        sum <span class="token operator">:=</span> <span class="token number">0</span>
        <span class="token keyword">if</span> node <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> sum
        <span class="token punctuation">}</span>

        <span class="token comment">// current node </span>
        sum <span class="token operator">+=</span> node<span class="token punctuation">.</span>val
        <span class="token comment">// subtree</span>
        <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> child <span class="token operator">:=</span> <span class="token keyword">range</span> node<span class="token punctuation">.</span>children <span class="token punctuation">{</span>
            <span class="token keyword">if</span> child <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                sum <span class="token operator">+=</span> <span class="token function">dfsSum</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> sum
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">dfsSum</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> MapTrie <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    children <span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token operator">*</span>MapTrie
    val <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>mt <span class="token operator">*</span>MapTrie<span class="token punctuation">)</span> <span class="token function">Insert</span><span class="token punctuation">(</span>w <span class="token builtin">string</span><span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cur <span class="token operator">:=</span> mt
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ch <span class="token operator">:=</span> <span class="token keyword">range</span> w <span class="token punctuation">{</span>
        c <span class="token operator">:=</span> ch <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span>
        <span class="token keyword">if</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>MapTrie<span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>c<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    cur<span class="token punctuation">.</span>val <span class="token operator">=</span> val
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-2-5-问题67-最大异或" tabindex="-1"><a class="header-anchor" href="#_10-2-5-问题67-最大异或" aria-hidden="true">#</a> 10.2.5 问题67: 最大异或</h2>`,7),w={href:"https://leetcode.cn/problems/ms70jA/",target:"_blank",rel:"noopener noreferrer"},q=t(`<blockquote><p>给定一个整数数组 <code>nums</code> ，返回 <code>nums[i] XOR nums[j]</code> 的最大运算结果，其中 <code>0 ≤ i ≤ j &lt; n</code> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [3,10,5,25,2,8]
输出：28
解释：最大运算结果是 5 XOR 25 = 28.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [0]
输出：0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [2,4]
输出：6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [8,10,2]
输出：10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 5：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]
输出：127
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^5</code></li><li><code>0 &lt;= nums[i] &lt;= 2^31 - 1</code></li></ul><p>**进阶：**你可以在 <code>O(n)</code> 的时间解决这个问题吗？</p></blockquote><h3 id="_10-2-5-1-分析-题解" tabindex="-1"><a class="header-anchor" href="#_10-2-5-1-分析-题解" aria-hidden="true">#</a> 10.2.5.1 分析&amp;题解</h3>`,2),x=n("p",null,[s("若使用暴力解法, 时间复杂度为"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mi",null,"n"),n("mn",null,"2")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"n"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])]),n("span",{class:"mclose"},")")])])]),s(".")],-1),_=t(`<p>异或运算, 二进制位不同则为1. 那么对于一个数字, 要想其异或的结果尽量大, 应该选择二进制位相反的数来计算.</p><ol><li>构建前缀树, 将整数二进制位存入树中</li><li>遍历数组, 对于数字: <ol><li>寻找在前缀树中二进制位尽量相反的节点</li><li>进行异或运算, 更新最大值</li></ol></li></ol><p>时间复杂度: O(n), 异或运算中的双重循环, 二进制位数是常量视作O(1)</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">findMaximumXOR</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// 构建前缀树</span>
    trie <span class="token operator">:=</span> <span class="token function">buildBitTrie</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>

    <span class="token comment">// 计算最大异或值</span>
    maxXOR <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        cur <span class="token operator">:=</span> trie
        xor <span class="token operator">:=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">31</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">{</span>
            bit <span class="token operator">:=</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;&gt;</span> i<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span>
            <span class="token keyword">if</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">1</span><span class="token operator">-</span>bit<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">// 相反bit</span>
                xor <span class="token operator">=</span> <span class="token punctuation">(</span>xor <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// 异或结果 1</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">1</span><span class="token operator">-</span>bit<span class="token punctuation">]</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 相同 bit</span>
                xor <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>bit<span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        maxXOR <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>maxXOR<span class="token punctuation">,</span> xor<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> maxXOR
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">buildBitTrie</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>BitTrie <span class="token punctuation">{</span>
    root <span class="token operator">:=</span> <span class="token operator">&amp;</span>BitTrie<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        root<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token function">int32</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> b
<span class="token punctuation">}</span>

<span class="token keyword">type</span> BitTrie <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    children <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">*</span>BitTrie
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>bt <span class="token operator">*</span>BitTrie<span class="token punctuation">)</span> <span class="token function">Insert</span><span class="token punctuation">(</span>n <span class="token builtin">int32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cur <span class="token operator">:=</span> bt
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">31</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">{</span>
        bit <span class="token operator">:=</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;&gt;</span> i<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span>
        <span class="token keyword">if</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>bit<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>bit<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>BitTrie<span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>children<span class="token punctuation">[</span>bit<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,5),T={href:"https://book.douban.com/subject/35543447/",target:"_blank",rel:"noopener noreferrer"};function M(S,R){const a=i("ExternalLinkIcon");return p(),c("div",null,[u,r,d,n("p",null,[n("a",k,[s("LCR 063. 单词替换"),e(a)])]),v,n("p",null,[n("a",m,[s("LCR 064. 实现一个魔法字典"),e(a)])]),b,n("p",null,[n("a",h,[s("LCR 065. 单词的压缩编码"),e(a)])]),g,n("p",null,[n("a",f,[s("LCR 066. 键值映射"),e(a)])]),y,n("p",null,[n("a",w,[s("LCR 067. 数组中两个数的最大异或值"),e(a)])]),q,x,_,n("ol",null,[n("li",null,[n("a",T,[s("剑指Offer（专项突破版）"),e(a)])])])])}const W=o(l,[["render",M],["__file","10.2.html.vue"]]);export{W as default};
