(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9516769f"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(e);var u=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(l);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}s[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/alan-news.github.io/dist/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("ecfe")},"060b":function(e,t,a){"use strict";a("6d5a")},"419f":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],o={data:function(){return{}},methods:{},mounted:function(){},created:function(){}},i=o,c=(a("034f"),a("0c7c")),u=Object(c["a"])(i,s,r,!1,null,null,null),l=u.exports,p=(a("d3b7"),a("8c4f")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hidden"},[a("navbar",{attrs:{active:e.active},on:{"toggle-sidebar":function(t){e.activeSidebar=t},"set-active":function(t){e.active=t}}}),a("vs-sidebar",{attrs:{absolute:"",open:e.activeSidebar},on:{"update:open":function(t){e.activeSidebar=t}},scopedSlots:e._u([{key:"logo",fn:function(){},proxy:!0},{key:"footer",fn:function(){return[a("vs-row",{attrs:{justify:"space-between"}},[a("vs-avatar",[a("img",{attrs:{src:"/avatars/avatar-5.png",alt:""}})]),a("vs-avatar",{attrs:{"badge-color":"danger","badge-position":"top-right"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v(" 28 ")]},proxy:!0}])},[a("i",{staticClass:"bx bx-bell"})])],1)]},proxy:!0}]),model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[a("vs-sidebar-item",{attrs:{id:"home"},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bx-home"})]},proxy:!0}])},[e._v(" Home ")]),a("vs-sidebar-item",{attrs:{id:"general"},on:{click:function(t){return e.getNews("general")}},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bx-grid-alt"})]},proxy:!0}])},[e._v(" General news ")]),a("vs-sidebar-group",{scopedSlots:e._u([{key:"header",fn:function(){return[a("vs-sidebar-item",{attrs:{arrow:""},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bx-group"})]},proxy:!0}])},[e._v(" Categories ")])]},proxy:!0}])},[a("vs-sidebar-item",{attrs:{id:"health"},on:{click:function(t){return e.getNews("health")}},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bxl-instagram"})]},proxy:!0}])},[e._v(" Health ")]),a("vs-sidebar-item",{attrs:{id:"sports"},on:{click:function(t){return e.getNews("sports")}},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bxl-twitter"})]},proxy:!0}])},[e._v(" Sports ")]),a("vs-sidebar-item",{attrs:{id:"tech"},on:{click:function(t){return e.getNews("tech")}},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bxl-facebook"})]},proxy:!0}])},[e._v(" Technology ")])],1),a("vs-sidebar-group",{scopedSlots:e._u([{key:"header",fn:function(){return[a("vs-sidebar-item",{attrs:{arrow:""},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bx-group"})]},proxy:!0}])},[e._v(" Social media ")])]},proxy:!0}])},[a("vs-sidebar-item",{attrs:{id:"Instagram"},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bxl-instagram"})]},proxy:!0}])},[e._v(" Instagram ")]),a("vs-sidebar-item",{attrs:{id:"twitter"},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bxl-twitter"})]},proxy:!0}])},[e._v(" Twitter ")]),a("vs-sidebar-item",{attrs:{id:"Facebook"},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bxl-facebook"})]},proxy:!0}])},[e._v(" Facebook ")])],1)],1),"homepage"==e.active&&0==e.newsQueried.length?a("card",{attrs:{data:e.helpToolTips}}):e._e(),e.savedSources.length>0?a("cards",{attrs:{activeBar:e.active,articleItems:e.savedSources}}):e._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:"homepage"==e.active&&!e.savedSources.length&&e.newsQueried.length>0,expression:"\n      active == 'homepage' && !savedSources.length && newsQueried.length > 0\n    "}]},[a("card",{attrs:{data:e.newsQueried,activeArticle:e.activeArticle}}),a("pagination")],1)],1)},f=[],m=(a("99af"),a("96cf"),a("1da1")),g=a("ac15"),b=a.n(g),v=a("bc3a"),h=a.n(v),y=a("639a"),w=a.n(y),x={data:function(){return{alanKey:Object({NODE_ENV:"production",BASE_URL:"/alan-news.github.io/dist/"}).VUE_APP_ALAN_KEY,NEWS_API_KEY:Object({NODE_ENV:"production",BASE_URL:"/alan-news.github.io/dist/"}).VUE_APP_NEWS_KEY,savedSources:[],newsQueried:[],activeArticle:0}},methods:{openNotification:function(e){var t=e.title,a=e.position,n=e.text;t=t||"Welcome",a=a||"top-right",n=n||"",this.$vs.notification({title:t,position:a,text:"".concat(n)})},getNews:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function a(){var n,s,r,o,i,c,u,l,p,d,f,m;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=e||"headlines",s="Headlines",r="Here are today's top headlines for US",o={title:s,text:r},i="https://newsapi.org/v2/",a.t0=e,a.next="sources"===a.t0?8:"headlines"===a.t0?11:13;break;case 8:return s="Sources",n=" ".concat(i,"sources&apiKey=").concat(t.NEWS_API_KEY),a.abrupt("break",13);case 11:return n=" ".concat(i,"top-headlines?country=us&category=general&apiKey=").concat(t.NEWS_API_KEY),a.abrupt("break",13);case 13:return a.prev=13,a.next=16,h.a.get(n);case 16:c=a.sent,"headlines"==e?(u=c.data,l=u.articles,p=u.totalResults,console.log(l,p),t.newsQueried=l):"sources"==e&&(d=c.data,f=d.sources,m=d.totalResults,console.log(f,m),t.savedSources=f),a.next=25;break;case 20:a.prev=20,a.t1=a["catch"](13),console.log(a.t1),o.text="Error retrieving today's top headlines for US",t.openNotification(o);case 25:return a.prev=25,a.finish(25);case 27:case"end":return a.stop()}}),a,null,[[13,20,25,27]])})))()},openFullscreen:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},mounted:function(){console.log(Object({NODE_ENV:"production",BASE_URL:"/alan-news.github.io/dist/"}).VUE_APP_ALAN_KEY)},created:function(){var e=this,t=b()({key:this.alanKey,onConnectionStatus:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),onCommand:function(a){var n,s;console.log(a);var r=a.command,o=a.number,i=a.articles,c=a.savedArticles,u=a.search_url;switch(r){case"netflix":case"youtube":case"google":case"googlesnow":window.open(u,"_blank"),e.openFullscreen();break;case"newsSources":e.newsQueried=[],e.savedSources=a.savedArticles;break;case"newHeadlines":case"todaysHeadlines":case"categoryNews":case"terms":e.savedSources=[],e.newsQueried="newHeadlines"===r?c:a.searchedNews,console.log(e.newsQueried);break;case"highlight":++e.activeArticle,console.log(e.activeArticle);break;case"open":n=o.length>2?w()(o,{fuzzy:!0}):o,s=i[n-1],n>i.length?t.playText("Please try that again..."):s?(window.open(s.url,"_blank"),t.playText("Opening...")):t.playText("Please try that again...");break}e.savedSources["type"]=e.newsQueried["type"]=r}})}},_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vs-navbar",{staticStyle:{position:"fixed",top:"0"},attrs:{shadow:"",square:"","center-collapsed":"",value:e.active},scopedSlots:e._u([{key:"left",fn:function(){return[a("vs-button",{attrs:{flat:"",icon:""},on:{click:function(t){return e.$emit("toggle-sidebar",!e.toggleSidebar)}}},[a("IconifyIcon",{attrs:{icon:"bulletList"}})],1)]},proxy:!0},{key:"right",fn:function(){return[a("vs-button",[e._v("Get Started")])]},proxy:!0}])},[a("vs-navbar-item",{attrs:{active:"homepage"==e.active,id:"homepage"},on:{click:function(t){return e.$emit("set-active","homepage")}}},[e._v(" Homepage ")]),a("vs-navbar-item",{attrs:{active:"docs"==e.active,id:"docs"},on:{click:function(t){return e.$emit("set-active","docs")}}},[e._v(" Documents ")])],1)],1)},k=[],S={props:{active:{type:String,default:"homepage"}},data:function(){return{toggleSidebar:!1}}},j=S,E=Object(c["a"])(j,_,k,!1,null,"d35bd750",null),A=E.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-top":"100px","margin-bottom":"100px"}},["homepage"==e.activeBar?a("vs-row",[a("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"12"}},[a("div",[a("h3",[e._v("homepage")])]),a("vs-card-group",e._l(e.articleItems,(function(t){return a("vs-card",{key:t.id,scopedSlots:e._u([{key:"title",fn:function(){return[a("h3",[e._v(e._s(t.name))])]},proxy:!0},{key:"img",fn:function(){return[a("img",{attrs:{src:t.picture,alt:""}})]},proxy:!0},{key:"text",fn:function(){return[a("p",[e._v(e._s(t.description))])]},proxy:!0},{key:"interactions",fn:function(){return[a("vs-button",{attrs:{danger:"",icon:""}},[a("i",{staticClass:"bx bx-heart"})]),a("vs-button",{staticClass:"btn-chat",attrs:{shadow:"",primary:""}},[a("i",{staticClass:"bx bx-chat"}),a("span",{staticClass:"span"},[e._v(" "+e._s(t.country)+" ")])])]},proxy:!0}],null,!0)})})),1)],1)],1):e._e(),"docs"==e.activeBar?a("vs-row",[a("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"12"}},[a("div",[a("h3",[e._v("docs")])]),a("vs-card-group",e._l(e.docitems,(function(t){return a("vs-card",{key:t.message,scopedSlots:e._u([{key:"title",fn:function(){return[a("h3",[e._v(e._s(t.message))])]},proxy:!0},{key:"img",fn:function(){return[a("img",{attrs:{src:t.picture,alt:""}})]},proxy:!0},{key:"text",fn:function(){return[a("p",[e._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit.")])]},proxy:!0},{key:"interactions",fn:function(){return[a("vs-button",{attrs:{danger:"",icon:""}},[a("i",{staticClass:"bx bx-heart"})]),a("vs-button",{staticClass:"btn-chat",attrs:{shadow:"",primary:""}},[a("i",{staticClass:"bx bx-chat"}),a("span",{staticClass:"span"},[e._v(" 54 ")])])]},proxy:!0}],null,!0)})})),1)],1)],1):e._e()],1)},N=[],T={name:"card",data:function(){return{items:[{message:"Foo",picture:"https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{message:"Bar",picture:"https://st2.depositphotos.com/6903990/9767/i/600/depositphotos_97674118-stock-photo-fashion-woman-with-jewelry-set.jpg"},{message:"Fooq",picture:"https://i.insider.com/5e38494bab49fd614557fcb4?width=600&format=jpeg&auto=webp"},{message:"Barw",picture:"https://i.pinimg.com/originals/81/6a/45/816a455afd237ac866e10a3611462080.jpg"},{message:"Fooe",picture:"https://media.istockphoto.com/photos/beautiful-woman-face-portrait-beauty-model-isolated-on-white-picture-id640299760?k=6&m=640299760&s=612x612&w=0&h=LxrbYFczp6etPY2oj1sqzGfyGU_XYtS2UaKNxXTMaIs="},{message:"Barr",picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4kKxl9OMXWhhmg_eIxEpcmfBxmvd54U1BA&usqp=CAU"},{message:"Foot",picture:"https://www.thebalanceeveryday.com/thmb/9xE6zrdgFMwkTuIihfb5B8Db_7I=/400x250/filters:no_upscale():max_bytes(150000):strip_icc()/portrait-of-the-beautiful--young-woman-with-long-brown--hair-528440158-5ad292f2875db900366812b3.jpg"},{message:"Bary",picture:"https://s3.amazonaws.com/pixpa.com/com/articles/1515071175-image.png"}],docitems:[{message:"Foo",picture:"https://s3.amazonaws.com/pixpa.com/com/articles/1515071175-image.png"},{message:"Bar",picture:"https://st2.depositphotos.com/6903990/9767/i/600/depositphotos_97674118-stock-photo-fashion-woman-with-jewelry-set.jpg"},{message:"Fooq",picture:"https://i.insider.com/5e38494bab49fd614557fcb4?width=600&format=jpeg&auto=webp"},{message:"Barw",picture:"https://i.pinimg.com/originals/81/6a/45/816a455afd237ac866e10a3611462080.jpg"},{message:"Fooe",picture:"https://media.istockphoto.com/photos/beautiful-woman-face-portrait-beauty-model-isolated-on-white-picture-id640299760?k=6&m=640299760&s=612x612&w=0&h=LxrbYFczp6etPY2oj1sqzGfyGU_XYtS2UaKNxXTMaIs="},{message:"Barr",picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4kKxl9OMXWhhmg_eIxEpcmfBxmvd54U1BA&usqp=CAU"},{message:"Foot",picture:"https://www.thebalanceeveryday.com/thmb/9xE6zrdgFMwkTuIihfb5B8Db_7I=/400x250/filters:no_upscale():max_bytes(150000):strip_icc()/portrait-of-the-beautiful--young-woman-with-long-brown--hair-528440158-5ad292f2875db900366812b3.jpg"},{message:"Bary",picture:"https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}]}},props:{activeBar:{type:String},articleItems:{type:Array}}},O=T,I=(a("060b"),Object(c["a"])(O,C,N,!1,null,null,null)),P=I.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid",staticStyle:{"margin-top":"100px"}},[a("h3",[e._v("SEARCH RESULTS")]),a("vs-row",e._l(e.data,(function(t,n){return a("vs-col",{key:n,staticStyle:{"margin-bottom":"20px"},attrs:{w:"3",lg:"3",sm:"12",xs:"12"}},[a("vs-card",{class:e.activeArticle==n?"active":"",staticStyle:{"margin-left":"30px"},on:{click:function(a){return e.viewNewsDetails(t.url)}},scopedSlots:e._u([{key:"title",fn:function(){return[a("h3",[e._v(e._s(t.title))])]},proxy:!0},{key:"img",fn:function(){return[a("img",{attrs:{src:t.urlToImage||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMgzp0GkUxGF42Z_JSwg_Jlz8ordgiqnukw&usqp=CAU",alt:""}})]},proxy:!0},{key:"text",fn:function(){return[a("p",[e._v(e._s(t.description))])]},proxy:!0},{key:"interactions",fn:function(){return[t.publishedAt?a("vs-button",{staticClass:"btn-chat",staticStyle:{float:"left"},attrs:{shadow:"",primary:""}},[a("span",{staticClass:"span"},[e._v(" "+e._s(new Date(t.publishedAt).toDateString())+" ")])]):e._e()]},proxy:!0}],null,!0)})],1)})),1)],1)},B=[],q=(a("a9e3"),{name:"Card",data:function(){return{num:3}},props:{data:{type:Array,default:function(){}},activeArticle:{type:Number}},methods:{viewNewsDetails:function(e){e&&window.open(e,"_blank")}}}),U=q,R=(a("60cb"),Object(c["a"])(U,F,B,!1,null,"682f2cd0",null)),K=R.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"center",staticStyle:{"margin-top":"10px"}},[a("vs-pagination",{attrs:{length:4,disabled:""},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)},G=[],z={name:"Pagination",data:function(){return{page:1}}},Y=z,H=Object(c["a"])(Y,L,G,!1,null,null,null),M=H.exports,$={name:"Home",data:function(){return{active:"homepage",activeSidebar:!1,helpToolTips:[{title:"Latest news",urlToImage:"",description:"Try saying, 'Give me the latest news for today'",id:"latest-news"},{title:"News by categories",urlToImage:"",description:"Try saying, 'Give me the latest technology news'",id:"latest-news"},{title:"News by terms",urlToImage:"",description:"Try saying, 'What's up with PS5",id:"latest-news"},{title:"News by sources",urlToImage:"",description:"Try saying, 'Show me the news from CNN",id:"latest-news"}]}},mixins:[x],components:{navbar:A,cards:P,card:K,pagination:M},mounted:function(){},created:function(){}},D=$,Q=Object(c["a"])(D,d,f,!1,null,null,null),W=Q.exports;n["default"].use(p["a"]);var V=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],X=new p["a"]({mode:"history",base:"/alan-news.github.io/dist/",routes:V}),J=X,Z=a("2f62");n["default"].use(Z["a"]);var ee=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),te=a("574d"),ae=a.n(te),ne=a("c850"),se=a("66f5"),re=a("2cfc");ne["a"].addIcon("home",se["a"]),ne["a"].addIcon("bulletList",re["a"]);var oe=ne["a"];a("04f2");n["default"].use(oe),n["default"].use(ae.a,{colors:{primary:"#5b3cc4",success:"rgb(23, 201, 100)",danger:"rgb(242, 19, 93)",warning:"rgb(255, 130, 0)",dark:"rgb(36, 33, 69)"}}),n["default"].config.productionTip=!1,new n["default"]({router:J,store:ee,render:function(e){return e(l)}}).$mount("#app")},"60cb":function(e,t,a){"use strict";a("419f")},"6d5a":function(e,t,a){},ecfe:function(e,t,a){}});
//# sourceMappingURL=app.fec6ad3e.js.map