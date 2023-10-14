import{_ as l,Z as p,$ as o,a0 as s,a1 as n,a2 as t,a3 as e,H as i}from"./framework-09afcf0b.js";const c={},r=s("p",null,[n("最近在练习leetcode题目时，需要用到堆，发现 Golang 标准库已经有"),s("code",null,"heap"),n("包，在使用的同时也看看源码的写法。")],-1),u=s("h2",{id:"_1-堆的定义",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-堆的定义","aria-hidden":"true"},"#"),n(" 1. 堆的定义")],-1),m={href:"https://en.wikipedia.org/wiki/Computer_science",target:"_blank",rel:"noopener noreferrer"},d=s("strong",null,"heap",-1),h={href:"https://en.wikipedia.org/wiki/Tree_(data_structure)",target:"_blank",rel:"noopener noreferrer"},k={href:"https://en.wikipedia.org/wiki/Data_structure",target:"_blank",rel:"noopener noreferrer"},g=s("strong",null,"heap property",-1),v=s("em",null,"max heap",-1),b={href:"https://en.wikipedia.org/wiki/Node_(computer_science)",target:"_blank",rel:"noopener noreferrer"},f=s("em",null,"key",-1),y=s("em",null,"value",-1),_=s("em",null,"min heap",-1),w=e('<h2 id="_2-数据结构" tabindex="-1"><a class="header-anchor" href="#_2-数据结构" aria-hidden="true">#</a> 2. 数据结构</h2><p><strong>堆</strong>通常使用<strong>完全二叉树</strong>来实现并且完全二叉树可以使用数组来表示，故堆可以使用数组来实现。</p><p>堆的类型通常有两种：</p><ol><li>最大堆：父节点的元素一定大于等于子节点</li><li>最小堆：父节点的元素一定小于等于子节点</li></ol><h3 id="数组中节点的关系" tabindex="-1"><a class="header-anchor" href="#数组中节点的关系" aria-hidden="true">#</a> 数组中节点的关系</h3>',5),x=s("p",null,[n("在用数组表示的堆中，假设当前节点为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"N"),s("mi",null,"i")])]),s("annotation",{encoding:"application/x-tex"},"N_i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),n("，"),s("code",null,"i"),n("为数组索引，则有：")],-1),z=s("ol",null,[s("li",null,[s("strong",null,"父节点"),n("索引为："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mi",null,"i"),s("mo",null,"−"),s("mn",null,"1")]),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"\\frac{i-1}{2}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2007em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8557em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])]),s("li",null,[s("strong",null,"左子节点"),n("索引为："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2"),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"2i+1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7429em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])]),s("li",null,[s("strong",null,"右子节点"),n("索引为："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2"),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"2i+2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7429em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])])])])],-1),L=s("h2",{id:"_3-接口",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-接口","aria-hidden":"true"},"#"),n(" 3. 接口")],-1),j=s("p",null,[s("code",null,"heap"),n("包中的函数都是以接口类型的变量作为参数，这样做的好处：")],-1),M=s("ol",null,[s("li",null,"调用方可以通过接口与具体实现分离，解除上下游的耦合"),s("li",null,"上层的模块不再需要依赖下层的具体模块，只需要依赖一个约定好的接口"),s("li",null,"无需关心函数的具体实现，只要实现了约定的接口即可")],-1),I=s("code",null,"heap",-1),P={href:"https://github.com/golang/go/blob/release-branch.go1.20/src/container/heap/heap.go#L31",target:"_blank",rel:"noopener noreferrer"},O=s("code",null,"heap.Interface",-1),N=e(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Interface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	sort<span class="token punctuation">.</span>Interface
	<span class="token function">Push</span><span class="token punctuation">(</span>x any<span class="token punctuation">)</span> <span class="token comment">// add x as element Len()</span>
	<span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> any   <span class="token comment">// remove and return element Len() - 1.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S={href:"https://github.com/golang/go/blob/master/src/sort/sort.go#L14",target:"_blank",rel:"noopener noreferrer"},C=s("code",null,"sort.Interface",-1),H=e(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Interface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
	<span class="token function">Less</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
	<span class="token function">Swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token function">Push</span><span class="token punctuation">(</span>x any<span class="token punctuation">)</span> 
	<span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> any
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说实现<code>heap.Interface</code>需要实现上述的5个方法，因为堆是由数组实现的，所以实现的方法是针对数组及其元素：</p><ol><li><code>Len</code>：返回数组的大小</li><li><code>Less</code>：比较数组中元素的大小</li><li><code>Swap</code>：交换数组中元素</li><li><code>Push</code>：向数组中添加元素</li><li><code>Pop</code>：返回并删除数组的<strong>最后</strong>一个元素</li></ol><h2 id="_4-函数" tabindex="-1"><a class="header-anchor" href="#_4-函数" aria-hidden="true">#</a> 4. 函数</h2><p>以<strong>最小堆</strong>为例进行分析。</p><h3 id="_4-1-up-h-j-and-down-h-i0-n" tabindex="-1"><a class="header-anchor" href="#_4-1-up-h-j-and-down-h-i0-n" aria-hidden="true">#</a> 4.1 up(h, j) and down(h, i0, n)</h3>`,6),T={href:"https://github.com/golang/go/blob/release-branch.go1.20/src/container/heap/heap.go#L89",target:"_blank",rel:"noopener noreferrer"},V=s("code",null,"heap.up",-1),q={href:"https://github.com/golang/go/blob/release-branch.go1.20/src/container/heap/heap.go#L100",target:"_blank",rel:"noopener noreferrer"},B=s("code",null,"heap.down",-1),E=s("ul",null,[s("li",null,[s("code",null,"up"),n("：上浮，表示当前节点和其父节点交换；发生在新增节点时(Push)，此时节点在二叉树的最低层，判断是否需要上浮。")]),s("li",null,[s("code",null,"down"),n("：下沉，表示当前节点与其子节点交换；发生在删除栈顶节点(Pop)时，将堆中的最后一个节点放到堆顶，判断是否需要下沉。")])],-1),R=s("h4",{id:"down",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#down","aria-hidden":"true"},"#"),n(" down")],-1),F=s("p",null,[n("时间复杂度："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(logn)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),n("，n 为数组长度（堆的大小）；当节点需要交换至二叉树"),s("strong",null,"底部"),n("时，交换次数为二叉树高度"),s("code",null,"h")],-1),D=e(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">down</span><span class="token punctuation">(</span>h Interface<span class="token punctuation">,</span> i0<span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	i <span class="token operator">:=</span> i0
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		j1 <span class="token operator">:=</span> <span class="token number">2</span><span class="token operator">*</span>i <span class="token operator">+</span> <span class="token number">1</span>
		<span class="token keyword">if</span> j1 <span class="token operator">&gt;=</span> n <span class="token operator">||</span> j1 <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span> <span class="token comment">// j1 &lt; 0 after int overflow</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		j <span class="token operator">:=</span> j1 <span class="token comment">// left child</span>
		<span class="token keyword">if</span> j2 <span class="token operator">:=</span> j1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j2 <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> h<span class="token punctuation">.</span><span class="token function">Less</span><span class="token punctuation">(</span>j2<span class="token punctuation">,</span> j1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			j <span class="token operator">=</span> j2 <span class="token comment">// = 2*i + 2  // right child</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>h<span class="token punctuation">.</span><span class="token function">Less</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		h<span class="token punctuation">.</span><span class="token function">Swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
		i <span class="token operator">=</span> j
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> i <span class="token operator">&gt;</span> i0
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程如下：</p><ol><li>将传入的索引记为<strong>当前索引</strong></li><li>获取<strong>左节点</strong>索引，若左节点不存在（左节点索引大于数组长度 或 数值<strong>溢出</strong>），则跳转至 步骤 7）</li><li>获取<strong>右节点</strong>索引，若右节点<strong>存在</strong>且元素值<strong>小于</strong>左节点，则选择<strong>右节点</strong></li><li>比较当前节点，若不小于右节点，则跳转至 步骤 7）；</li><li><strong>交换</strong>当前当前节点和<strong>子节点（左右节点中较小的一个）</strong></li><li>更新当前节点索引，继续 步骤 1）</li><li>返回当前节点索引是否大于传入索引</li></ol><p>总体流程：</p><ol><li>将当前节点和<strong>最小的子节点</strong>交换，直到无法交换为止</li><li>返回<strong>是否发生</strong>了下沉（节点交换）</li></ol><h4 id="up" tabindex="-1"><a class="header-anchor" href="#up" aria-hidden="true">#</a> up</h4>`,6),G=s("p",null,[n("时间复杂度："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(logn)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),n("，n 为数组长度（堆的大小）；当节点需要交换至二叉树"),s("strong",null,"顶部"),n("时，交换次数为二叉树高度"),s("code",null,"h")],-1),Z=e(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">up</span><span class="token punctuation">(</span>h Interface<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		i <span class="token operator">:=</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token comment">// parent</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> j <span class="token operator">||</span> <span class="token operator">!</span>h<span class="token punctuation">.</span><span class="token function">Less</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		h<span class="token punctuation">.</span><span class="token function">Swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
		j <span class="token operator">=</span> i
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程：</p><ol><li>计算父节点的索引</li><li>当前已经是<strong>堆顶</strong> 或 不小于父节点，跳转至步骤 5)</li><li>交换当前节点和父节点</li><li>更新当前节点，继续 步骤1）</li><li>结束</li></ol><p>总体流程：</p><ol><li>和父节点交换，直到堆顶 或者 不满足交换条件</li></ol><h3 id="_4-2-init-h" tabindex="-1"><a class="header-anchor" href="#_4-2-init-h" aria-hidden="true">#</a> 4.2 Init(h)</h3><p>初始化堆，当定义的数组存在初始元素是可以调用函数<code>Init</code>将其<strong>堆化(heapify)</strong>，即转化成堆。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Init</span><span class="token punctuation">(</span>h Interface<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// heapify</span>
	n <span class="token operator">:=</span> h<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> n<span class="token operator">/</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">{</span>
		<span class="token function">down</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> i<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),$=s("p",null,[n("此算法的时间复杂为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),n("。")],-1),A=s("h4",{id:"为什么时间复杂度是-o-n",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#为什么时间复杂度是-o-n","aria-hidden":"true"},"#"),n(" 为什么时间复杂度是 O(n)")],-1),J={href:"https://stackoverflow.com/a/18742428/14963922",target:"_blank",rel:"noopener noreferrer"},K=s("p",null,[n("假设树的高度"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"h"),s("mo",null,"="),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"h=logn")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"n")])])]),n("，那么构建堆的交换次数计算如下：")],-1),Q=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"s"),s("mi",null,"u"),s("mi",null,"m"),s("mo",null,"="),s("mn",null,"0"),s("mo",null,"×"),s("mfrac",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"×"),s("mfrac",null,[s("mi",null,"n"),s("mn",null,"4")]),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"2"),s("mo",null,"×"),s("mfrac",null,[s("mi",null,"n"),s("mn",null,"8")]),s("mo",null,"+"),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mi",null,"h"),s("mo",null,"∗"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"sum=0\\times \\frac{n}{2}+(1\\times \\frac{n}{4})+(2\\times \\frac{n}{8}+...+(h*1))")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"0"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0404em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6954em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.095em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6954em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"4")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"2"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0404em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6954em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"8")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"..."),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"))")])])])],-1),U=e(`<p>证明过程：</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/202309270420982.png" alt="Taylor series for buildHeap complexity" tabindex="0" loading="lazy"><figcaption>Taylor series for buildHeap complexity</figcaption></figure><h3 id="_4-3-pop-and-push" tabindex="-1"><a class="header-anchor" href="#_4-3-pop-and-push" aria-hidden="true">#</a> 4.3 Pop and Push</h3><p>时间复杂度均为 O(logn)</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Push</span><span class="token punctuation">(</span>h Interface<span class="token punctuation">,</span> x any<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	h<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
	<span class="token function">up</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> h<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Pop</span><span class="token punctuation">(</span>h Interface<span class="token punctuation">)</span> any <span class="token punctuation">{</span>
	n <span class="token operator">:=</span> h<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
	h<span class="token punctuation">.</span><span class="token function">Swap</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
	<span class="token function">down</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
	<span class="token keyword">return</span> h<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-remove" tabindex="-1"><a class="header-anchor" href="#_4-4-remove" aria-hidden="true">#</a> 4.4 Remove</h3><p>删除指定位置的元素，时间复杂度：O(logn)</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Remove</span><span class="token punctuation">(</span>h Interface<span class="token punctuation">,</span> i <span class="token builtin">int</span><span class="token punctuation">)</span> any <span class="token punctuation">{</span>
	n <span class="token operator">:=</span> h<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
	<span class="token keyword">if</span> n <span class="token operator">!=</span> i <span class="token punctuation">{</span>
		h<span class="token punctuation">.</span><span class="token function">Swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
		<span class="token keyword">if</span> <span class="token operator">!</span><span class="token function">down</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> i<span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">up</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> h<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总体流程：</p><ol><li>将想要删除的元素和最后一个元素交换</li><li>对最后一个元素进行上浮/下沉操作</li><li>删除最后一个元素（值为想要删除的元素）</li></ol><h3 id="_4-5-fix" tabindex="-1"><a class="header-anchor" href="#_4-5-fix" aria-hidden="true">#</a> 4.5 Fix</h3><p>当元素的值（或者说优先级）被修改，调整其在堆中的位置，时间复杂度：O(logn)</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Fix</span><span class="token punctuation">(</span>h Interface<span class="token punctuation">,</span> i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token operator">!</span><span class="token function">down</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> i<span class="token punctuation">,</span> h<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">up</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,14),W={href:"https://en.wikipedia.org/wiki/Heap_(data_structure)",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/golang/go/blob/release-branch.go1.20/src/container/heap/heap.go",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://stackoverflow.com/a/18742428/14963922",target:"_blank",rel:"noopener noreferrer"};function ss(ns,as){const a=i("ExternalLinkIcon");return p(),o("div",null,[r,u,s("blockquote",null,[s("p",null,[n("In "),s("a",m,[n("computer science"),t(a)]),n(", a "),d,n(" is a specialized "),s("a",h,[n("tree"),t(a)]),n("-based "),s("a",k,[n("data structure"),t(a)]),n(" that satisfies the "),g,n(": In a "),v,n(", for any given "),s("a",b,[n("node"),t(a)]),n(" C, if P is a parent node of C, then the "),f,n(" (the "),y,n(") of P is greater than or equal to the key of C. In a "),_,n(", the key of P is less than or equal to the key of C.")])]),w,x,z,L,j,M,s("p",null,[I,n("包只有一个结构"),s("a",P,[O,t(a)]),n("：")]),N,s("p",null,[n("将其中的"),s("a",S,[C,t(a)]),n("展开后可以得到：")]),H,s("p",null,[s("a",T,[V,t(a)]),n("和"),s("a",q,[B,t(a)]),n("是包中最核心的函数，也是堆的最基础的操作：")]),E,R,F,D,G,Z,$,A,s("p",null,[n("详细证明可以参见"),s("a",J,[n("How can building a heap be O(n) time complexity?"),t(a)]),n("。")]),K,Q,U,s("ol",null,[s("li",null,[s("a",W,[n("https://en.wikipedia.org/wiki/Heap_(data_structure)"),t(a)])]),s("li",null,[s("a",X,[n("https://github.com/golang/go/blob/release-branch.go1.20/src/container/heap/heap.go"),t(a)])]),s("li",null,[s("a",Y,[n("https://stackoverflow.com/a/18742428/14963922"),t(a)])])])])}const es=l(c,[["render",ss],["__file","1.impl_of_heap.html.vue"]]);export{es as default};