const e=JSON.parse('{"key":"v-126d5684","path":"/reading/algorithm/algorithms_in_c_part_1-4/02_data_structures/03.5.html","title":"Memory Allocation for Lists","lang":"zh-CN","frontmatter":{"title":"Memory Allocation for Lists","date":"2022-02-14T00:00:00.000Z","category":["algorithm","data structure"],"tag":["linked list"],"timeline":true},"headers":[{"level":2,"title":"1. List-processing interface","slug":"_1-list-processing-interface","link":"#_1-list-processing-interface","children":[]},{"level":2,"title":"2. Implementation","slug":"_2-implementation","link":"#_2-implementation","children":[]},{"level":2,"title":"3. List allocation for the Josephus problem","slug":"_3-list-allocation-for-the-josephus-problem","link":"#_3-list-allocation-for-the-josephus-problem","children":[]},{"level":2,"title":"Exercises","slug":"exercises","link":"#exercises","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":2.08,"words":625},"filePathRelative":"reading/algorithm/algorithms_in_c_part_1-4/02_data_structures/03.5.md","localizedDate":"2022年2月14日","excerpt":"<p>When we are calling <code>malloc</code> directly in applications such as <code>Program-3.9</code> or <code>3.11</code>, all the calls request memory blocks of the same size. This case is typical, and an alternate method of keeping track of memory available for allocation immediately suggests itself: Simply use a linked list. All nodes that are not on any list that is in use can be kept together on a single linked list. We refer to this list as the <em>free</em> list. When we need to allocate space for a node, we get it by <em>deleting it</em> from the <em>free</em> list; when we remove a node from any of our lists, we dispose of it by <em>inserting</em> it onto the free list.</p>"}');export{e as data};
