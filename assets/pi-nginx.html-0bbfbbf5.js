import{_ as r,X as t,Y as d,Z as n,$ as e,a0 as i,a3 as c,a1 as a,F as l}from"./framework-8cb7ec75.js";const v={},u=a(`<p>入手了一个树莓派4B，想要将其变成小型服务器，同时也把自己的博客部署上去,环境：</p><ul><li>Raspberry Pi : 4B+/8G</li><li>OS: Raspios-64bit</li><li>Nginx</li></ul><h2 id="配置静态ip" tabindex="-1"><a class="header-anchor" href="#配置静态ip" aria-hidden="true">#</a> 配置静态IP</h2><p>由于树莓派连接家里的路由器，默认使用DHCP<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>要做为服务器的话，设置静态方便配置连接</p><p>修改<code>cat /etc/dhcpcd.conf</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface wlan0
static ip_address=192.168.***.***/24 # IP地址
static routers=192.168.***.*** # 路由器地址
static domain_name=192.168.***.*** # dns解析地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a> 安装Nginx</h2>`,8),p=a(`<p>可以使用apt安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在$HOME目录下创建<code>nginx</code>目录，目录结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx
├── app
│   └── blog
├── logs
│   ├── access.log
│   ├── error.log
│   ├── info.log
│   └── notice.log
├── nginx.conf
└── start-nginx.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m=n("li",null,[n("p",null,"app: 存放静态资源，打包好的静态网页放在此处,需要在配置文件中设置")],-1),b=n("li",null,[n("p",null,"logs：nginx日志文件")],-1),h=n("li",null,[n("p",null,"nginx.conf : nginx 配置文件")],-1),g={href:"http://start-nginx.sh",target:"_blank",rel:"noopener noreferrer"},_=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/zsh                                                        </span>
<span class="token assign-left variable">CONFIG</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/nginx/nginx.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Config path: &quot;</span><span class="token variable">$CONFIG</span><span class="token string">&quot; &quot;</span>
<span class="token comment">#  如果启动前已经启动nginx并记录下pid文件，会kill指定进程</span>
<span class="token function">sudo</span> nginx <span class="token parameter variable">-s</span> stop

<span class="token comment"># 测试配置文件语法正确性</span>
<span class="token function">sudo</span> nginx <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> <span class="token variable">$CONFIG</span>

<span class="token comment"># 显示版本信息</span>
<span class="token function">sudo</span> nginx <span class="token parameter variable">-v</span>

<span class="token comment"># 按照指定配置去启动nginx</span>
<span class="token function">sudo</span> nginx <span class="token parameter variable">-c</span> <span class="token variable">$CONFIG</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),f=a(`<h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3><p><code>$HOME/nginx/nginx.conf</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#运行用户                                                                                                                                                                                                         
user pi;
    
#启动进程,通常设置成和cpu的数量相等
worker_processes  1;

#全局错误日志
error_log  /home/username/nginx/logs/error.log;
error_log  /home/username/nginx/logs/notice.log  notice;
error_log  /home/username/nginx/logs/info.log  info;

#PID文件，记录当前启动的nginx的进程ID
pid        /run/nginx.pid;

#工作模式及连接数上限
events {
    worker_connections 1024;    #单个后台worker process进程的最大并发链接数
}


http {
    #设定mime类型(邮件支持类型),类型由mime.types文件定义
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;                                                                                                                                                                       

    #设定日志
    log_format  main  &#39;[$remote_addr] - [$remote_user] [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log    /home/username/nginx/logs/access.log main;
    rewrite_log     on; 

    #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，
    #必须设为 on,如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度，降低系统的uptime.
    sendfile        on; 
    #tcp_nopush     on;

    #连接超时时间
    keepalive_timeout  120;
    tcp_nodelay        on; 

   #gzip压缩开关
   #gzip  on;
server {
    listen 80;
    location / {
    	# 设置跨域
        add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;;
        add_header &#39;Access-Control-Allow-Credentials&#39; &#39;true&#39;;
        add_header &#39;Access-Control-Allow-Methods&#39; &#39;GET, POST, OPTIONS&#39;;
        add_header &#39;Access-Control-Allow-Headers&#39; &#39;DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type&#39;;
        root /home/username/nginx/app/blog/dist;
        index index.html;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上传静态资源" tabindex="-1"><a class="header-anchor" href="#上传静态资源" aria-hidden="true">#</a> 上传静态资源</h2><p>此处以vue为例,将打包好的<code>dist</code>目录压缩上传至服务器，将其解压至<code>$HOME/nginx/app/blog/</code>即可</p><p>在客户端浏览器总输入服务器IP地址即可访问：</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/blog.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr>`,8),x={href:"https://creativecommons.org/licenses/by-nc-nd/4.0/",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),e(" 参考")],-1),E={href:"https://segmentfault.com/a/1190000038672615",target:"_blank",rel:"noopener noreferrer"},A={href:"https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E4%B8%BB%E6%9C%BA%E8%AE%BE%E7%BD%AE%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/dunwu/nginx-tutorial",target:"_blank",rel:"noopener noreferrer"},C=n("hr",{class:"footnotes-sep"},null,-1),B={class:"footnotes"},I={class:"footnotes-list"},N={id:"footnote1",class:"footnote-item"},O=n("strong",null,"动态主机设置协议",-1),$=n("strong",null,"D",-1),D=n("strong",null,"H",-1),q=n("strong",null,"C",-1),z=n("strong",null,"P",-1),y=n("strong",null,"DHCP",-1),P=n("strong",null,"动态主机组态协定",-1),F={href:"https://zh.wikipedia.org/wiki/%E7%BD%91%E9%99%85%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"},H={href:"https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"},S={href:"https://zh.wikipedia.org/wiki/OSI%E6%A8%A1%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},G={href:"https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E5%B1%82",target:"_blank",rel:"noopener noreferrer"},M={href:"https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"},T=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function R(L,V){const o=l("RouterLink"),s=l("ExternalLinkIcon");return t(),d("div",null,[u,n("p",null,[e("快速学习使用Nginx可以看这篇"),i(o,{to:"/zh/nginx/nginx.html"},{default:c(()=>[e("Nginx教程")]),_:1})]),p,n("ul",null,[m,b,h,n("li",null,[n("p",null,[n("a",g,[e("start-nginx.sh"),i(s)]),e(" ： 启动脚本")]),_])]),f,n("p",null,[e("本文采用"),n("a",x,[e("CC BY-NC-ND 4.0"),i(s)]),e("进行许可")]),k,n("ol",null,[n("li",null,[n("a",E,[e("vue部署至nginx"),i(s)]),e(" lxcan blog")]),n("li",null,[n("a",A,[e("动态主机设置协议"),i(s)]),e(" wiki")]),n("li",null,[n("a",w,[e("Nginx 极简教程"),i(s)]),e(" github repo")])]),C,n("section",B,[n("ol",I,[n("li",N,[n("p",null,[O,e("（英语："),$,e("ynamic "),D,e("ost "),q,e("onfiguration "),z,e("rotocol，缩写："),y,e("），又称"),P,e("，是一个用于"),n("a",F,[e("IP"),i(s)]),e("网络的"),n("a",H,[e("网络协议"),i(s)]),e("，位于"),n("a",S,[e("OSI模型"),i(s)]),e("的"),n("a",G,[e("应用层"),i(s)]),e("，使用"),n("a",M,[e("UDP"),i(s)]),e("协议工作 "),T])])])])])}const U=r(v,[["render",R],["__file","pi-nginx.html.vue"]]);export{U as default};
