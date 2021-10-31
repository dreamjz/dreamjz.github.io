const sidebarLinux = require("./sbarLinux.js")
const sidebarGolang = require("./sbarGolang.js")
const sidebarNginx = require("./sbarNginx")


module.exports = {
    sidebar: {
        '/zh/': [{
                title: 'Welcome',
                path: '/zh/'
            },
            sidebarGolang,
            sidebarLinux,
            sidebarNginx,
            {
                title: 'Front End',
                children: [{
                    title: 'Vue',
                    children: [
                        '',
                    ]
                }]
            }
        ]

    }
}