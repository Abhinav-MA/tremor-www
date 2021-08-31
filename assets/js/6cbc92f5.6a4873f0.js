(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[5637],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7487:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=["components"],s={},l="temporality",c={unversionedId:"tremor-script/stdlib/cncf/otel/metrics/temporality",id:"tremor-script/stdlib/cncf/otel/metrics/temporality",isDocsHomePage:!1,title:"temporality",description:"This module is a mapping of the AggregationTemporality field in",source:"@site/docs/tremor-script/stdlib/cncf/otel/metrics/temporality.md",sourceDirName:"tremor-script/stdlib/cncf/otel/metrics",slug:"/tremor-script/stdlib/cncf/otel/metrics/temporality",permalink:"tremor-new-website/docs/tremor-script/stdlib/cncf/otel/metrics/temporality",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/tremor-script/stdlib/cncf/otel/metrics/temporality.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"metrics",permalink:"tremor-new-website/docs/tremor-script/stdlib/cncf/otel/metrics"},next:{title:"span_id",permalink:"tremor-new-website/docs/tremor-script/stdlib/cncf/otel/span_id"}},m=[{value:"delta",id:"delta",children:[]},{value:"cumulative",id:"cumulative",children:[]}],u={toc:m};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"temporality"},"temporality"),(0,o.kt)("p",null,"This module is a mapping of the ",(0,o.kt)("inlineCode",{parentName:"p"},"AggregationTemporality")," field in\n",(0,o.kt)("inlineCode",{parentName:"p"},"CNCF OpenTelemetry")," trace spans. The text of the specification has\nbeen copied into this mapping for convenience."),(0,o.kt)("p",null,"Where text from the ",(0,o.kt)("inlineCode",{parentName:"p"},"CNCF OpenTelemetry")," specification is used it is\nprovided in block quotes."),(0,o.kt)("p",null,"From the specification:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"AggregationTemporality")," defines how a metric aggregator reports aggregated\nvalues. It describes how those values relate to the time interval over\nwhich they are aggregated."),(0,o.kt)("h2",{parentName:"blockquote",id:"constants"},"Constants"),(0,o.kt)("h3",{parentName:"blockquote",id:"unspecified"},"unspecified")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type"),": I64"),(0,o.kt)("p",null,"The default ",(0,o.kt)("inlineCode",{parentName:"p"},"AggregationTemparality")," - it must not be used\nconforming implementation will set the temporality to one\nof the valid enumeration values."),(0,o.kt)("h3",{id:"delta"},"delta"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type"),": I64"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"DELTA")," is an ",(0,o.kt)("inlineCode",{parentName:"p"},"AggregationTemporality")," for a metric aggregator which reports\nchanges since last report time. Successive metrics contain aggregation of\nvalues from continuous and non-overlapping intervals.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The values for a ",(0,o.kt)("inlineCode",{parentName:"p"},"DELTA")," metric are based only on the time interval\nassociated with one measurement cycle. There is no dependency on\nprevious measurements like is the case for ",(0,o.kt)("inlineCode",{parentName:"p"},"CUMULATIVE")," metrics.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For example, consider a system measuring the number of requests that\nit receives and reports the sum of these requests every second as a\n",(0,o.kt)("inlineCode",{parentName:"p"},"DELTA")," metric:")),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"The system starts receiving at time=t_0."),(0,o.kt)("li",{parentName:"ol"},"A request is received, the system measures 1 request."),(0,o.kt)("li",{parentName:"ol"},"A request is received, the system measures 1 request."),(0,o.kt)("li",{parentName:"ol"},"A request is received, the system measures 1 request."),(0,o.kt)("li",{parentName:"ol"},"The 1 second collection cycle ends. A metric is exported for the\nnumber of requests received over the interval of time t_0 to\nt_0+1 with a value of 3."),(0,o.kt)("li",{parentName:"ol"},"A request is received, the system measures 1 request."),(0,o.kt)("li",{parentName:"ol"},"A request is received, the system measures 1 request."),(0,o.kt)("li",{parentName:"ol"},"The 1 second collection cycle ends. A metric is exported for the\nnumber of requests received over the interval of time t_0+1 to\nt_0+2 with a value of 2."))),(0,o.kt)("h3",{id:"cumulative"},"cumulative"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type"),": I64"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," ",(0,o.kt)("inlineCode",{parentName:"p"},"CUMULATIVE")," is an AggregationTemporality for a metric aggregator which\nreports changes since a fixed start time. This means that current values\nof a ",(0,o.kt)("inlineCode",{parentName:"p"},"CUMULATIVE")," metric depend on all previous measurements since the\nstart time. Because of this, the sender is required to retain this state\nin some form. If this state is lost or invalidated, the ",(0,o.kt)("inlineCode",{parentName:"p"},"CUMULATIVE")," metric\nvalues MUST be reset and a new fixed start time following the last\nreported measurement time sent MUST be used.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," For example, consider a system measuring the number of requests that\nit receives and reports the sum of these requests every second as a\n",(0,o.kt)("inlineCode",{parentName:"p"},"CUMULATIVE")," metric:")),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"The system starts receiving at time=t_0."),(0,o.kt)("li",{parentName:"ol"},"A request is received, the system measures 1 request."),(0,o.kt)("li",{parentName:"ol"},"A request is received, the system measures 1 request."),(0,o.kt)("li",{parentName:"ol"},"A request is received, the system measures 1 request."),(0,o.kt)("li",{parentName:"ol"},"The 1 second collection cycle ends. A metric is exported for the\nnumber of requests received over the interval of time t_0 to\nt_0+1 with a value of 3."),(0,o.kt)("li",{parentName:"ol"},"A request is received, the system measures 1 request."),(0,o.kt)("li",{parentName:"ol"},"A request is received, the system measures 1 request."),(0,o.kt)("li",{parentName:"ol"},"The 1 second collection cycle ends. A metric is exported for the\nnumber of requests received over the interval of time t_0 to\nt_0+2 with a value of 5."),(0,o.kt)("li",{parentName:"ol"},"The system experiences a fault and loses state."),(0,o.kt)("li",{parentName:"ol"},"The system recovers and resumes receiving at time=t_1."),(0,o.kt)("li",{parentName:"ol"},"A request is received, the system measures 1 request."),(0,o.kt)("li",{parentName:"ol"},"The 1 second collection cycle ends. A metric is exported for the\nnumber of requests received over the interval of time t_1 to\nt_0+1 with a value of 1."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," Note: Even though, when reporting changes since last report time, using\n",(0,o.kt)("inlineCode",{parentName:"p"},"CUMULATIVE")," is valid, it is not recommended. This may cause problems for\nsystems that do not use start_time to determine when the aggregation\nvalue was reset (e.g. Prometheus).")))}p.isMDXComponent=!0}}]);