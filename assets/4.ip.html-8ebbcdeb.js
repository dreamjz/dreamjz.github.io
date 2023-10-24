import{_ as r,Z as t,$ as g,a0 as o,a1 as i,a2 as a,a3 as n,H as c}from"./framework-09afcf0b.js";const d={},p=n('<h2 id="_4-1-ip" tabindex="-1"><a class="header-anchor" href="#_4-1-ip" aria-hidden="true">#</a> 4.1 IP</h2><p>IP 在 TCP/IP 参考模型中处于第三层，也就是<strong>网络层</strong>。</p><p>网络层的主要作用是：<strong>实现主机与主机之间的通信，也叫端到端（end to end）通信。</strong></p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/2.jpg" alt="IP 的作用" tabindex="0" loading="lazy"><figcaption>IP 的作用</figcaption></figure><h2 id="_4-2-ip-基础" tabindex="-1"><a class="header-anchor" href="#_4-2-ip-基础" aria-hidden="true">#</a> 4.2 IP 基础</h2><p>在 TCP/IP 网络通信时，为了保证能正常通信，每个设备都需要配置正确的 IP 地址，否则无法实现正常的通信。</p><p>IP 地址（IPv4 地址）由 <code>32</code> 位正整数来表示，IP 地址在计算机是以二进制的方式处理的。<img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/4.jpg" alt="点分十进制" loading="lazy"></p><h2 id="_4-3-ip-地址的分类" tabindex="-1"><a class="header-anchor" href="#_4-3-ip-地址的分类" aria-hidden="true">#</a> 4.3 IP 地址的分类</h2><p>IP 地址分类成了 5 种类型，分别是 A 类、B 类、C 类、D 类、E 类。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/7.jpg" alt="IP 地址分类" tabindex="0" loading="lazy"><figcaption>IP 地址分类</figcaption></figure><h3 id="a-b-c-类" tabindex="-1"><a class="header-anchor" href="#a-b-c-类" aria-hidden="true">#</a> A\\B\\C 类</h3><p>A、B、C 类主要分为两个部分，分别是<strong>网络号和主机号</strong>。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/8.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="特殊地址" tabindex="-1"><a class="header-anchor" href="#特殊地址" aria-hidden="true">#</a> 特殊地址</h4><ul><li>主机号全为 1，指定网络下的所有主机，用于广播</li><li>主机号全为 0，指定某个网络</li></ul><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/10.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="广播地址" tabindex="-1"><a class="header-anchor" href="#广播地址" aria-hidden="true">#</a> 广播地址</h4><p>广播地址用于在<strong>同一个链路中相互连接的主机之间发送数据包</strong>。</p><p>广播地址可以分为本地广播和直接广播两种。</p><ul><li><p><strong>在本网络内广播的叫做本地广播</strong>。例如网络地址为 192.168.0.0/24 的情况下，广播地址是 192.168.0.255 。因为这个广播地址的 IP 包会被路由器屏蔽，所以不会到达 192.168.0.0/24 以外的其他链路上。</p></li><li><p><strong>在不同网络之间的广播叫做直接广播</strong>。例如网络地址为 192.168.0.0/24 的主机向 192.168.1.255/24 的目标地址发送 IP 包。收到这个包的路由器，将数据转发给 192.168.1.0/24，从而使得所有 192.168.1.1~192.168.1.254 的主机都能收到这个包（由于直接广播有一定的安全问题，多数情况下会在路由器上设置为不转发）</p></li></ul><h3 id="d-e-类" tabindex="-1"><a class="header-anchor" href="#d-e-类" aria-hidden="true">#</a> D\\E 类</h3><p>D 类和 E 类地址是没有主机号的，所以不可用于主机 IP，D 类常被用于<strong>多播</strong>，E 类是预留的分类，暂时未使用。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/12.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="多播地址" tabindex="-1"><a class="header-anchor" href="#多播地址" aria-hidden="true">#</a> 多播地址</h4><p>多播用于<strong>将包发送给特定组内的所有主机。</strong></p><h2 id="_4-4-ip-分类的优点" tabindex="-1"><a class="header-anchor" href="#_4-4-ip-分类的优点" aria-hidden="true">#</a> 4.4 IP 分类的优点</h2><p>分类地址的优点就是<strong>简单明了、选路（基于网络地址）简单</strong>。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/14.jpg" alt="IP 分类判断" tabindex="0" loading="lazy"><figcaption>IP 分类判断</figcaption></figure><h2 id="_4-5-ip-分类的缺点" tabindex="-1"><a class="header-anchor" href="#_4-5-ip-分类的缺点" aria-hidden="true">#</a> 4.5 IP 分类的缺点</h2><p><em>缺点一</em></p><p><strong>同一网络下没有地址层次</strong>，比如一个公司里用了 B 类地址，但是可能需要根据生产环境、测试环境、开发环境来划分地址层次，而这种 IP 分类是没有地址层次划分的功能，所以这就<strong>缺少地址的灵活性</strong>。</p><p><em>缺点二</em></p><p>A、B、C类有个尴尬处境，就是<strong>不能很好的与现实网络匹配</strong>。</p><ul><li>C 类地址能包含的最大主机数量实在太少了，只有 254 。</li><li>而 B 类地址能包含的最大主机数量又太多了。</li></ul><p>这两个缺点，都可以在 <code>CIDR</code> 无分类地址解决</p><h2 id="_4-6-无分类地址-cidr" tabindex="-1"><a class="header-anchor" href="#_4-6-无分类地址-cidr" aria-hidden="true">#</a> 4.6 无分类地址 CIDR</h2><p>因为 IP 分类存在许多缺点，所以后面提出了无分类地址的方案，即 <code>CIDR</code>。</p><p>这种方式不再有分类地址的概念，32 比特的 IP 地址被划分为两部分，前面是<strong>网络号</strong>，后面是<strong>主机号</strong>。</p><p>表示形式 <code>a.b.c.d/x</code>，其中 <code>/x</code> 表示前 x 位属于<strong>网络号</strong>， x 的范围是 <code>0 ~ 32</code>，这就使得 IP 地址更加具有灵活性。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/15.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_4-7-公有-ip-和-私有-ip" tabindex="-1"><a class="header-anchor" href="#_4-7-公有-ip-和-私有-ip" aria-hidden="true">#</a> 4.7 公有 IP 和 私有 IP</h2><ul><li>私有 IP 地址：允许组织内部的 IT 人员自己管理、自己分配，而且可以重复。</li><li>公有 IP 地址是由 <code>ICANN</code> （「互联网名称与数字地址分配机构」）组织管理，。</li></ul><h2 id="_4-8-ip-地址和路由控制" tabindex="-1"><a class="header-anchor" href="#_4-8-ip-地址和路由控制" aria-hidden="true">#</a> 4.8 IP 地址和路由控制</h2><p>路由控制表中记录着网络地址与下一步应该发送至路由器的地址。在主机和路由器上都会有各自的路由器控制表。</p><p>在发送 IP 包时，首先要确定 IP 包首部中的目标地址，再从路由控制表中找到与该地址具有<strong>相同网络地址</strong>的记录，根据该记录将 IP 包转发给相应的下一个路由器。如果路由控制表中存在多条相同网络地址的记录，就选择相同位数最多的网络地址，也就是最长匹配。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/25.jpg" alt="IP 地址与路由控制" tabindex="0" loading="lazy"><figcaption>IP 地址与路由控制</figcaption></figure><ol><li>主机 A 要发送一个 IP 包，其源地址是 <code>10.1.1.30</code> 和目标地址是 <code>10.1.2.10</code>，由于没有在主机 A 的路由表找到与目标地址 <code>10.1.2.10</code> 相同的网络地址，于是包被转发到默认路由（路由器 <code>1</code> ）</li><li>路由器 <code>1</code> 收到 IP 包后，也在路由器 <code>1</code> 的路由表匹配与目标地址相同的网络地址记录，发现匹配到了，于是就把 IP 数据包转发到了 <code>10.1.0.2</code> 这台路由器 <code>2</code></li><li>路由器 <code>2</code> 收到后，同样对比自身的路由表，发现匹配到了，于是把 IP 包从路由器 <code>2</code> 的 <code>10.1.2.1</code> 这个接口出去，最终经过交换机把 IP 数据包转发到了目标主机</li></ol><h2 id="_4-9-环回地址" tabindex="-1"><a class="header-anchor" href="#_4-9-环回地址" aria-hidden="true">#</a> 4.9 环回地址</h2><p>环回地址是在同一台计算机上的程序之间进行网络通信时所使用的一个默认地址。</p><p>计算机使用一个特殊的 IP 地址 <strong>127.0.0.1 作为环回地址</strong>。与该地址具有相同意义的是一个叫做 <code>localhost</code> 的主机名。使用这个 IP 或主机名时，数据包不会流向网络</p><h2 id="_4-10-ip-分片" tabindex="-1"><a class="header-anchor" href="#_4-10-ip-分片" aria-hidden="true">#</a> 4.10 IP 分片</h2><p>每种数据链路的最大传输单元 <code>MTU</code> 都是不相同的，如 FDDI 数据链路 MTU 4352、以太网的 MTU 是 1500 字节等。</p><p>每种数据链路的 MTU 之所以不同，是因为每个不同类型的数据链路的使用目的不同。使用目的不同，可承载的 MTU 也就不同。</p><p>当 IP 数据包大小大于 MTU 时， IP 数据包就会被分片。</p><p>经过分片之后的 IP 数据报在被重组的时候，只能由目标主机进行，路由器是不会进行重组的。</p><p>假设发送方发送一个 4000 字节的大数据报，若要传输在以太网链路，则需要把数据报分片成 3 个小数据报进行传输，再交由接收方重组成大数据报。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/26.jpg" alt="分片与重组" tabindex="0" loading="lazy"><figcaption>分片与重组</figcaption></figure><p>在分片传输中，一旦某个分片丢失，则会造成整个 IP 数据报作废，所以 TCP 引入了 <code>MSS</code> 也就是在 TCP 层进行分片不由 IP 层分片，那么对于 UDP 我们尽量不要发送一个大于 <code>MTU</code> 的数据报文</p><h2 id="_4-11-ipv6" tabindex="-1"><a class="header-anchor" href="#_4-11-ipv6" aria-hidden="true">#</a> 4.11 IPv6</h2><p>IPv4 地址长度共 32 位，是以每 8 位作为一组，并用点分十进制的表示方式。</p><p>IPv6 地址长度是 128 位，是以每 16 位作为一组，每组用冒号 「:」 隔开。</p><p>如果出现连续的 0 时还可以将这些 0 省略，并用两个冒号 「::」隔开。但是，一个 IP 地址中只允许出现一次两个连续的冒号。</p><h3 id="ipv6-地址结构" tabindex="-1"><a class="header-anchor" href="#ipv6-地址结构" aria-hidden="true">#</a> IPv6 地址结构</h3><p>Pv6 的地址主要有以下类型地址：</p><ul><li>单播地址，用于一对一的通信</li><li>组播地址，用于一对多的通信</li><li>任播地址，用于通信最近的节点，最近的节点是由路由协议决定</li><li>没有广播地址</li></ul><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/29.jpg" alt="IPv6地址结构" tabindex="0" loading="lazy"><figcaption>IPv6地址结构</figcaption></figure><h2 id="_4-12-dns-解析" tabindex="-1"><a class="header-anchor" href="#_4-12-dns-解析" aria-hidden="true">#</a> 4.12 DNS 解析</h2><p>DNS 中的域名都是用<strong>句点</strong>来分隔的，比如 <code>www.server.com</code>，这里的句点代表了不同层次之间的<strong>界限</strong>。</p><p>在域名中，<strong>越靠右</strong>的位置表示其层级<strong>越高</strong>。</p><p>域名的层级关系类似一个树状结构：</p>',70),l=o("li",null,"根 DNS 服务器",-1),s=o("li",null,"顶级域 DNS 服务器（com）",-1),h={href:"http://server.com",target:"_blank",rel:"noopener noreferrer"},P=n('<figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/32.jpg" alt="DNS 树状结构" tabindex="0" loading="lazy"><figcaption>DNS 树状结构</figcaption></figure><h3 id="解析流程" tabindex="-1"><a class="header-anchor" href="#解析流程" aria-hidden="true">#</a> 解析流程</h3><p><strong>浏览器</strong>首先看一下自己的<strong>缓存</strong>里有没有，如果没有就向<strong>操作系统</strong>的<strong>缓存</strong>要，还没有就检查本机域名解析文件 <code>hosts</code>，如果还是没有，就会 DNS 服务器进行查询，查询的过程如下：</p>',3),I={href:"http://www.server.com",target:"_blank",rel:"noopener noreferrer"},f={href:"http://www.server.com",target:"_blank",rel:"noopener noreferrer"},m={href:"http://www.server.com",target:"_blank",rel:"noopener noreferrer"},u={href:"http://www.server.com",target:"_blank",rel:"noopener noreferrer"},x={href:"http://www.server.com",target:"_blank",rel:"noopener noreferrer"},C={href:"http://www.server.com",target:"_blank",rel:"noopener noreferrer"},M={href:"http://server.com",target:"_blank",rel:"noopener noreferrer"},A=o("li",null,"权威 DNS 服务器查询后将对应的 IP 地址 X.X.X.X 告诉本地 DNS。",-1),_=o("li",null,"本地 DNS 再将 IP 地址返回客户端，客户端和目标建立连接。",-1),b=n('<figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/33.jpg" alt="域名解析的工作流程" tabindex="0" loading="lazy"><figcaption>域名解析的工作流程</figcaption></figure><h2 id="_4-13-arp-协议" tabindex="-1"><a class="header-anchor" href="#_4-13-arp-协议" aria-hidden="true">#</a> 4.13 ARP 协议</h2><p>在传输一个 IP 数据报的时候，确定了源 IP 地址和目标 IP 地址后，就会通过主机「路由表」确定 IP 数据包下一跳。然而，网络层的下一层是数据链路层，所以我们还要知道「下一跳」的 MAC 地址。</p><p>主机的路由表中可以找到下一跳的 IP 地址，所以可以通过 <strong>ARP 协议</strong>，求得下一跳的 MAC 地址。</p><h3 id="arp-协议如何获取-mac-地址" tabindex="-1"><a class="header-anchor" href="#arp-协议如何获取-mac-地址" aria-hidden="true">#</a> ARP 协议如何获取 MAC 地址</h3><p>ARP 是借助 <strong>ARP 请求与 ARP 响应</strong>两种类型的包确定 MAC 地址的。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/34.jpg" alt="ARP 广播" tabindex="0" loading="lazy"><figcaption>ARP 广播</figcaption></figure><ul><li>主机会通过<strong>广播发送 ARP 请求</strong>，这个包中包含了想要知道的 MAC 地址的主机 IP 地址。</li><li>当同个链路中的所有设备收到 ARP 请求时，会去拆开 ARP 请求包里的内容，如果 ARP 请求包中的目标 IP 地址与自己的 IP 地址一致，那么这个设备就将自己的 MAC 地址塞入 <strong>ARP 响应包</strong>返回给主机。</li></ul><p>操作系统通常会把第一次通过 ARP 获取的 MAC 地址缓存起来，以便下次直接从缓存中找到对应 IP 地址的 MAC 地址。</p><p>不过，MAC 地址的缓存是有一定期限的，超过这个期限，缓存的内容将被清除。</p><h2 id="_4-14-rarp协议" tabindex="-1"><a class="header-anchor" href="#_4-14-rarp协议" aria-hidden="true">#</a> 4.14 RARP协议</h2><p>ARP 协议是已知 IP 地址求 MAC 地址，那 RARP 协议正好相反，它是<strong>已知 MAC 地址求 IP 地址</strong>。例如将打印机服务器等小型嵌入式设备接入到网络时就经常会用得到。</p><p>通常这需要架设一台 <code>RARP</code> 服务器，在这个服务器上注册设备的 MAC 地址及其 IP 地址。然后再将这个设备接入到网络，接着：</p><ul><li>该设备会发送一条「我的 MAC 地址是XXXX，请告诉我，我的IP地址应该是什么」的请求信息。</li><li>RARP 服务器接到这个消息后返回「MAC地址为 XXXX 的设备，IP地址为 XXXX」的信息给这个设备。</li></ul><p>最后，设备就根据从 RARP 服务器所收到的应答信息设置自己的 IP 地址。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/35.jpg" alt="RARP" tabindex="0" loading="lazy"><figcaption>RARP</figcaption></figure><h2 id="_4-15-dhcp" tabindex="-1"><a class="header-anchor" href="#_4-15-dhcp" aria-hidden="true">#</a> 4.15 DHCP</h2><p>DHCP 用于动态分配 IP 地址。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/36.jpg" alt="DHCP 工作流程" tabindex="0" loading="lazy"><figcaption>DHCP 工作流程</figcaption></figure><p>DHCP 客户端进程监听的是 68 端口号，DHCP 服务端进程监听的是 67 端口号。</p><p>这 4 个步骤：</p><ul><li>客户端首先发起 <strong>DHCP 发现报文（DHCP DISCOVER）</strong> 的 IP 数据报，由于客户端没有 IP 地址，也不知道 DHCP 服务器的地址，所以使用的是 UDP <strong>广播</strong>通信，其使用的广播目的地址是 255.255.255.255（端口 67） 并且使用 0.0.0.0（端口 68） 作为源 IP 地址。DHCP 客户端将该 IP 数据报传递给链路层，链路层然后将帧广播到所有的网络中设备。</li><li>DHCP 服务器收到 DHCP 发现报文时，用 <strong>DHCP 提供报文（DHCP OFFER）</strong> 向客户端做出响应。该报文仍然使用 IP 广播地址 255.255.255.255，该报文信息携带服务器提供可租约的 IP 地址、子网掩码、默认网关、DNS 服务器以及 <strong>IP 地址租用期</strong>。</li><li>客户端收到一个或多个服务器的 DHCP 提供报文后，从中选择一个服务器，并向选中的服务器发送 <strong>DHCP 请求报文（DHCP REQUEST</strong>进行响应，回显配置的参数。</li><li>最后，服务端用 <strong>DHCP ACK 报文</strong>对 DHCP 请求报文进行响应，应答所要求的参数。</li></ul><p>一旦客户端收到 DHCP ACK 后，交互便完成了，并且客户端能够在租用期内使用 DHCP 服务器分配的 IP 地址。</p><p>如果租约的 DHCP IP 地址快期后，客户端会向服务器发送 DHCP 请求报文：</p><ul><li>服务器如果同意继续租用，则用 DHCP ACK 报文进行应答，客户端就会延长租期。</li><li>服务器如果不同意继续租用，则用 DHCP NACK 报文，客户端就要停止使用租约的 IP 地址。</li></ul><p>可以发现，DHCP 交互中，<strong>全程都是使用 UDP 广播通信</strong>。</p><h3 id="dhcp-中继代理" tabindex="-1"><a class="header-anchor" href="#dhcp-中继代理" aria-hidden="true">#</a> DHCP 中继代理</h3><p>DHCP 中继代理以后，<strong>对不同网段的 IP 地址分配也可以由一个 DHCP 服务器统一进行管理。</strong></p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/37.jpg" alt=" DHCP 中继代理" tabindex="0" loading="lazy"><figcaption> DHCP 中继代理</figcaption></figure><ul><li>DHCP 客户端会向 DHCP 中继代理发送 DHCP 请求包，而 DHCP 中继代理在收到这个广播包以后，再以<strong>单播</strong>的形式发给 DHCP 服务器。</li><li>服务器端收到该包以后再向 DHCP 中继代理返回应答，并由 DHCP 中继代理将此包广播给 DHCP 客户端 。</li></ul><p>因此，DHCP 服务器即使不在同一个链路上也可以实现统一分配和管理IP地址</p><h2 id="_4-16-nat" tabindex="-1"><a class="header-anchor" href="#_4-16-nat" aria-hidden="true">#</a> 4.16 NAT</h2><p><strong>网络地址转换 NAT</strong> ，用于缓解 IPv4 地址耗尽的问题。</p><p>NAT 就是同个公司、家庭、教室内的主机对外部通信时，把私有 IP 地址转换成公有 IP 地址。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/38.jpg" alt="NAT" tabindex="0" loading="lazy"><figcaption>NAT</figcaption></figure><h3 id="napt" tabindex="-1"><a class="header-anchor" href="#napt" aria-hidden="true">#</a> NAPT</h3><p>普通的 NAT 转换没什么意义。由于绝大多数的网络应用都是使用传输层协议 TCP 或 UDP 来传输数据的。因此，可以把 IP 地址 + 端口号一起进行转换。</p><p>这样，就用一个全球 IP 地址就可以了，这种转换技术就叫<strong>网络地址与端口转换 NAPT。</strong></p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/39.jpg" alt="NAPT" tabindex="0" loading="lazy"><figcaption>NAPT</figcaption></figure><p>图中有两个客户端 192.168.1.10 和 192.168.1.11 同时与服务器 183.232.231.172 进行通信，并且这两个客户端的本地端口都是 1025。</p><p>此时，<strong>两个私有 IP 地址都转换 IP 地址为公有地址 120.229.175.121，但是以不同的端口号作为区分。</strong></p><p>于是，生成一个 NAPT 路由器的转换表，就可以正确地转换地址跟端口的组合，令客户端 A、B 能同时与服务器之间进行通信。</p><p>这种转换表在 NAT 路由器上自动生成。例如，在 TCP 的情况下，建立 TCP 连接首次握手时的 SYN 包一经发出，就会生成这个表。而后又随着收到关闭连接时发出 FIN 包的确认应答从表中被删除。</p><h3 id="nat-穿透" tabindex="-1"><a class="header-anchor" href="#nat-穿透" aria-hidden="true">#</a> NAT 穿透</h3><p>NAT 穿越技术拥有这样的功能，它能够让网络应用程序主动发现自己位于 NAT 设备之后，并且会主动获得 NAT 设备的公有 IP，并为自己建立端口映射条目，注意这些都是 NAT设备后的应用程序自动完成的。</p><p>也就是说，在 NAT 穿透技术中，NAT设备后的应用程序处于主动地位，它已经明确地知道 NAT 设备要修改它外发的数据包，于是它主动配合 NAT 设备的操作，主动地建立好映射，这样就不像以前由 NAT 设备来建立映射了。</p><p>说人话，就是客户端主动从 NAT 设备获取公有 IP 地址，然后自己建立端口映射条目，然后用这个条目对外通信，就不需要 NAT 设备来进行转换了</p><h2 id="_4-17-icmp" tabindex="-1"><a class="header-anchor" href="#_4-17-icmp" aria-hidden="true">#</a> 4.17 ICMP</h2><p>ICMP 全称是 <strong>Internet Control Message Protocol</strong>，也就是<strong>互联网控制报文协议</strong>。</p><p><code>ICMP</code> 主要的功能包括：<strong>确认 IP 包是否成功送达目标地址、报告发送过程中 IP 包被废弃的原因和改善网络设置等。</strong></p><p>在 <code>IP</code> 通信中如果某个 <code>IP</code> 包因为某种原因未能达到目标地址，那么这个具体的原因将<strong>由 ICMP 负责通知</strong>。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/40.jpg" alt="ICMP 目标不可达消息" tabindex="0" loading="lazy"><figcaption>ICMP 目标不可达消息</figcaption></figure><p>如上图例子，主机 <code>A</code> 向主机 <code>B</code> 发送了数据包，由于某种原因，途中的路由器 <code>2</code> 未能发现主机 <code>B</code> 的存在，这时，路由器 <code>2</code> 就会向主机 <code>A</code> 发送一个 <code>ICMP</code> 目标不可达数据包，说明发往主机 <code>B</code> 的包未能成功。</p><p>ICMP 的这种通知消息会使用 <code>IP</code> 进行发送 。</p><p>因此，从路由器 <code>2</code> 返回的 ICMP 包会按照往常的路由控制先经过路由器 <code>1</code> 再转发给主机 <code>A</code> 。收到该 ICMP 包的主机 <code>A</code> 则分解 ICMP 的首部和数据域以后得知具体发生问题的原因。</p><h3 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h3><p>ICMP 大致可以分为两大类：</p><ul><li>一类是用于诊断的查询消息，也就是「<strong>查询报文类型</strong>」</li><li>另一类是通知出错原因的错误消息，也就是「<strong>差错报文类型</strong>」</li></ul><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/41.jpg" alt="常见的 ICMP 类型" tabindex="0" loading="lazy"><figcaption>常见的 ICMP 类型</figcaption></figure><h2 id="_4-18-igmp" tabindex="-1"><a class="header-anchor" href="#_4-18-igmp" aria-hidden="true">#</a> 4.18 IGMP</h2><p><strong>IGMP 是因特网组管理协议，工作在主机（组播成员）和最后一跳路由之间</strong></p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/42.jpg" alt="组播模型" tabindex="0" loading="lazy"><figcaption>组播模型</figcaption></figure><ul><li>IGMP 报文向路由器申请加入和退出组播组，默认情况下路由器是不会转发组播包到连接中的主机，除非主机通过 IGMP 加入到组播组，主机申请加入到组播组时，路由器就会记录 IGMP 路由器表，路由器后续就会转发组播包到对应的主机了。</li><li>IGMP 报文采用 IP 封装，IP 头部的协议号为 2，而且 TTL 字段值通常为 1，因为 IGMP 是工作在主机与连接的路由器之间。</li></ul><h3 id="工作机制" tabindex="-1"><a class="header-anchor" href="#工作机制" aria-hidden="true">#</a> 工作机制</h3><p>IGMP 分为了三个版本分别是，IGMPv1、IGMPv2、IGMPv3。</p><p>接下来，以 <code>IGMPv2</code> 作为例子，说说<strong>常规查询与响应和离开组播组</strong>这两个工作机制。</p><p><em>常规查询与响应工作机制</em></p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/43.jpg" alt=" IGMP 常规查询与响应工作机制" tabindex="0" loading="lazy"><figcaption> IGMP 常规查询与响应工作机制</figcaption></figure><ol><li>路由器会周期性发送目的地址为 <code>224.0.0.1</code>（表示同一网段内所有主机和路由器） <strong>IGMP 常规查询报文</strong>。</li><li>主机1 和 主机 3 收到这个查询，随后会启动「报告延迟计时器」，计时器的时间是随机的，通常是 0~10 秒，计时器超时后主机就会发送 <strong>IGMP 成员关系报告报文</strong>（源 IP 地址为自己主机的 IP 地址，目的 IP 地址为组播地址）。如果在定时器超时之前，收到同一个组内的其他主机发送的成员关系报告报文，则自己不再发送，这样可以减少网络中多余的 IGMP 报文数量。</li><li>路由器收到主机的成员关系报文后，就会在 IGMP 路由表中加入该组播组，后续网络中一旦该组播地址的数据到达路由器，它会把数据包转发出去。</li></ol><p><em>离开组播组工作机制</em></p><p>离开组播组的情况一，网段中仍有该组播组：</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/44.jpg" alt=" IGMPv2 离开组播组工作机制 情况1" tabindex="0" loading="lazy"><figcaption> IGMPv2 离开组播组工作机制 情况1</figcaption></figure><ol><li>主机 1 要离开组 224.1.1.1，发送 IGMPv2 离组报文，报文的目的地址是 224.0.0.2（表示发向网段内的所有路由器）</li><li>路由器 收到该报文后，以 1 秒为间隔连续发送 IGMP 特定组查询报文（共计发送 2 个），以便确认该网络是否还有 224.1.1.1 组的其他成员。</li><li>主机 3 仍然是组 224.1.1.1 的成员，因此它立即响应这个特定组查询。路由器知道该网络中仍然存在该组播组的成员，于是继续向该网络转发 224.1.1.1 的组播数据包。</li></ol><p>离开组播组的情况二，网段中没有该组播组：</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/45.jpg" alt=" IGMPv2 离开组播组工作机制 情况2" tabindex="0" loading="lazy"><figcaption> IGMPv2 离开组播组工作机制 情况2</figcaption></figure><ol><li>主机 1 要离开组播组 224.1.1.1，发送 IGMP 离组报文。</li><li>路由器收到该报文后，以 1 秒为间隔连续发送 IGMP 特定组查询报文（共计发送 2 个）。此时在该网段内，组 224.1.1.1 已经没有其他成员了，因此没有主机响应这个查询。</li><li>一定时间后，路由器认为该网段中已经没有 224.1.1.1 组播组成员了，将不会再向这个网段转发该组播地址的数据包。</li></ol><h2 id="_4-19-ping-的原理" tabindex="-1"><a class="header-anchor" href="#_4-19-ping-的原理" aria-hidden="true">#</a> 4.19 Ping 的原理</h2><h3 id="icmp-报文头部" tabindex="-1"><a class="header-anchor" href="#icmp-报文头部" aria-hidden="true">#</a> ICMP 报文头部</h3><p>ICMP 报文是封装在 IP 包里面，它工作在网络层，是 IP 协议的助手。<img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/ping/5.jpg" alt="ICMP 报文" loading="lazy"></p><p>ICMP 包头的<strong>类型</strong>字段，大致可以分为两大类：</p><ul><li>一类是用于诊断的查询消息，也就是「<strong>查询报文类型</strong>」</li><li>另一类是通知出错原因的错误消息，也就是「<strong>差错报文类型</strong>」</li></ul><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/ping/6.jpg" alt="常见的 ICMP 类型" tabindex="0" loading="lazy"><figcaption>常见的 ICMP 类型</figcaption></figure><h3 id="ping-基于-icmp-查询报文" tabindex="-1"><a class="header-anchor" href="#ping-基于-icmp-查询报文" aria-hidden="true">#</a> Ping 基于 ICMP 查询报文</h3><p><strong>回送消息</strong>用于进行通信的主机或路由器之间，判断所发送的数据包是否已经成功到达对端的一种消息，<code>ping</code> 命令就是利用这个消息实现的。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/ping/7.jpg" alt="ICMP 回送消息" tabindex="0" loading="lazy"><figcaption>ICMP 回送消息</figcaption></figure><p>可以向对端主机发送<strong>回送请求</strong>的消息（<code>ICMP Echo Request Message</code>，类型 <code>8</code>），也可以接收对端主机发回来的<strong>回送应答</strong>消息（<code>ICMP Echo Reply Message</code>，类型 <code>0</code>）。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/ping/8.jpg" alt="ICMP 回送请求和回送应答报文" tabindex="0" loading="lazy"><figcaption>ICMP 回送请求和回送应答报文</figcaption></figure><ul><li><strong>标识符</strong>：用以区分是哪个应用程序发 ICMP 包，比如用进程 <code>PID</code> 作为标识符；</li><li><strong>序号</strong>：序列号从 <code>0</code> 开始，每发送一次新的回送请求就会加 <code>1</code>， 可以用来确认网络包是否有丢失。</li></ul><p>在<strong>选项数据</strong>中，<code>ping</code> 还会存放发送请求的时间值，来计算往返时间，说明路程的长短</p><h3 id="ping-流程" tabindex="-1"><a class="header-anchor" href="#ping-流程" aria-hidden="true">#</a> Ping 流程</h3><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/ping/12.jpg" alt="主机 A ping 主机 B" tabindex="0" loading="lazy"><figcaption>主机 A ping 主机 B</figcaption></figure><p>ping 命令执行的时候，源主机首先会构建一个 <strong>ICMP 回送请求消息</strong>数据包。</p><p>CMP 数据包内包含多个字段，最重要的是两个：</p><ul><li>第一个是<strong>类型</strong>，对于回送请求消息而言该字段为 <code>8</code>；</li><li>另外一个是<strong>序号</strong>，主要用于区分连续 ping 的时候发出的多个数据包。</li></ul><p>每发出一个请求数据包，序号会自动加 <code>1</code>。为了能够计算往返时间 <code>RTT</code>，它会在报文的数据部分插入发送时间。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/ping/13.jpg" alt="主机 A 的 ICMP 回送请求报文" tabindex="0" loading="lazy"><figcaption>主机 A 的 ICMP 回送请求报文</figcaption></figure><p>然后，由 ICMP 协议将这个数据包连同地址 192.168.1.2 一起交给 IP 层。IP 层将以 192.168.1.2 作为<strong>目的地址</strong>，本机 IP 地址作为<strong>源地址</strong>，<strong>协议</strong>字段设置为 <code>1</code> 表示是 <code>ICMP</code> 协议，再加上一些其他控制信息，构建一个 <code>IP</code> 数据包。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/ping/14.jpg" alt="主机 A 的 IP 层数据包" tabindex="0" loading="lazy"><figcaption>主机 A 的 IP 层数据包</figcaption></figure><p>接下来，需要加入 <code>MAC</code> 头。如果在本地 ARP 映射表中查找出 IP 地址 192.168.1.2 所对应的 MAC 地址，则可以直接使用；如果没有，则需要发送 <code>ARP</code> 协议查询 MAC 地址，获得 MAC 地址后，由数据链路层构建一个数据帧，目的地址是 IP 层传过来的 MAC 地址，源地址则是本机的 MAC 地址；还要附加上一些控制信息，依据以太网的介质访问规则，将它们传送出去。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/ping/15.jpg" alt="主机 A 的 MAC 层数据包" tabindex="0" loading="lazy"><figcaption>主机 A 的 MAC 层数据包</figcaption></figure><p>主机 <code>B</code> 收到这个数据帧后，先检查它的目的 MAC 地址，并和本机的 MAC 地址对比，如符合，则接收，否则就丢弃。</p><p>接收后检查该数据帧，将 IP 数据包从帧中提取出来，交给本机的 IP 层。同样，IP 层检查后，将有用的信息提取后交给 ICMP 协议。</p><p>主机 <code>B</code> 会构建一个 <strong>ICMP 回送响应消息</strong>数据包，回送响应数据包的<strong>类型</strong>字段为 <code>0</code>，<strong>序号</strong>为接收到的请求数据包中的序号，然后再发送出去给主机 A。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/ping/16.jpg" alt="主机 B 的 ICMP 回送响应报文" tabindex="0" loading="lazy"><figcaption>主机 B 的 ICMP 回送响应报文</figcaption></figure><p>在规定的时候间内，源主机如果没有接到 ICMP 的应答包，则说明目标主机不可达；如果接收到了 ICMP 回送响应消息，则说明目标主机可达。</p><p>此时，源主机会检查，用当前时刻减去该数据包最初从源主机上发出的时刻，就是 ICMP 数据包的时间延迟。</p><p>针对上面发送的事情，总结成了如下图：</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/ping/17.png" alt="主机 A ping 主机 B 期间发送的事情" tabindex="0" loading="lazy"><figcaption>主机 A ping 主机 B 期间发送的事情</figcaption></figure><p>当然这只是最简单的，同一个局域网里面的情况。如果跨网段的话，还会涉及网关的转发、路由器的转发等等。</p><p>但是对于 ICMP 的头来讲，是没什么影响的。会影响的是根据目标 IP 地址，选择路由的下一跳，还有每经过一个路由器到达一个新的局域网，需要换 MAC 头里面的 MAC 地址。</p><p>说了这么多，可以看出 ping 这个程序是<strong>使用了 ICMP 里面的 ECHO REQUEST（类型为 8 ） 和 ECHO REPLY （类型为 0）</strong></p>',111);function D(H,N){const e=c("ExternalLinkIcon");return t(),g("div",null,[p,o("ul",null,[l,s,o("li",null,[i("权威 DNS 服务器（"),o("a",h,[i("server.com"),a(e)]),i("）")])]),P,o("ol",null,[o("li",null,[i("客户端首先会发出一个 DNS 请求，问 "),o("a",I,[i("www.server.com"),a(e)]),i(" 的 IP 是啥，并发给本地 DNS 服务器（也就是客户端的 TCP/IP 设置中填写的 DNS 服务器地址）。")]),o("li",null,[i("本地域名服务器收到客户端的请求后，如果缓存里的表格能找到 "),o("a",f,[i("www.server.com"),a(e)]),i("，则它直接返回 IP 地址。如果没有，本地 DNS 会去问它的根域名服务器：“老大， 能告诉我 "),o("a",m,[i("www.server.com"),a(e)]),i(" 的 IP 地址吗？” 根域名服务器是最高层次的，它不直接用于域名解析，但能指明一条道路。")]),o("li",null,[i("根 DNS 收到来自本地 DNS 的请求后，发现后置是 .com，说：“"),o("a",u,[i("www.server.com"),a(e)]),i(" 这个域名归 .com 区域管理”，我给你 .com 顶级域名服务器地址给你，你去问问它吧。”")]),o("li",null,[i("本地 DNS 收到顶级域名服务器的地址后，发起请求问“老二， 你能告诉我 "),o("a",x,[i("www.server.com"),a(e)]),i(" 的 IP 地址吗？”")]),o("li",null,[i("顶级域名服务器说：“我给你负责 "),o("a",C,[i("www.server.com"),a(e)]),i(" 区域的权威 DNS 服务器的地址，你去问它应该能问到”。")]),o("li",null,[i("本地 DNS 于是转向问权威 DNS 服务器：“老三，www.server.com对应的IP是啥呀？” "),o("a",M,[i("server.com"),a(e)]),i(" 的权威 DNS 服务器，它是域名解析结果的原出处。为啥叫权威呢？就是我的域名我做主。")]),A,_]),b])}const v=r(d,[["render",D],["__file","4.ip.html.vue"]]);export{v as default};
