import{_ as i,Z as l,$ as c,a0 as n,a1 as s,a2 as a,a3 as e,H as o}from"./framework-dee406ed.js";const r={},u=e('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>程序中经常需要发邮件，比如用户完成一笔交易之后会发送一封通知邮件给用户，用户可以将邮件作为交易的凭证，还有邮件用于通知性的业务，比如通知管理员系统异常等</p><p>Golang中可以通过开源库<code>email</code>来发送邮件，<code>email</code>是一个易用的，健壮的，灵活的Golang库，目标是提供更加人性化的email接口</p><p>注意：当前<code>email</code>库不支持<code>STARTTLS</code>认证的邮箱（2021/11/06）,如<code>outlook</code>，可能后续会增加此特性(作者已经表示准备Merge相关的PR)</p>',4),d={href:"https://github.com/go-gomail",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/go-gomail/gomail",target:"_blank",rel:"noopener noreferrer"},m=e('<h2 id="电子邮件" tabindex="-1"><a class="header-anchor" href="#电子邮件" aria-hidden="true">#</a> 电子邮件</h2><h3 id="协议" tabindex="-1"><a class="header-anchor" href="#协议" aria-hidden="true">#</a> 协议</h3><p>在使用<code>email</code>库之前，先需要了解几个电子邮件协议：</p><ul><li><strong>SMTP</strong><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>:<strong>简单邮件传输协议</strong>(<strong>S</strong>imple <strong>M</strong>ail <strong>T</strong>ransfer <strong>P</strong>rotocol),它是一组用于从源地址到目的地址传输邮件的规范，通过它来控制邮件的中转方式。SMTP 协议属于 TCP/IP 协议簇，它帮助每台计算机在发送或中转信件时找到下一个目的地。SMTP 服务器就是遵循 SMTP 协议的发送邮件服务器</li><li><strong>POP3<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></strong>:<strong>邮局协议</strong>（<strong>P</strong>ost <strong>O</strong>ffice <strong>P</strong>rotocol）,POP3是其第三个版本，它规定怎样将个人计算机连接到Internet的邮件服务器和下载电子邮件的电子协议。它是因特网电子邮件的第一个离线协议标准,POP3允许用户从服务器上把邮件存储到本地主机（即自己的计算机）上,同时删除保存在邮件服务器上的邮件，而POP3服务器则是遵循POP3协议的接收邮件服务器，用来接收电子邮件的</li><li><strong>IMAP<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></strong>:<strong>交互式邮件存取协议</strong>(<strong>I</strong>nternet <strong>M</strong>ail <strong>A</strong>ccess <strong>P</strong>rotocol),即交互式邮件存取协议，它是跟POP3类似邮件访问标准协议之一。不同的是，开启了IMAP后，您在电子邮件客户端收取的邮件仍然保留在服务器上，同时在客户端上的操作都会反馈到服务器上，如：删除邮件，标记已读等，服务器上的邮件也会做相应的动作。所以无论从浏览器登录邮箱或者客户端软件登录邮箱，看到的邮件以及状态都是一致的</li></ul><h3 id="系统组成" tabindex="-1"><a class="header-anchor" href="#系统组成" aria-hidden="true">#</a> 系统组成</h3><p>电子邮件系统仅有协议是无法单独运作的，电子邮件系统主要有三个组成构件:</p><ul><li><strong>邮件用户代理</strong>：<strong>MUA</strong>(<strong>M</strong>ail <strong>U</strong>ser <strong>A</strong>gent)，为用户提供一种可对邮件进行编辑、阅读、发送、存储及管理的工具</li><li><strong>邮件服务器</strong></li><li><strong>邮件传输协议</strong></li></ul><p>其中的邮件服务器和邮件传输协议并称为<strong>MTA</strong>(<strong>M</strong>ail <strong>T</strong>ransfer <strong>A</strong>gent,邮件传输代理)，邮件服务器至少需要两种协议：用于发送邮件(SMTP)和接收邮件(POP3/IMAP)</p><h3 id="发送流程" tabindex="-1"><a class="header-anchor" href="#发送流程" aria-hidden="true">#</a> 发送流程</h3><p>假设<code>Alice@163.com</code>给<code>Bob@sina.com</code>发送一封电子邮件，电子邮件不是直接发送到Bob的电脑上的，流程如下：</p><ul><li>Alice在邮箱客户端(MUA)编写并发送邮件,此时邮件被发送到163的邮箱服务器(MTA)</li><li>163的邮箱服务器将邮件发送值sina的邮箱服务器(MTA)</li><li>sina的邮箱服务器(MTA)会将邮件发送到邮件投递代理(MDA,<strong>M</strong>ail <strong>D</strong>elivery <strong>A</strong>gent)中,邮件会存储在服务器上</li><li>Bob通过邮件客户端(MUA)从MDA中获取邮件</li></ul>',11),g=e(`<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><p>这里以Gmail为例(需要暂时关闭安全访问，记得测试后开启)：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// go-daily-lib-note/email/quick-start/main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/smtp&quot;</span>

	<span class="token string">&quot;github.com/jordan-wright/email&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	e <span class="token operator">:=</span> email<span class="token punctuation">.</span><span class="token function">NewEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	e<span class="token punctuation">.</span>From <span class="token operator">=</span> <span class="token string">&quot;sender@gmail.com&quot;</span>
	e<span class="token punctuation">.</span>To <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;receiver@qq.com&quot;</span><span class="token punctuation">}</span>
	e<span class="token punctuation">.</span>Subject <span class="token operator">=</span> <span class="token string">&quot;Awesome Email&quot;</span>
	e<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;Text Body is, of course, supported!&quot;</span><span class="token punctuation">)</span>
	err <span class="token operator">:=</span> e<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token string">&quot;smtp.gmail.com:587&quot;</span><span class="token punctuation">,</span> smtp<span class="token punctuation">.</span><span class="token function">PlainAuth</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sender@gmail.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;smtp.gmail.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;send email failed &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录收件邮箱，可以看到刚刚发送的邮件：</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/email-send.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由于Gmail是支持<code>PlainAuth</code>的，可以使用明文的<code>user/pass</code>验证；但是若邮箱服务不支持此验证方式将会报错：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">504</span> <span class="token number">5.7</span>.4 Unrecognized authentication <span class="token builtin class-name">type</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以使用<code>telnet</code>连接邮件服务器，查看其支持的验证方式(以outlook为例) ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>telnet smtp-mail.outlook.com <span class="token number">25</span>
