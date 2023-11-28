import{_ as l,Z as t,$ as d,a0 as n,a1 as s,a2 as i,a3 as a,H as c}from"./framework-dee406ed.js";const r={},o=a(`<h2 id="introduction-简介" tabindex="-1"><a class="header-anchor" href="#introduction-简介" aria-hidden="true">#</a> Introduction 简介</h2><p>Nginx(engine x)是一款轻量级的web服务器，反向代理服务器及电子邮件(IMAP/POP3)代理服务器</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/nginx.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h3><p>反向代理(Reverse proxy)方式是指以代理服务器来接受 internet 上的连接请求，然后将请求发给内部网络上的服务器，并将服务器上得到的结果返回给 internet 上请求连接的客户端，此时代理服务器就表现为一个反向代理服务器</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/reverse-proxy.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h2><p>环境：</p><ul><li>Server: Raspian 64-bit</li><li>Client: Windows11</li></ul><p>nginx常用命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> stop       快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。
nginx <span class="token parameter variable">-s</span> quit       平稳关闭Nginx，保存相关信息，有安排的结束web服务。
nginx <span class="token parameter variable">-s</span> reload     因改变了Nginx相关配置，需要重新加载配置而重载。
nginx <span class="token parameter variable">-s</span> reopen     重新打开日志文件。
nginx <span class="token parameter variable">-c</span> filename   为 Nginx 指定一个配置文件，来代替缺省的。
nginx <span class="token parameter variable">-t</span>            不运行，仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件。
nginx <span class="token parameter variable">-v</span>            显示 nginx 的版本。
nginx <span class="token parameter variable">-V</span>            显示 nginx 的版本，编译器版本和配置参数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以编写启动脚本,方便快速启动:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/zsh   </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http-反向代理" tabindex="-1"><a class="header-anchor" href="#http-反向代理" aria-hidden="true">#</a> Http 反向代理</h3><p>nginx配置如下(linux默认配置为<code>/etc/nginx/nginx.conf</code>,也可使用<code>-c</code>指定配置文件)：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#运行用户</span>
user username<span class="token punctuation">;</span>


<span class="token comment">#启动进程,通常设置成和cpu的数量相等</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#全局错误日志</span>
error_log  /home/username/nginx/logs/error.log<span class="token punctuation">;</span>
error_log  /home/username/nginx/logs/notice.log  notice<span class="token punctuation">;</span>
error_log  /home/username/nginx/logs/info.log  info<span class="token punctuation">;</span>

<span class="token comment">#PID文件，记录当前启动的nginx的进程ID</span>
pid        /home/username/nginx/logs/pid/nginx.pid<span class="token punctuation">;</span>

<span class="token comment">#工作模式及连接数上限</span>
events <span class="token punctuation">{</span>
    worker_connections <span class="token number">1024</span><span class="token punctuation">;</span>    <span class="token comment">#单个后台worker process进程的最大并发链接数</span>
<span class="token punctuation">}</span>

<span class="token comment">#设定http服务器，利用它的反向代理功能提供负载均衡支持</span>
http <span class="token punctuation">{</span>
    <span class="token comment">#设定mime类型(邮件支持类型),类型由mime.types文件定义</span>
    include       /etc/nginx/mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    <span class="token comment">#设定日志</span>
	log_format  main  <span class="token string">&#39;[$remote_addr] - [$remote_user] [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    access_log    /home/username/nginx/logs/access.log main<span class="token punctuation">;</span>
    rewrite_log     on<span class="token punctuation">;</span>

    <span class="token comment">#sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，</span>
    <span class="token comment">#必须设为 on,如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度，降低系统的uptime.</span>
    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#连接超时时间</span>
    keepalive_timeout  <span class="token number">120</span><span class="token punctuation">;</span>
    tcp_nodelay        on<span class="token punctuation">;</span>

	<span class="token comment">#gzip压缩开关</span>
	<span class="token comment">#gzip  on;</span>

    <span class="token comment">#设定实际的服务器列表</span>
    upstream zp_server1<span class="token punctuation">{</span>
        server <span class="token number">127.0</span>.0.1:8889<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#HTTP服务器</span>
    server <span class="token punctuation">{</span>
        <span class="token comment">#监听80端口，80端口是知名端口号，用于HTTP协议</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span> 

        <span class="token comment">#定义使用域名访问</span>
        server_name  helloworld.test<span class="token punctuation">;</span>

		<span class="token comment">#首页</span>
		index index.html

		<span class="token comment">#指向webapp的目录</span>
		root /home/pi/nginx/content/<span class="token punctuation">;</span>

		<span class="token comment">#编码格式</span>
		charset utf-8<span class="token punctuation">;</span>

		<span class="token comment">#代理配置参数</span>
        proxy_connect_timeout <span class="token number">180</span><span class="token punctuation">;</span>
        proxy_send_timeout <span class="token number">180</span><span class="token punctuation">;</span>
        proxy_read_timeout <span class="token number">180</span><span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header X-Forwarder-For <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>

        <span class="token comment">#反向代理的路径（和upstream绑定），location 后面设置映射的路径</span>
        location / <span class="token punctuation">{</span>
            proxy_pass http://zp_server1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#静态文件，nginx自己处理</span>
        <span class="token comment"># location ~ ^/(images|javascript|js|css|flash|media|static)/ {</span>
            <span class="token comment">#root D:\\01_Workspace\\Project\\github\\zp\\SpringNotes\\spring-security\\spring-shiro\\src\\main\\webapp\\views;</span>
            <span class="token comment">#过期30天，静态文件不怎么更新，过期可以设大一点，如果频繁更新，则可以设置得小一点。</span>
           <span class="token comment"># expires 30d;</span>
       <span class="token comment"># }</span>

        <span class="token comment">#设定查看Nginx状态的地址</span>
        location /NginxStatus <span class="token punctuation">{</span>
            stub_status           on<span class="token punctuation">;</span>
            access_log            on<span class="token punctuation">;</span>
            auth_basic            <span class="token string">&quot;NginxStatus&quot;</span><span class="token punctuation">;</span>
            auth_basic_user_file  conf/htpasswd<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#禁止访问 .htxxx 文件</span>
        location ~ /<span class="token punctuation">\\</span>.ht <span class="token punctuation">{</span>
            deny all<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

		<span class="token comment">#错误处理页面（可选择性配置）</span>
		<span class="token comment">#error_page   404              /404.html;</span>
		<span class="token comment">#error_page   500 502 503 504  /50x.html;</span>
        <span class="token comment">#location = /50x.html {</span>
        <span class="token comment">#    root   html;</span>
        <span class="token comment">#}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在客户端设置(windows)host:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.2.111 helloworld.test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 服务端启动godoc：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>godoc <span class="token parameter variable">-http</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1:8889
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/reverse-proxy-test.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到访问<code>helloworld.test</code> 的请求被代理到了<code>127.0.0.1:8889</code>,客户端看到的是godoc的页面</p><h3 id="https-反向代理" tabindex="-1"><a class="header-anchor" href="#https-反向代理" aria-hidden="true">#</a> Https 反向代理</h3><p>一些安全性要求较高的站点会使用HTTPS协议，nginx配置Https和Http有所不同：</p><ul><li>Https 固定端口号为443,Http为80</li><li>SSL需要引入证书，需要在nginx中配置证书和对应的key</li></ul><p>其他配置和http类似，<code>server</code> 部分有所不同</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#HTTP服务器</span>
  server <span class="token punctuation">{</span>
      <span class="token comment">#监听443端口。443为知名端口号，主要用于HTTPS协议</span>
      listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>

      <span class="token comment">#定义使用域名访问</span>
      server_name  helloworld.test<span class="token punctuation">;</span>

      <span class="token comment">#ssl证书文件位置(常见证书文件格式为：crt/pem)</span>
      ssl_certificate      cert.pem<span class="token punctuation">;</span>
      <span class="token comment">#ssl证书key位置</span>
      ssl_certificate_key  cert.key<span class="token punctuation">;</span>

      <span class="token comment">#ssl配置参数（选择性配置）</span>
      ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
      ssl_session_timeout  5m<span class="token punctuation">;</span>
      <span class="token comment">#数字签名，此处使用MD5</span>
      ssl_ciphers  HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5<span class="token punctuation">;</span>
      ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>

      location / <span class="token punctuation">{</span>
          root   /root<span class="token punctuation">;</span>
          index  index.html index.htm<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><p>大多数情况下生产环境服务会以集群的方式运行，此时需要负载均衡来分流，nginx可以实现简单的负载均衡功能</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/nginx-load-balance.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>假设一个场景：</p><p>应用部署在三台服务器中：192.168.1.11:80、192.168.1.12:80、192.168.1.13:80 ,网站域名为<code>www.helloworld.com</code>，公网IP为<code>192.168.1.11</code>,在公网IP所在的服务器上部署nginx，对所有请求做负载均衡处理（下例使用加权轮询策略）</p><p>配置如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
     <span class="token comment">#设定mime类型,类型由mime.type文件定义</span>
    include       /etc/nginx/mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
    <span class="token comment">#设定日志格式</span>
    access_log    /var/log/nginx/access.log<span class="token punctuation">;</span>

    <span class="token comment">#设定负载均衡的服务器列表</span>
    upstream load_balance_server <span class="token punctuation">{</span>
        <span class="token comment">#weigth参数表示权值，权值越高被分配到的几率越大</span>
        server <span class="token number">192.168</span>.1.11:80   <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.1.12:80   <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.1.13:80   <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

   <span class="token comment">#HTTP服务器</span>
   server <span class="token punctuation">{</span>
        <span class="token comment">#侦听80端口</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>

        <span class="token comment">#定义使用www.xx.com访问</span>
        server_name  www.helloworld.com<span class="token punctuation">;</span>

        <span class="token comment">#对所有请求进行负载均衡请求</span>
        location / <span class="token punctuation">{</span>
            root        /root<span class="token punctuation">;</span>                 <span class="token comment">#定义服务器的默认网站根目录位置</span>
            index       index.html index.htm<span class="token punctuation">;</span>  <span class="token comment">#定义首页索引文件的名称</span>
            proxy_pass  http://load_balance_server <span class="token punctuation">;</span><span class="token comment">#请求转向load_balance_server 定义的服务器列表</span>

            <span class="token comment">#以下是一些反向代理的配置(可选择性配置)</span>
            <span class="token comment">#proxy_redirect off;</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            <span class="token comment">#后端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span>
            proxy_set_header X-Forwarded-For <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            proxy_connect_timeout <span class="token number">90</span><span class="token punctuation">;</span>          <span class="token comment">#nginx跟后端服务器连接超时时间(代理连接超时)</span>
            proxy_send_timeout <span class="token number">90</span><span class="token punctuation">;</span>             <span class="token comment">#后端服务器数据回传时间(代理发送超时)</span>
            proxy_read_timeout <span class="token number">90</span><span class="token punctuation">;</span>             <span class="token comment">#连接成功后，后端服务器响应时间(代理接收超时)</span>
            proxy_buffer_size 4k<span class="token punctuation">;</span>              <span class="token comment">#设置代理服务器（nginx）保存用户头信息的缓冲区大小</span>
            proxy_buffers <span class="token number">4</span> 32k<span class="token punctuation">;</span>               <span class="token comment">#proxy_buffers缓冲区，网页平均在32k以下的话，这样设置</span>
            proxy_busy_buffers_size 64k<span class="token punctuation">;</span>       <span class="token comment">#高负荷下缓冲大小（proxy_buffers*2）</span>
            proxy_temp_file_write_size 64k<span class="token punctuation">;</span>    <span class="token comment">#设定缓存文件夹大小，大于这个值，将从upstream服务器传</span>

            client_max_body_size 10m<span class="token punctuation">;</span>          <span class="token comment">#允许客户端请求的最大单文件字节数</span>
            client_body_buffer_size 128k<span class="token punctuation">;</span>      <span class="token comment">#缓冲区代理缓冲用户端请求的最大字节数</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="负载均衡策略" tabindex="-1"><a class="header-anchor" href="#负载均衡策略" aria-hidden="true">#</a> 负载均衡策略</h3><p>Nginx提供了多种负载均衡策略：</p><ul><li><p>轮询，权重均为1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream bck_testing_01 {
  # 默认所有服务器权重为 1
  server 192.168.250.220:8080
  server 192.168.250.221:8080
  server 192.168.250.222:8080
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>加权轮询,可自定义权重：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream bck_testing_01 {
  server 192.168.250.220:8080   weight=3
  server 192.168.250.221:8080              # default weight=1
  server 192.168.250.222:8080              # default weight=1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>最少连接：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream bck_testing_01 {
  least_conn;

  # with default weight for all (weight=1)
  server 192.168.250.220:8080
  server 192.168.250.221:8080
  server 192.168.250.222:8080
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>加权最少连接：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream bck_testing_01 {
  least_conn;

  server 192.168.250.220:8080   weight=3
  server 192.168.250.221:8080              # default weight=1
  server 192.168.250.222:8080              # default weight=1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>IP Hash：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream bck_testing_01 {

  ip_hash;

  # with default weight for all (weight=1)
  server 192.168.250.220:8080
  server 192.168.250.221:8080
  server 192.168.250.222:8080

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>普通Hash</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream bck_testing_01 {

  hash $request_uri;

  # with default weight for all (weight=1)
  server 192.168.250.220:8080
  server 192.168.250.221:8080
  server 192.168.250.222:8080

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="多个webapp配置" tabindex="-1"><a class="header-anchor" href="#多个webapp配置" aria-hidden="true">#</a> 多个Webapp配置</h2><p>当网站内容较多时，往往需要模块独立出来，独立维护，此时就会有多个App</p><p>例如：</p><p><code>helloworld.com</code>有三个<code>webapp</code>,finance,product,admin,通过上下文(context)来进行访问：</p><ul><li><code>helloworld.com\\product</code></li><li><code>helloworld.com\\finance</code></li><li><code>helloworld.com\\admin</code></li></ul><p>http默认的端口号为80，在一台服务器上不能以80端口同时启动三个webapp；用户实际访问时也不能加上端口号来调用不同的webapp，此时就需要用到反向代理</p><p>配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http {
	#此处省略一些基本配置

	upstream product_server{
		server www.helloworld.com:8081;
	}

	upstream admin_server{
		server www.helloworld.com:8082;
	}

	upstream finance_server{
		server www.helloworld.com:8083;
	}

	server {
		#此处省略一些基本配置
		#默认指向product的server
		location / {
			proxy_pass http://product_server;
		}

		location /product/{
			proxy_pass http://product_server;
		}

		location /admin/ {
			proxy_pass http://admin_server;
		}

		location /finance/ {
			proxy_pass http://finance_server;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态站点" tabindex="-1"><a class="header-anchor" href="#静态站点" aria-hidden="true">#</a> 静态站点</h2><p>有时需要配置静态站点（html文件和静态资源）</p><p>例如：所有的静态资源放在了<code>app/dist</code>下，需要在nginx中配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_processes  1;

events {
	worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    gzip on;
    gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/javascript image/jpeg image/gif image/png;
    gzip_vary on;

    server {
		listen       80;
		server_name  static.zp.cn;

		location / {
			root /app/dist;
			index index.html;
			#转发任何请求到 index.html
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搭建文件服务器" tabindex="-1"><a class="header-anchor" href="#搭建文件服务器" aria-hidden="true">#</a> 搭建文件服务器</h2><p>有时团队需要归档一些数据或资料时，那么文件服务器必不可少，可以使用nginx快速搭建简易的文件服务</p><p>配置要点：</p><ul><li>将 autoindex 开启可以显示目录，默认不开启。</li><li>将 autoindex_exact_size 开启可以显示文件的大小。</li><li>将 autoindex_localtime 开启可以显示文件的修改时间。</li><li>root 用来设置开放为文件服务的根路径。</li><li>charset 设置为 <code>charset utf-8,gbk;</code>，可以避免中文乱码问题（windows 服务器下设置后，依然乱码，本人暂时没有找到解决方法）。</li></ul><p>简化配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>autoindex on;# 显示目录
autoindex_exact_size on;# 显示文件大小
autoindex_localtime on;# 显示文件时间

server {
    charset      utf-8,gbk; 
    listen       9050 default_server;
    listen       [::]:9050 default_server;
    server_name  _;
    root         /share/fs;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跨域问题" tabindex="-1"><a class="header-anchor" href="#跨域问题" aria-hidden="true">#</a> 跨域问题</h2><p>在web开发中，经常采用前后分离模式，各自独立的app互相访问时势必存在跨域问题,一般有两种方式解决：</p>`,57),v=n("li",null,[s("CORS 在后端服务器设置HTTP响应头，将允许访问的域名加入"),n("code",null,"Access-Control-Allow-Origin"),s("中")],-1),p=n("strong",null,"JSON with Padding",-1),u={href:"https://zh.wikipedia.org/wiki/JSON",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"Nginx采用第一种思路解决跨域问题",-1),b={href:"http://www.helloworld.com/",target:"_blank",rel:"noopener noreferrer"},h=a(`<p>配置如下：</p><p><code>enable-cors.conf</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># allow origin list
set $ACAO &#39;*&#39;;

# set single origin
if ($http_origin ~* (www.helloworld.com)$) {
  set $ACAO $http_origin;
}

if ($cors = &quot;trueget&quot;) {
	add_header &#39;Access-Control-Allow-Origin&#39; &quot;$http_origin&quot;;
	add_header &#39;Access-Control-Allow-Credentials&#39; &#39;true&#39;;
	add_header &#39;Access-Control-Allow-Methods&#39; &#39;GET, POST, OPTIONS&#39;;
	add_header &#39;Access-Control-Allow-Headers&#39; &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type&#39;;
}

if ($request_method = &#39;OPTIONS&#39;) {
  set $cors &quot;\${cors}options&quot;;
}

if ($request_method = &#39;GET&#39;) {
  set $cors &quot;\${cors}get&quot;;
}

if ($request_method = &#39;POST&#39;) {
  set $cors &quot;\${cors}post&quot;;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>nginx.conf</code>引入(<code>include enable-cors.conf</code>):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ----------------------------------------------------
# 此文件为项目 nginx 配置片段
# 可以直接在 nginx config 中 include（推荐）
# 或者 copy 到现有 nginx 中，自行配置
# www.helloworld.com 域名需配合 dns hosts 进行配置
# 其中，api 开启了 cors，需配合本目录下另一份配置文件
# ----------------------------------------------------
upstream front_server{
  server www.helloworld.com:9000;
}
upstream api_server{
  server www.helloworld.com:8080;
}

server {
  listen       80;
  server_name  www.helloworld.com;

  location ~ ^/api/ {
    include enable-cors.conf;
    proxy_pass http://api_server;
    rewrite &quot;^/api/(.*)$&quot; /$1 break;
  }

  location ~ ^/ {
    proxy_pass http://front_server;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,6),g={href:"https://github.com/dunwu/nginx-tutorial",target:"_blank",rel:"noopener noreferrer"},k={href:"https://segmentfault.com/a/1190000011145364",target:"_blank",rel:"noopener noreferrer"},x={href:"http://tool.oschina.net/apidocs/apidoc?api=nginx-zh",target:"_blank",rel:"noopener noreferrer"},_={href:"http://tengine.taobao.org/book/index.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/trimstray/nginx-admins-handbook",target:"_blank",rel:"noopener noreferrer"},w={href:"https://nginxconfig.io/",target:"_blank",rel:"noopener noreferrer"};function y($,q){const e=c("ExternalLinkIcon");return t(),d("div",null,[o,n("ul",null,[v,n("li",null,[s("JSONP "),p,s("是"),n("a",u,[s("JSON"),i(e)]),s("的一种“使用模式”，可以让网页从别的网域获取资料")])]),m,n("p",null,[s("例如："),n("a",b,[s("www.helloworld.com"),i(e)]),s(" 网站是由一个前端 app ，一个后端 app 组成的。前端端口号为 9000， 后端端口号为 8080，前端和后端如果使用 http 进行交互时，请求会被拒绝，因为存在跨域问题")]),h,n("ol",null,[n("li",null,[n("a",g,[s("Nginx 极简教程"),i(e)]),s(" github repo")]),n("li",null,[n("a",k,[s("前端常见跨域解决方案（全）"),i(e)]),s(" segmentfault/安静de沉淀")]),n("li",null,[n("a",x,[s("Nginx 的中文维基"),i(e)])]),n("li",null,[n("a",_,[s("Nginx 开发从入门到精通"),i(e)])]),n("li",null,[n("a",f,[s("nginx-admins-handbook"),i(e)])]),n("li",null,[n("a",w,[s("nginxconfig.io"),i(e)]),s(" Nginx 配置生成器")])])])}const z=l(r,[["render",y],["__file","nginx.html.vue"]]);export{z as default};
