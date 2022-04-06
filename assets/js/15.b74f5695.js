(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{589:function(s,t,n){s.exports=n.p+"assets/img/1.eaed5415.png"},590:function(s,t,n){s.exports=n.p+"assets/img/2.91deb8ab.png"},591:function(s,t,n){s.exports=n.p+"assets/img/3.4a26ca0c.png"},693:function(s,t,n){"use strict";n.r(t);var a=n(5),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-题目描述"}},[s._v("#")]),s._v(" 1. 题目描述")]),s._v(" "),a("p",[s._v("已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次旋转之后，得到输入数组。")]),s._v(" "),a("p",[s._v("数组 "),a("code",[s._v("a[0], a[1], ..., a[n-1]")]),s._v(" 旋转一次之后为 "),a("code",[s._v("a[n-1], a[0], ..., a[n-2]")]),s._v(" 。")]),s._v(" "),a("p",[s._v("给一个元素值互不相同的数组 "),a("code",[s._v("nums")]),s._v(", 原来是一个升序排列的数组，并经过了若干次旋转，找出其中的最小元素。")]),s._v(" "),a("p",[s._v("必须设计一个时间复杂度为 "),a("em",[s._v("O(logn)")]),s._v(" 的算法解决此问题。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("示例 1：\n输入：nums = [3,4,5,1,2]\n输出：1\n解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。\n\n示例 2：\n输入：nums = [4,5,6,7,0,1,2]\n输出：0\n解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。\n\n示例 3：\n输入：nums = [11,13,15,17]\n输出：11\n解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"_2-题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-题解"}},[s._v("#")]),s._v(" 2. 题解")]),s._v(" "),a("h3",{attrs:{id:"_2-1-直接搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-直接搜索"}},[s._v("#")]),s._v(" 2.1 直接搜索")]),s._v(" "),a("p",[s._v("因为原数组是有序的，在旋转之后，旋转部分和未旋转部分均为有序的，所以只要寻找两者的边界即可。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findMin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 直接搜索")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("当输入数组未进行旋转时，此时将遍历整个数组，时间复杂度为 "),a("em",[s._v("O(N)")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_2-2-二分查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-二分查找"}},[s._v("#")]),s._v(" 2.2 二分查找")]),s._v(" "),a("p",[s._v("题目要求使用 "),a("em",[s._v("O(logn)")]),s._v(" 的算法，首先想到的就是二分查找。此时需要分析数组中元素之间的关系。")]),s._v(" "),a("p",[s._v("在不含重复元素的升序数组在旋转之后，可以得到一个可视化折线图：")]),s._v(" "),a("p",[a("img",{attrs:{src:n(589),alt:"fig1"}})]),s._v(" "),a("p",[s._v("设数组中的最后一个元素 $x$ :  在最小值右侧的元素，值一定严格小于 $x$ ；最小值左侧的元素，一定严格大于 $x_0$。可以根据这种性质通过二分法找出最小值。")]),s._v(" "),a("p",[s._v("在二分查找步骤中，设左边界为 $low$，右边界为 $high$，区间的中点为 $pivot$，最小值在该区间内。将中轴元素 $nums_{pivot}$ 和 右边界元素 $nums_{high}$ 进行比较，会有三种情况：")]),s._v(" "),a("ul",[a("li",[s._v("$nums_{pivot} < nums_{high}$ ，说明 $nums_{pivot}$ 在最小值的右侧，忽略右侧部分，更新查找区间"),a("img",{attrs:{src:n(590),alt:"fig2"}})]),s._v(" "),a("li",[s._v("$nums_{pivot} > nums_{high}$ ，说明 $nums_{pivot}$ 在最小值的左侧，忽略左侧部分，更新查找区间"),a("img",{attrs:{src:n(591),alt:"fig3"}})]),s._v(" "),a("li",[s._v("因为数组不存在重复元素，并且只要当前区间长度不为 1，就不会出现 $nums_{pivot} = nums_{high}$ 的情况，所以只要区间长度为 1 时，就找到了最小值的位置")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findMin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// binary search")]),s._v("\n    low"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" high "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" low "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" high "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        pivot "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("low "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pivot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            high "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pivot\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            low "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pivot "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("low"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("strong",[s._v("复杂度分析")])]),s._v(" "),a("ul",[a("li",[s._v("时间复杂度：时间复杂度 "),a("em",[s._v("O(logn)")]),s._v(" ，n 为数组长度，二分查找的过程中每次忽略一半的区间。")]),s._v(" "),a("li",[s._v("空间复杂度："),a("em",[s._v("O(1)")])])]),s._v(" "),a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[s._v("#")]),s._v(" Reference")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/",target:"_blank",rel:"noopener noreferrer"}},[s._v("153"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/xun-zhao-xuan-zhuan-pai-xu-shu-zu-zhong-5irwp/",target:"_blank",rel:"noopener noreferrer"}},[s._v("leetcode 题解"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);