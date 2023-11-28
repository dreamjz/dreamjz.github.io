import{_ as t,Z as l,$ as r,a0 as a,a1 as n,a2 as e,a3 as i,H as o}from"./framework-dee406ed.js";const c={},p=i(`<h2 id="_1-pgp、openpgp、gnupg-和-gpg" tabindex="-1"><a class="header-anchor" href="#_1-pgp、openpgp、gnupg-和-gpg" aria-hidden="true">#</a> 1. PGP、OpenPGP、GnuPG 和 gpg</h2><ul><li>PGP(Pretty Good Privacy)：最初的商業軟件名</li><li>OpenPGP： PGP 標準</li><li>GnuPG(Gnu Privacy Guard)：實現了 OpenPGP 的軟件</li><li>gpg：GnuPG 的命令行工具</li></ul><h2 id="_2-git-設計的缺陷" tabindex="-1"><a class="header-anchor" href="#_2-git-設計的缺陷" aria-hidden="true">#</a> 2. Git 設計的缺陷</h2><p>Git commit 中的 author 中的<code>user.name</code>和<code>user.email</code>可以任意設置，沒有進行任何的校驗。</p><p>可以通過<code>filer-branch</code>批量修改整個 Git 倉庫的歷史：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&quot;Destroy production&quot;</span>
<span class="token function">git</span> filter-branch --env-filter <span class="token punctuation">\\</span>
  <span class="token string">&#39;if [ &quot;$GIT_AUTHOR_EMAIL&quot; = &quot;iamthe@evilguy.com&quot; ]; then
     GIT_AUTHOR_EMAIL=&quot;unsuspecting@victim.com&quot;;
     GIT_AUTHOR_NAME=&quot;Unsuspecting Victim&quot;;
     GIT_COMMITTER_EMAIL=$GIT_AUTHOR_EMAIL;
     GIT_COMMITTER_NAME=&quot;$GIT_AUTHOR_NAME&quot;; fi&#39;</span> -- <span class="token parameter variable">--all</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-為-git-commit-添加簽名" tabindex="-1"><a class="header-anchor" href="#_3-為-git-commit-添加簽名" aria-hidden="true">#</a> 3. 為 Git commit 添加簽名</h2><h3 id="_3-1-作用" tabindex="-1"><a class="header-anchor" href="#_3-1-作用" aria-hidden="true">#</a> 3.1 作用</h3>`,8),d={href:"https://blog.spencerwoo.com/2020/08/wait-this-is-not-my-commit/",target:"_blank",rel:"noopener noreferrer"},u=a("li",null,[a("del",null,"GitHub 上帶有 Verified 標識，與眾不同")],-1),m=i(`<h3 id="_3-2-安裝-gpg" tabindex="-1"><a class="header-anchor" href="#_3-2-安裝-gpg" aria-hidden="true">#</a> 3.2 安裝 gpg</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># windows</span>
$ scoop <span class="token function">install</span> gpg

<span class="token comment"># linux 一般自帶</span>
<span class="token comment"># 沒有的話使用對應的包管理器安裝即可</span>
<span class="token comment"># arch</span>
$ pacman <span class="token parameter variable">-S</span> gpg

$ gpg <span class="token parameter variable">--version</span> 
gpg <span class="token punctuation">(</span>GnuPG<span class="token punctuation">)</span> <span class="token number">2.4</span>.3
libgcrypt <span class="token number">1.10</span>.2
Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2023</span> g10 Code GmbH
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-生成-gpg-密鑰對-公鑰和私鑰" tabindex="-1"><a class="header-anchor" href="#_3-3-生成-gpg-密鑰對-公鑰和私鑰" aria-hidden="true">#</a> 3.3 生成 gpg 密鑰對(公鑰和私鑰)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gpg --full-generate-key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>密鑰種類：選擇默認的 RSA 即可</li><li>密鑰長度：選擇 GitHub 推薦的 4096 bits</li><li>密鑰過期時間：根據自己的需要選擇</li><li>輸入用戶名和郵箱</li><li>設置安全密碼，<strong>密碼一定要記住</strong></li></ul><h3 id="_3-4-查看密鑰" tabindex="-1"><a class="header-anchor" href="#_3-4-查看密鑰" aria-hidden="true">#</a> 3.4 查看密鑰</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gpg --list-secret-keys --keyid-format<span class="token operator">=</span>long
<span class="token punctuation">..</span>.
sec   rsa4096/24CD550268849CA0 <span class="token number">2020</span>-08-29 <span class="token punctuation">[</span>SC<span class="token punctuation">]</span>
      9433E1B6807DE7C15E20DC3B24CD550268849CA0
uid                 <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span> Spencer Woo <span class="token punctuation">(</span>My GPG key<span class="token punctuation">)</span> <span class="token operator">&lt;</span>my@email.com<span class="token operator">&gt;</span>
ssb   rsa4096/EB754D2B2409E9FE <span class="token number">2020</span>-08-29 <span class="token punctuation">[</span>E<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中的<code>24CD550268849CA0</code>就是私鑰的 ID。</p><h3 id="_3-5-為-git-commit-添加簽名" tabindex="-1"><a class="header-anchor" href="#_3-5-為-git-commit-添加簽名" aria-hidden="true">#</a> 3.5 為 Git commit 添加簽名</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置 gpg 程序</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> gpg.program <span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> gpg<span class="token variable">)</span></span>
<span class="token comment"># 指定簽名用的密鑰</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.signingkey 24CD550268849CA0
<span class="token comment"># commit 時自動簽名</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> commit.gpgsign <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>commit 一次，之後查看 git log</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log --show-signature
commit 1c4a03ba8a9629d02913406099d03a5ff1aa200d <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> <span class="token builtin class-name">test</span><span class="token punctuation">)</span>
gpg: Signature made Wed Nov <span class="token number">22</span> 02:39:51 <span class="token number">2023</span> CST
gpg:                using RSA key xxx
gpg: Good signature from <span class="token string">&quot;xxx&quot;</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-導出公鑰並添加到-github-賬戶中" tabindex="-1"><a class="header-anchor" href="#_3-6-導出公鑰並添加到-github-賬戶中" aria-hidden="true">#</a> 3.6 導出公鑰並添加到 GitHub 賬戶中</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 獲取私鑰 ID</span>
$ gpg --list-secret-keys --keyid-format<span class="token operator">=</span>long
<span class="token punctuation">..</span>.
sec   rsa4096/24CD550268849CA0 <span class="token number">2020</span>-08-29 <span class="token punctuation">[</span>SC<span class="token punctuation">]</span>
<span class="token punctuation">..</span>.
<span class="token comment"># 生成公鑰</span>
$ gpg <span class="token parameter variable">--armor</span> <span class="token parameter variable">--export</span> 24CD550268849CA0
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),g={href:"https://github.com/settings/keys",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="_4-遷移-gpg-key" tabindex="-1"><a class="header-anchor" href="#_4-遷移-gpg-key" aria-hidden="true">#</a> 4. 遷移 gpg key</h2><p>有時需要在不同的開發環境中使用相同的 gpg 配置，此時就需要進行備份和遷移。</p><p>以 Windows 遷移到 ArchLinux 為例。</p><h3 id="_4-1-導出所需的-key" tabindex="-1"><a class="header-anchor" href="#_4-1-導出所需的-key" aria-hidden="true">#</a> 4.1 導出所需的 key</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 導出密鑰對到文件中</span>
$ gpg --export-secret-keys <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>keyid<span class="token operator">&gt;</span> <span class="token operator">&gt;</span> private_key.asc
$ gpg <span class="token parameter variable">--export</span> <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>keyid<span class="token operator">&gt;</span> <span class="token operator">&gt;</span> public_key.asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-導出-trust-db" tabindex="-1"><a class="header-anchor" href="#_4-2-導出-trust-db" aria-hidden="true">#</a> 4.2 導出 trust db</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gpg --export-ownertrust <span class="token operator">&gt;</span> file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若忽略這一步，在另一環境中，gpg 將提示密鑰 userid 為 unknown 狀態。</p><h3 id="_4-3-導入-key-和-trust-db" tabindex="-1"><a class="header-anchor" href="#_4-3-導入-key-和-trust-db" aria-hidden="true">#</a> 4.3 導入 key 和 trust db</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 導入 trust</span>
$ gpg --import-ownertrust <span class="token operator">&lt;</span> file.txt

<span class="token comment"># 導入密鑰</span>
gpg <span class="token parameter variable">--import</span> private_key.asc
gpg <span class="token parameter variable">--import</span> public_key.asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-配置-git" tabindex="-1"><a class="header-anchor" href="#_4-4-配置-git" aria-hidden="true">#</a> 4.4 配置 Git</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定簽名用的密鑰</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.signingkey <span class="token operator">&lt;</span>keyid<span class="token operator">&gt;</span>
<span class="token comment"># commit 時自動簽名</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> commit.gpgsign <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若出現了<code> gpg failed to sign the data</code></p><p>在對應 shell 的 profile 文件中添加（以 zsh 為例）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ~/.zprofile</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GPG_TTY</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">tty</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="參考" tabindex="-1"><a class="header-anchor" href="#參考" aria-hidden="true">#</a> 參考</h2>`,16),b={href:"https://en.wikipedia.org/wiki/Pretty_Good_Privacy",target:"_blank",rel:"noopener noreferrer"},h={href:"https://ulyc.github.io/2021/01/13/2021%E5%B9%B4-%E7%94%A8%E6%9B%B4%E7%8E%B0%E4%BB%A3%E7%9A%84%E6%96%B9%E6%B3%95%E4%BD%BF%E7%94%A8PGP-%E4%B8%8A/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.spencerwoo.com/2020/08/wait-this-is-not-my-commit/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://anandzhang.com/posts/essay/5",target:"_blank",rel:"noopener noreferrer"},f={href:"https://unix.stackexchange.com/questions/210348/how-to-migrate-gpg-trust-database-from-one-machine-to-another",target:"_blank",rel:"noopener noreferrer"},G={href:"https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification",target:"_blank",rel:"noopener noreferrer"};function x(y,P){const s=o("ExternalLinkIcon");return l(),r("div",null,[p,a("ul",null,[a("li",null,[n("防止惡意偽造 Git commit，參見"),a("a",d,[n("震惊！竟然有人在 GitHub 上冒充我的身份！ "),e(s)])]),u]),m,a("p",null,[n("將輸出的內容粘貼至 "),a("a",g,[n("Settings » SSH and GPG keys » New GPG key"),e(s)]),n(" 。")]),v,a("ol",null,[a("li",null,[a("a",b,[n("https://en.wikipedia.org/wiki/Pretty_Good_Privacy"),e(s)])]),a("li",null,[a("a",h,[n("用更现代的方法使用PGP"),e(s)])]),a("li",null,[a("a",k,[n("震惊！竟然有人在 GitHub 上冒充我的身份！ "),e(s)])]),a("li",null,[a("a",_,[n("迁移 GPG 密钥"),e(s)])]),a("li",null,[a("a",f,[n("How to migrate GPG trust database from one machine to another?"),e(s)])]),a("li",null,[a("a",G,[n("Managing commit signature verification"),e(s)])])])])}const A=t(c,[["render",x],["__file","gpg_key.html.vue"]]);export{A as default};