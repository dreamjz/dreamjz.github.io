(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{642:function(e,s,a){"use strict";a.r(s);var t=a(5),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("spf13-vim及插件安装记录，后续遇到好用的插件也会记录在此")]),e._v(" "),a("p",[e._v("本文安装环境：")]),e._v(" "),a("ul",[a("li",[e._v("Manjaro")]),e._v(" "),a("li",[e._v("Linux 5.10")])]),e._v(" "),a("h2",{attrs:{id:"安装-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-installation"}},[e._v("#")]),e._v(" 安装 Installation")]),e._v(" "),a("p",[e._v("安装需要 "),a("em",[e._v("Git 1.7+, Vim 1.3+")]),e._v(",复制以下命令以安装:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://j.mp/spf13-vim3 -L "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" spf13-vim.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" spf13-vim.sh\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("如果是bash兼容的shell可以直接执行脚本：")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://j.mp/spf13-vim3 -L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"自定义-customization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义-customization"}},[e._v("#")]),e._v(" 自定义 Customization")]),e._v(" "),a("p",[e._v("spf13-vim的配置加载顺序如下：")]),e._v(" "),a("ol",[a("li",[a("code",[e._v(".vimrc.before")]),e._v(" - spf13-vim before configuration")]),e._v(" "),a("li",[a("code",[e._v(".vimrc.before.fork")]),e._v(" - fork before configuration")]),e._v(" "),a("li",[a("code",[e._v(".vimrc.before.local")]),e._v(" - before user configuration")]),e._v(" "),a("li",[a("code",[e._v(".vimrc.bundles")]),e._v(" - spf13-vim bundle configuration")]),e._v(" "),a("li",[a("code",[e._v(".vimrc.bundles.fork")]),e._v(" - fork bundle configuration")]),e._v(" "),a("li",[a("code",[e._v(".vimrc.bundles.local")]),e._v(" - local user bundle configuration")]),e._v(" "),a("li",[a("code",[e._v(".vimrc")]),e._v(" - spf13-vim vim configuration")]),e._v(" "),a("li",[a("code",[e._v(".vimrc.fork")]),e._v(" - fork vim configuration")]),e._v(" "),a("li",[a("code",[e._v(".vimrc.local")]),e._v(" - local user configuration")])]),e._v(" "),a("p",[e._v("自定配置建议创建相关的"),a("code",[e._v(".vim.*.local")]),e._v("文件")]),e._v(" "),a("h2",{attrs:{id:"插件-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件-plugins"}},[e._v("#")]),e._v(" 插件 Plugins")]),e._v(" "),a("p",[e._v("spf13-vim 已经集成了很多的人气插件：")]),e._v(" "),a("p",[a("img",{attrs:{src:"/image/plugins.png",alt:"plugins"}})]),e._v(" "),a("p",[e._v("后续会跟新集成插件的用法和说明")]),e._v(" "),a("h3",{attrs:{id:"增加新插件-adding-new-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加新插件-adding-new-plugins"}},[e._v("#")]),e._v(" 增加新插件 Adding new plugins")]),e._v(" "),a("p",[e._v("创建"),a("code",[e._v("~/.vimrc.bundles.local")]),e._v("用于新增额外插件，按"),a("code",[e._v("Bundle plugin_name")]),e._v("的格式写入文件，例如：")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" Bundle "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("'spf13/vim-colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("' "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ~/.vimrc.bundles.local\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("安装插件：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vim +BundleInstall! +BundleClean +q\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"移除-禁用-插件-removing-disabling-an-included-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除-禁用-插件-removing-disabling-an-included-plugin"}},[e._v("#")]),e._v(" 移除（禁用）插件 Removing (disabling) an included plugin")]),e._v(" "),a("p",[e._v("创建"),a("code",[e._v("~/.vimrc.local")]),e._v("(若不存在)，以"),a("code",[e._v("UnBundle plugin_name")]),e._v("的格式写入，例如：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" echo UnBundle \\'AutoClose\\' >> ~/.vimrc.bundles.local\n echo UnBundle \\'scrooloose/syntastic\\' >> ~/.vimrc.bundles.local\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("移除插件：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vim +BundleClean! +q\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"ycm-youcompleteme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ycm-youcompleteme"}},[e._v("#")]),e._v(" YCM("),a("a",{attrs:{href:"https://github.com/Valloric/YouCompleteMe",target:"_blank",rel:"noopener noreferrer"}},[e._v("YouCompleteMe"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("p",[e._v("YCM是一个vim的代码补全插件，提供多种语言的补全功能")]),e._v(" "),a("p",[e._v("由于新版本的YCM无法使用python2，需要强制vim使用python3")]),e._v(" "),a("p",[e._v("查看vim当前使用的python版本,进入vim:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(":echo has('python')\n:echo has('python3')\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("若"),a("code",[e._v("echo has('python')")]),e._v("返回1，则表示vim使用的是python2")]),e._v(" "),a("p",[e._v("在"),a("code",[e._v("~/.vimrc.before.local")]),e._v("中添加：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("set pythondll=\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("再次执行：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(":echo has('python3')\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("为1则说明当前使用python3")]),e._v(" "),a("p",[e._v("在"),a("code",[e._v("~/.vimrc.before.local")]),e._v(",添加如下内容：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let g:spf13_bundle_groups=['general', 'programming','youcompleteme']\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("安装插件：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vim +BundleInstall! +q\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("使用YCM之前需要自己编译配置,注意使用python3：")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/.vim/bundle/YouCompleteMe/\npython3 ./install.py --all "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#编译支持所有功能")]),e._v("\nor\npython3 ./install.py --clang-completer "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#只支持C/C++补全")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("再次进入vim，就可以使用YCM的代码补全了")]),e._v(" "),a("h3",{attrs:{id:"vim-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim-go"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/fatih/vim-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("vim-go"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("vim-go 为vim添加Go语言支持，向"),a("code",[e._v("~/.vimrc.bundles.local")]),e._v("写入：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Bundle 'fatih/vim-go'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("安装：")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" +BundleInstall +q\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("创建文件"),a("code",[e._v("main.go")]),e._v(",会生成模板代码，可以配合YCM的代码补全：")]),e._v(" "),a("p",[a("img",{attrs:{src:"/image/vim-go.png",alt:"vim-go"}})]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("本文采用"),a("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-nd/4.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY-NC-ND 4.0"),a("OutboundLink")],1),e._v("进行许可")]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/spf13/spf13-vim",target:"_blank",rel:"noopener noreferrer"}},[e._v("spf13-vim"),a("OutboundLink")],1),e._v(" github-repo")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ycm-core/YouCompleteMe",target:"_blank",rel:"noopener noreferrer"}},[e._v("YouCompleteMe"),a("OutboundLink")],1),e._v(" github-repo")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/fatih/vim-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("vim-go"),a("OutboundLink")],1),e._v(" github-repo")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.zhihu.com/question/48089488",target:"_blank",rel:"noopener noreferrer"}},[e._v("vim配置ycm，同时支持python和python3了，如何只支持python3"),a("OutboundLink")],1),e._v(" 知乎")])])])}),[],!1,null,null,null);s.default=n.exports}}]);