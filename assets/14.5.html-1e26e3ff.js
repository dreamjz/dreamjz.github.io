import{_ as n,Z as s,$ as a,a3 as e}from"./framework-dee406ed.js";const t={},i=e(`<h1 id="_14-5-通道、超时和计时器-ticker" tabindex="-1"><a class="header-anchor" href="#_14-5-通道、超时和计时器-ticker" aria-hidden="true">#</a> 14.5 通道、超时和计时器(Ticker)</h1><h2 id="_14-5-1-计时器" tabindex="-1"><a class="header-anchor" href="#_14-5-1-计时器" aria-hidden="true">#</a> 14.5.1 计时器</h2><p><code>time.Ticker</code>, 可以指定时间间隔重复向通道<code>c</code>发送时间值：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Ticker <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    C <span class="token operator">&lt;-</span><span class="token keyword">chan</span> Time <span class="token comment">// the channel on which the ticks are delivered.</span>
    <span class="token comment">// contains filtered or unexported fields</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过工厂函数<code>func NewTicker(dur) *Ticker</code>指定时间间隔。</p><p><code>time.Tick()</code>: <code>Tick(d Duration) &lt;-chan Time</code> 返回通道。</p><h2 id="_14-5-2-定时器" tabindex="-1"><a class="header-anchor" href="#_14-5-2-定时器" aria-hidden="true">#</a> 14.5.2 定时器</h2><p>定时器 (<code>Timer</code>) 结构体看上去和计时器 (<code>Ticker</code>) 结构体的确很像（构造为 <code>NewTimer(d Duration)</code>），但是它只发送一次时间，在 <code>Dration d</code> 之后。</p><p><code>time.After()</code>: <code>func After(d Duration) &lt;-chan Time</code></p><p><a href="path/14_5_timer.go">14_5_timer.go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> chapter_14

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">mainTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	tick <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Tick</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	timer <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>tick<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;tick&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>timer<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;boom&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
			time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">500</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
.
tick
.
.
tick
.
.
tick
.
.
tick
.
.
tick
boom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[i];function o(p,l){return s(),a("div",null,c)}const u=n(t,[["render",o],["__file","14.5.html.vue"]]);export{u as default};
