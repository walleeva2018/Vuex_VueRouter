(function(){"use strict";var e={4723:function(e,t,n){var r=n(9242),a=n(3396);function o(e,t){const n=(0,a.up)("router-link"),r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",null,[(0,a.Wm)(n,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(n,{to:"/topstory"},{default:(0,a.w5)((()=>[(0,a.Uk)(" | Top Stories")])),_:1}),(0,a.Wm)(n,{to:"/beststory"},{default:(0,a.w5)((()=>[(0,a.Uk)(" | Best Stories")])),_:1}),(0,a.Wm)(n,{to:"/newstory"},{default:(0,a.w5)((()=>[(0,a.Uk)(" | New Stories")])),_:1}),(0,a.Wm)(n,{to:"/ask"},{default:(0,a.w5)((()=>[(0,a.Uk)(" | AsK ")])),_:1})]),(0,a.Wm)(r)],64)}var s=n(89);const i={},l=(0,s.Z)(i,[["render",o]]);var u=l,c=n(2483);const v=(0,a._)("div",{class:"home"},[(0,a._)("img",{alt:"Hacker Logo",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCVbPndDMqRQBsns65_x6j-57k_x5X9-vKXM_L3Y5&s"})],-1),m=(0,a._)("div",{class:"typewriter"},"Welcome to Hacker News",-1);function d(e,t){return(0,a.wg)(),(0,a.iD)(a.HY,null,[v,m],64)}const p={},y=(0,s.Z)(p,[["render",d]]);var g=y,k=n(65),w=n(7139),f=n(4870),h=n(9219);const b={key:0},D={key:1},_={key:2,class:"banner-container"},S={class:"banner-list"},H={class:"banner-item"},C=["innerHTML"],I={key:0},j={key:0},U={key:1},T={key:0};var z={__name:"SingleView",props:["arr"],setup(e){const t=e,n=(0,f.iH)([]),r=(0,f.iH)(!0),o=(0,f.iH)(null),s=(0,f.iH)(!1);function i(){s.value=!s.value}return(0,a.bv)((async()=>{const e=t.arr;try{const t=await h.Z.get(`https://hacker-news.firebaseio.com/v0/item/${e}.json?print=pretty`);n.value=t.data,r.value=!1}catch(a){o.value=a.message,r.value=!1}})),(e,t)=>{const l=(0,a.up)("B"),u=(0,a.up)("SingleView",!0);return r.value?((0,a.wg)(),(0,a.iD)("div",b,"Loading...")):o.value?((0,a.wg)(),(0,a.iD)("div",D,"Error occurred: "+(0,w.zw)(o.value),1)):((0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("ul",S,[(0,a._)("li",H,[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" By "+(0,w.zw)(n.value.by)+" :",1)])),_:1}),(0,a._)("span",{innerHTML:n.value.text},null,8,C),n.value.kids?((0,a.wg)(),(0,a.iD)("div",I,[(0,a._)("div",{onClick:t[0]||(t[0]=e=>i()),class:"clickable-area"},[s.value?((0,a.wg)(),(0,a.iD)("div",U,"Hide Replies")):((0,a.wg)(),(0,a.iD)("div",j,(0,w.zw)(Object.keys(n.value.kids).length)+" Replies ",1))]),s.value?((0,a.wg)(),(0,a.iD)("div",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.value.kids,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a.Wm)(u,{arr:e},null,8,["arr"])])))),128))])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])])]))}}};const W=(0,s.Z)(z,[["__scopeId","data-v-1b1188dc"]]);var L=W;const B={key:0},F={key:1},O={key:2,class:"banner-container"},N={class:"banner-list"},Z={key:0},A=["href"],x=(0,a._)("br",null,null,-1),R={key:0},M=(0,a._)("br",null,null,-1),P=(0,a._)("br",null,null,-1),E=["onClick"],q={key:0},V={key:0,class:"clickable-area"},$={key:1,class:"clickable-area"},K=(0,a._)("br",null,null,-1),Y={key:1},X=(0,a._)("br",null,null,-1),G={key:1},Q=(0,a._)("br",null,null,-1),J=["disabled"],ee=["disabled"],te=10;var ne={__name:"ShowView",setup(e){const t=(0,k.oR)(),n=t.getters.getCurrentFeed,r=(0,f.iH)([]),o=(0,f.iH)([]);"TopStory"==t.getters.getCurrentFeed?r.value=t.getters.getTopStoryID:"NewStory"==t.getters.getCurrentFeed?r.value=t.getters.getNewStoryID:"BestStory"==t.getters.getCurrentFeed?r.value=t.getters.getBestStoryID:"AskStory"==t.getters.getCurrentFeed&&(r.value=t.getters.getAskStoryID);const s=(0,f.iH)([]),i=(0,f.iH)(1),l=(0,f.iH)(!0),u=(0,f.iH)(null),c=(0,a.Fl)((()=>Math.ceil(r.value.length/te)));async function v(){try{const e=(i.value-1)*te,t=e+te,n=r.value.slice(e,t),a=n.map((e=>h.Z.get(`https://hacker-news.firebaseio.com/v0/item/${e}.json?print=pretty`))),o=await Promise.all(a);s.value=o.map((e=>e.data));for(const r of s.value)r.comment=!1;l.value=!1}catch(e){u.value=e.message,l.value=!1}}function m(){i.value>1&&i.value--,v()}function d(){i.value<c.value&&i.value++,v()}function p(e){t.commit("setComments",e.kids),e.comment=!e.comment,o.value=e.kids}return(0,a.bv)((async()=>{v()})),(e,t)=>{const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("h1",null,(0,w.zw)((0,f.SU)(n)),1),l.value?((0,a.wg)(),(0,a.iD)("div",B,"Loading...")):u.value?((0,a.wg)(),(0,a.iD)("div",F,"Error occurred: "+(0,w.zw)(u.value),1)):((0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("ul",N,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.value,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:"banner-item"},[e.url?((0,a.wg)(),(0,a.iD)("div",Z,[(0,a._)("a",{href:e.url,target:"empty"},(0,w.zw)(e.title),9,A),x,(0,a.Uk)(" Created by "),(0,a.Wm)(r,{to:{name:"user",params:{username:`${e.by}`}}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,w.zw)(e.by),1)])),_:2},1032,["to"]),(0,a.Uk)(" at "),e.time?((0,a.wg)(),(0,a.iD)("span",R,(0,w.zw)(Date(1e3*e.time).toLocaleString()),1)):(0,a.kq)("",!0),M,P,(0,a._)("div",{onClick:t=>p(e)},[e.comment?((0,a.wg)(),(0,a.iD)("span",$,[(0,a.Uk)(" Hide Comments "),K])):((0,a.wg)(),(0,a.iD)("span",q,[e.kids?((0,a.wg)(),(0,a.iD)("span",V,[(0,a.Uk)((0,w.zw)(Object.keys(e.kids).length)+" comments ",1),(0,a.Wm)(r,{to:{name:"comments",params:{id:`${e.id}`}}},{default:(0,a.w5)((()=>[(0,a.Uk)("Open in Another Page ")])),_:2},1032,["to"])])):(0,a.kq)("",!0)]))],8,E),e.comment?((0,a.wg)(),(0,a.iD)("div",Y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.value,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a.Wm)(L,{arr:e},null,8,["arr"])])))),128))])):(0,a.kq)("",!0),X])):((0,a.wg)(),(0,a.iD)("div",G,(0,w.zw)(e.title),1))])))),128))])])),(0,a.Uk)(" Page : "+(0,w.zw)(i.value)+" ",1),Q,(0,a._)("button",{onClick:m,disabled:1===i.value}," Previous ",8,J),(0,a._)("button",{onClick:d,disabled:i.value===c.value}," Next ",8,ee)])}}};const re=ne;var ae=re;const oe={key:0},se={key:1},ie="TopStory";var le={__name:"TopStories",setup(e){const t=(0,f.iH)(!1),n=(0,k.oR)();return n.commit("setCurrentFeed",ie),(0,a.bv)((async()=>{h.Z.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then((e=>{n.commit("setTopStoryID",e.data),t.value=!0})).catch((e=>{console.error("Error fetching data:",e)}))})),(e,n)=>t.value?((0,a.wg)(),(0,a.iD)("div",oe,[(0,a.Wm)(ae)])):((0,a.wg)(),(0,a.iD)("div",se,"Loading....."))}};const ue=le;var ce=ue;const ve={key:0},me={key:1},de="NewStory";var pe={__name:"NewStories",setup(e){const t=(0,k.oR)(),n=(0,f.iH)(!1);return t.commit("setCurrentFeed",de),(0,a.bv)((()=>{h.Z.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty").then((e=>{t.commit("setNewStoryID",e.data),n.value=!0})).catch((e=>{console.error("Error fetching data:",e)}))})),(e,t)=>n.value?((0,a.wg)(),(0,a.iD)("div",ve,[(0,a.Wm)(ae)])):((0,a.wg)(),(0,a.iD)("div",me,"Loading...."))}};const ye=pe;var ge=ye;const ke={key:0},we={key:1},fe="BestStory";var he={__name:"BestStories",setup(e){const t=(0,f.iH)(!1),n=(0,k.oR)();return n.commit("setCurrentFeed",fe),(0,a.bv)((()=>{h.Z.get("https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty").then((e=>{n.commit("setBestStoryID",e.data),t.value=!0})).catch((e=>{console.error("Error fetching data:",e)}))})),(e,n)=>t.value?((0,a.wg)(),(0,a.iD)("div",ke,[(0,a.Wm)(ae)])):((0,a.wg)(),(0,a.iD)("div",we,"Loading...."))}};const be=he;var De=be;const _e=e=>((0,a.dD)("data-v-34a8779c"),e=e(),(0,a.Cn)(),e),Se={key:0,class:"post-design"},He={class:"title"},Ce=_e((()=>(0,a._)("br",null,null,-1))),Ie=_e((()=>(0,a._)("br",null,null,-1))),je={class:"content"},Ue=["innerHTML"],Te=_e((()=>(0,a._)("br",null,null,-1))),ze={class:"author"},We={key:1};var Le={__name:"UserView",setup(e){const t=(0,c.yj)(),n=(0,f.iH)(null),r=(0,f.iH)(!1);return(0,a.bv)((()=>{h.Z.get(`https://hacker-news.firebaseio.com/v0/user/${t.params.username}.json?print=pretty`).then((e=>{n.value=e.data,r.value=!0})).catch((e=>{console.error("Error fetching data:",e)}))})),(e,t)=>1==r.value?((0,a.wg)(),(0,a.iD)("div",Se,[(0,a._)("h2",He,"User "+(0,w.zw)(e.$route.params.username),1),Ce,Ie,(0,a._)("div",je,[(0,a.Uk)("About: "),(0,a._)("span",{innerHTML:n.value.about},null,8,Ue)]),Te,(0,a._)("div",ze,"Karma: "+(0,w.zw)(n.value.karma),1)])):((0,a.wg)(),(0,a.iD)("div",We,"Loading..."))}};const Be=(0,s.Z)(Le,[["__scopeId","data-v-34a8779c"]]);var Fe=Be;const Oe={key:0},Ne={key:1},Ze={key:2,class:"banner-container"},Ae={class:"banner-list"},xe=["innerHTML"],Re={key:0},Me=["onClick"],Pe={key:0,class:"clickable-area"},Ee={key:1,class:"clickable-area"},qe={key:0};var Ve={__name:"CommentVIew",setup(e){const t=(0,k.oR)(),n=(0,f.iH)(t.getters.getComments),r=(0,f.iH)([]),o=(0,f.iH)(!0),s=(0,f.iH)(null);async function i(){try{const e=n.value.map((e=>h.Z.get(`https://hacker-news.firebaseio.com/v0/item/${e}.json?print=pretty`))),t=await Promise.all(e);r.value=t.map((e=>e.data));for(const n of r.value)n.comment=!1;o.value=!1}catch(e){s.value=e.message,o.value=!1}}function l(e){t.commit("setComments",e.kids),e.comment=!e.comment}return i(),(e,t)=>{const n=(0,a.up)("B"),i=(0,a.up)("CommentVIew",!0);return o.value?((0,a.wg)(),(0,a.iD)("div",Oe,"Loading...")):s.value?((0,a.wg)(),(0,a.iD)("div",Ne,"Error occurred: "+(0,w.zw)(s.value),1)):((0,a.wg)(),(0,a.iD)("div",Ze,[(0,a._)("ul",Ae,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.value,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:"banner-item"},[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" By "+(0,w.zw)(e.by)+" :",1)])),_:2},1024),(0,a._)("span",{innerHTML:e.text},null,8,xe),e.kids?((0,a.wg)(),(0,a.iD)("div",Re,[(0,a._)("div",{onClick:t=>l(e)},[0==e.comment?((0,a.wg)(),(0,a.iD)("span",Pe,(0,w.zw)(Object.keys(e.kids).length)+" Replies ",1)):((0,a.wg)(),(0,a.iD)("span",Ee," Hide Replies "))],8,Me),1==e.comment?((0,a.wg)(),(0,a.iD)("div",qe,[(0,a.Wm)(i)])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])))),128))])]))}}};const $e=(0,s.Z)(Ve,[["__scopeId","data-v-9169cf36"]]);var Ke=$e;const Ye=e=>((0,a.dD)("data-v-c332226a"),e=e(),(0,a.Cn)(),e),Xe={key:0,class:"post-design"},Ge=Ye((()=>(0,a._)("h2",{class:"title"},"Hacker News",-1))),Qe=["href"],Je={class:"content"},et={class:"author"},tt={key:1};var nt={__name:"CommentViewPage",setup(e){const t=(0,f.iH)(!1),n=(0,f.iH)(!1),r=(0,c.yj)(),o=(0,k.oR)();function s(e){o.commit("setComments",e.kids),e.comment=!e.comment}return(0,a.bv)((()=>{h.Z.get(`https://hacker-news.firebaseio.com/v0/item/${r.params.id}.json?print=pretty`).then((e=>{t.value=e.data,n.value=!0})).catch((e=>{console.error("Error fetching data:",e)}))})),(e,r)=>n.value?((0,a.wg)(),(0,a.iD)("div",Xe,[Ge,(0,a._)("a",{href:t.value.url,target:"empty"},[(0,a._)("p",Je,(0,w.zw)(t.value.title),1)],8,Qe),(0,a._)("p",et,[(0,a.Uk)(" Posted by: "),(0,a._)("span",null,(0,w.zw)(t.value.by),1),(0,a.Uk)(" "+(0,w.zw)(s(t.value))+" ",1),(0,a.Wm)(Ke)])])):((0,a.wg)(),(0,a.iD)("div",tt,"Loading..."))}};const rt=(0,s.Z)(nt,[["__scopeId","data-v-c332226a"]]);var at=rt;const ot={key:0},st={key:1},it="AskStory";var lt={__name:"AskView",setup(e){const t=(0,f.iH)(!1),n=(0,k.oR)();return n.commit("setCurrentFeed",it),(0,a.bv)((async()=>{h.Z.get("https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty").then((e=>{n.commit("setAskStoryID",e.data),t.value=!0})).catch((e=>{console.error("Error fetching data:",e)}))})),(e,n)=>t.value?((0,a.wg)(),(0,a.iD)("div",ot,[(0,a.Wm)(ae)])):((0,a.wg)(),(0,a.iD)("div",st,"Loading....."))}};const ut=lt;var ct=ut;const vt=[{path:"/",name:"home",component:g},{path:"/topstory",name:"topstory",component:ce},{path:"/show",name:"Show",component:ae},{path:"/newstory",name:"newstory",component:ge},{path:"/beststory",name:"beststory",component:De},{path:"/user/:username",name:"user",component:Fe},{path:"/comment/:id",name:"comments",component:at},{path:"/ask",name:"ask",component:ct}],mt=(0,c.p7)({history:(0,c.PO)("/"),routes:vt});var dt=mt;const pt=(0,k.MT)({state:{TopStoryID:null,currentFeed:null,BestStoryID:null,NewStoryID:null,Commnets:null,AskStoryID:null},mutations:{setTopStoryID(e,t){e.TopStoryID=t},setCurrentFeed(e,t){e.currentFeed=t},setBestStoryID(e,t){e.BestStoryID=t},setNewStoryID(e,t){e.NewStoryID=t},setComments(e,t){e.Commnets=t},setAskStoryID(e,t){e.AskStoryID=t}},getters:{getTopStoryID(e){return e.TopStoryID},getCurrentFeed(e){return e.currentFeed},getBestStoryID(e){return e.BestStoryID},getNewStoryID(e){return e.NewStoryID},getComments(e){return e.Commnets},getAskStoryID(e){return e.AskStoryID}}});var yt=pt;(0,r.ri)(u).use(yt).use(dt).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],o=e[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,s=r[0],i=r[1],l=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var c=l(n)}for(t&&t(r);u<s.length;u++)o=s[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunkvuex_router"]=self["webpackChunkvuex_router"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4723)}));r=n.O(r)})();
//# sourceMappingURL=app.c011b74b.js.map