(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{619:function(s,n,a){"use strict";a.r(n);var e=a(5),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("之前仅在树莓派上安装nginx并部署了blog，但是如果nginx的配置有问题或者出现错误不方便解决（所有东西都在一台主机上）。")]),s._v(" "),a("p",[s._v("现在使用docker容器来部署nginx，如果配置错误可以删除容器推到重来，还可以部署多个服务，非常的便利")]),s._v(" "),a("p",[s._v("部署之前先停止已经运行的nginx")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -s stop  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装Docker")]),s._v(" "),a("p",[s._v("这里不要直接用apt,apt里默认的包是docker的GUI版本")]),s._v(" "),a("p",[s._v("这里直接使用官网的安装脚本，其他的安装方式参见"),a("a",{attrs:{href:"https://docs.docker.com/engine/install/debian/#install-using-the-convenience-script",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker官网手册"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://get.docker.com -o get-docker.sh\n $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" get-docker.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("查看docker版本")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$docker")]),s._v(" -v                                                                             \nDocker version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.10")]),s._v(".10, build b485636\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("默认docker需要root权限运行，想要以非root命令运行可以参考"),a("a",{attrs:{href:"https://dreamjz.github.io/zh/docker/docker-tutorial/get-started.html#%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker安装"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("设置docker开机自启并启动docker")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ systemctl start docker \n$ systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"获取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取镜像"}},[s._v("#")]),s._v(" 获取镜像")]),s._v(" "),a("h3",{attrs:{id:"镜像加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速"}},[s._v("#")]),s._v(" 镜像加速")]),s._v(" "),a("p",[s._v("此处使用网易云镜像服务："),a("code",[s._v("https://hub-mirror.c.163.com")])]),s._v(" "),a("p",[s._v("请首先执行以下命令，查看是否在 "),a("code",[s._v("docker.service")]),s._v(" 文件中配置过镜像地址")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ systemctl "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" docker "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\-\\-registry\\-mirror'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果该命令有输出，那么请执行 "),a("code",[s._v("$ systemctl cat docker")]),s._v(" 查看 "),a("code",[s._v("ExecStart=")]),s._v(" 出现的位置，修改对应的文件内容去掉 "),a("code",[s._v("--registry-mirror")]),s._v(" 参数及其值，并按接下来的步骤进行配置。")]),s._v(" "),a("p",[s._v("如果以上命令没有任何输出，那么就可以在 "),a("code",[s._v("/etc/docker/daemon.json")]),s._v(" 中写入如下内容（如果文件不存在请新建该文件）：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://hub-mirror.c.163.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mirror.baidubce.com"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("之后重新启动服务:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"获取nginx官方镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取nginx官方镜像"}},[s._v("#")]),s._v(" 获取Nginx官方镜像")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pull nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看镜像：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker images\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"部署nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署nginx"}},[s._v("#")]),s._v(" 部署nginx")]),s._v(" "),a("p",[s._v("启动容器:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker container run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8897")]),s._v(":80 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name mynginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nnginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("查看是否启动成功")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入之前在本机部署的nginx资源文件夹"),a("code",[s._v("~/nginx")]),s._v(",文件结构如下（之前部署时资源已经放在"),a("code",[s._v("/app/blog/dist")]),s._v("）：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("nginx\n├── app\n│   └── blog\n│       └── dist\n└── logs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("复制nginx配置目录：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker container "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" mynginx:/etc/nginx "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("更改目录名：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" nginx conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("停止之前启动的容器,停止后会被自动删除（"),a("code",[s._v("--rm")]),s._v("的作用）:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker stop mynginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动nginx:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --name my-nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /home/pi/nginx/app/blog/dist:/usr/share//nginx/html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /home/pi/nginx/logs:/var/log/nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /home/pi/nginx/conf:/etc/nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    nginx  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("查看是否启动成功：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("现在直接在浏览器访问树莓派的ip，可以直接进入blog首页了")]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://docs.docker.com/engine/install/debian/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install Docker Engine on Debian"),a("OutboundLink")],1),s._v(" docker manuals")])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903837774397447#heading-0",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 部署 vue 项目"),a("OutboundLink")],1),s._v(" 稀土掘金")])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://dreamjz.github.io/zh/docker/docker-tutorial/docker-nginx.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 部署Nginx"),a("OutboundLink")],1),s._v(" 今朝のブログ")])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/30379381/docker-command-not-found-even-though-installed-with-apt-get",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker command not found even though installed with apt-get"),a("OutboundLink")],1),s._v(" stackoverflow")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);