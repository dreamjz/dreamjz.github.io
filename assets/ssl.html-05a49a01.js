import{_ as a,Y as l,Z as d,$ as e,a0 as n,a1 as s,a2 as r,F as c}from"./framework-d955655f.js";const t={},o=e("h2",{id:"_1-获取证书",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-获取证书","aria-hidden":"true"},"#"),n(" 1. 获取证书")],-1),u=e("p",null,"这里采用阿里云的免费证书。",-1),v=e("h3",{id:"_1-1-申请",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-申请","aria-hidden":"true"},"#"),n(" 1.1 申请")],-1),m={href:"https://www.aliyun.com/product/cas",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.namesilo.com/",target:"_blank",rel:"noopener noreferrer"},h=e("ul",null,[e("li",null,[n("在个人页面选择 "),e("code",null,"domain manager")]),e("li",null,"在域名栏右侧点击蓝色小球 (Manage DNS for this domain)"),e("li",null,[n("选择 "),e("code",null,"TXT/SPF"),n(" 填入阿里云提供的信息 "),e("img",{src:"https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/p540546.png",alt:"验证信息",loading:"lazy"}),e("img",{src:"https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/image-20230501174715884.png",alt:"image-20230501174715884",loading:"lazy"})])],-1),b=e("h2",{id:"_2-安装证书",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-安装证书","aria-hidden":"true"},"#"),n(" 2. 安装证书")],-1),_=e("p",null,[n("证书申请成功后，在下证书会有 "),e("code",null,"xxx.pem"),n(" 证书 和 "),e("code",null,"xxx.key"),n(" 证书私钥 两个文件。")],-1),g={href:"https://help.aliyun.com/document_detail/98728.html?spm=0.2020520163.help.dexternal.17613711P9N7H2",target:"_blank",rel:"noopener noreferrer"},x=r(`<ul><li><p>创建文件夹 <code>cert</code>, 上传证书文件</p></li><li><p>创建配置文件 <code>conf.d/ssl.conf</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#以下属性中，以ssl开头的属性表示与证书配置有关。
server {
    #配置HTTPS的默认访问端口为443。
    #如果未在此处配置HTTPS的默认访问端口，可能会造成Nginx无法启动。
    #如果您使用Nginx 1.15.0及以上版本，请使用listen 443 ssl代替listen 443和ssl on。
    listen 443 ssl;

    #填写证书绑定的域名
    server_name &lt;yourdomain&gt;;
    root html;
    index index.html index.htm;

    #填写证书文件名称
    ssl_certificate cert/&lt;cert-file-name&gt;.pem;
    #填写证书私钥文件名称  
    ssl_certificate_key cert/&lt;cert-file-name&gt;.key;

    ssl_session_timeout 5m;
    #表示使用的加密套件的类型
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    #表示使用的TLS协议的类型，您需要自行评估是否配置TLSv1.1协议。
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;

    ssl_prefer_server_ciphers on;
    location / {
        #Web网站程序存放目录
        root html;
        index index.html index.htm;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>(可选) 配置 HTTP 自动跳转 HTTPS 修改 <code>conf.d/localhost.conf</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    # ...
    #将所有HTTP请求通过rewrite指令重定向到HTTPS。
    rewrite ^(.*)$ https://$host$1;
    # ... 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启容器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> restart xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="_3-容器关联-443-端口" tabindex="-1"><a class="header-anchor" href="#_3-容器关联-443-端口" aria-hidden="true">#</a> 3. 容器关联 443 端口</h2><p>之前启动容器时仅关联了80端口，故需要修改配置。有两种方式：</p><ul><li>创建新镜像，重新启动</li><li>直接修改容器配置</li></ul><h3 id="_3-1-创建新镜像" tabindex="-1"><a class="header-anchor" href="#_3-1-创建新镜像" aria-hidden="true">#</a> 3.1 创建新镜像</h3><ol><li><p>停止容器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> stop containter01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> commit container01 image02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>启动新镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-p</span> <span class="token number">443</span>:443 image02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="_3-2-直接修改容器配置" tabindex="-1"><a class="header-anchor" href="#_3-2-直接修改容器配置" aria-hidden="true">#</a> 3.2 直接修改容器配置</h3><ol><li><p>停止 docker 容器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> stop container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>停止 docker 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ systemctl stop <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入文件夹 <code>/var/lib/docker/containers/[hash_of_the_container]/</code>, 修改文件 <code>hostconfig.json</code> 和 <code>config.v2.json</code></p></li><li><p>启动 docker 服务</p></li><li><p>启动 docker 容器</p></li></ol><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,9),f={href:"https://help.aliyun.com/document_detail/98728.html?spm=0.2020520163.help.dexternal.17613711P9N7H2",target:"_blank",rel:"noopener noreferrer"},k={href:"https://stackoverflow.com/questions/19335444/how-do-i-assign-a-port-mapping-to-an-existing-docker-container",target:"_blank",rel:"noopener noreferrer"};function S(w,T){const i=c("ExternalLinkIcon");return l(),d("div",null,[o,u,v,e("ul",null,[e("li",null,[n("访问 "),e("a",m,[n("https://www.aliyun.com/product/cas"),s(i)]),n(" 选择免费 SSL 证书， 填写申请")]),e("li",null,[n("DNS 验证：由于域名不是阿里云的，所以来到 "),e("a",p,[n("https://www.namesilo.com/"),s(i)]),n(" 的控制台 "),h])]),b,_,e("p",null,[n("这里服务器采用 Docker + Nginx 的形式部署，nginx 已有文件夹挂载到本地（其他方式详见 "),e("a",g,[n("安装证书"),s(i)]),n(")，故：")]),x,e("ol",null,[e("li",null,[e("a",f,[n("如何安装SSL证书"),s(i)]),n(" 阿里云")]),e("li",null,[e("a",k,[n("How do I assign a port mapping to an existing Docker container?"),s(i)]),n(" Stackoverflow")])])])}const L=a(t,[["render",S],["__file","ssl.html.vue"]]);export{L as default};
