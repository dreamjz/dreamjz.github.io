import{_ as s,X as t,Y as i,Z as e,$ as n,a0 as o,a1 as r,F as c}from"./framework-8cb7ec75.js";const l={},d=r(`<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1><p>Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s service. Then, with a single command, you create and start all service from your configuration.</p><p>Compose works in all environments: production, staging, development, testing, as well as CI workflows.</p><h2 id="_1-using-compose" tabindex="-1"><a class="header-anchor" href="#_1-using-compose" aria-hidden="true">#</a> 1. Using Compose</h2><p>Using compose is basically a three-step process:</p><ol><li>Define your app’s environment with a <code>Dockerfile</code> so it can be reproduced anywhere</li><li>Define the service that make up your app in <code>docker-compose.yml</code> so they can be run together in an isolated environment</li><li>Run <code>docker compose up</code> and the <code>Docker compose</code> command starts and runs your entire app</li></ol><p>A <code>docker-compose.yml</code> looks like this :</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>  <span class="token comment"># optional since v1.27.0</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5000:5000&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> .<span class="token punctuation">:</span>/code
      <span class="token punctuation">-</span> logvolume01<span class="token punctuation">:</span>/var/log
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> redis
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">logvolume01</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Compose has commands for managing the whole lifecycle of your application:</p><ul><li>Start, stop and rebuild services</li><li>View the status of the running services</li><li>Run a one-off command on a service</li></ul><h2 id="_2-multiple-isolated-environment-on-a-single-host" tabindex="-1"><a class="header-anchor" href="#_2-multiple-isolated-environment-on-a-single-host" aria-hidden="true">#</a> 2. Multiple isolated environment on a single host</h2><p>Compose use a project name to isolated environments from each other. You can make use of this project name in several different context:</p><ul><li>on a dev host, to create multiple copies of a single environment, such as when you want to run a stable copy for each feature branch of a project</li><li>on a CI server, to keep build from interfering with each other, you can set the project name to a unique build number</li><li>on a shared host or dev host, to prevent different projects, which may use the same service names, from interfering with each other</li></ul><p>The default project name is the basename of the project directory. You can set a custom project name by using <code>-p</code> command line option or the <code>COMPOSE_PROJECT_NAME</code> environment variable</p><p>The default project directory is the base directory of the Compose file. A custom value for it can be defined with the <code>--procjet-directory</code> command line option</p><h2 id="_3-preserve-volume-data-when-containers-are-created" tabindex="-1"><a class="header-anchor" href="#_3-preserve-volume-data-when-containers-are-created" aria-hidden="true">#</a> 3. Preserve volume data when containers are created</h2><p>Compose preserves all volumes used by your services. When <code>docker compose up</code> runs, if it finds any containers from previous runs, it copies the volumes from the old container to the new container. This process ensures that any data you’ve created in volumes isn’t lost</p><h2 id="_4-only-recreate-containers-that-have-changed" tabindex="-1"><a class="header-anchor" href="#_4-only-recreate-containers-that-have-changed" aria-hidden="true">#</a> 4. Only recreate containers that have changed</h2><p>Compose caches the configuration used to create a container. When you restart a service that not changed, Compose re-uses the existing containers. Re-using containers means that you can make changes to your environment very quickly</p><h2 id="_5-variables-and-moving-a-composition-between-environments" tabindex="-1"><a class="header-anchor" href="#_5-variables-and-moving-a-composition-between-environments" aria-hidden="true">#</a> 5. Variables and moving a composition between environments</h2><p>Compose supports variables in a Compose file. You can use these variables to customize your composition for different environment, of different users</p><p>You can extend a Compose file using the <code>extends</code> filed or by creating multiple Compose files.</p><h2 id="_6-common-use-cases" tabindex="-1"><a class="header-anchor" href="#_6-common-use-cases" aria-hidden="true">#</a> 6. Common use cases</h2><p>Compose can be used in many different ways. Some common use cases are outlined below</p><h3 id="_6-1-development-environment" tabindex="-1"><a class="header-anchor" href="#_6-1-development-environment" aria-hidden="true">#</a> 6.1 Development environment</h3><p>When you are developing software, the ability to run an isolated environment and interact with it is crucial. The Compose command line tool can be used to create the environment and interact with it</p><p>The Compose file provides a way to document and configure all of the application’s dependencies (database, queues, caches, web service APIs, etc.). Using the Compose command line tool you can create and start one or more containers for each dependency with a single command <code>docker compose up</code></p><p>Together, these features provide a convenient way for developers to get started on a project. Compose can reduce a multi-page “developer getting started guide” to a single machine readable Compose file and a few commands</p><h3 id="_6-2-automated-testing-environments" tabindex="-1"><a class="header-anchor" href="#_6-2-automated-testing-environments" aria-hidden="true">#</a> 6.2 Automated testing environments</h3><p>An important part of any Continuous Deployment or Continuous Integration process is the automated test suite. Automated end-to-end testing requires an environment in which to run tests. Compose provides a convenient way to create and destroy isolated testing environments for your testing suite. By defining the full environment in a Compose file, you can create and destroy these environments in just a few commands:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
$ ./run_tests
$ <span class="token function">docker</span> compose down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-single-host-deployments" tabindex="-1"><a class="header-anchor" href="#_6-3-single-host-deployments" aria-hidden="true">#</a> 6.3 Single host deployments</h3>`,32),p={href:"https://docs.docker.com/compose/production/",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),n(" Reference")],-1),m={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"};function h(v,f){const a=c("ExternalLinkIcon");return t(),i("div",null,[d,e("p",null,[n("see "),e("a",p,[n("compose in production"),o(a)])]),u,e("ol",null,[e("li",null,[e("a",m,[n("Overview of Docker Compose"),o(a)])])])])}const g=s(l,[["render",h],["__file","01.1.html.vue"]]);export{g as default};
