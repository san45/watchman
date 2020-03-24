(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(6),o=(n(0),n(171)),l={id:"install",title:"Installation"},r={id:"install",title:"Installation",description:"## System Requirements",source:"@site/docs/install.md",permalink:"/docs/install",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/install.md",sidebar:"sidebar",next:{title:"Release Notes",permalink:"/docs/release-notes"}},s=[{value:"System Requirements",id:"system-requirements",children:[]},{value:"Download for Windows (Beta)",id:"download-for-windows-beta",children:[]},{value:"Binary Downloads for Linux, macOS and Windows (Beta)",id:"binary-downloads-for-linux-macos-and-windows-beta",children:[]},{value:"Build/Install",id:"buildinstall",children:[{value:"Installing on macOS or Linux via Homebrew",id:"installing-on-macos-or-linux-via-homebrew",children:[]},{value:"Installing on macOS via macports",id:"installing-on-macos-via-macports",children:[]},{value:"Installing from source",id:"installing-from-source",children:[]},{value:"Compile Time Configuration Options",id:"compile-time-configuration-options",children:[]},{value:"Continuous Integration",id:"continuous-integration",children:[]}]},{value:"System Specific Preparation",id:"system-specific-preparation",children:[{value:"Linux inotify Limits",id:"linux-inotify-limits",children:[]},{value:"Mac OS File Descriptor Limits",id:"mac-os-file-descriptor-limits",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"system-requirements"},"System Requirements"),Object(o.b)("p",null,"Watchman is known to compile and pass its test suite on:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("i",{class:"fa fa-linux"})," Linux systems with `inotify`"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("i",{class:"fa fa-apple"})," macOS (uses `FSEvents` on 10.7+, `kqueue(2)` on earlier versions)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("i",{class:"fa fa-windows"})," Windows x64 on Windows 7, Windows Server 2012 R2 and later is currently in **beta** status.")),Object(o.b)("p",null,"Watchman used to support the following systems, but no one is actively\nmaintaining them.  The core of the code should be OK, but they likely don't\nbuild.  We'd love it if someone would step forward to maintain them:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"BSDish systems (FreeBSD 9.1, OpenBSD 5.2) that have the\n",Object(o.b)("inlineCode",{parentName:"li"},"kqueue(2)")," facility"),Object(o.b)("li",{parentName:"ul"},"Illumos and Solaris style systems that have ",Object(o.b)("inlineCode",{parentName:"li"},"port_create(3C)"))),Object(o.b)("p",null,"Watchman relies on the operating system facilities for file notification,\nwhich means that you will likely have very poor results using it on any\nkind of remote or distributed filesystem."),Object(o.b)("p",null,"Watchman does not currently support any other operating system not covered by\nthe list above."),Object(o.b)("h2",{id:"download-for-windows-beta"},"Download for Windows (Beta)"),Object(o.b)("p",null,"Watchman is considered to be in ",Object(o.b)("strong",{parentName:"p"},"beta")," status for Windows but has\na reasonably sized group of users depending on it already, and we expect\nto remove the beta label in the coming months."),Object(o.b)("p",null,"Watchman was built to support Windows Server 2012 R2 and later, but has\nhad community-provided patches that enable support for Windows 7 and later."),Object(o.b)("p",null,"At this time, we recommend running the latest master build of watchman on\nWindows; see below for binary downloads!"),Object(o.b)("p",null,"If you encounter issues with the Windows version of watchman, please report\nthem via GitHub!  ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/watchman/issues?utf8=%E2%9C%93&q=is%3Aopen+Windows"}),"You can find the list of known Windows issues here"),"."),Object(o.b)("h2",{id:"binary-downloads-for-linux-macos-and-windows-beta"},"Binary Downloads for Linux, macOS and Windows (Beta)"),Object(o.b)("p",null,"We use GitHub Actions to build binaries for the following platforms:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"macOS"),Object(o.b)("li",{parentName:"ul"},"Ubuntu 18.04"),Object(o.b)("li",{parentName:"ul"},"Windows")),Object(o.b)("p",null,"GitHub Actions doesn't provide a way to link directly to these builds at\nthis time, so you will need to follow these steps to download the binaries:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/watchman/actions?query=is%3Asuccess+event%3Apush+branch%3Amaster"}),"Navigate to recent CI builds")),Object(o.b)("li",{parentName:"ul"},"Click on the ",Object(o.b)("inlineCode",{parentName:"li"},"CI")," label")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/ci-link.png",alt:null}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Look in the top right of the resulting page for the ",Object(o.b)("inlineCode",{parentName:"li"},"Artifacts")," drop down")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/artifacts-download.png",alt:null}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click it to reveal the download artifacts link"),Object(o.b)("li",{parentName:"ul"},"Click that and extract the zip file"),Object(o.b)("li",{parentName:"ul"},"For Windows users:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Copy ",Object(o.b)("inlineCode",{parentName:"li"},"windows\\bin")," directory somewhere and add it to your ",Object(o.b)("inlineCode",{parentName:"li"},"PATH")," environment variable.")))),Object(o.b)("h2",{id:"buildinstall"},"Build/Install"),Object(o.b)("h3",{id:"installing-on-macos-or-linux-via-homebrew"},"Installing on macOS or Linux via Homebrew"),Object(o.b)("p",null,"To build the most recent release currently tracked by\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://brew.sh/"}),"Homebrew"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ brew update\n$ brew install watchman\n")),Object(o.b)("p",null,"To install the latest build from github:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ brew install --HEAD watchman\n")),Object(o.b)("h3",{id:"installing-on-macos-via-macports"},"Installing on macOS via macports"),Object(o.b)("p",null,"To install the package maintained by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.macports.org"}),"MacPorts"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo port install watchman\n")),Object(o.b)("h3",{id:"installing-from-source"},"Installing from source"),Object(o.b)("p",null,"You can use these steps below to get watchman built.  You will need ",Object(o.b)("inlineCode",{parentName:"p"},"libssl-dev"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"autoconf"),", ",Object(o.b)("inlineCode",{parentName:"p"},"automake")," and ",Object(o.b)("inlineCode",{parentName:"p"},"libtool")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"glibtool")," on macOS)."),Object(o.b)("p",null,"You may optionally build watchman without ",Object(o.b)("inlineCode",{parentName:"p"},"pcre")," and ",Object(o.b)("inlineCode",{parentName:"p"},"python")," support (see\nconfiguration options below)."),Object(o.b)("p",null,"For python support, you will need ",Object(o.b)("inlineCode",{parentName:"p"},"setuptools")," and may need to install a\n",Object(o.b)("inlineCode",{parentName:"p"},"python-dev")," or ",Object(o.b)("inlineCode",{parentName:"p"},"python-devel")," package. To build the C++ client library you will\nneed to install ",Object(o.b)("inlineCode",{parentName:"p"},"libfolly"),"."),Object(o.b)("p",null,"See below for some more information on options to configure your build."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ # use the latest stable release\n$ git clone https://github.com/facebook/watchman.git -b v4.9.0 --depth 1\n$ cd watchman \n$ ./autogen.sh\n$ ./configure\n$ make\n$ sudo make install\n")),Object(o.b)("h3",{id:"compile-time-configuration-options"},"Compile Time Configuration Options"),Object(o.b)("p",null,"Our configure script accepts all the standard options, but there are a couple\nthat are specific to watchman that might be relevant to your needs:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"--enable-conffile=PATH  Use PATH as the default configuration file name.\n                        Default is /etc/watchman.json\n\n--enable-statedir=PATH  Use PATH as the default for state, log files\n                        and sockets instead of using your system tempdir\n\n--enable-lenient  Turn off more pedantic levels of warnings\n                  and compilation checks\n\n--enable-stack-protector  Enable stack protection in the same\n                          way that rpmbuild does on some systems.\n\n--enable-cppclient  Enable build of the C++ client library. This is built by\n                    default if Folly is available.\n\n--with-buildinfo=TEXT   Include some extra build information that will\n                        be reported in the version command output\n\n--without-python        Disable python bindings\n--with-python=PATH      Enable Python bindings. PATH is location of python.\n                        Default is to look for python in your PATH\n\n--without-pcre       Don't enable pcre support.\n--with-pcre=PATH     Enable pcre support.  PATH is location of pcre-config.\n                     Default is to enable and look for pcre-config in your\n                     $PATH\n\n--with-folly=PATH  Specify root for Folly (needed for the C++ client library)\n                   https://github.com/facebook/folly\n")),Object(o.b)("p",null,"(Run ",Object(o.b)("inlineCode",{parentName:"p"},"./configure --help")," to get the list for the version you checked out)"),Object(o.b)("h3",{id:"continuous-integration"},"Continuous Integration"),Object(o.b)("p",null,"We use continuous integration to build out every revision and\npull-request to make sure that we don't accidentally break things.  The\ncurrent build status is:"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://travis-ci.org/facebook/watchman"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://travis-ci.org/facebook/watchman.svg?branch=master",alt:"Build Status"})))),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://ci.appveyor.com/project/wez/watchman/branch/master"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://ci.appveyor.com/api/projects/status/uvafoyc550kg438h/branch/master?svg=true",alt:"Build status"})))),Object(o.b)("h2",{id:"system-specific-preparation"},"System Specific Preparation"),Object(o.b)("h3",{id:"linux-inotify-limits"},"Linux inotify Limits"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"inotify(7)")," subsystem has three important tunings that impact watchman."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/proc/sys/fs/inotify/max_user_instances")," impacts how many different\nroot dirs you can watch."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/proc/sys/fs/inotify/max_user_watches")," impacts how many dirs you\ncan watch across all watched roots."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/proc/sys/fs/inotify/max_queued_events")," impacts how likely it is that\nyour system will experience a notification overflow.")),Object(o.b)("p",null,"You obviously need to ensure that ",Object(o.b)("inlineCode",{parentName:"p"},"max_user_instances")," and ",Object(o.b)("inlineCode",{parentName:"p"},"max_user_watches"),"\nare set so that the system is capable of keeping track of your files."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"max_queued_events")," is important to size correctly; if it is too small, the\nkernel will drop events and watchman won't be able to report on them.  Making\nthis value bigger reduces the risk of this happening."),Object(o.b)("p",null,"Watchman has two simple strategies for mitigating an overflow of\n",Object(o.b)("inlineCode",{parentName:"p"},"max_queued_events"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It uses a dedicated thread to consume kernel events as quickly as possible"),Object(o.b)("li",{parentName:"ul"},"When the kernel reports an overflow, watchman will assume that all the files\nhave been modified and will re-crawl the directory tree as though it had just\nstarted watching the dir.")),Object(o.b)("p",null,"This means that if an overflow does occur, you won't miss a legitimate change\nnotification, but instead will get spurious notifications for files that\nhaven't actually changed."),Object(o.b)("h3",{id:"mac-os-file-descriptor-limits"},"Mac OS File Descriptor Limits"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Only applicable on macOS 10.6 and earlier")),Object(o.b)("p",null,"The default per-process descriptor limit on macOS is extremely low (256!)."),Object(o.b)("p",null,"Watchman will attempt to raise its descriptor limit to match\n",Object(o.b)("inlineCode",{parentName:"p"},"kern.maxfilesperproc")," when it starts up, so you shouldn't need to mess with\n",Object(o.b)("inlineCode",{parentName:"p"},"ulimit"),"; just raising the sysctl should do the trick."),Object(o.b)("p",null,"The following will raise the limits to allow 10 million files total, with 1\nmillion files per process until your next reboot."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo sysctl -w kern.maxfiles=10485760\n$ sudo sysctl -w kern.maxfilesperproc=1048576\n")),Object(o.b)("p",null,"Putting the following into a file named ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/sysctl.conf")," on macOS will cause\nthese values to persist across reboots:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"kern.maxfiles=10485760\nkern.maxfilesperproc=1048576\n")))}b.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},u=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?i.a.createElement(d,r({ref:t},c,{components:n})):i.a.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);