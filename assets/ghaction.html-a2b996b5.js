import{_ as t,Y as p,Z as c,$ as n,a0 as s,a1 as e,a2 as i,F as l}from"./framework-d955655f.js";const o={},u=i(`<p>之前一直都是手动部署至 github pages 和云服务器，虽然有写脚本但是还不够方便，于是想到使用 Github Action 进行自动化部署，只需 Push 即可触发。</p><h2 id="_1-github-action" tabindex="-1"><a class="header-anchor" href="#_1-github-action" aria-hidden="true">#</a> 1. Github Action</h2><p>GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署管道。 您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。</p><figure><img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/overview-actions-simple.png" alt="触发运行器 1（它触发运行器 2 以运行作业 2 ）以运行作业 1 的事件的示意图。 每个作业都分为多个步骤。" tabindex="0" loading="lazy"><figcaption>触发运行器 1（它触发运行器 2 以运行作业 2 ）以运行作业 1 的事件的示意图。 每个作业都分为多个步骤。</figcaption></figure><h3 id="工作流-workflow" tabindex="-1"><a class="header-anchor" href="#工作流-workflow" aria-hidden="true">#</a> 工作流 Workflow</h3><p>工作流程是一个可配置的自动化过程，它将运行一个或多个作业。 工作流程由签入到存储库的 YAML 文件定义，并在存储库中的事件触发时运行，也可以手动触发，或按定义的时间表触发。</p><p>工作流程在存储库的 <code>.github/workflows</code> 目录中定义，存储库可以有多个工作流程，每个工作流程都可以执行不同的任务集。</p><h3 id="事件-events" tabindex="-1"><a class="header-anchor" href="#事件-events" aria-hidden="true">#</a> 事件 Events</h3><p>事件是存储库中触发工作流程运行的特定活动。</p><h3 id="作业-actions" tabindex="-1"><a class="header-anchor" href="#作业-actions" aria-hidden="true">#</a> 作业 Actions</h3><p>作业是工作流中在同一运行器上执行的一组步骤。</p><h3 id="操作-runners" tabindex="-1"><a class="header-anchor" href="#操作-runners" aria-hidden="true">#</a> 操作 Runners</h3><p>操作是用于 GitHub Actions 平台的自定义应用程序，它执行复杂但经常重复的任务。</p><h2 id="_2-创建" tabindex="-1"><a class="header-anchor" href="#_2-创建" aria-hidden="true">#</a> 2. 创建</h2><p>在仓库界面选择 <code>Actions</code>, 创建自己的工作流。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy

<span class="token key atrule">on</span><span class="token punctuation">:</span> 
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
          <span class="token comment"># 如果你文档需要 Git 子模块，取消注释下一行</span>
          <span class="token comment"># submodules: true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">8</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build gh pages
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192
          <span class="token key atrule">SITE</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> vars.GH_SITE <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">GTAG_ID</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> vars.GH_GTAG_ID <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">G_SITE_VERI</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> vars.GH_G_SITE_VERI <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          pnpm run docs:build
          &gt; src/.vuepress/dist/.nojekyll</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy gh pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">personal_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACTIONS_PERSONAL_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">external_repository</span><span class="token punctuation">:</span> dreamjz/dreamjz.github.io
          <span class="token key atrule">publish_branch</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>v2<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope  <span class="token comment"># default: gh-pages</span>
          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> src/.vuepress/dist
          
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build blog pages
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192
          <span class="token key atrule">SITE</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> vars.SITE <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">GTAG_ID</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> vars.GTAG_ID <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">G_SITE_VERI</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> vars.G_SITE_VERI <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          pnpm run docs:build  </span>
          
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy blog pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">personal_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACTIONS_PERSONAL_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">external_repository</span><span class="token punctuation">:</span> dreamjz/xxx
          <span class="token key atrule">publish_branch</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>v2<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope  <span class="token comment"># default: gh-pages</span>
          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> src/.vuepress/dist
          
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install ssh keys
        <span class="token comment"># check this thread to understand why its needed:</span>
        <span class="token comment"># https://stackoverflow.com/a/70447517</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          install -m 600 -D /dev/null ~/.ssh/id_rsa
          echo &quot;\${{ secrets.SSH_PRIVATE_KEY }}&quot; &gt; ~/.ssh/id_rsa
          ssh-keyscan -H \${{ secrets.SSH_HOST }} &gt; ~/.ssh/known_hosts</span>
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> connect and pull
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          ssh \${{ secrets.SSH_USER }}@\${{ secrets.SSH_HOST }} \\
          &quot;cd \${{ secrets.WORK_DIR }} &amp;&amp; git fetch &amp;&amp; git checkout origin/\${{ vars.WORK_BRANCH }} &amp;&amp; exit&quot;</span>
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> cleanup
        <span class="token key atrule">run</span><span class="token punctuation">:</span> rm <span class="token punctuation">-</span>rf ~/.ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>name</code>: 工作流名称</li><li><code>on</code>: 触发条件，可以有多个 <ul><li><code>push</code>: push 至仓库时触发, <code>branch</code>：指定触发的分支</li><li><code>workflow_dispatch</code>： 手动触发</li></ul></li><li><code>jobs</code>: 作业流程 <ul><li><code>Deploy</code>: 作业id (job_id)</li><li><code>runs-on</code>: 运行器(Runner)</li><li><code>steps</code>： 步骤</li><li><code>env</code>: 环境变量</li><li><code>uses</code>: 调用现有的 jobs <ul><li><code>with</code>: 参数</li></ul></li><li><code>run</code>: 执行指令</li></ul></li><li><code>secrets</code>: 加密变量，以 <code>\\\${secrets.xxx}</code>形式调用</li><li><code>vars</code>: 变量，以 <code>\\\${vars.xxx}</code> 形式调用， 在 <code>Settings-&gt; Secrets and Variables-&gt; Action</code> 中配置</li></ul><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,18),r={href:"https://docs.github.com/en/actions/quickstart",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.programonaut.com/how-to-deploy-a-git-repository-to-a-server-using-github-actions/#action",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"Action",-1);function v(m,b){const a=l("ExternalLinkIcon");return p(),c("div",null,[u,n("ol",null,[n("li",null,[n("a",r,[s("Github Actions"),e(a)]),s(" Github")]),n("li",null,[n("a",d,[s("How To Deploy A Git Repository To A Server Using GitHub "),k,s("s"),e(a)])])])])}const _=t(o,[["render",v],["__file","ghaction.html.vue"]]);export{_ as default};
