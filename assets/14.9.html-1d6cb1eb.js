import{_ as n,Z as s,$ as a,a3 as e}from"./framework-09afcf0b.js";const t={},p=e(`<h1 id="_14-9-future-模式" tabindex="-1"><a class="header-anchor" href="#_14-9-future-模式" aria-hidden="true">#</a> 14.9 Future 模式</h1><p><strong>future模式</strong>： 在使用某值之前需要先对其进行计算。</p><p>Futures 模式通过闭包和通道可以很容易实现，类似于生成器，不同地方在于 Futures 需要返回一个值。</p><p>假设我们有一个矩阵类型，我们需要计算两个矩阵 A 和 B 乘积的逆，首先我们通过函数 <code>Inverse(M)</code> 分别对其进行求逆运算，再将结果相乘。如下函数 <code>InverseProduct()</code> 实现了如上过程：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">InverseProduct</span><span class="token punctuation">(</span>a Matrix<span class="token punctuation">,</span> b Matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a_inv <span class="token operator">:=</span> <span class="token function">Inverse</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    b_inv <span class="token operator">:=</span> <span class="token function">Inverse</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">Product</span><span class="token punctuation">(</span>a_inv<span class="token punctuation">,</span> b_inv<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个求逆运算其实可以并行执行的。换句话说，调用 <code>Product()</code> 函数只需要等到 <code>a_inv</code> 和 <code>b_inv</code> 的计算完成。如下代码实现了并行计算方式：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">InverseProduct</span><span class="token punctuation">(</span>a Matrix<span class="token punctuation">,</span> b Matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a_inv_future <span class="token operator">:=</span> <span class="token function">InverseFuture</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>   <span class="token comment">// start as a goroutine</span>
    b_inv_future <span class="token operator">:=</span> <span class="token function">InverseFuture</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>   <span class="token comment">// start as a goroutine</span>
    a_inv <span class="token operator">:=</span> <span class="token operator">&lt;-</span>a_inv_future
    b_inv <span class="token operator">:=</span> <span class="token operator">&lt;-</span>b_inv_future
    <span class="token keyword">return</span> <span class="token function">Product</span><span class="token punctuation">(</span>a_inv<span class="token punctuation">,</span> b_inv<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">InverseFuture</span><span class="token punctuation">(</span>a Matrix<span class="token punctuation">)</span> <span class="token keyword">chan</span> Matrix <span class="token punctuation">{</span>
    future <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> Matrix<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        future <span class="token operator">&lt;-</span> <span class="token function">Inverse</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> future
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当开发一个计算密集型库时，使用 Futures 模式设计 API 接口是很有意义的。在你的包使用 Futures 模式，且能保持友好的 API 接口。此外，Futures 可以通过一个异步的 API 暴露出来。这样你可以以最小的成本将包中的并行计算移到用户代码中。</p>`,9),o=[p];function c(u,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","14.9.html.vue"]]);export{r as default};
