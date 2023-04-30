import{_ as e,X as l,Y as p,Z as n,$ as s,a0 as r,a1 as c,F as t}from"./framework-8cb7ec75.js";const o={},i=n("h1",{id:"预备知识",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#预备知识","aria-hidden":"true"},"#"),s(" 预备知识")],-1),u=n("h2",{id:"_1-调试源代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-调试源代码","aria-hidden":"true"},"#"),s(" 1. 调试源代码")],-1),m=n("code",null,"cloc",-1),b={href:"https://github.com/AlDanial/cloc",target:"_blank",rel:"noopener noreferrer"},d=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cloc src
	<span class="token number">6304</span> text files.
    <span class="token number">5006</span> unique files.                                          
    <span class="token number">1599</span> files ignored.
    github.com/AlDanial/cloc <span class="token function">v</span> <span class="token number">1.92</span>  <span class="token assign-left variable">T</span><span class="token operator">=</span><span class="token number">32.47</span> s <span class="token punctuation">(</span><span class="token number">154.2</span> files/s, <span class="token number">60680.2</span> lines/s<span class="token punctuation">)</span>
-----------------------------------------------------------------------------------
Language                         files          blank        comment           code
-----------------------------------------------------------------------------------
Go                                <span class="token number">4357</span>         <span class="token number">144152</span>         <span class="token number">252592</span>        <span class="token number">1416081</span>
Assembly                           <span class="token number">501</span>          <span class="token number">12956</span>          <span class="token number">18855</span>         <span class="token number">108986</span>
C                                   <span class="token number">68</span>            <span class="token number">763</span>            <span class="token number">599</span>           <span class="token number">4745</span>
CSV                                  <span class="token number">1</span>              <span class="token number">0</span>              <span class="token number">0</span>           <span class="token number">2119</span>
JSON                                <span class="token number">12</span>              <span class="token number">0</span>              <span class="token number">0</span>           <span class="token number">1712</span>
Perl                                <span class="token number">10</span>            <span class="token number">170</span>            <span class="token number">170</span>           <span class="token number">1098</span>
Bourne Shell                         <span class="token number">7</span>            <span class="token number">132</span>            <span class="token number">646</span>           <span class="token number">1064</span>
Markdown                             <span class="token number">6</span>            <span class="token number">230</span>              <span class="token number">0</span>            <span class="token number">715</span>
Bourne Again Shell                  <span class="token number">12</span>            <span class="token number">101</span>            <span class="token number">215</span>            <span class="token number">460</span>
Python                               <span class="token number">1</span>            <span class="token number">132</span>            <span class="token number">104</span>            <span class="token number">370</span>
DOS Batch                            <span class="token number">5</span>             <span class="token number">57</span>             <span class="token number">74</span>            <span class="token number">185</span>
C/C++ Header                        <span class="token number">10</span>             <span class="token number">57</span>            <span class="token number">168</span>            <span class="token number">148</span>
Windows Resource File                <span class="token number">4</span>             <span class="token number">23</span>              <span class="token number">0</span>            <span class="token number">139</span>
Logos                                <span class="token number">2</span>             <span class="token number">16</span>              <span class="token number">0</span>            <span class="token number">102</span>
C++                                  <span class="token number">1</span>              <span class="token number">8</span>              <span class="token number">9</span>             <span class="token number">17</span>
Objective-C                          <span class="token number">1</span>              <span class="token number">2</span>              <span class="token number">3</span>             <span class="token number">11</span>
<span class="token function">awk</span>                                  <span class="token number">1</span>              <span class="token number">1</span>              <span class="token number">6</span>              <span class="token number">7</span>
<span class="token function">make</span>                                 <span class="token number">4</span>              <span class="token number">3</span>              <span class="token number">7</span>              <span class="token number">7</span>
MATLAB                               <span class="token number">1</span>              <span class="token number">1</span>              <span class="token number">0</span>              <span class="token number">4</span>
CSS                                  <span class="token number">1</span>              <span class="token number">0</span>              <span class="token number">0</span>              <span class="token number">1</span>
HTML                                 <span class="token number">1</span>              <span class="token number">0</span>              <span class="token number">0</span>              <span class="token number">1</span>
-----------------------------------------------------------------------------------
SUM:                              <span class="token number">5006</span>         <span class="token number">158804</span>         <span class="token number">273448</span>        <span class="token number">1537972</span>
-----------------------------------------------------------------------------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-编译源码" tabindex="-1"><a class="header-anchor" href="#_1-1-编译源码" aria-hidden="true">#</a> 1.1 编译源码</h3><p>假设需要修改<code>fmt.Println</code> 的实现：在打印字符串之前先打印其他的字符串</p><p>// TODO: complete it later 2021-12-20</p><h2 id="_2-编译原理" tabindex="-1"><a class="header-anchor" href="#_2-编译原理" aria-hidden="true">#</a> 2. 编译原理</h2><h3 id="_2-1-编译过程" tabindex="-1"><a class="header-anchor" href="#_2-1-编译过程" aria-hidden="true">#</a> 2.1 编译过程</h3><p>Go 语言是一门需要编译才能运行的编程语言，也就是说代码在运行之前需要通过编译器生成二进制机器码，包含二进制机器码的文件才能在目标机器上运行，如果我们想要了解 Go 语言的实现原理，理解它的编译过程就是一个没有办法绕过的事情。</p><h4 id="_2-1-1-预备知识" tabindex="-1"><a class="header-anchor" href="#_2-1-1-预备知识" aria-hidden="true">#</a> 2.1.1 预备知识</h4><h5 id="抽象语法树" tabindex="-1"><a class="header-anchor" href="#抽象语法树" aria-hidden="true">#</a> 抽象语法树</h5>`,9);function k(v,h){const a=t("ExternalLinkIcon");return l(),p("div",null,[i,u,n("p",null,[s("Golang 有着复杂的项目结构和庞大的代码库， 使用 "),m,s(" ("),n("a",b,[s("cloc"),r(a)]),s(" perl 编写的用于统计代码的工具) 查看项目中代码的行数")]),d])}const f=e(o,[["render",k],["__file","01.1.html.vue"]]);export{f as default};