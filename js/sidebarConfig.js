const sidebarLinux = require("./sbarLinux");
const sidebarGolang = require("./sbarGolang");
const sidebarNginx = require("./sbarNginx");
const sidebarDocker = require("./sbarDocker");
const sidebarFrontEnd = require("./sbarFrontEnd");
const sidebarRaspi = require("./sbarRaspi");
module.exports = {
  // sidebar: {
  //   "/zh/": [
  //     {
  //       title: "Welcome",
  //       path: "/zh/",
  //     },
  //     sidebarGolang,
  //     sidebarLinux,
  //     sidebarNginx,
  //     sidebarDocker,
  //     sidebarFrontEnd,
  //     sidebarRaspi,
  //   ],
  // },
  sidebar: {
    "/zh/": [
      {
        title: "Welcome",
        path: "/zh/",
        sidebarDepth: 1,
        collapsable: false,
      },
      sidebarGolang,
      sidebarLinux,
      sidebarNginx,
      sidebarDocker,
      sidebarRaspi,
      sidebarFrontEnd,
    ],
  },
};
