(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{615:function(n,s,a){"use strict";a.r(s);var t=a(4),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("入手了一个树莓派4B，想要将其变成小型服务器，同时也把自己的博客部署上去,环境：")]),n._v(" "),a("ul",[a("li",[n._v("Raspberry Pi : 4B+/8G")]),n._v(" "),a("li",[n._v("OS: Raspios-64bit")]),n._v(" "),a("li",[n._v("Nginx")])]),n._v(" "),a("h2",{attrs:{id:"配置静态ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置静态ip"}},[n._v("#")]),n._v(" 配置静态IP")]),n._v(" "),a("p",[n._v("由于树莓派连接家里的路由器，默认使用DHCP"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#footnote1"}},[n._v("[1]")]),a("a",{staticClass:"footnote-anchor",attrs:{id:"footnote-ref1"}})])]),n._v(" "),a("p",[n._v("要做为服务器的话，设置静态方便配置连接")]),n._v(" "),a("p",[n._v("修改"),a("code",[n._v("cat /etc/dhcpcd.conf")]),n._v(":")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("interface wlan0\nstatic ip_address=192.168.***.***/24 # IP地址\nstatic routers=192.168.***.*** # 路由器地址\nstatic domain_name=192.168.***.*** # dns解析地址\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("h2",{attrs:{id:"安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[n._v("#")]),n._v(" 安装Nginx")]),n._v(" "),a("p",[n._v("快速学习使用Nginx可以看这篇"),a("RouterLink",{attrs:{to:"/zh/nginx/nginx.html"}},[n._v("Nginx教程")])],1),n._v(" "),a("p",[n._v("可以使用apt安装：")]),n._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("apt")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" nginx\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br")])]),a("p",[n._v("在$HOME目录下创建"),a("code",[n._v("nginx")]),n._v("目录，目录结构如下：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("nginx\n├── app\n│   └── blog\n├── logs\n│   ├── access.log\n│   ├── error.log\n│   ├── info.log\n│   └── notice.log\n├── nginx.conf\n└── start-nginx.sh\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br")])]),a("ul",[a("li",[a("p",[n._v("app: 存放静态资源，打包好的静态网页放在此处,需要在配置文件中设置")])]),n._v(" "),a("li",[a("p",[n._v("logs：nginx日志文件")])]),n._v(" "),a("li",[a("p",[n._v("nginx.conf :  nginx 配置文件")])]),n._v(" "),a("li",[a("p",[n._v("start-nginx.sh ： 启动脚本")]),n._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[n._v("#!/bin/zsh                                                        ")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n._v("CONFIG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[n._v("$HOME")]),n._v("/nginx/nginx.conf\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("echo")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"Config path: "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$CONFIG")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('" "')]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#  如果启动前已经启动nginx并记录下pid文件，会kill指定进程")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" nginx -s stop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 测试配置文件语法正确性")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" nginx -t -c "),a("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$CONFIG")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 显示版本信息")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" nginx -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 按照指定配置去启动nginx")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" nginx -c "),a("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$CONFIG")]),n._v("\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br")])])])]),n._v(" "),a("h3",{attrs:{id:"修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[n._v("#")]),n._v(" 修改配置文件")]),n._v(" "),a("p",[a("code",[n._v("$HOME/nginx/nginx.conf")]),n._v(":")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("#运行用户                                                                                                                                                                                                         \nuser pi;\n    \n#启动进程,通常设置成和cpu的数量相等\nworker_processes  1;\n\n#全局错误日志\nerror_log  /home/username/nginx/logs/error.log;\nerror_log  /home/username/nginx/logs/notice.log  notice;\nerror_log  /home/username/nginx/logs/info.log  info;\n\n#PID文件，记录当前启动的nginx的进程ID\npid        /run/nginx.pid;\n\n#工作模式及连接数上限\nevents {\n    worker_connections 1024;    #单个后台worker process进程的最大并发链接数\n}\n\n\nhttp {\n    #设定mime类型(邮件支持类型),类型由mime.types文件定义\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;                                                                                                                                                                       \n\n    #设定日志\n    log_format  main  '[$remote_addr] - [$remote_user] [$time_local] \"$request\" '\n                      '$status $body_bytes_sent \"$http_referer\" '\n                      '\"$http_user_agent\" \"$http_x_forwarded_for\"';\n\n    access_log    /home/username/nginx/logs/access.log main;\n    rewrite_log     on; \n\n    #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，\n    #必须设为 on,如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度，降低系统的uptime.\n    sendfile        on; \n    #tcp_nopush     on;\n\n    #连接超时时间\n    keepalive_timeout  120;\n    tcp_nodelay        on; \n\n   #gzip压缩开关\n   #gzip  on;\nserver {\n    listen 80;\n    location / {\n    \t# 设置跨域\n        add_header 'Access-Control-Allow-Origin' '*';\n        add_header 'Access-Control-Allow-Credentials' 'true';\n        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';\n        add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';\n        root /home/username/nginx/app/blog/dist;\n        index index.html;\n    }\n}\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br")])]),a("h2",{attrs:{id:"上传静态资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传静态资源"}},[n._v("#")]),n._v(" 上传静态资源")]),n._v(" "),a("p",[n._v("此处以vue为例,将打包好的"),a("code",[n._v("dist")]),n._v("目录压缩上传至服务器，将其解压至"),a("code",[n._v("$HOME/nginx/app/blog/")]),n._v("即可")]),n._v(" "),a("p",[n._v("在客户端浏览器总输入服务器IP地址即可访问：")]),n._v(" "),a("p",[a("img",{attrs:{src:"/image/raspberry-pi/blog.png",alt:""}})]),n._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000038672615",target:"_blank",rel:"noopener noreferrer"}},[n._v("vue部署至nginx"),a("OutboundLink")],1),n._v(" lxcan blog")]),n._v(" "),a("li",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E4%B8%BB%E6%9C%BA%E8%AE%BE%E7%BD%AE%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"}},[n._v("动态主机设置协议"),a("OutboundLink")],1),n._v(" wiki")]),n._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/dunwu/nginx-tutorial",target:"_blank",rel:"noopener noreferrer"}},[n._v("Nginx 极简教程"),a("OutboundLink")],1),n._v(" github repo")])]),n._v(" "),a("hr",{staticClass:"footnotes-sep"}),n._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"footnote1"}},[a("p",[a("strong",[n._v("动态主机设置协议")]),n._v("（英语："),a("strong",[n._v("D")]),n._v("ynamic "),a("strong",[n._v("H")]),n._v("ost "),a("strong",[n._v("C")]),n._v("onfiguration "),a("strong",[n._v("P")]),n._v("rotocol，缩写："),a("strong",[n._v("DHCP")]),n._v("），又称"),a("strong",[n._v("动态主机组态协定")]),n._v("，是一个用于"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%BD%91%E9%99%85%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"}},[n._v("IP"),a("OutboundLink")],1),n._v("网络的"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"}},[n._v("网络协议"),a("OutboundLink")],1),n._v("，位于"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/OSI%E6%A8%A1%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"}},[n._v("OSI模型"),a("OutboundLink")],1),n._v("的"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E5%B1%82",target:"_blank",rel:"noopener noreferrer"}},[n._v("应用层"),a("OutboundLink")],1),n._v("，使用"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"}},[n._v("UDP"),a("OutboundLink")],1),n._v("协议工作 "),a("a",{staticClass:"footnote-backref",attrs:{href:"#footnote-ref1"}},[n._v("↩︎")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);