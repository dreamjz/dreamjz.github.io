(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{780:function(e,t,s){"use strict";s.r(t);var a=s(5),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"protocol-buffer-basics-go"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#protocol-buffer-basics-go"}},[e._v("#")]),e._v(" Protocol Buffer Basics: Go")]),e._v(" "),s("p",[e._v("This tutorial provides a basic Go programmer’s introduction to working with protocol buffers, using the "),s("code",[e._v("proto3")]),e._v(" version of the protocol buffers language. By walking through creating a simple example application, it shows you how to")]),e._v(" "),s("ul",[s("li",[e._v("Define message formats in a "),s("code",[e._v(".proto")]),e._v(" file")]),e._v(" "),s("li",[e._v("Use the protocol buffer compiler")]),e._v(" "),s("li",[e._v("Use the Go protocol buffer API to write and read message")])]),e._v(" "),s("h2",{attrs:{id:"_1-why-use-protocol-buffers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-why-use-protocol-buffers"}},[e._v("#")]),e._v(" 1. Why use protocol buffers")]),e._v(" "),s("p",[e._v("The example we are going to use is a very simple “address book” application that can read and write people’s contact details to and from a file. Each person in the address book has a name, an ID, an email address, and a contact phone number.")]),e._v(" "),s("p",[e._v("How do you serialize and retrieve structured data like this? There are a few ways to solve this problem:")]),e._v(" "),s("ul",[s("li",[e._v("Use "),s("code",[e._v("gobs")]),e._v(" to serialize the Go data structures. This is good solution in a Go-specific environment, but it doesn’t work well if you need to share data with applications written for other platforms")]),e._v(" "),s("li",[e._v("You can invent an ad-hoc way to encode the data items into a single string - such as encoding 4 ints as “12:3:-23:67”. This is a simple and flexible approach, although it does require writing one-off encoding and parsing code, and the parsing impose a small run-time cost. This works best for encoding very simple data")]),e._v(" "),s("li",[e._v("Serialize the data to XML. This approach can be very attractive since XML is (sort of) human readable and there are binding libraries for lots of languages. This can be a good choice if you wan to share data with other applications/projects. However, XML is notoriously space intensive, and encoding/decoding it can impose a huge performance penalty on applications. Also, navigating an XML DOM tree is considerably more complicated than navigating simple fields in a class normally would be")])]),e._v(" "),s("p",[e._v("Protocol buffers are the flexible, efficient, automated solution to solve exactly this problem. With protocol buffers, you write a "),s("code",[e._v(".proto")]),e._v(" description of the data structure you wish to store. From that, the protocol buffer compiler creates a class that implements automatic encoding and parsing of the protocol buffer data with an efficient binary format. The generated class provides getters and setters for the fields that make up a protocol buffer and takes care of the details of reading and writing the protocol buffer as a unit. Importantly, the protocol buffer format supports the idea of extending the format over time in such a way that the code still read data encoded with the old format.")]),e._v(" "),s("h2",{attrs:{id:"_2-defining-your-protocol-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-defining-your-protocol-format"}},[e._v("#")]),e._v(" 2. Defining your protocol format")]),e._v(" "),s("p",[e._v("To create your address book application, you will need to start with a "),s("code",[e._v(".proto")]),e._v(" file. The definitions in a "),s("code",[e._v(".proto")]),e._v(" file are simple: you add a "),s("em",[e._v("message")]),e._v(" for each data structure you want to serialize, the specify a name and a type for each field in the message. In our example, the "),s("code",[e._v(".proto")]),e._v(" file that defines the message is "),s("code",[e._v("addressbook.proto")]),e._v(".")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v(".proto")]),e._v(" file starts with a package declaration, which helps to prevent naming conflicts between different projects.")]),e._v(" "),s("div",{staticClass:"language-protobuf line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-protobuf"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("syntax")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"proto3"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("package")]),e._v(" tutorial\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"google/protobuf/timestamp.proto"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("The "),s("code",[e._v("go_package")]),e._v(" option defines the import path of the package which will contain all the generated code for this file. The Go package name will be the last path component of the import path. For example, our example will use a package name of “tutorialpb”.")]),e._v(" "),s("div",{staticClass:"language-protobuf line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-protobuf"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("option")]),e._v(" go_pacakge "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"protobuffers"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 这里将生成的 go 文件和 proto 文件放在同一目录下 ")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Next, you have your message definitions. A message is just an aggregate containing a set of typed fields. Many standard simple data types are available as field types, including "),s("code",[e._v("bool")]),e._v(","),s("code",[e._v("int32")]),e._v(", "),s("code",[e._v("double")]),e._v(", and "),s("code",[e._v("string")]),e._v(". You can also add further structure to your messages by using other message types as field types.")]),e._v(" "),s("div",{staticClass:"language-protobuf line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-protobuf"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("message")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Person")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("int32")]),e._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Unique ID number for this person")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" email "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("PhoneType")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    MOBILE "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    HOME "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    WORK "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("message")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("PhoneNumber")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[e._v("PhoneType")]),e._v(" type "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("repeated")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[e._v("PhoneNumber")]),e._v(" phones "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[e._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("protobuf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Timestamp")]),e._v(" last_updated "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Our address book file is just one of these")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("message")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AddressBook")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("repeated")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[e._v("Person")]),e._v(" people "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br")])]),s("p",[e._v("In the above example, the "),s("code",[e._v("Person")]),e._v(" message contains "),s("code",[e._v("PhoneNumber")]),e._v(" messages, while the "),s("code",[e._v("AddressBook")]),e._v(" message contains "),s("code",[e._v("Person")]),e._v(" messages. You can even define message types nested inside other messages - as you can see, the "),s("code",[e._v("PhoneNumber")]),e._v(" type is defined inside "),s("code",[e._v("Person")]),e._v(". You can also define "),s("code",[e._v("enum")]),e._v(" types if you want one of your fields to have one of a predefined list of values - here you want to specify that a phone number can be one of "),s("code",[e._v("MOBILE")]),e._v(", "),s("code",[e._v("HOME")]),e._v(", or "),s("code",[e._v("WORK")]),e._v(".")]),e._v(" "),s("p",[e._v("The “=1”, “=2” markers on each element identify the unique “tag” that field uses in the binary encoding. Tag numbers 1-15 require one less byte to encode than higher numbers, so as an optimization you can decide to use those tags for the commonly used or repeated elements, leaving tags 16 and higher for less-commonly used optional elements. Each element in a repeated field requires re-encoding the tag number, so repeated fields are particularly good candidates for the optimization.")]),e._v(" "),s("p",[e._v("If a field value is not set, a default value is used: zero for numeric types, the empty string for strings, false for bools. For embedded messages, the default value is always the “default instance” or “prototype” of the message, which has none of its fields set. Calling the accessor to get the value of a field which has not been explicitly set always returns that field’s default value.")]),e._v(" "),s("p",[e._v("If a field is "),s("code",[e._v("repeated")]),e._v(", the field may be repeated any number of times (including zero). The order of the repeated values will be preserved in the protocol buffer. Think of repeated fields as dynamically sized arrays.")]),e._v(" "),s("p",[e._v("Do not go looking for facilities similar to class inheritance, though - protocol buffers don’t do that.")]),e._v(" "),s("h2",{attrs:{id:"_3-compiling-your-protocol-buffers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-compiling-your-protocol-buffers"}},[e._v("#")]),e._v(" 3. Compiling your protocol buffers")]),e._v(" "),s("p",[e._v("Now that you have a "),s("code",[e._v(".proto")]),e._v(", the next thing you need to do is generate the classes you will need to read and write "),s("code",[e._v("AddressBook")]),e._v(" (and hence "),s("code",[e._v("Person")]),e._v(" and "),s("code",[e._v("PhoneNumber")]),e._v(") messages. To do this, you need to run the protocol buffer compiler "),s("code",[e._v("protoc")]),e._v(" on your "),s("code",[e._v(".proto")]),e._v(":")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("If you haven’t installed the compiler, "),s("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("download the package"),s("OutboundLink")],1),e._v(" and follow the instructions in the README.")])]),e._v(" "),s("li",[s("p",[e._v("Run the following command to install the Go protocol buffers plugin:")])])]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("go "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" google.golang.org/protobuf/cmd/protoc-gen-go@latest\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The compiler plugin "),s("code",[e._v("protoc-gen-go")]),e._v(" will be installed in "),s("code",[e._v("$GIBIN")]),e._v(", defaulting to "),s("code",[e._v("$GOPATH/bin")]),e._v(". It must be in your "),s("code",[e._v("$PATH")]),e._v(" for the protocol compiler "),s("code",[e._v("protoc")]),e._v(" to find it.")]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[e._v("Now run the compiler, specifying the source directory (where your application’s source code lives - the current directory is used if you don’t provide a value), the destination directory (where you want the generated code to go; often the same as "),s("code",[e._v("$SRC_DIR")]),e._v("), and the path to you "),s("code",[e._v(".proto")]),e._v(". In this case, you would invoke:")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("protoc -I"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$SRC_DIR")]),e._v(" --go_out"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$DST_DIR")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$SRC_DIR")]),e._v("/addressbook.proto\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Because you want Go code, you use the "),s("code",[e._v("--go_out")]),e._v(" option - similar options are provided for other supported languages.")])])]),e._v(" "),s("p",[e._v("生成 code 之后需要安装 "),s("code",[e._v("google.golang.org/protobuf/proto")]),e._v(" 依赖")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("go get -u google.golang.org/protobuf/proto\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"_4-the-protocol-buffer-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-the-protocol-buffer-api"}},[e._v("#")]),e._v(" 4. The Protocol Buffer API")]),e._v(" "),s("p",[e._v("Generating "),s("code",[e._v("addressbook.pb.go")]),e._v(" gives you the following useful types:")]),e._v(" "),s("ul",[s("li",[e._v("An "),s("code",[e._v("AddressBook")]),e._v(" structure with a "),s("code",[e._v("People")]),e._v(" field")]),e._v(" "),s("li",[e._v("A "),s("code",[e._v("Person")]),e._v(" structure with fields for "),s("code",[e._v("Name")]),e._v(", "),s("code",[e._v("Id")]),e._v(", "),s("code",[e._v("Email")]),e._v(", and "),s("code",[e._v("Phones")])]),e._v(" "),s("li",[e._v("A "),s("code",[e._v("Person_PhoneNumber")]),e._v(" structure, with fields for "),s("code",[e._v("Number")]),e._v(" and "),s("code",[e._v("Type")])]),e._v(" "),s("li",[e._v("The type "),s("code",[e._v("Person_PhoneType")]),e._v(" and a value defined for each value in the "),s("code",[e._v("Person.PhoneType")]),e._v(" enum")])]),e._v(" "),s("p",[e._v("Here’s an example from the "),s("code",[e._v("list_people")]),e._v(" command’s unit tests of how you might create an instance of Person:")]),e._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[e._v("p "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":=")]),e._v(" pb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        Id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1234")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        Name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"John Doe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        Email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"jdoe@example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        Phones"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("pb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Person_PhoneNumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"555-4321"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" pb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Person_HOME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("h2",{attrs:{id:"_5-writing-a-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-writing-a-message"}},[e._v("#")]),e._v(" 5. Writing a Message")]),e._v(" "),s("p",[e._v("The whole purpose of using protocol buffers is to serialize your data so that it can be parsed elsewhere. In Go, you use the "),s("code",[e._v("proto")]),e._v(" library’s Marshal function to serialize your protocol buffer data. A pointer to a protocol buffer message’s "),s("code",[e._v("struct")]),e._v(" implements the "),s("code",[e._v("proto.Message")]),e._v(" interface. Calling "),s("code",[e._v("proto.Marshal")]),e._v(" returns the protocol buffer, encoded in its wire format. For example, we use this function in the "),s("code",[e._v("add_person")]),e._v(" command:")]),e._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[e._v("book "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("pb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("AddressBook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Write the new address book back to disk.")]),e._v("\nout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":=")]),e._v(" proto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Marshal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("nil")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Fatalln")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Failed to encode address book:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":=")]),e._v(" ioutil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("WriteFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("fname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0644")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("nil")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Fatalln")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Failed to write address book:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("h2",{attrs:{id:"_6-reading-a-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-reading-a-message"}},[e._v("#")]),e._v(" 6. Reading a Message")]),e._v(" "),s("p",[e._v("To parse an encoded message, you use the "),s("code",[e._v("proto")]),e._v(" library’s Unmarshal function. Calling this parses the data in "),s("code",[e._v("in")]),e._v(" as a protocol buffer and places the result in "),s("code",[e._v("book")]),e._v(". So to parse the file in the "),s("code",[e._v("list_people")]),e._v(" command, we use :")]),e._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Read the existing address book.")]),e._v("\nin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":=")]),e._v(" ioutil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ReadFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("fname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("nil")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Fatalln")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Error reading file:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\nbook "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("pb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("AddressBook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":=")]),e._v(" proto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Unmarshal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("nil")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Fatalln")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Failed to parse address book:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("h2",{attrs:{id:"_7-extending-a-protocol-buffer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-extending-a-protocol-buffer"}},[e._v("#")]),e._v(" 7. Extending a Protocol Buffer")]),e._v(" "),s("p",[e._v("Sooner or later after you release the code that uses your protocol buffer, you will undoubtedly want to “improve” the protocol buffer’s definition. If you want your new buffers to be backwards-compatible, and your old buffers to be forward-compatible - and you almost certainly do want this - then there are some rules you need to follow. In the new version of the protocol buffer:")]),e._v(" "),s("ul",[s("li",[e._v("you "),s("em",[e._v("must")]),e._v(" do not change the tag numbers of any existing fields")]),e._v(" "),s("li",[e._v("you "),s("em",[e._v("may")]),e._v(" delete fields")]),e._v(" "),s("li",[e._v("you "),s("em",[e._v("may")]),e._v(" add new fields but you must use fresh tag numbers (i.e. tag numbers that were never used in this protocol buffer, not even by deleted fields)")])]),e._v(" "),s("p",[e._v("(There are "),s("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3#updating",target:"_blank",rel:"noopener noreferrer"}},[e._v("some exceptions"),s("OutboundLink")],1),e._v(" to these rules, but they are rarely used.)")]),e._v(" "),s("p",[e._v("If you follow these rules, old code will happily read new messages and simply ignore any new fields. To the old code, singular fields that were deleted will simply have their default value, and deleted repeated fields will be empty. New code will also transparently read old messages.")]),e._v(" "),s("p",[e._v("However, keep in mind that new fields will not be present in old messages, so you will need to do something reasonable with the default value. A type-specific default value is used: for strings, the default value is empty string. For booleans, the default value is false. For numeric types, the default value is zero.")]),e._v(" "),s("h3",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/gotutorial",target:"_blank",rel:"noopener noreferrer"}},[e._v("Basics: Go"),s("OutboundLink")],1),e._v(" protocol buffer tutorial")])])])}),[],!1,null,null,null);t.default=n.exports}}]);