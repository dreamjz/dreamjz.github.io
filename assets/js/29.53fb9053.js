(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{611:function(t,r,e){"use strict";e.r(r);var a=e(5),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_4-4-grpc-入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-grpc-入门"}},[t._v("#")]),t._v(" 4.4 gRPC 入门")]),t._v(" "),e("p",[t._v("gRPC 是 Google 基于 protocol buffers 开发的跨语言的开源 RPC 框架，基于 HTTP/2 协议设计，可以在一个 HTTP/2 链接上提供多个服务。")]),t._v(" "),e("h3",{attrs:{id:"_4-4-1-grpc-技术栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-grpc-技术栈"}},[t._v("#")]),t._v(" 4.4.1  gRPC 技术栈")]),t._v(" "),e("p",[e("img",{attrs:{src:"/image/golang/open-source-book/advanced-go-programming/ch4-1-grpc-go-stack.png",alt:"img"}})]),t._v(" "),e("center",[t._v("图 4-1 gRPC 技术栈")]),t._v(" "),e("p",[t._v("最底层为 TCP 或 Unix Socket 协议，之上是 HTTP/2  协议的实现，然后在 HTTP/2 协议之上构建针对 Golang 的 gRPC 核心库。应用程序通过 gRPC 插件生产的 Stub 代码和 gRPC 核心库通信，也可以直接和 gRPC 核心库通信")]),t._v(" "),e("h3",{attrs:{id:"_4-4-2-grpc-入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-2-grpc-入门"}},[t._v("#")]),t._v(" 4.4.2 gRPC 入门")]),t._v(" "),e("p",[t._v("若从 protobuf 的角度看， gRPC 不过是针对 service 接口生成代码的生成器。下面学习 gRPC 的基本用法。")]),t._v(" "),e("p",[t._v("创建 "),e("code",[t._v("hello.proto")]),t._v(", 定义 "),e("code",[t._v("HelloService")]),t._v(" 服务：")]),t._v(" "),e("div",{staticClass:"language-protobuf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-protobuf"}},[e("code")]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"})])],1)}),[],!1,null,null,null);r.default=s.exports}}]);