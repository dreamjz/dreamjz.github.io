const sidebarLinux = require("./sbarLinux")
const sidebarGolang = require("./sbarGolang")
const sidebarNginx = require("./sbarNginx")
const sidebarDocker = require("./sbarDocker")
const sidebarFrontEnd = require("./sbarFrontEnd")

module.exports = {
    sidebar: {
        '/zh/': [{
                title: 'Welcome',
                path: '/zh/'
            },
            sidebarGolang,
            sidebarLinux,
            sidebarNginx,
            sidebarDocker,
            sidebarFrontEnd,
        ]

    }
}