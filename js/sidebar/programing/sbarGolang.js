module.exports = {
  title: 'Golang',
  children: [
    '/zh/golang/Preface',
    // My Projects
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
    // Open Source Books
    {
      title: 'The Design and Implementation of Golang',
      collapsable: true,
      children: [
        '/zh/golang/open-source-books/The-Design-and-Implementation-of-Golang/summary',
        '/zh/golang/open-source-books/The-Design-and-Implementation-of-Golang/preface',
        '/zh/golang/open-source-books/The-Design-and-Implementation-of-Golang/01.1',
        '/zh/golang/open-source-books/The-Design-and-Implementation-of-Golang/03.1',
        '/zh/golang/open-source-books/The-Design-and-Implementation-of-Golang/03.2',
        '/zh/golang/open-source-books/The-Design-and-Implementation-of-Golang/03.3',
        '/zh/golang/open-source-books/The-Design-and-Implementation-of-Golang/03.4',
      ],
    },
    {
      title: 'Advanced Go Programming',
      sidebarDepth: 2,
      collapsable: true,
      children: [
        '/zh/golang/open-source-books/advanced-go-programming/Preface',
        '/zh/golang/open-source-books/advanced-go-programming/04.1',
        '/zh/golang/open-source-books/advanced-go-programming/04.2',
        '/zh/golang/open-source-books/advanced-go-programming/04.3',
        '/zh/golang/open-source-books/advanced-go-programming/04.4',
      ],
    },
    {
      title: 'High Performance Go',
      sidebarDepth: 2,
      collapsable: true,
      children: [
        '/zh/golang/open-source-books/high-performance-go/summary',
        '/zh/golang/open-source-books/high-performance-go/preface',
        '/zh/golang/open-source-books/high-performance-go/performance-analysis/benchmark',
        '/zh/golang/open-source-books/high-performance-go/performance-analysis/pprof',
      ],
    },
    // 3rd-Library 
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
    {
      title: 'Minidb',
      sidebarDepth: 2,
      collapsable: true,
      children: [
        '/zh/golang/github-repos/flower-corp/minidb/preface',
        '/zh/golang/github-repos/flower-corp/minidb/minidb',
      ],
    },
    {
      title: '7Days-Golang',
      sidebarDepth: 2,
      collapsable: true,
      children: [
        '/zh/golang/github-repos/7days-golang/preface',
        '/zh/golang/github-repos/7days-golang/gee-web',
      ],
    },
    '/zh/golang/concurrency/GMPModel',
  ],
};
