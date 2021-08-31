(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9818],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},102:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={title:"Support for the Syslog Protocol",slug:"LFX-Blog-Nupur",author:"Nupur Agrawal",author_title:"Tremor 2021 Spring Mentee",tags:["codecs","mentorship","cncf"],categories:["general"],draft:!1,hide_table_of_contents:!1,description:"Nupur's experience contributing to Tremor and work overview."},p=void 0,l={permalink:"tremor-new-website/blog/LFX-Blog-Nupur",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/blog/2021-07-05-LFX-Blog-Nupur.md",source:"@site/blog/2021-07-05-LFX-Blog-Nupur.md",title:"Support for the Syslog Protocol",description:"Nupur's experience contributing to Tremor and work overview.",date:"2021-07-05T00:00:00.000Z",formattedDate:"July 5, 2021",tags:[{label:"codecs",permalink:"tremor-new-website/blog/tags/codecs"},{label:"mentorship",permalink:"tremor-new-website/blog/tags/mentorship"},{label:"cncf",permalink:"tremor-new-website/blog/tags/cncf"}],readingTime:3.83,truncated:!0,prevItem:{title:"Property Based Testing of Tremor Script",permalink:"tremor-new-website/blog/2021/07/06/Blog-Rohit-Property-Based-Testing"},nextItem:{title:"Google Cloud Storage and Pub/Sub Connectors",permalink:"tremor-new-website/blog/2021/06/29/T17-LFX-Blog-Jigyasa-gcloud"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Project Abstract",id:"project-abstract",children:[]},{value:"My Project",id:"my-project",children:[]},{value:"Work-Summary",id:"work-summary",children:[{value:"Syslog codec (support via UDP)",id:"syslog-codec-support-via-udp",children:[]},{value:"textual-length-prefix pre and postprocessor",id:"textual-length-prefix-pre-and-postprocessor",children:[]},{value:"TLS support for TCP",id:"tls-support-for-tcp",children:[]}]},{value:"Concluding Thoughts",id:"concluding-thoughts",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Hey folks, I am Nupur Agrawal, a third year student at Indian Institute of Technology Roorkee. This blog describes my experience of contributing to Tremor,\nCNCF sandbox project in the 2021 spring chapter of ",(0,a.kt)("a",{parentName:"p",href:"https://lfx.linuxfoundation.org/tools/mentorship/"},"LFX Mentorship Program"),", under the mentorship of\nMatthias Wahl, Anup Dhamala and Heinz Gies."),(0,a.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.tremor.rs/"},"Tremor")," is an event processing system originally designed for the needs of platform engineering and infrastructure. It is built for\nthe users that have a high message volume to deal with and want to build pipelines to process, route, or limit this event stream."),(0,a.kt)("p",null,"At the beginning of the program, I was given walkthrough of the project by Matthias and he patiently explained me the components and working of tremor.\nTremor is nicely documented and the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/"},"docs")," can be very useful for referring many things."),(0,a.kt)("h2",{id:"my-project"},"My Project"),(0,a.kt)("p",null,"My project's aim was to enable tremor to receive and send ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5424"},"Syslog Protocol Messages"),", a standard protocol used to send\nsystem log or event messages. It was desired to support both the standard IETF format and the old BSD format via UDP and TCP/TLS. More detailed description\ncan be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-runtime/issues/12"},"here"),"."),(0,a.kt)("h2",{id:"work-summary"},"Work-Summary"),(0,a.kt)("h3",{id:"syslog-codec-support-via-udp"},"Syslog codec (support via UDP)"),(0,a.kt)("p",null,"The syslog codec encodes and decodes sylog messages (IETF and BSD format) to and from ",(0,a.kt)("inlineCode",{parentName:"p"},"Value")," respectively. Tremor can now receive syslog data via UDP (onramp) and turn syslog messages into structured events. Also, structured events can be turned into textual syslog messages and send out via UDP (offramp)."),(0,a.kt)("p",null,"For example, the following Syslog message "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'<165>1 2021-03-18T20:30:00.123Z mymachine.example.com evntslog - ID47 [exampleSDID@32473 iut=\\"3\\" eventSource=\\"Application\\" eventID=\\"1011\\"] BOMAn\napplication event log entry..."\n')),(0,a.kt)("p",null,"gets translated to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "severity": "notice",\n  "facility": "local4",\n  "hostname": "mymachine.example.com",\n  "appname": "evntsog",\n  "msg": "BOMAn application event log entry...",\n  "procid": null,\n  "msgid": "ID47",\n  "protocol": "RFC5424",\n  "protocol_version": 1,\n  "structured_data": {\n              "exampleSDID@32473" :\n              [\n                {"iut": "3"},\n                {"eventSource": "Application"},\n                {"eventID": "1011"}\n              ]\n            },\n  "timestamp": 1616099400123000000\n}\n')),(0,a.kt)("p",null,"Code for the syslog codec can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-runtime/pull/856"},"here"),"."),(0,a.kt)("h3",{id:"textual-length-prefix-pre-and-postprocessor"},"textual-length-prefix pre and postprocessor"),(0,a.kt)("p",null,"In order to support syslog messages over TCP, it was needed to add support for the ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc5425"},"RFC 5425")," transport protocol, that contains a textual length prefix before each message.\ntextual-length-prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"preprocessor")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"postprocessor")," were implemented to handle the buffers accordingly. The message starts with a number of digits, denoting the message length followed by a whitespace and then the message. The processor gets the length and then wait until the buffer is long enough, to extract the right amount of bytes.\nThe implementation can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-runtime/pull/957"},"here"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/altsysrq/proptest"},"Proptest")," is something new and amazing I learnt while working on this. It is a property testing framework which allows to test certain properties of code for arbitrary inputs. We utilised this for testing the functioning of our preprocessor for all types of inputs possible."),(0,a.kt)("h3",{id:"tls-support-for-tcp"},"TLS support for TCP"),(0,a.kt)("p",null,"Unlike UDP, Tremor did not support TLS over TCP onramp, which was needed to add. This work can be broadly divided into two parts:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Add support for receiving TLS encrypted data via TCP onramp")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tls")," option was added to the tcp onramp configuration options which addresses the keys and certificate required for authentiction."),(0,a.kt)("p",null,"An example of TCP onramp config with TLS is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'onramp:\n  - id: tls\n    type: tcp\n    preprocessors:\n      - lines\n    codec: string\n    config:\n      host: "127.0.0.1"\n      port: 65535\n      tls:\n        cert: "path/to/cert.pem"\n        key: "path/to/key.pem"\n')),(0,a.kt)("p",null,"The code can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-runtime/pull/1055"},"here"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Add support for sending TLS encrypted data via TCP offramp")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tls")," option added to offramp tls config contains either the tls config or boolean value indiacting the use of TLS session for transport level encryption. If false is provided then the default TCP stream will be used and if true is provided then TLS stream will be used with default certificates and domain same as hostname. Other option is to provide tls config with ",(0,a.kt)("inlineCode",{parentName:"p"},"domain")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cafile"),". In case of ",(0,a.kt)("inlineCode",{parentName:"p"},"domain")," not being specified, the hostname will be used."),(0,a.kt)("p",null,"An example of TCP offramp config with TLS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'offramp:\n  - id: tls\n    type: tcp\n    codec: json\n    config:\n      host: "127.0.0.1"\n      port: 65535\n      tls:\n        cafile: "path/to/cafile"\n')),(0,a.kt)("p",null,"The code can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-runtime/pull/1057"},"here"),"."),(0,a.kt)("h2",{id:"concluding-thoughts"},"Concluding Thoughts"),(0,a.kt)("p",null,"The tremor community is very helpful and friendly. The mentors helped me a lot from silly rust doubts to nerve breaking code debugging and testing. There were periodic code reviews and live coding sessions which motivated me to improvise and keep going. The key focus was always on the learning rather than getting the work done."),(0,a.kt)("p",null,"It was undoubtedly one of the most fruitful and learning experiences I had have and I wish to continue the contribution to community and project."))}d.isMDXComponent=!0}}]);