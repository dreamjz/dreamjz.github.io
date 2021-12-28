(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{621:function(s,n,a){"use strict";a.r(n);var e=a(5),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在学习了后端的 Gin 和 Gorm 和前端的 Vuex 和 Vue Router之后，是时候实践和巩固已学习的知识点了")]),s._v(" "),a("p",[s._v("接下来将创建一个简单的 blog application，将实现以下功能：")]),s._v(" "),a("ul",[a("li",[s._v("登录验证")]),s._v(" "),a("li",[s._v("路由鉴权")]),s._v(" "),a("li",[s._v("文章的添加，删除，修改和查询")]),s._v(" "),a("li",[s._v("Markdown 格式文章的展示")])]),s._v(" "),a("p",[s._v("开发环境：")]),s._v(" "),a("ul",[a("li",[s._v("OS: 5.10.79-1-MANJARO")]),s._v(" "),a("li",[s._v("Database: 10.6.5-MariaDB Arch Linux")]),s._v(" "),a("li",[s._v("Golang: 1.17")]),s._v(" "),a("li",[s._v("Node: 16.11.1")])]),s._v(" "),a("h2",{attrs:{id:"_1-frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-frontend"}},[s._v("#")]),s._v(" 1. Frontend")]),s._v(" "),a("p",[s._v("前端项目将以 "),a("a",{attrs:{href:"https://github.com/PanJiaChen",target:"_blank",rel:"noopener noreferrer"}},[s._v("PanJiaChen"),a("OutboundLink")],1),s._v("/"),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-admin-template",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-admin-template"),a("OutboundLink")],1),s._v("作为模板进行创建")]),s._v(" "),a("p",[a("strong",[s._v("目录结构")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("├── build                      # 构建相关\n├── mock                       # 项目mock 模拟数据\n├── plop-templates             # 基本模板\n├── public                     # 静态资源\n│   │── favicon.ico            # favicon图标\n│   └── index.html             # html模板\n├── src                        # 源代码\n│   ├── api                    # 所有请求\n│   ├── assets                 # 主题 字体等静态资源\n│   ├── components             # 全局公用组件\n│   ├── directive              # 全局指令\n│   ├── filters                # 全局 filter\n│   ├── icons                  # 项目所有 svg icons\n│   ├── lang                   # 国际化 language\n│   ├── layout                 # 全局 layout\n│   ├── router                 # 路由\n│   ├── store                  # 全局 store管理\n│   ├── styles                 # 全局样式\n│   ├── utils                  # 全局公用方法\n│   ├── vendor                 # 公用vendor\n│   ├── views                  # views 所有页面\n│   ├── App.vue                # 入口页面\n│   ├── main.js                # 入口文件 加载组件 初始化等\n│   └── permission.js          # 权限管理\n├── tests                      # 测试\n├── .env.xxx                   # 环境变量配置\n├── .eslintrc.js               # eslint 配置项\n├── .babelrc                   # babel-loader 配置\n├── .travis.yml                # 自动化CI配置\n├── vue.config.js              # vue-cli 配置\n├── postcss.config.js          # postcss 配置\n└── package.json               # package.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h2",{attrs:{id:"_2-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-backend"}},[s._v("#")]),s._v(" 2. Backend")]),s._v(" "),a("p",[a("strong",[s._v("项目文件结构")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("go-gin-example\n├── api\n├── conf\n├── core\n├── dao\n├── global\n├── middleware\n├── models\n├── routers\n├── runtime\n├── service\n└── utils\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[s._v("api : 路由处理逻辑")]),s._v(" "),a("li",[s._v("config : 用于存储配置文件")]),s._v(" "),a("li",[s._v("middleware : 应用中间件")]),s._v(" "),a("li",[s._v("models : 应用数据库模型")]),s._v(" "),a("li",[s._v("global : 全局变量")]),s._v(" "),a("li",[s._v("routers : 路由逻辑处理")]),s._v(" "),a("li",[s._v("service : 业务服务层")]),s._v(" "),a("li",[s._v("dao : 数据库访问层")]),s._v(" "),a("li",[s._v("utils : 工具包")])])])}),[],!1,null,null,null);n.default=t.exports}}]);