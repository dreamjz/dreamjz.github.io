(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{589:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("​\t本文主要介绍如何在树莓派搭建golang开发环境，涉及硬件及软件版本：")]),s._v(" "),t("ul",[t("li",[s._v("Raspberry Pi : 4B+/8G")]),s._v(" "),t("li",[s._v("OS: Raspios-64bit")]),s._v(" "),t("li",[s._v("Golang: 1.15")])]),s._v(" "),t("h2",{attrs:{id:"安装-raspi-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-raspi-os"}},[s._v("#")]),s._v(" 安装 Raspi OS")]),s._v(" "),t("p",[s._v("首先为树莓派安装操作系统，树莓派可以采用官方OS或三方系统（ubuntu，manjaro，centos等），这里我们使用官方的"),t("a",{attrs:{href:"https://downloads.raspberrypi.org/raspios_arm64/images/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Raspi OS 64-bit"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("注意正式版Raspi OS位32bit，64bit版本仅有测试版(需自行下载)")]),s._v(" "),t("p",[s._v("安装软件时 appimage 类型是无法执行的(树莓派是ARM架构的，而appimage基于x86)")]),s._v(" "),t("h3",{attrs:{id:"使用-raspi-imager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-raspi-imager"}},[s._v("#")]),s._v(" 使用 "),t("a",{attrs:{href:"https://www.raspberrypi.com/software/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Raspi imager"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("​\t进入官网后下载"),t("a",{attrs:{href:"https://www.raspberrypi.com/software/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Raspi imager"),t("OutboundLink")],1),s._v("，安装后启动：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/image/raspberry-pi/raspi-imager.png",alt:""}})]),s._v(" "),t("p",[s._v("选择下载好的系统镜像(本文使用镜像为：2021-05-07-raspios-buster-arm64.zip)，之后选择存储卡进行写入，等待片刻")]),s._v(" "),t("h2",{attrs:{id:"网络配置-可选"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络配置-可选"}},[s._v("#")]),s._v(" 网络配置(可选)")]),s._v(" "),t("p",[s._v("在下载和更新软件包之前，可以配置代理（拯救巨慢的下载速度....）")]),s._v(" "),t("p",[s._v("若想用clash可以参照文章"),t("RouterLink",{attrs:{to:"/zh/linux/raspberry-pi/clash-linux.html"}},[s._v("RaspiOS 使用clash")])],1),s._v(" "),t("h2",{attrs:{id:"更改软件源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改软件源"}},[s._v("#")]),s._v(" 更改软件源")]),s._v(" "),t("p",[s._v("RaspiOS默认软件源为"),t("code",[s._v("Debian buster")]),s._v(",软件版本较低，这里改为"),t("code",[s._v("Debian Bullseye")])]),s._v(" "),t("p",[s._v("为后续的vim插件做准备（YCM需要vim8.2）")]),s._v(" "),t("p",[t("code",[s._v("/etc/apt/sources.list")]),s._v("中使用bullseye同时换成清华源")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free\n\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free\n\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("执行update和upgrade")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upadte\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"安装-zsh-omz-oh-my-zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-zsh-omz-oh-my-zsh"}},[s._v("#")]),s._v(" 安装 zsh & OMZ(oh-my-zsh)")]),s._v(" "),t("h3",{attrs:{id:"zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zsh"}},[s._v("#")]),s._v(" zsh")]),s._v(" "),t("p",[s._v("查看当前系统有哪些shell:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/shells\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n/bin/sh\n/bin/bash\n/usr/bin/bash\n/bin/rbash\n/usr/bin/rbash\n/bin/dash\n/usr/bin/dash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("没有则安装zsh：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看和更改默认shell：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当前默认shell")]),s._v("\n$ chsh -s /bin/zsh "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改默认shell")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("重新登录即可生效")]),s._v(" "),t("h3",{attrs:{id:"omz"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#omz"}},[s._v("#")]),s._v(" omz")]),s._v(" "),t("p",[s._v("执行官网安装脚本：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在"),t("code",[s._v("~/.zshrc")]),s._v("中修改主题：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZSH_THEME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"random"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随机主题")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"安装golang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装golang"}},[s._v("#")]),s._v(" 安装golang")]),s._v(" "),t("p",[s._v("这里使用apt安装，也可以手动安装")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" golang\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装gopls")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO111MODULE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on go get golang.org/x/tools/gopls@latest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"安装-vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-vim"}},[s._v("#")]),s._v(" 安装 vim")]),s._v(" "),t("p",[s._v("使用apt安装：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" intall vim-nox\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("注意：这里安装"),t("code",[s._v("vim-nox")]),s._v("，默认的vim没有python3支持，无法安装后续插件")]),s._v(" "),t("p",[s._v("后续的"),t("code",[s._v("vim-go")]),s._v(","),t("code",[s._v("spf-vim")]),s._v("及插件的安装参考"),t("RouterLink",{attrs:{to:"/zh/linux/vim/spf13-vim-plugin.html"}},[s._v("spf-vim 安装及插件配置")])],1),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://www.raspberrypi.com/software/",target:"_blank",rel:"noopener noreferrer"}},[s._v("respi os"),t("OutboundLink")],1),s._v("  Raspberry Pi official site")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000013857738",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mac、Linux 安装zsh & ohmyzsh"),t("OutboundLink")],1),s._v("  segmentfault/mayihetu")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.reddit.com/r/Crostini/comments/c76e0b/appimage_install_problem_cannot_execute_binary/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Appimage install problem - cannot execute binary file: Exec format error"),t("OutboundLink")],1),s._v(" reddit")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://ohmyz.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh-my-zsh"),t("OutboundLink")],1),s._v(" omz official site")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh-my-zsh"),t("OutboundLink")],1),s._v(" omz github repo")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/debian/",target:"_blank",rel:"noopener noreferrer"}},[s._v("debian tsinghua mirror"),t("OutboundLink")],1),s._v(" 清华镜像")])])])}),[],!1,null,null,null);a.default=n.exports}}]);