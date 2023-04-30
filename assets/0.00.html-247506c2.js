import{_ as a,X as d,Y as r,Z as i,$ as e,a0 as l,a1 as s,F as v}from"./framework-8cb7ec75.js";const c={},t=s('<p>在学习了后端的 Gin 和 Gorm 和前端的 Vuex 和 Vue Router之后，是时候实践和巩固已学习的知识点了</p><p>接下来将创建一个简单的 blog application，将实现以下功能：</p><ul><li>登录验证</li><li>路由鉴权</li><li>文章的添加，删除，修改和查询</li><li>Markdown 格式文章的展示</li></ul><p>开发环境：</p><ul><li>OS: 5.10.79-1-MANJARO</li><li>Database: 10.6.5-MariaDB Arch Linux</li><li>Golang: 1.17</li><li>Node: 16.11.1</li></ul><h2 id="_1-frontend" tabindex="-1"><a class="header-anchor" href="#_1-frontend" aria-hidden="true">#</a> 1. Frontend</h2>',6),o={href:"https://github.com/PanJiaChen",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/PanJiaChen/vue-admin-template",target:"_blank",rel:"noopener noreferrer"},m=s(`<p><strong>目录结构</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── build                      # 构建相关
├── mock                       # 项目mock 模拟数据
├── plop-templates             # 基本模板
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── lang                   # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── vendor                 # 公用vendor
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── .travis.yml                # 自动化CI配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
└── package.json               # package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-backend" tabindex="-1"><a class="header-anchor" href="#_2-backend" aria-hidden="true">#</a> 2. Backend</h2><p><strong>项目文件结构</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go-gin-example
├── api
├── conf
├── core
├── dao
├── global
├── middleware
├── models
├── routers
├── runtime
├── service
└── utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>api : 路由处理逻辑</li><li>config : 用于存储配置文件</li><li>middleware : 应用中间件</li><li>models : 应用数据库模型</li><li>global : 全局变量</li><li>routers : 路由逻辑处理</li><li>service : 业务服务层</li><li>dao : 数据库访问层</li><li>utils : 工具包</li></ul>`,6);function b(p,h){const n=v("ExternalLinkIcon");return d(),r("div",null,[t,i("p",null,[e("前端项目将以 "),i("a",o,[e("PanJiaChen"),l(n)]),e("/"),i("a",u,[e("vue-admin-template"),l(n)]),e("作为模板进行创建")]),m])}const _=a(c,[["render",b],["__file","0.00.html.vue"]]);export{_ as default};
