const sidebarLinux = require("./sbarLinux.js")
const sidebarGolang = require("./sbarGolang.js")

module.exports = {
    sidebar: {
        '/zh/': [{
                title: 'Welcome',
                path: '/zh/'
            },
            sidebarGolang,
            sidebarLinux,
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