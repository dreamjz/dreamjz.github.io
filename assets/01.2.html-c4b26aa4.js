import{_ as p,Z as o,$ as i,a0 as n,a1 as s,a2 as t,a3 as e,H as c}from"./framework-dee406ed.js";const l={},u=n("p",null,"本节将完成 blog application 后端功能的实现：",-1),r=n("ul",null,[n("li",null,"文章列表查询"),n("li",null,"文章的新增，修改和删除"),n("li",null,"用户名查询")],-1),d=n("h2",{id:"_1-初始化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-初始化","aria-hidden":"true"},"#"),s(" 1. 初始化")],-1),k={href:"https://github.com/dreamjz/gin-blog-server",target:"_blank",rel:"noopener noreferrer"},v=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gh repo clone dreamjz/gin-blog-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化 go module</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go mod init gin-blog-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-目录结构" tabindex="-1"><a class="header-anchor" href="#_1-1-目录结构" aria-hidden="true">#</a> 1.1 目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gin-blog-server
├── api
│   └── v1
├── config
├── dao
├── global
├── initialize
├── models
├── routers
├── middleware
├── service
├── utils
├── go.mod
├── main.go
└── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>api/v1</code>: 服务端 api ，v1 表示第一个版本</li><li><code>config</code>: 配置文件</li><li><code>dao</code>: 数据库访问</li><li><code>global</code>: 全局变量</li><li><code>initialize</code>: 应用初始化</li><li><code>models</code>: 数据模型</li><li><code>service</code>: 服务</li><li><code>routers</code>: 路由</li><li><code>utils</code>: 工具包</li><li><code>middleware</code>: 中间件</li></ul><h3 id="_1-2-数据库" tabindex="-1"><a class="header-anchor" href="#_1-2-数据库" aria-hidden="true">#</a> 1.2 数据库</h3><p>本节使用的数据库为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Server version: 10.6.5-MariaDB Arch Linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>项目根目录创建 <code>blog.sql</code>:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 若不存在则创建数据库 gin-blog ，字符集 utf8 ，校对规则 utf8_general_ci 不区分大小写</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> gin_blog <span class="token keyword">CHARSET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci<span class="token punctuation">;</span>

