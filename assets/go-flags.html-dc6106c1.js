import{_ as o,X as p,Y as i,Z as n,$ as s,a0 as t,a1 as e,F as l}from"./framework-8cb7ec75.js";const c={},u=e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>flag</code>库是用于解析命令行选项的。但是<code>flag</code>库有几个缺点：</p><ul><li>不显式支持短选项</li><li>选项变量的定义比较繁琐，每个选项均需要调用对应的<code>Type</code>或<code>TypeVar</code>函数</li><li>默认只支持有限的数据类型，当前只有基本类型<code>bool/int/uint/string</code>和<code>time.Duration</code></li></ul><p>为了解决这些问题，出现了不少第三方解析命令行选项的库，今天的主角<code>go-flags</code>是其中一个。</p><p><code>go-flags</code>提供比标准库<code>flag</code>更多的选项。它利用结构标签(struct tag)和反射提供了一个方便、简洁的借口。其除了基本的功能，还提供了丰富的特性：</p><ul><li>支持短选项(-v)和长选项(-verbose)</li><li>支持短选项合写，如<code>-aux</code></li><li>同一个选项可以设置多个值</li><li>支持所有的基础类型和map类型，甚至函数</li><li>支持命名空间和选项组</li></ul><h2 id="快速开始-quick-start" tabindex="-1"><a class="header-anchor" href="#快速开始-quick-start" aria-hidden="true">#</a> 快速开始 Quick Start</h2><p>由于是第三方库，使用前需要安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ go get github.com/jessevdk/go-flags
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token string">&quot;github.com/jessevdk/go-flags&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Option <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Verbose <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span> <span class="token string">\`short:&quot;v&quot; long:&quot;verbose&quot; description:&quot;Show verbose debug message&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> opt Option
	flags<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>opt<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>Verbose<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>go-flags</code>的一般步骤：</p><ul><li>定义选项结构，在结构标签中设置选项信息。通过<code>short</code>和<code>long</code>设置短、长选项名，<code>description</code>设置帮助信息。命令行传参时，短选项前加<code>-</code>,长选项前加<code>--</code></li><li>声明选项变量</li><li>调用<code>go-flags</code>的解析方法解析</li></ul><p>短选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-v</span>
