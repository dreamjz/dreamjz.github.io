(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{590:function(e,t,o){"use strict";o.r(t);var n=o(2),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"spf13-vim"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#spf13-vim"}},[e._v("#")]),e._v(" Spf13-vim")]),e._v(" "),o("h2",{attrs:{id:"plugins"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" Plugins")]),e._v(" "),o("p",[e._v("spf13-vim contains a curated set of popular vim plugins, colors, snippets and syntaxes. Great care has been made to ensure that these plugins play well together and have optimal configuration.")]),e._v(" "),o("h3",{attrs:{id:"adding-new-plugins"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-plugins"}},[e._v("#")]),e._v(" Adding new plugins")]),e._v(" "),o("p",[e._v("Create "),o("code",[e._v("~/.vimrc.boundles.local")]),e._v(" for any additional bundles.")]),e._v(" "),o("p",[e._v("To add a new bundle, just add one line for each bundle you want to install. The line should start with the word “Bundle” followed by a string of either the vim.org project name or the githubusername/githubprojectname. For example, the github project "),o("a",{attrs:{href:"https://github.com/spf13/vim-colors",target:"_blank",rel:"noopener noreferrer"}},[e._v("spf13/vim-colors"),o("OutboundLink")],1),e._v(" can be added with the following command")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("echo Bundle \\'spf13/vim-colors\\' >> ~/.vimrc.bundles.local\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("Once new plugins are added, they have to be installed.")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("    vim +BundleInstall! +BundleClean +q\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("h3",{attrs:{id:"removing-disabling-an-included-plugin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#removing-disabling-an-included-plugin"}},[e._v("#")]),e._v(" Removing (disabling) an included plugin")]),e._v(" "),o("p",[e._v("Create "),o("code",[e._v("~/.vimrc.local")]),e._v(" if it doesn't already exist.")]),e._v(" "),o("p",[e._v("Add the UnBundle command to this line. It takes the same input as the Bundle line, so simply copy the line you want to disable and add 'Un' to the beginning.")]),e._v(" "),o("p",[e._v("For example, disabling the 'AutoClose' and 'scrooloose/syntastic' plugins")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("    echo UnBundle \\'AutoClose\\' >> ~/.vimrc.bundles.local\n    echo UnBundle \\'scrooloose/syntastic\\' >> ~/.vimrc.bundles.local\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br")])]),o("p",[o("strong",[e._v("Remember to run ':BundleClean!' after this to remove the existing directories")])]),e._v(" "),o("p",[e._v("Here are a few of the plugins:")]),e._v(" "),o("h3",{attrs:{id:"youcompleteme"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#youcompleteme"}},[e._v("#")]),e._v(" "),o("a",{attrs:{href:"https://github.com/Valloric/YouCompleteMe",target:"_blank",rel:"noopener noreferrer"}},[e._v("YouCompleteMe"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("YouCompleteMe is another amazing completion engine. It is slightly more involved to set up as it contains a binary component that the user needs to compile before it will work. As a result of this however it is very fast.")]),e._v(" "),o("p",[e._v("To enable YouCompleteMe add "),o("code",[e._v("youcompleteme")]),e._v(" to your list of groups by overriding it in your "),o("code",[e._v(".vimrc.before.local")]),e._v(" like so: "),o("code",[e._v("let g:spf13_bundle_groups=['general', 'programming', 'misc', 'scala', 'youcompleteme']")]),e._v(" This is just an example. Remember to choose the other groups you want here.")]),e._v(" "),o("p",[e._v("Once you have done this you will need to get Vundle to grab the latest code from git. You can do this by calling "),o("code",[e._v(":BundleInstall!")]),e._v(". You should see YouCompleteMe in the list.")]),e._v(" "),o("p",[e._v("You will now have the code in your bundles directory and can proceed to compile the core. Change to the directory it has been downloaded to. If you have a vanilla install then "),o("code",[e._v("cd ~/.spf13-vim-3/.vim/bundle/YouCompleteMe/")]),e._v(" should do the trick. You should see a file in this directory called install.sh. There are a few options to consider before running the installer:")]),e._v(" "),o("ul",[o("li",[e._v("Do you want clang support (if you don't know what this is then you likely don't need it)?\n"),o("ul",[o("li",[e._v("Do you want to link against a local libclang or have the installer download the latest for you?")])])]),e._v(" "),o("li",[e._v("Do you want support for c# via the omnisharp server?")])]),e._v(" "),o("p",[e._v("The plugin is well documented on the site linked above. Be sure to give that a read and make sure you understand the options you require.")]),e._v(" "),o("p",[e._v("For java users wanting to use eclim be sure to add "),o("code",[e._v("let g:EclimCompletionMethod = 'omnifunc'")]),e._v(" to your .vimrc.local.")])])}),[],!1,null,null,null);t.default=a.exports}}]);