<span class="token comment">-- User Auth Table</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>blog_user<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">UNSIGNED</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>username<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;Username&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>password<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;Password&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>created_by<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;Username created by&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>updated_by<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;Username updated by&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>created_at<span class="token punctuation">\`</span></span> datatime <span class="token keyword">COMMENT</span> <span class="token string">&#39;Created time&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>updated_at<span class="token punctuation">\`</span></span> <span class="token keyword">datetime</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;updated time&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>deleted_at<span class="token punctuation">\`</span></span> <span class="token keyword">datetime</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;deleted time&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8 <span class="token keyword">COMMENT</span> <span class="token string">&#39;User auth table&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- Create user admin</span>
<span class="token keyword">INSERT</span> <span class="token keyword">IGNORE</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>blog_user<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>username<span class="token punctuation">\`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">\`</span>password<span class="token punctuation">\`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">\`</span>created_at<span class="token punctuation">\`</span></span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- Article Table</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>blog_article<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
    <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> USIGNED <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>author<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>title<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>summary<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;summary&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>content<span class="token punctuation">\`</span></span> <span class="token keyword">TEXT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;article content&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>importance<span class="token punctuation">\`</span></span> <span class="token keyword">TINYINT</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;importance&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>status<span class="token punctuation">\`</span></span> <span class="token keyword">TINYINT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;status 0 draft 1 published&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>created_by<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;Article created by&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>updated_by<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;Article updated by&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>created_at<span class="token punctuation">\`</span></span> datatime <span class="token keyword">COMMENT</span> <span class="token string">&#39;Created time&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>updated_at<span class="token punctuation">\`</span></span> <span class="token keyword">datetime</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;updated time&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>deleted_at<span class="token punctuation">\`</span></span> <span class="token keyword">datetime</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;deleted time&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8 <span class="token keyword">COMMENT</span> <span class="token string">&#39;Article table&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span> ./blog.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入数据查看表是否创建成功</p><h4 id="_1-2-1-创建普通用户" tabindex="-1"><a class="header-anchor" href="#_1-2-1-创建普通用户" aria-hidden="true">#</a> 1.2.1 创建普通用户</h4><p>前面创建数据库和表都使用的 root 用户，为了避免滥用 root 用户的风险，创建一个普通用户 <code>blog_admin</code> 来管理 <code>gin_blog</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT ALL ON gin_blog.* TO blog_admin@localhost IDENTIFIED BY &#39;admin&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>ALL</code>: 赋予所有的权限</li><li><code>gin_blog.*</code>: 权限范围为 <code>gin_blog</code> 下的所有表</li><li><code>blog_admin@localhost</code>: 格式 <code>user@host</code></li><li><code>IDENTIFIED BY</code>: 设置密码</li></ul><p>使用新用户登录并查看数据库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql -u blog_admin -ppass
&gt; show databses;
+--------------------+
| Database           |
+--------------------+
| gin_blog           |
| information_schema |
| test               |
+--------------------+
&gt; use mysql;
ERROR 1044 (42000): Access denied for user &#39;blog_admin&#39;@&#39;localhost&#39; to database &#39;mysql&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们尝试访问 <code>mysql</code> 数据库时，会提示 Acccess denied</p><p><strong>Tips</strong></p><p><strong>TINYINT(M)</strong></p><p>TINYINT 默认为 TINYINT(4) ,即 M 为 4. 此处的 M 用于 mysql 展示列时的宽度，不会影响其实际能够存储的数据范围</p><p><code>TINYINT</code>( 有符号位 ) 范围为 <code>[-2^7-2^7-1]</code>, <code>TINYINT UNSIGNED</code>( 无符号位 ) 范围为 <code>[0-2^8-1]</code></p><h3 id="_1-3-应用配置" tabindex="-1"><a class="header-anchor" href="#_1-3-应用配置" aria-hidden="true">#</a> 1.3 应用配置</h3><p>应用中配置使用 hard code 形式不利于配置和扩展，因此我们将需要配置的内容提取出来放入配置文件中</p><p>并通过设置环境变量根据环境不同切换不同的配置,</p><h4 id="_1-3-1-viper" tabindex="-1"><a class="header-anchor" href="#_1-3-1-viper" aria-hidden="true">#</a> 1.3.1 Viper</h4>`,29),m={href:"https://github.com/spf13/viper",target:"_blank",rel:"noopener noreferrer"},b=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get <span class="token parameter variable">-u</span> github.com/spf13/viper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-3-2-配置文件" tabindex="-1"><a class="header-anchor" href="#_1-3-2-配置文件" aria-hidden="true">#</a> 1.3.2 配置文件</h4><p>创建配置文件 <code>config/config.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mysql</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">user</span><span class="token punctuation">:</span> user
  <span class="token key atrule">pass</span><span class="token punctuation">:</span> pass
  <span class="token key atrule">db</span><span class="token punctuation">:</span> gin_blog
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-3-数据模型" tabindex="-1"><a class="header-anchor" href="#_1-3-3-数据模型" aria-hidden="true">#</a> 1.3.3 数据模型</h4><p>创建 <code>models/config/mysql.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">type</span> MysqlCfg <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Host     <span class="token builtin">string</span> <span class="token string">\`mapstructure:&quot;host&quot;\`</span>
	Port     <span class="token builtin">int</span>    <span class="token string">\`mapstructrue:&quot;port&quot;\`</span>
	Username <span class="token builtin">string</span> <span class="token string">\`mapstructure:&quot;username&quot;\`</span>
	Password <span class="token builtin">string</span> <span class="token string">\`mapstructure:&quot;password&quot;\`</span>
	Database <span class="token builtin">string</span> <span class="token string">\`mapstructure:&quot;database&quot;\`</span>
    CharSet  <span class="token builtin">string</span> <span class="token string">\`mapstructure:&quot;charset&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字段必须为导出的</li><li><code>mapstructure:&quot;host&quot;</code>: viper 使用了 <code>mapstructure</code> 来解析字段</li></ul><p>创建 <code>models/config/app.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">type</span> AppCfg <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Mysql MysqlCfg <span class="token string">\`mapstructure:&quot;mysql&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-4-初始化-viper" tabindex="-1"><a class="header-anchor" href="#_1-3-4-初始化-viper" aria-hidden="true">#</a> 1.3.4 初始化 viper</h4><p>创建 <code>global/global.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> global

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;gin-blog-server/models/config&quot;</span>

	<span class="token string">&quot;github.com/spf13/viper&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	AppCfg   config<span class="token punctuation">.</span>AppCfg
	AppViper <span class="token operator">*</span>viper<span class="token punctuation">.</span>Viper
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>AppCfg</code>: 将配置数据作为全局变量，方便其他包进行调用</li><li><code>AppViper</code>: 将 <code>viper</code> 作为全局变量，方便后续扩展，比如根据用户的输入来写入配置等</li></ul><p>创建 <code>initialize/viper.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> initialize

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;gin-blog-server/global&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;os&quot;</span>

	<span class="token string">&quot;github.com/fsnotify/fsnotify&quot;</span>

	<span class="token string">&quot;github.com/spf13/viper&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">InitViper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>viper<span class="token punctuation">.</span>Viper <span class="token punctuation">{</span>
	v <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Get APP_ENV, default dev</span>
	env <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;APP_ENV&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> env <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		env <span class="token operator">=</span> <span class="token string">&quot;dev&quot;</span>
	<span class="token punctuation">}</span>
	cfgName <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;config.%s&quot;</span><span class="token punctuation">,</span> env<span class="token punctuation">)</span>
	v<span class="token punctuation">.</span><span class="token function">SetConfigName</span><span class="token punctuation">(</span>cfgName<span class="token punctuation">)</span>
	v<span class="token punctuation">.</span><span class="token function">SetConfigType</span><span class="token punctuation">(</span><span class="token string">&quot;yaml&quot;</span><span class="token punctuation">)</span>
	v<span class="token punctuation">.</span><span class="token function">AddConfigPath</span><span class="token punctuation">(</span><span class="token string">&quot;./config&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">ReadInConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;Read config: %s failed, %s&quot;</span><span class="token punctuation">,</span> cfgName<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Unmarshal config</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>global<span class="token punctuation">.</span>AppCfg<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;Unmarshal config failed: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Watching and re-reading</span>
	v<span class="token punctuation">.</span><span class="token function">WatchConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	v<span class="token punctuation">.</span><span class="token function">OnConfigChange</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>e fsnotify<span class="token punctuation">.</span>Event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Config file: %s changed, Operation: %s&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> e<span class="token punctuation">.</span>Op<span class="token punctuation">)</span>
		<span class="token comment">// re-reading</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>global<span class="token punctuation">.</span>AppCfg<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Reload config failed&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Reloaded config&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> v
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单流程如下：</p><ul><li>根据当前环境变量<code>APP_ENV</code>(默认<code>dev</code>)来读取不同的配置文件</li><li>将配置文件解析至结构体<code>AppCfg</code>中</li><li>开启配置文件监听，在配置文件发生变化时重新读取配置文件</li></ul><p>创建入口<code>main.go</code>：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;gin-blog-server/global&quot;</span>
	<span class="token string">&quot;gin-blog-server/initialize&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	global<span class="token punctuation">.</span>AppViper <span class="token operator">=</span> initialize<span class="token punctuation">.</span><span class="token function">InitViper</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%+v&quot;</span><span class="token punctuation">,</span> global<span class="token punctuation">.</span>AppCfg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单测试下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">APP_ENV</span><span class="token operator">=</span>dev go run ./main.go
<span class="token punctuation">{</span>Mysql:<span class="token punctuation">{</span>Host:localhost Port:3306 Username:user Password:pass Database:gin_blog<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当前目录结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gin-blog-server
├── api
│   └── v1
├── config
│   └── config.dev.yaml
├── dao
├── global
│   └── global.go
├── initialize
│   └── viper.go
├── models
│   └── config
│       ├── app.go
│       └── mysql.go
├── routers
├── service
├── utils
├── blog.sql
├── go.mod
├── go.sum
├── main.go
└── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-router" tabindex="-1"><a class="header-anchor" href="#_1-4-router" aria-hidden="true">#</a> 1.4 Router</h3><p>接下来完善服务端的 RESTFul API</p><p>在配置文件中添加服务启动端口, <code>config.dev.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9090</span>
  <span class="token key atrule">readTimeout</span><span class="token punctuation">:</span> 10s
  <span class="token key atrule">readHeaderTimeout</span><span class="token punctuation">:</span> 10ms
  <span class="token key atrule">writeTimeout</span><span class="token punctuation">:</span> 10s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新增<code>model/config/server.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> ServerCfg <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Port              <span class="token builtin">int</span>           <span class="token string">\`mapstructure:&quot;port&quot;\`</span>
	ReadTimeout       time<span class="token punctuation">.</span>Duration <span class="token string">\`mapstructure:&quot;readTimeout&quot;\`</span>
	ReadHeaderTimeout time<span class="token punctuation">.</span>Duration <span class="token string">\`mapstructure:&quot;readHeaderTimeout&quot;\`</span>
	WriteTimeout      time<span class="token punctuation">.</span>Duration <span class="token string">\`mapstructure:&quot;writeTimeout&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>model/config/app.go</code>,新增 <code>server</code>配置</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>Server ServerCfg <span class="token string">\`mapstructure:&quot;server&quot;\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-4-1-gin-和-endless" tabindex="-1"><a class="header-anchor" href="#_1-4-1-gin-和-endless" aria-hidden="true">#</a> 1.4.1 Gin 和 Endless</h4>`,33),g={href:"https://github.com/gin-gonic/gin",target:"_blank",rel:"noopener noreferrer"},f=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get <span class="token parameter variable">-u</span> github.com/gin-gonic/gin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),h={href:"https://github.com/fvbock/endless",target:"_blank",rel:"noopener noreferrer"},y=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get <span class="token parameter variable">-u</span> github.com/fvbock/endless
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-4-2-定义通用-response" tabindex="-1"><a class="header-anchor" href="#_1-4-2-定义通用-response" aria-hidden="true">#</a> 1.4.2 定义通用 Response</h4><p>将应用的响应数据设置为统一格式</p><p><code>model/response/response.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> response

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;net/http&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	SUCCESS <span class="token operator">=</span> <span class="token number">2000</span>
	ERROR   <span class="token operator">=</span> <span class="token number">2001</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	CodeMsgMap <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
		SUCCESS<span class="token punctuation">:</span> <span class="token string">&quot;Success&quot;</span><span class="token punctuation">,</span>
		ERROR<span class="token punctuation">:</span>   <span class="token string">&quot;Error&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Response <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Code <span class="token builtin">int</span>         <span class="token string">\`json:&quot;code&quot;\`</span>
	Data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">\`json:&quot;data&quot;\`</span>
	Msg  <span class="token builtin">string</span>      <span class="token string">\`json:&quot;msg&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetCodeMsg</span><span class="token punctuation">(</span>code <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> msg<span class="token punctuation">,</span> ok <span class="token operator">:=</span> CodeMsgMap<span class="token punctuation">[</span>code<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		<span class="token keyword">return</span> msg
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Result</span><span class="token punctuation">(</span>code <span class="token builtin">int</span><span class="token punctuation">,</span> data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> msg <span class="token builtin">string</span><span class="token punctuation">,</span> c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> Response<span class="token punctuation">{</span>
		Code<span class="token punctuation">:</span> code<span class="token punctuation">,</span>
		Data<span class="token punctuation">:</span> data<span class="token punctuation">,</span>
		Msg<span class="token punctuation">:</span>  msg<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">OK</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">Result</span><span class="token punctuation">(</span>SUCCESS<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token function">GetCodeMsg</span><span class="token punctuation">(</span>SUCCESS<span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">OKWithData</span><span class="token punctuation">(</span>data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">Result</span><span class="token punctuation">(</span>SUCCESS<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token function">GetCodeMsg</span><span class="token punctuation">(</span>SUCCESS<span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Fail</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">Result</span><span class="token punctuation">(</span>ERROR<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token function">GetCodeMsg</span><span class="token punctuation">(</span>ERROR<span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">FailWithMsg</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">,</span> c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">Result</span><span class="token punctuation">(</span>ERROR<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">FailWithCode</span><span class="token punctuation">(</span>code <span class="token builtin">int</span><span class="token punctuation">,</span> c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">Result</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token function">GetCodeMsg</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义错误码及对应的错误信息, 响应码要响应的在前端同步修改</li><li>将设置响应数据结构</li><li>封装响应方法 <code>Result</code>, 并提供预设的方法</li></ul><h4 id="_1-4-3-初始化-gin" tabindex="-1"><a class="header-anchor" href="#_1-4-3-初始化-gin" aria-hidden="true">#</a> 1.4.3 初始化 Gin</h4><p>创建<code>initialize/server.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> initialize

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;gin-blog-server/global&quot;</span>
	<span class="token string">&quot;gin-blog-server/routers&quot;</span>

	<span class="token string">&quot;github.com/fvbock/endless&quot;</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">initRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>gin<span class="token punctuation">.</span>Engine <span class="token punctuation">{</span>
	router <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	publicGroup <span class="token operator">:=</span> router<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		routers<span class="token punctuation">.</span><span class="token function">InitPublicRouter</span><span class="token punctuation">(</span>publicGroup<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> router
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	router <span class="token operator">:=</span> <span class="token function">initRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	addr <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;:%d&quot;</span><span class="token punctuation">,</span> global<span class="token punctuation">.</span>AppCfg<span class="token punctuation">.</span>Server<span class="token punctuation">.</span>Port<span class="token punctuation">)</span>
	server <span class="token operator">:=</span> endless<span class="token punctuation">.</span><span class="token function">NewServer</span><span class="token punctuation">(</span>addr<span class="token punctuation">,</span> router<span class="token punctuation">)</span>

	server<span class="token punctuation">.</span>BeforeBegin <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>addr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Actual PID: %d,Addr: %s&quot;</span><span class="token punctuation">,</span> syscall<span class="token punctuation">.</span><span class="token function">Getpid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	srvCfg <span class="token operator">:=</span> global<span class="token punctuation">.</span>AppCfg<span class="token punctuation">.</span>Server
	server<span class="token punctuation">.</span>ReadTimeout <span class="token operator">=</span> srvCfg<span class="token punctuation">.</span>ReadTimeout
	server<span class="token punctuation">.</span>ReadHeaderTimeout <span class="token operator">=</span> srvCfg<span class="token punctuation">.</span>ReadTimeout
	server<span class="token punctuation">.</span>WriteTimeout <span class="token operator">=</span> srvCfg<span class="token punctuation">.</span>WriteTimeout
	server<span class="token punctuation">.</span>MaxHeaderBytes <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">20</span>

	<span class="token keyword">return</span> server<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程如下：</p><ul><li>初始化路由，新增公共路由组（无需鉴权），后续会增加需要鉴权的路由组</li><li>创建<code>enlessServer</code>对象，实际上其内部嵌套了<code>http.Server</code> 结构，并设置相关参数： <ul><li><code>ReadTimeout</code>: 读取的整个 request 的最大时间</li><li><code>ReadHeaderTimeout</code>: 读取 request header 的最大时间</li><li><code>WriteTimeout</code>: 写入 response 的最大时间</li><li><code>MaxHeaderBytes</code>: request header 的最大容量， 单位 byte</li></ul></li><li>注册<code>BeforeBegin</code>: 在启动服务前打印 PID 和 ADDR</li><li>启动服务，<code>ListenAndServe</code>实际上调用的是底层<code>http.Server</code>的同名方法</li></ul><h4 id="_1-4-4-路由分组" tabindex="-1"><a class="header-anchor" href="#_1-4-4-路由分组" aria-hidden="true">#</a> 1.4.4 路由分组</h4><p>创建<code>api/v1/public.go</code>,设置 api</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> v1

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;gin-blog-server/models/response&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Ping</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	response<span class="token punctuation">.</span><span class="token function">OKWithData</span><span class="token punctuation">(</span><span class="token string">&quot;pong&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建<code>routers/pulic.go</code>, 设置公共组路由处理逻辑</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> routers

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	v1 <span class="token string">&quot;gin-blog-server/api/v1&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">InitPublicRouter</span><span class="token punctuation">(</span>routerGrp <span class="token operator">*</span>gin<span class="token punctuation">.</span>RouterGroup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	publicRouter <span class="token operator">:=</span> routerGrp<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/public&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		publicRouter<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> v1<span class="token punctuation">.</span>Ping<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 <code>main.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;gin-blog-server/global&quot;</span>
	<span class="token string">&quot;gin-blog-server/initialize&quot;</span>
	<span class="token string">&quot;log&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	global<span class="token punctuation">.</span>AppViper <span class="token operator">=</span> initialize<span class="token punctuation">.</span><span class="token function">InitViper</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	err <span class="token operator">:=</span> initialize<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;Listen and serve error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Run and test</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run ./main.go
<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> <span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span> Creating an Engine instance with the Logger and Recovery middleware already attached.

<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> <span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span> Running <span class="token keyword">in</span> <span class="token string">&quot;debug&quot;</span> mode. Switch to <span class="token string">&quot;release&quot;</span> mode <span class="token keyword">in</span> production.
 - using env:   <span class="token builtin class-name">export</span> <span class="token assign-left variable">GIN_MODE</span><span class="token operator">=</span>release
 - using code:  gin.SetMode<span class="token punctuation">(</span>gin.ReleaseMode<span class="token punctuation">)</span>

<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> GET    /public/ping              --<span class="token operator">&gt;</span> gin-blog-server/api/v1.Ping <span class="token punctuation">(</span><span class="token number">3</span> handlers<span class="token punctuation">)</span>
<span class="token number">2021</span>/12/11 <span class="token number">21</span>:38:13 <span class="token number">15212</span> :9090
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token string">&#39;http://localhost:9090/public/ping&#39;</span>
<span class="token punctuation">{</span><span class="token string">&quot;code&quot;</span>:2000,<span class="token string">&quot;data&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;pong&quot;</span>,<span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Success&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当前目录结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gin-blog-server
├── api
│   └── v1
│       └── public.go
├── config
│   ├── config.dev.yml
│   └── config.sample.yaml
├── dao
├── global
│   └── global.go
├── initialize
│   ├── logger.go
│   ├── server.go
│   └── viper.go
├── models
│   ├── config
│   │   ├── app.go
│   │   ├── mysql.go
│   │   └── server.go
│   └── response
│       └── response.go
├── routers
│   └── public.go
├── service
├── utils
├── blog.sql
├── go.mod
├── go.sum
├── main.go
└── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-数据库连接" tabindex="-1"><a class="header-anchor" href="#_1-5-数据库连接" aria-hidden="true">#</a> 1.5 数据库连接</h3>`,24),q={href:"https://github.com/go-gorm/gorm",target:"_blank",rel:"noopener noreferrer"},w=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get <span class="token parameter variable">-u</span> gorm.io/gorm gorm.io/driver/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-5-1-初始化-gorm" tabindex="-1"><a class="header-anchor" href="#_1-5-1-初始化-gorm" aria-hidden="true">#</a> 1.5.1 初始化 Gorm</h4><p>新增 gorm 的配置</p><p><code>config/config.dev.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">gorm</span><span class="token punctuation">:</span>
  <span class="token key atrule">tablePrefix</span><span class="token punctuation">:</span> blog_
  <span class="token key atrule">maxIdleConns</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">maxOpenConns</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">logLevel</span><span class="token punctuation">:</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>model/config/gorm.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">type</span> GormCfg <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	TablePrefix  <span class="token builtin">string</span> <span class="token string">\`mapstructure:&quot;tablePrefix&quot;\`</span>
	MaxIdleConns <span class="token builtin">int</span>    <span class="token string">\`mapstructure:&quot;maxIdleConns&quot;\`</span>
	MaxOpenConns <span class="token builtin">int</span>    <span class="token string">\`mapstructure:&quot;maxOpenConns&quot;\`</span>
	LogLevel     <span class="token builtin">string</span> <span class="token string">\`mapstructure:&quot;logLevel&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>model/config/app.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>GormCfg GormCfg   <span class="token string">\`mapstructure:&quot;gorm&quot;\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 <code>initialize/gorm.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> initialize

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;gin-blog-server/dao&quot;</span>
	<span class="token string">&quot;gin-blog-server/global&quot;</span>
	<span class="token string">&quot;log&quot;</span>

	<span class="token string">&quot;gorm.io/gorm/logger&quot;</span>

	<span class="token string">&quot;gorm.io/gorm/schema&quot;</span>

	<span class="token string">&quot;gorm.io/driver/mysql&quot;</span>
	<span class="token string">&quot;gorm.io/gorm&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">InitGorm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cfg <span class="token operator">:=</span> global<span class="token punctuation">.</span>AppCfg<span class="token punctuation">.</span>Mysql
	gormCfg <span class="token operator">:=</span> global<span class="token punctuation">.</span>AppCfg<span class="token punctuation">.</span>GormCfg
	dsn <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>
		<span class="token string">&quot;%s:%s@tcp(%s:%d)/%s?charset=%s&amp;parseTime=True&amp;loc=Local&quot;</span><span class="token punctuation">,</span>
		cfg<span class="token punctuation">.</span>Username<span class="token punctuation">,</span> cfg<span class="token punctuation">.</span>Password<span class="token punctuation">,</span> cfg<span class="token punctuation">.</span>Host<span class="token punctuation">,</span> cfg<span class="token punctuation">.</span>Port<span class="token punctuation">,</span> cfg<span class="token punctuation">.</span>Database<span class="token punctuation">,</span> cfg<span class="token punctuation">.</span>CharSet<span class="token punctuation">,</span>
	<span class="token punctuation">)</span>
	db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>dsn<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
		Logger<span class="token punctuation">:</span> logger<span class="token punctuation">.</span>Default<span class="token punctuation">.</span><span class="token function">LogMode</span><span class="token punctuation">(</span><span class="token function">logLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		NamingStrategy<span class="token punctuation">:</span> schema<span class="token punctuation">.</span>NamingStrategy<span class="token punctuation">{</span>
			TablePrefix<span class="token punctuation">:</span>   gormCfg<span class="token punctuation">.</span>TablePrefix<span class="token punctuation">,</span>
			SingularTable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;Connect to db failed: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	sqlDB<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">DB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	sqlDB<span class="token punctuation">.</span><span class="token function">SetMaxIdleConns</span><span class="token punctuation">(</span>gormCfg<span class="token punctuation">.</span>MaxIdleConns<span class="token punctuation">)</span>
	sqlDB<span class="token punctuation">.</span><span class="token function">SetMaxOpenConns</span><span class="token punctuation">(</span>gormCfg<span class="token punctuation">.</span>MaxOpenConns<span class="token punctuation">)</span>
	dao<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">logLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> logger<span class="token punctuation">.</span>LogLevel <span class="token punctuation">{</span>
	lvl <span class="token operator">:=</span> global<span class="token punctuation">.</span>AppCfg<span class="token punctuation">.</span>GormCfg<span class="token punctuation">.</span>LogLevel
	<span class="token keyword">switch</span> lvl <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token string">&quot;silent&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> logger<span class="token punctuation">.</span>Silent
	<span class="token keyword">case</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> logger<span class="token punctuation">.</span>Error
	<span class="token keyword">case</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> logger<span class="token punctuation">.</span>Warn
	<span class="token keyword">case</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> logger<span class="token punctuation">.</span>Info
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> logger<span class="token punctuation">.</span>Info
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 mysql 的配置连接数据库</li><li><code>Logger</code>: 根据配置文件设置 log level</li><li>配置 gorm NamingStrategy： <ul><li><code>TablePrefix</code>设置表名前缀,</li><li><code>SingularTable</code> 设置表名为单数（gorm默认表为蛇形复数）</li></ul></li><li>设置连接池参数： <ul><li><code>MaxIdleConns</code>: 最大空闲数</li><li><code>MaxOpenConns</code>: 最大连接数，当 MaxIdleConns &gt; MaxOpenConns 是会将 MaxIdleConns = MaxOpenConns</li></ul></li></ul><p>创建 <code>dao/gorm.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> dao

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;database/sql&quot;</span>

	<span class="token string">&quot;gorm.io/gorm&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	db <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB
	customSession <span class="token operator">*</span>gorm<span class="token punctuation">.</span>Session
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Init</span><span class="token punctuation">(</span>gormDB <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	db <span class="token operator">=</span> gormDB
	customSession <span class="token operator">=</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Session<span class="token punctuation">{</span>
		QueryFields<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GormDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB <span class="token punctuation">{</span>
	<span class="token keyword">return</span> db
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">SqlDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB <span class="token punctuation">{</span>
	sqlDB<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">DB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> sqlDB
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>维护<code>gorm.DB</code>对象，<code>Init</code>&amp;<code>GormDB</code>设置和返回</li><li><code>SqlDB</code>: 返回 <code>*sql.DB</code>对象</li><li><code>customSession</code>: 自定义 gorm session，<code>QueryFields</code> 为true 将在查询时使用字段名而不是<code>*</code></li></ul><p>修改 <code>main.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;gin-blog-server/dao&quot;</span>
	<span class="token string">&quot;gin-blog-server/global&quot;</span>
	<span class="token string">&quot;gin-blog-server/initialize&quot;</span>
	<span class="token string">&quot;log&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	global<span class="token punctuation">.</span>AppViper <span class="token operator">=</span> initialize<span class="token punctuation">.</span><span class="token function">InitViper</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	initialize<span class="token punctuation">.</span><span class="token function">InitGorm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	sqlDB <span class="token operator">:=</span> dao<span class="token punctuation">.</span><span class="token function">SqlDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> sqlDB<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	err <span class="token operator">:=</span> initialize<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;Listen and serve error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在程序结束前关闭数据库连接</p><p>当前目录结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gin-blog-server
├── api
│   └── v1
│       └── public.go
├── config
│   ├── config.dev.yml
│   └── config.sample.yaml
├── dao
│   └── gorm.go
├── global
│   └── global.go
├── initialize
│   ├── gorm.go
│   ├── logger.go
│   ├── server.go
│   └── viper.go
├── models
│   ├── config
│   │   ├── app.go
│   │   ├── gorm.go
│   │   ├── mysql.go
│   │   └── server.go
│   └── response
│       └── response.go
├── routers
│   └── public.go
├── service
├── utils
├── blog.sql
├── go.mod
├── go.sum
├── main.go
└── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-restful-api" tabindex="-1"><a class="header-anchor" href="#_2-restful-api" aria-hidden="true">#</a> 2. RESTFul API</h2><p>初始化各个模块之后，接下来就来编写相关的 API ：</p><ul><li><code>AddArticle</code>: 新增文章</li><li><code>EditArticle</code>: 更新文章</li><li><code>QueryArticles</code>: 查询文章列表</li><li><code>QueryArticleContentByID</code>: 根据 ID 获取文章内容</li><li><code>DeleteArticle</code>: 删除文章</li></ul>`,23),A={href:"https://github.com/spf13/cast",target:"_blank",rel:"noopener noreferrer"},_=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get <span class="token parameter variable">-u</span> github.com/spf13/cast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-1-路由分组" tabindex="-1"><a class="header-anchor" href="#_2-1-路由分组" aria-hidden="true">#</a> 2.1 路由分组</h3><p>创建 privateGroup 作为私有路由（需要鉴权，现在暂时关注文章相关后续会进行完善），将文章 api 添加至此</p><p>修改<code>initialize/server.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">initRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>gin<span class="token punctuation">.</span>Engine <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
	privateGroup <span class="token operator">:=</span> router<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		routers<span class="token punctuation">.</span><span class="token function">InitArticleRouter</span><span class="token punctuation">(</span>privateGroup<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新增 <code>routers/article</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> routers

<span class="token keyword">import</span> <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>

<span class="token keyword">func</span> <span class="token function">InitArticleRouter</span><span class="token punctuation">(</span>routerGrp <span class="token operator">*</span>gin<span class="token punctuation">.</span>RouterGroup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	articleRouter <span class="token operator">:=</span> routerGrp<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/article&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//TODO: article api</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-validation" tabindex="-1"><a class="header-anchor" href="#_2-2-validation" aria-hidden="true">#</a> 2.2 Validation</h3><p>验证用户的输入是非常重要的，本节采用 <code>go-playground/validator</code> (gin 默认采用的验证方式) 进行参数验证</p><p>创建 <code>utils/validation/article.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> validation

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;gin-blog-server/models&quot;</span>

	<span class="token string">&quot;github.com/go-playground/validator/v10&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">ArticleStructLevelValidation</span><span class="token punctuation">(</span>sl validator<span class="token punctuation">.</span>StructLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	article <span class="token operator">:=</span> sl<span class="token punctuation">.</span><span class="token function">Current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Article<span class="token punctuation">)</span>
	<span class="token keyword">if</span> article<span class="token punctuation">.</span>Status <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> article<span class="token punctuation">.</span>Status <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		sl<span class="token punctuation">.</span><span class="token function">ReportError</span><span class="token punctuation">(</span>article<span class="token punctuation">.</span>Status<span class="token punctuation">,</span> <span class="token string">&quot;Status&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Status&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> article<span class="token punctuation">.</span>Importance <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> article<span class="token punctuation">.</span>Importance <span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token punctuation">{</span>
		sl<span class="token punctuation">.</span><span class="token function">ReportError</span><span class="token punctuation">(</span>article<span class="token punctuation">.</span>Importance<span class="token punctuation">,</span> <span class="token string">&quot;Importance&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Importance&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;importance&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>utils/validation/common.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> validation

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;gin-blog-server/models&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin/binding&quot;</span>
	<span class="token string">&quot;github.com/go-playground/validator/v10&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">RegisterStructValidators</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> binding<span class="token punctuation">.</span>Validator<span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>validator<span class="token punctuation">.</span>Validate<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		v<span class="token punctuation">.</span><span class="token function">RegisterStructValidation</span><span class="token punctuation">(</span>ArticleStructLevelValidation<span class="token punctuation">,</span> models<span class="token punctuation">.</span>Article<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>initialize/server.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">initRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>gin<span class="token punctuation">.</span>Engine <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
	validation<span class="token punctuation">.</span><span class="token function">RegisterStructValidators</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-models" tabindex="-1"><a class="header-anchor" href="#_2-3-models" aria-hidden="true">#</a> 2.3 Models</h3><h4 id="_2-3-1-新建数据模型" tabindex="-1"><a class="header-anchor" href="#_2-3-1-新建数据模型" aria-hidden="true">#</a> 2.3.1 新建数据模型</h4><p><code>models/model.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> models

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;time&quot;</span>

	<span class="token string">&quot;gorm.io/gorm&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Model <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ID        <span class="token builtin">uint</span>           <span class="token string">\`gorm:&quot;primarykey&quot; json:&quot;id&quot;\`</span>
	CreatedAt time<span class="token punctuation">.</span>Time      <span class="token string">\`json:&quot;createdAt&quot;\`</span>
	UpdatedAt time<span class="token punctuation">.</span>Time      <span class="token string">\`json:&quot;updatedAt&quot;\`</span>
	DeletedAt gorm<span class="token punctuation">.</span>DeletedAt <span class="token string">\`gorm:&quot;index&quot; json:&quot;deletedAt&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据表通用模型：</p><ul><li><code>ID</code>: 主键，<code>gorm:&quot;primarykey</code> 表示将此字段为主键</li><li><code>CreatedAt</code>: 创建时间</li><li><code>UpdatedAt</code>: 更新时间</li><li><code>DeletedAt</code>: 删除时间，这里使用软删除，<code>gorm:&quot;index&quot;</code>将此字段设置为数据库索引</li></ul><p><code>models/article.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> models

<span class="token keyword">type</span> Article <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Model
	Author     <span class="token builtin">string</span> <span class="token string">\`json:&quot;author&quot;    binding:&quot;required&quot;\`</span>
	Title      <span class="token builtin">string</span> <span class="token string">\`json:&quot;title&quot;     binding:&quot;required&quot;\`</span>
    Summary    <span class="token builtin">string</span> <span class="token string">\`json:&quot;summary&quot;\`</span>
	Content    <span class="token builtin">string</span> <span class="token string">\`json:&quot;content&quot;   binding:&quot;required&quot;\`</span>
	Importance <span class="token builtin">int</span>    <span class="token string">\`json:&quot;importance&quot;\`</span>
	Status     <span class="token operator">*</span><span class="token builtin">int</span>    <span class="token string">\`json:&quot;status&quot;    binding:&quot;required&quot;\`</span>
	CreatedBy  <span class="token builtin">string</span> <span class="token string">\`json:&quot;createdBy&quot; binding:&quot;required&quot;\`</span>
	UpdatedBy  <span class="token builtin">string</span> <span class="token string">\`json:&quot;UpdatedBy&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Article 数据模型， <code>binding:&quot;required&quot;</code> 表示字段为必须的，否则在绑定数据时会报错</p><p><code>Status *int</code>: status 的零值是有意义的，使用指针类型防止字段验证失败</p><p><code>models/user.go</code>, 用户表模型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Model
	Username  <span class="token builtin">string</span> <span class="token string">\`json:&quot;username&quot;\`</span>
	Password  <span class="token builtin">string</span> <span class="token string">\`json:&quot;password&quot;\`</span>
	CreatedBy <span class="token builtin">string</span> <span class="token string">\`json:&quot;createdBy&quot;\`</span>
	UpdatedBy <span class="token builtin">string</span> <span class="token string">\`json:&quot;updatedBy&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-2-定义-request-结构" tabindex="-1"><a class="header-anchor" href="#_2-3-2-定义-request-结构" aria-hidden="true">#</a> 2.3.2 定义 Request 结构</h4><p><code> models/request/common.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> request

<span class="token keyword">type</span> Pagination <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Page     <span class="token builtin">int</span> <span class="token string">\`form:&quot;page&quot; json:&quot;page&quot;\`</span>
	PageSize <span class="token builtin">int</span> <span class="token string">\`form:&quot;pageSize&quot; json:&quot;pageSize&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>PageNo</code>: 页码</li><li><code>PageSize</code>: 每页数量</li></ul><h3 id="_2-4-create-article" tabindex="-1"><a class="header-anchor" href="#_2-4-create-article" aria-hidden="true">#</a> 2.4 Create Article</h3><h4 id="_2-4-1-dao" tabindex="-1"><a class="header-anchor" href="#_2-4-1-dao" aria-hidden="true">#</a> 2.4.1 Dao</h4><p>新增 <code>dao/article.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> dao

<span class="token keyword">import</span> <span class="token string">&quot;gin-blog-server/models&quot;</span>

<span class="token keyword">func</span> <span class="token function">CreateArticle</span><span class="token punctuation">(</span>article <span class="token operator">*</span>models<span class="token punctuation">.</span>Article<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>article<span class="token punctuation">)</span><span class="token punctuation">.</span>Error
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-2-service" tabindex="-1"><a class="header-anchor" href="#_2-4-2-service" aria-hidden="true">#</a> 2.4.2 Service</h4><p>新增 <code>service/article.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> service

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;gin-blog-server/dao&quot;</span>
	<span class="token string">&quot;gin-blog-server/models&quot;</span>
	<span class="token string">&quot;log&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	ErrCreateArticle <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;create article error&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">CreateArticle</span><span class="token punctuation">(</span>article <span class="token operator">*</span>models<span class="token punctuation">.</span>Article<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	err <span class="token operator">:=</span> dao<span class="token punctuation">.</span><span class="token function">CreateArticle</span><span class="token punctuation">(</span>article<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Create article error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> ErrCreateArticle
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>ErrCreateArticle</code>: 自定义错误</li><li>拦截 dao 的错误，将其记录在日志中并返回自定义的错误</li></ul><h4 id="_2-4-3-api" tabindex="-1"><a class="header-anchor" href="#_2-4-3-api" aria-hidden="true">#</a> 2.4.3 Api</h4><p>新增 <code>api/v1/article.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> v1

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;gin-blog-server/models&quot;</span>
	<span class="token string">&quot;gin-blog-server/models/response&quot;</span>
	<span class="token string">&quot;gin-blog-server/service&quot;</span>
	<span class="token string">&quot;log&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">CreateArticle</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> article models<span class="token punctuation">.</span>Article
	<span class="token keyword">if</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">ShouldBindJSON</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>article<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Bind data error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		response<span class="token punctuation">.</span><span class="token function">FailWithMsg</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> service<span class="token punctuation">.</span><span class="token function">CreateArticle</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>article<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		response<span class="token punctuation">.</span><span class="token function">FailWithMsg</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	response<span class="token punctuation">.</span><span class="token function">OK</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>ShouldBindJSON</code>: 绑定 JSON 类型的数据，若绑定失败则返回错误\`\`</li></ul><p><code>routers/article.go</code>注册路由</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">InitArticleRouter</span><span class="token punctuation">(</span>routerGrp <span class="token operator">*</span>gin<span class="token punctuation">.</span>RouterGroup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	articleRouter <span class="token operator">:=</span> routerGrp<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/article&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		articleRouter<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/create&quot;</span><span class="token punctuation">,</span> v1<span class="token punctuation">.</span>CreateArticle<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-query-article" tabindex="-1"><a class="header-anchor" href="#_2-5-query-article" aria-hidden="true">#</a> 2.5 Query Article</h3><h4 id="_2-5-1-定义-response" tabindex="-1"><a class="header-anchor" href="#_2-5-1-定义-response" aria-hidden="true">#</a> 2.5.1 定义 Response</h4><p>新增 <code>models/response/article</code>.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> ArticleListResult <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ID         <span class="token builtin">uint</span>      <span class="token string">\`json:&quot;id&quot;\`</span>
	CreatedAt  time<span class="token punctuation">.</span>Time <span class="token string">\`json:&quot;createdAt&quot;\`</span>
	UpdatedAt  time<span class="token punctuation">.</span>Time <span class="token string">\`json:&quot;updatedAt&quot;\`</span>
	Author     <span class="token builtin">string</span>    <span class="token string">\`json:&quot;author&quot;\`</span>
	Title      <span class="token builtin">string</span>    <span class="token string">\`json:&quot;title&quot; \`</span>
	Importance <span class="token builtin">int</span>       <span class="token string">\`json:&quot;importance&quot;\`</span>
	Status     <span class="token builtin">int</span>       <span class="token string">\`json:&quot;status&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ArticleDetail <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ID         <span class="token builtin">uint</span>      <span class="token string">\`json:&quot;id&quot;\`</span>
	CreatedAt  time<span class="token punctuation">.</span>Time <span class="token string">\`json:&quot;createdAt&quot;\`</span>
	UpdatedAt  time<span class="token punctuation">.</span>Time <span class="token string">\`json:&quot;updatedAt&quot;\`</span>
	Author     <span class="token builtin">string</span>    <span class="token string">\`json:&quot;author&quot;\`</span>
	Title      <span class="token builtin">string</span>    <span class="token string">\`json:&quot;title&quot; \`</span>
    Summary    <span class="token builtin">string</span>    <span class="token string">\`json:&quot;summary&quot;\`</span>
	Importance <span class="token builtin">int</span>       <span class="token string">\`json:&quot;importance&quot;\`</span>
	Status     <span class="token builtin">int</span>       <span class="token string">\`json:&quot;status&quot;\`</span>
	Content    <span class="token builtin">string</span>    <span class="token string">\`json:&quot;content&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ArticleListResult</code> 将作为 <code>QueryArticleList</code>的数据结构返回</p><p><code>models/response/common.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> response

<span class="token keyword">type</span> PageResult <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	List     <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">\`json:&quot;list&quot;\`</span>
	Total    <span class="token builtin">int64</span>       <span class="token string">\`json:&quot;total&quot;\`</span>
	Page     <span class="token builtin">int</span>         <span class="token string">\`json:&quot;page&quot;\`</span>
	PageSize <span class="token builtin">int</span>         <span class="token string">\`json:&quot;pageSize&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分页数据使用统一的数据结构</p><h4 id="_2-5-1-dao" tabindex="-1"><a class="header-anchor" href="#_2-5-1-dao" aria-hidden="true">#</a> 2.5.1 Dao</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">FindArticleList</span><span class="token punctuation">(</span>offset<span class="token punctuation">,</span> limit <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>response<span class="token punctuation">.</span>ArticleListResult<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> articleList <span class="token punctuation">[</span><span class="token punctuation">]</span>response<span class="token punctuation">.</span>ArticleListResult
	err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>models<span class="token punctuation">.</span>Article<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Offset</span><span class="token punctuation">(</span>offset<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>articleList<span class="token punctuation">)</span><span class="token punctuation">.</span>Error
	<span class="token keyword">return</span> articleList<span class="token punctuation">,</span> err
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">FindArticleByID</span><span class="token punctuation">(</span>id <span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>response<span class="token punctuation">.</span>ArticleDetail<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> content response<span class="token punctuation">.</span>ArticleDetail
	err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>models<span class="token punctuation">.</span>Article<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;id = ?&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Take</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>content<span class="token punctuation">)</span><span class="token punctuation">.</span>Error
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>content<span class="token punctuation">,</span> err
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">CountArticle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int64</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> count <span class="token builtin">int64</span>
	err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>models<span class="token punctuation">.</span>Article<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>count<span class="token punctuation">)</span><span class="token punctuation">.</span>Error
	<span class="token keyword">return</span> count<span class="token punctuation">,</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>FindArticleList</code>: 获取文章列表</li><li><code>FindArticleContentByID</code>：通过文章 ID 获取文章内容</li><li><code>CountArticle</code>： 统计文章数量</li></ul><h4 id="_2-5-2-service" tabindex="-1"><a class="header-anchor" href="#_2-5-2-service" aria-hidden="true">#</a> 2.5.2 Service</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
	<span class="token comment">// ...</span>
	ErrQueryArticle <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;query article list error&quot;</span><span class="token punctuation">)</span>
	ErrArticleNotFound  <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;article not found&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">QueryArticleList</span><span class="token punctuation">(</span>pagination request<span class="token punctuation">.</span>Pagination<span class="token punctuation">)</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>PageResult<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> result response<span class="token punctuation">.</span>PageResult
	limit <span class="token operator">:=</span> pagination<span class="token punctuation">.</span>PageSize
	offset <span class="token operator">:=</span> <span class="token punctuation">(</span>pagination<span class="token punctuation">.</span>Page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> limit
	total<span class="token punctuation">,</span> err <span class="token operator">:=</span> dao<span class="token punctuation">.</span><span class="token function">CountArticle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Count article error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> result<span class="token punctuation">,</span> ErrQueryArticle
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> total <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;No article found&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> result<span class="token punctuation">,</span> ErrArticleNotFound
	<span class="token punctuation">}</span>
	articleList<span class="token punctuation">,</span> err <span class="token operator">:=</span> dao<span class="token punctuation">.</span><span class="token function">FindArticleList</span><span class="token punctuation">(</span>offset<span class="token punctuation">,</span> limit<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;No article found&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> result<span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	result <span class="token operator">=</span> response<span class="token punctuation">.</span>PageResult<span class="token punctuation">{</span>
		List<span class="token punctuation">:</span>     articleList<span class="token punctuation">,</span>
		Total<span class="token punctuation">:</span>    total<span class="token punctuation">,</span>
		Page<span class="token punctuation">:</span>     pagination<span class="token punctuation">.</span>Page<span class="token punctuation">,</span>
		PageSize<span class="token punctuation">:</span> pagination<span class="token punctuation">.</span>PageSize<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">QueryArticleByID</span><span class="token punctuation">(</span>id <span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>response<span class="token punctuation">.</span>ArticleDetail<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	content<span class="token punctuation">,</span> err <span class="token operator">:=</span> dao<span class="token punctuation">.</span><span class="token function">FindArticleByID</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> gorm<span class="token punctuation">.</span>ErrRecordNotFound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Article not found&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> ErrArticleNotFound
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> ErrQueryArticle
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> content<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>获取所有文章的数量，若小于 1 打印日志直接返回</li><li>根据分页信息查询文章列表，返回错误则结束查询</li></ul><h4 id="_2-5-3-api" tabindex="-1"><a class="header-anchor" href="#_2-5-3-api" aria-hidden="true">#</a> 2.5.3 Api</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">QueryArticleList</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> pagination request<span class="token punctuation">.</span>Pagination
	<span class="token keyword">if</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">ShouldBindQuery</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>pagination<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Bind pagination error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		response<span class="token punctuation">.</span><span class="token function">FailWithMsg</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	list<span class="token punctuation">,</span> err <span class="token operator">:=</span> service<span class="token punctuation">.</span><span class="token function">QueryArticleList</span><span class="token punctuation">(</span>pagination<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		response<span class="token punctuation">.</span><span class="token function">FailWithMsg</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	response<span class="token punctuation">.</span><span class="token function">OKWithData</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">QueryArticleByID</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	id<span class="token punctuation">,</span> err <span class="token operator">:=</span> cast<span class="token punctuation">.</span><span class="token function">ToUintE</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Get article id error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		response<span class="token punctuation">.</span><span class="token function">FailWithMsg</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	article<span class="token punctuation">,</span> err <span class="token operator">:=</span> service<span class="token punctuation">.</span><span class="token function">QueryArticleByID</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		response<span class="token punctuation">.</span><span class="token function">FailWithMsg</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	response<span class="token punctuation">.</span><span class="token function">OKWithData</span><span class="token punctuation">(</span>article<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>cast.ToUintE</code>: 将字符串转为 uint ，若失败则返回错误</li></ul><h3 id="_2-6-update-article" tabindex="-1"><a class="header-anchor" href="#_2-6-update-article" aria-hidden="true">#</a> 2.6 Update Article</h3><h4 id="_2-6-1-dao" tabindex="-1"><a class="header-anchor" href="#_2-6-1-dao" aria-hidden="true">#</a> 2.6.1 Dao</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">UpdateArticleByID</span><span class="token punctuation">(</span>article <span class="token operator">*</span>models<span class="token punctuation">.</span>Article<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> db<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span>article<span class="token punctuation">)</span><span class="token punctuation">.</span>Error
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6-2-service" tabindex="-1"><a class="header-anchor" href="#_2-6-2-service" aria-hidden="true">#</a> 2.6.2 Service</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
    <span class="token comment">// ...</span>
	ErrUpdateArticle   <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;update article error&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">UpdateArticleByID</span><span class="token punctuation">(</span>article <span class="token operator">*</span>models<span class="token punctuation">.</span>Article<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> dao<span class="token punctuation">.</span><span class="token function">UpdateArticleByID</span><span class="token punctuation">(</span>article<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Update article error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> ErrUpdateArticle
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6-3-api" tabindex="-1"><a class="header-anchor" href="#_2-6-3-api" aria-hidden="true">#</a> 2.6.3 Api</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">EditArticleByID</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> article models<span class="token punctuation">.</span>Article
	<span class="token keyword">if</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">ShouldBindJSON</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>article<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Bind article data error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		response<span class="token punctuation">.</span><span class="token function">FailWithMsg</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> service<span class="token punctuation">.</span><span class="token function">UpdateArticleByID</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>article<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		response<span class="token punctuation">.</span><span class="token function">FailWithMsg</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	response<span class="token punctuation">.</span><span class="token function">OK</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-delete-article" tabindex="-1"><a class="header-anchor" href="#_2-7-delete-article" aria-hidden="true">#</a> 2.7 Delete Article</h3><h4 id="_2-7-1-dao" tabindex="-1"><a class="header-anchor" href="#_2-7-1-dao" aria-hidden="true">#</a> 2.7.1 Dao</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeleteArticleByID</span><span class="token punctuation">(</span>id <span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;id = ?&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>models<span class="token punctuation">.</span>Article<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-7-2-service" tabindex="-1"><a class="header-anchor" href="#_2-7-2-service" aria-hidden="true">#</a> 2.7.2 Service</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
    <span class="token comment">// ...</span>
	ErrDeleteArticle   <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;delete article error&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>


<span class="token keyword">func</span> <span class="token function">DeleteArticleByID</span><span class="token punctuation">(</span>id <span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> dao<span class="token punctuation">.</span><span class="token function">DeleteArticleByID</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Delete article error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> gorm<span class="token punctuation">.</span>ErrRecordNotFound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> ErrArticleNotFound
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> ErrDeleteArticle
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-7-3-api" tabindex="-1"><a class="header-anchor" href="#_2-7-3-api" aria-hidden="true">#</a> 2.7.3 Api</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeleteArticleByID</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	id<span class="token punctuation">,</span> err <span class="token operator">:=</span> cast<span class="token punctuation">.</span><span class="token function">ToUintE</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Get id error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		response<span class="token punctuation">.</span><span class="token function">FailWithMsg</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> service<span class="token punctuation">.</span><span class="token function">DeleteArticleByID</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		response<span class="token punctuation">.</span><span class="token function">FailWithMsg</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	response<span class="token punctuation">.</span><span class="token function">OK</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-注册-article-路由" tabindex="-1"><a class="header-anchor" href="#_2-8-注册-article-路由" aria-hidden="true">#</a> 2.8 注册 Article 路由</h3><p>完善 article 的路由,<code>routers/article.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">InitArticleRouter</span><span class="token punctuation">(</span>routerGrp <span class="token operator">*</span>gin<span class="token punctuation">.</span>RouterGroup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	articleRouter <span class="token operator">:=</span> routerGrp<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/article&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		articleRouter<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/create&quot;</span><span class="token punctuation">,</span> v1<span class="token punctuation">.</span>CreateArticle<span class="token punctuation">)</span>
		articleRouter<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/list&quot;</span><span class="token punctuation">,</span> v1<span class="token punctuation">.</span>QueryArticleList<span class="token punctuation">)</span>
		articleRouter<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/detail&quot;</span><span class="token punctuation">,</span> v1<span class="token punctuation">.</span>QueryArticleByID<span class="token punctuation">)</span>
		articleRouter<span class="token punctuation">.</span><span class="token function">PUT</span><span class="token punctuation">(</span><span class="token string">&quot;/edit&quot;</span><span class="token punctuation">,</span> v1<span class="token punctuation">.</span>EditArticleByID<span class="token punctuation">)</span>
		articleRouter<span class="token punctuation">.</span><span class="token function">DELETE</span><span class="token punctuation">(</span><span class="token string">&quot;/delete&quot;</span><span class="token punctuation">,</span> v1<span class="token punctuation">.</span>DeleteArticleByID<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-search-username" tabindex="-1"><a class="header-anchor" href="#_2-9-search-username" aria-hidden="true">#</a> 2.9 Search Username</h3><p>在创建文章时文章作者需要从用户名中选择，admin 可以实时搜索用户名进行选择</p><h4 id="_2-9-1-定义-response" tabindex="-1"><a class="header-anchor" href="#_2-9-1-定义-response" aria-hidden="true">#</a> 2.9.1 定义 Response</h4><p>创建 <code>models/response/user.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> SearchUsername <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Username <span class="token builtin">string</span> <span class="token string">\`json:&quot;username&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-9-2-dao" tabindex="-1"><a class="header-anchor" href="#_2-9-2-dao" aria-hidden="true">#</a> 2.9.2 Dao</h4><p>创建 <code>dao/user.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">FindUsername</span><span class="token punctuation">(</span>keywords <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> names <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>models<span class="token punctuation">.</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
		<span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;username REGEXP ?&quot;</span><span class="token punctuation">,</span> keywords<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>names<span class="token punctuation">)</span><span class="token punctuation">.</span>Error
	<span class="token keyword">return</span> names<span class="token punctuation">,</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过正则表达式搜索符合条件的用户</li></ul><h4 id="_2-9-3-service" tabindex="-1"><a class="header-anchor" href="#_2-9-3-service" aria-hidden="true">#</a> 2.9.3 Service</h4><p>创建 <code>service/user.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> service

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;gin-blog-server/dao&quot;</span>
	<span class="token string">&quot;log&quot;</span>

	<span class="token string">&quot;gorm.io/gorm&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	ErrUserNotFound <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;user not found&quot;</span><span class="token punctuation">)</span>
	ErrQueryUser    <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;query user error&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">SearchUsername</span><span class="token punctuation">(</span>keywords <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	names<span class="token punctuation">,</span> err <span class="token operator">:=</span> dao<span class="token punctuation">.</span><span class="token function">FindUsername</span><span class="token punctuation">(</span>keywords<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Search username error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> gorm<span class="token punctuation">.</span>ErrRecordNotFound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> ErrUserNotFound
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> ErrQueryUser
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> names<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-9-4-api" tabindex="-1"><a class="header-anchor" href="#_2-9-4-api" aria-hidden="true">#</a> 2.9.4 Api</h4><p>创建 <code>api/v1/user.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">SearchUsername</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	keywords <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> keywords <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		response<span class="token punctuation">.</span><span class="token function">FailWithMsg</span><span class="token punctuation">(</span><span class="token string">&quot;search name cannot be empty&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	names<span class="token punctuation">,</span> err <span class="token operator">:=</span> service<span class="token punctuation">.</span><span class="token function">SearchUsername</span><span class="token punctuation">(</span>keywords<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		response<span class="token punctuation">.</span><span class="token function">FailWithMsg</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	response<span class="token punctuation">.</span><span class="token function">OKWithData</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
		<span class="token string">&quot;list&quot;</span><span class="token punctuation">:</span> names<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-10-注册-user-路由" tabindex="-1"><a class="header-anchor" href="#_2-10-注册-user-路由" aria-hidden="true">#</a> 2.10 注册 User 路由</h3><p>创建 <code>routers/user.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">InitUserRouter</span><span class="token punctuation">(</span>routerGrp <span class="token operator">*</span>gin<span class="token punctuation">.</span>RouterGroup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	userRouter <span class="token operator">:=</span> routerGrp<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		userRouter<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/name&quot;</span><span class="token punctuation">,</span> v1<span class="token punctuation">.</span>SearchUsername<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>initialize/server.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">initRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>gin<span class="token punctuation">.</span>Engine <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
	privateGroup <span class="token operator">:=</span> router<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">// ...</span>
		routers<span class="token punctuation">.</span><span class="token function">InitUserRouter</span><span class="token punctuation">(</span>privateGroup<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-cors" tabindex="-1"><a class="header-anchor" href="#_3-cors" aria-hidden="true">#</a> 3. CORS</h2><p>gin-blog 是前后端分离项目，前端调用后端服务会存在跨域问题，本节通过自定 gin middleware 在服务端解决跨域问题</p><p>创建 <code>middleware/cors.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> middleware

<span class="token keyword">import</span> <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>

<span class="token keyword">func</span> <span class="token function">Cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		method <span class="token operator">:=</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Method
		origin <span class="token operator">:=</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Origin&quot;</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> origin<span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET,POST,OPTIONS,DELETE,PUT&quot;</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Expose-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type&quot;</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Credentials&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span>

		<span class="token keyword">if</span> method <span class="token operator">==</span> <span class="token string">&quot;OPTIONS&quot;</span> <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span><span class="token function">AbortWithStatus</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Access-Control-Allow-Origin</code>: 允许来自 oringin 的请求访问</li><li><code>Access-Control-Allow-Headers</code>: 告知服务器，表明服务器允许请求中 Header 携带字段</li><li><code>Access-Control-Allow-Methods</code>: 表明服务器允许客户端的方法</li><li><code>Access-Control-Expose-Headers</code>:让服务器把允许浏览器访问的头放入白名单</li><li><code>Access-Control-Allow-Credentials</code>: 指定了当浏览器的<code>credentials</code>设置为true时是否允许浏览器读取response的内容</li><li><code>c.AbortWithStatus(http.StatusOK)</code>: 中断后续 handler 的调用，并设置状态码</li><li><code>c.Next()</code>: 调用后续的 handler</li></ul><p>引入中间件，<code>initialize/server.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">initRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>gin<span class="token punctuation">.</span>Engine <span class="token punctuation">{</span>
	router <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	router<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>middleware<span class="token punctuation">.</span><span class="token function">Cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
	<span class="token keyword">return</span> router
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，文章相关的 API 就完成了</p><p>当前目录结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gin-blog-server
├── api
│   └── v1
│       ├── article.go
│       └── public.go
├── config
│   ├── config.dev.yml
│   └── config.sample.yaml
├── dao
│   ├── article.go
│   └── gorm.go
├── global
│   └── global.go
├── initialize
│   ├── gorm.go
│   ├── server.go
│   └── viper.go
├── middleware
│   └── cors.go
├── models
│   ├── config
│   │   ├── app.go
│   │   ├── gorm.go
│   │   ├── mysql.go
│   │   └── server.go
│   ├── request
│   │   └── common.go
│   ├── response
│   │   ├── article.go
│   │   ├── common.go
│   │   └── response.go
│   ├── article.go
│   └── model.go
├── routers
│   ├── article.go
│   └── public.go
├── service
│   └── article.go
├── utils
│   └── validation
│       ├── article.go
│       └── common.go
├── blog.sql
├── go.mod
├── go.sum
├── main.go
└── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-修改前端配置" tabindex="-1"><a class="header-anchor" href="#_4-修改前端配置" aria-hidden="true">#</a> 4. 修改前端配置</h2><h3 id="_4-1-配置文件" tabindex="-1"><a class="header-anchor" href="#_4-1-配置文件" aria-hidden="true">#</a> 4.1 配置文件</h3><p>添加服务端环境</p><p><code>.env.development</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># server 
SERVER_HOST = &#39;localhost&#39;
SERVER_PORT = 9090
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加跨域配置, <code>vue.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ...</span>
<span class="token keyword">const</span> api <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span>
<span class="token keyword">const</span> serverHost <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">SERVER_HOST</span>
<span class="token keyword">const</span> serverPort <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">SERVER_PORT</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Server: &#39;</span> <span class="token operator">+</span> serverHost <span class="token operator">+</span> <span class="token string">&#39;:&#39;</span> <span class="token operator">+</span> serverPort<span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
      <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token comment">// 请求代理</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将 对应的路径代理到target 位置</span>
      <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>serverHost<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>serverPort<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 重写 URL</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token punctuation">[</span><span class="token string">&#39;^&#39;</span> <span class="token operator">+</span> api<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,116),x={href:"https://github.com/PanJiaChen/vue-element-admin/issues/3020",target:"_blank",rel:"noopener noreferrer"},E=e(`<h3 id="_4-2-api" tabindex="-1"><a class="header-anchor" href="#_4-2-api" aria-hidden="true">#</a> 4.2 Api</h3><p>修改 api 的请求 URL, <code>src/api/article.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;@/utils/request&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fetchList</span><span class="token punctuation">(</span><span class="token parameter">query</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/article/list&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> query
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fetchArticle</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/article/detail&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fetchPv</span><span class="token punctuation">(</span><span class="token parameter">pv</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/article/pv&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> pv <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createArticle</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/article/create&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateArticle</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/article/edit&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-page" tabindex="-1"><a class="header-anchor" href="#_4-3-page" aria-hidden="true">#</a> 4.3 Page</h3><h4 id="_4-3-1-article-list" tabindex="-1"><a class="header-anchor" href="#_4-3-1-article-list" aria-hidden="true">#</a> 4.3.1 Article List</h4>`,5),C=n("code",null,"src/views/article/list",-1),R={href:"https://github.com/dreamjz/gin-blog/blob/master/src/views/article/list.vue",target:"_blank",rel:"noopener noreferrer"},T=n("h4",{id:"_4-3-2-articledetail-vue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-3-2-articledetail-vue","aria-hidden":"true"},"#"),s(" 4.3.2 ArticleDetail.vue")],-1),S=n("code",null,"src/views/article/components/ArticleDetail.vue",-1),D={href:"https://github.com/dreamjz/gin-blog/blob/master/src/views/article/components/ArticleDetail.vue",target:"_blank",rel:"noopener noreferrer"},N=n("p",null,"至此，基于文章的增删改查功能就完成了",-1),I=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" Reference")],-1),M={href:"https://eddycjy.gitbook.io/golang/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://dev.mysql.com/doc/refman/8.0/en/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://stackoverflow.com/questions/12839927/mysql-tinyint-2-vs-tinyint1-what-is-the-difference",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/spf13/viper",target:"_blank",rel:"noopener noreferrer"},U={href:"https://stackoverflow.com/questions/31952791/setmaxopenconns-and-setmaxidleconns",target:"_blank",rel:"noopener noreferrer"},B={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"};function G(F,j){const a=c("ExternalLinkIcon");return o(),i("div",null,[u,r,d,n("p",null,[s("​ 创建新的 github 仓库 "),n("a",k,[s("gin-blog-server"),t(a)]),s(" ，clone 至本地")]),v,n("p",null,[s("本节使用 "),n("a",m,[s("viper"),t(a)]),s(" 进行配置管理，首先引入 viper")]),b,n("p",null,[s("本节使用 "),n("a",g,[s("gin"),t(a)]),s(" 框架来进行构建，首先引入 gin")]),f,n("p",null,[s("使用 "),n("a",h,[s("endless"),t(a)]),s(" 实现优雅启动和停止服务")]),y,n("p",null,[s("本节使用 "),n("a",q,[s("gorm"),t(a)]),s(" 框架访问数据库，引入 gorm 和 mysql 驱动")]),w,n("p",null,[s("引入 "),n("a",A,[s("cast"),t(a)]),s(" 用于类型转换")]),_,n("p",null,[s("当同时使用 mock 和 server 时，会有服务端无法获取 request body 的bug， 参见"),n("a",x,[s("#3020"),t(a)])]),E,n("p",null,[C,s(", 修改分页数据和响应数据结构, 具体参见"),n("a",R,[s("list.vue"),t(a)])]),T,n("p",null,[S,s(", 修改分页数据和响应数据结构,具体参见"),n("a",D,[s("ArticleDetail.vue"),t(a)])]),N,I,n("ol",null,[n("li",null,[n("a",M,[s("煎鱼 blog"),t(a)]),s(" 煎鱼 blog")]),n("li",null,[n("a",O,[s("mysql-doc"),t(a)]),s(" mysql 8.0 docs")]),n("li",null,[n("a",P,[s("MySql: Tinyint (2) vs tinyint(1) - what is the difference?"),t(a)]),s(" stackoverflow")]),n("li",null,[n("a",L,[s("viper"),t(a)]),s(" github repo")]),n("li",null,[n("a",U,[s("SetMaxOpenConns and SetMaxIdleConns"),t(a)]),s(" stackoverflow")]),n("li",null,[n("a",B,[s("CORS"),t(a)]),s(" MDN docs")])])])}const V=p(l,[["render",G],["__file","01.2.html.vue"]]);export{V as default};
