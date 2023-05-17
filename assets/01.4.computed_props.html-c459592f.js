import{_ as e,Z as t,$ as p,a3 as a,a0 as s,a1 as n}from"./framework-09afcf0b.js";const o={},c=a(`<h1 id="_6-计算属性" tabindex="-1"><a class="header-anchor" href="#_6-计算属性" aria-hidden="true">#</a> 6. 计算属性</h1><h2 id="_6-1-示例" tabindex="-1"><a class="header-anchor" href="#_6-1-示例" aria-hidden="true">#</a> 6.1 示例</h2><p>如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> author <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Vue 2 - Advanced Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 3 - Basic Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 4 - The Mystery&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Has published books:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ author.books.length &gt; 0 ? &#39;Yes&#39; : &#39;No&#39; }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在模板中需要不止一次这样的计算，可不想将这样的代码在模板里重复好多遍。</p><p>可以使用<strong>计算属性</strong>来描述依赖响应式状态的复杂逻辑</p>`,7),l=s("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[s("pre",{vue:"",class:"language-vue"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("script")]),n(),s("span",{class:"token attr-name"},"setup"),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" reactive"),s("span",{class:"token punctuation"},","),n(" computed "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'vue'"),n(`

`),s("span",{class:"token keyword"},"const"),n(" author "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"reactive"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token literal-property property"},"name"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'John Doe'"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token literal-property property"},"books"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
    `),s("span",{class:"token string"},"'Vue 2 - Advanced Guide'"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token string"},"'Vue 3 - Basic Guide'"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token string"},"'Vue 4 - The Mystery'"),n(`
  `),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),n(`

`),s("span",{class:"token comment"},"// 一个计算属性 ref"),n(`
`),s("span",{class:"token keyword"},"const"),n(" publishedBooksMessage "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"computed"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"=>"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token keyword"},"return"),n(" author"),s("span",{class:"token punctuation"},"."),n("books"),s("span",{class:"token punctuation"},"."),n("length "),s("span",{class:"token operator"},">"),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token operator"},"?"),n(),s("span",{class:"token string"},"'Yes'"),n(),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'No'"),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),n(`
`)])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("script")]),s("span",{class:"token punctuation"},">")]),n(`

`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("p")]),s("span",{class:"token punctuation"},">")]),n("Has published books:"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("p")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("span")]),s("span",{class:"token punctuation"},">")]),n("{{ publishedBooksMessage }}"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("span")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),i=a(`<ul><li>计算属性 <code>publishedBooksMessage</code>: <code>computed()</code> 方法期望接收一个 getter 函数，返回值为一个<strong>计算属性 ref</strong></li><li>计算属性会自动追踪响应式依赖。 它会检测到 <code>publishedBooksMessage</code> 依赖于 <code>author.books</code>，所以当 <code>author.books</code> 改变时，任何依赖于 <code>publishedBooksMessage</code> 的绑定都会同时更新。</li></ul><h2 id="_6-2-计算属性缓存-vs-方法" tabindex="-1"><a class="header-anchor" href="#_6-2-计算属性缓存-vs-方法" aria-hidden="true">#</a> 6.2 计算属性缓存 vs 方法</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ calculateBooksMessage() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 组件中</span>
<span class="token keyword">function</span> <span class="token function">calculateBooksMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> author<span class="token punctuation">.</span>books<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;Yes&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;No&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用一个函数也会获得和计算属性相同的结果，和计算属性不同之处在于：</p><ul><li><strong>计算属性值会基于其响应式依赖被缓存</strong></li><li>一个计算属性仅会在其响应式依赖更新时才重新计算</li></ul><p>要 <code>author.books</code> 不改变，无论多少次访问 <code>publishedBooksMessage</code> 都会立即返回先前的计算结果，而不用重复执行 getter 函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>计算属性<code>now</code>，永远不会更新， 因为 <code>Date.now()</code> 并不是一个响应式依赖；</p><p>如使用方法调用，<strong>总是</strong>会在重渲染发生时再次执行函数</p><h2 id="_6-3-可写计算属性" tabindex="-1"><a class="header-anchor" href="#_6-3-可写计算属性" aria-hidden="true">#</a> 6.3 可写计算属性</h2><p>计算属性默认是只读的。当尝试修改一个计算属性时，会收到一个运行时警告。</p><p>通过同时提供 getter 和 setter 来创建可写计算属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> firstName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> lastName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Doe&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// getter</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> firstName<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// setter</span>
  <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注意：我们这里使用的是解构赋值语法</span>
    <span class="token punctuation">[</span>firstName<span class="token punctuation">.</span>value<span class="token punctuation">,</span> lastName<span class="token punctuation">.</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> newValue<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code>fullName.value = &#39;John Doe&#39;</code> 时，setter 会被调用而 <code>firstName</code> 和 <code>lastName</code> 会随之更新。</p><h2 id="_6-3-最佳实践" tabindex="-1"><a class="header-anchor" href="#_6-3-最佳实践" aria-hidden="true">#</a> 6.3 最佳实践</h2><h3 id="_6-3-1-getter-不应有副作用" tabindex="-1"><a class="header-anchor" href="#_6-3-1-getter-不应有副作用" aria-hidden="true">#</a> 6.3.1 Getter 不应有副作用</h3><p><strong>计算属性的 getter 应只做计算而没有任何其他的副作用</strong></p><h3 id="_6-3-2-避免直接修改计算属性值" tabindex="-1"><a class="header-anchor" href="#_6-3-2-避免直接修改计算属性值" aria-hidden="true">#</a> 6.3.2 避免直接修改计算属性值</h3><p>从计算属性返回的值是派生状态.</p><p>可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的.</p><p>计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。</p>`,22),u=[c,l,i];function r(d,k){return t(),p("div",null,u)}const m=e(o,[["render",r],["__file","01.4.computed_props.html.vue"]]);export{m as default};
