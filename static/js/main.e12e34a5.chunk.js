(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(64)},60:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(31),r=a.n(c),l=a(25),u=a(7),i=a(10),m=a(12),b=Object(m.b)(null,function(e){return{onTabHome:function(){return e(Object(i.navigateTo)("/tabs/",!0))},onTabPage2:function(){return e(Object(i.navigateTo)("/tabs/page2/",!0))},onTabPage3:function(){return e(Object(i.navigateTo)("/tabs/page3/",!0))}}})(function(e){var t=e.onTabHome,a=e.onTabPage2,n=e.onTabPage3;return o.a.createElement(u.g,{pageContent:!1},o.a.createElement(u.k,{routable:!0,className:"ios-edges"},o.a.createElement(u.j,{className:"page-content",id:"tab-home"}),o.a.createElement(u.j,{className:"page-content",id:"tab-page2"}),o.a.createElement(u.j,{className:"page-content",id:"tab-page3"})),o.a.createElement(u.l,{tabbar:!0,bottomMd:!0},o.a.createElement(u.d,{tabLink:!0,routeTabId:"tab-home",onClick:t},"Home"),o.a.createElement(u.d,{tabLink:!0,routeTabId:"tab-page2",onClick:a},"Tab 2"),o.a.createElement(u.d,{tabLink:!0,routeTabId:"tab-page3",onClick:n},"Tab 3")))}),p=function(){return Object(i.navigateTo)("/catalog/23/")},g=Object(m.b)(null,function(e){return{onGoToCatalog:function(){return e(Object(i.navigateTo)("/tabs/home-catalog/",!0))},onGoToItem23:function(){return e(p())}}})(function(e){var t=e.onGoToCatalog,a=e.onGoToItem23;return o.a.createElement("div",null,o.a.createElement(u.f,null,o.a.createElement(u.e,null,"App name")),o.a.createElement(u.b,{outline:!0},o.a.createElement(u.c,null,"Placeholder for home page. ",o.a.createElement(u.d,{onClick:t},"Catalog"),". ",o.a.createElement(u.d,{onClick:a},"Item 23"),".")))}),s=Object(m.b)(null,function(e){return{onGoToCatalog:function(){return e(Object(i.navigateTo)("/tabs/page2-catalog/",!0))},onGoToItem23:function(){return e(p())}}})(function(e){var t=e.onGoToCatalog,a=e.onGoToItem23;return o.a.createElement("div",null,o.a.createElement(u.f,null,o.a.createElement(u.e,null,"Tab 2 title")),o.a.createElement(u.b,{outline:!0},o.a.createElement(u.c,null,"Placeholder for page 2. ",o.a.createElement(u.d,{onClick:t},"Catalog"),". ",o.a.createElement(u.d,{onClick:a},"Item 23"),".")))}),f=Object(m.b)(null,function(e){return{}})(function(){return o.a.createElement("div",null,o.a.createElement(u.f,null,o.a.createElement(u.e,null,"Tab 3 title")),o.a.createElement(u.b,{outline:!0,content:"Placeholder for page 3."}))}),d=function(e){var t=e.onGoBackFromCatalog;return o.a.createElement("div",null,o.a.createElement(u.f,{title:"Catalog",backLink:"Back",onBackClick:t}),o.a.createElement(u.b,{outline:!0,content:"Placeholder for catalog contents."}))},E=Object(m.b)(null,function(e){return{onGoBackFromCatalog:function(){return e(Object(i.navigateTo)("/tabs/",!0))}}})(d),k=Object(m.b)(null,function(e){return{onGoBackFromCatalog:function(){return e(Object(i.navigateTo)("/tabs/page2/",!0))}}})(d),h=a(35),T=[{path:"/tabs/",component:b,tabs:[{path:"/",id:"tab-home",component:g,options:{animate:!1}},{path:"/page2/",id:"tab-page2",component:s,options:{animate:!1}},{path:"/page3/",id:"tab-page3",component:f,options:{animate:!1}},{path:"/home-catalog/",id:"tab-home",component:E},{path:"/page2-catalog/",id:"tab-page2",component:k}]},{path:"/catalog/:itemId/",popup:{component:Object(m.b)(function(e){return Object(h.a)({},function(e){var t=Object(i.getCurrentRoute)(e),a=new URL("http://test".concat(t)),n={};return a.searchParams.forEach(function(e,t){n[t]=e}),{url:t,path:a.pathname,hash:a.hash,query:n}}(e))},function(e){return{onGoBackFromItem:function(){return e(Object(i.goBack)())}}})(function(e){var t=e.onGoBackFromItem,a=e.url;return o.a.createElement(u.h,null,o.a.createElement(u.m,null,o.a.createElement(u.g,null,o.a.createElement(u.f,{title:"Item",backLink:"Back",onBackClick:t}),o.a.createElement(u.b,{outline:!0},o.a.createElement(u.c,null,"Placeholder for item with URL ",a,".")))))})}}],j=a(16),C=a(36),O=new i.Framework7StateKernel,v=Object(j.d)(Object(j.c)({framework7:i.framework7Reducer}),Object(j.a)(C.a));Object(i.syncFramework7WithStore)(v,O);var w={id:"io.framework7.testapp",name:"Framework7",theme:"auto",routes:T,stateKernel:O,clicks:{externalLinks:'a[href="#"]'},panel:{closeByBackdropClick:!1},popup:{closeByBackdropClick:!1}};a(58),a(60),a(62);l.a.use(u.n),l.a.use(i.framework7ReduxPlugin),r.a.render(o.a.createElement(function(){return o.a.createElement(m.a,{store:v},o.a.createElement(u.a,{params:w},o.a.createElement(u.i,null),o.a.createElement(u.m,{id:"main-view",url:"/tabs/",main:!0,className:"ios-edges"})))}),document.getElementById("app"))}},[[37,2,1]]]);
//# sourceMappingURL=main.e12e34a5.chunk.js.map