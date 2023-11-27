import{_ as e,Z as o,$ as p,a0 as n,a1 as s,a2 as t,a4 as i,H as c}from"./framework-d03928c9.js";const l={},u=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),d={href:"https://12factor.net/",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/joho/godotenv",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,".env",-1),k=n("code",null,"godotenv",-1),m={href:"https://github.com/bkeepers/dotenv",target:"_blank",rel:"noopener noreferrer"},b=i(`<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><p>在go module 中导入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go get -u github.com/joho/godotenv latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// quick-start/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;os&quot;</span>

	<span class="token string">&quot;github.com/joho/godotenv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	err <span class="token operator">:=</span> godotenv<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在当前目录创建<code>.env</code>文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name = dj
id = 110001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go
name: kesa
id: <span class="token number">110001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，<code>godotenv</code>读取项目根目录下的<code>.env</code>文件，文件中使用<code>key=value</code>的格式，每行一个键值对；调用<code>godotenv.Load</code>即可加载，直接使用<code>os.Getenv(&quot;key&quot;)</code>即可读取</p><h2 id="高级特性" tabindex="-1"><a class="header-anchor" href="#高级特性" aria-hidden="true">#</a> 高级特性</h2><h3 id="自动加载" tabindex="-1"><a class="header-anchor" href="#自动加载" aria-hidden="true">#</a> 自动加载</h3><p>导入<code>github.com/joho/godotenv/autoload</code>,配置会自动读取(懒才是第一生产力 ヾ(≧▽≦*)o )</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// auto-load/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>

	<span class="token boolean">_</span> <span class="token string">&quot;github.com/joho/godotenv/autoload&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在导入的包名之前加<code>_</code>会执行包的<code>init</code>函数，使用<code>_</code>导入包只是为了使用包副作用(side-effect)，不会导入包的其他内容</p><p>查看<code>github.com/joho/godotenv/autoload</code>:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// github.com/joho/godotenv/autoload/autoload.go</span>
<span class="token keyword">package</span> autoload

<span class="token comment">/*
	You can just read the .env file on import just by doing

		import _ &quot;github.com/joho/godotenv/autoload&quot;

	And bob&#39;s your mother&#39;s brother
*/</span>

<span class="token keyword">import</span> <span class="token string">&quot;github.com/joho/godotenv&quot;</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	godotenv<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>n(*≧▽≦*)n</p><h3 id="加载自定义文件" tabindex="-1"><a class="header-anchor" href="#加载自定义文件" aria-hidden="true">#</a> 加载自定义文件</h3><p>默认情况下加载<code>.env</code>文件，也可以加载任意名称的文件(不必<code>.env</code>结尾)</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// godotenv/custom-env-file/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;os&quot;</span>

	<span class="token string">&quot;github.com/joho/godotenv&quot;</span>
	<span class="token boolean">_</span> <span class="token string">&quot;github.com/joho/godotenv/autoload&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	err <span class="token operator">:=</span> godotenv<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">&quot;common&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dev.env&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;production.env&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;App name:&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;app_name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Version::&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;version&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Database:&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建配置文件</p><p><code>common</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app_name = godotenv_note
version = 0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\`\`dev.env\`:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>database = sqlite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>production.env</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>database = mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go
App name: godotenv_note
Version:: <span class="token number">0.0</span>.1
Database: sqlite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Load</code>读取配置时，若多个文件中出现相同的Key，先出现的优先读取，后续的Key不会生效</p><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3><p><code>.env</code>文件可以添加注释，以<code>#</code>开始行尾结束</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># app name
app_name = godotenv_note
# app version
version = 0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yaml" tabindex="-1"><a class="header-anchor" href="#yaml" aria-hidden="true">#</a> YAML</h3><p>文件可以使用YAML格式:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># godotenv/custom-env-file/app_common.yml</span>
<span class="token comment"># app name</span>
<span class="token key atrule">app_name</span><span class="token punctuation">:</span> godotenv_note
<span class="token comment"># app version</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> 0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// godotenv/yaml-env/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>

	<span class="token boolean">_</span> <span class="token string">&quot;github.com/joho/godotenv/autoload&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;App name:&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;app_name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Version::&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;version&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go 
App name: godotenv_note
Version:: <span class="token number">0.0</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不存入环境变量" tabindex="-1"><a class="header-anchor" href="#不存入环境变量" aria-hidden="true">#</a> 不存入环境变量</h3><p><code>godotenv</code>可以不将配置存入环境变量，使用<code>godotenv.Read</code>返回<code>map[string]string</code>可直接使用：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// godotenv/read-env-directly/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>

	<span class="token string">&quot;github.com/joho/godotenv&quot;</span>
	<span class="token boolean">_</span> <span class="token string">&quot;github.com/joho/godotenv/autoload&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	myEnv<span class="token punctuation">,</span> err <span class="token operator">:=</span> godotenv<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;App name:&quot;</span><span class="token punctuation">,</span> myEnv<span class="token punctuation">[</span><span class="token string">&quot;app_name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;version:&quot;</span><span class="token punctuation">,</span> myEnv<span class="token punctuation">[</span><span class="token string">&quot;version&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go 
App name: godotenv_note
version: <span class="token number">0.0</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从string和io-reader中读取" tabindex="-1"><a class="header-anchor" href="#从string和io-reader中读取" aria-hidden="true">#</a> 从<code>string</code>和<code>io.Reader</code>中读取</h3><p><code>godotenv</code>可以直接从<code>string</code>中读取：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// godotenv/read-string/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>

	<span class="token string">&quot;github.com/joho/godotenv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	content <span class="token operator">:=</span> <span class="token string">\`
app_name: godotenv_note@str
version: 0.0.1
\`</span>
	strEnv<span class="token punctuation">,</span> err <span class="token operator">:=</span> godotenv<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;App name:&quot;</span><span class="token punctuation">,</span> strEnv<span class="token punctuation">[</span><span class="token string">&quot;app_name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;version:&quot;</span><span class="token punctuation">,</span> strEnv<span class="token punctuation">[</span><span class="token string">&quot;version&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>godotenv</code>可以从实现了<code>io.Reader</code>接口（如<code>os.File</code>,<code>net.Conn</code>,<code>bytes.Buffer</code>等）的数据源中读取</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// read-from-reader/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;bytes&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/joho/godotenv&quot;</span>
	<span class="token boolean">_</span> <span class="token string">&quot;github.com/joho/godotenv/autoload&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	file<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;.env&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_RDONLY<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
	myEnv<span class="token punctuation">,</span> err <span class="token operator">:=</span> godotenv<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;app name:&quot;</span><span class="token punctuation">,</span> myEnv<span class="token punctuation">[</span><span class="token string">&quot;app_name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;version:&quot;</span><span class="token punctuation">,</span> myEnv<span class="token punctuation">[</span><span class="token string">&quot;version&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

	buf <span class="token operator">:=</span> <span class="token operator">&amp;</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">{</span><span class="token punctuation">}</span>
	buf<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;app_name: godotenv_note@buffer&quot;</span><span class="token punctuation">)</span>
	buf<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
	buf<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;version: 0.0.1&quot;</span><span class="token punctuation">)</span>
	bufEnv<span class="token punctuation">,</span> err <span class="token operator">:=</span> godotenv<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;app name:&quot;</span><span class="token punctuation">,</span> bufEnv<span class="token punctuation">[</span><span class="token string">&quot;app_name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;version:&quot;</span><span class="token punctuation">,</span> bufEnv<span class="token punctuation">[</span><span class="token string">&quot;version&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意从字符串读取使用<code>Unmarshal</code>,从<code>io.Reader</code>读取使用<code>Parse</code></p><h3 id="生成-env文件" tabindex="-1"><a class="header-anchor" href="#生成-env文件" aria-hidden="true">#</a> 生成<code>.env</code>文件</h3><p>可以通过程序生成一个<code>.env</code>文件</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// </span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;bytes&quot;</span>
	<span class="token string">&quot;github.com/joho/godotenv&quot;</span>
	<span class="token string">&quot;log&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// parse env</span>
	buf <span class="token operator">:=</span> <span class="token operator">&amp;</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">{</span><span class="token punctuation">}</span>
	buf<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;app_name: app@env_generate\\n&quot;</span><span class="token punctuation">)</span>
	buf<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;version: 0.0.1&quot;</span><span class="token punctuation">)</span>
	bufEnv<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> godotenv<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
	<span class="token comment">// save env</span>
	err <span class="token operator">:=</span> godotenv<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>bufEnv<span class="token punctuation">,</span> <span class="token string">&quot;./.env&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看文件:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .env
<span class="token assign-left variable">app_name</span><span class="token operator">=</span><span class="token string">&quot;app@env_generate&quot;</span>
<span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;0.0.1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以生成字符串，这里使用和解析字符串<code>Unmarshal</code>相对的<code>Marshal</code>:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// marshal-str/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;bytes&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/joho/godotenv&quot;</span>
	<span class="token string">&quot;log&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	buf <span class="token operator">:=</span> <span class="token operator">&amp;</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">{</span><span class="token punctuation">}</span>
	buf<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;app: @buf\\n&quot;</span><span class="token punctuation">)</span>
	buf<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;ver: 0.1&quot;</span><span class="token punctuation">)</span>
	bufEnv<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> godotenv<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>

	content<span class="token punctuation">,</span> err <span class="token operator">:=</span> godotenv<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>bufEnv<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;String env: &quot;</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多环境配置" tabindex="-1"><a class="header-anchor" href="#多环境配置" aria-hidden="true">#</a> 多环境配置</h3><p>在生产上一般会根据环境加载不同的配置文件</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/joho/godotenv&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	appEnv <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;APP_ENV&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> appEnv <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		appEnv <span class="token operator">=</span> <span class="token string">&quot;dev&quot;</span>
	<span class="token punctuation">}</span>
	err <span class="token operator">:=</span> godotenv<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">&quot;.env.&quot;</span> <span class="token operator">+</span> appEnv<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// read basic env</span>
	err <span class="token operator">=</span> godotenv<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;app:&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;version:&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;version&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;database:&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例先读取环境变量<code>APP_ENV</code>来获取对应的配置<code>.env.</code>+env,最后读取默认的<code>env</code>文件</p><p>由于只有先读取到的值才生效，所以在<code>.env</code>配置中配置基础信息和默认值，在根据开发/测试/环境配置相关的值，写到对应的<code>.env.dev/.env.test/.env.production</code></p><p><code>.env</code>文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app: multi_env
version: 0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.env.dev</code>文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>database: sqlite3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>.env.prd</code>文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>database: mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行程序：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认dev环境</span>
$ go run ./main.go     
app: multi_env
version: <span class="token number">0.0</span>.1
database: sqlite3
<span class="token comment"># prd环境</span>
$ <span class="token assign-left variable">APP_ENV</span><span class="token operator">=</span>prd go run ./main.go    
app: multi_env
version: <span class="token number">0.0</span>.1
database: mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h2><p><code>godotenv</code>提供了命令行程序：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get github.com/joho/godotenv/cmd/godotenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ godotenv -f ./.env COMMAND ARGS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>程序<code>godotenv</code>会被安装在<code>\\$GOPAHT/bin</code>中，将其加入<code>$PATH</code>即可全局调用</p><p><code>-f</code>指定配置文件(默认为<code>.env</code>),示例如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// godotenv-cli</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ver&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;ver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ godotenv <span class="token parameter variable">-f</span> ./.env go run main.go
app @cli
ver <span class="token number">0.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h2><p><code>godotenv</code>读取的是文件的内容，但是可以调用<code>os.Getenv</code>访问</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Load</span><span class="token punctuation">(</span>filenames <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	filenames <span class="token operator">=</span> <span class="token function">filenamesOrDefault</span><span class="token punctuation">(</span>filenames<span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> filename <span class="token operator">:=</span> <span class="token keyword">range</span> filenames <span class="token punctuation">{</span>
		err <span class="token operator">=</span> <span class="token function">loadFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token comment">// return early on a spazout</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">loadFile</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">,</span> overload <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	envMap<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">readFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>

	currentEnv <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	rawEnv <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Environ</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> rawEnvLine <span class="token operator">:=</span> <span class="token keyword">range</span> rawEnv <span class="token punctuation">{</span>
		key <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>rawEnvLine<span class="token punctuation">,</span> <span class="token string">&quot;=&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
		currentEnv<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> envMap <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>currentEnv<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">||</span> overload <span class="token punctuation">{</span>
			os<span class="token punctuation">.</span><span class="token function">Setenv</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到<code>godotenv</code>将配置通过<code>os.Setenv</code>设置到环境变量中了</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>本文介绍了<code>godotenv</code>的基本和高级用法，在多环境开发中，可以考虑使用<code>godotenv</code>来进行环境切换</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,81),g={href:"https://github.com/joho/godotenv",target:"_blank",rel:"noopener noreferrer"},f={href:"https://pkg.go.dev/github.com/joho/godotenv",target:"_blank",rel:"noopener noreferrer"},h={href:"https://darjun.github.io/2020/02/12/godailylib/godotenv/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://golang.org/ref/mod",target:"_blank",rel:"noopener noreferrer"};function y(_,x){const a=c("ExternalLinkIcon");return o(),p("div",null,[u,n("p",null,[n("a",d,[s("twelve-factor"),t(a)]),s("应用提倡将配置存储在环境变量中，任何从开发环境切换到生产环境时需要修改的东西从代码抽取到环境变量中。但是在实际开发中，如果同一台机器运行多个项目，环境变量容易冲突。"),n("a",r,[s("godotenv"),t(a)]),s("库从"),v,s("文件中读取配置，然后存储到程序的环境变量中，在代码中读取非常方便。"),k,s("源于Ruby开源项目"),n("a",m,[s("dotenv"),t(a)])]),b,n("ol",null,[n("li",null,[n("a",g,[s("godotenv"),t(a)]),s(" github repo")]),n("li",null,[n("a",f,[s("godotenv"),t(a)]),s(" godocs")]),n("li",null,[n("a",h,[s("Go 每日一库之 godotenv"),t(a)]),s(" darjun blog")]),n("li",null,[n("a",q,[s("Go Modules Reference"),t(a)]),s(" go module")])])])}const P=e(l,[["render",y],["__file","godotenv.html.vue"]]);export{P as default};
