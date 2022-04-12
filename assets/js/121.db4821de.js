(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{780:function(e,s,t){"use strict";t.r(s);var a=t(5),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("gRPC can use protocol buffers as both its "),t("em",[e._v("Interface Definition Language")]),e._v(" ("),t("strong",[e._v("IDL")]),e._v(") and as its underlying message interchange format.")]),e._v(" "),t("h2",{attrs:{id:"_1-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-overview"}},[e._v("#")]),e._v(" 1. Overview")]),e._v(" "),t("p",[e._v("In gRPC, a client application can directly call a method on a server application on a different machine as if it were a local object, making it easier for you to create distributed applications and services. As in many RPC systems, gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types. On the server side, the server implements this interface and runs a gRPC server to handle client calls. On the client side, the client has a stub (referred to as just a client in some languages) that provides the same methods as the server.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/image/rpc/landing-2.svg",alt:"Concept Diagram"}})]),e._v(" "),t("p",[e._v("gRPC clients and servers can run and talk to each other in a variety of environments - from servers inside Google to your own desktop - and can be written in any of gRPC’s supported languages. So, for example, you can easily create a gRPC server in Java with clients in Go, Python, or Ruby.")]),e._v(" "),t("h2",{attrs:{id:"_2-working-with-protocol-buffers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-working-with-protocol-buffers"}},[e._v("#")]),e._v(" 2. Working with Protocol Buffers")]),e._v(" "),t("p",[e._v("By default, gRPC uses Protocol Buffers, Google’s mature open source mechanism for serializing structured data (although it can be used with other data formats such as JSON).")]),e._v(" "),t("p",[e._v("You define gRPC services in ordinary proto files, with RPC method parameters and return types specified as protocol buffer messages:")]),e._v(" "),t("div",{staticClass:"language-protobuf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-protobuf"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The greeter service definition.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("service")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Greeter")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Sends a greeting")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rpc")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("SayHello")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloReply")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The request message containing the user's name.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("message")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloRequest")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The response message containing the greetings")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("message")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloReply")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" message "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br")])]),t("p",[e._v("gRPC uses "),t("code",[e._v("protoc")]),e._v(" with a special gRPC plugin to generate code from your proto file: you get generated gRPC client and server code, as well as the regular protocol buffer code for populating, serializing, and retrieving your message types.")]),e._v(" "),t("p",[e._v("To learn more about protocol buffers, see the "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("protocol buffers documentation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"_3-core-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-core-concepts"}},[e._v("#")]),e._v(" 3. Core concepts")]),e._v(" "),t("h3",{attrs:{id:"_3-1-service-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-service-definition"}},[e._v("#")]),e._v(" 3.1 Service definition")]),e._v(" "),t("p",[e._v("Like many RPC systems, gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types. By default, gRPC uses protocol buffers as the "),t("em",[e._v("Interface Definition Language")]),e._v(" ("),t("strong",[e._v("IDL")]),e._v(") for describing both the service interface and the structure of the payload message. It is possible to use other alternatives if desired.")]),e._v(" "),t("div",{staticClass:"language-protobuf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-protobuf"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("service")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloService")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rpc")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("SayHello")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloResponse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("message")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloRequest")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" greeting "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("message")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloResponse")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" reply "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("p",[e._v("gRPC lets you define four kinds of service method:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Unary RPCs where the client sends a single request to the server and gets a single response back, just like a normal function call.")]),e._v(" "),t("div",{staticClass:"language-protobuf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-protobuf"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rpc")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("SayHello")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloResponse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("这里的定义方式有两种 "),t("code",[e._v("rpc SayHello(HelloRequest) returns (HelloResponse);")]),e._v(" 和")]),e._v(" "),t("p",[t("code",[e._v("rpc SayHello(HelloRequest) returns (HelloResponse){}")]),e._v(" ，在使用"),t("code",[e._v("option")]),e._v(" 时使用 "),t("code",[e._v("{}")]),e._v(" （例如 grpc-gateway translate the RESTful API into gRPC），不使用时两者是等价的")])]),e._v(" "),t("li",[t("p",[e._v("Server streaming RPCs where the client sends a request to the server and gets a stream to read a sequence of message back. The client reads from the returned stream until there are no more messages. gRPC guarantees message ordering within an individual RPC call")]),e._v(" "),t("div",{staticClass:"language-protobuf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-protobuf"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rpc")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("LotsOfReplies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("stream")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloResponse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Client streaming RPCs where the client writes a sequence of messages and sends them to the server, again using a provided stream. Once the client has finished writing the messages, it waits for the server to read them and return its response. Again gRPC guarantees message ordering within an individual RPC call.")]),e._v(" "),t("div",{staticClass:"language-protobuf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-protobuf"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rpc")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("LotsOfGreetings")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("stream")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloResponese")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Bidirectional streaming RPCs where both sides send a sequence of messages using a read-write stream. The two streams operate independently, so clients and servers can read and write in whatever order they like: for example, the server could wait to receive all the client messages before writing its response, or it could alternately read a message then write a message, or some other combination of reads and writes. The order of message in each stream is preserved.")]),e._v(" "),t("div",{staticClass:"language-protobuf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-protobuf"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rpc")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("BidiHello")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("stream")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("stream")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HelloResponse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])]),e._v(" "),t("h3",{attrs:{id:"_3-2-using-the-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-using-the-api"}},[e._v("#")]),e._v(" 3.2 Using the API")]),e._v(" "),t("p",[e._v("Starting from a service definition in a "),t("code",[e._v(".proto")]),e._v(" file, gRPC provides protocol buffer compiler plugins that generate client-and-server-side code. gRPC users typically call these APIs on the client side and implement the corresponding API on the server side.")]),e._v(" "),t("ul",[t("li",[e._v("On the server side, the server implements the methods declared by the service and runs a gRPC server to handle client calls. The gRPC infrastructure decodes incoming requests, executes service methods, and encodes service response.")]),e._v(" "),t("li",[e._v("On the client side, the client has a local object known as "),t("em",[e._v("stub")]),e._v(" (for some languages, the preferred term is "),t("em",[e._v("client")]),e._v(") that implements the same methods as the service. The client can then just call those methods on the local object, wrapping the parameters for the call in the appropriate protocol buffer message type - gRPC looks after sending the request(s) to the server and returning the server’s protocol buffer response(s).")])]),e._v(" "),t("h3",{attrs:{id:"_3-3-synchronous-vs-asynchronous"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-synchronous-vs-asynchronous"}},[e._v("#")]),e._v(" 3.3 Synchronous vs. asynchronous")]),e._v(" "),t("p",[e._v("Synchronous RPC calls that block until a response arrives from the server are the closest approximation to the abstraction of a procedure call that RPC aspires to. On the other hand, networks are inherently asynchronous and in many scenarios it’s useful to be able to start RPCs without blocking the current thread.")]),e._v(" "),t("p",[e._v("The gRPC programming API in most languages comes in both synchronous and asynchronous flavors.")]),e._v(" "),t("h2",{attrs:{id:"_4-rpc-life-cycle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-rpc-life-cycle"}},[e._v("#")]),e._v(" 4. RPC life cycle")]),e._v(" "),t("p",[e._v("In this section, you’ll take a closer look at what happens when a gRPC client calls a gRPC server method.")]),e._v(" "),t("h3",{attrs:{id:"_4-1-unary-rpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-unary-rpc"}},[e._v("#")]),e._v(" 4.1 Unary RPC")]),e._v(" "),t("p",[e._v("First consider the simplest type of RPC where the client sends a single request and gets back a single response.")]),e._v(" "),t("ol",[t("li",[e._v("Once the client calls a stub method, the server is notified that the RPC has been invoked with the client’s metadata for this call, the method name, and the specified deadline if applicable.")]),e._v(" "),t("li",[e._v("The server can then either send back its own initial metadata (which must be sent before any response)  straight away, or wait for the client’s request message. Which happens first, is application-specific.")]),e._v(" "),t("li",[e._v("Once the server has the client’s request message, it does whatever work is necessary to create and populate a response.")]),e._v(" "),t("li",[e._v("If the response status is OK, then the client gets the response, which completes the call on the client side.")])]),e._v(" "),t("h3",{attrs:{id:"_4-2-server-streaming-rpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-server-streaming-rpc"}},[e._v("#")]),e._v(" 4.2 Server streaming RPC")]),e._v(" "),t("p",[e._v("A server-streaming RPC is similar to a unary RPC, except that the server returns a stream of messages in response to a client’s request. After sending all its messages, the server’s status details (status code and optional status message) and optional trailing metadata are sent to the client. This completes processing on the server side. The client completes once it has all the server’s messages.")]),e._v(" "),t("h3",{attrs:{id:"_4-3-client-streaming-rpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-client-streaming-rpc"}},[e._v("#")]),e._v(" 4.3 Client streaming RPC")]),e._v(" "),t("p",[e._v("A client-streaming RPC is similar to a unary RPC, except that the client sends a stream of messages to the server instead of a single message. The server responds with a single message (along with its status details and optional trailing metadata), typically but not necessarily after it has received all the client’s messages.")]),e._v(" "),t("h3",{attrs:{id:"_4-4-bidirectional-streaming-rpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-bidirectional-streaming-rpc"}},[e._v("#")]),e._v(" 4.4 Bidirectional streaming RPC")]),e._v(" "),t("p",[e._v("In a bidirectional streaming RPC, the call is initiated by the client invoking the method and the server receiving the client metadata, method name, and deadline. The server can choose to send back its initial metadata or wait for the client to start streaming messages.")]),e._v(" "),t("p",[e._v("Client- and server-side stream processing is application specific. Since the two streams are independent, the client and server can read and write messages in any order. For example, a server can wait until it has received all of a client’s message before writing its messages, or the server and client can play “ping-pong” - the server gets a request, then sends back a response, then the client sends another request based on the response, and so on.")]),e._v(" "),t("h3",{attrs:{id:"_4-5-deadlines-timeouts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-deadlines-timeouts"}},[e._v("#")]),e._v(" 4.5 Deadlines/Timeouts")]),e._v(" "),t("p",[e._v("gRPC allows clients to specify how long they are willing to wait for an RPC to complete before the RPC is terminated with a "),t("code",[e._v("DEADLINE_EXCEEDED")]),e._v(" error. On the server side, the server can query to see if a particular RPC has timed out, or how much time is left to complete the RPC.")]),e._v(" "),t("p",[e._v("Specifying a deadline or timeout is language specific: some language APIs work in terms of timeouts (durations of time), and some language APIs work in terms of a deadline (a fixed point in time) and may or may not have a default deadline.")]),e._v(" "),t("h3",{attrs:{id:"_4-6-rpc-termination"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-rpc-termination"}},[e._v("#")]),e._v(" 4.6 RPC termination")]),e._v(" "),t("p",[e._v("In gRPC, both the client and server make independent and local determinations of the success of the call, and their conclusions may not match. This means that, for example, you could have an RPC that finishes successfully on the server side (“I have sent all my response!”). It’s also possible for a server to decide to complete before a client has sent all its requests.")]),e._v(" "),t("h3",{attrs:{id:"_4-6-cancelling-an-rpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-cancelling-an-rpc"}},[e._v("#")]),e._v(" 4.6 Cancelling an RPC")]),e._v(" "),t("p",[e._v("Either the client or the server can cancel an RPC at any time. A cancellation termiates the RPC immediately so that no further work is done.")]),e._v(" "),t("blockquote",[t("p",[e._v("Warning")]),e._v(" "),t("p",[e._v("Changes made before a cancellation are not rolled back.")])]),e._v(" "),t("h3",{attrs:{id:"_4-7-metadata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-metadata"}},[e._v("#")]),e._v(" 4.7 Metadata")]),e._v(" "),t("p",[e._v("Meatadata is information about a particular RPC call (such as"),t("a",{attrs:{href:"https://grpc.io/docs/guides/auth/",target:"_blank",rel:"noopener noreferrer"}},[e._v("authentication details"),t("OutboundLink")],1),e._v(" ) in the form of a list of key-value paris, where the keys are strings and the values are typically strings, but can be binary data. Metadata is opaque to gRPC itself - it lets the client provide information associated with the call to the server and vice versa.")]),e._v(" "),t("p",[e._v("Access to metadata is language dependent.")]),e._v(" "),t("h3",{attrs:{id:"_4-8-channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-channels"}},[e._v("#")]),e._v(" 4.8 Channels")]),e._v(" "),t("p",[e._v("A gRPC channel provides a connection to a gRPC server on a specified host and port. It is used when creating a client stub. Clients can specify channel arguments to modify gRPC’s default behavior, such as switching message compression on or off. A channel has state, including "),t("code",[e._v("connected")]),e._v(" and "),t("code",[e._v("idle")]),e._v(".")]),e._v(" "),t("p",[e._v("How gRPC deals with closing a channel is language dependent. Some languages also permit querying channel state.")]),e._v(" "),t("h2",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://grpc.io/docs/what-is-grpc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction"),t("OutboundLink")],1),e._v(" gRPC docs")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://stackoverflow.com/questions/30106667/grpc-protobuf-3-syntax-what-is-the-difference-between-rpc-lines-that-end-with-s",target:"_blank",rel:"noopener noreferrer"}},[e._v("difference between rpc lines end with semicolon vs ‘{}’"),t("OutboundLink")],1),e._v(" stackoverflow")])])])}),[],!1,null,null,null);s.default=n.exports}}]);