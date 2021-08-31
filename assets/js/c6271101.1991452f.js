(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[1426],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(r),v=i,m=d["".concat(o,".").concat(v)]||d[v]||c[v]||l;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9475:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(2122),i=r(9756),l=(r(7294),r(3905)),a=["components"],u={},o="type",s={unversionedId:"tremor-script/stdlib/std/type",id:"tremor-script/stdlib/std/type",isDocsHomePage:!1,title:"type",description:"The type module contains functions that help inspecting types of values.",source:"@site/docs/tremor-script/stdlib/std/type.md",sourceDirName:"tremor-script/stdlib/std",slug:"/tremor-script/stdlib/std/type",permalink:"tremor-new-website/docs/tremor-script/stdlib/std/type",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/tremor-script/stdlib/std/type.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"test",permalink:"tremor-new-website/docs/tremor-script/stdlib/std/test"},next:{title:"url",permalink:"tremor-new-website/docs/tremor-script/stdlib/std/url"}},p=[{value:"Functions",id:"functions",children:[{value:"as_string(value)",id:"as_stringvalue",children:[]},{value:"is_null(value)",id:"is_nullvalue",children:[]},{value:"is_bool(value)",id:"is_boolvalue",children:[]},{value:"is_integer(value)",id:"is_integervalue",children:[]},{value:"is_float(value)",id:"is_floatvalue",children:[]},{value:"is_number(value)",id:"is_numbervalue",children:[]},{value:"is_string(value)",id:"is_stringvalue",children:[]},{value:"is_array(value)",id:"is_arrayvalue",children:[]},{value:"is_record(value)",id:"is_recordvalue",children:[]},{value:"is_binary(value)",id:"is_binaryvalue",children:[]}]}],c={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"type"},"type"),(0,l.kt)("p",null,"The type module contains functions that help inspecting types of values."),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"as_stringvalue"},"as_string(value)"),(0,l.kt)("p",null,"Returns a string representation for the value type:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'"null"'),(0,l.kt)("li",{parentName:"ul"},'"bool"'),(0,l.kt)("li",{parentName:"ul"},'"integer"'),(0,l.kt)("li",{parentName:"ul"},'"float"'),(0,l.kt)("li",{parentName:"ul"},'"string"'),(0,l.kt)("li",{parentName:"ul"},'"array"'),(0,l.kt)("li",{parentName:"ul"},'"record"')),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h3",{id:"is_nullvalue"},"is_null(value)"),(0,l.kt)("p",null,"Returns if the value is null."),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")),(0,l.kt)("h3",{id:"is_boolvalue"},"is_bool(value)"),(0,l.kt)("p",null,"Returns if the value is a boolean."),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")),(0,l.kt)("h3",{id:"is_integervalue"},"is_integer(value)"),(0,l.kt)("p",null,"Returns if the value is an integer."),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")),(0,l.kt)("h3",{id:"is_floatvalue"},"is_float(value)"),(0,l.kt)("p",null,"Returns if the value is a float."),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")),(0,l.kt)("h3",{id:"is_numbervalue"},"is_number(value)"),(0,l.kt)("p",null,"Returns if the value is either a float or an integer."),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")),(0,l.kt)("h3",{id:"is_stringvalue"},"is_string(value)"),(0,l.kt)("p",null,"Returns if the value is a string."),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")),(0,l.kt)("h3",{id:"is_arrayvalue"},"is_array(value)"),(0,l.kt)("p",null,"Returns if the value is an array."),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")),(0,l.kt)("h3",{id:"is_recordvalue"},"is_record(value)"),(0,l.kt)("p",null,"Returns if the value is a record."),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")),(0,l.kt)("h3",{id:"is_binaryvalue"},"is_binary(value)"),(0,l.kt)("p",null,"Returns if the value is a binary."),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")))}d.isMDXComponent=!0}}]);