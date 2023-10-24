import{_ as i,Z as e,$ as a,a3 as n}from"./framework-09afcf0b.js";const o={},s=n(`<h2 id="_1-aof" tabindex="-1"><a class="header-anchor" href="#_1-aof" aria-hidden="true">#</a> 1. AOF</h2><p><strong>AOF(<em>Append Only File</em>)</strong> 持久化功能，<strong>注意只会记录写操作命令，读操作命令是不会被记录的</strong>。</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/6f0ab40396b7fc2c15e6f4487d3a0ad7.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在 Redis 中 AOF 持久化功能默认是不开启的，需要我们修改 <code>redis.conf</code> 配置文件中的以下参数：</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/0e2d081af084c41802c7b5de8aa41bd4.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>以「<em>set name xiaolin</em>」命令作为例子，Redis 执行了这条命令后，记录在 AOF 日志里的内容如下图：</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/337021a153944fd0f964ca834e34d0f2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>「<code>*3</code>」表示当前命令有三个部分，每部分都是以「<code>$+数字</code>」开头，后面紧跟着具体的命令、键或值。然后，这里的「<code>数字</code>」表示这部分中的命令、键或值一共有多少字节。例如，「<code>$3 set</code>」表示这部分有 3 个字节，也就是「<code>set</code>」命令这个字符串的长度。</p><h3 id="先执行写命令再记录-aof-的好处" tabindex="-1"><a class="header-anchor" href="#先执行写命令再记录-aof-的好处" aria-hidden="true">#</a> 先执行写命令再记录 AOF 的好处</h3><ul><li><p><strong>避免额外的检查开销</strong></p><p>因为如果先将写操作命令记录到 AOF 日志里，再执行该命令的话，如果当前的命令语法有问题，那么如果不进行命令语法检查，该错误的命令记录到 AOF 日志里后，Redis 在使用日志恢复数据时，就可能会出错。</p><p>而如果先执行写操作命令再记录日志的话，只有在该命令执行成功后，才将命令记录到 AOF 日志里，这样就不用额外的检查开销，保证记录在 AOF 日志里的命令都是可执行并且正确的</p></li><li><p><strong>不会阻塞当前写操作命令的执行</strong>，因为当写操作命令执行成功后，才会将命令记录到 AOF 日志。</p></li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>执行写操作命令和记录日志是两个过程，那当 Redis 在还没来得及将命令写入到硬盘时，服务器发生宕机了，这个数据就会有<strong>丢失的风险</strong></li><li>由于写操作命令执行成功后才记录到 AOF 日志，所以不会阻塞当前写操作命令的执行，但是<strong>可能会给「下一个」命令带来阻塞风险</strong>。</li></ul><h3 id="三种回写策略" tabindex="-1"><a class="header-anchor" href="#三种回写策略" aria-hidden="true">#</a> 三种回写策略</h3><p>Redis 写入 AOF 日志的过程，如下图：</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/4eeef4dd1bedd2ffe0b84d4eaa0dbdea.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>Redis 执行完写操作命令后，会将命令追加到 <code>server.aof_buf</code> 缓冲区；</li><li>然后通过 write() 系统调用，将 aof_buf 缓冲区的数据写入到 AOF 文件，此时数据并没有写入到硬盘，而是拷贝到了内核缓冲区 page cache，等待内核将数据写入硬盘；</li><li>具体内核缓冲区的数据什么时候写入到硬盘，由内核决定。</li></ol><p>Redis 提供了 3 种写回硬盘的策略，在 <code>redis.conf</code> 配置文件中的 <code>appendfsync</code> 配置项可以有以下 3 种参数可填：</p><ul><li><strong>Always</strong>，这个单词的意思是「总是」，所以它的意思是每次写操作命令执行完后，同步将 AOF 日志数据写回硬盘；</li><li><strong>Everysec</strong>，这个单词的意思是「每秒」，所以它的意思是每次写操作命令执行完后，先将命令写入到 AOF 文件的内核缓冲区，然后每隔一秒将缓冲区里的内容写回到硬盘；</li><li><strong>No</strong>，意味着不由 Redis 控制写回硬盘的时机，转交给操作系统控制写回的时机，也就是每次写操作命令执行完后，先将命令写入到 AOF 文件的内核缓冲区，再由操作系统决定何时将缓冲区内容写回硬盘。</li></ul><p>这 3 种写回策略都无法能完美解决「主进程阻塞」和「减少数据丢失」的问题，因为两个问题是对立的，偏向于一边的话，就会要牺牲另外一边，原因如下：</p><ul><li>Always 策略的话，可以最大程度保证数据不丢失，但是由于它每执行一条写操作命令就同步将 AOF 内容写回硬盘，所以是不可避免会影响主进程的性能；</li><li>No 策略的话，是交由操作系统来决定何时将 AOF 日志内容写回硬盘，相比于 Always 策略性能较好，但是操作系统写回硬盘的时机是不可预知的，如果 AOF 日志内容没有写回硬盘，一旦服务器宕机，就会丢失不定数量的数据。</li><li>Everysec 策略的话，是折中的一种方式，避免了 Always 策略的性能开销，也比 No 策略更能避免数据丢失，当然如果上一秒的写操作命令日志没有写回到硬盘，发生了宕机，这一秒内的数据自然也会丢失</li></ul><p>所以需要根据业务场景进行选择：</p><ul><li>如果要高性能，就选择 No 策略；</li><li>如果要高可靠，就选择 Always 策略；</li><li>如果允许数据丢失一点，但又想性能高，就选择 Everysec 策略。</li></ul><figure><img src="https://cdn.xiaolincoding.com//mysql/other/98987d9417b2bab43087f45fc959d32a.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>实际上三种策略只是在控制<code>fsync()</code>函数的调用时机。</p><p>当应用程序向文件写入数据时，内核通常先将数据复制到内核缓冲区中，然后排入队列，然后由内核决定何时写入硬盘。</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/f64829ffc2e9e006b090f9aae51035ee.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果想要应用程序向文件写入数据后，能立马将数据同步到硬盘，就可以调用 <code>fsync()</code> 函数，这样内核就会将内核缓冲区的数据直接写入到硬盘，等到硬盘写操作完成后，该函数才会返回。</p><ul><li>Always 策略就是每次写入 AOF 文件数据后，就执行 fsync() 函数；</li><li>Everysec 策略就会创建一个异步任务来执行 fsync() 函数；</li><li>No 策略就是永不执行 fsync() 函数</li></ul><h3 id="aof-重写" tabindex="-1"><a class="header-anchor" href="#aof-重写" aria-hidden="true">#</a> AOF 重写</h3><p>AOF 日志是一个文件，随着执行的写操作命令越来越多，文件的大小会越来越大。</p><p>如果当 AOF 日志文件过大就会带来性能问题，比如重启 Redis 后，需要读 AOF 文件的内容以恢复数据，如果文件过大，整个恢复的过程就会很慢。</p><p>所以，Redis 为了避免 AOF 文件越写越大，提供了 <strong>AOF 重写机制</strong>，当 AOF 文件的大小超过所设定的阈值后，Redis 就会启用 AOF 重写机制，来压缩 AOF 文件。</p><p>AOF 重写机制是在重写时，读取当前数据库中的所有键值对，然后将每一个键值对用一条命令记录到「新的 AOF 文件」，等到全部记录完后，就将新的 AOF 文件替换掉现有的 AOF 文件。</p><p>举个例子，在没有使用重写机制前，假设前后执行了「<em>set name xiaolin</em>」和「<em>set name xiaolincoding</em>」这两个命令的话，就会将这两个命令记录到 AOF 文件。</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/723d6c580c05400b3841bc69566dd61b.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>但是<strong>在使用重写机制后，就会读取 name 最新的 value（键值对） ，然后用一条 「set name xiaolincoding」命令记录到新的 AOF 文件</strong>，之前的第一个命令就没有必要记录了，因为它属于「历史」命令，没有作用了。这样一来，一个键值对在重写日志中只用一条命令就行了。</p><p>重写工作完成后，就会将新的 AOF 文件覆盖现有的 AOF 文件，这就相当于压缩了 AOF 文件，使得 AOF 文件体积变小了。</p><p>然后，在通过 AOF 日志恢复数据时，只用执行这条命令，就可以直接完成这个键值对的写入了。</p><p>AOF 重写的核心在于，尽管某个键值对被多条写命令反复修改，<strong>最终也只需要根据这个「键值对」当前的最新状态，然后用一条命令去记录键值对</strong>，代替之前记录这个键值对的多条命令，这样就减少了 AOF 文件中的命令数量。最后在重写工作完成后，将新的 AOF 文件覆盖现有的 AOF 文件。</p><p>AOF 重写使用新文件，而不是直接修改原始文件，是为了避免 AOF 重写失败导致原始文件被污染。</p><h4 id="后台重写" tabindex="-1"><a class="header-anchor" href="#后台重写" aria-hidden="true">#</a> 后台重写</h4><p>写入 AOF 日志的操作虽然是在主进程完成的，因为它写入的内容不多，所以一般不太影响命令的操作。</p><p>但是在触发 AOF 重写时，比如当 AOF 文件大于 64M 时，就会对 AOF 文件进行重写，这时是需要读取所有缓存的键值对数据，并为每个键值对生成一条命令，然后将其写入到新的 AOF 文件，重写完后，就把现在的 AOF 文件替换掉。</p><p>这个过程其实是很耗时的，所以重写的操作不能放在主进程里。</p><p>Redis 的<strong>重写 AOF 过程是由后台子进程 *bgrewriteaof* 来完成的</strong>，这么做可以达到两个好处：</p><ul><li>子进程进行 AOF 重写期间，主进程可以继续处理命令请求，从而避免阻塞主进程；</li><li>子进程带有主进程的数据副本，这里使用子进程而不是线程，因为如果是使用线程，多线程之间会共享内存，那么在修改共享内存数据的时候，需要通过加锁来保证数据的安全，而这样就会降低性能。而使用子进程，创建子进程时，父子进程是共享内存数据的，不过这个共享的内存只能以只读的方式，而当父子进程任意一方修改了该共享内存，就会发生「写时复制」，于是父子进程就有了独立的数据副本，就不用加锁来保证数据安全。</li></ul><p>主进程在通过 <code>fork</code> 系统调用生成 bgrewriteaof 子进程时，操作系统会把主进程的「<strong>页表</strong>」复制一份给子进程，这个页表记录着虚拟地址和物理地址映射关系，而不会复制物理内存，也就是说，两者的虚拟空间不同，但其对应的物理空间是同一个。</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/5a1f2a90b5f3821c19bea3b7a5f27fa1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这样一来，子进程就共享了父进程的物理内存数据了，这样能够<strong>节约物理内存资源</strong>，页表对应的页表项的属性会标记该物理内存的权限为<strong>只读</strong>。</p><p>当父进程或者子进程在向这个内存发起写操作时，CPU 就会触发<strong>写保护中断</strong>，这个写保护中断是由于违反权限导致的，然后操作系统会在「写保护中断处理函数」里进行<strong>物理内存的复制</strong>，并重新设置其内存映射关系，将父子进程的内存读写权限设置为<strong>可读写</strong>，最后才会对内存进行写操作，这个过程被称为「<strong>写时复制(*Copy On Write*)</strong>」。</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/d4cfac545377b54dd035c775603b4936.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>在发生写操作的时候，操作系统才会去复制物理内存</strong>，这样是为了防止 fork 创建子进程时，由于物理内存数据的复制时间过长而导致父进程长时间阻塞的问题。</p><p>有两个阶段会导致阻塞父进程：</p><ul><li>创建子进程的途中，由于要复制父进程的页表等数据结构，阻塞的时间跟页表的大小有关，页表越大，阻塞的时间也越长；</li><li>创建完子进程后，如果子进程或者父进程修改了共享数据，就会发生写时复制，这期间会拷贝物理内存，如果内存越大，自然阻塞的时间也越长；</li></ul><p>触发重写机制后，主进程就会创建重写 AOF 的子进程，此时父子进程共享物理内存，重写子进程只会对这个内存进行只读，重写 AOF 子进程会读取数据库里的所有数据，并逐一把内存数据的键值对转换成一条命令，再将命令记录到重写日志（新的 AOF 文件）。</p><p>但是子进程重写过程中，主进程依然可以正常处理命令。</p><p>如果此时<strong>主进程修改了已经存在 key-value，就会发生写时复制，注意这里只会复制主进程修改的物理内存数据，没修改物理内存还是与子进程共享的</strong>。</p><h4 id="重写缓冲区" tabindex="-1"><a class="header-anchor" href="#重写缓冲区" aria-hidden="true">#</a> 重写缓冲区</h4><p>重写 AOF 日志过程中，如果主进程修改了已经存在 key-value，此时这个 key-value 数据在子进程的内存数据就跟主进程的内存数据不一致了。</p><p>为了解决此问题，Redis 设置了一个 <strong>AOF 重写缓冲区</strong>，这个缓冲区在创建 bgrewriteaof 子进程之后开始使用。</p><p>在重写 AOF 期间，当 Redis 执行完一个写命令之后，它会<strong>同时将这个写命令写入到 「AOF 缓冲区」和 「AOF 重写缓冲区」</strong>。</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0ODI3Njc0,size_16,color_FFFFFF,t_70-20230309231944807.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p>在 bgrewriteaof 子进程执行 AOF 重写期间，<strong>主进程</strong>需要执行以下三个工作:</p><ul><li>执行客户端发来的命令；</li><li>将执行后的写命令追加到 「AOF 缓冲区」；</li><li>将执行后的写命令追加到 「AOF 重写缓冲区」；</li></ul><p>当子进程完成 AOF 重写工作（<em>扫描数据库中所有数据，逐一把内存数据的键值对转换成一条命令，再将命令记录到重写日志</em>）后，会向主进程发送一条信号，信号是进程间通讯的一种方式，且是异步的。</p><p>主进程收到该信号后，会调用一个信号处理函数，该函数主要做以下工作：</p><ul><li>将 AOF 重写缓冲区中的所有内容追加到新的 AOF 的文件中，使得新旧两个 AOF 文件所保存的数据库状态一致；</li><li>新的 AOF 的文件进行改名，覆盖现有的 AOF 文件。</li></ul><p>信号函数执行完后，主进程就可以继续像往常一样处理命令了。</p><p>在整个 AOF 后台重写过程中，除了发生写时复制会对主进程造成阻塞，还有信号处理函数执行时也会对主进程造成阻塞，在其他时候，AOF 后台重写都不会阻塞主进程。</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><ul><li><p>AOF 方法，这个方法是每执行一条写操作命令，就将该命令以追加的方式写入到 AOF 文件，然后在恢复时，以逐一执行命令的方式来进行数据恢复。</p></li><li><p>Redis 提供了三种将 AOF 日志写回硬盘的策略：</p><ul><li><p>Always</p></li><li><p>Everysec</p></li><li><p>No</p></li></ul></li><li><p>为了避免日志文件过大， Redis 提供了 AOF 重写机制 会直接扫描数据中所有的键值对数据，然后为每一个键值对生成一条写操作命令，接着将该命令写入到新的 AOF 文件，重写完成后，就替换掉现有的 AOF 日志。重写的过程是由后台子进程完成的，这样可以使得主进程可以继续正常处理命令。</p></li></ul><h2 id="_2-rdb" tabindex="-1"><a class="header-anchor" href="#_2-rdb" aria-hidden="true">#</a> 2. RDB</h2><p>Redis 提供了两个命令来生成 RDB 文件，分别是 <code>save</code> 和 <code>bgsave</code>，他们的区别就在于是否在「主线程」里执行：</p><ul><li>执行了 save 命令，就会在主线程生成 RDB 文件，由于和执行操作命令在同一个线程，所以如果写入 RDB 文件的时间太长，<strong>会阻塞主线程</strong>；</li><li>执行了 bgsave 命令，会创建一个子进程来生成 RDB 文件，这样可以<strong>避免主线程的阻塞</strong>；</li></ul><p>RDB 文件的加载工作是在服务器启动时自动执行的，Redis 并没有提供专门用于加载 RDB 文件的命令。</p><p>Redis 还可以通过配置文件的选项来实现每隔一段时间自动执行一次 bgsave 命令，默认会提供以下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>save 900 1
save 300 10
save 60 10000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>900 秒之内，对数据库进行了至少 1 次修改；</li><li>300 秒之内，对数据库进行了至少 10 次修改；</li><li>60 秒之内，对数据库进行了至少 10000 次修改。</li></ul><p>Redis 的快照是<strong>全量快照</strong>，也就是说每次执行快照，都是把内存中的「所有数据」都记录到磁盘中。</p><h3 id="执行快照时-数据可以被修改么" tabindex="-1"><a class="header-anchor" href="#执行快照时-数据可以被修改么" aria-hidden="true">#</a> 执行快照时，数据可以被修改么</h3><p>执行 bgsave 过程中，Redis 依然<strong>可以继续处理操作命令</strong>的，也就是数据是能被修改的。</p><h3 id="写时复制技术-copy-on-write-cow" tabindex="-1"><a class="header-anchor" href="#写时复制技术-copy-on-write-cow" aria-hidden="true">#</a> 写时复制技术（Copy-On-Write, COW）</h3><p>执行 bgsave 命令的时候，会通过 <code>fork()</code> 创建子进程，此时子进程和父进程是共享同一片内存数据的，因为创建子进程的时候，会复制父进程的页表，但是页表指向的物理内存还是一个。</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/c34a9d1f58d602ff1fe8601f7270baa7.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>只有在发生修改内存数据的情况时，物理内存才会被复制一份。</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/ebd620db8a1af66fbeb8f4d4ef6adc68.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>这样的目的是为了减少创建子进程时的性能损耗，从而加快创建子进程的速度，毕竟创建子进程的过程中，是会阻塞主线程的。</p><p>所以，创建 bgsave 子进程后，由于共享父进程的所有内存数据，于是就可以直接读取主线程（父进程）里的内存数据，并将数据写入到 RDB 文件。</p><p>当主线程（父进程）对这些共享的内存数据也都是只读操作，那么，主线程（父进程）和 bgsave 子进程相互不影响。</p><p>如果主线程（父进程）要<strong>修改共享数据里的某一块数据</strong>（比如键值对 <code>A</code>）时，就会发生写时复制，于是这块数据的<strong>物理内存就会被复制一份（键值对 <code>A&#39;</code>）</strong>，然后<strong>主线程在这个数据副本（键值对 <code>A&#39;</code>）进行修改操作</strong>。与此同时，<strong>bgsave 子进程可以继续把原来的数据（键值对 <code>A</code>）写入到 RDB 文件</strong>。</p><p>Redis 使用 bgsave 对当前内存中的所有数据做快照，这个操作是由 bgsave 子进程在后台完成的，执行时不会阻塞主线程，这就使得主线程同时可以修改数据。</p><h3 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1" aria-hidden="true">#</a> 缺点</h3><ul><li><p>bgsave 快照过程中，如果主线程修改了共享数据，<strong>发生了写时复制后，RDB 快照保存的是原本的内存数据</strong>，而主线程刚修改的数据，是没办法在这一时间写入 RDB 文件的，只能交由下一次的 bgsave 快照。</p></li><li><p>如果系统恰好在 RDB 快照文件创建完毕后崩溃了，那么 Redis 将会丢失主线程在快照期间修改的数据。</p></li><li><p>在 Redis 执行 RDB 持久化期间，刚 fork 时，主进程和子进程共享同一物理内存，但是途中主进程处理了写操作，修改了共享内存，于是当前被修改的数据的物理内存就会被复制一份。</p><p>那么极端情况下，<strong>如果所有的共享内存都被修改，则此时的内存占用是原先的 2 倍。</strong></p><p>所以，针对写操作多的场景，我们要留意下快照过程中内存的变化，防止内存被占满了</p></li></ul><h2 id="_3-混合持久化" tabindex="-1"><a class="header-anchor" href="#_3-混合持久化" aria-hidden="true">#</a> 3. 混合持久化</h2><p><strong>混合使用 AOF 日志和内存快照</strong></p><p>如果想要开启混合持久化功能，可以在 Redis 配置文件将下面这个配置项设置成 yes：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>aof-use-rdb-preamble yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>混合持久化工作在 <strong>AOF 日志重写过程</strong>。</p><p>当开启了混合持久化时，在 AOF 重写日志时，<code>fork</code> 出来的重写子进程会先将与主线程共享的内存数据以 RDB 方式写入到 AOF 文件，然后主线程处理的操作命令会被记录在重写缓冲区里，重写缓冲区里的增量命令会以 AOF 方式写入到 AOF 文件，写入完成后通知主进程将新的含有 RDB 格式和 AOF 格式的 AOF 文件替换旧的的 AOF 文件。</p><p>也就是说，使用了混合持久化，AOF 文件的<strong>前半部分是 RDB 格式的全量数据，后半部分是 AOF 格式的增量数据</strong>。</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/f67379b60d151262753fec3b817b8617.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>这样的好处在于，重启 Redis 加载数据的时候，由于前半部分是 RDB 内容，这样<strong>加载的时候速度会很快</strong>。</p><p>加载完 RDB 的内容后，才会加载后半部分的 AOF 内容，这里的内容是 Redis 后台子进程重写 AOF 期间，主线程处理的操作命令，可以使得<strong>数据更少的丢失</strong></p><h2 id="_4-大-kv-对-持久化的影响" tabindex="-1"><a class="header-anchor" href="#_4-大-kv-对-持久化的影响" aria-hidden="true">#</a> 4. 大 KV 对 持久化的影响</h2><h3 id="aof" tabindex="-1"><a class="header-anchor" href="#aof" aria-hidden="true">#</a> AOF</h3><p>AOF 有三种回写策略：</p><ul><li>Always：每次写操作命令执行完后，同步将 AOF 日志数据写回硬盘；</li><li>Everysec：每次写操作命令执行完后，先将命令写入到 AOF 文件的内核缓冲区，然后每隔一秒将缓冲区里的内容写回到硬盘；</li><li>No：不由 Redis 控制写回硬盘的时机，转交给操作系统控制写回的时机，也就是每次写操作命令执行完后，先将命令写入到 AOF 文件的内核缓冲区，再由操作系统决定何时将缓冲区内容写回硬盘</li></ul><p>这三种策略只是在控制 fsync() 函数的调用时机</p><p>当应用程序向文件写入数据时，内核通常先将数据复制到内核缓冲区中，然后排入队列，然后由内核决定何时写入硬盘。</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/def7d5328829470c9f3cfd15bbcc6814.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果想要应用程序向文件写入数据后，能立马将数据同步到硬盘，就可以调用 fsync() 函数，这样内核就会将内核缓冲区的数据直接写入到硬盘，等到硬盘写操作完成后，该函数才会返回。</p><ul><li>Always 策略就是每次写入 AOF 文件数据后，就执行 fsync() 函数；</li><li>Everysec 策略就会创建一个异步任务来执行 fsync() 函数；</li><li>No 策略就是永不执行 fsync() 函数;</li></ul><p>在使用 Always 策略的时候，主线程在执行完命令后，会把数据写入到 AOF 日志文件，然后会调用 fsync() 函数，将内核缓冲区的数据直接写入到硬盘，等到硬盘写操作完成后，该函数才会返回。</p><ul><li><p><strong>当使用 Always 策略的时候，如果写入是一个大 Key，主线程在执行 fsync() 函数的时候，阻塞的时间会比较久，因为当写入的数据量很大的时候，数据同步到硬盘这个过程是很耗时的</strong>。</p></li><li><p>当使用 Everysec 策略的时候，由于是异步执行 fsync() 函数，所以大 Key 持久化的过程（数据同步磁盘）不会影响主线程。</p></li><li><p>当使用 No 策略的时候，由于永不执行 fsync() 函数，所以大 Key 持久化的过程不会影响主线程</p></li></ul><h3 id="aof-重写和-rdb" tabindex="-1"><a class="header-anchor" href="#aof-重写和-rdb" aria-hidden="true">#</a> AOF 重写和 RDB</h3><p>当 AOF 日志写入了很多的大 Key，AOF 日志文件的大小会很大，那么很快就会触发 <strong>AOF 重写机制</strong>。</p><p>AOF 重写机制和 RDB 快照（bgsave 命令）的过程，都会分别通过 <code>fork()</code> 函数创建一个子进程来处理任务。</p><p>在创建子进程的过程中，操作系统会把父进程的「页表」复制一份给子进程，这个页表记录着虚拟地址和物理地址映射关系，而不会复制物理内存，也就是说，两者的虚拟空间不同，但其对应的物理空间是同一个。</p><p><img src="https://cdn.xiaolincoding.com//mysql/other/06657cb93ffa4a24b8fc5b3069cb29bf.png" alt="img" loading="lazy"> 这样一来，子进程就共享了父进程的物理内存数据了，这样能够节约物理内存资源，页表对应的页表项的属性会标记该物理内存的权限为<strong>只读</strong>。</p><p>随着 Redis 存在越来越多的大 Key，那么 Redis 就会占用很多内存，对应的页表就会越大。</p><p>在通过 <code>fork()</code> 函数创建子进程的时候，虽然不会复制父进程的物理内存，但是<strong>内核会把父进程的页表复制一份给子进程，如果页表很大，那么这个复制过程是会很耗时的，那么在执行 fork 函数的时候就会发生阻塞现象</strong>。</p><p>而且，fork 函数是由 Redis 主线程调用的，如果 fork 函数发生阻塞，那么意味着就会阻塞 Redis 主线程。由于 Redis 执行命令是在主线程处理的，所以当 Redis 主线程发生阻塞，就无法处理后续客户端发来的命令。</p><p>我们可以执行 <code>info</code> 命令获取到 latest_fork_usec 指标，表示 Redis 最近一次 fork 操作耗时。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 最近一次 fork 操作耗时</span>
latest_fork_usec:<span class="token number">315</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 fork 耗时很大，比如超过1秒，则需要做出优化调整：</p><ul><li>单个实例的内存占用控制在 10 GB 以下，这样 fork 函数就能很快返回。</li><li>如果 Redis 只是当作纯缓存使用，不关心 Redis 数据安全性问题，可以考虑关闭 AOF 和 AOF 重写，这样就不会调用 fork 函数了。</li><li>在主从架构中，要适当调大 repl-backlog-size，避免因为 repl_backlog_buffer 不够大，导致主节点频繁地使用全量同步的方式，全量同步的时候，是会创建 RDB 文件的，也就是会调用 fork 函数</li></ul><p>当父进程或者子进程在向共享内存发起写操作时，CPU 就会触发<strong>写保护中断</strong>，这个「写保护中断」是由于违反权限导致的，然后操作系统会在「写保护中断处理函数」里进行物理内存的复制，并重新设置其内存映射关系，将父子进程的内存读写权限设置为可读写，最后才会对内存进行写操作，这个过程被称为「<strong>写时复制(Copy On Write)</strong>」。</p><figure><img src="https://cdn.xiaolincoding.com//mysql/other/451024fe10374431aff6f93a8fed4638.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>写时复制顾名思义，在发生写操作的时候，操作系统才会去复制物理内存，这样是为了防止 fork 创建子进程时，由于物理内存数据的复制时间过长而导致父进程长时间阻塞的问题。</p><p>如果创建完子进程后，<strong>父进程对共享内存中的大 Key 进行了修改，那么内核就会发生写时复制，会把物理内存复制一份，由于大 Key 占用的物理内存是比较大的，那么在复制物理内存这一过程中，也是比较耗时的，于是父进程（主线程）就会发生阻塞</strong>。</p><p>所以，有两个阶段会导致阻塞父进程：</p><ul><li>创建子进程的途中，由于要复制父进程的页表等数据结构，阻塞的时间跟页表的大小有关，页表越大，阻塞的时间也越长；</li><li>创建完子进程后，如果子进程或者父进程修改了共享数据，就会发生写时复制，这期间会拷贝物理内存，如果内存越大，自然阻塞的时间也越长</li></ul><h3 id="小结-1" tabindex="-1"><a class="header-anchor" href="#小结-1" aria-hidden="true">#</a> 小结</h3><p>当 AOF 写回策略配置了 Always 策略，如果写入是一个大 Key，主线程在执行 fsync() 函数的时候，阻塞的时间会比较久，因为当写入的数据量很大的时候，数据同步到硬盘这个过程是很耗时的。</p><p>AOF 重写机制和 RDB 快照（bgsave 命令）的过程，都会分别通过 <code>fork()</code> 函数创建一个子进程来处理任务。会有两个阶段会导致阻塞父进程（主线程）：</p><ul><li>创建子进程的途中，由于要复制父进程的页表等数据结构，阻塞的时间跟页表的大小有关，页表越大，阻塞的时间也越长；</li><li>创建完子进程后，如果父进程修改了共享数据中的大 Key，就会发生写时复制，这期间会拷贝物理内存，由于大 Key 占用的物理内存会很大，那么在复制物理内存这一过程，就会比较耗时，所以有可能会阻塞父进程。</li></ul><p>大 key 除了会影响持久化之外，还会有以下的影响。</p><ul><li>客户端超时阻塞。由于 Redis 执行命令是单线程处理，然后在操作大 key 时会比较耗时，那么就会阻塞 Redis，从客户端这一视角看，就是很久很久都没有响应。</li><li>引发网络阻塞。每次获取大 key 产生的网络流量较大，如果一个 key 的大小是 1 MB，每秒访问量为 1000，那么每秒会产生 1000MB 的流量，这对于普通千兆网卡的服务器来说是灾难性的。</li><li>阻塞工作线程。如果使用 del 删除大 key 时，会阻塞工作线程，这样就没办法处理后续的命令。</li><li>内存分布不均。集群模型在 slot 分片均匀情况下，会出现数据和查询倾斜情况，部分有大 key 的 Redis 节点占用内存多，QPS 也会比较大。</li></ul><p>如何避免大 Key 呢？</p><p>最好在设计阶段，就把大 key 拆分成一个一个小 key。或者，定时检查 Redis 是否存在大 key ，如果该大 key 是可以删除的，不要使用 DEL 命令删除，因为该命令删除过程会阻塞主线程，而是用 unlink 命令（Redis 4.0+）删除大 key，因为该命令的删除过程是异步的，不会阻塞主线程</p>`,140),l=[s];function r(d,t){return e(),a("div",null,l)}const c=i(o,[["render",r],["__file","03.data_storage.html.vue"]]);export{c as default};
