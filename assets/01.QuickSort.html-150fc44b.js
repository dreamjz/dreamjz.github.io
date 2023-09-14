import{_ as r,Z as m,$ as k,a0 as n,a1 as s,a2 as a,a5 as l,a3 as e,H as c}from"./framework-09afcf0b.js";const d={},h=n("h2",{id:"_1-quick-sort",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-quick-sort","aria-hidden":"true"},"#"),s(" 1. Quick Sort")],-1),g={href:"https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm",target:"_blank",rel:"noopener noreferrer"},b=n("strong",null,"partition-exchange sort",-1),v=n("p",null,[n("strong",null,"时间复杂度(Time Complexity)"),s(":")],-1),f=n("ul",null,[n("li",null,[s("最坏(Worst-case): "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mi",null,"n"),n("mn",null,"2")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"n"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])]),n("span",{class:"mclose"},")")])])])]),n("li",null,[s("最好(Best-case): "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mi",null,"l"),n("mi",null,"o"),n("mi",null,"g"),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(nlogn)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])]),n("li",null,[s("平均(Average): "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mi",null,"l"),n("mi",null,"o"),n("mi",null,"g"),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(nlogn)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])])],-1),w=n("p",null,[n("strong",null,"空间复杂度(Space Complexity)"),s(":")],-1),_=n("ul",null,[n("li",null,[s("最坏(Worst-case): "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])]),n("li",null,[s("最好(Best-case): "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"l"),n("mi",null,"o"),n("mi",null,"g"),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(logn)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])]),n("li",null,[s("平均(Average): "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"l"),n("mi",null,"o"),n("mi",null,"g"),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(logn)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])])],-1),y=e('<h3 id="_1-1-流程" tabindex="-1"><a class="header-anchor" href="#_1-1-流程" aria-hidden="true">#</a> 1.1 流程</h3><ol><li>选取<strong>基准</strong>(pivot)</li><li><strong>分区(partition)</strong>: 将大于基准的元素放入其右边 小于的放入其左边; 分区结束后形成以<strong>基准</strong>为界, 形成左右分区</li><li>将左右分区**递归(recursive)**执行步骤1), 直到分区只剩下一个元素为止.</li></ol><figure><img src="https://www.runoob.com/wp-content/uploads/2019/03/quickSort.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_1-2-code" tabindex="-1"><a class="header-anchor" href="#_1-2-code" aria-hidden="true">#</a> 1.2 Code</h3>',4),x=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"sortArray"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"quickSort"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` nums
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"quickSort"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" right "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" left "),n("span",{class:"token operator"},"<"),s(" right "),n("span",{class:"token punctuation"},"{"),s(`
        pivot `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"partition"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"quickSort"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" pivot"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"quickSort"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" pivot"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"partition"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" right "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// random pivot"),s(`
    pi `),n("span",{class:"token operator"},":="),s(" rand"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Intn"),n("span",{class:"token punctuation"},"("),s("right"),n("span",{class:"token operator"},"-"),s("left"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(` left
    `),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" pi"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// move pivot to end"),s(`

    p `),n("span",{class:"token operator"},":="),s(" nums"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token comment"},"// pivot value"),s(`
    i`),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},":="),s(" left"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(` left
    `),n("span",{class:"token keyword"},"for"),s(" j "),n("span",{class:"token operator"},"<"),s(" right "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// move to left"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" nums"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" p "),n("span",{class:"token punctuation"},"{"),s(`
            i`),n("span",{class:"token operator"},"++"),s(`
            `),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},","),s(" j"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        j`),n("span",{class:"token operator"},"++"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// move pivot to middle"),s(`
    i`),n("span",{class:"token operator"},"++"),s(`
    `),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// pivot "),s(`
    `),n("span",{class:"token keyword"},"return"),s(` i    
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    nums`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=e('<h2 id="_2-three-way-radix-quicksort" tabindex="-1"><a class="header-anchor" href="#_2-three-way-radix-quicksort" aria-hidden="true">#</a> 2. Three-way Radix Quicksort</h2><blockquote><p><strong>Multi-key quicksort</strong>, also known as <strong>three-way radix quicksort</strong>.</p></blockquote><p>三路快速排序, 将数据分为三个分区(基准pivot):</p><ul><li>小于pivot</li><li>等于pivot</li><li>大于pivot</li></ul><p>可以避免某一区全部都是重复元素, 依然进行分区</p>',5),M=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"sortArray"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"quickSort"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` nums
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"quickSort"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" right "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" left "),n("span",{class:"token operator"},"<"),s(" right "),n("span",{class:"token punctuation"},"{"),s(`
        less`),n("span",{class:"token punctuation"},","),s(" great "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"partition"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"quickSort"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" less"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"quickSort"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" great"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"partition"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" right "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// random pivot"),s(`
    pi `),n("span",{class:"token operator"},":="),s(" rand"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Intn"),n("span",{class:"token punctuation"},"("),s("right"),n("span",{class:"token operator"},"-"),s("left"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(` left
    p `),n("span",{class:"token operator"},":="),s(" nums"),n("span",{class:"token punctuation"},"["),s("pi"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" pi"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// move to right"),s(`

    `),n("span",{class:"token comment"},"// partition"),s(`
    `),n("span",{class:"token comment"},"// three part"),s(`
    less `),n("span",{class:"token operator"},":="),s(` left 
    great `),n("span",{class:"token operator"},":="),s(` right
    idx `),n("span",{class:"token operator"},":="),s(` left
    `),n("span",{class:"token keyword"},"for"),s(" idx "),n("span",{class:"token operator"},"<="),s(" great "),n("span",{class:"token punctuation"},"{"),s(`
        ele `),n("span",{class:"token operator"},":="),s(" nums"),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token comment"},"// less part"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" ele "),n("span",{class:"token operator"},"<"),s(" p "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" idx"),n("span",{class:"token punctuation"},","),s(" less"),n("span",{class:"token punctuation"},")"),s(`
            less`),n("span",{class:"token operator"},"++"),s(`
            idx`),n("span",{class:"token operator"},"++"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(` 
        `),n("span",{class:"token comment"},"// great part"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" ele "),n("span",{class:"token operator"},">"),s(" p "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 从右边来的数字大小未知, 后序还需要比较"),s(`
            `),n("span",{class:"token comment"},"// idx 不动"),s(`
            `),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" idx"),n("span",{class:"token punctuation"},","),s(" great"),n("span",{class:"token punctuation"},")"),s(`
            great`),n("span",{class:"token operator"},"--"),s(` 
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// equals part"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" ele "),n("span",{class:"token operator"},"=="),s(" p "),n("span",{class:"token punctuation"},"{"),s(`
            idx`),n("span",{class:"token operator"},"++"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// less 和 great 指向分区边界外"),s(`
    `),n("span",{class:"token comment"},"// less-1, great+1 才是分区边界"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" less"),n("span",{class:"token punctuation"},","),s(` great
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    nums`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=e('<p><strong>注意</strong>:</p><ul><li><p><code>idx&lt;=grear</code>: 因为<code>great</code>实际指向下一个需要去比较的元素, 若改成<code>idx&lt;great</code>, 那么在两者相遇时就会结束循环, 从而<strong>漏掉</strong>一个元素.</p></li><li><p><code>great--</code>时, <code>idx</code>不能自增: 因为从 <code>great</code> 区来的元素其大小是未知的, 下一次循环需要再次判断. 所以交换元素到<code>great</code>区时, <code>idx</code>不动,</p></li><li><p><code>partition</code> 返回的<code>less</code> <code>great</code>不是边界, <code>less-1</code>, <code>great+1</code> 才是分区边界</p></li></ul><h2 id="_3-leetcode" tabindex="-1"><a class="header-anchor" href="#_3-leetcode" aria-hidden="true">#</a> 3. LeetCode</h2>',3),S={href:"https://leetcode.cn/problems/sort-an-array/",target:"_blank",rel:"noopener noreferrer"},j=n("ul",null,[n("li",null,"此问题的测试案例, 存在大量重复数据, 直接使用快速排序将超时."),n("li",null,"可以使用三路快排")],-1),L=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" Reference")],-1),C={href:"https://en.wikipedia.org/wiki/Quicksort#",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.runoob.com/w3cnote/quick-sort-2.html",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://en.wikipedia.org/wiki/Multi-key_quicksort",target:"_blank",rel:"noopener noreferrer"},A={href:"https://zhuanlan.zhihu.com/p/406976071",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.cn/problems/sort-an-array/",target:"_blank",rel:"noopener noreferrer"};function I(T,N){const t=c("ExternalLinkIcon"),o=c("CodeTabs");return m(),k("div",null,[h,n("blockquote",null,[n("p",null,[s("Quicksort is a "),n("a",g,[s("divide-and-conquer algorithm"),a(t)]),s(". It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called "),b,s(".")])]),v,f,w,_,y,a(o,{id:"74",data:[{title:"Golang"}]},{tab0:l(({title:i,value:p,isActive:u})=>[x]),_:1}),q,a(o,{id:"110",data:[{title:"Golang"}]},{tab0:l(({title:i,value:p,isActive:u})=>[M]),_:1}),O,n("p",null,[s("LeetCode: "),n("a",S,[s("912. 排序数组"),a(t)])]),j,L,n("ol",null,[n("li",null,[n("a",C,[s("https://en.wikipedia.org/wiki/Quicksort#"),a(t)])]),n("li",null,[n("a",z,[s("https://www.runoob.com/w3cnote/quick-sort-2.html"),a(t)])]),n("li",null,[n("a",Q,[s("https://en.wikipedia.org/wiki/Multi-key_quicksort"),a(t)])]),n("li",null,[n("a",A,[s("https://zhuanlan.zhihu.com/p/406976071"),a(t)])]),n("li",null,[n("a",B,[s("912. 排序数组"),a(t)])])])])}const E=r(d,[["render",I],["__file","01.QuickSort.html.vue"]]);export{E as default};
