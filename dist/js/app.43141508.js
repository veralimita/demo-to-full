(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"eeb7aa48"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"60dbf60e"}[t]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],m.parentNode.removeChild(m),a(i)},m.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}s[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0b0a":function(t,e,a){},"1b3a":function(t,e,a){},5630:function(t,e,a){"use strict";a("e85b")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{staticClass:"is-dark",staticStyle:{"margin-bottom":"3rem"},scopedSlots:t._u([{key:"brand",fn:function(){return[a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[t._v(" Demo to full ")])]},proxy:!0}])}),a("router-view"),a("Footer",{staticStyle:{"margin-top":"3rem"}})],1)},s=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"content"},[a("p",{staticStyle:{color:"white"}},[a("strong",{staticStyle:{color:"white"}},[t._v("Demo2Full")]),t._v(" © 2021 ")])])])}],c={},l=c,u=a("2877"),d=Object(u["a"])(l,i,o,!1,null,null,null),m=d.exports,f={components:{Footer:m}},p=f,h=(a("5c0b"),Object(u["a"])(p,r,s,!1,null,null,null)),g=h.exports,v=a("289d"),b=(a("a89b"),a("ecee")),_=a("c074"),w=a("ad3d"),C=(a("d3b7"),a("8c4f")),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container"},[a("div",{attrs:{id:"home"}},[a("Highlights"),a("Last"),a("List")],1)])},S=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.highlights&&t.highlights.length?a("b-carousel",{attrs:{"indicator-inside":!1},scopedSlots:t._u([{key:"indicators",fn:function(e){return[a("div",{staticClass:"card highlight-card"},[t._v(" "+t._s(t.highlights[e.i].name)+" ")])]}}],null,!1,1003695218)},t._l(t.highlights,(function(e,n){return a("b-carousel-item",{key:n},[a("section",{class:"hero is-large"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:t.getHeader(e),alt:"Placeholder image"}})]),a("div",{staticClass:"css-gradient"}),a("div",{staticClass:"content has-text-left"},[a("h1",{staticClass:"white is-size-3"},[t._v(t._s(e.name))]),a("div",{staticClass:"white is-size-6 ellipsis is-ellipsis-2"},[t._v(" "+t._s(e.short)+" ")]),a("div",{staticClass:"buttons",staticStyle:{"margin-top":"1em"}},[a("b-button",{attrs:{type:"is-danger"},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),function(){return t.openSteam(e)}()}}},[t._v(" Show more ")])],1)])])])])])])})),1):t._e(),a("b-skeleton",{attrs:{height:"428px",active:!t.highlights}})],1)},x=[],k=(a("fb6a"),a("5530")),j=(a("96cf"),a("1da1")),O=a("2f62"),P={created:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fetchHighlights();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),t.addError(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},methods:Object(k["a"])(Object(k["a"])({},Object(O["b"])(["addError","fetchHighlights"])),{},{getHeader:function(t){return"https://cdn.akamai.steamstatic.com/steam/apps/".concat(t.appid,"/capsule_616x353.jpg")},openSteam:function(t){window.open("https://store.steampowered.com/app/".concat(t.appid),"_blank")}}),computed:Object(O["c"])({highlights:function(t){return t.highlights?t.highlights.slice(0,5):null}})},T=P,H=(a("ce42"),Object(u["a"])(T,E,x,!1,null,null,null)),L=H.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"last"}},[a("section",{staticClass:"hero is-large is-bold",staticStyle:{padding:"6rem 0"}},[t._m(0),t.latests?a("b-carousel-list",{attrs:{data:t.latests,"items-to-show":3,"icon-size":"is-large"},scopedSlots:t._u([{key:"item",fn:function(e){return[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-16by9"},[a("a",{on:{click:function(a){return t.info(e.index)}}},[a("img",{attrs:{src:t.getHeader(e),alt:"Placeholder image"}})])]),a("b-tag",{staticStyle:{position:"absolute",top:"4px",right:"4px"},attrs:{type:"is-danger",rounded:""}},[a("b",[t._v(t._s(t.getDistance(e)))])])],1),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("p",{staticClass:"title is-4 has-text-left ellipsis is-ellipsis-1"},[t._v(" "+t._s(e.name)+" ")]),a("p",{staticClass:"subtitle is-6 has-text-left ellipsis is-ellipsis-2"},[t._v(" "+t._s(e.short)+" ")]),a("b-field",{attrs:{grouped:""}},[e.rating?a("p",{staticClass:"control"},[a("b-rate",{attrs:{value:e.rating,"show-score":"",disabled:""}})],1):t._e(),a("p",{staticClass:"control",staticStyle:{"margin-left":"auto"}},[a("b-button",{attrs:{size:"is-small",type:"is-danger",outlined:""},on:{click:function(){return t.openSteam(e)}}},[t._v("Go to Steam")])],1)])],1)])])]}}],null,!1,3529597681),model:{value:t.activeCard,callback:function(e){t.activeCard=e},expression:"activeCard"}}):t._e(),a("b-skeleton",{attrs:{active:!t.latests,height:"400px"}})],1)])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"has-text-left title-wrapper"},[a("h1",{staticClass:"title white"},[t._v("New arrivals")])])}],R=a("1556"),G={data:function(){return{activeCard:0}},created:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fetchLatests();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),t.addError(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},methods:Object(k["a"])(Object(k["a"])({},Object(O["b"])(["addError","fetchLatests"])),{},{getHeader:function(t){return"https://cdn.akamai.steamstatic.com/steam/apps/".concat(t.appid,"/capsule_616x353.jpg")},info:function(t){this.activeCard=t},openSteam:function(t){window.open("https://store.steampowered.com/app/".concat(t.appid),"_blank")},getDistance:function(t){return Object(R["a"])(new Date(t.release),new Date,{addSuffix:!0})}}),computed:Object(O["c"])({latests:function(t){return t.latests}})},M=G,I=(a("5630"),Object(u["a"])(M,D,A,!1,null,null,null)),$=I.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"list"}},[a("div",{staticClass:"tile is-ancestor"},[t.list?a("div",{staticClass:"tile is-vertical"},t._l(t.list,(function(t){return a("HorizontalItem",{key:t.appid,staticClass:"tile",attrs:{demo:t}})})),1):t._e()]),a("div",{staticClass:"buttons"},[a("b-button",{attrs:{tag:"router-link",to:"/games",type:"is-danger is-link",expanded:"",outlined:""}},[t._v(" Show more ")])],1)])},q=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tile"},[a("div",{staticClass:"card is-horizontal",staticStyle:{"margin-bottom":"2rem"}},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:t.getHeader(t.demo),alt:"Placeholder image"}})])]),a("div",{staticClass:"card-stacked"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"media-content has-text-left",staticStyle:{"margin-bottom":"1rem"}},[a("p",{staticClass:"title is-4"},[t._v(t._s(t.demo.name))])]),a("div",{staticClass:"content has-text-left"},[a("div",{staticClass:"ellipsis is-ellipsis-4 is-size-6-5",staticStyle:{"margin-bottom":"1rem"}},[t._v(" "+t._s(t.demo.short)+" ")]),a("div",{staticClass:"block"},[a("div",[t._v(" Demo release date: "),a("time",{attrs:{datetime:t.demo.release}},[t._v(t._s(t.getDate(t.demo.release)))])]),t.demo.parent_release?a("div",[t._v(" Game release date: "),a("time",{attrs:{datetime:t.demo.parent_release}},[t._v(t._s(t.getDate(t.demo.parent_release)))])]):t._e(),a("div",[t._v(" Platform"+t._s(t.demo.platforms.length>1?"s":"")+": "+t._s(t.demo.platforms.map((function(t){return t.name})).join(", "))+" ")])])])]),a("footer",{staticClass:"card-footer"},[a("div",{staticClass:"card-footer-item has-text-left"},[a("b-button",{attrs:{type:"is-danger is-link",outlined:""},on:{click:t.openSteam}},[t._v("Go to Steam")])],1)])])])])},F=[],B=a("b166"),J={props:{demo:Object},data:function(){return{}},created:function(){return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{openSteam:function(){window.open("https://store.steampowered.com/app/".concat(this.demo.appid),"_blank")},getHeader:function(t){return"https://cdn.akamai.steamstatic.com/steam/apps/".concat(t.appid,"/capsule_616x353.jpg")},getDate:function(t){try{return Object(B["a"])(new Date(t),"MMM dd, yyyy")}catch(e){return t}}}},K=J,U=(a("ff3a"),Object(u["a"])(K,N,F,!1,null,null,null)),Q=U.exports,V={components:{HorizontalItem:Q},data:function(){return{}},created:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fetchList();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),t.addError(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},methods:Object(k["a"])({},Object(O["b"])(["addError","fetchList"])),computed:Object(O["c"])({list:function(t){return t.list}})},W=V,X=Object(u["a"])(W,z,q,!1,null,null,null),Y=X.exports,Z={name:"Home",components:{Highlights:L,Last:$,List:Y},created:function(){window.scrollTo(0,0)}},tt=Z,et=(a("cccb"),Object(u["a"])(tt,y,S,!1,null,null,null)),at=et.exports;n["a"].use(C["a"]);var nt=[{path:"/",name:"Home",component:at},{path:"/games",name:"Games",component:function(){return a.e("about").then(a.bind(null,"a2e9"))}}],rt=new C["a"]({mode:"history",base:"/",routes:nt}),st=rt,it=(a("99af"),a("17d4")),ot=a.n(it),ct=a("bc3a"),lt=a.n(ct);n["a"].use(O["a"]);var ut=new O["a"].Store({state:{queue:ot()(function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:lt.a.get(e).then((function(t){return a(null,t)})).catch(a);case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),1),highlights:null,latests:null,list:null,games:[],gamesCurrentPage:0,errors:[]},mutations:{ADD_ERROR:function(t,e){t.errors.push(e)},SET_HIGHLIGHTS:function(t,e){t.highlights=e},SET_LATESTS:function(t,e){t.latests=e},SET_LIST:function(t,e){t.list=e},SET_GAMES:function(t,e){t.games=t.games.concat(e),t.gamesCurrentPage=t.gamesCurrentPage+1},SET_GAMESPAGE:function(t,e){t.gamesCurrentPage=e}},actions:{addError:function(t,e){var a=t.commit;a("ADD_ERROR",e)},fetchHighlights:function(t){var e=t.commit,a=t.state,n="https://api.demo2full.com/new";return new Promise((function(t,r){a.queue.push(n,(function(t,a){if(t)return r(t);e("SET_HIGHLIGHTS",a.data.result)}))}))},fetchLatests:function(t){var e=t.commit,a=t.state,n="https://api.demo2full.com/comingsoon";return new Promise((function(t,r){a.queue.push(n,(function(t,a){if(t)return r(t);e("SET_LATESTS",a.data.result)}))}))},fetchList:function(t){var e=t.commit,a=t.state,n="https://api.demo2full.com/demo";return new Promise((function(t,r){a.queue.push(n,(function(t,a){if(t)return r(t);e("SET_LIST",a.data.result)}))}))},fetchGames:function(t){var e=t.commit,a=t.state,n="https://api.demo2full.com/demo?page="+a.gamesCurrentPage;return new Promise((function(t,r){a.queue.push(n,(function(t,a){if(t)return r(t);e("SET_GAMES",a.data.result)}))}))},changePage:function(t,e){var a=t.commit;a("SET_GAMESPAGE",e)}},modules:{}});b["c"].add(_["a"]),n["a"].component("font-awesome-icon",w["a"]),n["a"].use(v["a"],{defaultIconPack:"fas"}),n["a"].config.productionTip=!1,new n["a"]({router:st,store:ut,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5ced":function(t,e,a){},"9c0c":function(t,e,a){},a89b:function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")},ce42:function(t,e,a){"use strict";a("1b3a")},e85b:function(t,e,a){},ff3a:function(t,e,a){"use strict";a("0b0a")}});
//# sourceMappingURL=app.43141508.js.map