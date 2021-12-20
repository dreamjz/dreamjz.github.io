(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{600:function(s,e,t){"use strict";t.r(e);var a=t(5),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"get-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[s._v("#")]),s._v(" Get Started")]),s._v(" "),t("p",[s._v("本节代码参见"),t("a",{attrs:{href:""}},[s._v("compose-test")])]),s._v(" "),t("h2",{attrs:{id:"_1-prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-prerequisites"}},[s._v("#")]),s._v(" 1. Prerequisites")]),s._v(" "),t("p",[s._v("首先安装 "),t("code",[s._v("Docker Compose")]),s._v(" ,")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ pacman -S docker-compose\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_2-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-setup"}},[s._v("#")]),s._v(" 2. Setup")]),s._v(" "),t("p",[s._v("Define the application dependencies")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Create a directory for the proejct:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" redis\nfrom flask "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" Flask\n\napp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Flask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncache "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" redis.Redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redis'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\ndef get_hit_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n    retries "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" True:\n        try:\n            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" cache.incr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hits'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        except redis.exceptions.ConnectionError as exc:\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" retries "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":\n                raise exc\n            retries -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            time.sleep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n@app.route"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndef hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n    count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" get_hit_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World! I have been seen {} times.\\n'")]),s._v(".format"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Create a file "),t("code",[s._v("app.py")]),s._v(" :")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" redis\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Flask\n\napp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Flask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncache "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redis'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_hit_count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    retries "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("incr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hits'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exceptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ConnectionError "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" exc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" retries "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("raise")]),s._v(" exc\n            retries "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("route")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" get_hit_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World! I have been seen {} times.\\n'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("In this example, "),t("code",[s._v("redis")]),s._v(" is the hostname of the redis container on the application’s network. We use the default port for Redis, "),t("code",[s._v("6379")]),s._v(".")]),s._v(" "),t("blockquote",[t("h3",{attrs:{id:"handling-transient-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handling-transient-errors"}},[s._v("#")]),s._v(" Handling transient errors")]),s._v(" "),t("p",[s._v("Note the way the "),t("code",[s._v("get_hit_count")]),s._v(" function is written. This basic retry loop lets us attempt our request multiple times if the redis service is not available. This is useful at startup while the application comes online, but also makes our application more resilient if the Redis service needs to be restarted anytime during the app’s lifetime. In a cluster, this also helps handling momentary connection drops between nodes.")])])]),s._v(" "),t("li",[t("p",[s._v("Create file "),t("code",[s._v("requirements.txt")]),s._v(" :")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("flask\nredis\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"_3-create-a-dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-a-dockerfile"}},[s._v("#")]),s._v(" 3. Create a Dockerfile")]),s._v(" "),t("p",[s._v("Write a Dockerfile that builds a Docker image. The imge contains all the dependencies the Python application requires, including Python iteself.")]),s._v(" "),t("p",[s._v("In project directory, create a file "),t("code",[s._v("Dockerfile")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" python:3.7-alpine")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /code")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" FLASK_APP=app.py")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" FLASK_RUN_HOST=0.0.0.0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apk add --no-cache gcc musl-dev linux-headers")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" requirements.txt requirements.txt")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" pip install -r requirements.txt")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 5000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . .")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"flask"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"run"')]),s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("This tells Docker to:")]),s._v(" "),t("ul",[t("li",[s._v("Build an image starting with Python 3.7 image")]),s._v(" "),t("li",[s._v("Set the working directory to "),t("code",[s._v("/code")]),s._v(" (会自动创建)")]),s._v(" "),t("li",[s._v("Set environment variables used by the "),t("code",[s._v("flask")]),s._v(" command")]),s._v(" "),t("li",[s._v("Install gcc and other dependencies")]),s._v(" "),t("li",[s._v("Copy "),t("code",[s._v("requirements.txt")]),s._v(" and install the Python dependencies")]),s._v(" "),t("li",[s._v("Add metadata to the image to describe that the container is listening on port 5000")]),s._v(" "),t("li",[s._v("Copy the current directory "),t("code",[s._v(".")]),s._v(" in the project to the workdir "),t("code",[s._v(".")]),s._v(" in the image")]),s._v(" "),t("li",[s._v("Set the default command for the container to "),t("code",[s._v("flask run")])])]),s._v(" "),t("h2",{attrs:{id:"_4-define-services-in-a-compose-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-define-services-in-a-compose-file"}},[s._v("#")]),s._v(" 4. Define services in a Compose file")]),s._v(" "),t("p",[s._v("Create a file "),t("code",[s._v("docker-compose.yml")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3.9"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" .\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5000:5000"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis:alpine"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("This Compose file defines two services: "),t("code",[s._v("web")]),s._v(" and "),t("code",[s._v("redis")])]),s._v(" "),t("h3",{attrs:{id:"_4-1-web-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-web-service"}},[s._v("#")]),s._v(" 4.1 Web service")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("web")]),s._v(" service uses an image that’s build from the "),t("code",[s._v("Dockerfile")]),s._v(" in the current directory. It then binds the container and the host machine to the exposed port 5000 (the default port for the flask web server)")]),s._v(" "),t("h3",{attrs:{id:"_4-2-redis-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-redis-service"}},[s._v("#")]),s._v(" 4.2 Redis service")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("redis")]),s._v(" service uses a public Redis imges "),t("code",[s._v("redis:alpine")])]),s._v(" "),t("h2",{attrs:{id:"_5-build-and-run-your-app-with-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-build-and-run-your-app-with-compose"}},[s._v("#")]),s._v(" 5. Build and run your app with Compose")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("From the project directory, start up app by running "),t("code",[s._v("docker compose up")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ docker compose up \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Compose pull a Redis iamge, builds an image for you code, and starts the services you defined. In this case, the code is statically copied into the image at build time")])]),s._v(" "),t("li",[t("p",[s._v("Use curl to test")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://localhost:5000/\nHello World"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" I have been seen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" times.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Switch to another terminal window, and type "),t("code",[s._v("docker image ls")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ docker image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nREPOSITORY                       TAG          IMAGE ID       CREATED             SIZE\ndocker-compose-get-started_web   latest       da30493291c0   About an hour ago   183MB\npython                           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.7")]),s._v("-alpine   a1034fd13493   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" weeks ago         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v(".8MB\nredis                            alpine       3900abf41552   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" weeks ago         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(".4MB\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Stop the application, either by running "),t("code",[s._v("docker-compose down")]),s._v(" from within your project directory in the second terminal, or by hitting CTRL+C in the original terminal where you started the app")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ docker compose down\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Running "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3\n ⠿ Container docker-compose-get-started-web-1    Removed                     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(".3s\n ⠿ Container docker-compose-get-started-redis-1  Removed                      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".2s\n ⠿ Network docker-compose-get-started_default    Removed                      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".1s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])]),s._v(" "),t("p",[s._v("可以看到使用 "),t("code",[s._v("docker compose down")]),s._v(" 之后会将 "),t("code",[s._v("container")]),s._v(" 和 "),t("code",[s._v("network")]),s._v(" 删除，若使用 CTRL+C 只会删除容器而网络将不会被删除")]),s._v(" "),t("h2",{attrs:{id:"_6-edit-the-compose-file-to-add-a-bind-mount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-edit-the-compose-file-to-add-a-bind-mount"}},[s._v("#")]),s._v(" 6. Edit the Compose file to add a bind mount")]),s._v(" "),t("p",[s._v("Edit "),t("code",[s._v("docker-compose.yml")]),s._v(" ito add a bind mount for the "),t("code",[s._v("web")]),s._v(" service:")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3.9"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" .\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5000:5000"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/code\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("FLASK_ENV")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" development\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis:alpine"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("The "),t("code",[s._v("volumes")]),s._v(" key mounts the project directory on the host to "),t("code",[s._v("/code")]),s._v(" inside the container, allowing you to modify the code on the fly, without having to rebuild the image. The "),t("code",[s._v("environment")]),s._v(" key sets the "),t("code",[s._v("FLASK_NEW")]),s._v(" environment variable, which tells "),t("code",[s._v("flask run")]),s._v(" to run in development mode and reload the code on change. This mode should only be used in development")]),s._v(" "),t("h2",{attrs:{id:"_7-re-build-and-run-the-app-with-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-re-build-and-run-the-app-with-compose"}},[s._v("#")]),s._v(" 7. Re-build and run the app with Compose")]),s._v(" "),t("p",[s._v("From project directory, run "),t("code",[s._v("docker compose up")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ docker compose up\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_8-update-the-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-update-the-application"}},[s._v("#")]),s._v(" 8. Update the application")]),s._v(" "),t("p",[s._v("Because the application code is now mounted into the container using a volume, you can make changes to its code and see the changes instantly, without having to rebuild the image.")]),s._v(" "),t("p",[s._v("Change the greeting in "),t("code",[s._v("app.py")]),s._v(" and save it. For example, change the "),t("code",[s._v("Hello World!")]),s._v(" message to "),t("code",[s._v("Hello from Docker!")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello from Docker! I have been seen {} times.\\n'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:5000'")]),s._v("\nHello from Docker"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" I have been seen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" times.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_9-experiment-with-some-other-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-experiment-with-some-other-commands"}},[s._v("#")]),s._v(" 9. Experiment with some other commands")]),s._v(" "),t("p",[s._v("You can pass the "),t("code",[s._v("-d")]),s._v(" flag ("),t("code",[s._v("detached")]),s._v(" mode ) to "),t("code",[s._v("docker compose up")]),s._v(" and use "),t("code",[s._v("docker compose ps")]),s._v(" to see what is currently running:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ docker compose up -d \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n$ docker compose "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\nNAME                                 COMMAND                  SERVICE             STATUS              PORTS\ndocker-compose-get-started-redis-1   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-entrypoint.s…"')]),s._v("   redis               running             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp\ndocker-compose-get-started-web-1     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"flask run"')]),s._v("              web                 running             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:5000-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("/tcp, :::5000-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("/tcp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("The "),t("code",[s._v("docker compose run")]),s._v(" command allows you to run one-off commands for your services. For example, to see what environment variables are available to the "),t("code",[s._v("web")]),s._v(" service")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ docker compose run web "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("If you started Compose with "),t("code",[s._v("docker compose up -d")]),s._v(", stop your services once you’ve finished with them")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ docker compose stop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("You can bring everything down, removing the containers entirely, with the "),t("code",[s._v("down")]),s._v(" command. Pass "),t("code",[s._v("--volumes")]),s._v(" to also remove the data volume used by the Redis container")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ docker compose down --volumes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[s._v("#")]),s._v(" Reference")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://docs.docker.com/compose/gettingstarted/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Get started with Docker Compose"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);