(function(e){function t(t){for(var r,u,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)u=i[l],o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-2d0c7ce7":"67eb0030"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e),a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-boilerplate/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"11c0":function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return i})),n.d(t,"mutations",(function(){return c})),n.d(t,"getters",(function(){return s})),n.d(t,"actions",(function(){return l}));n("96cf");var r=n("3b8d"),o=n("bc3a"),a=n.n(o),u=(n("4328"),n("14b7"),Object({NODE_ENV:"production",VUE_APP_PUBLIC_PATH:"/vue-boilerplate/",VUE_APP_BASE_URL:"/vue-boilerplate/",BASE_URL:"/vue-boilerplate/"}).VUE_APP_REDIRECT_OAUTH_URL,Object({NODE_ENV:"production",VUE_APP_PUBLIC_PATH:"/vue-boilerplate/",VUE_APP_BASE_URL:"/vue-boilerplate/",BASE_URL:"/vue-boilerplate/"}).VUE_APP_BACKEND_SERVER),i={authToken:f("authToken")},c={SET_CURRENT_USER_AUTHTOKEN:function(e,t){e.authToken=t,d("authToken",t),p(e)}},s={loggedIn:function(e){return!!e.authToken},getAuthenticationToken:function(e){return e.authToken}},l={init:function(e){var t=e.state;e.dispatch;null!==t.authToken&&p(t)},logIn:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,i,c,s,l,f,d=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.dispatch,o=t.getters,i=d.length>1&&void 0!==d[1]?d[1]:{},c=i.emailAddress,s=i.userPassword,!o.loggedIn){e.next=4;break}return e.abrupt("return",r("validate"));case 4:return e.prev=4,e.next=7,a()({method:"post",url:"".concat(u,"user/signin"),data:{emailAddress:c,userPassword:s}});case 7:return l=e.sent,f=l.data,n("SET_CURRENT_USER_AUTHTOKEN",f),e.abrupt("return",f);case 13:throw e.prev=13,e.t0=e["catch"](4),console.log("TCL: error",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));function t(t){return e.apply(this,arguments)}return t}(),logOut:function(e){var t=e.commit;t("SET_CURRENT_USER_AUTHTOKEN",null)},validate:function(e){e.commit;var t=e.state;return t.authToken?new Promise((function(e,t){e(!0)})):Promise.resolve(null)}};function f(e){return JSON.parse(window.sessionStorage.getItem(e))}function d(e,t){window.sessionStorage.setItem(e,JSON.stringify(t))}function p(e){a.a.defaults.headers.common["auth"]=e.authToken?e.authToken.result[0].token:""}},2:function(e,t){},2883:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("Transition",{attrs:{appear:""}})],1)},o=[],a=n("444f"),u={page:{title:"Loading page...",meta:[{name:"description",content:"Loading page..."}]},components:{Layout:a["a"]}},i=u,c=n("46e4"),s=n("2877");function l(e){this["$style"]=c["default"].locals||c["default"]}var f=Object(s["a"])(i,r,o,!1,l,null,null);t["default"]=f.exports},3:function(e,t){},4:function(e,t){},"444f":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[e._v("\n  Loading..\n")])},o=[],a=(n("a481"),{data:function(){return{}},created:function(){},methods:{}}),u=a,i=n("2877"),c=Object(i["a"])(u,r,o,!1,null,"13162128",null);t["a"]=c.exports},"46e4":function(e,t,n){"use strict";var r=n("fc7c"),o=n.n(r);t["default"]=o.a},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("RouterView",{key:e.$route.fullPath})],1)],1)},a=[],u=n("c2a4"),i={page:{titleTemplate:function(e){return e="function"===typeof e?e(this.$store):e,e?"".concat(e," | ").concat(u.title):u.title}}},c=i,s=(n("5c0b"),n("2877")),l=Object(s["a"])(c,o,a,!1,null,null,null),f=l.exports,d=(n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54"),n("ac6a"),n("96cf"),n("3b8d")),p=(n("7f7f"),n("8c4f")),v=n("58ca"),m=n("323e"),h=n.n(m),b=n("2f62"),g=(n("3846"),n("8e6e"),n("456d"),n("bd86")),y=(n("a481"),n("28a5"),n("bba4")),_=n.n(y);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(g["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={},P={modules:{}};function T(e,t){if(1===t.length)return e;var n=t.shift();return e.modules[n]=E({modules:{},namespaced:!0},e.modules[n]),T(e.modules[n],t)}(function(){var e=n("cfa9");e.keys().forEach((function(t){var n=e(t);if(O[t]!==n){O[t]=n;var r=t.replace(/^\.\//,"").replace(/\.\w+$/,"").split(/\//).map(_.a),o=T(P,r),a=o.modules;a[r.pop()]=E({namespaced:!0},n)}}))})();var j=P.modules;function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.modules,r=void 0===n?j:n,o=t.modulePrefix,a=void 0===o?"":o,u=t.flags,i=void 0===u?{}:u;for(var c in r){var s=r[c];s.actions&&s.actions[e]&&(s.namespaced?A.dispatch("".concat(a).concat(c,"/").concat(e)):i.dispatchGlobal=!0),s.modules&&k(e,{modules:s.modules,modulePrefix:a+c+"/",flags:i})}!a&&i.dispatchGlobal&&A.dispatch(e)}r["a"].use(b["a"]);var x=new b["a"].Store({modules:j,strict:!1}),A=x;k("init");var R=[{path:"/",redirect:"home"},{path:"/home",name:"home",component:function(){return S(n.e("chunk-2d0c7ce7").then(n.bind(null,"51d9")))}},{path:"/404",name:"404",component:n("bdd2").default,props:!0},{path:"*",redirect:"404"}];function S(e){var t=function(){return{component:e,loading:n("2883").default,delay:400,error:n("ef68").default,timeout:1e4}};return Promise.resolve({functional:!0,render:function(e,n){var r=n.data,o=n.children;return e(t,r,o)}})}function U(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=C(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){i=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(i)throw a}}}}function C(e,t){if(e){if("string"===typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n("14b7");r["a"].use(p["a"]),r["a"].use(v["a"],{keyName:"metaInfo"});var I=new p["a"]({routes:R,base:"/vue-boilerplate/",mode:"history",scrollBehavior:function(e,t,n){return n||{x:0,y:0}}});I.beforeEach((function(e,t,n){null!==t.name&&h.a.start();var r=e.matched.some((function(e){return e.meta.authRequired}));if(!r||"logout"===e.name)return n();if(A.getters["auth/loggedIn"])return A.dispatch("auth/validate").then((function(e){console.log("TCL: validUser",e),e?n():o()}));function o(){n({name:"signin",query:{redirectFrom:e.fullPath}})}o()})),I.beforeResolve(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,r){var o,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.prev=0,o=U(t.matched),e.prev=2,u=regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=a.value,e.next=3,new Promise((function(e,a){o.meta&&o.meta.beforeResolve?o.meta.beforeResolve(t,n,(function(){for(var t=arguments.length,o=new Array(t),u=0;u<t;u++)o[u]=arguments[u];o.length?(n.name===o[0].name&&h.a.done(),r.apply(void 0,o),a(new Error("Redirected"))):e()})):e()}));case 3:case"end":return e.stop()}}),e)})),o.s();case 5:if((a=o.n()).done){e.next=9;break}return e.delegateYield(u(),"t0",7);case 7:e.next=5;break;case 9:e.next=14;break;case 11:e.prev=11,e.t1=e["catch"](2),o.e(e.t1);case 14:return e.prev=14,o.f(),e.finish(14);case 17:e.next=22;break;case 19:return e.prev=19,e.t2=e["catch"](0),e.abrupt("return");case 22:r();case 23:case"end":return e.stop()}}),e,null,[[0,19],[2,11,14,17]])})));return function(t,n,r){return e.apply(this,arguments)}}()),I.afterEach((function(e,t){h.a.done()}));var N=I,$=n("1dce"),D=n.n($),V=n("caf9"),B=n("a65d"),H=n.n(B);n("4989"),n("ab8b");r["a"].use(V["a"]),r["a"].use(D.a),r["a"].use(H.a),r["a"].config.productionTip=!0,window.Cypress&&(r["a"].config.errorHandler=window.Cypress.cy.onUncaughtException);var M=new r["a"]({router:N,store:A,render:function(e){return e(f)}}).$mount("#app");window.Cypress&&(window.__app__=M)},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},"93fe":function(e,t,n){e.exports={title:"_timeout_title_QmghM"}},9400:function(e,t,n){"use strict";n.r(t),n.d(t,"EventBus",(function(){return o}));var r=n("2b0e"),o=new r["a"]},b20d:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return a})),n.d(t,"getters",(function(){return u})),n.d(t,"mutations",(function(){return i})),n.d(t,"actions",(function(){return c}));n("7514");var r=n("bc3a"),o=n.n(r),a={cached:[]},u={},i={CACHE_USER:function(e,t){e.cached.push(t)}},c={fetchUser:function(e,t){var n=e.commit,r=e.state,a=e.rootState,u=t.username,i=a.auth.currentUser;if(i&&i.username===u)return Promise.resolve(i);var c=r.cached.find((function(e){return e.username===u}));return c?Promise.resolve(i):o.a.get("/api/users/".concat(u)).then((function(e){var t=e.data;return n("CACHE_USER",t),t}))}}},bdd2:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  404\n")])},o=[],a={name:"FourOhFour",created:function(){this.$ssrContext&&this.$ssrContext.res.status(404)}},u=a,i=n("2877"),c=Object(i["a"])(u,r,o,!1,null,null,null);t["default"]=c.exports},c2a4:function(e){e.exports={title:"App",description:""}},cfa9:function(e,t,n){var r={"./auth.js":"11c0","./event-bus.js":"9400","./users.js":"b20d"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="cfa9"},d746:function(e,t,n){"use strict";var r=n("93fe"),o=n.n(r);t["default"]=o.a},ef68:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("h1",{class:e.$style.title},[e._v("\n    The page timed out while loading. Are you sure you're still connected to\n    the Internet?\n  ")])])},o=[],a=n("444f"),u={page:{title:"Page timeout",meta:[{name:"description",content:"The page timed out while loading."}]},components:{Layout:a["a"]}},i=u,c=n("d746"),s=n("2877");function l(e){this["$style"]=c["default"].locals||c["default"]}var f=Object(s["a"])(i,r,o,!1,l,null,null);t["default"]=f.exports},fc7c:function(e,t,n){e.exports={loadingIcon:"_loading_loadingIcon_2KEMq"}}});