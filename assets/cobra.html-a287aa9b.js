import{_ as e,Z as p,$ as o,a0 as n,a1 as s,a2 as t,a3 as i,H as c}from"./framework-09afcf0b.js";const l={},u=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),r=n("p",null,"cobra是一个命令行程序库，可以用来编写命令行程序。同时也提供了一个脚手架，用于生成基于cobra的应用程序框架。非常多知名的开源项目使用了cobra库构建命令行，如Kubernetes,hugo,etcd等。",-1),d={href:"http://github.com/spf13",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/spf13/spf13-vim",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/spf13/viper",target:"_blank",rel:"noopener noreferrer"},m={href:"https://gohugo.io/",target:"_blank",rel:"noopener noreferrer"},b=i(`<h2 id="快速开始-quick-start" tabindex="-1"><a class="header-anchor" href="#快速开始-quick-start" aria-hidden="true">#</a> 快速开始 quick start</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go get -u github.com/spf13/cobra v1.2.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面的例子将模拟<code>git version</code>命令，输出的结果通过调用<code>os/exec</code>调用外部的<code>git version</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;quick-start/cmd&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cmd<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// cmd/root.go</span>
<span class="token keyword">package</span> cmd

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>

	<span class="token string">&quot;github.com/spf13/cobra&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> rootCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;sim-git&quot;</span><span class="token punctuation">,</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;Sim-git is a simulation of git&quot;</span><span class="token punctuation">,</span>
	Long<span class="token punctuation">:</span> <span class="token string">\`Sim-git is a simulation of git.
Git is a free and open source distributed version control system-designed to 
handle everything from small to very large projects with speed and efficiency.\`</span><span class="token punctuation">,</span>
	Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">Error</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> args<span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;unrecognized command&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	rootCmd<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// cmd/version.go</span>
<span class="token keyword">package</span> cmd

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/spf13/cobra&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> versionCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;version&quot;</span><span class="token punctuation">,</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;version subcommand show git version info&quot;</span><span class="token punctuation">,</span>
	Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		output<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">ExecuteCommand</span><span class="token punctuation">(</span><span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;version&quot;</span><span class="token punctuation">,</span> args<span class="token operator">...</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token function">Error</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> args<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> output<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	rootCmd<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span>versionCmd<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// cmd/helper.go</span>
<span class="token keyword">package</span> cmd

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/spf13/cobra&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;os/exec&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">ExecuteCommand</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> subName <span class="token builtin">string</span><span class="token punctuation">,</span> args <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	args <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>subName<span class="token punctuation">}</span><span class="token punctuation">,</span> args<span class="token operator">...</span><span class="token punctuation">)</span>
	cmd <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> args<span class="token operator">...</span><span class="token punctuation">)</span>
	bytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">CombinedOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">,</span> err
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Error</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;execute %s args:%v error:%v\\n&quot;</span><span class="token punctuation">,</span> cmd<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> args<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个cobra程序都有一个根命令，可以给其添加任意多个子命令。我们在<code>version.go</code>的init函数中讲子命令添加到根命令中。</p><p>cobra将自动生成帮助信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run ./main.go <span class="token parameter variable">-h</span>
Sim-git is a simulation of git.
                        Git is a <span class="token function">free</span> and <span class="token function">open</span> <span class="token builtin class-name">source</span> distributed version control system-designed to 
                        handle everything from small to very large projects with speed and efficiency.

Usage:
  sim-git <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
  sim-git <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

Available Commands:
  completion  generate the autocompletion script <span class="token keyword">for</span> the specified shell
  <span class="token builtin class-name">help</span>        Help about any <span class="token builtin class-name">command</span>
  version     version subcommand show <span class="token function">git</span> version info

Flags:
  -h, <span class="token parameter variable">--help</span>   <span class="token builtin class-name">help</span> <span class="token keyword">for</span> sim-git

Use <span class="token string">&quot;sim-git [command] --help&quot;</span> <span class="token keyword">for</span> <span class="token function">more</span> information about a command.
quick-start<span class="token operator">|</span>main⚡ ⇒ go run ./main.go version <span class="token parameter variable">-h</span>
version subcommand show <span class="token function">git</span> version info

Usage:
  sim-git version <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -h, <span class="token parameter variable">--help</span>   <span class="token builtin class-name">help</span> <span class="token keyword">for</span> version

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显式单个子命令的帮助信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run ./main.go version <span class="token parameter variable">-h</span>
version subcommand show <span class="token function">git</span> version info

Usage:
  sim-git version <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -h, <span class="token parameter variable">--help</span>   <span class="token builtin class-name">help</span> <span class="token keyword">for</span> version

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用子命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run ./main.go version   
<span class="token function">git</span> version <span class="token number">2.33</span>.0

go run ./main.go clone  
Error: unknown <span class="token builtin class-name">command</span> <span class="token string">&quot;clone&quot;</span> <span class="token keyword">for</span> <span class="token string">&quot;sim-git&quot;</span>
Run <span class="token string">&#39;sim-git --help&#39;</span> <span class="token keyword">for</span> usage.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用cobra构建命令行项目时，推荐使用以下文件结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── cmd
│   ├── helper.go
│   ├── root.go
│   └── version.go
├── go.mod
├── go.sum
└── main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特性-feature" tabindex="-1"><a class="header-anchor" href="#特性-feature" aria-hidden="true">#</a> 特性 Feature</h2><p>cobra 提供非常丰富的功能：</p><ul><li>轻松支持子命令，如： app server, app fetch 等</li><li>完全兼容 POSIX<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> 选项（包括短、长选项s）</li><li>嵌套子命令</li><li>全局、本地层级选项。可以在多处设置选项，按照一定的顺序取用</li><li>使用脚手架轻松生成程序框架和命令</li></ul><p>首先明确三个概念：</p><ol><li>命令（Command）： 需要执行的操作</li><li>参数（Arg）: 命令的参数</li><li>选项（Flag）： 命令的选项可以调整命令的行为</li></ol><p>例如，server 是一（子）命令，—-port 是选项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hugo server <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">1313</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>clone 是（子）命令，URL是参数，—-brae 是选项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone URL <span class="token parameter variable">--bare</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="命令-command" tabindex="-1"><a class="header-anchor" href="#命令-command" aria-hidden="true">#</a> 命令 Command</h2><p>在cobra中，命令和子命令都是用<code>Command</code>结构表示的。<code>Command</code>有非常多的字段，用来定制命令的行为。常用的有<code>Use/Short/Long/Run</code></p><p><code>Use</code>指定使用信息，即命令如何被使用，格式为<code>command arg1 [arg2 ... ]</code></p><p><code>Short/Long</code>指定命令的帮助信息</p><p><code>Run</code>为实际执行操作的函数</p><p>定义新的子命令只需创建<code>cobra.Command</code>变量，设置相关字段，添加至根命令即可。例如添加status命令：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> cmd

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>

	<span class="token string">&quot;github.com/spf13/cobra&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> statusCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;show status of the git repository&quot;</span><span class="token punctuation">,</span>
	Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		output<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">ExecuteCommand</span><span class="token punctuation">(</span><span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> args<span class="token operator">...</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token function">Error</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> args<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprint</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> output<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	rootCmd<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span>statusCmd<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run ./main.go status
位于分支 main
您的分支与上游分支 <span class="token string">&#39;origin/main&#39;</span> 一致。

要提交的变更：
  （使用 <span class="token string">&quot;git restore --staged &lt;文件&gt;...&quot;</span> 以取消暂存）
        新文件：   cmd/status.go

尚未暂存以备提交的变更：
  （使用 <span class="token string">&quot;git add &lt;文件&gt;...&quot;</span> 更新要提交的内容）
  （使用 <span class="token string">&quot;git restore &lt;文件&gt;...&quot;</span> 丢弃工作区的改动）
        修改：     cmd/root.go
        修改：     cmd/status.go


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选项-flag" tabindex="-1"><a class="header-anchor" href="#选项-flag" aria-hidden="true">#</a> 选项 Flag</h2><p>cobra 中选项分为<em>持久(persistent)选项</em>，定义它的命令及其子命令均可使用，通过给根命令添加一个选项定义全局选项。另一种是<em>本地选项</em>，仅能在定义它的命令中使用</p><p>cobra 使用pflag解析命令行选项.pflag 使用和<code>flag</code>包类似，存储flag的命令需提前声明：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> Verbose <span class="token builtin">bool</span> 
<span class="token keyword">var</span> Source <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置持久(persistent)选项：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">BoolVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Verbose<span class="token punctuation">,</span> <span class="token string">&quot;verbose&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;v&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;verbose output&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置本地(local)选项</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>localCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Source<span class="token punctuation">,</span> <span class="token string">&quot;source&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Source directory to read from&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="简单计算器" tabindex="-1"><a class="header-anchor" href="#简单计算器" aria-hidden="true">#</a> 简单计算器</h3><p>下面的例子实现了一个简单计算器，支持加减乘除的功能，可以设置是否忽略非数字参数，除数为0是否报错。显然前一个应作为全局选项，后一个作为局部选项</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// cmd/root.go</span>
<span class="token keyword">package</span> cmd

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>

	<span class="token string">&quot;github.com/spf13/cobra&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> ErrorHandling <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	ContinueOnParseError ErrorHandling <span class="token operator">=</span> <span class="token boolean">iota</span>
	ExitOnParseError
	PanicOnParseError
	ReturnOnDividedByZero
	PanicOnDividedByZero
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Operation <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	Add Operation <span class="token operator">=</span> <span class="token boolean">iota</span>
	Subtract
	Multiply
	Divide
<span class="token punctuation">)</span>

<span class="token keyword">var</span> UnrecognizedCommand <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;unrecognized command&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> parseHandling <span class="token builtin">int</span>

<span class="token keyword">var</span> rootCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;Calculator&quot;</span><span class="token punctuation">,</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;Simple calculator in cobra&quot;</span><span class="token punctuation">,</span>
	Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">Error</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> args<span class="token punctuation">,</span> UnrecognizedCommand<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IntVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>parseHandling<span class="token punctuation">,</span> <span class="token string">&quot;parse-error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span> <span class="token function">int</span><span class="token punctuation">(</span>ContinueOnParseError<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;define how command behaves if the parse fails&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	rootCmd<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// cmd/divide.go</span>
<span class="token keyword">package</span> cmd

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strings&quot;</span>

	<span class="token string">&quot;github.com/spf13/cobra&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> divideByZeroHandling <span class="token builtin">int</span>

<span class="token keyword">var</span> divideCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;divide&quot;</span><span class="token punctuation">,</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;do division&quot;</span><span class="token punctuation">,</span>
	Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		values <span class="token operator">:=</span> <span class="token function">ConvertArgsToFloat64Slice</span><span class="token punctuation">(</span>args<span class="token punctuation">,</span> <span class="token function">ErrorHandling</span><span class="token punctuation">(</span>parseHandling<span class="token punctuation">)</span><span class="token punctuation">)</span>
		result <span class="token operator">:=</span> <span class="token function">calculate</span><span class="token punctuation">(</span>values<span class="token punctuation">,</span> Divide<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s = %.2f\\n&quot;</span><span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>args<span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	divideCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IntVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>divideByZeroHandling<span class="token punctuation">,</span> <span class="token string">&quot;divided-by-zero&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token function">int</span><span class="token punctuation">(</span>PanicOnDividedByZero<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;define divide command behaves if divided by zero&quot;</span><span class="token punctuation">)</span>
	rootCmd<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span>divideCmd<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// cmd/helper.go</span>
<span class="token keyword">package</span> cmd

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>

	<span class="token string">&quot;github.com/spf13/cobra&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> DividedByZero <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;divided by zero&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Error</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;execute %s args:%v error:%s&quot;</span><span class="token punctuation">,</span> cmd<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> args<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ConvertArgsToFloat64Slice</span><span class="token punctuation">(</span>args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> errorHandling ErrorHandling<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">float64</span> <span class="token punctuation">{</span>
	result <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">float64</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> arg <span class="token operator">:=</span> <span class="token keyword">range</span> args <span class="token punctuation">{</span>
		val<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span>arg<span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">switch</span> errorHandling <span class="token punctuation">{</span>
			<span class="token keyword">case</span> ExitOnParseError<span class="token punctuation">:</span>
				fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;invalid number: %s \\n&quot;</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
				os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token keyword">case</span> PanicOnParseError<span class="token punctuation">:</span>
				<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		result <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">calculate</span><span class="token punctuation">(</span>values <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">float64</span><span class="token punctuation">,</span> operation Operation<span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> result <span class="token builtin">float64</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> result
	<span class="token punctuation">}</span>
	result <span class="token operator">=</span> values<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">switch</span> operation <span class="token punctuation">{</span>
		<span class="token keyword">case</span> Add<span class="token punctuation">:</span>
			result <span class="token operator">+=</span> values<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token keyword">case</span> Subtract<span class="token punctuation">:</span>
			result <span class="token operator">-=</span> values<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token keyword">case</span> Multiply<span class="token punctuation">:</span>
			result <span class="token operator">*=</span> values<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token keyword">case</span> Divide<span class="token punctuation">:</span>
			<span class="token keyword">if</span> values<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
				<span class="token keyword">switch</span> <span class="token function">ErrorHandling</span><span class="token punctuation">(</span>divideByZeroHandling<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> ReturnOnDividedByZero<span class="token punctuation">:</span>
					<span class="token keyword">return</span> result
				<span class="token keyword">case</span> PanicOnDividedByZero<span class="token punctuation">:</span>
					<span class="token function">panic</span><span class="token punctuation">(</span>DividedByZero<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			result <span class="token operator">/=</span> values<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚手架-scaffold" tabindex="-1"><a class="header-anchor" href="#脚手架-scaffold" aria-hidden="true">#</a> 脚手架 Scaffold</h2><p>cobra程序得到项目框架比较固定，可以使用脚手架工具生成</p><p>使用<code>cobra init</code>创建一个cobra应用程序:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cobra init scaffold 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scaffold
├── cmd
│   └── root.go
├── LICENSE
└── main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>root.go</code>中，工具额外生成了一些代码</p><p>在根命令中添加了配置文件选项</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  cobra<span class="token punctuation">.</span><span class="token function">OnInitialize</span><span class="token punctuation">(</span>initConfig<span class="token punctuation">)</span>

  rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cfgFile<span class="token punctuation">,</span> <span class="token string">&quot;config&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;config file (default is $HOME/.scaffold.yaml)&quot;</span><span class="token punctuation">)</span>
  rootCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">BoolP</span><span class="token punctuation">(</span><span class="token string">&quot;toggle&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;t&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;Help message for toggle&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在初始化完成的回调中，如果发现选项为空，则默认使用目录下的<code>.scaffold.yaml</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">initConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> cfgFile <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
    viper<span class="token punctuation">.</span><span class="token function">SetConfigFile</span><span class="token punctuation">(</span>cfgFile<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    home<span class="token punctuation">,</span> err <span class="token operator">:=</span> homedir<span class="token punctuation">.</span><span class="token function">Dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    viper<span class="token punctuation">.</span><span class="token function">AddConfigPath</span><span class="token punctuation">(</span>home<span class="token punctuation">)</span>
    viper<span class="token punctuation">.</span><span class="token function">SetConfigName</span><span class="token punctuation">(</span><span class="token string">&quot;.scaffold&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  viper<span class="token punctuation">.</span><span class="token function">AutomaticEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> err <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">ReadInConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Using config file:&quot;</span><span class="token punctuation">,</span> viper<span class="token punctuation">.</span><span class="token function">ConfigFileUsed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>cobra add command</code>添加命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cobra <span class="token function">add</span> <span class="token function">date</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改生成的date.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// cmd/date.go</span>
<span class="token comment">/*
Copyright © 2021 NAME HERE &lt;EMAIL ADDRESS&gt;

Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/</span>
<span class="token keyword">package</span> cmd

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
	<span class="token string">&quot;time&quot;</span>

	<span class="token string">&quot;github.com/spf13/cobra&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	year  <span class="token builtin">int</span>
	month <span class="token builtin">int</span>
<span class="token punctuation">)</span>

<span class="token comment">// dateCmd represents the date command</span>
<span class="token keyword">var</span> dateCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;A brief description of your command&quot;</span><span class="token punctuation">,</span>
	Long<span class="token punctuation">:</span> <span class="token string">\`A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.\`</span><span class="token punctuation">,</span>
	Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//if year &lt; 1000 || year &gt; 9999 {</span>
		<span class="token comment">//	fmt.Fprintf(os.Stderr, &quot;invalid year, should in [1000,9999], actual:%d\\n&quot;, year)</span>
		<span class="token comment">//	os.Exit(1)</span>
		<span class="token comment">//}</span>
		<span class="token comment">//if month &lt; 1 || month &gt; 12 {</span>
		<span class="token comment">//	fmt.Fprintf(os.Stderr, &quot;invalid month, should in [1,12], actual:%d\\n&quot;, month)</span>
		<span class="token comment">//	os.Exit(1)</span>
		<span class="token comment">//}</span>
		<span class="token function">showCalendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">showCalendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	showYear <span class="token operator">:=</span> year
	<span class="token keyword">if</span> showYear <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token comment">// 默认使用今年</span>
		showYear <span class="token operator">=</span> <span class="token function">int</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Year</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	showMonth <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Month</span><span class="token punctuation">(</span>month<span class="token punctuation">)</span>
	<span class="token keyword">if</span> showMonth <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		showMonth <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">Month</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	showTime <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Date</span><span class="token punctuation">(</span>showYear<span class="token punctuation">,</span> showMonth<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">Location</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	weekdays <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Sun&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> weekday <span class="token operator">:=</span> <span class="token keyword">range</span> weekdays <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%5s&quot;</span><span class="token punctuation">,</span> weekday<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		startWd <span class="token operator">:=</span> showTime<span class="token punctuation">.</span><span class="token function">Weekday</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">Repeat</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> <span class="token function">int</span><span class="token punctuation">(</span>startWd<span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

		<span class="token keyword">for</span> <span class="token punctuation">;</span> startWd <span class="token operator">&lt;=</span> time<span class="token punctuation">.</span>Saturday<span class="token punctuation">;</span> startWd<span class="token operator">++</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%5d&quot;</span><span class="token punctuation">,</span> showTime<span class="token punctuation">.</span><span class="token function">Day</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			showTime <span class="token operator">=</span> showTime<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Hour <span class="token operator">*</span> <span class="token number">24</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> showTime<span class="token punctuation">.</span><span class="token function">Month</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> showMonth <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	rootCmd<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span>dateCmd<span class="token punctuation">)</span>

	dateCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IntVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>year<span class="token punctuation">,</span> <span class="token string">&quot;year&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;y&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;year to show should in [1000,9999]&quot;</span><span class="token punctuation">)</span>
	dateCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IntVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>month<span class="token punctuation">,</span> <span class="token string">&quot;month&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;m&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;month to show should in [1,12]&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// Here you will define your flags and configuration settings.</span>

	<span class="token comment">// Cobra supports Persistent Flags which will work for this command</span>
	<span class="token comment">// and all subcommands, e.g.:</span>
	<span class="token comment">// dateCmd.PersistentFlags().String(&quot;foo&quot;, &quot;&quot;, &quot;A help for foo&quot;)</span>

	<span class="token comment">// Cobra supports local flags which will only run when this command</span>
	<span class="token comment">// is called directly, e.g.:</span>
	<span class="token comment">// dateCmd.Flags().BoolP(&quot;toggle&quot;, &quot;t&quot;, false, &quot;Help message for toggle&quot;)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token function">date</span>      
  Sun  Mon  Tue  Wed  Thu  Fri  Sat
                             <span class="token number">1</span>    <span class="token number">2</span>
    <span class="token number">3</span>    <span class="token number">4</span>    <span class="token number">5</span>    <span class="token number">6</span>    <span class="token number">7</span>    <span class="token number">8</span>    <span class="token number">9</span>
   <span class="token number">10</span>   <span class="token number">11</span>   <span class="token number">12</span>   <span class="token number">13</span>   <span class="token number">14</span>   <span class="token number">15</span>   <span class="token number">16</span>
   <span class="token number">17</span>   <span class="token number">18</span>   <span class="token number">19</span>   <span class="token number">20</span>   <span class="token number">21</span>   <span class="token number">22</span>   <span class="token number">23</span>
   <span class="token number">24</span>   <span class="token number">25</span>   <span class="token number">26</span>   <span class="token number">27</span>   <span class="token number">28</span>   <span class="token number">29</span>   <span class="token number">30</span>
   <span class="token number">31</span>                      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>cobra 提供了非常丰富的特性和定制化接口，例如：</p><ul><li>设置钩子函数，在命令执行前、后执行某些操作；</li><li>生成 Markdown/ReStructed Text/Man Page 格式的文档</li><li>等等</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,65),g={href:"https://github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"},f={href:"https://darjun.github.io/2020/01/17/godailylib/cobra/",target:"_blank",rel:"noopener noreferrer"},h=n("hr",{class:"footnotes-sep"},null,-1),q={class:"footnotes"},w={class:"footnotes-list"},y={id:"footnote1",class:"footnote-item"},C={href:"https://zh.wikipedia.org/wiki/%E5%8F%AF%E7%A7%BB%E6%A4%8D%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%8E%A5%E5%8F%A3",target:"_blank",rel:"noopener noreferrer"},x=n("strong",null,"可移植操作系统接口",-1),_=n("strong",null,"POSIX",-1),E={href:"https://zh.wikipedia.org/wiki/IEEE",target:"_blank",rel:"noopener noreferrer"},S={href:"https://zh.wikipedia.org/wiki/UNIX",target:"_blank",rel:"noopener noreferrer"},P={href:"https://zh.wikipedia.org/wiki/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"},F={href:"https://zh.wikipedia.org/wiki/API",target:"_blank",rel:"noopener noreferrer"},A={href:"https://zh.wikipedia.org/wiki/ISO",target:"_blank",rel:"noopener noreferrer"},I={href:"https://zh.wikipedia.org/wiki/IEC",target:"_blank",rel:"noopener noreferrer"},B=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function O(H,L){const a=c("ExternalLinkIcon");return p(),o("div",null,[u,r,n("p",null,[s("关于作者"),n("a",d,[s("spf13"),t(a)]),s("，这里多说两句。spf13 开源不少项目，而且他的开源项目质量都比较高。 相信使用过 vim 的都知道"),n("a",k,[s("spf13-vim"),t(a)]),s("，号称 vim 终极配置。 可以一键配置，对于我这样的懒人来说绝对是福音。他的"),n("a",v,[s("viper"),t(a)]),s("是一个完整的配置解决方案。 完美支持 JSON/TOML/YAML/HCL/envfile/Java properties 配置文件等格式，还有一些比较实用的特性，如配置热更新、多查找目录、配置保存等。 还有非常火的静态网站生成器"),n("a",m,[s("hugo"),t(a)]),s("也是他的作品。")]),b,n("ol",null,[n("li",null,[n("a",g,[s("cobra"),t(a)]),s(" gitHub repo")]),n("li",null,[n("a",f,[s("cobra"),t(a)]),s(" darjun blog")])]),h,n("section",q,[n("ol",w,[n("li",y,[n("p",null,[n("a",C,[x,t(a)]),s("（英语：Portable Operating System Interface，缩写为"),_,s("）是"),n("a",E,[s("IEEE"),t(a)]),s("为要在各种"),n("a",S,[s("UNIX"),t(a)]),n("a",P,[s("操作系统"),t(a)]),s("上运行软件，而定义"),n("a",F,[s("API"),t(a)]),s("的一系列互相关联的标准的总称，其正式称呼为IEEE Std 1003，而国际标准名称为"),n("a",A,[s("ISO"),t(a)]),s("/"),n("a",I,[s("IEC"),t(a)]),s(" 9945。 "),B])])])])])}const D=e(l,[["render",O],["__file","cobra.html.vue"]]);export{D as default};
