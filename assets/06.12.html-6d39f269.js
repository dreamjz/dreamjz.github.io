const n=JSON.parse('{"key":"v-79c1c4c1","path":"/note/golang/open-source-books/the-way-to-go/06/06.12.html","title":"6.12 通过内存缓存提升性能","lang":"zh-CN","frontmatter":{},"headers":[],"readingTime":{"minutes":0.99,"words":298},"filePathRelative":"note/golang/open-source-books/the-way-to-go/06/06.12.md","excerpt":"<h1> 6.12 通过内存缓存提升性能</h1>\\n<p>通过在内存中缓存和重复利用相同的计算结果，称之为内存缓存。</p>\\n<p>以 fibonacci 数列为例，计算第n个数字需要前两个数字，而前两个数字已经计算过了，将其缓存在内存中可提升速度。</p>\\n<p><a href=\\"path/06_12_fibonacci_memorization.go\\">06_12_fibonacci_memorization.go</a></p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">const</span> LIMIT <span class=\\"token operator\\">=</span> <span class=\\"token number\\">50</span>\\n\\n<span class=\\"token keyword\\">var</span> fibs <span class=\\"token punctuation\\">[</span>LIMIT<span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">uint64</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">fibF</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token function\\">timeSpend</span><span class=\\"token punctuation\\">(</span>fib<span class=\\"token punctuation\\">,</span> printFibs<span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token function\\">timeSpend</span><span class=\\"token punctuation\\">(</span>fibMem<span class=\\"token punctuation\\">,</span> printFibs<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">fib</span><span class=\\"token punctuation\\">(</span>n <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">(</span>res <span class=\\"token builtin\\">uint64</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">if</span> n <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\tres <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span>\\n\\t\\t<span class=\\"token keyword\\">return</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\tres <span class=\\"token operator\\">=</span> <span class=\\"token function\\">fib</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> <span class=\\"token function\\">fib</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token operator\\">-</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token keyword\\">return</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">fibMem</span><span class=\\"token punctuation\\">(</span>n <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">(</span>res <span class=\\"token builtin\\">uint64</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">if</span> fibs<span class=\\"token punctuation\\">[</span>n<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\tres <span class=\\"token operator\\">=</span> fibs<span class=\\"token punctuation\\">[</span>n<span class=\\"token punctuation\\">]</span>\\n\\t\\t<span class=\\"token keyword\\">return</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token keyword\\">if</span> n <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\tres <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span>\\n\\t<span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\tres <span class=\\"token operator\\">=</span> <span class=\\"token function\\">fibMem</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> <span class=\\"token function\\">fibMem</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token operator\\">-</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token comment\\">// save result</span>\\n\\tfibs<span class=\\"token punctuation\\">[</span>n<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> res\\n\\t<span class=\\"token keyword\\">return</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">printFibs</span><span class=\\"token punctuation\\">(</span>fib <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">uint64</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">for</span> i <span class=\\"token operator\\">:=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> LIMIT<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%d \\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">fib</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">timeSpend</span><span class=\\"token punctuation\\">(</span>fib <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">uint64</span><span class=\\"token punctuation\\">,</span> p <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span>fib <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">uint64</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\tstart <span class=\\"token operator\\">:=</span> time<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Now</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token function\\">p</span><span class=\\"token punctuation\\">(</span>fib<span class=\\"token punctuation\\">)</span>\\n\\tend <span class=\\"token operator\\">:=</span> time<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Now</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Time: \\"</span><span class=\\"token punctuation\\">,</span> end<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Sub</span><span class=\\"token punctuation\\">(</span>start<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
