import{_ as a,Z as e,$ as t,a0 as n,a1 as p,a2 as o,a3 as c,H as l}from"./framework-dee406ed.js";const i={},r=c(`<p>若在长度为n的数组中查找数字, 全部遍历需要时间O(n).</p><p>若数组是有序的, 那么每次只用在一半的元素中查找即可, 时间O(logn)</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">search</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    left<span class="token punctuation">,</span> right <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
    
    <span class="token keyword">for</span> left <span class="token operator">&lt;=</span> right <span class="token punctuation">{</span>
        mid <span class="token operator">:=</span> <span class="token punctuation">(</span>left<span class="token operator">+</span>right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
        
        <span class="token keyword">if</span> target <span class="token operator">==</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> mid
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> target <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">if</span> target <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,4),u={href:"https://book.douban.com/subject/35543447/",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const s=l("ExternalLinkIcon");return e(),t("div",null,[r,n("ol",null,[n("li",null,[n("a",u,[p("剑指Offer（专项突破版）"),o(s)])])])])}const b=a(i,[["render",d],["__file","11.1.html.vue"]]);export{b as default};
