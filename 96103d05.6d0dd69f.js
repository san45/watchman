(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{132:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(1),a=t(6),o=(t(0),t(171)),i={id:"socket-interface",title:"Socket Interface"},c={id:"socket-interface",title:"Socket Interface",description:"Most simple uses of Watchman will invoke the watchman binary and process its",source:"@site/docs/socket-interface.md",permalink:"/docs/socket-interface",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/socket-interface.md",sidebar:"sidebar",previous:{title:"Configuration Files",permalink:"/docs/config"},next:{title:"Compatibility Rules",permalink:"/docs/compatibility"}},s=[{value:"Watchman Protocol",id:"watchman-protocol",children:[{value:"JSON encoding",id:"json-encoding",children:[]},{value:"BSER encoding",id:"bser-encoding",children:[]},{value:"Reporting Errors and Warnings",id:"reporting-errors-and-warnings",children:[]}]}],l={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Most simple uses of Watchman will invoke the watchman binary and process its\noutput.  Sometimes it is desirable to avoid the overhead of an extra process\nand talk directly to your watchman service."),Object(o.b)("p",null,"The watchman service runs as a single long-lived process per user.  The\nwatchman binary will take care of spawning the server process if necessary."),Object(o.b)("p",null,"The server will create a unix domain socket for communication with its clients.\nThe location of the socket depends on compile time options and command line\nflags.  It is recommended that you invoke ",Object(o.b)("inlineCode",{parentName:"p"},"watchman get-sockname")," to discover\nthe location, or if you are being invoked via a trigger (since version 2.9.7)\nyou will find the location in the ",Object(o.b)("inlineCode",{parentName:"p"},"$WATCHMAN_SOCK")," environmental variable."),Object(o.b)("h2",{id:"watchman-protocol"},"Watchman Protocol"),Object(o.b)("p",null,"The unix socket implements a request-response protocol with PDUs encoded in\neither JSON or BSER representation.  Some watchman commands (notably\n",Object(o.b)("inlineCode",{parentName:"p"},"subscribe")," and ",Object(o.b)("inlineCode",{parentName:"p"},"log-level"),") allow the watchman service to unilaterally send\nany number of PDUs to the client, and require more stateful handling."),Object(o.b)("h3",{id:"json-encoding"},"JSON encoding"),Object(o.b)("p",null,"The JSON encoding represents a request or a response as a single line of\ncompact JSON encoded data.  The newline is used to detect the end of the PDU."),Object(o.b)("p",null,"Requests from the client are always represented as a JSON array."),Object(o.b)("p",null,"Responses from the server are always represented as a JSON object."),Object(o.b)("p",null,"Sending the ",Object(o.b)("inlineCode",{parentName:"p"},"since")," command is simply a matter of formatting it as JSON.  Note\nthat the JSON text must be a single line (don't send a pretty printed version\nof it!) and be followed by a newline ",Object(o.b)("inlineCode",{parentName:"p"},"\\n")," character:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'["since", "/path/to/src", "n:c_srcs", "*.c"] <NEWLINE>\n')),Object(o.b)("h3",{id:"bser-encoding"},"BSER encoding"),Object(o.b)("p",null,"BSER is a local-only binary serialization format that can represent the same\ndata types as JSON, but in a more compact form and not be limited to UTF-8\nrepresentation of strings."),Object(o.b)("p",null,"When you make a request using BSER, the server will respond in BSER encoding."),Object(o.b)("p",null,"You can ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"bser"}),"read more about BSER in the BSER specification"),"."),Object(o.b)("h3",{id:"reporting-errors-and-warnings"},"Reporting Errors and Warnings"),Object(o.b)("p",null,"If a Response includes a field named ",Object(o.b)("inlineCode",{parentName:"p"},"error")," it indicates that the request was\nnot successful.  The ",Object(o.b)("inlineCode",{parentName:"p"},"error")," field, if present, is a string value that can be\npresented to the user."),Object(o.b)("p",null,"If a Response includes a field named ",Object(o.b)("inlineCode",{parentName:"p"},"warning")," it indicates that there is some\ncondition that should be reported back to the user so that the system can\noperate more effectively.  Tools should display this to the user as an\nadvisory.  At the time of writing, this can be triggered due to overflowing the\nsystem limits on file watching resources.  These are important to address so\nthat events are not missed and thus so that correctness and system performance\nare maintained."),Object(o.b)("p",null,"The warning message contains a link to this documentation that provides\nadvice on tuning and resolving the issue."))}p.isMDXComponent=!0},171:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},d=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?a.a.createElement(m,c({ref:n},l,{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);