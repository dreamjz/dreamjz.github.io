(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{589:function(s,t,a){s.exports=a.p+"assets/img/1.eaed5415.png"},590:function(s,t,a){s.exports=a.p+"assets/img/2.91deb8ab.png"},591:function(s,t,a){s.exports=a.p+"assets/img/3.4a26ca0c.png"},701:function(s,t,a){"use strict";a.r(t);var n=a(5),i=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-题目描述"}},[s._v("#")]),s._v(" 1. 题目描述")]),s._v(" "),n("p",[s._v("已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次旋转之后，得到输入数组。")]),s._v(" "),n("p",[s._v("数组 "),n("code",[s._v("a[0], a[1], ..., a[n-1]")]),s._v(" 旋转一次之后为 "),n("code",[s._v("a[n-1], a[0], ..., a[n-2]")]),s._v(" 。")]),s._v(" "),n("p",[s._v("给一个元素值互不相同的数组 "),n("code",[s._v("nums")]),s._v(", 原来是一个升序排列的数组，并经过了若干次旋转，找出其中的最小元素。")]),s._v(" "),n("p",[s._v("必须设计一个时间复杂度为 "),n("em",[s._v("O(logn)")]),s._v(" 的算法解决此问题。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("示例 1：\n输入：nums = [3,4,5,1,2]\n输出：1\n解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。\n\n示例 2：\n输入：nums = [4,5,6,7,0,1,2]\n输出：0\n解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。\n\n示例 3：\n输入：nums = [11,13,15,17]\n输出：11\n解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"_2-题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-题解"}},[s._v("#")]),s._v(" 2. 题解")]),s._v(" "),n("h3",{attrs:{id:"_2-1-直接搜索"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-直接搜索"}},[s._v("#")]),s._v(" 2.1 直接搜索")]),s._v(" "),n("p",[s._v("因为原数组是有序的，在旋转之后，旋转部分和未旋转部分均为有序的，所以只要寻找两者的边界即可。")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("findMin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 直接搜索")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("当输入数组未进行旋转时，此时将遍历整个数组，时间复杂度为 "),n("em",[s._v("O(N)")]),s._v("。")]),s._v(" "),n("h3",{attrs:{id:"_2-2-二分查找"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-二分查找"}},[s._v("#")]),s._v(" 2.2 二分查找")]),s._v(" "),n("p",[s._v("题目要求使用 "),n("em",[s._v("O(logn)")]),s._v(" 的算法，首先想到的就是二分查找。此时需要分析数组中元素之间的关系。")]),s._v(" "),n("p",[s._v("在不含重复元素的升序数组在旋转之后，可以得到一个可视化折线图：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(589),alt:"fig1"}})]),s._v(" "),n("p",[s._v("设数组中的最后一个元素 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("x")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("x")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("x")])])])]),s._v(" :  在最小值右侧的元素，值一定严格小于 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("x")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("x")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("x")])])])]),s._v(" ；最小值左侧的元素，一定严格大于 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("msub",[n("mi",[s._v("x")]),n("mn",[s._v("0")])],1)],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("x_0")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.5806em","vertical-align":"-0.15em"}}),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathnormal"},[s._v("x")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[n("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[s._v("0")])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[n("span")])])])])])])])]),s._v("。可以根据这种性质通过二分法找出最小值。")]),s._v(" "),n("p",[s._v("在二分查找步骤中，设左边界为 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("l")]),n("mi",[s._v("o")]),n("mi",[s._v("w")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("low")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),n("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),n("span",{staticClass:"mord mathnormal"},[s._v("o")]),n("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02691em"}},[s._v("w")])])])]),s._v("，右边界为 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("h")]),n("mi",[s._v("i")]),n("mi",[s._v("g")]),n("mi",[s._v("h")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("high")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.8889em","vertical-align":"-0.1944em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("hi")]),n("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),n("span",{staticClass:"mord mathnormal"},[s._v("h")])])])]),s._v("，区间的中点为 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("p")]),n("mi",[s._v("i")]),n("mi",[s._v("v")]),n("mi",[s._v("o")]),n("mi",[s._v("t")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("pivot")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.854em","vertical-align":"-0.1944em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("p")]),n("span",{staticClass:"mord mathnormal"},[s._v("i")]),n("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),n("span",{staticClass:"mord mathnormal"},[s._v("o")]),n("span",{staticClass:"mord mathnormal"},[s._v("t")])])])]),s._v("，最小值在该区间内。将中轴元素 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("n")]),n("mi",[s._v("u")]),n("mi",[s._v("m")]),n("msub",[n("mi",[s._v("s")]),n("mrow",[n("mi",[s._v("p")]),n("mi",[s._v("i")]),n("mi",[s._v("v")]),n("mi",[s._v("o")]),n("mi",[s._v("t")])],1)],1)],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("nums_{pivot}")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.7167em","vertical-align":"-0.2861em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("n")]),n("span",{staticClass:"mord mathnormal"},[s._v("u")]),n("span",{staticClass:"mord mathnormal"},[s._v("m")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathnormal"},[s._v("s")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[n("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[n("span",{staticClass:"mord mathnormal mtight"},[s._v("p")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("i")]),n("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("o")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("t")])])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[n("span")])])])])])])])]),s._v(" 和 右边界元素 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("n")]),n("mi",[s._v("u")]),n("mi",[s._v("m")]),n("msub",[n("mi",[s._v("s")]),n("mrow",[n("mi",[s._v("h")]),n("mi",[s._v("i")]),n("mi",[s._v("g")]),n("mi",[s._v("h")])],1)],1)],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("nums_{high}")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.7167em","vertical-align":"-0.2861em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("n")]),n("span",{staticClass:"mord mathnormal"},[s._v("u")]),n("span",{staticClass:"mord mathnormal"},[s._v("m")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathnormal"},[s._v("s")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.3361em"}},[n("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[n("span",{staticClass:"mord mathnormal mtight"},[s._v("hi")]),n("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("h")])])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[n("span")])])])])])])])]),s._v(" 进行比较，会有三种情况：")]),s._v(" "),n("ul",[n("li",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("n")]),n("mi",[s._v("u")]),n("mi",[s._v("m")]),n("msub",[n("mi",[s._v("s")]),n("mrow",[n("mi",[s._v("p")]),n("mi",[s._v("i")]),n("mi",[s._v("v")]),n("mi",[s._v("o")]),n("mi",[s._v("t")])],1)],1),n("mo",[s._v("<")]),n("mi",[s._v("n")]),n("mi",[s._v("u")]),n("mi",[s._v("m")]),n("msub",[n("mi",[s._v("s")]),n("mrow",[n("mi",[s._v("h")]),n("mi",[s._v("i")]),n("mi",[s._v("g")]),n("mi",[s._v("h")])],1)],1)],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("nums_{pivot} < nums_{high}")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.8252em","vertical-align":"-0.2861em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("n")]),n("span",{staticClass:"mord mathnormal"},[s._v("u")]),n("span",{staticClass:"mord mathnormal"},[s._v("m")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathnormal"},[s._v("s")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[n("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[n("span",{staticClass:"mord mathnormal mtight"},[s._v("p")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("i")]),n("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("o")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("t")])])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[n("span")])])])])]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),n("span",{staticClass:"mrel"},[s._v("<")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.7167em","vertical-align":"-0.2861em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("n")]),n("span",{staticClass:"mord mathnormal"},[s._v("u")]),n("span",{staticClass:"mord mathnormal"},[s._v("m")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathnormal"},[s._v("s")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.3361em"}},[n("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[n("span",{staticClass:"mord mathnormal mtight"},[s._v("hi")]),n("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("h")])])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[n("span")])])])])])])])]),s._v(" ，说明 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("n")]),n("mi",[s._v("u")]),n("mi",[s._v("m")]),n("msub",[n("mi",[s._v("s")]),n("mrow",[n("mi",[s._v("p")]),n("mi",[s._v("i")]),n("mi",[s._v("v")]),n("mi",[s._v("o")]),n("mi",[s._v("t")])],1)],1)],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("nums_{pivot}")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.7167em","vertical-align":"-0.2861em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("n")]),n("span",{staticClass:"mord mathnormal"},[s._v("u")]),n("span",{staticClass:"mord mathnormal"},[s._v("m")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathnormal"},[s._v("s")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[n("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[n("span",{staticClass:"mord mathnormal mtight"},[s._v("p")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("i")]),n("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("o")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("t")])])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[n("span")])])])])])])])]),s._v(" 在最小值的右侧，忽略右侧部分，更新查找区间"),n("img",{attrs:{src:a(590),alt:"fig2"}})]),s._v(" "),n("li",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("n")]),n("mi",[s._v("u")]),n("mi",[s._v("m")]),n("msub",[n("mi",[s._v("s")]),n("mrow",[n("mi",[s._v("p")]),n("mi",[s._v("i")]),n("mi",[s._v("v")]),n("mi",[s._v("o")]),n("mi",[s._v("t")])],1)],1),n("mo",[s._v(">")]),n("mi",[s._v("n")]),n("mi",[s._v("u")]),n("mi",[s._v("m")]),n("msub",[n("mi",[s._v("s")]),n("mrow",[n("mi",[s._v("h")]),n("mi",[s._v("i")]),n("mi",[s._v("g")]),n("mi",[s._v("h")])],1)],1)],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("nums_{pivot} > nums_{high}")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.8252em","vertical-align":"-0.2861em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("n")]),n("span",{staticClass:"mord mathnormal"},[s._v("u")]),n("span",{staticClass:"mord mathnormal"},[s._v("m")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathnormal"},[s._v("s")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[n("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[n("span",{staticClass:"mord mathnormal mtight"},[s._v("p")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("i")]),n("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("o")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("t")])])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[n("span")])])])])]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),n("span",{staticClass:"mrel"},[s._v(">")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.7167em","vertical-align":"-0.2861em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("n")]),n("span",{staticClass:"mord mathnormal"},[s._v("u")]),n("span",{staticClass:"mord mathnormal"},[s._v("m")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathnormal"},[s._v("s")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.3361em"}},[n("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[n("span",{staticClass:"mord mathnormal mtight"},[s._v("hi")]),n("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("h")])])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[n("span")])])])])])])])]),s._v(" ，说明 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("n")]),n("mi",[s._v("u")]),n("mi",[s._v("m")]),n("msub",[n("mi",[s._v("s")]),n("mrow",[n("mi",[s._v("p")]),n("mi",[s._v("i")]),n("mi",[s._v("v")]),n("mi",[s._v("o")]),n("mi",[s._v("t")])],1)],1)],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("nums_{pivot}")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.7167em","vertical-align":"-0.2861em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("n")]),n("span",{staticClass:"mord mathnormal"},[s._v("u")]),n("span",{staticClass:"mord mathnormal"},[s._v("m")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathnormal"},[s._v("s")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[n("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[n("span",{staticClass:"mord mathnormal mtight"},[s._v("p")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("i")]),n("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("o")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("t")])])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[n("span")])])])])])])])]),s._v(" 在最小值的左侧，忽略左侧部分，更新查找区间"),n("img",{attrs:{src:a(591),alt:"fig3"}})]),s._v(" "),n("li",[s._v("因为数组不存在重复元素，并且只要当前区间长度不为 1，就不会出现 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("n")]),n("mi",[s._v("u")]),n("mi",[s._v("m")]),n("msub",[n("mi",[s._v("s")]),n("mrow",[n("mi",[s._v("p")]),n("mi",[s._v("i")]),n("mi",[s._v("v")]),n("mi",[s._v("o")]),n("mi",[s._v("t")])],1)],1),n("mo",[s._v("=")]),n("mi",[s._v("n")]),n("mi",[s._v("u")]),n("mi",[s._v("m")]),n("msub",[n("mi",[s._v("s")]),n("mrow",[n("mi",[s._v("h")]),n("mi",[s._v("i")]),n("mi",[s._v("g")]),n("mi",[s._v("h")])],1)],1)],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("nums_{pivot} = nums_{high}")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.7167em","vertical-align":"-0.2861em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("n")]),n("span",{staticClass:"mord mathnormal"},[s._v("u")]),n("span",{staticClass:"mord mathnormal"},[s._v("m")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathnormal"},[s._v("s")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[n("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[n("span",{staticClass:"mord mathnormal mtight"},[s._v("p")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("i")]),n("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("o")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("t")])])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[n("span")])])])])]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),n("span",{staticClass:"mrel"},[s._v("=")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.7167em","vertical-align":"-0.2861em"}}),n("span",{staticClass:"mord mathnormal"},[s._v("n")]),n("span",{staticClass:"mord mathnormal"},[s._v("u")]),n("span",{staticClass:"mord mathnormal"},[s._v("m")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathnormal"},[s._v("s")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.3361em"}},[n("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[n("span",{staticClass:"mord mathnormal mtight"},[s._v("hi")]),n("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),n("span",{staticClass:"mord mathnormal mtight"},[s._v("h")])])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[n("span")])])])])])])])]),s._v(" 的情况，所以只要区间长度为 1 时，就找到了最小值的位置")])]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("findMin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// binary search")]),s._v("\n    low"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" high "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" low "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" high "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        pivot "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("low "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" high"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pivot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("high"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            high "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pivot\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            low "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pivot "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("low"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[n("strong",[s._v("复杂度分析")])]),s._v(" "),n("ul",[n("li",[s._v("时间复杂度：时间复杂度 "),n("em",[s._v("O(logn)")]),s._v(" ，n 为数组长度，二分查找的过程中每次忽略一半的区间。")]),s._v(" "),n("li",[s._v("空间复杂度："),n("em",[s._v("O(1)")])])]),s._v(" "),n("h2",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[s._v("#")]),s._v(" Reference")]),s._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/",target:"_blank",rel:"noopener noreferrer"}},[s._v("153"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/xun-zhao-xuan-zhuan-pai-xu-shu-zu-zhong-5irwp/",target:"_blank",rel:"noopener noreferrer"}},[s._v("leetcode 题解"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);