(function(e){function t(t){for(var r,u,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)u=i[l],o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c7ce7":"420743a4"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e),a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-boilerplate/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"11c0":function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return i})),n.d(t,"mutations",(function(){return c})),n.d(t,"getters",(function(){return s})),n.d(t,"actions",(function(){return l}));var r=n("1da1"),o=n("bc3a"),a=n.n(o);n("4328");n("14b7");Object({NODE_ENV:"production",VUE_APP_PUBLIC_PATH:"/vue-boilerplate/",BASE_URL:"/vue-boilerplate/"}).VUE_APP_REDIRECT_OAUTH_URL;const u=Object({NODE_ENV:"production",VUE_APP_PUBLIC_PATH:"/vue-boilerplate/",BASE_URL:"/vue-boilerplate/"}).VUE_APP_BACKEND_SERVER,i={authToken:f("authToken")},c={SET_CURRENT_USER_AUTHTOKEN(e,t){e.authToken=t,d("authToken",t),p(e)}},s={loggedIn(e){return!!e.authToken},getAuthenticationToken(e){return e.authToken}},l={init(e){let t=e.state;e.dispatch;null!==t.authToken&&p(t)},logIn(e){var t=arguments;return Object(r["a"])((function*(){let n=e.commit,r=e.dispatch,o=e.getters,i=t.length>1&&void 0!==t[1]?t[1]:{},c=i.emailAddress,s=i.userPassword;if(o.loggedIn)return r("validate");try{const e=yield a()({method:"post",url:u+"user/signin",data:{emailAddress:c,userPassword:s}}),t=e.data;return n("SET_CURRENT_USER_AUTHTOKEN",t),t}catch(l){throw console.log("TCL: error",l),l}}))()},logOut(e){let t=e.commit;t("SET_CURRENT_USER_AUTHTOKEN",null)},validate(e){e.commit;let t=e.state;return t.authToken?new Promise((e,t)=>{e(!0)}):Promise.resolve(null)}};function f(e){return JSON.parse(window.sessionStorage.getItem(e))}function d(e,t){window.sessionStorage.setItem(e,JSON.stringify(t))}function p(e){a.a.defaults.headers.common["auth"]=e.authToken?e.authToken.result[0].token:""}},2:function(e,t){},2883:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("Transition",{attrs:{appear:""}})],1)},o=[],a=n("444f"),u={page:{title:"Loading page...",meta:[{name:"description",content:"Loading page..."}]},components:{Layout:a["a"]}},i=u,c=n("46e4"),s=n("2877");function l(e){this["$style"]=c["default"].locals||c["default"]}var f=Object(s["a"])(i,r,o,!1,l,null,null);t["default"]=f.exports},3:function(e,t){},4:function(e,t){},"444f":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[e._v("\n  Loading..\n")])},o=[],a=(n("a481"),{data(){return{}},created(){},methods:{}}),u=a,i=n("2877"),c=Object(i["a"])(u,r,o,!1,null,"13162128",null);t["a"]=c.exports},"46e4":function(e,t,n){"use strict";var r=n("fc7c"),o=n.n(r);t["default"]=o.a},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("RouterView",{key:e.$route.fullPath})],1)],1)},a=[],u=n("c2a4"),i={page:{titleTemplate(e){return e="function"===typeof e?e(this.$store):e,e?`${e} | ${u.title}`:u.title}}},c=i,s=(n("5c0b"),n("2877")),l=Object(s["a"])(c,o,a,!1,null,null,null),f=l.exports,d=n("1da1"),p=n("8c4f"),m=n("58ca"),h=n("323e"),v=n.n(h),b=n("2f62"),g=(n("3846"),n("ade3")),y=(n("a481"),n("28a5"),n("ac6a"),n("bba4")),_=n.n(y);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(g["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const w={},P={modules:{}};function T(e,t){if(1===t.length)return e;const n=t.shift();return e.modules[n]=E({modules:{},namespaced:!0},e.modules[n]),T(e.modules[n],t)}(function(){const e=n("cfa9");e.keys().forEach(t=>{const n=e(t);if(w[t]===n)return;w[t]=n;const r=t.replace(/^\.\//,"").replace(/\.\w+$/,"").split(/\//).map(_.a),o=T(P,r),a=o.modules;a[r.pop()]=E({namespaced:!0},n)})})();var j=P.modules;function U(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.modules,r=void 0===n?j:n,o=t.modulePrefix,a=void 0===o?"":o,u=t.flags,i=void 0===u?{}:u;for(const c in r){const t=r[c];t.actions&&t.actions[e]&&(t.namespaced?R.dispatch(`${a}${c}/${e}`):i.dispatchGlobal=!0),t.modules&&U(e,{modules:t.modules,modulePrefix:a+c+"/",flags:i})}!a&&i.dispatchGlobal&&R.dispatch(e)}r["a"].use(b["a"]);const k=new b["a"].Store({modules:j,strict:!1});var R=k;U("init");var S=[{path:"/",redirect:"home"},{path:"/home",name:"home",component:()=>A(n.e("chunk-2d0c7ce7").then(n.bind(null,"51d9")))},{path:"/404",name:"404",component:n("bdd2").default,props:!0},{path:"*",redirect:"404"}];function A(e){const t=()=>({component:e,loading:n("2883").default,delay:400,error:n("ef68").default,timeout:1e4});return Promise.resolve({functional:!0,render(e,n){let r=n.data,o=n.children;return e(t,r,o)}})}n("14b7");r["a"].use(p["a"]),r["a"].use(m["a"],{keyName:"metaInfo"});const x=new p["a"]({routes:S,base:"/vue-boilerplate/",mode:"history",scrollBehavior(e,t,n){return n||{x:0,y:0}}});x.beforeEach((e,t,n)=>{null!==t.name&&v.a.start();const r=e.matched.some(e=>e.meta.authRequired);if(!r||"logout"===e.name)return n();if(R.getters["auth/loggedIn"])return R.dispatch("auth/validate").then(e=>{console.log("TCL: validUser",e),e?n():o()});function o(){n({name:"signin",query:{redirectFrom:e.fullPath}})}o()}),x.beforeResolve(function(){var e=Object(d["a"])((function*(e,t,n){try{for(const r of e.matched)yield new Promise((o,a)=>{r.meta&&r.meta.beforeResolve?r.meta.beforeResolve(e,t,(function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];r.length?(t.name===r[0].name&&v.a.done(),n(...r),a(new Error("Redirected"))):o()})):o()})}catch(r){return}n()}));return function(t,n,r){return e.apply(this,arguments)}}()),x.afterEach((e,t)=>{v.a.done()});var C=x,$=n("1dce"),L=n.n($),N=n("caf9"),I=n("a65d"),D=n.n(I);n("4989"),n("ab8b");r["a"].use(N["a"]),r["a"].use(L.a),r["a"].use(D.a),r["a"].config.productionTip=!0,window.Cypress&&(r["a"].config.errorHandler=window.Cypress.cy.onUncaughtException);const H=new r["a"]({router:C,store:R,render:e=>e(f)}).$mount("#app");window.Cypress&&(window.__app__=H)},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},"93fe":function(e,t,n){e.exports={title:"_timeout_title_QmghM"}},9400:function(e,t,n){"use strict";n.r(t),n.d(t,"EventBus",(function(){return o}));var r=n("2b0e");const o=new r["a"]},b20d:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return a})),n.d(t,"getters",(function(){return u})),n.d(t,"mutations",(function(){return i})),n.d(t,"actions",(function(){return c}));var r=n("bc3a"),o=n.n(r);const a={cached:[]},u={},i={CACHE_USER(e,t){e.cached.push(t)}},c={fetchUser(e,t){let n=e.commit,r=e.state,a=e.rootState,u=t.username;const i=a.auth.currentUser;if(i&&i.username===u)return Promise.resolve(i);const c=r.cached.find(e=>e.username===u);return c?Promise.resolve(i):o.a.get("/api/users/"+u).then(e=>{const t=e.data;return n("CACHE_USER",t),t})}}},bdd2:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  404\n")])},o=[],a={name:"FourOhFour",created(){this.$ssrContext&&this.$ssrContext.res.status(404)}},u=a,i=n("2877"),c=Object(i["a"])(u,r,o,!1,null,null,null);t["default"]=c.exports},c2a4:function(e){e.exports={title:"App",description:""}},cfa9:function(e,t,n){var r={"./auth.js":"11c0","./event-bus.js":"9400","./users.js":"b20d"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="cfa9"},d746:function(e,t,n){"use strict";var r=n("93fe"),o=n.n(r);t["default"]=o.a},ef68:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("h1",{class:e.$style.title},[e._v("\n    The page timed out while loading. Are you sure you're still connected to\n    the Internet?\n  ")])])},o=[],a=n("444f"),u={page:{title:"Page timeout",meta:[{name:"description",content:"The page timed out while loading."}]},components:{Layout:a["a"]}},i=u,c=n("d746"),s=n("2877");function l(e){this["$style"]=c["default"].locals||c["default"]}var f=Object(s["a"])(i,r,o,!1,l,null,null);t["default"]=f.exports},fc7c:function(e,t,n){e.exports={loadingIcon:"_loading_loadingIcon_2KEMq"}}});