Trying <span class="token number">52.98</span>.40.66<span class="token punctuation">..</span>.
Connected to smtp-mail.outlook.com.
Escape character is <span class="token string">&#39;^]&#39;</span><span class="token builtin class-name">.</span>
<span class="token number">220</span> HKAPR*****.outlook.office365.com Microsoft ESMTP MAIL Service ready at Sat, <span class="token number">6</span> Nov <span class="token number">2021</span> <span class="token number">12</span>:42:51 +0000
helo
<span class="token number">250</span> HKAPR*****.outlook.office365.com Hello <span class="token punctuation">[</span><span class="token number">183.12</span>.236.224<span class="token punctuation">]</span>
ehlo
<span class="token number">250</span>-HKAPR04CA0010.outlook.office365.com Hello <span class="token punctuation">[</span><span class="token number">183.12</span>.236.224<span class="token punctuation">]</span>
<span class="token number">250</span>-SIZE <span class="token number">157286400</span>
<span class="token number">250</span>-PIPELINING
<span class="token number">250</span>-DSN
<span class="token number">250</span>-ENHANCEDSTATUSCODES
<span class="token number">250</span>-STARTTLS
<span class="token number">250</span>-8BITMIME
<span class="token number">250</span>-BINARYMIME
<span class="token number">250</span>-CHUNKING
<span class="token number">250</span> SMTPUTF8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，此处outlook是不支持<code>PlainAuth</code>的</p><h2 id="抄送" tabindex="-1"><a class="header-anchor" href="#抄送" aria-hidden="true">#</a> 抄送</h2><p>发送邮件有时需要抄送(CC, Carbon Copy)和秘密抄送(BCC, Blind Carbon Copy)</p><p>修改上面的例子，加上抄送和秘密抄送人：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// go-daily-lib-note/email/quick-start/main.go</span>
<span class="token comment">// ...</span>
e<span class="token punctuation">.</span>Cc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;test1@126.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test2@126.com&quot;</span><span class="token punctuation">}</span>
e<span class="token punctuation">.</span>Bcc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;secret@126.com&quot;</span><span class="token punctuation">}</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html格式" tabindex="-1"><a class="header-anchor" href="#html格式" aria-hidden="true">#</a> HTML格式</h2><p>邮件正文可以使用HTML格式，修改上例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// go-daily-lib-note/email/quick-start/main.go</span>
<span class="token comment">// ...</span>
e<span class="token punctuation">.</span>HTML <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">\`
&lt;h1&gt;Awesome Email&lt;/h1&gt;
&lt;p&gt;Text Body is, of course, supported!&lt;/p&gt;
\`</span><span class="token punctuation">)</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h2><p>使用<code>AttachFile</code>方法可以添加附件,修改上例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// go-daily-lib-note/email/quick-start/main.go</span>
<span class="token comment">// ...</span>
file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;text.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE<span class="token operator">|</span>os<span class="token punctuation">.</span>O_WRONLY<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;create file error &quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	file<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;This is a mail attachment&quot;</span><span class="token punctuation">)</span>

	e<span class="token punctuation">.</span><span class="token function">AttachFile</span><span class="token punctuation">(</span><span class="token string">&quot;text.txt&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="连接池" tabindex="-1"><a class="header-anchor" href="#连接池" aria-hidden="true">#</a> 连接池</h2><p>每次调用<code>Send</code>方法时都会与SMTP服务器建立连接，如果发送频繁的话会有性能问题，<code>email</code>提供了连接池，可以服用连接</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// </span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/smtp&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;time&quot;</span>

	<span class="token string">&quot;github.com/jordan-wright/email&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>email<span class="token punctuation">.</span>Email<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	pool<span class="token punctuation">,</span> err <span class="token operator">:=</span> email<span class="token punctuation">.</span><span class="token function">NewPool</span><span class="token punctuation">(</span><span class="token string">&quot;smtp.gmail.com:587&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> smtp<span class="token punctuation">.</span><span class="token function">PlainAuth</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;xxx@gmail.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pass&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;smtp.gmail.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;create pool failed:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">for</span> e <span class="token operator">:=</span> <span class="token keyword">range</span> ch <span class="token punctuation">{</span>
				err <span class="token operator">:=</span> pool<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
				<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
					fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;email: %v sent error:%v\\n&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		e <span class="token operator">:=</span> email<span class="token punctuation">.</span><span class="token function">NewEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		e<span class="token punctuation">.</span>From <span class="token operator">=</span> <span class="token string">&quot;dreamjzwork@outlook.com&quot;</span>
		e<span class="token punctuation">.</span>To <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;xxx@qq.com&quot;</span><span class="token punctuation">}</span>
		e<span class="token punctuation">.</span>Cc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;xxx@qq.com&quot;</span><span class="token punctuation">}</span>
		e<span class="token punctuation">.</span>Bcc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;xxx@gmail.com&quot;</span><span class="token punctuation">}</span>
		e<span class="token punctuation">.</span>Subject <span class="token operator">=</span> <span class="token string">&quot;Awesome Email:&quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
		e<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;Text Body is, of course, supported!&quot;</span><span class="token punctuation">)</span>
		e<span class="token punctuation">.</span>HTML <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">\`
&lt;h1&gt;Awesome Email&lt;/h1&gt;
&lt;p&gt;Text Body is, of course, supported!&lt;/p&gt;
\`</span><span class="token punctuation">)</span>
		ch <span class="token operator">&lt;-</span> e
	<span class="token punctuation">}</span>
	<span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中创建4个goroutine发送一共10封邮件，为了等待邮件都完成或者失败，使用了<code>Sync.WaitGroup</code></p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,25),v={href:"https://darjun.github.io/2020/02/16/godailylib/email/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/jordan-wright",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/jordan-wright/email",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zh.wikipedia.org/wiki/%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.liaoxuefeng.com/wiki/1016959663602400/1017790556023936",target:"_blank",rel:"noopener noreferrer"},q={href:"http://help.163.com/09/1223/14/5R7P6CJ600753VB8.html?servCode=6010376",target:"_blank",rel:"noopener noreferrer"},w={href:"https://stackoverflow.com/questions/57783841/how-to-send-email-using-outlooks-smtp-servers",target:"_blank",rel:"noopener noreferrer"},E=n("hr",{class:"footnotes-sep"},null,-1),A={class:"footnotes"},P={class:"footnotes-list"},x={id:"footnote1",class:"footnote-item"},B={href:"https://zh.wikipedia.org/wiki/%E7%AE%80%E5%8D%95%E9%82%AE%E4%BB%B6%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"},T=n("strong",null,"S",-1),M=n("strong",null,"M",-1),y=n("strong",null,"T",-1),S=n("strong",null,"P",-1),C=n("strong",null,"SMTP",-1),z={href:"https://zh.wikipedia.org/wiki/%E7%B6%B2%E9%9A%9B%E7%B6%B2%E8%B7%AF",target:"_blank",rel:"noopener noreferrer"},I={href:"https://zh.wikipedia.org/wiki/%E9%9B%BB%E5%AD%90%E9%83%B5%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},O=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),F={id:"footnote2",class:"footnote-item"},L={href:"https://zh.wikipedia.org/wiki/%E9%83%B5%E5%B1%80%E5%8D%94%E5%AE%9A",target:"_blank",rel:"noopener noreferrer"},N=n("strong",null,"P",-1),D=n("strong",null,"O",-1),U=n("strong",null,"P",-1),R=n("strong",null,"POP",-1),j={href:"https://zh.wikipedia.org/wiki/TCP/IP",target:"_blank",rel:"noopener noreferrer"},G={href:"https://tools.ietf.org/html/rfc1939",target:"_blank",rel:"noopener noreferrer"},H={href:"https://zh.wikipedia.org/wiki/%E5%AE%A2%E6%88%B7%E7%AB%AF",target:"_blank",rel:"noopener noreferrer"},J={href:"https://zh.wikipedia.org/wiki/%E6%9C%8D%E5%8A%A1%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},W={href:"https://zh.wikipedia.org/wiki/%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},Y=n("strong",null,"POP3",-1),Z={href:"https://zh.wikipedia.org/wiki/SSL",target:"_blank",rel:"noopener noreferrer"},V=n("strong",null,"POP3S",-1),K=n("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),Q={id:"footnote3",class:"footnote-item"},X={href:"https://zh.wikipedia.org/wiki/%E5%9B%A0%E7%89%B9%E7%BD%91%E4%BF%A1%E6%81%AF%E8%AE%BF%E9%97%AE%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"},$=n("strong",null,"I",-1),nn=n("strong",null,"M",-1),sn=n("strong",null,"A",-1),an=n("strong",null,"P",-1),tn=n("strong",null,"IMAP",-1),en=n("strong",null,"交互邮件访问协议",-1),on={href:"https://zh.wikipedia.org/wiki/Microsoft",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://zh.wikipedia.org/wiki/Outlook",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://zh.wikipedia.org/wiki/Outlook_Express",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://zh.wikipedia.org/wiki/Foxmail",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://zh.wikipedia.org/wiki/Mozilla_Thunderbird",target:"_blank",rel:"noopener noreferrer"},un=n("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1);function dn(kn,mn){const t=o("ExternalLinkIcon"),p=o("FlowChart");return l(),c("div",null,[u,n("p",null,[s("若想要在项目中实际使用的话建议使用功能较为完善的"),n("a",d,[s("go-gomail"),a(t)]),s("/"),n("strong",null,[n("a",k,[s("gomail"),a(t)])])]),m,a(p,{id:"flowchart-95",code:"eJwrLrG1Ky5JLCqxUnDMyUxOdTA0M9ZLzs/lyi8wtLXLL0gtSizJzM+zUvANddQAymkCJYxQJULgEsYYEsWZeYkgGRNUGReEjCmGLRCZVFu71LwUKwWn/CQHkAjYUcUlGkWZ6RklmrpATYZIbCMktjES2wSJbQpnp3IBAJZgT7w=",preset:"vue"}),g,n("ol",null,[n("li",null,[n("p",null,[n("a",v,[s("Go 每日一库之 email"),a(t)]),s(" darjun blog")])]),n("li",null,[n("p",null,[n("a",h,[s("jordan-wright"),a(t)]),s("/"),n("strong",null,[n("a",b,[s("email"),a(t)])]),s(" github repo")])]),n("li",null,[n("p",null,[n("a",f,[s("电子邮件"),a(t)]),s(" 维基百科")])]),n("li",null,[n("p",null,[n("a",_,[s("电子邮件"),a(t)]),s(" liaoxuefeng")])]),n("li",null,[n("p",null,[n("a",q,[s("什么是POP3、SMTP和IMAP?"),a(t)]),s(" 163email help")])]),n("li",null,[n("p",null,[n("a",w,[s("How to send email using Outlook's SMTP servers?"),a(t)]),s(" stackoverflow")])])]),E,n("section",A,[n("ol",P,[n("li",x,[n("p",null,[n("strong",null,[n("a",B,[s("简单邮件传输协议"),a(t)])]),s("（英语："),T,s("imple "),M,s("ail "),y,s("ransfer "),S,s("rotocol，缩写："),C,s("）是一个在"),n("a",z,[s("互联网"),a(t)]),s("上传输"),n("a",I,[s("电子邮件"),a(t)]),s("的标准 "),O])]),n("li",F,[n("p",null,[n("strong",null,[n("a",L,[s("邮局协议"),a(t)])]),s("（英语："),N,s("ost "),D,s("ffice "),U,s("rotocol，缩写："),R,s("）是"),n("a",j,[s("TCP/IP"),a(t)]),s("协议族中的一员，由1996年5月发行之 "),n("a",G,[s("RFC 1939"),a(t)]),s(" 首次定义。此协议主要用于支持使用"),n("a",H,[s("客户端"),a(t)]),s("远程管理在"),n("a",J,[s("服务器"),a(t)]),s("上的"),n("a",W,[s("电子邮件"),a(t)]),s("。最新版本为"),Y,s("，全名“Post Office Protocol - Version 3”，而提供了"),n("a",Z,[s("SSL"),a(t)]),s("加密的POP3协议被称为"),V,s(),K])]),n("li",Q,[n("p",null,[n("strong",null,[n("a",X,[s("因特网信息访问协议"),a(t)])]),s("（英语："),$,s("nternet "),nn,s("essage "),sn,s("ccess "),an,s("rotocol，缩写："),tn,s("；以前称作"),en,s("）是一个应用层协议，用来从本地邮件客户端（如"),n("a",on,[s("Microsoft"),a(t)]),s(),n("a",pn,[s("Outlook"),a(t)]),s("、"),n("a",ln,[s("Outlook Express"),a(t)]),s("、"),n("a",cn,[s("Foxmail"),a(t)]),s("、"),n("a",rn,[s("Mozilla Thunderbird"),a(t)]),s("）访问远程服务器上的邮件 "),un])])])])])}const vn=i(r,[["render",dn],["__file","email.html.vue"]]);export{vn as default};