const e=JSON.parse('{"key":"v-3710e15e","path":"/note/golang/open-source-books/the-way-to-go/06/06.2.html","title":"6.2 函数参数与返回值","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"6.2.1 参数传递","slug":"_6-2-1-参数传递","link":"#_6-2-1-参数传递","children":[]},{"level":2,"title":"6.2.2 命名的返回值 named return variables","slug":"_6-2-2-命名的返回值-named-return-variables","link":"#_6-2-2-命名的返回值-named-return-variables","children":[]},{"level":2,"title":"6.2.3 空白符 (blank indentifier)","slug":"_6-2-3-空白符-blank-indentifier","link":"#_6-2-3-空白符-blank-indentifier","children":[]},{"level":2,"title":"6.2.4 改变外部变量 (outside variable)","slug":"_6-2-4-改变外部变量-outside-variable","link":"#_6-2-4-改变外部变量-outside-variable","children":[]}],"readingTime":{"minutes":1.78,"words":534},"filePathRelative":"note/golang/open-source-books/the-way-to-go/06/06.2.md","excerpt":"<h1> 6.2 函数参数与返回值</h1>\\n<h2> 6.2.1 参数传递</h2>\\n<p><strong>指针也是变量类型，有自己的地址和值，通常指针的值指向一个变量的地址。所以，按引用传递也是按值传递</strong>。</p>\\n<ul>\\n<li>按<strong>值传递</strong> (call by value)：调用函数时，实参会将其副本传递给函数的实参。对形参的修改不会影响到形参。</li>\\n<li>按<strong>引用传递</strong> (call by reference)：将实参的地址传给形参（指针类型），此时可以通过指针来对原参数进行修改。\\n<ul>\\n<li>传递指针（32位或64位）消耗一般小于副本</li>\\n<li>引用类型（slice, map, interface, channel) 默认使用引用传递（即使没有显式使用指针）</li>\\n</ul>\\n</li>\\n</ul>"}');export{e as data};
