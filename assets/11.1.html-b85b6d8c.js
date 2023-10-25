const n=JSON.parse('{"key":"v-4e112ea6","path":"/reading/algorithm/offer_oriented/AL_DS/11_binary_search/11.1.html","title":"11.1 二分查找基础","lang":"zh-CN","frontmatter":{"title":"11.1 二分查找基础","date":"2023-09-13T00:00:00.000Z","category":["algorithm"]},"headers":[{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1694640689000},"readingTime":{"minutes":0.41,"words":123},"filePathRelative":"reading/algorithm/offer_oriented/AL_DS/11_binary_search/11.1.md","localizedDate":"2023年9月13日","excerpt":"<p>若在长度为n的数组中查找数字, 全部遍历需要时间O(n).</p>\\n<p>若数组是有序的, 那么每次只用在一半的元素中查找即可, 时间O(logn)</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">search</span><span class=\\"token punctuation\\">(</span>nums <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">,</span> target <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">{</span>\\n    left<span class=\\"token punctuation\\">,</span> right <span class=\\"token operator\\">:=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">len</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span>\\n    \\n    <span class=\\"token keyword\\">for</span> left <span class=\\"token operator\\">&lt;=</span> right <span class=\\"token punctuation\\">{</span>\\n        mid <span class=\\"token operator\\">:=</span> <span class=\\"token punctuation\\">(</span>left<span class=\\"token operator\\">+</span>right<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">/</span> <span class=\\"token number\\">2</span>\\n        \\n        <span class=\\"token keyword\\">if</span> target <span class=\\"token operator\\">==</span> nums<span class=\\"token punctuation\\">[</span>mid<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> mid\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        <span class=\\"token keyword\\">if</span> target <span class=\\"token operator\\">&gt;</span> nums<span class=\\"token punctuation\\">[</span>mid<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">{</span>\\n            left <span class=\\"token operator\\">=</span> mid <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        \\n        <span class=\\"token keyword\\">if</span> target <span class=\\"token operator\\">&lt;</span> nums<span class=\\"token punctuation\\">[</span>mid<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">{</span>\\n            right <span class=\\"token operator\\">=</span> mid <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};