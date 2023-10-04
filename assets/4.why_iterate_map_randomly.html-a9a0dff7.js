import{_ as o,Z as p,$ as c,a0 as n,a1 as s,a2 as t,a3 as e,H as i}from"./framework-09afcf0b.js";const r={},l={href:"https://draveness.me/golang",target:"_blank",rel:"noopener noreferrer"},u={href:"https://draveness.me/golang/docs/part2-foundation/ch05-keyword/golang-for-range/",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"for-range",-1),k=n("p",null,"于是产生了疑问：为什么要乱序？",-1),h=n("h2",{id:"_1-for-range-如何遍历-map",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-for-range-如何遍历-map","aria-hidden":"true"},"#"),s(" 1. for-range 如何遍历 map")],-1),m=n("code",null,"for-range",-1),g={href:"https://github.com/golang/go/blob/release-branch.go1.18/src/runtime/map.go",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"runtime.mapiterinit",-1),v=n("strong",null,"初始化",-1),_=e(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// mapiterinit initializes the hiter struct used for ranging over maps.</span>
<span class="token comment">// The hiter struct pointed to by &#39;it&#39; is allocated on the stack</span>
<span class="token comment">// by the compilers order pass or on the heap by reflect_mapiterinit.</span>
<span class="token comment">// Both need to have zeroed hiter since the struct contains pointers.</span>
<span class="token keyword">func</span> <span class="token function">mapiterinit</span><span class="token punctuation">(</span>t <span class="token operator">*</span>maptype<span class="token punctuation">,</span> h <span class="token operator">*</span>hmap<span class="token punctuation">,</span> it <span class="token operator">*</span>hiter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token operator">...</span>
	<span class="token comment">// decide where to start</span>
	r <span class="token operator">:=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token function">fastrand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> h<span class="token punctuation">.</span>B <span class="token operator">&gt;</span> <span class="token number">31</span><span class="token operator">-</span>bucketCntBits <span class="token punctuation">{</span>
		r <span class="token operator">+=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token function">fastrand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">31</span>
	<span class="token punctuation">}</span>
	it<span class="token punctuation">.</span>startBucket <span class="token operator">=</span> r <span class="token operator">&amp;</span> <span class="token function">bucketMask</span><span class="token punctuation">(</span>h<span class="token punctuation">.</span>B<span class="token punctuation">)</span>
	it<span class="token punctuation">.</span>offset <span class="token operator">=</span> <span class="token function">uint8</span><span class="token punctuation">(</span>r <span class="token operator">&gt;&gt;</span> h<span class="token punctuation">.</span>B <span class="token operator">&amp;</span> <span class="token punctuation">(</span>bucketCnt <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">// iterator state</span>
	it<span class="token punctuation">.</span>bucket <span class="token operator">=</span> it<span class="token punctuation">.</span>startBucket

	<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中的通过<code>r := uintptr(fastrand())</code> 获取<strong>随机数</strong>并<strong>用于</strong>计算遍历的<strong>首个存储桶</strong>的位置，所以每次遍历时的<strong>起始位置</strong>是<strong>随机</strong>的。</p><h2 id="_2-为何要随机遍历" tabindex="-1"><a class="header-anchor" href="#_2-为何要随机遍历" aria-hidden="true">#</a> 2. 为何要随机遍历</h2>`,3),b={href:"https://blog.golang.org/go-maps-in-action",target:"_blank",rel:"noopener noreferrer"},y=n("blockquote",null,[n("p",null,[s("When iterating over a map with a range loop, the iteration order is not specified and is not guaranteed to be the same from one iteration to the next. Since the release of Go 1.0, the runtime has randomized map iteration order. "),n("strong",null,"Programmers had begun to rely on the stable iteration order of early versions of Go, which varied between implementations, leading to portability bugs."),s(" If you require a stable iteration order you must maintain a separate data structure that specifies that order.")])],-1),w={href:"https://golang.org/doc/go1#iteration",target:"_blank",rel:"noopener noreferrer"},x=n("blockquote",null,[n("p",null,[s("The old language specification did not define the order of iteration for maps, and in practice it differed across hardware platforms. "),n("strong",null,"This caused tests that iterated over maps to be fragile and non-portable, with the unpleasant property that a test might always pass on one machine but break on another.")]),n("p",null,"In Go 1, the order in which elements are visited when iterating over a map using a for range statement is defined to be unpredictable, even if the same loop is run multiple times with the same map. Code should not assume that the elements are visited in any particular order."),n("p",null,[n("strong",null,"This change means that code that depends on iteration order is very likely to break early and be fixed long before it becomes a problem. Just as important, it allows the map implementation to ensure better map balancing even when programs are using range loops to select an element from a map.")])],-1),j=n("p",null,"总结来说为了避免开发者依赖哈希表的遍历顺序，因为哈希表的实现可能会改变，不同的实现方式会可能导致原来的依赖遍历顺序的程序失效。",-1),B=n("p",null,"个人认为，因为哈希映射的过程本身就是随机的，若想要在遍历时按照某种固定的顺序获取元素，需要额外的内存和时间开销，会降低哈希表的性能。",-1),G={id:"_3-encoding-json-如何保证输出的一致性",tabindex:"-1"},q=n("a",{class:"header-anchor",href:"#_3-encoding-json-如何保证输出的一致性","aria-hidden":"true"},"#",-1),E={href:"https://golang.org/pkg/encoding/json/",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"encoding/json",-1),T={href:"https://golang.org/pkg/encoding/json/#Marshal",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"json.Marshal()",-1),S=n("code",null,"json",-1),V=n("p",null,"但是 Golang 中哈希表的遍历是随机的，这是如何做到的 ？",-1),M=n("code",null,"func Marshal(v any)",-1),C={href:"https://github.com/golang/go/blob/release-branch.go1.18/src/encoding/json/encode.go#L775",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"json.mapEncoder.encode",-1),R=e(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>me mapEncoder<span class="token punctuation">)</span> <span class="token function">encode</span><span class="token punctuation">(</span>e <span class="token operator">*</span>encodeState<span class="token punctuation">,</span> v reflect<span class="token punctuation">.</span>Value<span class="token punctuation">,</span> opts encOpts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token operator">...</span>
	<span class="token comment">// Extract and sort the keys.</span>
	sv <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>reflectWithString<span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	mi <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">MapRange</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> mi<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		sv<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>k <span class="token operator">=</span> mi<span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		sv<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>v <span class="token operator">=</span> mi<span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> sv<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;json: encoding error for type %q: %q&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	sort<span class="token punctuation">.</span><span class="token function">Slice</span><span class="token punctuation">(</span>sv<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> sv<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>ks <span class="token operator">&lt;</span> sv<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>ks <span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由上可以看到，在获取哈希表中的所有元素之后，将<code>entry</code>按照<code>key</code>进行了排序，所以对于同一个哈希表来说，能够确保编码的结果的一致性。</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,3),z={href:"https://stackoverflow.com/questions/55925822/why-are-iterations-over-maps-random",target:"_blank",rel:"noopener noreferrer"},W={href:"https://blog.golang.org/go-maps-in-action",target:"_blank",rel:"noopener noreferrer"},H={href:"https://golang.org/doc/go1#iteration",target:"_blank",rel:"noopener noreferrer"},J={href:"https://draveness.me/golang/docs/part2-foundation/ch05-keyword/golang-for-range/",target:"_blank",rel:"noopener noreferrer"};function K(O,P){const a=i("ExternalLinkIcon");return p(),c("div",null,[n("p",null,[s("在阅读"),n("a",l,[s("Go设计与实现"),t(a)]),s("的"),n("a",u,[s("for-range"),t(a)]),s("章节时，了解到使用"),d,s("循环遍历map时，获取的值是乱序的，并非按照存入顺序。")]),k,h,n("p",null,[s("使用"),m,s("遍历map时，会在"),n("a",g,[f,t(a)]),s("函数中，"),v,s("开始遍历的元素：")]),_,n("p",null,[s("根据 "),n("a",b,[s("The Go Blog: Go maps in action: Iteration order"),t(a)]),s(" 中的描述：")]),y,n("p",null,[n("a",w,[s("Go 1 Release Notes: Iterating in maps"),t(a)]),s("中的描述：")]),x,j,B,n("h2",G,[q,s(" 3. "),n("a",E,[I,t(a)]),s(" 如何保证输出的一致性")]),n("p",null,[s("当使用函数"),n("a",T,[N,t(a)]),s("将哈希表编码成"),S,s("格式时，每次的输出都是一样的。")]),V,n("p",null,[s("当函数"),M,s("传入的参数类型为哈希表时，会选择对应的编码函数 "),n("a",C,[L,t(a)]),s("：")]),R,n("ol",null,[n("li",null,[n("a",z,[s("https://stackoverflow.com/questions/55925822/why-are-iterations-over-maps-random"),t(a)])]),n("li",null,[n("a",W,[s("The Go Blog: Go maps in action: Iteration order:"),t(a)])]),n("li",null,[n("a",H,[s("Go 1 Release Notes: Iterating in maps:"),t(a)])]),n("li",null,[n("a",J,[s("https://draveness.me/golang/docs/part2-foundation/ch05-keyword/golang-for-range/"),t(a)])])])])}const $=o(r,[["render",K],["__file","4.why_iterate_map_randomly.html.vue"]]);export{$ as default};
