(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(6),o=(r(0),r(170)),c={title:"noWait(state)",sidebar_label:"noWait()"},i={id:"api-reference/utils/noWait",title:"noWait(state)",description:"A selector helper that will return a [`Loadable`](/docs/api-reference/core/Loadable) for the current state of the provided [`atom`](/docs/api-reference/core/atom) or [`selector`](/docs/api-reference/core/selector).",source:"@site/docs/api-reference/utils/noWait.md",permalink:"/docs/api-reference/utils/noWait",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/utils/noWait.md",sidebar_label:"noWait()",sidebar:"docs",previous:{title:"errorSelector(message)",permalink:"/docs/api-reference/utils/errorSelector"},next:{title:"waitForAll(dependencies)",permalink:"/docs/api-reference/utils/waitForAll"}},l=[{value:"Example",id:"example",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A selector helper that will return a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/core/Loadable"}),Object(o.b)("inlineCode",{parentName:"a"},"Loadable"))," for the current state of the provided ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/core/atom"}),Object(o.b)("inlineCode",{parentName:"a"},"atom"))," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/core/selector"}),Object(o.b)("inlineCode",{parentName:"a"},"selector")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"function noWait<T>(state: RecoilValue<T>): RecoilValueReadOnly<Loadable<T>>\n")),Object(o.b)("hr",null),Object(o.b)("p",null,"This helper can be used to obtain the current state of a potentially asynchronous dependency without throwing if there is an error or the dependency is still pending.  It is similar to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/core/useRecoilValueLoadable"}),Object(o.b)("inlineCode",{parentName:"a"},"useRecoilValueLoadable()"))," except that it is a selector instead of a hook.  Because ",Object(o.b)("inlineCode",{parentName:"p"},"noWait()")," returns a selector, it can in turn be used by other Recoil selectors as well as hooks."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const myQuery = selector({\n  key: 'MyQuery',\n  get: ({get}) => {\n    const loadable = get(noWait(dbQuerySelector));\n\n    return {\n      hasValue: {data: loadable.contents},\n      hasError: {error: loadable.contents},\n      loading: {data: 'placeholder while loading'},\n    }[loadable.state];\n  }\n})\n\n")))}s.isMDXComponent=!0},170:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,i({ref:t},p,{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);