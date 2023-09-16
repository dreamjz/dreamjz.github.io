const e=JSON.parse('{"key":"v-2c060bcc","path":"/note/golang/open-source-books/the-way-to-go/11/11.6.html","title":"11.6 使用方法集与接口","lang":"zh-CN","frontmatter":{},"headers":[],"readingTime":{"minutes":1.24,"words":373},"filePathRelative":"note/golang/open-source-books/the-way-to-go/11/11.6.md","excerpt":"<h1> 11.6 使用方法集与接口</h1>\\n<p>在接口上调用方法时，必须有和方法定义时相同的接收者类型或者是可以根据具体类型 <code>P</code> 直接辨识的：</p>\\n<ul>\\n<li>指针方法可以通过指针调用</li>\\n<li>值方法可以通过值调用</li>\\n<li>接收者是值的方法可以通过指针调用，因为指针会首先被解引用</li>\\n<li>接收者是指针的方法不可以通过值调用，因为存储在接口中的值没有地址</li>\\n</ul>\\n<p>将一个值赋值给一个接口时，编译器会确保所有可能的接口方法都可以在此值上被调用，因此不正确的赋值在编译期就会失败。</p>\\n<p>Go 语言规范定义了<strong>接口方法集</strong>的调用规则：</p>"}');export{e as data};