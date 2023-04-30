import{_ as c,X as o,Y as r,Z as n,$ as e,a0 as a,a1 as i,F as l}from"./framework-8cb7ec75.js";const d={},t=i(`<p>之前仅在树莓派上安装nginx并部署了blog，但是如果nginx的配置有问题或者出现错误不方便解决（所有东西都在一台主机上）。</p><p>现在使用docker容器来部署nginx，如果配置错误可以删除容器推到重来，还可以部署多个服务，非常的便利</p><p>部署之前先停止已经运行的nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> nginx <span class="token parameter variable">-s</span> stop  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装Docker</h2><p>这里不要直接用apt,apt里默认的包是docker的GUI版本</p>`,6),p={href:"https://docs.docker.com/engine/install/debian/#install-using-the-convenience-script",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token parameter variable">-o</span> get-docker.sh
 $ <span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看docker版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$docker</span> <span class="token parameter variable">-v</span>                                                                             
Docker version <span class="token number">20.10</span>.10, build b485636
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v={href:"https://dreamjz.github.io/zh/docker/docker-tutorial/get-started.html#%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>设置docker开机自启并启动docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ systemctl start <span class="token function">docker</span> 
$ systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取镜像" tabindex="-1"><a class="header-anchor" href="#获取镜像" aria-hidden="true">#</a> 获取镜像</h2><h3 id="镜像加速" tabindex="-1"><a class="header-anchor" href="#镜像加速" aria-hidden="true">#</a> 镜像加速</h3><p>此处使用网易云镜像服务：<code>https://hub-mirror.c.163.com</code></p><p>请首先执行以下命令，查看是否在 <code>docker.service</code> 文件中配置过镜像地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ systemctl <span class="token function">cat</span> <span class="token function">docker</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;\\-\\-registry\\-mirror&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果该命令有输出，那么请执行 <code>$ systemctl cat docker</code> 查看 <code>ExecStart=</code> 出现的位置，修改对应的文件内容去掉 <code>--registry-mirror</code> 参数及其值，并按接下来的步骤进行配置。</p><p>如果以上命令没有任何输出，那么就可以在 <code>/etc/docker/daemon.json</code> 中写入如下内容（如果文件不存在请新建该文件）：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://hub-mirror.c.163.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://mirror.baidubce.com&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后重新启动服务:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl daemon-reload
$ <span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取nginx官方镜像" tabindex="-1"><a class="header-anchor" href="#获取nginx官方镜像" aria-hidden="true">#</a> 获取Nginx官方镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">docker</span> pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="部署nginx" tabindex="-1"><a class="header-anchor" href="#部署nginx" aria-hidden="true">#</a> 部署nginx</h2><p>启动容器:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">docker</span> container run <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">8897</span>:80 <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> mynginx <span class="token punctuation">\\</span>
nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看是否启动成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">ps</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入之前在本机部署的nginx资源文件夹<code>~/nginx</code>,文件结构如下（之前部署时资源已经放在<code>/app/blog/dist</code>）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx
├── app
│   └── blog
│       └── dist
└── logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制nginx配置目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">docker</span> container <span class="token function">cp</span> mynginx:/etc/nginx <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更改目录名：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mv</span> nginx conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止之前启动的容器,停止后会被自动删除（<code>--rm</code>的作用）:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">docker</span> stop mynginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动nginx:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> my-nginx <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /home/pi/nginx/app/blog/dist:/usr/share//nginx/html <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /home/pi/nginx/logs:/var/log/nginx <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /home/pi/nginx/conf:/etc/nginx <span class="token punctuation">\\</span>
    nginx  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看是否启动成功：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">ps</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在直接在浏览器访问树莓派的ip，可以直接进入blog首页了</p><hr>`,35),b={href:"https://creativecommons.org/licenses/by-nc-nd/4.0/",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),e(" 参考")],-1),g={href:"https://docs.docker.com/engine/install/debian/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://juejin.cn/post/6844903837774397447#heading-0",target:"_blank",rel:"noopener noreferrer"},f={href:"https://dreamjz.github.io/zh/docker/docker-tutorial/docker-nginx.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://stackoverflow.com/questions/30379381/docker-command-not-found-even-though-installed-with-apt-get",target:"_blank",rel:"noopener noreferrer"};function _($,y){const s=l("ExternalLinkIcon");return o(),r("div",null,[t,n("p",null,[e("这里直接使用官网的安装脚本，其他的安装方式参见"),n("a",p,[e("Docker官网手册"),a(s)])]),u,n("p",null,[e("默认docker需要root权限运行，想要以非root命令运行可以参考"),n("a",v,[e("docker安装"),a(s)])]),m,n("p",null,[e("本文采用"),n("a",b,[e("CC BY-NC-ND 4.0"),a(s)]),e("进行许可")]),h,n("ol",null,[n("li",null,[n("p",null,[n("a",g,[e("Install Docker Engine on Debian"),a(s)]),e(" docker manuals")])]),n("li",null,[n("p",null,[n("a",k,[e("Docker 部署 vue 项目"),a(s)]),e(" 稀土掘金")])]),n("li",null,[n("p",null,[n("a",f,[e("Docker 部署Nginx"),a(s)]),e(" 今朝のブログ")])]),n("li",null,[n("p",null,[n("a",x,[e("docker command not found even though installed with apt-get"),a(s)]),e(" stackoverflow")])])])])}const j=c(d,[["render",_],["__file","pi-docker-blog.html.vue"]]);export{j as default};