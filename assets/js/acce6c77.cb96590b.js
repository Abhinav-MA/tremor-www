(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[6434],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7063:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={},l="Linked Transports",p={unversionedId:"Operations/linked-transports",id:"Operations/linked-transports",isDocsHomePage:!1,title:"Linked Transports",description:"!!! attention",source:"@site/docs/Operations/linked-transports.md",sourceDirName:"Operations",slug:"/Operations/linked-transports",permalink:"tremor-new-website/docs/Operations/linked-transports",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/Operations/linked-transports.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Circuit Breakers and Guaranteed Delivery",permalink:"tremor-new-website/docs/Operations/gdcb"},next:{title:"Monitoring",permalink:"tremor-new-website/docs/Operations/monitoring"}},c=[{value:"Basic configuration",id:"basic-configuration",children:[]},{value:"Supported ramps",id:"supported-ramps",children:[]},{value:"Example use cases",id:"example-use-cases",children:[]},{value:"Error handling",id:"error-handling",children:[]},{value:"Correlation",id:"correlation",children:[]},{value:"Future work",id:"future-work",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"linked-transports"},"Linked Transports"),(0,o.kt)("p",null,"!!! attention\nLinked transports are in alpha status as of v0.9.0 and we recommend its use only for exploratory projects. Details around it (including any on this page) are likely to change, as the feature set matures."),(0,o.kt)("p",null,"Tremor supports ingestion of events from external sources (",(0,o.kt)("a",{parentName:"p",href:"../artefacts/onramps.md"},"onramps"),") and after processing them from pipelines, they can be written to external sinks (",(0,o.kt)("a",{parentName:"p",href:"../artefacts/offramps.md"},"offramps"),"). Since v0.9, Tremor also supports Linked Transports (LT): a mechanism that allows linking of source and sink nature into one ramp artefact."),(0,o.kt)("p",null,"In other words -- once this mechanism is turned on -- a Tremor onramp can behave as an ",(0,o.kt)("em",{parentName:"p"},"offramp")," (i.e. send events to the outside world) and similarly, a Tremor offramp can behave as an ",(0,o.kt)("em",{parentName:"p"},"onramp")," (i.e. receive events from the outside world). This is specifically useful for onramps and offramps like REST and websocket, where the protocol already provides facility for responding to events, and as such, the mechanism is currently supported for those onramps and offramps only."),(0,o.kt)("p",null,"With the addition of linked transports and the whole new possibilities for event-flow that comes with it, Tremor has become a platform for implementing a wider variety of applications -- think servers, proxies, bridges etc., and not just ETL-style use cases. Moreover, in combination with other Tremor features and the composability that is Tremor's signature, operators can create richer applications with linked transports at the center -- think loadbalancers, or custom APIs that dynamically change pipeline behaviour (without the need for pipeline redeploy)."),(0,o.kt)("p",null,"This document will describe the feature with concrete examples next, so if the above possibilities seem abstract to you, we hope it will be more clear by the end here."),(0,o.kt)("h2",{id:"basic-configuration"},"Basic configuration"),(0,o.kt)("p",null,"The linked behavior for an onramp or offramp can be turned on by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"linked")," config param for the artefact to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (by default, it's ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"). A simple Tremor deployment illustrating the feature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'onramp:\n  - id: websocket\n    type: ws\n    # turns on linked transport for this ramp\n    linked: true\n    codec: string\n    preprocessors:\n      # events are delimited by new line\n      - lines\n    postprocessors:\n      - lines\n    config:\n      host: localhost\n      port: 8139\n\nbinding:\n  - id: echo\n    links:\n      # send incoming event from a websocket connection to the built-In\n      # passthrough pipeline\n      "/onramp/websocket/{instance}/out":\n        ["/pipeline/system::passthrough/system/in"]\n\n      # and now send back the event from the same websocket connection\n      "/pipeline/system::passthrough/system/out":\n        ["/onramp/websocket/{instance}/in"]\n\nmapping:\n  /binding/echo/01:\n    instance: "01"\n')),(0,o.kt)("p",null,"This instantiates a websocket server that listens to (new-line delimited) events on port 8139. After an event comes through a client websocket connection, it goes to the built-in passthrough pipeline, and is then sent back out to the client from the same connection."),(0,o.kt)("p",null,"We have now in our hands a classic websocket echo server! You can test the functionality with a tool like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# we see the same message echoed back \\o/\n$ echo "hello" | websocat -n1 ws://localhost:8139\nhello\n')),(0,o.kt)("p",null,"The offramp linking works similarly, with the offramp ",(0,o.kt)("inlineCode",{parentName:"p"},"out")," port capturing the event coming back as a reply to the event transmitted to the external sink (examples of this in action are detailed below)."),(0,o.kt)("h2",{id:"supported-ramps"},"Supported ramps"),(0,o.kt)("p",null,"Ramp artefacts that support linked transports are listed here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../artefacts/onramps.md#rest"},"REST Onramp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../artefacts/offramps.md#rest"},"REST Offramp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../artefacts/onramps.md#ws"},"Websocket Onramp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../artefacts/onramps.md#ws"},"Websocket Offramp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../artefacts/onramps.md#discord"},"Discord onramp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../artefacts/offramps.md#kv"},"KV offramp"))),(0,o.kt)("p",null,"As part of the above docs, you will also find event metadata variables that these onramps/offramps set (and use), which can be utilized as part of the wider application built using these aretefacts."),(0,o.kt)("h2",{id:"example-use-cases"},"Example use cases"),(0,o.kt)("p",null,"In the above example, instead of using a passthrough pipeline, you can imagine processing the incoming event from a custom trickle pipeline, with the various ",(0,o.kt)("a",{parentName:"p",href:"../tremor-query/operators.md"},"operators")," we have at our disposal. In this vein, more elaborate server examples based on onramp linking (and supporting request/response style interactions) are linked below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../workshop/examples/30_servers_lt_http/README.md"},"HTTP server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../workshop/examples/31_servers_lt_ws/README.md"},"Websocket server"))),(0,o.kt)("p",null,"When linked onramps of this sort are coupled with linked offramps, we have proxy applications, where incoming requests from clients can be forwarded to upstream servers and the resulting response can then be returned back to the client which initiated the request. Custom proxying logic (eg: deciding the upstream based on incoming request attributes) can be coded up as part of the ",(0,o.kt)("a",{parentName:"p",href:"../tremor-query/operators.md#runtimetremor"},"runtime script"),". Some concrete examples demonstrating this pattern:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../workshop/examples/32_proxies_lt_http/README.md"},"HTTP Proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../workshop/examples/33_proxies_lt_ws/README.md"},"Websocket Proxy"))),(0,o.kt)("p",null,'??? example "Example binding for a HTTP proxy"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```yaml\n- id: main\n  links:\n    # send incoming requests for processing\n    "/onramp/http/{instance}/out":\n      ["/pipeline/request_processing/{instance}/in"]\n\n    # process incoming requests and relay it to upstream\n    "/pipeline/request_processing/{instance}/out":\n      ["/offramp/upstream/{instance}/in"]\n\n    # send the response from upstream for processing\n    # (here be linked offramp)\n    "/offramp/upstream/{instance}/out":\n      9["/pipeline/response_processing/{instance}/in"]\n\n    # process upstream response and send it back as a response to incoming\n    # (here be linked onramp)\n    "/pipeline/response_processing/{instance}/out":\n      ["/onramp/http/{instance}/in"]\n```\n')),(0,o.kt)("p",null,"And when proxying, if we configure linked onramps and offramps of different types, we have bridges:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../workshop/examples/34_bridges_lt_http_ws/README.md"},"HTTP -> WS Bridge"))),(0,o.kt)("p",null,"Or when the proxying use case is combined with some qos operators (",(0,o.kt)("a",{parentName:"p",href:"../tremor-query/operators.md#qosroundrobin"},"roundrobin")," and ",(0,o.kt)("a",{parentName:"p",href:"../tremor-query/operators.md#qosbackpressure"},"backpressure"),"), we get a working load-balancer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../workshop/examples/35_reverse_proxy_load_balancing/README.md"},"HTTP Load Balancing"))),(0,o.kt)("p",null,"These are some example use cases now possible with linked transports at the center, but with the amount of flexibility and composability that Tremor supports for its various capabilities, we can get very creative with what we can do here -- our imagination is the limit."),(0,o.kt)("p",null,"Examples of even more advanced Tremor applications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../workshop/examples/36_quota_service/README.md"},"Quota Service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../workshop/examples/37_configurator/README.md"},"Configurator"))),(0,o.kt)("h2",{id:"error-handling"},"Error handling"),(0,o.kt)("p",null,"The above linked examples also demonstrate typical error handling needed for applications built on top of linked transports (eg: for HTTP-based applications, how to send a proper error response to the client with an appropriate status code on tremor-internal failures like runtime script errors, or codec errors on invalid input)."),(0,o.kt)("p",null,'??? example "Example error-handling binding for a HTTP proxy"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```yaml\n- id: error\n  links:\n    "/onramp/http/{instance}/err":\n      ["/pipeline/internal_error_processing/{instance}/in"]\n\n    "/pipeline/request_processing/{instance}/err":\n      ["/pipeline/internal_error_processing/{instance}/in"]\n\n    "/offramp/upstream/{instance}/err":\n      ["/pipeline/internal_error_processing/{instance}/in"]\n\n    "/pipeline/response_processing/{instance}/err":\n      ["/pipeline/internal_error_processing/{instance}/in"]\n\n    # send back errors as response as well\n    "/pipeline/internal_error_processing/{instance}/out":\n      ["/onramp/http/{instance}/in"]\n\n    # respond on errors during error processing too\n    "/pipeline/internal_error_processing/{instance}/err":\n      ["/onramp/http/{instance\n```\n')),(0,o.kt)("p",null,"The key here is remembering to link the error ports for all the onramp/offramp/pipeline artefacts involved in the main event-flow, ensuring that the end destination for error events (emitted from the ",(0,o.kt)("inlineCode",{parentName:"p"},"err")," ports) are visible to the client (or user)."),(0,o.kt)("h2",{id:"correlation"},"Correlation"),(0,o.kt)("p",null,"If requests to and responses from a linked transport need to be correlated, the special metadata field ",(0,o.kt)("inlineCode",{parentName:"p"},"$correlation")," can be used. It will be forwarded from the request event to the response event, so that some data from the request can be present in the response context."),(0,o.kt)("p",null,"Example pipeline:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-trickle"},'define script correlate\nscript\n  let $correlation = event.correlation_id;\n  let event = patch event of erase "correlation_id" end;\n  event\nend;\n\ncreate script correlate;\n\nselect event from in into correlate;\nselect event from correlate into out;\nselect event from correlate/err into err;\n')),(0,o.kt)("p",null,"This script within the pipeline file above will erase ",(0,o.kt)("inlineCode",{parentName:"p"},"correlation_id")," from the event and put it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"$correlation")," metadata. It will be available in the response pipeline, also as ",(0,o.kt)("inlineCode",{parentName:"p"},"$correlation"),"."),(0,o.kt)("p",null,"If both events need to be fully present and ",(0,o.kt)("inlineCode",{parentName:"p"},"$correlation")," is only used for having a common unique identifier to bring them both together, a windowed select statement with a group by clause can help:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-trickle"},'define tumbling window window_size_2\nwith\n  size = 2\n  # eviction_period = ...\nend;\n\nselect aggr::win::collect_flattened({\n  "event": event,\n  "meta": $\n}) from in[window_size_2] group by $correlation into out;\n')),(0,o.kt)("p",null,"This pipeline will output both request and response as 2-element array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'[{"event": {}, "meta": {"correlation": "123456"}}, {"event": {}, "meta": {"correlation": "123456"}}]\n')),(0,o.kt)("h2",{id:"future-work"},"Future work"),(0,o.kt)("p",null,"v0.9.0 introduces linked transports as a feature preview. There are known rough edges and issues with the current mode of configuring linked transports, and also how the richer, linked-transports-powered capabilities interface with rest of Tremor configuration. Some known items for future work, aimed at improving the overall usability:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improve the LT port linking for onramps/offramps (",(0,o.kt)("inlineCode",{parentName:"li"},"onramp/in")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"offramp/out")," are not natural there)"),(0,o.kt)("li",{parentName:"ul"},"Resolve the boilerplate involved in various aspects of LT use (eg: error handling, pipeline flow, server code)"),(0,o.kt)("li",{parentName:"ul"},"Simplify scatter-gather workflows"),(0,o.kt)("li",{parentName:"ul"},"Guaranteed delivery of events between pipelines"),(0,o.kt)("li",{parentName:"ul"},"Allow certain meta-variables (eg: rate/cardinality) to be set dynamically"),(0,o.kt)("li",{parentName:"ul"},"Better namespacing/sharing for meta-variables")))}u.isMDXComponent=!0}}]);