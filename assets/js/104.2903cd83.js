(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{764:function(s,t,a){"use strict";a.r(t);var e=a(5),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_4-2-protobuf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-protobuf"}},[s._v("#")]),s._v(" 4.2 Protobuf")]),s._v(" "),a("p",[s._v("Protobuf ( Protocol Buffer ) 是 Google 开发的数据描述语言，可以作为跨语言的 RPC")]),s._v(" "),a("p",[s._v("序列化数据格式。")]),s._v(" "),a("h3",{attrs:{id:"_4-2-1-protobuf-入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-protobuf-入门"}},[s._v("#")]),s._v(" 4.2.1 Protobuf 入门")]),s._v(" "),a("p",[s._v("下面将 Protobuf 和 RPC 结合在一起使用，通过 Protobuf 确保 RPC 的接口安全和规范。")]),s._v(" "),a("p",[s._v("首先创建 "),a("code",[s._v("hello.proto")]),s._v(" ，其中包装了 HelloService 服务中用到的字符串类型")]),s._v(" "),a("div",{staticClass:"language-protobuf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-protobuf"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("syntax")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proto3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("option")]),s._v(" go_pacakge "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../protobuffers"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需要指定 go package ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("message")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("syntax")]),s._v(" : “proto3” 表示采用 proto3 语法第三版的 Protobuf 对语言进行了简化，所有成员均采用零值初始化（不在支持自定义默认值），因此成员不需要支持 require 特性")]),s._v(" "),a("li",[a("code",[s._v("package")]),s._v(": “main” 指定当前包名, 可以自定义包路径和名称，这里和 Go 包名保持一致以简化代码")]),s._v(" "),a("li",[a("code",[s._v("option go_pacakge")]),s._v(": 决定生成文件的路径及文件包名")])]),s._v(" "),a("p",[s._v("在 XML 或 JSON 等数据描述语言中，一般通过成员名称绑定对应的数据。Protobuf 编码通过成员的唯一编号来绑定对应数据，因此 Protobuf 编码后的数据的体积比较小。")]),s._v(" "),a("p",[s._v("要将 "),a("code",[s._v(".proto")]),s._v(" 编译成 Go code，需要安装 protobuf 编译器和 Golang 插件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# protoc, 本人开发环境为 Manjaro 直接使用 pacman 安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S protoc\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装插件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github.com/golang/protobuf/protoc-gen-go 已经过时")]),s._v("\ngo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" google.golang.org/protobuf/cmd/protoc-gen-go@latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("生成 go code :")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("protoc --go_out"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(". hello.proto\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("引入 proto 依赖：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("go get -u google.golang.org/protobuf/proto\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("基于生成的代码，重新实现 HelloService 服务")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" rpc_objects\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pb "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rpc-and-protobuf/hello-protobuf/protobuffers"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" HelloService "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HelloService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reply "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("error")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\treply"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello: "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("其中的 Hello 方法的输入参数和输出参数均改用 Protobuf  定义的 User 类型表示，因为新的输入参数为结构体类型，因此改用指针类型作为输入参数。")]),s._v(" "),a("p",[s._v("至此，初步实现了 Protobuf 和 RPC 组合工作。但是在启动 RPC 服务时，依然可以选择 gob 或 json 编码，并未提现出 protobuf 的特性。在之前的示例中为 RPC 服务添加了安全保障，但是得到的代码本身需要非常繁琐的手工维护并且仅适用于 Golang 环境。")]),s._v(" "),a("p",[s._v("我们可以通过在 Protobuf 中定义 RPC 服务来生成 RPC 代码，避免了繁琐的人工维护。")]),s._v(" "),a("p",[s._v("下面在 "),a("code",[s._v("hello.proto")]),s._v("  中定义  "),a("code",[s._v("HelloService")]),s._v(" 服务")]),s._v(" "),a("div",{staticClass:"language-protobuf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-protobuf"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HelloService")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rpc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("但是直接重新生成的代码并未发生变化，因为 RPC 实现有很多，protoc 编译器并不直到如何生成服务代码。")]),s._v(" "),a("blockquote",[a("p",[s._v("不过在 "),a("code",[s._v("protoc-gen-go")]),s._v(" 中集成了 "),a("code",[s._v("grpc")]),s._v("  插件用于生成"),a("code",[s._v("gRPC")]),s._v(" 代码")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("protoc --go_out"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("grpc: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" hello.proto\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("p",[s._v("新的 "),a("code",[s._v("google.golang.org/protobuf/cmd/protoc-gen-go")]),s._v(" 不支持 gRpc 插件，需要使用 "),a("code",[s._v("google.golang.org/grpc/cmd/protoc-gen-go-grpc")]),s._v(" 来生成.")]),s._v(" "),a("p",[s._v("// TODO: 实现自定义的 protoc 插件")]),s._v(" "),a("ul",[a("li",[s._v("阅读 protoc 官方文档, 了解插件的实现原理")]),s._v(" "),a("li",[s._v("阅读相关博客进行实践")])]),s._v(" "),a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[s._v("#")]),s._v(" Reference")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://chai2010.cn/advanced-go-programming-book/ch4-rpc/ch4-02-pb-intro.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("4.2 Protobuf"),a("OutboundLink")],1),s._v(" Advanced Go Programming")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[s._v("protocol buffers"),a("OutboundLink")],1),s._v(" google docs")])])])}),[],!1,null,null,null);t.default=n.exports}}]);