const e=JSON.parse('{"key":"v-53e31fe0","path":"/blog/golang/natural_sort.html","title":"How to sort file names naturally","lang":"zh-CN","frontmatter":{"title":"How to sort file names naturally","date":"2023-05-14T00:00:00.000Z","category":["golang"],"tag":["sort"],"sticky":9,"star":true},"headers":[{"level":2,"title":"1. Problem","slug":"_1-problem","link":"#_1-problem","children":[]},{"level":2,"title":"2. Natual Sort Order","slug":"_2-natual-sort-order","link":"#_2-natual-sort-order","children":[]},{"level":2,"title":"3. Implementations","slug":"_3-implementations","link":"#_3-implementations","children":[{"level":3,"title":"3.1 Using regular expression to separate number/string","slug":"_3-1-using-regular-expression-to-separate-number-string","link":"#_3-1-using-regular-expression-to-separate-number-string","children":[]},{"level":3,"title":"3.2 Using pointer/index to separate number/string","slug":"_3-2-using-pointer-index-to-separate-number-string","link":"#_3-2-using-pointer-index-to-separate-number-string","children":[]},{"level":3,"title":"3.3 Using pointer/index without separating number/string (Recommended)","slug":"_3-3-using-pointer-index-without-separating-number-string-recommended","link":"#_3-3-using-pointer-index-without-separating-number-string-recommended","children":[]},{"level":3,"title":"3.4 Simple test","slug":"_3-4-simple-test","link":"#_3-4-simple-test","children":[]}]},{"level":2,"title":"4. Benchmark","slug":"_4-benchmark","link":"#_4-benchmark","children":[{"level":3,"title":"4.1 Generate test set","slug":"_4-1-generate-test-set","link":"#_4-1-generate-test-set","children":[]},{"level":3,"title":"4.2 Benchmark","slug":"_4-2-benchmark","link":"#_4-2-benchmark","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"updatedTime":1699466504000},"readingTime":{"minutes":4.06,"words":1218},"filePathRelative":"blog/golang/natural_sort.md","localizedDate":"2023年5月14日","excerpt":"<h2> 1. Problem</h2>\\n<p>I recently wrote a tool <a href=\\"https://github.com/dreamjz/gomdtoc\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">gomdtoc</a> to generate a Table of Contents for my notes directory. In order to sort the file names, I used the  <code>sort.Strings()</code>.</p>\\n<p>But it not working as I expected, the problem is: it sorts the names <strong>alphabetically</strong>.</p>"}');export{e as data};
