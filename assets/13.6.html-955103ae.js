import{_ as n,Z as s,$ as a,a3 as t}from"./framework-dee406ed.js";const e={},p=t(`<h1 id="_13-6-启动外部命令和程序" tabindex="-1"><a class="header-anchor" href="#_13-6-启动外部命令和程序" aria-hidden="true">#</a> 13.6 启动外部命令和程序</h1><p>使用下列方式可以启动外部程序：</p><ul><li><code>os</code>包</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">StartProcess</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> argv <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> attr <span class="token operator">*</span>ProcAttr<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Process<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p><code>os/exec</code>包 创建命令</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Command</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> arg <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Cmd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p><a href="path/13_5_panic_recover_closure.go">13_5_panic_recover_closure.go</a></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> chapter_13

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;fmt&quot;</span>
   <span class="token string">&quot;os&quot;</span>
   <span class="token string">&quot;os/exec&quot;</span>
   <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">execCmd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   ls <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">)</span>
   o<span class="token punctuation">,</span> err <span class="token operator">:=</span> ls<span class="token punctuation">.</span><span class="token function">CombinedOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Output:\\n%s&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span>

   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Repeat</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   env <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Environ</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   procAttr <span class="token operator">:=</span> <span class="token operator">&amp;</span>os<span class="token punctuation">.</span>ProcAttr<span class="token punctuation">{</span>
      Env<span class="token punctuation">:</span> env<span class="token punctuation">,</span>
      Files<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>os<span class="token punctuation">.</span>File<span class="token punctuation">{</span>
         os<span class="token punctuation">.</span>Stdin<span class="token punctuation">,</span>
         os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span>
         os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span>
   <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">StartProcess</span><span class="token punctuation">(</span><span class="token string">\`D:\\GCC\\bin\\ls.exe\`</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> procAttr<span class="token punctuation">)</span>
   <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">check</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Output:
13_5_panic_recover_closure.go
13_5_panic_recover_closure_test.go
13_6_exec.go
13_6_exec_test.go
panic_recover.go
panic_recover_test.go
--------------------
13_5_panic_recover_closure.go
13_5_panic_recover_closure_test.go
13_6_exec.go
13_6_exec_test.go
panic_recover.go
panic_recover_test.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","13.6.html.vue"]]);export{r as default};
