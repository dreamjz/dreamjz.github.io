const n=JSON.parse('{"key":"v-c4bbd09c","path":"/reading/golang/high-performance-go/02-datastructure/02.3.for-range.html","title":"2.3 for 和 for-range 的性能比较","lang":"zh-CN","frontmatter":{"title":"2.3 for 和 for-range 的性能比较","date":"2023-10-03T00:00:00.000Z","category":["golang"],"article":false},"headers":[{"level":2,"title":"1. 遍历简单元素的切片","slug":"_1-遍历简单元素的切片","link":"#_1-遍历简单元素的切片","children":[]},{"level":2,"title":"2. 遍历 结构体 切片","slug":"_2-遍历-结构体-切片","link":"#_2-遍历-结构体-切片","children":[]},{"level":2,"title":"3. 遍历 结构体指针 切片","slug":"_3-遍历-结构体指针-切片","link":"#_3-遍历-结构体指针-切片","children":[]},{"level":2,"title":"4. 原因","slug":"_4-原因","link":"#_4-原因","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1699943615000},"readingTime":{"minutes":3.02,"words":907},"filePathRelative":"reading/golang/high-performance-go/02-datastructure/02.3.for-range.md","localizedDate":"2023年10月3日","excerpt":"<h2> 1. 遍历简单元素的切片</h2>\\n<p>以整型切片为例：</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">iterUsingFor</span><span class=\\"token punctuation\\">(</span>a <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">var</span> res <span class=\\"token builtin\\">int</span>\\n\\t<span class=\\"token keyword\\">for</span> i <span class=\\"token operator\\">:=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token function\\">len</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\tres <span class=\\"token operator\\">=</span> a<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token boolean\\">_</span> <span class=\\"token operator\\">=</span> res\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">iterUsingRangeIdx</span><span class=\\"token punctuation\\">(</span>a <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">var</span> res <span class=\\"token builtin\\">int</span>\\n\\t<span class=\\"token keyword\\">for</span> i <span class=\\"token operator\\">:=</span> <span class=\\"token keyword\\">range</span> a <span class=\\"token punctuation\\">{</span>\\n\\t\\tres <span class=\\"token operator\\">=</span> a<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token boolean\\">_</span> <span class=\\"token operator\\">=</span> res\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">iterUsingRangeVal</span><span class=\\"token punctuation\\">(</span>a <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">var</span> res <span class=\\"token builtin\\">int</span>\\n\\t<span class=\\"token keyword\\">for</span> <span class=\\"token boolean\\">_</span><span class=\\"token punctuation\\">,</span> v <span class=\\"token operator\\">:=</span> <span class=\\"token keyword\\">range</span> a <span class=\\"token punctuation\\">{</span>\\n\\t\\tres <span class=\\"token operator\\">=</span> v\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token boolean\\">_</span> <span class=\\"token operator\\">=</span> res\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// test funcs </span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">BenchmarkIterIntSlice</span><span class=\\"token punctuation\\">(</span>b <span class=\\"token operator\\">*</span>testing<span class=\\"token punctuation\\">.</span>B<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\ttests <span class=\\"token operator\\">:=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\tname <span class=\\"token builtin\\">string</span>\\n\\t\\tf    <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token punctuation\\">{</span>name<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"UsingFor\\"</span><span class=\\"token punctuation\\">,</span> f<span class=\\"token punctuation\\">:</span> iterUsingFor<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t<span class=\\"token punctuation\\">{</span>name<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"UsingRangeIdx\\"</span><span class=\\"token punctuation\\">,</span> f<span class=\\"token punctuation\\">:</span> iterUsingRangeIdx<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t<span class=\\"token punctuation\\">{</span>name<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"UsingRangeVal\\"</span><span class=\\"token punctuation\\">,</span> f<span class=\\"token punctuation\\">:</span> iterUsingRangeVal<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\n\\t<span class=\\"token keyword\\">for</span> k <span class=\\"token operator\\">:=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> k <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">100000</span><span class=\\"token punctuation\\">;</span> k <span class=\\"token operator\\">*=</span> <span class=\\"token number\\">10</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\tnums <span class=\\"token operator\\">:=</span> <span class=\\"token function\\">genSliceWithCap</span><span class=\\"token punctuation\\">(</span>k<span class=\\"token punctuation\\">)</span>\\n\\n\\t\\t<span class=\\"token keyword\\">for</span> <span class=\\"token boolean\\">_</span><span class=\\"token punctuation\\">,</span> tt <span class=\\"token operator\\">:=</span> <span class=\\"token keyword\\">range</span> tests <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\tb<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Run</span><span class=\\"token punctuation\\">(</span>fmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Sprintf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%-20s_%.e\\"</span><span class=\\"token punctuation\\">,</span> tt<span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">float64</span><span class=\\"token punctuation\\">(</span>k<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span>b <span class=\\"token operator\\">*</span>testing<span class=\\"token punctuation\\">.</span>B<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t<span class=\\"token keyword\\">for</span> i <span class=\\"token operator\\">:=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> b<span class=\\"token punctuation\\">.</span>N<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t\\ttt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">f</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">)</span>\\n\\t\\t\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\n\\t\\t<span class=\\"token keyword\\">if</span> k <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\tk <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
