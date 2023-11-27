import{_ as t,Z as p,$ as o,a0 as n,a1 as s,a2 as e,a4 as i,H as l}from"./framework-d03928c9.js";const c={},u=i(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>flag</code>用于解析命令行选项。例如在Unix系统中<code>la -al</code>列出当前所有的文件与目录信息，其中的<code>-al</code>就是命令行选项。</p><p>命令行选项在实际开发中很常用，特别实在写工具的时候。</p><ul><li>指定配置文件的路径，如<code>redis-server ./redis.conf</code>以当前目录下的配置文件<code>redis.conf</code>启动Redis服务器</li><li>自定义某些参数，如<code>python -m SimpleHTTPServer 8080</code>启动一个HTTP服务器，监听8080端口。若不指定，则默认监听8000端口</li></ul><h2 id="快速使用-quick-start" tabindex="-1"><a class="header-anchor" href="#快速使用-quick-start" aria-hidden="true">#</a> 快速使用 Quick Start</h2><p>先来看看<code>flag</code>库的基本使用</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	intFlag <span class="token builtin">int</span>
	boolFlag <span class="token builtin">bool</span>
	stringFlag <span class="token builtin">string</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">IntVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>intFlag<span class="token punctuation">,</span><span class="token string">&quot;intFlag&quot;</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&quot;int flag value&quot;</span><span class="token punctuation">)</span>
	flag<span class="token punctuation">.</span><span class="token function">BoolVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>boolFlag<span class="token punctuation">,</span><span class="token string">&quot;boolFlag&quot;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token string">&quot;bool flag value&quot;</span><span class="token punctuation">)</span>
	flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stringFlag<span class="token punctuation">,</span><span class="token string">&quot;stringFlag&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;string flag value&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;int flag:&quot;</span><span class="token punctuation">,</span>intFlag<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;bool flag:&quot;</span><span class="token punctuation">,</span>boolFlag<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;string flag:&quot;</span><span class="token punctuation">,</span>stringFlag<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以先编译程序再运行（ENV：Manjaro linux）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ go build <span class="token parameter variable">-o</span> main ./main.go 
 $ ./main <span class="token parameter variable">-intFlag</span> <span class="token number">100</span> <span class="token parameter variable">-boolFlag</span> <span class="token parameter variable">-stringFlag</span> string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int flag: 100
bool flag: true
string flag: string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若不设置某些选项，相应的变量会取默认值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./main <span class="token parameter variable">-intFlag</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int flag: 100
bool flag: false
string flag: default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以直接使用<code>go run</code>,此命令会先编译程序生成可执行文件，然后执行该文件，将命令行中的其他选项传给这个程序</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$  go run ./main.go <span class="token parameter variable">-boolFlag</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int flag: 0
bool flag: true
string flag: default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用<code>-h</code>显示选项信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-h</span>
Usage of /tmp/go-build3218362730/b001/exe/main:
  <span class="token parameter variable">-boolFlag</span>
        bool flag value
  <span class="token parameter variable">-intFlag</span> int
        int flag value
  <span class="token parameter variable">-stringFlag</span> string
        string flag value <span class="token punctuation">(</span>default <span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结一下，使用<code>flag</code>库的一般步骤：</p><ul><li>定义一些全局变量存储选项的值，如上述的<code>intFlag/boolFlag/stringFlag</code></li><li>在<code>init</code>方法中使用<code>flag.TypeVar</code>方法定义选项，这里<code>Type</code>可以为基本类型<code>int/uint/float64/bool</code>，还可以是时间间隔<code>time.Duration</code>。定义时传入变量的地址、选项名、默认值和帮助信息</li><li>在<code>main</code>方法中调用<code>flag.Parse</code>从<code>os.Args[1:]</code>中解析选项。因为<code>os.Args[0]</code>为可执行路径，会被剔除</li></ul><p>注意：</p><p><code>flag.Parse</code>必须在所有选项均定义之后调用，且<code>flag.Parse</code>调用之后不能再定义选项。在上述的例子中，将选项的定义放在<code>init</code>函数中，<code>init</code>会在<code>main</code>方法之前执行，选项定义在<code>flag.Parse</code>之前就全部做好了</p><h2 id="选项格式" tabindex="-1"><a class="header-anchor" href="#选项格式" aria-hidden="true">#</a> 选项格式</h2><p><code>flag</code>库支持三种命令行选项格式</p><ul><li>-flag</li><li>-flag=x</li><li>-flag x</li></ul><p><code>-</code>和<code>--</code>都可以使用，它们的作用是一样的。有些库使用<code>-</code>表示短选项，<code>--</code>表示长选项。相对而言，<code>flag</code>使用起来较为简单</p><p><code>-flag</code>形式仅支持bool类型的选项，出现即为<code>true</code>,不出现即为默认值。<code>-falg x</code>形式不支持bool类型的选项。因为这种形式的bool选项在Unix系统中会出现意想不到的行为。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cmd <span class="token parameter variable">-x</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>*</code>为shell通配符。若由名字为0，false的文件，bool选项<code>-x</code>将会取<code>false</code>，反之取<code>true</code>,同时这个选项消耗了一个参数。若要显式设置一个bool选项为<code>false</code>，只能使用<code>-flag=false</code>的形式。</p><p>遇到第一个非选项参数(即非<code>-</code>或<code>--</code>开头的)或终止符<code>--</code>,解析停止。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go noflag <span class="token parameter variable">-intFlag</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int flag: 0
bool flag: false
string flag: default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到解析遇到<code>noflag</code>就停止了，后续的选项<code>-intFlag</code>未被解析，所有的选项将取默认值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-intFlag</span> <span class="token number">100</span> -- <span class="token parameter variable">-boolFlag</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int flag: 100
bool flag: false
string flag: default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先解析了选项<code>-intFlag</code>,值为100。在遇到<code>--</code>后解析终止，后续的<code>-boolFlag</code>未被解析，取默认值<code>false</code>。</p><p>解析终止后若还有命令行参数，<code>flag</code>库会存储下来，通过<code>flag.Args</code>方法返回这些参数的切片。可以通过<code>flag.NArg</code>函数获取未解析的参数数量，<code>flag.Arg(i)</code>访问位置<code>i</code>（从0开始）上的参数。选项个数也可通过调用<code>flag.NFlag</code>函数获取</p><p>修改下上面的程序：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Non-flag command-line arguments:&quot;</span><span class="token punctuation">,</span>flag<span class="token punctuation">.</span><span class="token function">Args</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;The number of non-flag command-line arguments:&quot;</span><span class="token punctuation">,</span>flag<span class="token punctuation">.</span><span class="token function">NArg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>flag<span class="token punctuation">.</span><span class="token function">NArg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&#39;th argument remaining after flags have been processed:%s\\n&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>flag<span class="token punctuation">.</span><span class="token function">Arg</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;The number of flags have been set:&quot;</span><span class="token punctuation">,</span>flag<span class="token punctuation">.</span><span class="token function">NFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;int flag:&quot;</span><span class="token punctuation">,</span>intFlag<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;bool flag:&quot;</span><span class="token punctuation">,</span>boolFlag<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;string flag:&quot;</span><span class="token punctuation">,</span>stringFlag<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-intFlag</span> <span class="token number">100</span> -- <span class="token parameter variable">-boolFlag</span><span class="token operator">=</span>true <span class="token parameter variable">-stringFlag</span> SS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Non-flag command-line arguments: [-boolFlag=true -stringFlag SS]
The number of non-flag command-line arguments: 3
0&#39;th argument remaining after flags have been processed:-boolFlag=true
1&#39;th argument remaining after flags have been processed:-stringFlag
2&#39;th argument remaining after flags have been processed:SS
The number of flags have been set: 1
int flag: 100
bool flag: false
string flag: default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在遇到<code>--</code>解析终止后，剩余参数<code>-boolFlag=true -stringFlag SS</code>保存在<code>flag</code>中，可以通过<code>Args/NArg/Arg</code>等函数访问。</p><p>整数选项值可以接受1234（十进制）、0664（八进制）和0x1234（十六进制）的形式，并且可以是负数。实际上<code>flag</code>在内部使用的是<code>strconv.ParseInt</code>函数将字符串解析成<code>int</code>,所以理论上，<code>ParseInt</code>接受的格式均可</p><p>Remark：</p><p>bool类型的选项值可以为：</p><ul><li>取值为<code>true</code>:1,t,T,true,TRUE,True</li><li>取值为<code>false</code>:0,f,F,false,FALSE,False</li></ul><h2 id="另一种定义选项的方式" tabindex="-1"><a class="header-anchor" href="#另一种定义选项的方式" aria-hidden="true">#</a> 另一种定义选项的方式</h2><p>上面我们介绍了使用<code>flag.TypeVar</code>定义选项，这种方式需要我们先定义变量。还有一种方式，调用<code>flag.Type</code>（其中<code>Type</code>可为<code>Int/Uint/Bool/Float64/String/Duration</code>等）会自动分配变量，返回该变量的地址，用法和前一种方法类似。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	intFlag    <span class="token operator">*</span><span class="token builtin">int</span>
	boolFlag   <span class="token operator">*</span><span class="token builtin">bool</span>
	stringFlag <span class="token operator">*</span><span class="token builtin">string</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	intFlag <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">&quot;intFlag&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;int flag value&quot;</span><span class="token punctuation">)</span>
	boolFlag <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token string">&quot;boolFlag&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;boolean flag value&quot;</span><span class="token punctuation">)</span>
	stringFlag <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;stringFlag&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;string flag value&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Int flag :&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>intFlag<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Bool flag&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>boolFlag<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;String flag&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>stringFlag<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-intFlag</span> <span class="token number">100</span> <span class="token parameter variable">-boolFlag</span> <span class="token parameter variable">-stringFlag</span> TEST
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Int flag : 100
Bool flag true
String flag TEST
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了使用时需要解引用，其他的方式基本相同</p><h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法" aria-hidden="true">#</a> 高级用法</h2><h3 id="定义短选项" tabindex="-1"><a class="header-anchor" href="#定义短选项" aria-hidden="true">#</a> 定义短选项</h3><p><code>flag</code>库没有显式支持短选项，但是可以通过给某个相同的变量设置不同的选项来实现。即两个选项共享同一个变量，由于初始化顺序不确定，故必须保证两者拥有相同的默认值，否则不传该选项时，行为是不确定的。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	logLevel <span class="token builtin">string</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	defaultLevel <span class="token operator">=</span> <span class="token string">&quot;debug&quot;</span>
	usage        <span class="token operator">=</span> <span class="token string">&quot;set log level value&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>logLevel<span class="token punctuation">,</span> <span class="token string">&quot;logLevel&quot;</span><span class="token punctuation">,</span> defaultLevel<span class="token punctuation">,</span> usage<span class="token punctuation">)</span>
	flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>logLevel<span class="token punctuation">,</span> <span class="token string">&quot;l&quot;</span><span class="token punctuation">,</span> defaultLevel<span class="token punctuation">,</span> usage<span class="token operator">+</span><span class="token string">&quot;(shorthand)&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Log level:&quot;</span><span class="token punctuation">,</span> logLevel<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Log level: debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-l</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Log level: info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-logLevel</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Log level: info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="解析时间间隔" tabindex="-1"><a class="header-anchor" href="#解析时间间隔" aria-hidden="true">#</a> 解析时间间隔</h3><p>除了能使用基本类型作为选项，<code>flag</code>库还支持<code>time.Duration</code>类型，即时间间隔。其支持的格式较多，如&quot;300ms&quot;,&quot;-1.5h&quot;,&quot;2h45m&quot;等。时间单位可以是<code>ns/us/ms/s/m/h/d</code>等。实际上<code>flag</code>内部会调用<code>time.ParseDuration</code>，具体可参照<code>time</code>包文档。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	period time<span class="token punctuation">.</span>Duration
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">DurationVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>period<span class="token punctuation">,</span> <span class="token string">&quot;period&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span> <span class="token string">&quot;set sleep period&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Sleeping for %v\\n&quot;</span><span class="token punctuation">,</span> period<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>period<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Wake up ...&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-period</span> 5000ms
Sleeping <span class="token keyword">for</span> 5s
Wake up <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义选项" tabindex="-1"><a class="header-anchor" href="#自定义选项" aria-hidden="true">#</a> 自定义选项</h3><p>除了使用<code>flag</code>库提供的选项类型，还可以自定义类型。我们来分析下面的案例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> FlagHasBeenSet <span class="token builtin">error</span> <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;flag has been set&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">type</span> interval <span class="token punctuation">[</span><span class="token punctuation">]</span>time<span class="token punctuation">.</span>Duration

<span class="token keyword">func</span> <span class="token punctuation">(</span>i interval<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>interval<span class="token punctuation">)</span> <span class="token function">Set</span><span class="token punctuation">(</span>value <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span><span class="token operator">*</span>i<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> FlagHasBeenSet
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		d<span class="token punctuation">,</span> err <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">ParseDuration</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> err
		<span class="token punctuation">}</span>
		<span class="token operator">*</span>i <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token operator">*</span>i<span class="token punctuation">,</span> d<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> intervalFlag interval

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">Var</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>intervalFlag<span class="token punctuation">,</span> <span class="token string">&quot;deltaT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;comma-seperated list of intervals to use between events &quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>intervalFlag<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先定义类型<code>interval</code></p><p>新类型必须实现<code>flag.Value</code>接口</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/flag/flag.go</span>
<span class="token keyword">type</span> Value <span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
  <span class="token function">Set</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>String</code>方法格式化该类型的值，<code>flag.Parse</code>函数在执行时遇到自定义类型的选项会将选项值作为参数调用该类型变量的<code>Set</code>方法。示例中将<code>,</code>分隔的时间间隔解析至切片中。</p><p>自定义类型选项的定义必须使用<code>flag.Var</code>方法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go <span class="token parameter variable">-deltaT</span> 30ms,1m,1h,1us  
<span class="token punctuation">[</span>30ms 1m0s 1h0m0s <span class="token number">1</span>µs<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解析程序中的字符串" tabindex="-1"><a class="header-anchor" href="#解析程序中的字符串" aria-hidden="true">#</a> 解析程序中的字符串</h2><p>有些时候选项并不是通过命令行传递的。例如，从配置表中读取或程序生成的。此时可以使用<code>flag.FlagSet</code>结构的相关方法来解析这些选项。</p><p>实际上，我们之前调用的<code>flag</code>库的方法，都会间接调用<code>FlagSet</code>结构的方法。<code>flag</code>库中定义了一个<code>FlagSet</code>类型的全局变量<code>CommandLine</code>专门用于解析命令行选项。调用的<code>flag</code>库函数只是为了提供便利，其内部都是调用了<code>CommandLine</code>的相应方法。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/flag/flag.go</span>
<span class="token keyword">var</span> CommandLine <span class="token operator">=</span> <span class="token function">NewFlagSet</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ExitOnError<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  CommandLine<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">IntVar</span><span class="token punctuation">(</span>p <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">,</span> value <span class="token builtin">int</span><span class="token punctuation">,</span> usage <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  CommandLine<span class="token punctuation">.</span><span class="token function">Var</span><span class="token punctuation">(</span><span class="token function">newIntValue</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> usage<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Int</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> value <span class="token builtin">int</span><span class="token punctuation">,</span> usage <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> CommandLine<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> usage<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span>CommandLine<span class="token punctuation">.</span>actual<span class="token punctuation">)</span> <span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Arg</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> CommandLine<span class="token punctuation">.</span><span class="token function">Arg</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NArg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span>CommandLine<span class="token punctuation">.</span>args<span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，我们也可以自己创建<code>FlagSet</code>类型变量来解析选项</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	args <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;-intFlag&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-stringFlag&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">}</span>

	<span class="token keyword">var</span> intFlag <span class="token builtin">int</span>
	<span class="token keyword">var</span> boolFlag <span class="token builtin">bool</span>
	<span class="token keyword">var</span> stringFlag <span class="token builtin">string</span>

	fs <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">NewFlagSet</span><span class="token punctuation">(</span><span class="token string">&quot;MyFlagSet&quot;</span><span class="token punctuation">,</span> flag<span class="token punctuation">.</span>ContinueOnError<span class="token punctuation">)</span>
	fs<span class="token punctuation">.</span><span class="token function">IntVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>intFlag<span class="token punctuation">,</span> <span class="token string">&quot;intFlag&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;set int flag value&quot;</span><span class="token punctuation">)</span>
	fs<span class="token punctuation">.</span><span class="token function">BoolVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>boolFlag<span class="token punctuation">,</span> <span class="token string">&quot;boolFlag&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;set bool flag value&quot;</span><span class="token punctuation">)</span>
	fs<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stringFlag<span class="token punctuation">,</span> <span class="token string">&quot;stringFlag&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;set string flag value&quot;</span><span class="token punctuation">)</span>

	fs<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;int flag:&quot;</span><span class="token punctuation">,</span> intFlag<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;bool flag:&quot;</span><span class="token punctuation">,</span> boolFlag<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;string flag:&quot;</span><span class="token punctuation">,</span> stringFlag<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>NewFlagSet</code>函数有两个参数，第一个是程序名称，输出帮助或出错时会显示该信息；第二个是解析出错是如何处理，有一下选项：</p><ul><li><code>ContinueOnError</code>: 发生错误后继续解析</li><li><code>ExitOnError</code> : 出错时调用<code>os.Exit(2)</code>退出程序</li><li><code>PanicOnError</code> : 出错时产生panic</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/flag/flag.go</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>f <span class="token operator">*</span>FlagSet<span class="token punctuation">)</span> <span class="token function">Parse</span><span class="token punctuation">(</span>arguments <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  f<span class="token punctuation">.</span>parsed <span class="token operator">=</span> <span class="token boolean">true</span>
  f<span class="token punctuation">.</span>args <span class="token operator">=</span> arguments
  <span class="token keyword">for</span> <span class="token punctuation">{</span>
    seen<span class="token punctuation">,</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">parseOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> seen <span class="token punctuation">{</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">switch</span> f<span class="token punctuation">.</span>errorHandling <span class="token punctuation">{</span>
    <span class="token keyword">case</span> ContinueOnError<span class="token punctuation">:</span>
      <span class="token keyword">return</span> err
    <span class="token keyword">case</span> ExitOnError<span class="token punctuation">:</span>
      os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> PanicOnError<span class="token punctuation">:</span>
      <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与直接使用<code>flag</code>库的函数不同，<code>FlagSet</code>的<code>Parse</code>方法需要显式传入string切片作为参数。因为<code>flag.Parse</code>在内部使用了<code>CommandLine.Parse(os.Arg[1:])</code>.</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,92),d={href:"https://github.com/darjun/go-daily-lib",target:"_blank",rel:"noopener noreferrer"},r={href:"https://darjun.github.io/2020/01/10/godailylib/flag/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://pkg.go.dev/flag",target:"_blank",rel:"noopener noreferrer"};function v(g,m){const a=l("ExternalLinkIcon");return p(),o("div",null,[u,n("ol",null,[n("li",null,[n("p",null,[n("a",d,[s("flag"),e(a)]),s(" github Repo")])]),n("li",null,[n("p",null,[n("a",r,[s("flag"),e(a)]),s(" darjun blog")])]),n("li",null,[n("p",null,[n("a",k,[s("flag"),e(a)]),s(" godoc")])])])])}const f=t(c,[["render",v],["__file","flag.html.vue"]]);export{f as default};
