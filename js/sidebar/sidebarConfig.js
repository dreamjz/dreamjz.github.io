// programming
const sidebarLinux = require('./programing/sbarLinux');
const sidebarGolang = require('./programing/sbarGolang');
const sidebarNginx = require('./programing/sbarNginx');
const sidebarDocker = require('./programing/sbarDocker');
const sidebarFrontEnd = require('./programing/sbarFrontEnd');
const sidebarRaspi = require('./programing/sbarRaspi');
const rpc = require('./programing/rpc');
const sidebarLeetCode = require('./programing/sbarLeetCode');

// reading notes
const sidbarReading = require('./reading-note/sidebarReading');

// language 
const japanese = require('./lang/japanese')

module.exports = {
  sidebar: {
    '/reading-note/': [
      {
        title: 'Welcome',
        sidebarDepth: 2,
        collapsable: true,
        path: '/reading-note/',
      },
      'indexes',
      sidbarReading.algorithmsInC,
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
    '/lang/': [
      {
        title: 'Welcome',
        sidebarDepth: 2,
        collapsable: true,
        path: '/lang/',
      },
      japanese,
    ],
    '/zh/': [
      {
        title: 'Welcome',
        sidebarDepth: 2,
        collapsable: true,
        path: '/zh/',
      },
      'indexes',
      sidebarGolang,
      sidebarLeetCode,
      rpc,
      sidebarLinux,
      sidebarNginx,
      sidebarDocker,
      sidebarRaspi,
      sidebarFrontEnd,
      {
        title: 'Learning Method',
        sidebarDepth: 2,
        collapsable: true,
        children: [
          'retaining_computer_science_knowledge',
        ]
      },
      {
        title: 'Interviews',
        sidebarDepth: 2,
        collapsable: true,
        children: [
          '/zh/interviews/Golang/golang',
          '/zh/interviews/MySQL/mysql',
          '/zh/interviews/Network/network',
          '/zh/interviews/Redis/redis',
        ]
      }
    ],
  },
};
