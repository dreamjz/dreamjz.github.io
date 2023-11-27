import{_ as i,Z as t,$ as p,a0 as n,a1 as s,a2 as e,a4 as l,H as o}from"./framework-d03928c9.js";const c={},r=l(`<p>在之前的步骤中，我们完成了基本的文章增删改查功能，接下来就将其部署到 Docker 上</p><p>之前已经在 nginx 上部署了一个 vuepress 项目，这次就在另一个 nginx 上部署本项目</p><p>前端项目通过反向代理实现在同一域名下不同路径访问不同的应用：</p><ul><li><code>localhost/</code>: 为 vuepress blog</li><li><code>localhost/app/</code>: 为本应用</li></ul><p>后端项目通过创建一个负载均衡 nginx 来转发前端的请求</p><h2 id="_1-fontend-deploy" tabindex="-1"><a class="header-anchor" href="#_1-fontend-deploy" aria-hidden="true">#</a> 1. Fontend deploy</h2><h3 id="_1-1-配置目录" tabindex="-1"><a class="header-anchor" href="#_1-1-配置目录" aria-hidden="true">#</a> 1.1 配置目录</h3><p>创建资源文件夹，这里 conf 文件夹不用手动创建，后面从容器中复制一份出来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MyDockerApps
└── blog-app
    ├── app
    │   ├── conf
    │   ├── data
    │   └── logs
    └── blog
        ├── conf
        ├── data
        └── logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>blog-app</code>: 应用根路径</li><li><code>app</code>: 本应用</li><li><code>blog</code>: vuepress blog 应用</li><li><code>conf</code>: nginx 配置</li><li><code>data</code>: 资源路径</li><li><code>logs</code>: nginx 日志</li></ul><p>启动 nginx 并复制配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--name</span> test-nginx nginx
$ <span class="token function">docker</span> container <span class="token function">cp</span> test-nginx:/etc/nginx/ ./app
$ <span class="token function">docker</span> container <span class="token function">cp</span> test-nginx:/etc/nginx/ ./blog
$ <span class="token function">mv</span> ./app/nginx ./app/conf
$ <span class="token function">mv</span> ./blog/nginx ./blog/conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>--rm</code>: stop 容器时，容器自动删除</li><li><code>docker container cp container:dir destDir</code>: 将容器内的文件复制到指定目录</li></ul><h3 id="_1-2-配置反向代理" tabindex="-1"><a class="header-anchor" href="#_1-2-配置反向代理" aria-hidden="true">#</a> 1.2 配置反向代理</h3><p>修改<code>./blog/conf/conf.d/default.conf</code>, 建议将 <code>default</code> 改为自定义的域名 <code>servername</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    location /app/ {
         proxy_pass http://app/;
    }
    
    error_page  404 /404.html;

    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>location /app/</code> : URI 匹配，<code>proxy_pass</code> 将 <code>/app/</code> 的请求代理到指定地址 需要注意的是 <code>http://app/</code> 和 <code>http://app</code><ul><li><code>http://app/</code>: 将会把 URI 去除前缀后追加至代理路径 例如：<code>htpp://localhost:/app/article</code> 将被代理至 <code>http://app-nginx/article</code></li><li><code>http://app</code>: 将完整匹配的 URI 追加至代理路径 例如： <code>htpp://localhost:/app/article</code> 将被代理至 <code>http://app-nginx/app/article</code></li></ul></li></ul><p><code>./blog/conf/nginx.conf</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;

    upstream app {
        server app-nginx:80;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>upstream</code>: 配置上游服务 <ul><li><code>app</code>: 名称</li><li><code>server</code>: 指定地址，<code>app-nginx</code> 为部署本应用的容器名，在容器加入同一网络之后，其将作为容器的域名</li></ul></li></ul><p><code>./app/conf/conf.d/default.conf</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen       80; 
    listen  [::]:80;
    server_name  localhost;

    access_log  /var/log/nginx/host.access.log  main;

    location / { 
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }   

    error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }   
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-docker-network" tabindex="-1"><a class="header-anchor" href="#_1-4-docker-network" aria-hidden="true">#</a> 1.4 Docker Network</h3><p>两个 nginx 容器需要使用 docker network 互联，创建 network</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> network create <span class="token parameter variable">-d</span> bridge blog-app-net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-d</code>: 网络模式， <code>bridge</code> 为桥接模式</li></ul><h3 id="_1-3-简单测试" tabindex="-1"><a class="header-anchor" href="#_1-3-简单测试" aria-hidden="true">#</a> 1.3 简单测试</h3><p>现在简单测试下反向代理的效果，为了方便可以编写启动容器的脚本</p><p><code>start-app.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># app-nginx </span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">--name</span> app-nginx <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> <span class="token environment constant">$HOME</span>/MyDockerApps/blog-app/app/conf:/etc/nginx:ro <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> <span class="token environment constant">$HOME</span>/MyDockerApps/blog-app/app/logs:/var/log/nginx <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> <span class="token environment constant">$HOME</span>/MyDockerApps/blog-app/app/data/dist:/usr/share/nginx/html <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime:ro <span class="token punctuation">\\</span>
        <span class="token parameter variable">--network</span> blog-app-net <span class="token punctuation">\\</span>
        <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
        nginx 

<span class="token comment"># blog-nginx</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">--name</span> blog-nginx <span class="token punctuation">\\</span>
        <span class="token parameter variable">-p</span> <span class="token number">18080</span>:80 <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> <span class="token environment constant">$HOME</span>/MyDockerApps/blog-app/blog/conf:/etc/nginx:ro <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> <span class="token environment constant">$HOME</span>/MyDockerApps/blog-app/blog/logs:/var/log/nginx <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> <span class="token environment constant">$HOME</span>/MyDockerApps/blog-app/blog/data/dist:/usr/share/nginx/html <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime:ro <span class="token punctuation">\\</span>
        <span class="token parameter variable">--network</span> blog-app-net <span class="token punctuation">\\</span>
        <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
        nginx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-v /etc/localtime:/etc/localtime:ro </code>: 同步宿主机时区</li></ul><p><code>recreate-app.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span>  blog-nginx app-nginx
./start-app.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>restart-app.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>
<span class="token function">docker</span> restart app-nginx blog-nginx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>写入测试用的页面：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> ./blog/data/dist ./app/data/dist
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;HELLO BLOG&#39;</span> <span class="token operator">&gt;&gt;</span> ./blog/data/dist/index.html
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;HELLO APP&#39;</span> <span class="token operator">&gt;&gt;</span> ./app/data/dist/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动容器，并测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./start-app.sh
$ <span class="token function">curl</span> <span class="token string">&#39;http://localhost:18080&#39;</span>
HELLO BLOG
$ <span class="token function">curl</span> <span class="token string">&#39;http://localhost:18080/app/&#39;</span>
HELLO APP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-deploy" tabindex="-1"><a class="header-anchor" href="#_1-4-deploy" aria-hidden="true">#</a> 1.4 Deploy</h3><p>测试反向代理成功后就可以部署前端应用了，vuepress 的项目可以使用上述的 <code>./blog/data/dist/index.html</code> 替代</p><h4 id="_1-4-1-配置public-path" tabindex="-1"><a class="header-anchor" href="#_1-4-1-配置public-path" aria-hidden="true">#</a> 1.4.1 配置Public Path</h4><p>Vue CLI 默认认为应用部署在域名根路径，若需要部署在非根目录则需要修改 <code>publicPath</code> 为对应的路径, 以及 router 和 axios 的baseurl</p><p>我们将不同的变量放在环境配置中，这样就可以根据环境使用不同的配置了，比如：<code>dev</code> 环境使用 <code>publicPath: &#39;/&#39;</code> 即可而部署是可以改为 <code>‘/app/’</code></p><p>修改<code>.env.production</code> ,添加 <code>PUBLIC_PATH</code> 并修改 server 参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># public path
PUBLIC_PATH = &#39;/app/&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将<code>vue.config.js</code> 的 <code>publicPath</code> 修改为环境变量</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pulicPath <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PUBLIC_PATH</span>
module<span class="token punctuation">.</span>export <span class="token punctuation">{</span>
	<span class="token literal-property property">publicPath</span><span class="token operator">:</span> pulicPath<span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> baseURL <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PUBLIC_PATH</span>
<span class="token keyword">const</span> <span class="token function-variable function">createRouter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> baseURL<span class="token punctuation">,</span>
    <span class="token comment">// mode: &#39;history&#39;, // require service support</span>
    <span class="token function-variable function">scrollBehavior</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">routes</span><span class="token operator">:</span> constantRoutes
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> baseURL <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PUBLIC_PATH</span> <span class="token operator">+</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span>
<span class="token comment">// create an axios instance</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> baseURL<span class="token punctuation">,</span> <span class="token comment">// url = base url + request url</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// send cookies when cross-domain requests</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span> <span class="token comment">// request timeout</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-2-部署脚本" tabindex="-1"><a class="header-anchor" href="#_1-4-2-部署脚本" aria-hidden="true">#</a> 1.4.2 部署脚本</h4><p>在前端项目根目录创建<code>deploy/deploy.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token assign-left variable">yellowFront</span><span class="token operator">=</span><span class="token string">&#39;\\e[33m&#39;</span>
<span class="token assign-left variable">redFront</span><span class="token operator">=</span><span class="token string">&#39;\\e[31m&#39;</span>
<span class="token assign-left variable">greenFront</span><span class="token operator">=</span><span class="token string">&#39;\\e[32m&#39;</span>
<span class="token assign-left variable">restoe</span><span class="token operator">=</span><span class="token string">&#39;\\e[0m&#39;</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$yellowFront</span><span class="token string">&#39;Start Deploy&#39;</span><span class="token variable">$restoe</span>

    <span class="token function">yarn</span> run build:prod
    <span class="token assign-left variable">distPath</span><span class="token operator">=</span><span class="token string">&#39;dist&#39;</span>
    <span class="token assign-left variable">appPath</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/MyDockerApps/blog-app/app/data
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$greenFront</span><span class="token string">&#39; Deploying resources ...&#39;</span><span class="token variable">$restoe</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-d</span>  <span class="token variable">$appPath</span>/dist <span class="token punctuation">]</span><span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$redFront</span><span class="token string">&#39;  Deleting exists resources ...&#39;</span><span class="token variable">$restoe</span>
            <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$appPath</span>/dist
        <span class="token keyword">fi</span>
        <span class="token function">cp</span> <span class="token parameter variable">-r</span> <span class="token variable">$distPath</span> <span class="token variable">$appPath</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$greenFront</span><span class="token string">&#39; Restart&#39;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> restart app-nginx<span class="token variable">\`</span></span><span class="token variable">$restoe</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$yellowFront</span><span class="token string">&#39;Deploy Done&#39;</span><span class="token variable">$restoe</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单流程如下：</p><ul><li>构建项目生成<code>dist</code>目录</li><li>删除原有的静态资源（若存在），将<code>dist</code>目录复制到资源目录</li><li>重启容器</li></ul><p>在<code>package.json</code>中添加指令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;deploy&quot;: &quot;sh ./deploy/deploy.sh&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行部署脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> run deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>浏览器访问<code>http://localhost:18080/app/</code>可以成功进入 Dashboard 页面</p><p>现阶段项目的构建都是在本地环境的，但是对于每个人来说本地环境不尽相同，不能够保证构建结果一致</p><p>更好的做法是采用多阶段构建(mulit-stage build)在使用 docker 镜像进行编译构建以保证环境的一致性</p><h2 id="_2-load-balancer" tabindex="-1"><a class="header-anchor" href="#_2-load-balancer" aria-hidden="true">#</a> 2. Load Balancer</h2><p>本节将添加一个 nginx 作为负载均衡服务器并采用轮询策略将请求转发至三个后台服务</p><p>和上面类似，将配置文件挂载到本地</p><p><code>start-load-banlancer.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>
<span class="token comment"># load-balancer-nginx</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">-p</span> <span class="token number">19090</span>:80 <span class="token punctuation">\\</span>
        <span class="token parameter variable">--name</span> load-balancer-nginx <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> <span class="token environment constant">$HOME</span>/MyDockerApps/blog-app/load-balancer/logs:/var/log/nginx <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> <span class="token environment constant">$HOME</span>/MyDockerApps/blog-app/load-balancer/conf:/etc/nginx <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime <span class="token punctuation">\\</span>
        <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
        <span class="token parameter variable">--network</span> blog-app-net <span class="token punctuation">\\</span>
        nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置文件<code>./load-balancer/conf/conf.d/localhost.conf</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen       19090;
    listen  [::]:19090;
    server_name  localhost;

    access_log  /var/log/nginx/host.access.log  main;

    location / { 
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }   

    error_page  404              /404.html;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置负载均衡<code>./load-balancer/conf/nginx.conf</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;

    upstream go-server {
        server blog-app-server-01:19091;
        server blog-app-server-02:19092;
        server blog-app-server-03:19093;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>upstream go-server</code>: 设置了三个服务，默认是权重为 1 的加权轮询策略</p><p>至此，负载均衡服务就完成了，接下来部署后台服务</p><h2 id="_3-mysql-deploy" tabindex="-1"><a class="header-anchor" href="#_3-mysql-deploy" aria-hidden="true">#</a> 3. Mysql Deploy</h2><p>类似的，创建资源目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>blog-app
└── mysql
    ├── conf
    └── data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>conf</code>: mysql 配置</li><li><code>data</code>: 存储 mysql 数据</li></ul><p><code>start-mysql.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>
  
<span class="token comment"># blog-app-mysql</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> blog-app-mysql <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token environment constant">$HOME</span>/MyDockerApps/blog-app/mysql/conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token environment constant">$HOME</span>/MyDockerApps/blog-app/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime:ro <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>pass <span class="token punctuation">\\</span>
    <span class="token parameter variable">--network</span> blog-app-net <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
    mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-v $HOME/MyDockerApps/blog-app/mysql/conf:/etc/mysql/conf.d</code>: 挂载自定义配置</li><li><code>-v $HOME/MyDockerApps/blog-app/mysql/data:/var/lib/mysql</code>: 挂载数据库文件</li><li><code>-e MYSQL_ROOT_PASSWORD=pass</code>: 设置 ROOT 用户密码</li></ul><h3 id="_3-1-初始化数据库" tabindex="-1"><a class="header-anchor" href="#_3-1-初始化数据库" aria-hidden="true">#</a> 3.1 初始化数据库</h3><p>启动容器后，执行 sql 脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> blog-app-mysql <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;mysql -uroot -p\${MYSQL_ROOT_PASSWORD}&#39;</span> <span class="token operator">&lt;</span> blog.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>sh -c </code>: <code>-c </code>后面的字符串讲作为 shell 的命令执行</li></ul><p>可以直接进入 容器访问 mysql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> blog-app-mysql <span class="token function">bash</span>
mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以启动一个同一 docker network 的临时 mysql 实例作为 client 进行访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--network</span> blog-app-net mysql mysql -hblog-app-mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-backend-deploy" tabindex="-1"><a class="header-anchor" href="#_4-backend-deploy" aria-hidden="true">#</a> 4. Backend Deploy</h2><h3 id="_4-1-本地编译" tabindex="-1"><a class="header-anchor" href="#_4-1-本地编译" aria-hidden="true">#</a> 4.1 本地编译</h3><p>部署之前，先在本地编译好可执行文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>linux go build <span class="token parameter variable">-o</span> ./bin/blog-app-server main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>CGO_ENABLED=0</code>: 禁用 CGO 动态链接，采用静态链接库，因为运行环境在 scratch 镜像中</li><li><code>GOOS</code>: 声明程序构建环境的目标操作系统</li></ul><h3 id="_4-2-dockerfile" tabindex="-1"><a class="header-anchor" href="#_4-2-dockerfile" aria-hidden="true">#</a> 4.2 Dockerfile</h3><p>创建 Dockerfile，这里使用 <code>scratch</code> 镜像，这样构建的镜像会非常小</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> scratch</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app/config</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./bin/blog-app-server /app</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">ENV</span> APP_ENV=docker</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 9090</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;/app/blog-app-server&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意 scratch 中没有 shell ，无法直接使用 mkdir 创建目录</p><p>可以使用 WORKDIR 来创建目录， 或者在多阶段构建中从其他容器中复制过来</p><p>需要注意的是在 <code>WORKDIR /app/config</code> 之后再次使用 <code>WORKDIR /app</code> 将工作目录切换到了 <code>/app</code></p><p>若切换的话，启动容器时应用会到<code>/app/config/config</code>下寻找配置文件，和预期不符</p><p>构建镜像并查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> blog-app-server:local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> image <span class="token function">ls</span>
REPOSITORY                 TAG       IMAGE ID       CREATED          SIZE
blog-app-server            <span class="token builtin class-name">local</span>    93827d1581c0   <span class="token number">7</span> seconds ago   	 18MB
golang                     alpine    6f9d081b1170   <span class="token number">10</span> days ago      315MB
golang                     latest    d939cc1fb139   <span class="token number">5</span> weeks ago      941MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里可以对比下 golang 官方和 goalng:alpine 的大小，使用 <code>scratch</code> 镜像非常小</p><p>因为这些官方镜像包含了各种编译环境、库和工具等所以大小会比较大</p>`,105),d=n("code",null,"gcr.io/distroless/static",-1),u=n("code",null,"gcr.io/distroless/base",-1),v={href:"https://github.com/GoogleContainerTools/distroless/blob/main/base/README.md",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"gcr.io/distroless/base",-1),k=n("code",null,"gcr.io/distroless/static",-1),b=l(`<h3 id="_4-3-资源目录" tabindex="-1"><a class="header-anchor" href="#_4-3-资源目录" aria-hidden="true">#</a> 4.3 资源目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>blog-app
└── server
    └── conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建配置文件 <code>./conf/config.docker.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9090</span>
  <span class="token key atrule">readTimeout</span><span class="token punctuation">:</span> 10s
  <span class="token key atrule">readHeaderTimeout</span><span class="token punctuation">:</span> 10ms
  <span class="token key atrule">writeTimeout</span><span class="token punctuation">:</span> 10s

<span class="token key atrule">mysql</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> blog<span class="token punctuation">-</span>app<span class="token punctuation">-</span>mysql
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> root
  <span class="token key atrule">password</span><span class="token punctuation">:</span> pass
  <span class="token key atrule">database</span><span class="token punctuation">:</span> gin_blog
  <span class="token key atrule">charset</span><span class="token punctuation">:</span> utf8

<span class="token key atrule">gorm</span><span class="token punctuation">:</span>
  <span class="token key atrule">tablePrefix</span><span class="token punctuation">:</span> blog_
  <span class="token key atrule">maxIdleConns</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">maxOpenConns</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">logLevel</span><span class="token punctuation">:</span> error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>host: blog-app-mysql</code>: 容器和 mysql 容器在同一网络下，容器名将作为域名</li><li><code>logLevel: warn</code>: 生产环境可以提高 log level</li></ul><h4 id="_4-3-启动-container" tabindex="-1"><a class="header-anchor" href="#_4-3-启动-container" aria-hidden="true">#</a> 4.3 启动 Container</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>
  
<span class="token assign-left variable">serverName</span><span class="token operator">=</span><span class="token string">&quot;blog-app-server0&quot;</span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">19090</span>
  
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span>  <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">let</span> port++
    <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">--name</span> <span class="token variable">$serverName</span><span class="token variable">$i</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">-p</span> <span class="token variable">$port</span>:9090 <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> <span class="token environment constant">$HOME</span>/MyDockerApps/blog-app/server/conf:/app/config <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime <span class="token punctuation">\\</span>
        <span class="token parameter variable">-e</span> <span class="token assign-left variable">APP_ENV</span><span class="token operator">=</span>docker <span class="token punctuation">\\</span>
        <span class="token parameter variable">--network</span> blog-app-net <span class="token punctuation">\\</span>
        <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
        blog-app-server:v1
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述脚本将启动三个后端容器</p><h2 id="_5-muli-stage-builds" tabindex="-1"><a class="header-anchor" href="#_5-muli-stage-builds" aria-hidden="true">#</a> 5. Muli-stage builds</h2><p>在上面的例子中，我们都是采用本地编译/构建然后将资源部署至本地挂载的目录中。但是这样有一个弊端，不能保证不同的环境编译或构建的结果，因为每个人的编译环境不尽相同不能保证其编译结果；若是个人项目的话只在单个设备上运行问题不大，若是需要部署到不同的环境中则需要保证结果的一致性。</p><p>多阶段构建 (Multi-stage build) 不仅可以解决上述问题，还可以有效的降低镜像的大小 （将构建结果直接复制到极小的镜像中运行，不必带入构建过程中的需要的工具，库等）</p><p>下面就来将前端和后端项目采用 Multi-stage 来构建镜像</p><h3 id="_5-1-front-end" tabindex="-1"><a class="header-anchor" href="#_5-1-front-end" aria-hidden="true">#</a> 5.1 Front end</h3><p>创建 <code>.dockerignore</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>**/dist
**/node_modules
yarn.lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>忽略掉不需要的文件和目录</p><p>创建<code>Dockerfile</code></p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment">#</span>
<span class="token comment"># Build</span>
<span class="token comment">#</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:17 <span class="token keyword">AS</span> build-env</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./ /app</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">ENV</span> NODE_OPTIONS=--openssl-legacy-provider</span>
<span class="token instruction"><span class="token keyword">RUN</span> yarn config set registry https://registry.npm.taobao.org <span class="token operator">\\</span>
    &amp;&amp; yarn config set proxy http://127.0.0.1:7890 <span class="token operator">\\</span>
    &amp;&amp; yarn config set https-proxy http://127.0.0.1:7890 <span class="token operator">\\</span>
    &amp;&amp; yarn install <span class="token operator">\\</span>
    &amp;&amp; yarn run build:prod</span>

<span class="token comment">#</span>
<span class="token comment"># Deploy</span>
<span class="token comment">#</span>
<span class="token instruction"><span class="token keyword">FROM</span> nginx:alpine</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">build-env</span></span> /app/dist /app</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),g=n("code",null,"ENV NODE_OPTIONS=--openssl-legacy-provider",-1),h=n("code",null,"Error:0308010C",-1),y={href:"https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported",target:"_blank",rel:"noopener noreferrer"},_=l(`<p>构建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> build <span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token parameter variable">-t</span> app-blog:v1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-2-backend" tabindex="-1"><a class="header-anchor" href="#_5-2-backend" aria-hidden="true">#</a> 5.2 Backend</h3><p>创建 <code>.dockerignore</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bin/
config/
blog.sql
README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Dockerfile</code></p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment">#</span>
<span class="token comment"># Build</span>
<span class="token comment">#</span>
<span class="token instruction"><span class="token keyword">FROM</span> golang:alpine <span class="token keyword">AS</span> build-env</span>
<span class="token comment"># Set proxy</span>
<span class="token instruction"><span class="token keyword">ENV</span> GOPROXY https://goproxy.cn,direct</span>
<span class="token instruction"><span class="token keyword">COPY</span> . /app</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">RUN</span> go mod download <span class="token operator">\\</span>
    &amp;&amp; CGO_ENABLED=0 GOOS=linux go build -o /blog-app-server</span>

<span class="token comment">#</span>
<span class="token comment"># Deploy</span>
<span class="token comment">#</span>
<span class="token instruction"><span class="token keyword">FROM</span> gcr.io/distroless/static:latest</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app/config</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">build-env</span></span> /blog-app-server /app</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 9090</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;/app/blog-app-server&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> build <span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token parameter variable">-t</span> blog-app-server:v1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-3-编写启动脚本" tabindex="-1"><a class="header-anchor" href="#_5-3-编写启动脚本" aria-hidden="true">#</a> 5.3 编写启动脚本</h3><p>在上面的步骤中我们都是一个个启动容器的，比较繁琐，现在我们优化一下启动脚本</p><p>在 <code>blog-app</code> 目录下创建 <code>scripts</code>,并将之前的启动脚本放在这里并编写新的脚本一次启动所有容器</p><p><code>start-apps.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>
  
<span class="token comment"># run all container</span>
./app.sh
./mysql.sh
./server.sh
./load-balancer.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就能一次性启动所有容器了</p><h2 id="_6-docker-compose" tabindex="-1"><a class="header-anchor" href="#_6-docker-compose" aria-hidden="true">#</a> 6. Docker Compose</h2><p>之前的步骤中我们使用了脚本来一次启动所有容器，但是如果需要重新启动，重新构建，配置网络等步骤需要编写更加复杂的脚本。当需要启动的容器数量越多，管理就越复杂</p>`,17),x={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"},f=l(`<h3 id="_6-1-compose-file" tabindex="-1"><a class="header-anchor" href="#_6-1-compose-file" aria-hidden="true">#</a> 6.1 Compose File</h3><p>在项目资源目录创建<code>/blog-app/docker-compose.yaml</code>, 不建议将其放在项目根目录，因为 Docker Compose 是用于编排和管理多个容器，不应和单个项目糅合在一起</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">blog-nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;18080:80&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&quot;\${BLOG_NGINX_PATH}/conf&quot;</span>
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/nginx 
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&quot;\${BLOG_NGINX_PATH}/logs&quot;</span>
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /var/log/nginx 
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind 
        <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&quot;\${BLOG_NGINX_PATH}/data/dist&quot;</span>
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /usr/share/nginx/html
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> /etc/localtime
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/localtime
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> app<span class="token punctuation">-</span>nginx

  <span class="token key atrule">app-nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&quot;\${APP_NGINX_PATH}/conf&quot;</span>
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/nginx 
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&quot;\${APP_NGINX_PATH}/logs&quot;</span>
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /var/log/nginx 
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind 
        <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&quot;\${APP_NGINX_PATH}/data/dist&quot;</span>
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /usr/share/nginx/html
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> /etc/localtime
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/localtime
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> load<span class="token punctuation">-</span>balancer<span class="token punctuation">-</span>nginx

  <span class="token key atrule">load-balancer-nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;19090:80&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&quot;\${LOAD_BALANCER_NGINX_PATH}/conf&quot;</span>
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/nginx 
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&quot;\${LOAD_BALANCER_NGINX_PATH}/logs&quot;</span>
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /var/log/nginx 
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> /etc/localtime
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/localtime
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> blog<span class="token punctuation">-</span>app<span class="token punctuation">-</span>server

  <span class="token key atrule">server</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> <span class="token string">&quot;\${BACKEND_PATH}/&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9090&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&quot;\${SERVER_PATH}/config&quot;</span>
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /app/config
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> /etc/localtime
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/localtime
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always  
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> msyql<span class="token punctuation">-</span>db

  <span class="token key atrule">mysql-db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">8.0</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;\${MYSQL_ROOT_PASSWORD}&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&quot;\${MYSQL_PATH}/conf&quot;</span>
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/mysql/conf.d 
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&quot;\${MYSQL_PATH}/data&quot;</span>
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /var/lib/mysql 
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> /etc/localtime
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/localtime
        <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&quot;\${MYSQL_PATH}/init&quot;</span>
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>depends_on</code>: 仅表示依赖关系，但容器并不会等待依赖容器完全启动后再启动</li></ul><h3 id="_6-2-env-file" tabindex="-1"><a class="header-anchor" href="#_6-2-env-file" aria-hidden="true">#</a> 6.2 <code>.env</code> file</h3><p>编写<code>.env</code> 文件设置上面出现的环境变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BLOG_NGINX_PATH=sample path
APP_NGINX_PATH=sample path
LOAD_BALANCER_NGINX_PATH=sample path
SERVER_PATH=sample path
MYSQL_ROOT_PASSWORD=root pass
MYSQL_PATH=sample path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-启动服务" tabindex="-1"><a class="header-anchor" href="#_6-3-启动服务" aria-hidden="true">#</a> 6.3 启动服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> compose <span class="token parameter variable">-p</span> ba up <span class="token parameter variable">-d</span> <span class="token parameter variable">--scale</span> <span class="token assign-left variable">server</span><span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-p</code>: 指定 project 名称，默认为当前目录的名称（例如 blog-app），启动的容器名格式为 <code>project-service-No.</code>, 例如 <code>ba-server-1</code></li><li><code>-d</code>: detached, 服务在后台运行</li><li><code>--scale service=num</code>: 指定启动服务容器的数量，这里启动了三个后台服务</li></ul><p>至此完整的服务部署就完成了，在浏览器中访问 <code>http://localhost:18080/app/</code> 即可访问</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,12),q={href:"https://nginx.org/en/docs/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://hub.docker.com/_/nginx",target:"_blank",rel:"noopener noreferrer"},$={href:"https://cli.vuejs.org/zh/config/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://router.vuejs.org/zh/guide/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/GoogleContainerTools/distroless/blob/main/base/README.md",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"gcr.io/distroless/base",-1),R=n("code",null,"gcr.io/distroless/static",-1),E={href:"https://hub.docker.com/_/mysql",target:"_blank",rel:"noopener noreferrer"},M={href:"https://docs.docker.com/develop/develop-images/multistage-build/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported",target:"_blank",rel:"noopener noreferrer"},L={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"};function T(H,I){const a=o("ExternalLinkIcon");return t(),p("div",null,[r,n("p",null,[s("也可以使用官方教程中使用的 "),d,s(" 或 "),u,s(" 参见 "),n("a",v,[s("Documentation for "),m,s(" and "),k,e(a)]),s("， 相比于 scratch 有着更好的安全性")]),b,n("p",null,[g,s(" 用于解决 "),h,s(", 详情参见"),n("a",y,[s('Error message "error:0308010C:digital envelope routines::unsupported"'),e(a)])]),_,n("p",null,[s("此时就需要用到 Docker Compose 来管理多个容器所构成的应用，具体介绍可以参见"),n("a",x,[s("Docker Compose"),e(a)])]),f,n("ol",null,[n("li",null,[n("a",q,[s("nginx"),e(a)]),s(" nginx docs")]),n("li",null,[n("a",O,[s("docker nginx"),e(a)]),s(" docker hub")]),n("li",null,[n("a",$,[s("config"),e(a)]),s(" vue-cli docs")]),n("li",null,[n("a",w,[s("history mode"),e(a)]),s(" vue-router docs")]),n("li",null,[n("a",P,[s("HTTP Load Balancing"),e(a)]),s(" nginx docs")]),n("li",null,[n("a",A,[s("Documentation for "),D,s(" and "),R,e(a)])]),n("li",null,[n("a",E,[s("docker mysql"),e(a)]),s(" docker hub")]),n("li",null,[n("a",M,[s("Use multi-stage builds"),e(a)]),s(" docker docs")]),n("li",null,[n("a",N,[s('Error message "error:0308010C:digital envelope routines::unsupported"'),e(a)]),s(" stackoverflow")]),n("li",null,[n("a",L,[s("Docker Compose"),e(a)]),s(" Docker docs")])])])}const C=i(c,[["render",T],["__file","01.3.html.vue"]]);export{C as default};
