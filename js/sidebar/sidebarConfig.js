// programming
const sidebarLinux = require('./programing/sbarLinux');
const sidebarGolang = require('./programing/sbarGolang');
const sidebarNginx = require('./programing/sbarNginx');
const sidebarDocker = require('./programing/sbarDocker');
const sidebarFrontEnd = require('./programing/sbarFrontEnd');
const sidebarRaspi = require('./programing/sbarRaspi');
const rpc = require('./programing/rpc');

// reading notes
const sidbarReading = require('./reading-note/sidebarReading');

module.exports = {
  sidebar: {
    '/reading-note/': [
      {
        title: 'Welcome',
        sidebarDepth: 2,
        collapsable: true,
        path: '/reading-note/',
      },
      sidbarReading.concurrencyInGo,
      sidbarReading.vbirdLinuxBasic,
      sidbarReading.vbirdLinuxServer,
      sidbarReading.highPerformanceMySQL,
      sidbarReading.SQLCookbook,
      sidbarReading.ElasticSerachInAction,
      sidbarReading.MongoDBDefinitiveGuide,
      sidbarReading.RedisDesignAndImplementation,
      sidbarReading.IntroductionToAlgorithm,
      sidbarReading.DataStructureTutorial,
      sidbarReading.shellScriptingBible,
    ],
    '/zh/': [
      {
        title: 'Welcome',
        sidebarDepth: 2,
        collapsable: true,
        path: '/zh/',
      },
      sidebarGolang,
      rpc,
      sidebarLinux,
      sidebarNginx,
      sidebarDocker,
      sidebarRaspi,
      sidebarFrontEnd,
    ],
  },
};
