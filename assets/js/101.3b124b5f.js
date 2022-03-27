(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{731:function(e,t,s){"use strict";s.r(t);var a=s(5),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[s("strong",[e._v("Thread-safety")]),e._v(": note that client-side RPC invocations and server-side RPC handlers are "),s("em",[e._v("thread-safe")]),e._v(" and are meant to be run on concurrent goroutines. But also note that for individual streams, incoming and outgoing data is bi-directional but serial; so e.g. "),s("em",[e._v("inidividual")]),e._v(" streams do not support concurrent reads or concurrent writes (but reads are safely concurrent with writes).")]),e._v(" "),s("h2",{attrs:{id:"_1-methods-on-generated-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-methods-on-generated-server"}},[e._v("#")]),e._v(" 1. Methods on generated server")]),e._v(" "),s("p",[e._v("On the server side, each "),s("code",[e._v("service Bar")]),e._v(" in the "),s("code",[e._v(".proto")]),e._v(" file results in the function:")]),e._v(" "),s("p",[s("code",[e._v("func RegisterBarService(s *grpc.Server, srv BarServer)")])]),e._v(" "),s("p",[e._v("The application can define a concrete implementation of the "),s("code",[e._v("BarServer")]),e._v(" interface and register it with a "),s("code",[e._v("gprc.Server")]),e._v(" instance (before starting the server instance) by using this function.")]),e._v(" "),s("h3",{attrs:{id:"_1-1-unary-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-unary-methods"}},[e._v("#")]),e._v(" 1.1 Unary methods")]),e._v(" "),s("p",[e._v("These methods have the following signature on the generated service interface:")]),e._v(" "),s("p",[s("code",[e._v("Foo(context.Context, *MsgA) (*MsgB, error)")])]),e._v(" "),s("p",[e._v("In this context, "),s("code",[e._v("MsgA")]),e._v(" is the protobuf message sent from the client, and "),s("code",[e._v("MsgB")]),e._v(" is the protobuf message sent back from the server.")]),e._v(" "),s("h3",{attrs:{id:"_1-2-server-streaming-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-server-streaming-methods"}},[e._v("#")]),e._v(" 1.2 Server-streaming methods")]),e._v(" "),s("p",[e._v("These methods have the following signature on the generated service interface:")]),e._v(" "),s("p",[s("code",[e._v("Foo(*MsgA, <ServiceName>_FooServer) error")])]),e._v(" "),s("p",[e._v("In this context, "),s("code",[e._v("MsgA")]),e._v(" is the single request from the client, and the "),s("code",[e._v("<ServiceName>_FooServer")]),e._v(" parameter represents the server-to-client stream of "),s("code",[e._v("MsgB")]),e._v(" messages.")]),e._v(" "),s("p",[s("code",[e._v("<ServiceName>_FooServer")]),e._v(" has an embedded "),s("code",[e._v("grpc.ServerStream")]),e._v(" and the following interface:")]),e._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ServiceName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("_FooServer "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("MsgB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("error")]),e._v("\n    grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ServerStream\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("The server-side handler can send a stream of protobuf messages to the client through this parameter’s "),s("code",[e._v("Send")]),e._v(" method. End-of-stream for the server-to-client stream is caused by the "),s("code",[e._v("return")]),e._v(" of the handler method.")]),e._v(" "),s("h3",{attrs:{id:"_1-3-client-streaming-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-client-streaming-methods"}},[e._v("#")]),e._v(" 1.3 Client-streaming methods")]),e._v(" "),s("p",[e._v("These methods have the following signature on the generated service interface:")]),e._v(" "),s("p",[s("code",[e._v("Foo(<ServiceName_FooServer) error")])]),e._v(" "),s("p",[e._v("In this context, "),s("code",[e._v("<SerivceName>_FooServer")]),e._v(" can be used both to read the client-to-server message stream and to send the single server response message.")]),e._v(" "),s("p",[s("code",[e._v("<ServiceName>_FooServer")]),e._v(" has an embedded "),s("code",[e._v("gprc.ServerStream")]),e._v(" and the following interface:")]),e._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ServiceName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("_FooServer "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("SendAndClose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("MsgA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("error")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Recv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("MsgB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ServerStream\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("The server-side handler can repeatedly call "),s("code",[e._v("Recv")]),e._v(" on this parameter in order to receive the full stream of messages from the client. "),s("code",[e._v("Recv")]),e._v(" returns "),s("code",[e._v("(nil, io.EOF)")]),e._v(" once it has reached the end of the stream. The single response message from the server is sent by calling the "),s("code",[e._v("SendAndClose")]),e._v(" method on this "),s("code",[e._v("<ServiceName>_FooServer")]),e._v(" parameter. Note that "),s("code",[e._v("SendAndClose")]),e._v(" must be called once and only once.")]),e._v(" "),s("h3",{attrs:{id:"_1-4-bidi-streaming-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-bidi-streaming-methods"}},[e._v("#")]),e._v(" 1.4 Bidi-streaming methods")]),e._v(" "),s("p",[e._v("These methods have the following signature on the generated service interface:")]),e._v(" "),s("p",[s("code",[e._v("Foo(<ServiceName>_FooServer) error")])]),e._v(" "),s("p",[e._v("In this context, "),s("code",[e._v("<ServiceName>_FooServer")]),e._v(" can be used to access both the client-to-server message stream and the server-to-client message stream. "),s("code",[e._v("<ServiceName>_FooServer")]),e._v(" has an embedded "),s("code",[e._v("gprc.ServerStream")]),e._v(" and the following interface:")]),e._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ServiceName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("_FooServer "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("MsgA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("error")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Recv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("MsgB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ServerStream\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("The server-side handler can repeatedly call "),s("code",[e._v("Recv")]),e._v(" on this parameter in order to read the client-to-server message stream. "),s("code",[e._v("Recv")]),e._v(" returns "),s("code",[e._v("(nil, io.EOF)")]),e._v(" once it has reached the end of the client-to-server stream. The response server-to-client message stream is sent by repeatedly calling the "),s("code",[e._v("Send")]),e._v(" method of on this "),s("code",[e._v("<ServiceName>_FooServer")]),e._v(" parameter. End-of-stream for the server-to-client stream is indicated by the "),s("code",[e._v("return")]),e._v(" of the bidi method handler.")]),e._v(" "),s("h1",{attrs:{id:"_2-methods-on-generated-client-interfaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-methods-on-generated-client-interfaces"}},[e._v("#")]),e._v(" 2. Methods on generated client interfaces")]),e._v(" "),s("p",[e._v("For client side usage, each "),s("code",[e._v("service Bar")]),e._v(" in the "),s("code",[e._v(".proto")]),e._v(" file also results in the function: "),s("code",[e._v("func BarClient(cc *grpc.ClientConn) BarClient")]),e._v(", which returns a concrete implementation  of the "),s("code",[e._v("BarClient")]),e._v(" interface (this concrete implementation also lives in the generated "),s("code",[e._v(".pb.go")]),e._v(" file).")]),e._v(" "),s("h3",{attrs:{id:"_2-1-unary-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-unary-methods"}},[e._v("#")]),e._v(" 2.1 Unary Methods")]),e._v(" "),s("p",[e._v("These methods have the following signature on the generated client stub:")]),e._v(" "),s("p",[s("code",[e._v("Foo(ctx context.Context, in *MsgA, opts ...grpc.CallOption) (*MsgB, error)")])]),e._v(" "),s("p",[e._v("In this context, "),s("code",[e._v("MsgA")]),e._v(" is the single request from client to server, and "),s("code",[e._v("MsgB")]),e._v(" contains the response sent back from the server.")]),e._v(" "),s("h3",{attrs:{id:"_2-2-server-streaming-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-server-streaming-methods"}},[e._v("#")]),e._v(" 2.2 Server-Streaming methods")]),e._v(" "),s("p",[e._v("These methods have the following signature on the generated client stub:")]),e._v(" "),s("p",[s("code",[e._v("Foo(ctx context.Context, in *MsgA, opts ...grpc.CallOption) (<ServiceName>_FooClient, error)")])]),e._v(" "),s("p",[e._v("In this context, "),s("code",[e._v("<ServiceName>_FooClient")]),e._v(" represents the server-to-client "),s("code",[e._v("stream")]),e._v(" of "),s("code",[e._v("MsgB")]),e._v(" messages.")]),e._v(" "),s("p",[e._v("This stream has an embedded "),s("code",[e._v("grpc.ClientStream")]),e._v(" and the following interface:")]),e._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ServiceName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("_FooClient "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Recv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("MsgB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    gprc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ClientStream\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("The stream begins when the client calls the "),s("code",[e._v("Foo")]),e._v(" method on the stub. The client can then repeatedly call the "),s("code",[e._v("Recv")]),e._v(" method on the returned "),s("code",[e._v("<ServiceName>_FooClient")]),e._v(" stream in order to read the server-to-client response stream. This "),s("code",[e._v("Recv")]),e._v(" method returns "),s("code",[e._v("(nil, io.EOF)")]),e._v(" once the server-to-client stream has been completely read through.")]),e._v(" "),s("h3",{attrs:{id:"_2-3-client-streaming-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-client-streaming-methods"}},[e._v("#")]),e._v(" 2.3 Client-Streaming methods")]),e._v(" "),s("p",[e._v("These methods have the following signature on the generated client stub:")]),e._v(" "),s("p",[s("code",[e._v("Foo(ctx context.Context,opts ...gprc.CallOption) (<ServiceName>_FooClient, error)")])]),e._v(" "),s("p",[e._v("In this context, "),s("code",[e._v("<ServiceName>_FooClient")]),e._v(" represents the client-to-server "),s("code",[e._v("stream")]),e._v(" of "),s("code",[e._v("MsgA")]),e._v(" messages.")]),e._v(" "),s("p",[s("code",[e._v("<ServiceName>_FooClient")]),e._v(" has an embedded "),s("code",[e._v("grpc.ClientStream")]),e._v(" and the following interface:")]),e._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ServiceName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("_FooClient "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("MsgA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("error")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("CloseAndRecv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("MsgB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ClientStream\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("The stream begins when the client calls the "),s("code",[e._v("Foo")]),e._v(" method on the stub. The client can then repeatedly call the "),s("code",[e._v("Send")]),e._v(" method on the returned "),s("code",[e._v("<ServiceName>_FooClient")]),e._v(" stream in order to send the client-to-server message stream. The "),s("code",[e._v("CloseAndRecv")]),e._v(" method on this stream must be called once and only once, in order to both close the client-to-server stream and receive the single response message from the server.")]),e._v(" "),s("h3",{attrs:{id:"_2-4-bidi-streaming-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-bidi-streaming-methods"}},[e._v("#")]),e._v(" 2.4 Bidi-Streaming methods")]),e._v(" "),s("p",[e._v("These methods have the following signature on the generated client stub:")]),e._v(" "),s("p",[s("code",[e._v("Foo(ctx context.Context, opts ...grpc.Option) (<ServiceName>_FooClient, error)")])]),e._v(" "),s("p",[e._v("In this context, "),s("code",[e._v("<ServiceName>_FooClient")]),e._v(" represents both the client-to-server and server-to-client message streams.")]),e._v(" "),s("p",[s("code",[e._v("<ServiceName>_FooClient")]),e._v(" has an embedded "),s("code",[e._v("grpc.ClientStream")]),e._v(" and the following interface:")]),e._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ServiceName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("_FooClient "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("MsgA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("error")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Recv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("MsgB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ClientStream\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("The stream begins when the client calls the "),s("code",[e._v("Foo")]),e._v(" method on the stub. The client can then repeatedly call the "),s("code",[e._v("Send")]),e._v(" method on the returned "),s("code",[e._v("<ServiceName>_FooClient")]),e._v(" stream in order to send the client-to-server message stream. The client can also repeatedly call "),s("code",[e._v("Recv")]),e._v(" on this stream in order to receive the full server-to-client message stream.")]),e._v(" "),s("p",[e._v("End-of-Stream for the server-to-client stream is indicated by a return value of "),s("code",[e._v("(nil, io.EOF)")]),e._v(" on the "),s("code",[e._v("Recv")]),e._v(" method of the stream. End-of-stream for the client-to-server stream can be indicated from the client by calling the "),s("code",[e._v("CloseSend")]),e._v(" method on the stream.")]),e._v(" "),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://grpc.io/docs/languages/go/generated-code/",target:"_blank",rel:"noopener noreferrer"}},[e._v("generated-code"),s("OutboundLink")],1),e._v(" gRPC docs")])])])}),[],!1,null,null,null);t.default=r.exports}}]);