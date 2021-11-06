(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{622:function(t,a,e){"use strict";e.r(a);var s=e(5),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"raspberry-pi-安装-netdata-轻量服务器性能监控工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-安装-netdata-轻量服务器性能监控工具"}},[t._v("#")]),t._v(" Raspberry Pi 安装 NetData 轻量服务器性能监控工具")]),t._v(" "),e("p",[t._v("在树莓派上搭建了Blog之后，想要在监控下服务器的各项参数（一开始只是想看看CPU，内存和网速的），google下发现了一个好用的工具NetData")]),t._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"https://github.com/netdata/netdata",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netdata"),e("OutboundLink")],1)]),t._v(" 是一个用于系统和应用的分布式实时性能和健康监控工具。它提供了对系统中实时发生的所有事情的全面检测。你可以在高度互动的 Web 仪表板中查看结果。使用 Netdata，你可以清楚地了解现在发生的事情，以及之前系统和应用中发生的事情。你无需成为专家即可在 Linux 系统中部署此工具。NetData 开箱即用，零配置、零依赖。只需安装它然后坐等，之后 NetData 将负责其余部分。")]),t._v(" "),e("p",[t._v("它有自己的内置 Web 服务器，以图形形式显示结果。NetData 非常快速高效，安装后可立即开始分析系统性能。它是用 C 编程语言编写的，所以它非常轻量。它占用的单核 CPU 使用率不到 3％，内存占用 10-15MB。我们可以轻松地在任何现有网页上嵌入图表，并且它还有一个插件 API，以便你可以监控任何应用。")]),t._v(" "),e("h2",{attrs:{id:"特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),e("p",[e("img",{attrs:{src:"/image/raspberry-pi/NETDATA.gif",alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("interactive bootstrap dashboards, 酷炫")]),t._v(" "),e("li",[t._v("所有请求每个metreic都在0.5ms内响应，即便是一台烂机器")]),t._v(" "),e("li",[t._v("非常高效，每秒采集数千个指标，但仅占cpu单核1%，少量MB的内存以及完全没有磁盘IO")]),t._v(" "),e("li",[t._v("提供复杂的、各种类型的告警，支持动态阈值、告警模板、多种通知方式等")]),t._v(" "),e("li",[t._v("可扩展，使用自带的插件API（比如bash, python, perl, node.js, java, go, ruby等）来收集任何可以衡量的数据")]),t._v(" "),e("li",[t._v("零配置：安装后netdata会自动的监测一切")]),t._v(" "),e("li",[t._v("零依赖：netdata有自己的web server， 提供静态web文件和web API 零维护：只管跑上！")]),t._v(" "),e("li",[t._v("支撑多种时间序列后端服务，比如graphite, opentsdb, prometheus, json document DBs")])]),t._v(" "),e("h3",{attrs:{id:"netdata在linux中的监控列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#netdata在linux中的监控列表"}},[t._v("#")]),t._v(" NetData在Linux中的监控列表")]),t._v(" "),e("ul",[e("li",[t._v("CPU 使用率")]),t._v(" "),e("li",[t._v("RAM 使用率")]),t._v(" "),e("li",[t._v("交换内存使用率")]),t._v(" "),e("li",[t._v("内核内存使用率")]),t._v(" "),e("li",[t._v("硬盘及其使用率")]),t._v(" "),e("li",[t._v("网络接口")]),t._v(" "),e("li",[t._v("IPtables")]),t._v(" "),e("li",[t._v("Netfilter")]),t._v(" "),e("li",[t._v("DDoS 保护")]),t._v(" "),e("li",[t._v("进程")]),t._v(" "),e("li",[t._v("应用")]),t._v(" "),e("li",[t._v("NFS 服务器")]),t._v(" "),e("li",[t._v("Web 服务器 （Apache 和 Nginx）")]),t._v(" "),e("li",[t._v("数据库服务器 （MySQL），")]),t._v(" "),e("li",[t._v("DHCP 服务器")]),t._v(" "),e("li",[t._v("DNS 服务器")]),t._v(" "),e("li",[t._v("电子邮件服务")]),t._v(" "),e("li",[t._v("代理服务器")]),t._v(" "),e("li",[t._v("Tomcat")]),t._v(" "),e("li",[t._v("PHP")]),t._v(" "),e("li",[t._v("SNP 设备")])]),t._v(" "),e("h2",{attrs:{id:"部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),e("p",[t._v("在Rspbian 下直接使用apt安装即可：")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" netdata\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("查看配置文件"),e("code",[t._v("/etc/netdata/netdata.conf")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# NetData Configuration\n\n# The current full configuration can be retrieved from the running\n# server at the URL\n#\n#   http://localhost:19999/netdata.conf\n#\n# for example:\n#\n#   wget -O /etc/netdata/netdata.conf http://localhost:19999/netdata.conf\n#\n\n[global]\n   run as user = netdata\n   web files owner = root\n   web files group = root\n   # Netdata is not designed to be exposed to potentially hostile\n   # networks. See https://github.com/netdata/netdata/issues/164\n   bind socket to IP = 127.0.0.1\n   port = 19901           \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br")])]),e("p",[t._v("可以修改默认的19901端口为自己想要的端口")]),t._v(" "),e("h2",{attrs:{id:"nngix配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nngix配置"}},[t._v("#")]),t._v(" Nngix配置")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://github.com/netdata/netdata",target:"_blank",rel:"noopener noreferrer"}},[t._v("netdata"),e("OutboundLink")],1),t._v(" github repo")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.gitiu.com/journal/netdata-install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("超详细的NetData-轻量的性能监控工具安装教程"),e("OutboundLink")],1),t._v("  gitiu blog")])])])}),[],!1,null,null,null);a.default=n.exports}}]);