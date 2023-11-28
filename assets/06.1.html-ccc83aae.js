import{_ as e,Z as a,$ as n,a3 as s}from"./framework-dee406ed.js";const t={},i=s(`<h1 id="_6-1-介绍" tabindex="-1"><a class="header-anchor" href="#_6-1-介绍" aria-hidden="true">#</a> 6.1 介绍</h1><p>编写多个函数的主要目的是将一个需要很多行代码的复杂问题分解为一系列简单的任务（那就是函数）来解决。而且，同一个任务（函数）可以被调用多次，有助于代码重用。</p><p>好的程序是非常注意 DRY 原则的，即不要重复你自己 (Don&#39;t Repeat Yourself)，意思是执行特定任务的代码只能在程序里面出现一次。</p><p>Go 不允许函数重载，即同名函数。</p><h2 id="_6-1-1-类型" tabindex="-1"><a class="header-anchor" href="#_6-1-1-类型" aria-hidden="true">#</a> 6.1.1 类型</h2><ul><li>普通的带有名字的函数</li><li>匿名函数或lambda函数</li><li>方法(Methods)</li></ul><h2 id="_6-1-2-函数签名" tabindex="-1"><a class="header-anchor" href="#_6-1-2-函数签名" aria-hidden="true">#</a> 6.1.2 函数签名</h2><p>函数参数、返回值以及它们的类型被统称为函数签名</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">functionName</span><span class="token punctuation">(</span>parameter_list<span class="token punctuation">)</span> <span class="token punctuation">(</span>return_value_list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   …
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>parameter_list</code> 的形式为 <code>(param1 type1, param2 type2, …)</code></li><li><code>return_value_list</code> 的形式为 <code>(ret1 type1, ret2 type2, …)</code></li></ul>`,10),c=[i];function l(o,r){return a(),n("div",null,c)}const p=e(t,[["render",l],["__file","06.1.html.vue"]]);export{p as default};