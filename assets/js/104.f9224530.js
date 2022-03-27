(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{734:function(t,e,s){"use strict";s.r(e);var a=s(5),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("This guide gets you started with gRPC in Go with a simple working example.")]),t._v(" "),s("h2",{attrs:{id:"_1-prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-prerequisites"}},[t._v("#")]),t._v(" 1. Prerequisites")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Go")])]),t._v(" "),s("li",[s("p",[t._v("Protocol buffer compiler")])]),t._v(" "),s("li",[s("p",[t._v("Go plugins for the protocol compiler:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Install the protocol compiler plugins for Go using the following commands:")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ go "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" google.golang.org/protobuf/cmd/protoc-gen-go@v1.26\n$ go "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("Update your "),s("code",[t._v("PATH")]),t._v(" so that the "),s("code",[t._v("protoc")]),t._v(" compiler can find the plugins:")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PATH:'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("go "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" GOPATH"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('/bin"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])])])]),t._v(" "),s("h2",{attrs:{id:"_2-get-the-example-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-get-the-example-code"}},[t._v("#")]),t._v(" 2. Get the example code")]),t._v(" "),s("p",[t._v("The example code is part of the "),s("a",{attrs:{href:"https://github.com/grpc/grpc-go",target:"_blank",rel:"noopener noreferrer"}},[t._v("grpc-go"),s("OutboundLink")],1),t._v(" repo.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Download the repo as zip file and unzip it, or clone the repo:")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b v1.41.0 https://github.com/grpc/grpc-go\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("Change to the quick start example directory:")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" grpc-go/examples/helloworld\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-run-the-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-run-the-example"}},[t._v("#")]),t._v(" 3. Run the example")]),t._v(" "),s("p",[t._v("From the "),s("code",[t._v("examples/hellowrold")]),t._v(" directory:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Compile and execute the server code:")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ go run greeter_server/main.go\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("From the different terminal, compile and execute the client code to see the client output:")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ go run greeter_client/main.go\nGreeting: Hello world\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"_4-update-the-grpc-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-update-the-grpc-service"}},[t._v("#")]),t._v(" 4. Update the gRPC service")]),t._v(" "),s("p",[t._v("In this section you’ll update the application with an extra server method. The gRPC service is defined using protocol buffers. The server and client stub have a "),s("code",[t._v("SayHello()")]),t._v(" RPC method that takes a "),s("code",[t._v("HelloRequest")]),t._v(" parameter from the client and returns a "),s("code",[t._v("HelloReply")]),t._v(" from the server, and that the method is defined like this:")]),t._v(" "),s("div",{staticClass:"language-protobuf line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-protobuf"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The greeting service definition")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("service")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Greeter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rpc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloReply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The request message containing the user's name")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloRequest")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The response message containing the greetings")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloReply")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("Open "),s("code",[t._v("hellowordl/helloword.proto")]),t._v(" and add a new "),s("code",[t._v("SayHelloAgain")]),t._v(" method, with the same request and response types:")]),t._v(" "),s("div",{staticClass:"language-protobuf line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-protobuf"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The greeting service definition")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("service")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Greeter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sends a greeting")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rpc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloReply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sends another greeting")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rpc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHelloAgain")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloReply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"_5-regenerate-grpc-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-regenerate-grpc-code"}},[t._v("#")]),t._v(" 5. Regenerate gRPC code")]),t._v(" "),s("p",[t._v("Before you can use the new service method, you need to recompile the updated "),s("code",[t._v(".proto")]),t._v(" file.")]),t._v(" "),s("p",[t._v("While still in the "),s("code",[t._v("examples/helloworld")]),t._v(" directory, run the following command :")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ protoc --go_out"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(". --go_opt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("paths"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("source_relative "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --go-grpc_out"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(". --go-grpc_opt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("paths"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("source_relative "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    helloworld/helloworld.proto\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[s("code",[t._v("paths=source_relative")]),t._v(": the output file is placed in the same relative directory as the input file. For example, an input file "),s("code",[t._v("protos/buzz.proto")]),t._v(" results in an output file at "),s("code",[t._v("protos/buzz.pb.go")])])]),t._v(" "),s("p",[t._v("This will regenerate the "),s("code",[t._v("helloworld/helloworld.pb.go")]),t._v(" and "),s("code",[t._v("helloworld/helloworld_grpc.pb.go")]),t._v(" files, which contain:")]),t._v(" "),s("ul",[s("li",[t._v("Code for populating, serializing, and retrieving "),s("code",[t._v("HelloRequest")]),t._v(" and "),s("code",[t._v("HellReply")]),t._v(" message types")]),t._v(" "),s("li",[t._v("Generated client and server code")])]),t._v(" "),s("h2",{attrs:{id:"_6-update-and-run-the-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-update-and-run-the-application"}},[t._v("#")]),t._v(" 6. Update and run the application")]),t._v(" "),s("p",[t._v("You have regenerated server and client code, but you still need to implement and call the new method in the human-written parts of the example application.")]),t._v(" "),s("h3",{attrs:{id:"_6-1-update-the-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-update-the-server"}},[t._v("#")]),t._v(" 6.1 Update the server")]),t._v(" "),s("p",[t._v("Open "),s("code",[t._v("server/main.go")]),t._v(" and add the following function to it:")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SayHelloAgain implements helloworld.GreeterServer")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHelloAgain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HelloRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HelloReply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("pb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HelloReply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello again "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"_6-2-update-the-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-update-the-client"}},[t._v("#")]),t._v(" 6.2 Update the client")]),t._v(" "),s("p",[t._v("Open "),s("code",[t._v("client/main.go")]),t._v(" to add the following code to the end of the "),s("code",[t._v("main()")]),t._v(" function body:")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("\tr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHelloAgain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("pb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HelloRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatalf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"could not greet: %v"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Greeting: %s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("Run the server:")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ go run server/main.go\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("From another terminal, run the client.")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ go run clinet/main.go\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v("/12/29 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":38:25 Greeting: Hello world\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v("/12/29 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":38:25 Greeting: Hello again world\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://grpc.io/docs/languages/go/quickstart/",target:"_blank",rel:"noopener noreferrer"}},[t._v("quick_start"),s("OutboundLink")],1),t._v(" gRPC docs")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/reference/go-generated",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go Generated Code"),s("OutboundLink")],1),t._v(" protobuf docs")])])])}),[],!1,null,null,null);e.default=n.exports}}]);