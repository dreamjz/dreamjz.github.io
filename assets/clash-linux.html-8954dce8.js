import{_ as o,Z as i,$ as c,a0 as a,a1 as e,a2 as s,a5 as p,a3 as t,H as l}from"./framework-09afcf0b.js";const d={},h=a("h2",{id:"环境",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#环境","aria-hidden":"true"},"#"),e(" 环境")],-1),u=a("p",null,"平常开发使用manjaro和windows，配置clash一直使用的GUI客户端，没有去折腾使用底层的clash（主要是懒...）",-1),m=a("p",null,"刚好最近入手了一个树莓派，这次就在树莓派上研究下clash的使用（主要是想整活）",-1),b=a("p",null,"本文环境：",-1),v=a("ul",null,[a("li",null,"Raspi OS - 64bit")],-1),_=a("h2",{id:"安装",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),e(" 安装")],-1),g={href:"https://github.com/Dreamacro/clash",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/Dreamacro/clash/releases/download/v1.7.1/clash-linux-armv8-v1.7.1.gz",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>直接使用<code>wget</code>下载：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> clash-linux-armv8-v1.7.1.gz https://github.com/Dreamacro/clash/releases/download/v1.7.1/clash-linux-armv8-v1.7.1.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压并添加执行权限：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> <span class="token parameter variable">-f</span> clash-linux-armv8-v1.7.1.gz <span class="token parameter variable">-d</span> 
<span class="token function">chmod</span> +x clash-linux-armv8-v1.7.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启动clash，会自动生成默认配置<code>config.yml</code>和下载全球IP地址库<code>Country.mmdb</code></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>将服务商提供的配置文件写到<code>config.yml</code>即可</p>`,7),k=t(`<h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><p>设置环境变量：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span>http://host:port
<span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token variable">$http_proxy</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><p>再次启动clash，即可使用</p><p>可以编写启动脚本在后台执行:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/zsh</span>
<span class="token function">nohup</span> <span class="token environment constant">$HOME</span>/MyApps/clash/clash-linux-armv8-v1.7.1 <span class="token operator">&gt;</span> <span class="token environment constant">$HOME</span>/MyApps/clash/log/clash.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,8),w={href:"https://github.com/Dreamacro/clash",target:"_blank",rel:"noopener noreferrer"},y={href:"http://www.ptbird.cn/ubuntu-2004-clash-for-linux.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.cnblogs.com/jinxiao-pu/p/9131057.html",target:"_blank",rel:"noopener noreferrer"};function E(B,L){const n=l("ExternalLinkIcon"),r=l("RouterLink");return i(),c("div",null,[h,u,m,b,v,_,a("p",null,[e("在"),a("a",g,[e("clash"),s(n)]),e(" github 仓库中选择 "),a("a",f,[e("clash-linux-armv8-v1.7.1.gz"),s(n)]),e(" 下载（因为树莓派是ARM架构，本文使用的系统为64bit，需选择armv8）")]),x,a("p",null,[e("还可以使用"),s(r,{to:"/blog/sc/raspberry-pi/%EF%BC%9Ahttp:/clash.razord.top/#/proxies%5B"},{default:p(()=>[e("Web工具")]),_:1})]),k,a("ol",null,[a("li",null,[a("p",null,[a("a",w,[e("clash"),s(n)]),e(" github repo")])]),a("li",null,[a("p",null,[a("a",y,[e("ubuntu 20.04 配置使用 clash for linux"),s(n)]),e(" postbird blog")])]),a("li",null,[a("p",null,[a("a",z,[e("nohup 详解"),s(n)]),e(" jinxiao-pu blog")])])])])}const A=o(d,[["render",E],["__file","clash-linux.html.vue"]]);export{A as default};