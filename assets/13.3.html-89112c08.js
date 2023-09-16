const e=JSON.parse('{"key":"v-4ffbf146","path":"/reading/algorithm/offer_oriented/AL_DS/13_backtracking/13.3.html","title":"13.3 回溯法解决其他类型的问题","lang":"zh-CN","frontmatter":{"title":"13.3 回溯法解决其他类型的问题","date":"2023-09-15T00:00:00.000Z","category":["algorithm"]},"headers":[{"level":2,"title":"13.3.1 问题85: 生成匹配括号","slug":"_13-3-1-问题85-生成匹配括号","link":"#_13-3-1-问题85-生成匹配括号","children":[{"level":3,"title":"13.3.1.1 分析&题解","slug":"_13-3-1-1-分析-题解","link":"#_13-3-1-1-分析-题解","children":[]}]},{"level":2,"title":"13.3.2 问题86: 分割回文子串","slug":"_13-3-2-问题86-分割回文子串","link":"#_13-3-2-问题86-分割回文子串","children":[{"level":3,"title":"13.3.2.1 分析&题解","slug":"_13-3-2-1-分析-题解","link":"#_13-3-2-1-分析-题解","children":[]}]},{"level":2,"title":"13.3.3 问题87: 恢复IP地址","slug":"_13-3-3-问题87-恢复ip地址","link":"#_13-3-3-问题87-恢复ip地址","children":[{"level":3,"title":"13.3.3.1  分析&题解","slug":"_13-3-3-1-分析-题解","link":"#_13-3-3-1-分析-题解","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":3.19,"words":956},"filePathRelative":"reading/algorithm/offer_oriented/AL_DS/13_backtracking/13.3.md","localizedDate":"2023年9月15日","excerpt":"<p>若一个问题每一步有多个选项, 并且需要列出所有解, 那么就适用于回溯法.</p>\\n<h2> 13.3.1 问题85: 生成匹配括号</h2>\\n<p><a href=\\"https://leetcode.cn/problems/IDBivT/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">LCR 085. 括号生成</a></p>\\n<blockquote>\\n<p>正整数 <code>n</code> 代表生成括号的对数，请设计一个函数，用于能够生成所有可能的并且 <strong>有效的</strong> 括号组合。</p>\\n<p><strong>示例 1：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入：n = 3\\n输出：[\\"((()))\\",\\"(()())\\",\\"(())()\\",\\"()(())\\",\\"()()()\\"]\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>示例 2：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入：n = 1\\n输出：[\\"()\\"]\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>提示：</strong></p>\\n<ul>\\n<li><code>1 &lt;= n &lt;= 8</code></li>\\n</ul>\\n</blockquote>"}');export{e as data};