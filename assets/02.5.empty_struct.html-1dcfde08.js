import{_ as a,Z as t,$ as p,a0 as n,a1 as e,a2 as o,a3 as c,H as u}from"./framework-09afcf0b.js";const i={},l=c(`<h2 id="_1-空结构体的内存占用" tabindex="-1"><a class="header-anchor" href="#_1-空结构体的内存占用" aria-hidden="true">#</a> 1. 空结构体的内存占用</h2><p>使用<code>unsafe.Sizeof</code>可以获取一个变量的内存占用（单位：字节）</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">emptyStructMemUsage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	es <span class="token operator">:=</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Sizeof</span><span class="token punctuation">(</span>es<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// </span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出空结构体的内存占用为 0。</p><h2 id="_2-空结构体的作用" tabindex="-1"><a class="header-anchor" href="#_2-空结构体的作用" aria-hidden="true">#</a> 2. 空结构体的作用</h2><p>因为空结构体不占据内存空间，因此被广泛作为各种场景下的占位符使用：</p><ol><li>节省资源</li><li>空结构体本身就具备很强的语义，即这里不需要任何值，仅作为占位符</li></ol><h3 id="_2-1-实现集合-set" tabindex="-1"><a class="header-anchor" href="#_2-1-实现集合-set" aria-hidden="true">#</a> 2.1 实现集合(Set)</h3><p>Golang 标准库中没有 Set 的实现，可以使用 map 代替。</p><p>因为此时 map 的 value，没有意义，若使用 bool 类型也会占用 1 Byte的内存，此时使用空结构体作为占位符，可以节省内存资源。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">type</span> Set <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Set<span class="token punctuation">)</span> <span class="token function">Has</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> s<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
	<span class="token keyword">return</span> ok
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Set<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Set<span class="token punctuation">)</span> <span class="token function">Delete</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">delete</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">setOp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span>Set<span class="token punctuation">)</span>
	s<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
	s<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
	s<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">Has</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">Has</span><span class="token punctuation">(</span><span class="token string">&quot;D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	s<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
<span class="token keyword">map</span><span class="token punctuation">[</span>A<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span> B<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span> C<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token boolean">true</span>
<span class="token boolean">false</span>
<span class="token keyword">map</span><span class="token punctuation">[</span>A<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span> C<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-不发送数据的-channel" tabindex="-1"><a class="header-anchor" href="#_2-2-不发送数据的-channel" aria-hidden="true">#</a> 2.2 不发送数据的 channel</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">worker</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token operator">&lt;-</span>ch
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;do something&quot;</span><span class="token punctuation">)</span>
	<span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">worker</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	ch <span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候使用 channel 不需要发送任何的数据，只用来通知子协程(goroutine)执行任务，或只用来控制协程并发度。这种情况下，使用空结构体作为占位符就非常合适了。</p><h3 id="_2-3-仅包含方法的结构体" tabindex="-1"><a class="header-anchor" href="#_2-3-仅包含方法的结构体" aria-hidden="true">#</a> 2.3 仅包含方法的结构体</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Door <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d Door<span class="token punctuation">)</span> <span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Open the door&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d Door<span class="token punctuation">)</span> <span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Close the door&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在部分场景下，结构体只包含方法，不包含任何的字段。例如上面例子中的 <code>Door</code>，在这种情况下，<code>Door</code> 事实上可以用任何的数据结构替代。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Door int
type Door bool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>无论是 <code>int</code> 还是 <code>bool</code> 都会浪费额外的内存，因此呢，这种情况下，声明为空结构体是最合适的。</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,20),k={href:"https://geektutu.com/post/hpg-empty-struct.html",target:"_blank",rel:"noopener noreferrer"};function d(r,v){const s=u("ExternalLinkIcon");return t(),p("div",null,[l,n("ol",null,[n("li",null,[n("a",k,[e("https://geektutu.com/post/hpg-empty-struct.html"),o(s)])])])])}const b=a(i,[["render",d],["__file","02.5.empty_struct.html.vue"]]);export{b as default};
