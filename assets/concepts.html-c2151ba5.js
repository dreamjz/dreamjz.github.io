import{_ as o,Y as t,Z as r,$ as e,a0 as a,a1 as l,a2 as s,F as i}from"./framework-d955655f.js";const c={},d=s('<p><strong>哈希表</strong>是一种使用<strong>哈希函数</strong>组织数据，以支持快速插入和搜索的数据结构。</p><p>哈希表有两种不同类型：</p><ul><li><strong>哈希集合</strong>： <strong>集合</strong>数据结构的实现之一，用于存储非重复值</li><li><strong>哈希映射</strong>： <strong>映射</strong>数据结构的实现之一，用于存储 K, V 键值对</li></ul><h2 id="_1-哈希表原理" tabindex="-1"><a class="header-anchor" href="#_1-哈希表原理" aria-hidden="true">#</a> 1. 哈希表原理</h2><p>哈希表的关键思想是<strong>将键映射到存储桶</strong>：</p><ul><li>插入新键时，哈希函数决定该键应该分配到哪个桶里，并将该键存储在相应桶中。</li><li>搜索一个键时，哈希表将使用相同的哈希函数查找对应的桶，并只在特定的桶中进行搜索。</li></ul><p>例如，将 <code>H(k) = k mod 5</code> 作为哈希函数：</p><ul><li>插入：通过哈希函数解析键，将其映射到对应的桶中</li><li>搜索：通过相同的哈希函数解析键，并在对应的桶中搜索 <ul><li>若搜索 1987，则在桶 2 中进行搜索可以找到</li><li>若搜索 23，则在桶 3 中寻找，发现不在哈希表中</li></ul></li></ul><figure><img src="https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/09/06/screen-shot-2018-02-19-at-183537.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_2-设计哈希表" tabindex="-1"><a class="header-anchor" href="#_2-设计哈希表" aria-hidden="true">#</a> 2. 设计哈希表</h2><h3 id="_2-1-哈希函数" tabindex="-1"><a class="header-anchor" href="#_2-1-哈希函数" aria-hidden="true">#</a> 2.1 哈希函数</h3><p>哈希函数是哈希表最重要的组件，用于将键映射到特定的桶中。哈希函数将取决于<strong>键值的范围</strong>和<strong>桶的数量</strong>。</p><figure><img src="https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/05/04/screen-shot-2018-05-04-at-145454.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>哈希函数设计是一个开放问题，其思想是尽可能将键分配到桶中，理想情况下，完美的哈希函数是将键和桶之间进行一对一映射。</p><h3 id="_2-2-哈希冲突" tabindex="-1"><a class="header-anchor" href="#_2-2-哈希冲突" aria-hidden="true">#</a> 2.2 哈希冲突</h3><p>在大多数情况下，相同的键映射到相同的桶中，即哈希冲突，是不可避免的。此时需要一个解决冲突的算法，来解决以下问题：</p><ul><li>如何组织相同桶中的值</li><li>如何解决一个桶中的值过多的问题</li><li>如何在特定的桶中搜索目标值</li></ul><p>根据哈希函数，这些与<strong>桶的容量</strong>和<strong>键的数量</strong>有关。假设桶中存储了 N 个键，当 N 为常数且很小时，简单使用数组即可。若 N 是可变的或者非常大，此时需要其他数据结构如<strong>高度平衡二叉树</strong>来代替。</p><h2 id="_3-复杂度分析" tabindex="-1"><a class="header-anchor" href="#_3-复杂度分析" aria-hidden="true">#</a> 3. 复杂度分析</h2><p>若总共有 M 个键，哈希表很容易达到 <em>O(M)</em> 的空间复杂度。</p><p>但是时间复杂度和哈希表的设计有关，若使用<strong>数组</strong>来将值存储到一个桶中，理想情况下，桶的大小足够小时，可以看做常数，那么插入和搜索的时间复杂度为 <em>O(1)</em>。但是在最坏的情况下，桶的最大值为 <code>N</code>，插入时间复杂度为 <em>O(1)</em>，搜索时间复杂度为 <em>O(N)</em>。</p><p>一般内置哈希表的典型设计是：</p><ul><li>键值可以是任何 <strong>可哈希化的</strong> 类型，且具有 <strong>哈希码</strong>，将用于映射函数以获取存储区索引。</li><li>每个桶中包含一个 <strong>数组</strong>，用于在初始时将所有值存储在同一个桶中</li><li>如果在同一个桶中有太多值，这些值将会保存在 <strong>高度平衡二叉搜索树</strong>中，插入和搜多的平均时间复杂度为 <em>O(1)</em>，而最坏情况下，时间复杂度为 <em>O(logN)</em></li></ul><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',24),g={href:"https://leetcode-cn.com/leetbook/read/hash-table/x6sast/",target:"_blank",rel:"noopener noreferrer"};function h(p,u){const n=i("ExternalLinkIcon");return t(),r("div",null,[d,e("ol",null,[e("li",null,[a("[哈希表] ("),e("a",g,[a("https://leetcode-cn.com/leetbook/read/hash-table/x6sast/"),l(n)]),a(") leetbook")])])])}const _=o(c,[["render",h],["__file","concepts.html.vue"]]);export{_ as default};
