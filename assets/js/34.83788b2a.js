(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{675:function(t,e,s){"use strict";s.r(e);var a=s(5),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("All the data that we process on computer ultimately decompose into individual bits, but writing programs that exclusively process bits would be tiresome indeed. "),s("em",[t._v("Types")]),t._v(" allow us to specify how we will use particular sets of bits and "),s("em",[t._v("functions")]),t._v(" allow us to specify the operations that we will perform on the data. We use C "),s("em",[t._v("structures")]),t._v(" to group together heterogeneous pieces of information, and we consider these basic C mechanisms, in the context of presenting a general approach to organizing our programs. Our primary goal is to lay the groundwork for the development, of the higher-level constructs that will serve as the basis for most of the algorithm in this book.")]),t._v(" "),s("p",[t._v("We write programs that process information derived from mathematical or natural-language descriptions of the world we live; accordingly, computing environments need to provide built-in support for the basic building blocks of such descriptions -- numbers and characters. In C, our programs are all built from just a few basic types of data:")]),t._v(" "),s("ul",[s("li",[t._v("Integers (ints)")]),t._v(" "),s("li",[t._v("Floating-point numbers (floats)")]),t._v(" "),s("li",[t._v("Characters (chars)")])]),t._v(" "),s("p",[t._v("It is customary to refer to these basic types by their C names -- int, float and char -- although we often use the generic terminology "),s("em",[t._v("integer, floating-point number,")]),t._v(" and "),s("em",[t._v("character")]),t._v(", as well. Characters are most often used in higher-level abstractions -- for example to make words and sentences.")]),t._v(" "),s("p",[t._v("We use a fixed number of bits to represent numbers, so ints are by necessity integers that fall within a specific range that depends on the number of bits that we use to represent them. Floating-point numbers approximate real numbers, and the number of bits that we use to represent them affects the precision with which we can approximate a real number. In C, we trade space for accuracy by choosing from among the types int, long int, or short int for integers and from among float or double for floating-point numbers. On most systems, these types correspond to underlying hardware representations. The number of bits used for the representation, and therefore the range of values (in the case of ints) or precision (in the case of floats), is machine-dependent, although C provides certain guarantees.")]),t._v(" "),s("h2",{attrs:{id:"_3-1-1-data-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-data-type"}},[t._v("#")]),t._v(" 3.1.1 Data Type")]),t._v(" "),s("p",[s("strong",[t._v("Definition 3.1")]),t._v(" "),s("em",[t._v("A")]),t._v(" "),s("strong",[t._v("data type")]),t._v(" "),s("em",[t._v("is a set of value and a collection of operations on those values")]),t._v(".")]),t._v(" "),s("p",[t._v("Operations are associated with types, not the other way around. When we perform an operation, we need to ensure that its operands and result are of the correct type. Neglecting this reponsibility is a common programming error. In some situations, C performs implicit type conversions; in other situations, we use "),s("em",[t._v("casts")]),t._v(", or explicit type conversions. For example, if x and N are integers, the expression:")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" N\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("includes both types of conversion: the "),s("code",[t._v("(float)")]),t._v(" is a cast that converts the value of "),s("code",[t._v("x")]),t._v(" to floating point; then an implicit conversion is performed for "),s("code",[t._v("N")]),t._v(" to make both arguments of the divide operator floating point, according to C’s rules for implicit type conversion.")]),t._v(" "),s("p",[t._v("Many of the operations associated with standard data types (for example, the arithmetic operations) are built into the C language. Other operations are found in the form of functions that are defined in standard function libraries; still others take form in the C functions that we define in our programs. That is, the concept of a data type is relevant not just to integer, floating point, and character built-in types. We often define our own data types, as an effective way of organizing our software. When we define a simple function in C, we are effectively creating a new data type, with the operation implemented by that function added to the operations defined for the types of data represented by its arguments. Indeed, in a sense, "),s("em",[t._v("each")]),t._v(" C program is a data type -- a list of sets of values (built-in or other types) and associated operations (functions). This point of view is perhaps too broad to be useful, but we shall see that narrowing our focus to understand our programs in terms of data types is valuable.")]),t._v(" "),s("h2",{attrs:{id:"_3-1-2-function-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-function-definition"}},[t._v("#")]),t._v(" 3.1.2 Function Definition")]),t._v(" "),s("p",[s("strong",[t._v("Program 3.1 Function definition")])]),t._v(" "),s("p",[t._v("The mechanism that we use in C to implement new operations on data is "),s("em",[t._v("function definition")]),t._v(".")]),t._v(" "),s("p",[t._v("All functions have a list of "),s("em",[t._v("arguments")]),t._v(" and possibly a "),s("em",[t._v("return value")]),t._v(". The function "),s("em",[t._v("lg")]),t._v(" here one argument and a return value, each of type int.")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")]),t._v(" ")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%7s %5s %7s\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"N"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lg(N)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"N*lg(N)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" N "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" N "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%7d %2d %9d\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" N "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" N "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" N "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("ul",[s("li",[s("code",[t._v("#inclue <stdio.h>")]),t._v(": references a system file that contains declarations of system functions such as "),s("code",[t._v("printf")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("int lg(int)")]),t._v(": the declaration of  function "),s("code",[t._v("lg")]),t._v(". The declaration is optional if the function is defined before it is used, as is the case with "),s("code",[t._v("main")]),t._v(". The declaration provides the information necessary for other functions to "),s("em",[t._v("call")]),t._v(" or "),s("em",[t._v("invoke")]),t._v(" the function, using  arguments of the proper type.")])]),t._v(" "),s("p",[t._v("One goal that we have when writing programs is to organize them such that they apply to as broad a variety of situations as possible. The reason for adopting such a goal is that it might put us in the position of being able to reuse an old program to solve a new problem, perhaps completely unrelated to the problem that the program was origianlly intended to solve.")]),t._v(" "),s("p",[t._v("First, by taking care to understand and to specify precisely which operations a program uses, we can easily extend it to any type of data for which we can support those operations.")]),t._v(" "),s("p",[t._v("Second, by taking care to understand and to specify precisely what a program dose, we can add the abstract operation that it performs to the operations at our disposal in solving new problems.")]),t._v(" "),s("h2",{attrs:{id:"_3-1-3-types-of-numbers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-types-of-numbers"}},[t._v("#")]),t._v(" 3.1.3 Types of Numbers")]),t._v(" "),s("p",[t._v("// TODO: complete it later 2022-01-21")])])}),[],!1,null,null,null);e.default=n.exports}}]);