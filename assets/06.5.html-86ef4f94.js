const e=JSON.parse('{"key":"v-3c2f6b3b","path":"/note/golang/open-source-books/the-way-to-go/06/06.5.html","title":"6.5 内置函数","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1694632375000},"readingTime":{"minutes":1.01,"words":304},"filePathRelative":"note/golang/open-source-books/the-way-to-go/06/06.5.md","excerpt":"<h1> 6.5 内置函数</h1>\\n<p>Go 中无需导入可直接使用的函数</p>\\n<table>\\n<thead>\\n<tr>\\n<th>名称</th>\\n<th>说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>close()</code></td>\\n<td>用于管道通信</td>\\n</tr>\\n<tr>\\n<td><code>len()</code>、<code>cap()</code></td>\\n<td><code>len()</code> 用于返回某个类型的长度或数量（字符串、数组、切片、<code>map</code> 和管道）；<code>cap()</code> 是容量的意思，用于返回某个类型的最大容量（只能用于数组、切片和管道，不能用于 <code>map</code>）</td>\\n</tr>\\n<tr>\\n<td><code>new()</code>、<code>make()</code></td>\\n<td><code>new()</code> 和 <code>make()</code> 均是用于分配内存：<code>new()</code> 用于值类型和用户定义的类型，如自定义结构，<code>make</code> 用于内置引用类型（切片、<code>map</code> 和管道）。它们的用法就像是函数，但是将类型作为参数：<code>new(type)</code>、<code>make(type)</code>。<code>new(T)</code> 分配类型 <code>T</code> 的零值并返回其地址，也就是指向类型 <code>T</code> 的指针。它也可以被用于基本类型：<code>v := new(int)</code>。<code>make(T)</code> 返回类型 <code>T</code> 的初始化之后的值，因此它比 <code>new()</code> 进行更多的工作d。<strong><code>new()</code> 是一个函数，不要忘记它的括号</strong>。</td>\\n</tr>\\n<tr>\\n<td><code>copy()</code>、<code>append()</code></td>\\n<td>用于复制和连接切片</td>\\n</tr>\\n<tr>\\n<td><code>panic()</code>、<code>recover()</code></td>\\n<td>两者均用于错误处理机制</td>\\n</tr>\\n<tr>\\n<td><code>print()</code>、<code>println()</code></td>\\n<td>底层打印函数，在部署环境中建议使用 <code>fmt</code> 包</td>\\n</tr>\\n<tr>\\n<td><code>complex()</code>、<code>real ()</code>、<code>imag()</code></td>\\n<td>用于创建和操作复数</td>\\n</tr>\\n</tbody>\\n</table>"}');export{e as data};