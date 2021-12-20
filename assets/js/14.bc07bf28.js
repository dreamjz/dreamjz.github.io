(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{599:function(e,t,n){"use strict";n.r(t);var s=n(5),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s service. Then, with a single command, you create and start all service from your configuration.")]),e._v(" "),n("p",[e._v("Compose works in all environments: production, staging, development, testing, as well as CI workflows.")]),e._v(" "),n("h2",{attrs:{id:"_1-using-compose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-using-compose"}},[e._v("#")]),e._v(" 1. Using Compose")]),e._v(" "),n("p",[e._v("Using compose is basically a three-step process:")]),e._v(" "),n("ol",[n("li",[e._v("Define your app’s environment with a "),n("code",[e._v("Dockerfile")]),e._v(" so it can be reproduced anywhere")]),e._v(" "),n("li",[e._v("Define the service that make up your app in "),n("code",[e._v("docker-compose.yml")]),e._v(" so they can be run together in an isolated environment")]),e._v(" "),n("li",[e._v("Run "),n("code",[e._v("docker compose up")]),e._v(" and the "),n("code",[e._v("Docker compose")]),e._v(" command starts and runs your entire app")])]),e._v(" "),n("p",[e._v("A "),n("code",[e._v("docker-compose.yml")]),e._v(" looks like this :")]),e._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"3.9"')]),e._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# optional since v1.27.0")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("web")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" .\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"5000:5000"')]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" ."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("/code\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" logvolume01"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("/var/log\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("links")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" redis\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("redis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" redis\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("logvolume01")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br")])]),n("p",[e._v("Compose has commands for managing the whole lifecycle of your application:")]),e._v(" "),n("ul",[n("li",[e._v("Start, stop and rebuild services")]),e._v(" "),n("li",[e._v("View the status of the running services")]),e._v(" "),n("li",[e._v("Run a one-off command on a service")])]),e._v(" "),n("h2",{attrs:{id:"_2-multiple-isolated-environment-on-a-single-host"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-multiple-isolated-environment-on-a-single-host"}},[e._v("#")]),e._v(" 2. Multiple isolated environment on a single host")]),e._v(" "),n("p",[e._v("Compose use a project name to isolated environments from each other. You can make use of this project name in several different context:")]),e._v(" "),n("ul",[n("li",[e._v("on a dev host, to create multiple copies of a single environment, such as when you want to run a stable copy for each feature branch of a project")]),e._v(" "),n("li",[e._v("on a CI server, to keep build from interfering with each other, you can set the project name to a unique build number")]),e._v(" "),n("li",[e._v("on a shared host or dev host, to prevent different projects, which may use the same service names, from interfering with each other")])]),e._v(" "),n("p",[e._v("The default project name is the basename of the project directory. You can set a custom project name by using "),n("code",[e._v("-p")]),e._v(" command line option or the "),n("code",[e._v("COMPOSE_PROJECT_NAME")]),e._v(" environment variable")]),e._v(" "),n("p",[e._v("The default project directory is the base directory of the Compose file. A custom value for it can be defined with the "),n("code",[e._v("--procjet-directory")]),e._v(" command line option")]),e._v(" "),n("h2",{attrs:{id:"_3-preserve-volume-data-when-containers-are-created"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-preserve-volume-data-when-containers-are-created"}},[e._v("#")]),e._v(" 3. Preserve volume data when containers are created")]),e._v(" "),n("p",[e._v("Compose preserves all volumes used by your services. When "),n("code",[e._v("docker compose up")]),e._v("  runs, if it finds any containers from previous runs, it copies the volumes from the old container to the new container. This process ensures that any data you’ve created in volumes isn’t lost")]),e._v(" "),n("h2",{attrs:{id:"_4-only-recreate-containers-that-have-changed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-only-recreate-containers-that-have-changed"}},[e._v("#")]),e._v(" 4. Only recreate containers that have changed")]),e._v(" "),n("p",[e._v("Compose caches the configuration used to create a container. When you restart a service that not changed, Compose re-uses the existing containers. Re-using containers means that you can make changes to your environment very quickly")]),e._v(" "),n("h2",{attrs:{id:"_5-variables-and-moving-a-composition-between-environments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-variables-and-moving-a-composition-between-environments"}},[e._v("#")]),e._v(" 5. Variables and moving a composition between environments")]),e._v(" "),n("p",[e._v("Compose supports variables in a Compose file. You can use these variables to customize your composition for different environment, of different users")]),e._v(" "),n("p",[e._v("You can extend a Compose file using the "),n("code",[e._v("extends")]),e._v(" filed or by creating multiple Compose files.")]),e._v(" "),n("h2",{attrs:{id:"_6-common-use-cases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-common-use-cases"}},[e._v("#")]),e._v(" 6. Common use cases")]),e._v(" "),n("p",[e._v("Compose can be used in many different ways. Some common use cases are outlined below")]),e._v(" "),n("h3",{attrs:{id:"_6-1-development-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-development-environment"}},[e._v("#")]),e._v(" 6.1 Development environment")]),e._v(" "),n("p",[e._v("When you are developing software, the ability to run an isolated environment and interact with it is crucial. The Compose command line tool can be used to create the environment and interact with it")]),e._v(" "),n("p",[e._v("The Compose file provides a way to document and configure all of the application’s dependencies (database, queues, caches, web service APIs, etc.). Using the Compose command line tool you can create and start one or more containers for each dependency with a single command "),n("code",[e._v("docker compose up")])]),e._v(" "),n("p",[e._v("Together, these features provide a convenient way for developers to get started on a project. Compose can reduce a multi-page “developer getting started guide” to a single machine readable Compose file and a few commands")]),e._v(" "),n("h3",{attrs:{id:"_6-2-automated-testing-environments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-automated-testing-environments"}},[e._v("#")]),e._v(" 6.2 Automated testing environments")]),e._v(" "),n("p",[e._v("An important part of any Continuous Deployment or Continuous Integration process is the automated test suite. Automated end-to-end testing requires an environment in which to run tests. Compose provides a convenient way to create and destroy isolated testing environments for your testing suite. By defining the full environment in a Compose file, you can create and destroy these environments in just a few commands:")]),e._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("$ docker compose up -d\n$ ./run_tests\n$ docker compose down\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("h3",{attrs:{id:"_6-3-single-host-deployments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-single-host-deployments"}},[e._v("#")]),e._v(" 6.3 Single host deployments")]),e._v(" "),n("p",[e._v("see "),n("a",{attrs:{href:"https://docs.docker.com/compose/production/",target:"_blank",rel:"noopener noreferrer"}},[e._v("compose in production"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Overview of Docker Compose"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);