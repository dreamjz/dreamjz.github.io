module.exports = {
    plugins: [
        [
          "cursor-effects",
          {
            size: 2, // size of the particle, default: 2
            shape: ["star"], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
          },
        ],
        [
          "dynamic-title",
          {
            showIcon: "/favicon.ico",
            showText: "(/≧▽≦/)咦！又好了！",
            // hideIcon: '/favicon.ico',
            hideText: "(●—●)喔哟，崩溃啦！",
            recoverTime: 1000,
          },
        ],
        ["go-top"],
        [
          "vuepress-plugin-nuggets-style-copy",
          {
            copyText: "复制代码", //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
            tip: {
              content: "复制成功!",
            },
          },
        ],
        // [
        //   "ribbon",
        //   {
        //     size: 90, // width of the ribbon, default: 90
        //     opacity: 0.2, // opacity of the ribbon, default: 0.3
        //     zIndex: -1, // z-index property of the background, default: -1
        //   },
        // ],
        ["vuepress-plugin-nprogress"],
        [
          "md-enhance",
          {
            // 配置选项
            // 启用脚注
            footnote: true,
            // 开启标记
            mark: true,
            // 启用任务列表
            tasklist: true,
            // 启用流程图
            flowchart: true,
          },
        ],
        [
          "sitemap",
          {
            hostname: process.env.SITE, // 替换成你的地址
            exclude: ['/404.html'],
            dateFormatter: val => {
              return new Date().toISOString()
            }
          },
        ],
      ]
}