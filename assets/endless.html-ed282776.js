const e=JSON.parse('{"key":"v-7991054c","path":"/note/golang/endless.html","title":"Graceful Shutdown or Restart","lang":"zh-CN","frontmatter":{"title":"Graceful Shutdown or Restart","date":"2021-11-23T00:00:00.000Z","category":["golang","docker"],"tag":["endless","gin"],"timeline":true},"headers":[{"level":2,"title":"1. Introduction","slug":"_1-introduction","link":"#_1-introduction","children":[{"level":3,"title":"1.1 Features","slug":"_1-1-features","link":"#_1-1-features","children":[]}]},{"level":2,"title":"2. Quick Start","slug":"_2-quick-start","link":"#_2-quick-start","children":[]},{"level":2,"title":"3. Timeout and MaxHeaderBytes","slug":"_3-timeout-and-maxheaderbytes","link":"#_3-timeout-and-maxheaderbytes","children":[]},{"level":2,"title":"4. Hammer Time","slug":"_4-hammer-time","link":"#_4-hammer-time","children":[]},{"level":2,"title":"5. Signals","slug":"_5-signals","link":"#_5-signals","children":[{"level":3,"title":"5.1 Hook","slug":"_5-1-hook","link":"#_5-1-hook","children":[]},{"level":3,"title":"5.2 Kill","slug":"_5-2-kill","link":"#_5-2-kill","children":[]}]},{"level":2,"title":"6. PID File","slug":"_6-pid-file","link":"#_6-pid-file","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":6.67,"words":2002},"filePathRelative":"note/golang/endless.md","localizedDate":"2021年11月23日","excerpt":"<p>在学习 gin 时，官方文档介绍如何优雅地启动和停止服务</p>\\n<p>这里以 <a href=\\"https://github.com/fvbock/endless\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">endless</a> 为例，开始学习</p>\\n<h2> 1. Introduction</h2>\\n<p>Zero downtime restarts for golang HTTP and HTTPS servers.</p>\\n<h3> 1.1 Features</h3>\\n<ul>\\n<li>Drop-in replacement for <code>http.ListenAndServe</code> and <code>http.ListenAndServeTLS</code></li>\\n<li>Signal hooks to execute your own code before or after the listened to signal (SIGHUP, SIGUSR1, SIGUER2, SIGINT, SIGTERM, SIGSTP)</li>\\n<li>You can start multiple servers from one binary and endless will take care of the different sockets/ports assignments when restarting</li>\\n</ul>"}');export{e as data};