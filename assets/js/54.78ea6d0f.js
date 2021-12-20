(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{639:function(a,s,t){"use strict";t.r(s);var r=t(5),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[a._v("#")]),a._v(" 环境")]),a._v(" "),t("p",[a._v("平常开发使用manjaro和windows，配置clash一直使用的GUI客户端，没有去折腾使用底层的clash（主要是懒...）")]),a._v(" "),t("p",[a._v("刚好最近入手了一个树莓派，这次就在树莓派上研究下clash的使用（主要是想整活）")]),a._v(" "),t("p",[a._v("本文环境：")]),a._v(" "),t("ul",[t("li",[a._v("Raspi OS - 64bit")])]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("p",[a._v("在"),t("a",{attrs:{href:"https://github.com/Dreamacro/clash",target:"_blank",rel:"noopener noreferrer"}},[a._v("clash"),t("OutboundLink")],1),a._v(" github 仓库中选择 "),t("a",{attrs:{href:"https://github.com/Dreamacro/clash/releases/download/v1.7.1/clash-linux-armv8-v1.7.1.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("clash-linux-armv8-v1.7.1.gz"),t("OutboundLink")],1),a._v(" 下载（因为树莓派是ARM架构，本文使用的系统为64bit，需选择armv8）")]),a._v(" "),t("p",[a._v("直接使用"),t("code",[a._v("wget")]),a._v("下载：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -O clash-linux-armv8-v1.7.1.gz https://github.com/Dreamacro/clash/releases/download/v1.7.1/clash-linux-armv8-v1.7.1.gz\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("解压并添加执行权限：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("gzip")]),a._v(" -f clash-linux-armv8-v1.7.1.gz -d \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x clash-linux-armv8-v1.7.1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("启动clash，会自动生成默认配置"),t("code",[a._v("config.yml")]),a._v("和下载全球IP地址库"),t("code",[a._v("Country.mmdb")])]),a._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),t("p",[a._v("将服务商提供的配置文件写到"),t("code",[a._v("config.yml")]),a._v("即可")]),a._v(" "),t("p",[a._v("还可以使用"),t("RouterLink",{attrs:{to:"/zh/raspberry-pi/：http://clash.razord.top/#/proxies["}},[a._v("Web工具")])],1),a._v(" "),t("h2",{attrs:{id:"环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[a._v("#")]),a._v(" 环境变量")]),a._v(" "),t("p",[a._v("设置环境变量：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("http_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://host:port\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("https_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$http_proxy")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),t("p",[a._v("再次启动clash，即可使用")]),a._v(" "),t("p",[a._v("可以编写启动脚本在后台执行:")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/zsh")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/MyApps/clash/clash-linux-armv8-v1.7.1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/MyApps/clash/log/clash.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("&1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("ol",[t("li",[t("p",[t("a",{attrs:{href:"https://github.com/Dreamacro/clash",target:"_blank",rel:"noopener noreferrer"}},[a._v("clash"),t("OutboundLink")],1),a._v(" github repo")])]),a._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://www.ptbird.cn/ubuntu-2004-clash-for-linux.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("ubuntu 20.04 配置使用 clash for linux"),t("OutboundLink")],1),a._v(" postbird blog")])]),a._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/jinxiao-pu/p/9131057.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("nohup 详解"),t("OutboundLink")],1),a._v(" jinxiao-pu blog")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);