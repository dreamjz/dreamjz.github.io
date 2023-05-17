import{_ as p,Z as o,$ as c,a0 as n,a1 as s,a2 as e,a3 as t,H as i}from"./framework-09afcf0b.js";const l={},r=n("h1",{id:"_24-异步组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_24-异步组件","aria-hidden":"true"},"#"),s(" 24. 异步组件")],-1),u=n("h2",{id:"_24-1-基本用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_24-1-基本用法","aria-hidden":"true"},"#"),s(" 24.1 基本用法")],-1),d=n("p",null,"在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。",-1),k={href:"https://cn.vuejs.org/api/general.html#defineasynccomponent",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"defineAsyncComponent",-1),v=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> AsyncComp <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...从服务器获取组件</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token comment">/* 获取到的组件 */</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// ... 像使用其他一般组件一样使用 \`AsyncComp\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>defineAsyncComponent</code> 方法接收一个返回 Promise 的加载函数。这个 Promise 的 <code>resolve</code> 回调方法应该在从服务器获得组件定义时调用。你也可以调用 <code>reject(reason)</code> 表明加载失败。</p>`,2),g={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"defineAsyncComponent",-1),_=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> AsyncComp <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/MyComponent.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后得到的 <code>AsyncComp</code> 是一个外层包装过的组件，仅在页面需要它渲染时才会调用加载内部实际组件的函数。它会将接收到的 props 和插槽传给内部组件，所以你可以使用这个异步的包装组件无缝地替换原始组件，同时实现延迟加载。</p>`,2),y=n("code",null,"app.component()",-1),h={href:"https://cn.vuejs.org/guide/components/registration.html#global-registration",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">,</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/MyComponent.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以直接在父组件中直接定义它们：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> AdminPage <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/AdminPageComponent.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AdminPage</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_24-2-加载与错误状态" tabindex="-1"><a class="header-anchor" href="#_24-2-加载与错误状态" aria-hidden="true">#</a> 24.2 加载与错误状态</h2><p>异步操作不可避免地会涉及到加载和错误状态，因此 <code>defineAsyncComponent()</code> 也支持在高级选项中处理这些状态：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> AsyncComp <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 加载函数</span>
  <span class="token function-variable function">loader</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./Foo.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// 加载异步组件时使用的组件</span>
  <span class="token literal-property property">loadingComponent</span><span class="token operator">:</span> LoadingComponent<span class="token punctuation">,</span>
  <span class="token comment">// 展示加载组件前的延迟时间，默认为 200ms</span>
  <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>

  <span class="token comment">// 加载失败后展示的组件</span>
  <span class="token literal-property property">errorComponent</span><span class="token operator">:</span> ErrorComponent<span class="token punctuation">,</span>
  <span class="token comment">// 如果提供了一个 timeout 时间限制，并超时了</span>
  <span class="token comment">// 也会显示这里配置的报错组件，默认值是：Infinity</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">3000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果提供了一个加载组件，它将在内部组件加载时先行显示。在加载组件显示之前有一个默认的 200ms 延迟——这是因为在网络状况较好时，加载完成得很快，加载组件和最终组件之间的替换太快可能产生闪烁，反而影响用户感受。</p><p>如果提供了一个报错组件，则它会在加载器函数返回的 Promise 抛错时被渲染。你还可以指定一个超时时间，在请求耗时超过指定时间时也会渲染报错组件。</p>`,8);function C(A,j){const a=i("ExternalLinkIcon");return o(),c("div",null,[r,u,d,n("p",null,[s("Vue 提供了 "),n("a",k,[m,e(a)]),s(" 方法来实现此功能：")]),v,n("p",null,[n("a",g,[s("ES 模块动态导入"),e(a)]),s("也会返回一个 Promise，所以多数情况下我们会将它和 "),b,s(" 搭配使用。类似 Vite 和 Webpack 这样的构建工具也支持此语法 (并且会将它们作为打包时的代码分割点)，因此我们也可以用它来导入 Vue 单文件组件：")]),_,n("p",null,[s("与普通组件一样，异步组件可以使用 "),y,s(),n("a",h,[s("全局注册"),e(a)]),s("：")]),f])}const x=p(l,[["render",C],["__file","02.8.async_component.html.vue"]]);export{x as default};
