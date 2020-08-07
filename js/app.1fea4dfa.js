(function(t){function e(e){for(var o,a,u=e[0],s=e[1],i=e[2],l=0,m=[];l<u.length;l++)a=u[l],n[a]&&m.push(n[a][0]),n[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(m.length)m.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],o=!0,a=1;a<r.length;a++){var s=r[a];0!==n[s]&&(o=!1)}o&&(c.splice(e--,1),t=u(u.s=r[0]))}return t}var o={},n={app:0},c=[];function a(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c7ce7":"420743a4"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,o){r=n[t]=[e,o]}));e.push(r[2]=o);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=a(t),c=function(e){s.onerror=s.onload=null,clearTimeout(i);var r=n[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+c+")");a.type=o,a.request=c,r[1](a)}n[t]=void 0}};var i=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(r,o,function(e){return t[e]}.bind(null,o));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=i;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1:function(t,e){},"11c0":function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return u})),r.d(e,"mutations",(function(){return s})),r.d(e,"getters",(function(){return i})),r.d(e,"actions",(function(){return l}));var o=r("1da1"),n=r("bc3a"),c=r.n(n);r("4328");r("14b7");Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_REDIRECT_OAUTH_URL;const a=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BACKEND_SERVER,u={authToken:d("authToken")},s={SET_CURRENT_USER_AUTHTOKEN(t,e){t.authToken=e,m("authToken",e),f(t)}},i={loggedIn(t){return!!t.authToken},getAuthenticationToken(t){return t.authToken}},l={init(t){let e=t.state;t.dispatch;null!==e.authToken&&f(e)},logIn(t){var e=arguments;return Object(o["a"])((function*(){let r=t.commit,o=t.dispatch,n=t.getters,u=e.length>1&&void 0!==e[1]?e[1]:{},s=u.emailAddress,i=u.userPassword;if(n.loggedIn)return o("validate");try{const t=yield c()({method:"post",url:a+"user/signin",data:{emailAddress:s,userPassword:i}}),e=t.data;return r("SET_CURRENT_USER_AUTHTOKEN",e),e}catch(l){throw console.log("TCL: error",l),l}}))()},logOut(t){let e=t.commit;e("SET_CURRENT_USER_AUTHTOKEN",null)},validate(t){t.commit;let e=t.state;return e.authToken?new Promise((t,e)=>{t(!0)}):Promise.resolve(null)}};function d(t){return JSON.parse(window.sessionStorage.getItem(t))}function m(t,e){window.sessionStorage.setItem(t,JSON.stringify(e))}function f(t){c.a.defaults.headers.common["auth"]=t.authToken?t.authToken.result[0].token:""}},1933:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return u})),r.d(e,"getters",(function(){return s})),r.d(e,"mutations",(function(){return i})),r.d(e,"actions",(function(){return l}));var o=r("1da1"),n=r("bc3a"),c=r.n(n);const a=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BACKEND_SERVER,u={auditResources:[],auditResourcesByID:[]},s={get_resources(t){return t.auditResources},get_resources_by_ID(t){return t.auditResourcesByID}},i={SET_RESOURCES(t,e){t.auditResources=e},SET_RESOURCES_BY_ID(t,e){t.auditResourcesByID=e}},l={getAuditResources(t,e){return Object(o["a"])((function*(){let r=t.commit,o=e.page,n=e.columnName,u=e.order;try{const t=yield c()({method:"get",url:`${a}audit_logs?order[${n}]=${u}&page=${o}`}),e=t.data;return r("SET_RESOURCES",e),e}catch(s){throw console.log("TCL: getResources -> error",s),s}}))()},getAuditResourcesBySearch(t,e){return Object(o["a"])((function*(){t.commit;let r=e.page,o=e.columnName,n=e.order,u=e.tableName,s=e.blameLabel;try{const t=yield c()({method:"get",url:`${a}audit_logs?order[${o}]=${n}&page=${r}&tbl=${u}&blame.label=${s}`}),e=t.data;return e}catch(i){throw console.log("TCL: getAuditResourcesBySearch -> error",i),i}}))()},getAuditResourcesByID(t,e){return Object(o["a"])((function*(){let r=t.commit,o=e.id;try{const t=yield c()({method:"get",url:`${a}audit_logs/${o}`,headers:{"X-AUTH-TOKEN":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHY3RBOFdfZXNaRkxtRklhX0lPZENFS1RRcllvOGxoU0MzalVFY1czbE00In0.eyJqdGkiOiJkZDhlYmE3OS01MWE2LTQzMzMtYjQ2Ny1lN2QzNWRkNGY1MWYiLCJleHAiOjE1NzU4ODM0MzIsIm5iZiI6MCwiaWF0IjoxNTc1ODcyNjMyLCJpc3MiOiJodHRwczovL2F1dGguc2d0d28uaW8vYXV0aC9yZWFsbXMvc2d0d28taW50ZXJuYWwiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOTkyMWFhM2UtNThmZC00MzM2LTk2MmEtN2Y2MTA2ODIwNDI2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2d0d28tY2F0YWxvZy1kZXYiLCJhdXRoX3RpbWUiOjE1NzU4NzAyOTEsInNlc3Npb25fc3RhdGUiOiJmYTQ0Y2RhMi1kNGFiLTRkNGEtYTUzYi1mZmFkNTdhMjM1MGMiLCJhY3IiOiIwIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInNndHdvX2FkbWluIiwib2ZmbGluZV9hY2Nlc3MiLCJzZ3R3b19zdGFmZiIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgb2ZmbGluZV9hY2Nlc3MgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiUHVzaGthciBTaGlyb2RrYXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJwdXNoa2Fyc0B3aW5qaXQuY29tIiwiZ2l2ZW5fbmFtZSI6IlB1c2hrYXIiLCJmYW1pbHlfbmFtZSI6IlNoaXJvZGthciIsImVtYWlsIjoicHVzaGthcnNAd2luaml0LmNvbSJ9.k_KOsfIanE0kpJCExsT4Rhscw7y1yoofNpUh5T90lDC63KMa_uI0zee_jWw-DoMme50nk_ugbDDxskGzRYEPwSOThXQXWjiifhccmJMWCRiTPhrwJwjKm-N7vDY6Nt9PgawLylL-O3egEu3301ZUwgT2TQ1AVddvekbdtm8kKQmzi_RdjrsqrzmzdDEcmNE817wSlszAQNQcOTzgfyXK1h4HcM1oisnpTEMAwujWBaElXHlwOwD20-P6gw_JxnNo4CfGIerkUxJ4ult4Vh2XxNxLtk1TaiQ-61pNlc4WKkRC5QJnU4guOju8Z-HKGl918rMNUd0LzFEyEXlzKj-S-g"}}),e=t.data;return r("SET_RESOURCES_BY_ID",e),e}catch(n){throw console.log("TCL: getResources -> error",n),n}}))()}}},2:function(t,e){},"22ca":function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return u})),r.d(e,"getters",(function(){return s})),r.d(e,"mutations",(function(){return i})),r.d(e,"actions",(function(){return l}));r("386d");var o=r("1da1"),n=r("bc3a"),c=r.n(n);const a=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BACKEND_SERVER,u={productResources:[],uploadPercentage:0,uploadDocumentPercentage:0},s={get_resources(t){return t.productResources},get_image_upload_percentage(t){return t.uploadPercentage},get_file_upload_percentage(t){return t.uploadDocumentPercentage}},i={SET_PRODUCT_RESOURCES(t,e){t.productResources=e},SET_UPLOADPERCENTAGE(t,e){t.uploadPercentage=e},SET_UPLOAD_DOCUMENT_PERCENTAGE(t,e){t.uploadDocumentPercentage=e}},l={getSingleProductById(t,e){return Object(o["a"])((function*(){t.commit;let r=e.id;try{const t=yield c()({method:"get",url:`${a}single_products/${r}`}),e=t.data;return e}catch(o){throw console.log("TCL: getSingleProductByID -> error",o),o}}))()},patchSingleProductById(t,e){return Object(o["a"])((function*(){t.commit;let r=e.id,o=e.data;try{const t=yield c()({method:"patch",url:`${a}single_products/${r}`,data:o,headers:{"Content-Type":"application/merge-patch+json"}}),e=t.data;return e}catch(n){throw console.log("TCL: patchSingleProductByID -> error",n),n}}))()},postSingleProductResources(t,e){return Object(o["a"])((function*(){t.commit;let r=e.data;try{const t=yield c()({method:"post",url:a+"single_products",data:r}),e=t.data;return e}catch(o){throw console.log("TCL: postResources -> error",o),o}}))()},uploadFile(t,e){return Object(o["a"])((function*(){let r=t.commit,o=e.data;try{const t=yield c()({method:"post",url:a+"images",data:o,headers:{"Content-Type":"multipart/form-data"},onUploadProgress:t=>{var e=parseInt(Math.round(100*t.loaded/t.total));r("SET_UPLOADPERCENTAGE",e)}}),e=t.data;return e}catch(n){throw console.log("TCL: upload -> error",n),n}}))()},uploadDocuments(t,e){return Object(o["a"])((function*(){let r=t.commit,o=e.data;try{const t=yield c()({method:"post",url:a+"pdfs",data:o,headers:{"Content-Type":"multipart/form-data"},onUploadProgress:t=>{var e=parseInt(Math.round(100*t.loaded/t.total));r("SET_UPLOAD_DOCUMENT_PERCENTAGE",e)}}),e=t.data;return e}catch(n){throw console.log("TCL: upload documents -> error",n),n}}))()},getSingleProductResources(t,e){return Object(o["a"])((function*(){let r=t.commit,o=e.columnName,n=e.order,u=e.page,s=e.search;try{const t=yield c()({method:"get",url:`${a}single_products/?order[${o}]=${n}&page=${u}&search=${s}`}),e=t.data;return r("SET_PRODUCT_RESOURCES",e),e}catch(i){throw console.log("TCL: getSingleProductResources -> error",i),i}}))()},getAllSingleProductResources(t,e){return Object(o["a"])((function*(){t.commit;let r=e.columnName,o=e.order,n=e.pagination;try{const t=yield c()({method:"get",url:`${a}single_products/?order[${r}]=${o}&pagination=${n}`}),e=t.data;return e}catch(u){throw console.log("TCL: getSingleProductResources -> error",u),u}}))()},downloadSingleProductFile(t,e){return Object(o["a"])((function*(){t.commit;let r=e.file;try{const t=yield c()({method:"get",url:r.url,responseType:"arraybuffer"}),e=t.data;return e}catch(o){throw console.log("TCL: downloadFile -> error",o),o}}))()},deleteProductByID(t,e){return Object(o["a"])((function*(){t.commit;let r=e.id;try{const t=yield c()({method:"delete",url:`${a}single_products/${r}`}),e=t.data;return 204===t.status&&console.log("Deleted Successfully"),e}catch(o){throw console.log("TCL: deleteResourcesByID -> error",o),o}}))()},deletefileByID(t,e){return Object(o["a"])((function*(){t.commit;let r=e.id;try{const t=yield c()({method:"delete",url:`${a}pdfs/${r}`}),e=t.data;return 204===t.status&&console.log("Deleted file Successfully"),e}catch(o){throw console.log("TCL: deletefileByID -> error",o),o}}))()},deleteImageByID(t,e){return Object(o["a"])((function*(){t.commit;let r=e.id;try{const t=yield c()({method:"delete",url:`${a}images/${r}`}),e=t.data;return 204===t.status&&console.log("Deleted image Successfully"),e}catch(o){throw console.log("TCL: deleteResourcesByID -> error",o),o}}))()}}},2883:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("Transition",{attrs:{appear:""}})],1)},n=[],c=r("444f"),a={page:{title:"Loading page...",meta:[{name:"description",content:"Loading page..."}]},components:{Layout:c["a"]}},u=a,s=r("46e4"),i=r("2877");function l(t){this["$style"]=s["default"].locals||s["default"]}var d=Object(i["a"])(u,o,n,!1,l,null,null);e["default"]=d.exports},3:function(t,e){},4:function(t,e){},"444f":function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[t._v("\n  Loading..\n")])},n=[],c=(r("a481"),{data(){return{}},created(){},methods:{}}),a=c,u=r("2877"),s=Object(u["a"])(a,o,n,!1,null,"13162128",null);e["a"]=s.exports},"46e4":function(t,e,r){"use strict";var o=r("fc7c"),n=r.n(o);e["default"]=n.a},5:function(t,e){},"56d7":function(t,e,r){"use strict";r.r(e);var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("RouterView",{key:t.$route.fullPath})],1)],1)},c=[],a=r("c2a4"),u={page:{titleTemplate(t){return t="function"===typeof t?t(this.$store):t,t?`${t} | ${a.title}`:a.title}}},s=u,i=(r("5c0b"),r("2877")),l=Object(i["a"])(s,n,c,!1,null,null,null),d=l.exports,m=r("1da1"),f=r("8c4f"),h=r("58ca"),g=r("323e"),p=r.n(g),y=r("2f62"),E=(r("3846"),r("ade3")),b=(r("a481"),r("28a5"),r("ac6a"),r("bba4")),R=r.n(b);function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){Object(E["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const C={},T={modules:{}};function w(t,e){if(1===e.length)return t;const r=e.shift();return t.modules[r]=O({modules:{},namespaced:!0},t.modules[r]),w(t.modules[r],e)}(function(){const t=r("cfa9");t.keys().forEach(e=>{const r=t(e);if(C[e]===r)return;C[e]=r;const o=e.replace(/^\.\//,"").replace(/\.\w+$/,"").split(/\//).map(R.a),n=w(T,o),c=n.modules;c[o.pop()]=O({namespaced:!0},r)})})();var S=T.modules;function v(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.modules,o=void 0===r?S:r,n=e.modulePrefix,c=void 0===n?"":n,a=e.flags,u=void 0===a?{}:a;for(const s in o){const e=o[s];e.actions&&e.actions[t]&&(e.namespaced?I.dispatch(`${c}${s}/${t}`):u.dispatchGlobal=!0),e.modules&&v(t,{modules:e.modules,modulePrefix:c+s+"/",flags:u})}!c&&u.dispatchGlobal&&I.dispatch(t)}o["a"].use(y["a"]);const j=new y["a"].Store({modules:S,strict:!1});var I=j;v("init");var N=[{path:"/",redirect:"home"},{path:"/home",name:"home",component:()=>D(r.e("chunk-2d0c7ce7").then(r.bind(null,"51d9")))},{path:"/404",name:"404",component:r("bdd2").default,props:!0},{path:"*",redirect:"404"}];function D(t){const e=()=>({component:t,loading:r("2883").default,delay:400,error:r("ef68").default,timeout:1e4});return Promise.resolve({functional:!0,render(t,r){let o=r.data,n=r.children;return t(e,o,n)}})}r("14b7");o["a"].use(f["a"]),o["a"].use(h["a"],{keyName:"metaInfo"});const P=new f["a"]({routes:N,base:"/",mode:"history",scrollBehavior(t,e,r){return r||{x:0,y:0}}});P.beforeEach((t,e,r)=>{null!==e.name&&p.a.start();const o=t.matched.some(t=>t.meta.authRequired);if(!o||"logout"===t.name)return r();if(I.getters["auth/loggedIn"])return I.dispatch("auth/validate").then(t=>{console.log("TCL: validUser",t),t?r():n()});function n(){r({name:"signin",query:{redirectFrom:t.fullPath}})}n()}),P.beforeResolve(function(){var t=Object(m["a"])((function*(t,e,r){try{for(const o of t.matched)yield new Promise((n,c)=>{o.meta&&o.meta.beforeResolve?o.meta.beforeResolve(t,e,(function(){for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];o.length?(e.name===o[0].name&&p.a.done(),r(...o),c(new Error("Redirected"))):n()})):n()})}catch(o){return}r()}));return function(e,r,o){return t.apply(this,arguments)}}()),P.afterEach((t,e)=>{p.a.done()});var U=P,L=r("1dce"),$=r.n(L),A=r("caf9"),B=r("a65d"),V=r.n(B);r("4989"),r("ab8b");o["a"].use(A["a"]),o["a"].use($.a),o["a"].use(V.a),o["a"].config.productionTip=!0,window.Cypress&&(o["a"].config.errorHandler=window.Cypress.cy.onUncaughtException);const k=new o["a"]({router:U,store:I,render:t=>t(d)}).$mount("#app");window.Cypress&&(window.__app__=k)},"5c0b":function(t,e,r){"use strict";var o=r("5e27"),n=r.n(o);n.a},"5e27":function(t,e,r){},6:function(t,e){},"603c":function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return u})),r.d(e,"getters",(function(){return s})),r.d(e,"mutations",(function(){return i})),r.d(e,"actions",(function(){return l}));var o=r("1da1"),n=r("bc3a"),c=r.n(n);const a=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BACKEND_SERVER,u={countryResource:[],categoryResource:[]},s={get_country(t){return t.countryResource},get_category(t){return t.categoryResource}},i={SET_COUNTRY_RESOURCES(t,e){t.countryResource=e},SET_CATEGORY_RESOURCES(t,e){t.categoryResource=e}},l={getCountry(t,e){return Object(o["a"])((function*(){let r=t.commit,o=e.pagination;try{const t=yield c()({method:"get",url:`${a}countries/?pagination=${o}`}),e=t.data;return r("SET_COUNTRY_RESOURCES",e),e}catch(n){throw console.log("TCL: getCountry -> error",n),n}}))()},getCountryByID(t,e){return Object(o["a"])((function*(){t.commit;let r=e.id;try{const t=yield c()({method:"get",url:`${a}countries/${r}`}),e=t.data;return e}catch(o){throw console.log("TCL: getCountryByID -> error",o),o}}))()},patchCountryByID(t,e){return Object(o["a"])((function*(){t.commit;let r=e.id,o=e.data;try{const t=yield c()({method:"patch",url:`${a}countries/${r}`,data:o,headers:{"Content-Type":"application/merge-patch+json"}}),e=t.data;return e}catch(n){throw console.log("TCL: patchCountryByID -> error",n),n}}))()},getCategories(t){return Object(o["a"])((function*(){let e=t.commit;try{const t=yield c()({method:"get",url:a+"categories"}),r=t.data;return e("SET_CATEGORY_RESOURCES",r),r}catch(r){throw console.log("TCL: getCategories -> error",r),r}}))()},deleteCountryByID(t,e){return Object(o["a"])((function*(){t.commit;let r=e.id;console.log("TCL: deleteCountryByID -> id",r);try{const t=yield c()({method:"delete",url:`${a}countries/${r}`}),e=t.data;return 204===e.status&&console.log("Deleted Successfully"),e}catch(o){throw console.log("TCL: deleteCountryByID -> error",o),o}}))()},postCountry(t,e){return Object(o["a"])((function*(){t.commit;let r=e.data;try{const t=yield c()({method:"post",url:a+"countries",data:r,headers:{"Content-Type":"application/ld+json"}}),e=t.data;return e}catch(o){throw console.log("TCL: postCountry -> error",o),o}}))()}}},7:function(t,e){},8:function(t,e){},9:function(t,e){},"93fe":function(t,e,r){t.exports={title:"_timeout_title_QmghM"}},9400:function(t,e,r){"use strict";r.r(e),r.d(e,"EventBus",(function(){return n}));var o=r("2b0e");const n=new o["a"]},b20d:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return c})),r.d(e,"getters",(function(){return a})),r.d(e,"mutations",(function(){return u})),r.d(e,"actions",(function(){return s}));var o=r("bc3a"),n=r.n(o);const c={cached:[]},a={},u={CACHE_USER(t,e){t.cached.push(e)}},s={fetchUser(t,e){let r=t.commit,o=t.state,c=t.rootState,a=e.username;const u=c.auth.currentUser;if(u&&u.username===a)return Promise.resolve(u);const s=o.cached.find(t=>t.username===a);return s?Promise.resolve(u):n.a.get("/api/users/"+a).then(t=>{const e=t.data;return r("CACHE_USER",e),e})}}},bdd2:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticStyle:{height:"calc(100vh - 58px)"},attrs:{"fill-height":""}},[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",{attrs:{"text-xs-center":""}},[r("h1",{staticClass:"display-2 primary--text"},[t._v("Whoops, 404")]),r("p",[t._v("The page you were looking for does not exist")]),r("v-btn",{attrs:{to:"/home",outline:"",color:"primary"}},[t._v("\n        Get me out of here!\n      ")])],1)],1)],1)},n=[],c={name:"FourOhFour",created(){this.$ssrContext&&this.$ssrContext.res.status(404)}},a=c,u=r("2877"),s=Object(u["a"])(a,o,n,!1,null,null,null);e["default"]=s.exports},c2a4:function(t){t.exports={title:"App",description:""}},cfa9:function(t,e,r){var o={"./audit.js":"1933","./auth.js":"11c0","./catalogs.js":"d3c9","./country.js":"603c","./dashboard.js":"d959","./event-bus.js":"9400","./masters.js":"d6e1","./products.js":"22ca","./users.js":"b20d"};function n(t){var e=c(t);return r(e)}function c(t){var e=o[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}n.keys=function(){return Object.keys(o)},n.resolve=c,t.exports=n,n.id="cfa9"},d3c9:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return u})),r.d(e,"getters",(function(){return s})),r.d(e,"mutations",(function(){return i})),r.d(e,"actions",(function(){return l}));var o=r("1da1"),n=r("bc3a"),c=r.n(n);const a=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BACKEND_SERVER,u={entityResources:[]},s={get_resources(t){return t.entityResources}},i={SET_RESOURCES(t,e){t.entityResources=e}},l={getCatalogResources(t){return Object(o["a"])((function*(){let e=t.commit;try{const t=yield c()({method:"get",url:a+"catalogs"}),r=t.data;return e("SET_RESOURCES",r),r}catch(r){throw console.log("TCL: getResources -> error",r),r}}))()},postCatalogResources(t,e){return Object(o["a"])((function*(){t.commit;let r=e.data;try{const t=yield c()({method:"post",url:a+"catalogs",data:r}),e=t.data;return e}catch(o){throw console.log("TCL: postResources -> error",o),o}}))()},getCatalogResourcesByID(t,e){return Object(o["a"])((function*(){t.commit;let r=e.id;try{const t=yield c()({method:"get",url:`${a}catalogs/${r}`}),e=t.data;return e}catch(o){throw console.log("TCL: getResourcesByID -> error",o),o}}))()},getProductResourcesByCatalogID(t,e){return Object(o["a"])((function*(){t.commit;let r=e.id;try{const t=yield c()({method:"get",url:`${a}single_products/?catalogs=${r}`}),e=t.data;return e}catch(o){throw console.log("TCL: current catalog products -> error",o),o}}))()},deleteCatalogResourcesByID(t,e){return Object(o["a"])((function*(){t.commit;let r=e.id;try{const t=yield c()({method:"delete",url:`${a}catalogs/${r}`}),e=t.data;return 204===t.status&&console.log("Deleted Successfully"),e}catch(o){throw console.log("TCL: deleteResourcesByID -> error",o),o}}))()},putCatalogResourcesByID(t,e){return Object(o["a"])((function*(){t.commit;let r=e.id,o=e.data;try{const t=yield c()({method:"put",url:`${a}catalogs/${r}`,data:o}),e=t.data;return e}catch(n){throw console.log("TCL: putResourcesByID -> error",n),n}}))()},patchCatalogResourcesByID(t,e){return Object(o["a"])((function*(){t.commit;let r=e.id,o=e.data;try{const t=yield c()({method:"patch",url:`${a}catalogs/${r}`,data:o,headers:{"Content-Type":"application/merge-patch+json"}}),e=t.data;return e}catch(n){throw console.log("TCL: patchResourcesByID -> error",n),n}}))()},getAllProductsByName(t,e){return Object(o["a"])((function*(){t.commit;let r=e.name;try{const t=yield c()({method:"get",url:`${a}single_products?name=${r}&pagination=false&order[name]=asc`}),e=t.data;return e}catch(o){throw console.log("TCL: search products -> error",o),o}}))()}}},d6e1:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return u})),r.d(e,"getters",(function(){return s})),r.d(e,"mutations",(function(){return i})),r.d(e,"actions",(function(){return l}));var o=r("1da1"),n=r("bc3a"),c=r.n(n);const a=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BACKEND_SERVER,u={entityResources:[]},s={get_resources(t){return t.entityResources}},i={SET_USER(t,e){t.entityResources=e}},l={signUpUser(t,e){return Object(o["a"])((function*(){t.commit;let r=e.userData;try{const t=yield c()({method:"post",url:a+"user/signup",data:r}),e=t.data;return e}catch(o){throw console.log("TCL: signUpUser -> error",o),o}}))()},confirmEmail(t,e){return Object(o["a"])((function*(){t.commit;let r=e.emailData;try{const t=yield c()({method:"post",url:a+"user/emailVerification",data:r}),e=t.data;return e}catch(o){throw console.log("TCL: confirmEmail -> error",o),o}}))()},forgotPassword(t,e){return Object(o["a"])((function*(){t.commit;let r=e.emailData;try{const t=yield c()({method:"post",url:a+"user/forgotPassword",data:r}),e=t.data;return e}catch(o){throw console.log("TCL: forgotPassword -> error",o),o}}))()},resetPassword(t,e){return Object(o["a"])((function*(){t.commit;let r=e.emailData;try{const t=yield c()({method:"post",url:a+"user/resetPassword",data:r}),e=t.data;return e}catch(o){throw console.log("TCL: resetPassword -> error",o),o}}))()}}},d746:function(t,e,r){"use strict";var o=r("93fe"),n=r.n(o);e["default"]=n.a},d959:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return u})),r.d(e,"getters",(function(){return s})),r.d(e,"mutations",(function(){return i})),r.d(e,"actions",(function(){return l}));var o=r("1da1"),n=r("bc3a"),c=r.n(n);const a=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BACKEND_SERVER,u={dashboardData:{}},s={getDashboardResources(){return u.dashboardData}},i={SET_RESOURCES(t,e){t.dashboardData=e}},l={getResources(t){return Object(o["a"])((function*(){let e=t.commit;try{const t=yield c()({method:"get",url:a+"openInfo"}),r=t.data;return e("SET_RESOURCES",r),r}catch(r){throw console.log("TCL: getResources -> error",r),r}}))()}}},ef68:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("h1",{class:t.$style.title},[t._v("\n    The page timed out while loading. Are you sure you're still connected to\n    the Internet?\n  ")])])},n=[],c=r("444f"),a={page:{title:"Page timeout",meta:[{name:"description",content:"The page timed out while loading."}]},components:{Layout:c["a"]}},u=a,s=r("d746"),i=r("2877");function l(t){this["$style"]=s["default"].locals||s["default"]}var d=Object(i["a"])(u,o,n,!1,l,null,null);e["default"]=d.exports},fc7c:function(t,e,r){t.exports={loadingIcon:"_loading_loadingIcon_2KEMq"}}});