<span class="token punctuation">[</span>true<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>长选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">--verbose</span>
<span class="token punctuation">[</span>true<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>由于<code>Verbose</code>字段为切片类型，每次遇到<code>-v</code>,<code>–-verbose</code>都会追加一个true到切片中</p><p>多个短选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-v</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-v</span> 
<span class="token punctuation">[</span>true <span class="token boolean">true</span> true<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>多个长选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">--verbose</span> <span class="token parameter variable">--verbose</span>
<span class="token punctuation">[</span>true true<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>短选项+长选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run ./main.go <span class="token parameter variable">--verbose</span> <span class="token parameter variable">-v</span>
<span class="token punctuation">[</span>true true<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>短选项合写：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-vvv</span>        
<span class="token punctuation">[</span>true <span class="token boolean">true</span> true<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本特性" tabindex="-1"><a class="header-anchor" href="#基本特性" aria-hidden="true">#</a> 基本特性</h2><h3 id="支持丰富的数据类型" tabindex="-1"><a class="header-anchor" href="#支持丰富的数据类型" aria-hidden="true">#</a> 支持丰富的数据类型</h3><p><code>go-flags</code>相比标准库<code>flag</code>支持更丰富的数据类型</p><ul><li>所有的基本类型(包括有符号整数<code>int/int8/int16/int32/int64</code>,无符号整数<code>uint/uint8/uint16/uint32/uint64</code>,浮点数<code>float32/float64</code>,布尔类型<code>bool</code>和字符串<code>string</code>)和它们的切片</li><li><code>map</code>类型；仅支持key为<code>string</code>,value为基础类型的map</li><li>函数类型</li></ul><p>若字段是基本类型的切片，基本解析流程与对应的基本类型是一样的。切片类型选项的不同之处在于，遇到相同的选项时，值会被追加到切片之中。而非切片类型的选项，后出现的值会覆盖先出现的值</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token string">&quot;github.com/jessevdk/go-flags&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Option <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	IntFlag        <span class="token builtin">int</span>            <span class="token string">\`short:&quot;i&quot; long:&quot;int&quot; description:&quot;int flag value&quot;\`</span>
	IntSlice       <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>          <span class="token string">\`long:&quot;intSlice&quot; description:&quot;int slice flag value&quot;\`</span>
	BoolFlag       <span class="token builtin">bool</span>           <span class="token string">\`long:&quot;bool&quot; description:&quot;bool flag value&quot;\`</span>
	BoolSlice      <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span>         <span class="token string">\`long:&quot;boolSlice&quot; description:&quot;bool slice flag value&quot;\`</span>
	FloatFlag      <span class="token builtin">float64</span>        <span class="token string">\`long:&quot;float&quot; description:&quot;float flag value&quot;\`</span>
	FloatSlice     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">float64</span>      <span class="token string">\`long:&quot;floatSlice&quot; description:&quot;float slice flag value&quot;\`</span>
	StringFlag     <span class="token builtin">string</span>         <span class="token string">\`short:&quot;s&quot; long:&quot;string&quot; description:&quot;string flag value&quot;\`</span>
	StringSlice    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>       <span class="token string">\`long:&quot;stringSlice&quot; description:&quot;string slice flag value&quot;\`</span>
	PtrStringSlice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span><span class="token builtin">string</span>      <span class="token string">\`short:&quot;p&quot; long:&quot;prtStrSlice&quot; description:&quot;pointer of string slice flag value&quot;\`</span>
	Call           <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>   <span class="token string">\`long:&quot;call&quot; description:&quot;callback&quot;\`</span>
	IntMap         <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token string">\`long:&quot;intMap&quot; description:&quot;a map from string to int&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> opt Option
	opt<span class="token punctuation">.</span>Call <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>value <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;in callback:&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> flags<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>opt<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Parse error:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;int flag:&quot;</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>IntFlag<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;int slice:&quot;</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>IntSlice<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;bool flag:&quot;</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>BoolFlag<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;bool slice:&quot;</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>BoolSlice<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;float flag:&quot;</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>FloatFlag<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;float slice:&quot;</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>FloatSlice<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;string flag:&quot;</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>StringFlag<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;string slice:&quot;</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>StringSlice<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;pointer of string slice:&quot;</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>PtrStringSlice<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;int map:&quot;</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>IntMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本类型及其切片比较简单，值得留意的是基本类型指针的切片，上述例子中的<code>PtrStringSlice</code>，类型为<code>[]*stirng</code>。由于结构中存储的是字符串指针，<code>go-flags</code>在解析过程中遇到该选项会自动创建字符串，将指针追加到切片中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-p</span> test1 <span class="token parameter variable">-p</span> test2
<span class="token punctuation">..</span>.
pointer of string slice:
        <span class="token number">0</span>: test1
        <span class="token number">1</span>: test2
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，我们可以在选项中定义函数类型。该函数的唯一要求是有一个字符串类型的参数。解析中每次遇到该选项就会以选项值为参数调用此函数。上述例子中，<code>Call</code>函数简单打印了传入的参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">--call</span> test1 <span class="token parameter variable">--call</span> test2
<span class="token punctuation">..</span>.
<span class="token keyword">in</span> callback: test1
<span class="token keyword">in</span> callback: test2
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>go-flags</code>还支持map类型。虽然限制键必须是<code>string</code>类型，值必须是基本类型，也可以实现比较灵活的配置。<code>map</code>类型的选项值格式为<code>key:value</code>，可以设置多个</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">--intMap</span> A:1 <span class="token parameter variable">--intMap</span> B:2
<span class="token punctuation">..</span>.
int map: map<span class="token punctuation">[</span>A:1 B:2<span class="token punctuation">]</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用设置" tabindex="-1"><a class="header-anchor" href="#常用设置" aria-hidden="true">#</a> 常用设置</h3>`,38),r=n("code",null,"go-flags",-1),d={href:"https://pkg.go.dev/github.com/jessevdk/go-flags",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"required",-1),v=n("code",null,"default",-1),m=e(`<ul><li><code>required</code>非空时，表示对应的选项必须设置，否则解析时返回<code>ErrRequired</code></li><li><code>default</code>用于设置默认。若已经设置默认值，<code>required</code>设置将会失效</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>

	<span class="token string">&quot;github.com/jessevdk/go-flags&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Option <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Required <span class="token builtin">string</span> <span class="token string">\`short:&quot;r&quot; long:&quot;required&quot; required:&quot;true&quot;\`</span>
	Default  <span class="token builtin">string</span> <span class="token string">\`short:&quot;d&quot; long:&quot;default&quot; default:&quot;default&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> opt Option
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> flags<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>opt<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;Parse error:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Required:&quot;</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>Required<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Default:&quot;</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>Default<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不传入<code>required</code>选项则会报错，不传入<code>default</code>选项则会取默认值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-d</span> s     
the required flag <span class="token variable"><span class="token variable">\`</span>-r, --required&#39; was not specified
<span class="token number">2021</span>/10/08 <span class="token number">11</span>:35:27 Parse error:the required flag <span class="token variable">\`</span></span>-r, --required&#39; was not specified
<span class="token builtin class-name">exit</span> status <span class="token number">1</span>

$ go run ./main.go <span class="token parameter variable">-r</span> s    
Required: s
Default: default

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级特性" tabindex="-1"><a class="header-anchor" href="#高级特性" aria-hidden="true">#</a> 高级特性</h2><h3 id="选项分组" tabindex="-1"><a class="header-anchor" href="#选项分组" aria-hidden="true">#</a> 选项分组</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/jessevdk/go-flags&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Option <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Basic GroupBasicOption <span class="token string">\`description:&quot;basic group&quot; group:&quot;basic&quot;\`</span>
	Slice GroupSliceOption <span class="token string">\`description:&quot;slice group&quot; group:&quot;slice&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> GroupBasicOption <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	IntFlag    <span class="token builtin">int</span>     <span class="token string">\`short:&quot;i&quot; long:&quot;intFlag&quot; description:&quot;int flag&quot;\`</span>
	BoolFlag   <span class="token builtin">bool</span>    <span class="token string">\`short:&quot;b&quot; long:&quot;boolFlag&quot; description:&quot;bool flag&quot;\`</span>
	FloatFlag  <span class="token builtin">float64</span> <span class="token string">\`short:&quot;f&quot; long:&quot;floatFlag&quot; description:&quot;float flag&quot;\`</span>
	StringFlag <span class="token builtin">string</span>  <span class="token string">\`short:&quot;s&quot; long:&quot;stringFlag&quot; description:&quot;string flag&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> GroupSliceOption <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	IntSliceFlag    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>     <span class="token string">\`long:&quot;intSlice&quot; description:&quot;int slice flag&quot;\`</span>
	BoolSliceFlag   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span>    <span class="token string">\`long:&quot;boolSlice&quot; description:&quot;bool slice flag&quot;\`</span>
	FloatSliceFlag  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">float64</span> <span class="token string">\`long:&quot;floatSlice&quot; description:&quot;float slice flag&quot;\`</span>
	StringSliceFlag <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>  <span class="token string">\`long:&quot;stringSlice&quot; description:&quot;string slice flag&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> opt Option
	p <span class="token operator">:=</span> flags<span class="token punctuation">.</span><span class="token function">NewParser</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>opt<span class="token punctuation">,</span> flags<span class="token punctuation">.</span>Default<span class="token punctuation">)</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> p<span class="token punctuation">.</span><span class="token function">ParseArgs</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	basicGroup <span class="token operator">:=</span> p<span class="token punctuation">.</span>Command<span class="token punctuation">.</span>Group<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token string">&quot;basic&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> option <span class="token operator">:=</span> <span class="token keyword">range</span> basicGroup<span class="token punctuation">.</span><span class="token function">Options</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;name:%s,value:%v\\n&quot;</span><span class="token punctuation">,</span> option<span class="token punctuation">.</span><span class="token function">LongNameWithNamespace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> option<span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	sliceGroup <span class="token operator">:=</span> p<span class="token punctuation">.</span>Command<span class="token punctuation">.</span>Group<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token string">&quot;slice&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> option <span class="token operator">:=</span> <span class="token keyword">range</span> sliceGroup<span class="token punctuation">.</span><span class="token function">Options</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;name:%s,value:%v\\n&quot;</span><span class="token punctuation">,</span> option<span class="token punctuation">.</span><span class="token function">LongNameWithNamespace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> option<span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述的例子中将基本类型和切片类型选项拆分到两个结构体中，这样可以使得代码看起来更清晰自然，特别是在代码量很大的情况下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-h</span>                                                                          <span class="token operator">!</span><span class="token number">7456</span>
Usage:
  main <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>

basic:
  -i, <span class="token parameter variable">--intFlag</span><span class="token operator">=</span>     int flag
  -b, <span class="token parameter variable">--boolFlag</span>     bool flag
  -f, <span class="token parameter variable">--floatFlag</span><span class="token operator">=</span>   float flag
  -s, <span class="token parameter variable">--stringFlag</span><span class="token operator">=</span>  string flag

slice:
      <span class="token parameter variable">--intSlice</span><span class="token operator">=</span>    int slice flag
      <span class="token parameter variable">--boolSlice</span>    bool slice flag
      <span class="token parameter variable">--floatSlice</span><span class="token operator">=</span>  float slice flag
      <span class="token parameter variable">--stringSlice</span><span class="token operator">=</span> string slice flag

Help Options:
  -h, <span class="token parameter variable">--help</span>         Show this <span class="token builtin class-name">help</span> message

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在帮助信息中，也是按照我们的设定分组显示了，便于查看</p><h3 id="子命令" tabindex="-1"><a class="header-anchor" href="#子命令" aria-hidden="true">#</a> 子命令</h3><p><code>go-flags</code>支持子命令。我们经常使用的 Go和Git命令行中就存在大量的子命令。例如：<code>go version</code>,<code>go build</code>,<code>go run</code>,<code>git status</code>,<code>git commit</code>其中的<code>version</code>,<code>build</code>等就为子命令。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/jessevdk/go-flags&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> InvalidOperation <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;invalid operation&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">type</span> MathCommand <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Op     <span class="token builtin">string</span> <span class="token string">\`long:&quot;op&quot; description:&quot;operation to execute&quot;\`</span>
	Args   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	Result <span class="token builtin">int64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>mc <span class="token operator">*</span>MathCommand<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span>args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	op <span class="token operator">:=</span> mc<span class="token punctuation">.</span>Op
	<span class="token keyword">if</span> op <span class="token operator">!=</span> <span class="token string">&quot;+&quot;</span> <span class="token operator">&amp;&amp;</span> op <span class="token operator">!=</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">&amp;&amp;</span> op <span class="token operator">!=</span> <span class="token string">&quot;x&quot;</span> <span class="token operator">&amp;&amp;</span> op <span class="token operator">!=</span> <span class="token string">&quot;/&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> InvalidOperation
	<span class="token punctuation">}</span>
	<span class="token comment">// make([]T,len[,cap])</span>
	nums <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int64</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> arg <span class="token operator">:=</span> <span class="token keyword">range</span> args <span class="token punctuation">{</span>
		num<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span>arg<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> err
		<span class="token punctuation">}</span>
		nums <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	mc<span class="token punctuation">.</span>Result <span class="token operator">=</span> <span class="token function">Calculate</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> op<span class="token punctuation">)</span>
	mc<span class="token punctuation">.</span>Args <span class="token operator">=</span> args
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Calculate</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int64</span><span class="token punctuation">,</span> op <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int64</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">0</span>
	<span class="token punctuation">}</span>
	result <span class="token operator">:=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">switch</span> op <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token string">&quot;+&quot;</span><span class="token punctuation">:</span>
			result <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token keyword">case</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">:</span>
			result <span class="token operator">-=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token keyword">case</span> <span class="token string">&quot;x&quot;</span><span class="token punctuation">:</span>
			result <span class="token operator">*=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token keyword">case</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">:</span>
			result <span class="token operator">/=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Option <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Math MathCommand <span class="token string">\`command:&quot;math&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> opt Option
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> flags<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>opt<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;The result of %s is %d &quot;</span><span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>Math<span class="token punctuation">.</span>Args<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>Math<span class="token punctuation">.</span>Op<span class="token punctuation">)</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>Math<span class="token punctuation">.</span>Result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子命令必须实现<code>go-flags</code>定义的<code>Commander</code>接口：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Commander <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Execute</span><span class="token punctuation">(</span>args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析命令行时，如果遇到不是以<code>-</code>或<code>--</code>开头的参数,<code>go-flags</code>会尝试将其解释为子命令。子命令的名字通过在结构标签中使用<code>command</code>指定。子命令后面的参数都将作为子命令的参数，子命令也可以有选项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go math <span class="token parameter variable">--op</span> + <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>                                   
The result of <span class="token number">1</span>+2+3+4 is <span class="token number">10</span>
$  go run ./main.go math <span class="token parameter variable">--op</span> - <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>
The result of <span class="token number">1</span>-2-3-4 is <span class="token parameter variable">-8</span>
$ go run ./main.go math <span class="token parameter variable">--op</span> x <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>
The result of 1x2x3x4 is <span class="token number">24</span>
$ go run ./main.go math <span class="token parameter variable">--op</span> / <span class="token number">16</span> <span class="token number">4</span> <span class="token number">2</span>
The result of <span class="token number">16</span>/4/2 is <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p><code>go-flags</code>还有其他有意思的特性，例如支持windows选项格式(<code>/v</code>,<code>/verbose</code>),从环境变量中读取默认值，从ini文件中读取默认设置等。</p><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,20),b={href:"https://github.com/jessevdk/go-flags",target:"_blank",rel:"noopener noreferrer"},g={href:"https://godoc.org/github.com/jessevdk/go-flags",target:"_blank",rel:"noopener noreferrer"},f={href:"https://darjun.github.io/2020/01/10/godailylib/go-flags/",target:"_blank",rel:"noopener noreferrer"};function q(h,y){const a=l("ExternalLinkIcon");return p(),i("div",null,[u,n("p",null,[r,s("提供了非常多的设置选项，具体参见"),n("a",d,[s("文档"),t(a)]),s("。此处重点介绍"),k,s("和"),v]),m,n("ol",null,[n("li",null,[n("a",b,[s("go-flags"),t(a)]),s(" github repository")]),n("li",null,[n("a",g,[s("go-flags"),t(a)]),s(" lib godoc")]),n("li",null,[n("a",f,[s("go-flags"),t(a)]),s(" darjun blog")])])])}const x=o(c,[["render",q],["__file","go-flags.html.vue"]]);export{x as default};
