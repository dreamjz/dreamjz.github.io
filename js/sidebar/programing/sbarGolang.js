module.exports = {
  title: 'Golang',
  children: [
    '/zh/golang/Preface',
    {
      title: 'Advanced Go Programming',
      sidebarDepth: 2,
      collapsable: true,
      children: [
        '/zh/golang/AdvancedGoProgramming/Preface',
        '/zh/golang/AdvancedGoProgramming/04.1',
        '/zh/golang/AdvancedGoProgramming/04.2',
        '/zh/golang/AdvancedGoProgramming/04.3',
        '/zh/golang/AdvancedGoProgramming/04.4',
      ],
    },
    {
      title: 'Gin blog',
      sidebarDepth: 2,
      collapsable: true,
      children: [
        '/zh/golang/go-gin-blog/Preface',
        '/zh/golang/go-gin-blog/01.1',
        '/zh/golang/go-gin-blog/01.2',
        '/zh/golang/go-gin-blog/01.3',
      ],
    },
    {
      title: 'Gorm',
      sidebarDepth: 2,
      collapsable: true,
      children: [
        '/zh/golang/gorm/01.1',
        '/zh/golang/gorm/01.2',
        '/zh/golang/gorm/01.3',
        '/zh/golang/gorm/01.4',
        '/zh/golang/gorm/01.5',
        '/zh/golang/gorm/gorm',
      ],
    },
    {
      title: 'Golang lib',
      // sidebarDepth: 2,
      collapsable: true,
      children: [
        '/zh/golang/golang-daily-lib/preface',
        // standard library
        '/zh/golang/golang-daily-lib/flag',
        '/zh/golang/golang-daily-lib/log',
        // 3rd
        '/zh/golang/golang-daily-lib/go-flags',
        '/zh/golang/golang-daily-lib/go-homedir',
        '/zh/golang/golang-daily-lib/go-ini',
        '/zh/golang/golang-daily-lib/cobra',
        '/zh/golang/golang-daily-lib/viper',
        '/zh/golang/golang-daily-lib/fsnotify',
        '/zh/golang/golang-daily-lib/cast',
        '/zh/golang/golang-daily-lib/logrus',
        '/zh/golang/golang-daily-lib/godotenv',
        '/zh/golang/golang-daily-lib/uniplace-carbon',
        '/zh/golang/golang-daily-lib/email',
      ],
    },
    '/zh/golang/gin',
    '/zh/golang/endless',
    '/zh/golang/go-jwt',
    '/zh/golang/uber-go-zap/01.1',

  ],
};
