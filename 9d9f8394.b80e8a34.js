(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return h}));var a=n(1),r=n(6),i=(n(0),n(171)),o={id:"troubleshooting",title:"Troubleshooting"},s={id:"troubleshooting",title:"Troubleshooting",description:"We try to give directed advice in Watchman error diagnostics, which means that",source:"@site/docs/troubleshooting.md",permalink:"/docs/troubleshooting",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/troubleshooting.md",sidebar:"sidebar",previous:{title:"Query Synchronization",permalink:"/docs/cookies"}},l=[{value:"Ensure that you are on the best available version",id:"ensure-that-you-are-on-the-best-available-version",children:[]},{value:"Recrawl",id:"recrawl",children:[{value:"Avoiding Recrawls",id:"avoiding-recrawls",children:[]},{value:"kFSEventStreamEventFlagUserDropped",id:"kfseventstreameventflaguserdropped",children:[]},{value:"I&#39;ve changed my limits, how can I clear the warning?",id:"ive-changed-my-limits-how-can-i-clear-the-warning",children:[]}]},{value:"Where are the logs?",id:"where-are-the-logs",children:[]},{value:'<a id="poison-inotify-add-watch"></a>Poison: inotify_add_watch',id:"a-idpoison-inotify-add-watchapoison-inotify_add_watch",children:[{value:"I&#39;ve changed my limits, how can I clear the error?",id:"ive-changed-my-limits-how-can-i-clear-the-error",children:[]}]},{value:"Poison: opendir",id:"poison-opendir",children:[{value:"How do I resolve this?",id:"how-do-i-resolve-this",children:[]}]},{value:"FSEvents",id:"fsevents",children:[{value:"FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() =&gt; (null) (-21)",id:"fseventstreamstart-register_with_server-error-f2d_register_rpc--null--21",children:[]}]},{value:"Triggers/Subscriptions don&#39;t fire on macOS",id:"triggerssubscriptions-dont-fire-on-macos",children:[]},{value:"ReactNative: Watcher took too long to load",id:"reactnative-watcher-took-too-long-to-load",children:[]}],c={rightToc:l};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We try to give directed advice in Watchman error diagnostics, which means that\nwe will show a link to a section on this page with some context and advice where\nwe have enough information to do so.  Some operating systems provide richer\ndiagnostic information than others, so we have to resort to more generic\nadvice in some cases."),Object(i.b)("p",null,"The most common cause of problems is hitting system resource limits.  There are\nfinite resources available for filesystem watching, and when they are exceeded\nit can impact performance in the best case or prohibit correct operation in the\nworst case."),Object(i.b)("h2",{id:"ensure-that-you-are-on-the-best-available-version"},"Ensure that you are on the best available version"),Object(i.b)("p",null,"It is generally a good idea to make sure that you are using the latest\nversion of the software, so that you avoid any known issues."),Object(i.b)("p",null,"If you are running a pre-built binary provided by your operating system\ndistribution system, there is a chance that you'll need to build the\nlatest version from source.  You can find instructions for this in\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"install"}),"the installation section"),"."),Object(i.b)("h2",{id:"recrawl"},"Recrawl"),Object(i.b)("p",null,"A recrawl is an action that Watchman performs in order to recover from\nsituations where it believes that it has lost sync with the state of the\nfilesystem."),Object(i.b)("p",null,"The most common cause for a recrawl is on Linux systems where the default\ninotify limits are sized quite small.  What this means is that the rate at\nwhich your watched roots are generating changes is higher than the kernel can\nbuffer and relay to the watchman service.  When this happens, the kernel\ndetects the overflow and signals ",Object(i.b)("inlineCode",{parentName:"p"},"IN_Q_OVERFLOW"),".  The recovery is to\nrecursively scan the root to make sure that we know what is really there and\nre-sync with the notification stream."),Object(i.b)("p",null,"Frequent recrawls are undesirable because they result in a potentially\nexpensive full tree crawl, which marks all files as changed and propagates this\nstatus to clients which will in turn perform some action on the (likely\nfalsely) changed state of the majority of files."),Object(i.b)("h3",{id:"avoiding-recrawls"},"Avoiding Recrawls"),Object(i.b)("p",null,"There is no simple formula for setting your system limits; bigger is better but\ncomes at the cost of kernel memory to maintain the buffers.  You and/or your\nsystem administrator should review the workload for your system and the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"install#system-specific-preparation"}),"System Specific Preparation Documentation")," and raise your limits\naccordingly."),Object(i.b)("h3",{id:"kfseventstreameventflaguserdropped"},"kFSEventStreamEventFlagUserDropped"),Object(i.b)("p",null,"macOS has a similar internal limit and behavior when that limit is exceeded.\nIf you're encountering a message like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Recrawled this watch 1 times, most recently because:\n/some/path: kFSEventStreamEventFlagUserDropped\n")),Object(i.b)("p",null,"then you are hitting the limits of your system.  There is no direct control\nover the limit, but starting in Watchman 3.2 you may increase the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"config#fsevents_latency"}),"fsevents_latency"),"\nparameter in your ",Object(i.b)("inlineCode",{parentName:"p"},".watchmanconfig")," file."),Object(i.b)("h3",{id:"ive-changed-my-limits-how-can-i-clear-the-warning"},"I've changed my limits, how can I clear the warning?"),Object(i.b)("p",null,"The warning will stick until you cancel the watch and reinstate it, or restart\nthe watchman process.  The simplest resolution is to run ",Object(i.b)("inlineCode",{parentName:"p"},"watchman\nshutdown-server")," and re-establish your watch on your next watchman query."),Object(i.b)("h2",{id:"where-are-the-logs"},"Where are the logs?"),Object(i.b)("p",null,"Watchman places logs in a file named ",Object(i.b)("inlineCode",{parentName:"p"},"<STATEDIR>/<USER>.log"),", where ",Object(i.b)("inlineCode",{parentName:"p"},"STATEDIR"),"\nis set at the time that you built watchman."),Object(i.b)("p",null,"If you used the ",Object(i.b)("inlineCode",{parentName:"p"},"--enable-statedir=<STATEDIR>")," configure option, that will\nbe the location that holds your logs.  If not, the default for ",Object(i.b)("inlineCode",{parentName:"p"},"STATEDIR"),"\nwill be ",Object(i.b)("inlineCode",{parentName:"p"},"<PREFIX>/var/run/watchman"),", or for older versions of watchman,\nthe logs may be placed in ",Object(i.b)("inlineCode",{parentName:"p"},"<TMPDIR>/.watchman.<USER>.log"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Since 3.8.")),Object(i.b)("p",null,"Watchman places the logs in a file named ",Object(i.b)("inlineCode",{parentName:"p"},"<STATEDIR>/log"),", which will\ntypically be a location like ",Object(i.b)("inlineCode",{parentName:"p"},"<PREFIX>/var/run/watchman/<USER>-state/log"),". If\nyou're running a ",Object(i.b)("inlineCode",{parentName:"p"},"homebrew")," build of watchman, ",Object(i.b)("inlineCode",{parentName:"p"},"<PREFIX>")," is usually ",Object(i.b)("inlineCode",{parentName:"p"},"/usr/local"),"."),Object(i.b)("p",null,"The default log location may be overridden by the ",Object(i.b)("inlineCode",{parentName:"p"},"--logfile")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"cli-options#server-options"}),"Server Option"),"."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"cli-options#quick-note-on-default-locations"}),"Quick note on default locations")," explains what\nwe mean by ",Object(i.b)("inlineCode",{parentName:"p"},"<STATEDIR>"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<TMPDIR>"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<USER>")," and so on."),Object(i.b)("h2",{id:"a-idpoison-inotify-add-watchapoison-inotify_add_watch"},Object(i.b)("a",{id:"poison-inotify-add-watch"}),"Poison: inotify_add_watch"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"A non-recoverable condition has triggered.  Watchman needs your help!\nThe triggering condition was at timestamp=1407695600: inotify-add-watch(/my/path) -> Cannot allocate memory\nAll requests will continue to fail with this message until you resolve\nthe underlying problem.  You will find more information on fixing this at\ndocs/troubleshooting#poison-inotify-add-watch\n")),Object(i.b)("p",null,"If you've encountered this state it means that your ",Object(i.b)("em",{parentName:"p"},"kernel")," was unable to\nwatch a dir in one or more of the roots you've asked it to watch.  This\nparticular condition is considered non-recoverable by Watchman on the basis\nthat nothing that the Watchman service can do can guarantee that the root cause\nis resolved, and while the system is in this state, Watchman cannot guarantee\nthat it can respond with the correct results that its clients depend upon.  We\nconsider ourselves poisoned and will fail all requests for all watches (not\njust the watch that it triggered on) until the process is restarted."),Object(i.b)("p",null,"There are two primary reasons that this can trigger:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The user limit on the total number of inotify watches was reached or the\nkernel failed to allocate a needed resource"),Object(i.b)("li",{parentName:"ul"},"Insufficient kernel memory was available")),Object(i.b)("p",null,"The resolution for the former is to revisit\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"install#system-specific-preparation"}),"System Specific Preparation Documentation")," and raise your limits\naccordingly."),Object(i.b)("p",null,"The latter condition implies that your workload is exceeding the available RAM\non the machine.  It is difficult to give specific advice to resolve this\ncondition here; you may be able to tune down other system limits to free up\nsome resources, or you may just need to install more RAM in the system."),Object(i.b)("h3",{id:"ive-changed-my-limits-how-can-i-clear-the-error"},"I've changed my limits, how can I clear the error?"),Object(i.b)("p",null,"The error will stick until you restart the watchman process.  The simplest\nresolution is:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Since 4.6")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ watchman watch-del-all\n$ watchman shutdown-server\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Before 4.6")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ rm <STATEDIR>/state       # see above for what STATEDIR means\n$ watchman --no-spawn --no-local shutdown-server\n")),Object(i.b)("p",null,"If you have not actually resolved the root cause you may continue to trigger\nand experience this state each time the system trips over these limits."),Object(i.b)("h2",{id:"poison-opendir"},"Poison: opendir"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"A non-recoverable condition has triggered.  Watchman needs your help!\nThe triggering condition was at timestamp=1407695600: opendir(/my/path) -> Too many open files in system\nAll requests will continue to fail with this message until you resolve\nthe underlying problem.  You will find more information on fixing this at\n/docs/troubleshooting#opendir\n")),Object(i.b)("p",null,"If you've encountered this state it means that your entire system had too many\nopen files, and that this prevented watchman from tracking the changes on your\nsystem.  In this case, the error isn't related to filesystem watching but to\nother (likely) misbehaving processes on your system; it's usually indicative of\na runaway program or set of programs consuming resources, but in some cases it\nmay just be that your system workload requires that you increase your system\nlimits for the number of files."),Object(i.b)("h3",{id:"how-do-i-resolve-this"},"How do I resolve this?"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"troubleshooting#ive-changed-my-limits-how-can-i-clear-the-warning"}),"Follow these directions")),Object(i.b)("p",null,"If the issue persists, consult your system administrator to identify what\nis consuming these resources and remediate it, or to increase your system\nlimits."),Object(i.b)("h2",{id:"fsevents"},"FSEvents"),Object(i.b)("p",null,"FSEvents is the file watching facility on macOS.  There are few diagnostics\nthat can help diagnose issues with FSEvents; the API itself gives little\nfeedback on a number of error cases and instead emits rather cryptic error\nmessages to the log file."),Object(i.b)("p",null,"If you got here because an error message told you to read this section,\nit will have also asked you to look at your log file.  If you are using an\nolder version of watchman and encounter the error message\n",Object(i.b)("inlineCode",{parentName:"p"},"FSEventStreamStart failed"),", then you should locate your log file (see\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#where-are-the-logs"}),"Where are the logs?")," above) and look for lines\nthat mention FSEvents and then consult the information below."),Object(i.b)("h3",{id:"fseventstreamstart-register_with_server-error-f2d_register_rpc--null--21"},"FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)"),Object(i.b)("p",null,"Nobody outside of Apple is sure what precisely this means, but it indicates\nthat the fsevents service has gotten in a bad state.  Possible reasons for\nthis may include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"There are too many event stream clients"),Object(i.b)("li",{parentName:"ul"},"One or more event stream clients has gotten in a bad state and is somehow\nimpacting the fsevents service")),Object(i.b)("p",null,"To resolve this issue, you may wish to try the following, which are\nprogressively more invasive:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Avoid establishing multiple overlapping watches within the same filesystem\ntree, especially for large trees.  We recommend watching only the root of a\nproject or repo and not watching sub-trees within that tree.  Organizations\nwith large trees may wish to deploy the\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"config#root_restrict_files"}),"root_restrict_files")," configuration option\nso that watchman will only allow watching project roots."),Object(i.b)("li",{parentName:"ul"},"Close or restart other applications that are using fsevents.\nSome examples are:"),Object(i.b)("li",{parentName:"ul"},"editors such as Sublime Text and TextMate."),Object(i.b)("li",{parentName:"ul"},"Many nodejs packages and Grunt style workflows make use of fsevents.\nMake sure that you upgrade nodejs to at least version ",Object(i.b)("inlineCode",{parentName:"li"},"v0.11.14"),".  If\npossible, configure your nodejs packages to use either\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/sane"}),"sane")," or\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/fb-watchman"}),"fb-watchman")," for file watching\nas this will consolidate the number of fsevents watches down to just the\nset maintained by watchman."),Object(i.b)("li",{parentName:"ul"},"Restart the fsevents service: ",Object(i.b)("inlineCode",{parentName:"li"},"sudo pkill -9 -x fseventsd")),Object(i.b)("li",{parentName:"ul"},"Restart your computer")),Object(i.b)("h2",{id:"triggerssubscriptions-dont-fire-on-macos"},"Triggers/Subscriptions don't fire on macOS"),Object(i.b)("p",null,"There is a rare fsevents bug that can prevent any notifications from working\nin directories where the case of the name of a directory in the kernel has\nan inconsistency."),Object(i.b)("p",null,"You can test whether this is happening to you by following ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/andreyvit/find-fsevents-bugs"}),"the instructions\nfor the find-fsevents-bugs tool"),"."),Object(i.b)("p",null,"If it is happening to you, the resolution is to rename the directories\nhighlighted by the tool."),Object(i.b)("p",null,"You can read more about this issue in the following resources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://feedback.livereload.com/knowledgebase/articles/86239-os-x-fsevents-bug-may-prevent-monitoring-of-certai"}),"Knowledge base article for LiveReload")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/thibaudgg/rb-fsevent/issues/10"}),"issue for the Ruby fsevents module")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://openradar.appspot.com/10207999"}),"Open Radar bug report"))),Object(i.b)("h2",{id:"reactnative-watcher-took-too-long-to-load"},"ReactNative: Watcher took too long to load"),Object(i.b)("p",null,"There was an issue that was the result of umask affecting the permissions of\nthe launchd plist file that Watchman uses to set up your watchman service on OS\nX.  This issue was resolved in Watchman version 3.1."),Object(i.b)("p",null,"To update:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"watchman shutdown-server\nbrew update\nbrew reinstall watchman\n")))}h.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),h=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=h(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=h(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,s({ref:t},c,{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);