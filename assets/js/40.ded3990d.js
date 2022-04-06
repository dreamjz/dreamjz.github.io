(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{625:function(s,a,e){"use strict";e.r(a);var t=e(5),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("​\t本文主要介绍如何在树莓派搭建golang开发环境，涉及硬件及软件版本：")]),s._v(" "),e("ul",[e("li",[s._v("Raspberry Pi : 4B+/8G")]),s._v(" "),e("li",[s._v("OS: Raspios-64bit")]),s._v(" "),e("li",[s._v("Golang: 1.15")])]),s._v(" "),e("h2",{attrs:{id:"安装-raspi-os"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-raspi-os"}},[s._v("#")]),s._v(" 安装 Raspi OS")]),s._v(" "),e("p",[s._v("首先为树莓派安装操作系统，树莓派可以采用官方OS或三方系统（ubuntu，manjaro，centos等），这里我们使用官方的"),e("a",{attrs:{href:"https://downloads.raspberrypi.org/raspios_arm64/images/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Raspi OS 64-bit"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("注意正式版Raspi OS位32bit，64bit版本仅有测试版(需自行下载)")]),s._v(" "),e("p",[s._v("安装软件时 appimage 类型是无法执行的(树莓派是ARM架构的，而appimage基于x86)")]),s._v(" "),e("h3",{attrs:{id:"使用-raspi-imager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-raspi-imager"}},[s._v("#")]),s._v(" 使用 "),e("a",{attrs:{href:"https://www.raspberrypi.com/software/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Raspi imager"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("​\t进入官网后下载"),e("a",{attrs:{href:"https://www.raspberrypi.com/software/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Raspi imager"),e("OutboundLink")],1),s._v("，安装后启动：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/image/raspberry-pi/raspi-imager.png",alt:""}})]),s._v(" "),e("p",[s._v("选择下载好的系统镜像(本文使用镜像为：2021-05-07-raspios-buster-arm64.zip)，之后选择存储卡进行写入，等待片刻")]),s._v(" "),e("h2",{attrs:{id:"网络配置-可选"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络配置-可选"}},[s._v("#")]),s._v(" 网络配置(可选)")]),s._v(" "),e("p",[s._v("在下载和更新软件包之前，可以配置代理（拯救巨慢的下载速度....）")]),s._v(" "),e("p",[s._v("若想用clash可以参照文章"),e("RouterLink",{attrs:{to:"/zh/linux/raspberry-pi/clash-linux.html"}},[s._v("RaspiOS 使用clash")])],1),s._v(" "),e("h2",{attrs:{id:"更改软件源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更改软件源"}},[s._v("#")]),s._v(" 更改软件源")]),s._v(" "),e("p",[s._v("RaspiOS默认软件源为"),e("code",[s._v("Debian buster")]),s._v(",软件版本较低，这里改为"),e("code",[s._v("Debian Bullseye")])]),s._v(" "),e("p",[s._v("为后续的vim插件做准备（YCM需要vim8.2）")]),s._v(" "),e("p",[e("code",[s._v("/etc/apt/sources.list")]),s._v("中使用bullseye同时换成清华源")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free\n\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free\n\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("执行update和upgrade")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upadte\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"安装-zsh-omz-oh-my-zsh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-zsh-omz-oh-my-zsh"}},[s._v("#")]),s._v(" 安装 zsh & OMZ(oh-my-zsh)")]),s._v(" "),e("h3",{attrs:{id:"zsh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zsh"}},[s._v("#")]),s._v(" zsh")]),s._v(" "),e("p",[s._v("查看当前系统有哪些shell:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/shells\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n/bin/sh\n/bin/bash\n/usr/bin/bash\n/bin/rbash\n/usr/bin/rbash\n/bin/dash\n/usr/bin/dash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("没有则安装zsh：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看和更改默认shell：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当前默认shell")]),s._v("\n$ chsh -s /bin/zsh "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改默认shell")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("重新登录即可生效")]),s._v(" "),e("h3",{attrs:{id:"omz"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#omz"}},[s._v("#")]),s._v(" omz")]),s._v(" "),e("p",[s._v("执行官网安装脚本：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在"),e("code",[s._v("~/.zshrc")]),s._v("中修改主题：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZSH_THEME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"random"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随机主题")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"安装golang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装golang"}},[s._v("#")]),s._v(" 安装golang")]),s._v(" "),e("p",[s._v("这里使用apt安装，也可以手动安装")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" golang\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装gopls")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO111MODULE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on go get golang.org/x/tools/gopls@latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"安装-vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-vim"}},[s._v("#")]),s._v(" 安装 vim")]),s._v(" "),e("p",[s._v("使用apt安装：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" intall vim-nox\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("注意：这里安装"),e("code",[s._v("vim-nox")]),s._v("，默认的vim没有python3支持，无法安装后续插件")]),s._v(" "),e("p",[s._v("后续的"),e("code",[s._v("vim-go")]),s._v(","),e("code",[s._v("spf-vim")]),s._v("及插件的安装参考"),e("a",{attrs:{href:"/zh/linux/vim/spf13-vim-plugin#installation"}},[s._v("spf-vim 安装及插件配置")])]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("本文采用"),e("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-nd/4.0/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CC BY-NC-ND 4.0"),e("OutboundLink")],1),s._v("进行许可")]),s._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://www.raspberrypi.com/software/",target:"_blank",rel:"noopener noreferrer"}},[s._v("respi os"),e("OutboundLink")],1),s._v("  Raspberry Pi official site")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000013857738",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mac、Linux 安装zsh & ohmyzsh"),e("OutboundLink")],1),s._v("  segmentfault/mayihetu")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.reddit.com/r/Crostini/comments/c76e0b/appimage_install_problem_cannot_execute_binary/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Appimage install problem - cannot execute binary file: Exec format error"),e("OutboundLink")],1),s._v(" reddit")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://ohmyz.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh-my-zsh"),e("OutboundLink")],1),s._v(" omz official site")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh-my-zsh"),e("OutboundLink")],1),s._v(" omz github repo")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/debian/",target:"_blank",rel:"noopener noreferrer"}},[s._v("debian tsinghua mirror"),e("OutboundLink")],1),s._v(" 清华镜像")])])])}),[],!1,null,null,null);a.default=n.exports}}]);