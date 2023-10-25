const e=JSON.parse('{"key":"v-3d85221e","path":"/note/golang/open-source-books/the-way-to-go/04/04.2.html","title":"4.2 Go 程序的基本结构和要素","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"4.2.1 包的概念、导入与可见性","slug":"_4-2-1-包的概念、导入与可见性","link":"#_4-2-1-包的概念、导入与可见性","children":[{"level":3,"title":"包 Package","slug":"包-package","link":"#包-package","children":[]},{"level":3,"title":"标准库","slug":"标准库","link":"#标准库","children":[]},{"level":3,"title":"编译","slug":"编译","link":"#编译","children":[]},{"level":3,"title":"导入 Import","slug":"导入-import","link":"#导入-import","children":[]},{"level":3,"title":"可见性","slug":"可见性","link":"#可见性","children":[]}]},{"level":2,"title":"4.2.2 注释","slug":"_4-2-2-注释","link":"#_4-2-2-注释","children":[{"level":3,"title":"包注释","slug":"包注释","link":"#包注释","children":[]},{"level":3,"title":"文档注释","slug":"文档注释","link":"#文档注释","children":[]}]},{"level":2,"title":"4.2.3 类型转换","slug":"_4-2-3-类型转换","link":"#_4-2-3-类型转换","children":[{"level":3,"title":"自定义类型","slug":"自定义类型","link":"#自定义类型","children":[]}]}],"git":{"updatedTime":1684038853000},"readingTime":{"minutes":1.64,"words":492},"filePathRelative":"note/golang/open-source-books/the-way-to-go/04/04.2.md","excerpt":"<h1> 4.2 Go 程序的基本结构和要素</h1>\\n<h2> 4.2.1 包的概念、导入与可见性</h2>\\n<h3> 包 Package</h3>\\n<p>包是结构化代码的一种方式： 每个程序由包(package)组成，可使用自身的包或者导入其他包的内容。</p>\\n<p>必须在源文件的非注释第一行指明文件属于哪个包，如：<code>package main </code>。</p>\\n<h3> 标准库</h3>\\n<p>Golang 中可直接使用的包。</p>\\n<h3> 编译</h3>\\n<p>若对一个包进行修改或重新编译，所有引用了的此包的程序必须重新编译。</p>\\n<p>Golang 中的包采用显示依赖达到快速编译的目的，编译器从后缀名为<code>.o</code>的对象文件中提取传递依赖类型的信息。</p>"}');export{e as data};