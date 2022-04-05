import{g as T,h as L,$ as E,a as B,b as K,P as W,N as I,_ as O,c as U,d as M,e as R,f as q}from"./nuxt-3d32af6f.mjs";import{_ as J,r as V,q as F,w as b,o as Q,d as v,b as e,e as a}from"./bootstrap-1c35b7e5.mjs";function X(y){let{swiper:t,extendParams:_,on:u,emit:k}=y;const n=T(),d=L();t.keyboard={enabled:!1},_({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function x(G){if(!t.enabled)return;const{rtlTranslate:m}=t;let s=G;s.originalEvent&&(s=s.originalEvent);const r=s.keyCode||s.charCode,z=t.params.keyboard.pageUpDown,o=z&&r===33,i=z&&r===34,p=r===37,f=r===39,g=r===38,w=r===40;if(!t.allowSlideNext&&(t.isHorizontal()&&f||t.isVertical()&&w||i)||!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&g||o))return!1;if(!(s.shiftKey||s.altKey||s.ctrlKey||s.metaKey)&&!(n.activeElement&&n.activeElement.nodeName&&(n.activeElement.nodeName.toLowerCase()==="input"||n.activeElement.nodeName.toLowerCase()==="textarea"))){if(t.params.keyboard.onlyInViewport&&(o||i||p||f||g||w)){let A=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&t.$el.parents(`.${t.params.slideActiveClass}`).length===0)return;const D=t.$el,S=D[0].clientWidth,$=D[0].clientHeight,H=d.innerWidth,P=d.innerHeight,l=t.$el.offset();m&&(l.left-=t.$el[0].scrollLeft);const C=[[l.left,l.top],[l.left+S,l.top],[l.left,l.top+$],[l.left+S,l.top+$]];for(let h=0;h<C.length;h+=1){const c=C[h];if(c[0]>=0&&c[0]<=H&&c[1]>=0&&c[1]<=P){if(c[0]===0&&c[1]===0)continue;A=!0}}if(!A)return}t.isHorizontal()?((o||i||p||f)&&(s.preventDefault?s.preventDefault():s.returnValue=!1),((i||f)&&!m||(o||p)&&m)&&t.slideNext(),((o||p)&&!m||(i||f)&&m)&&t.slidePrev()):((o||i||g||w)&&(s.preventDefault?s.preventDefault():s.returnValue=!1),(i||w)&&t.slideNext(),(o||g)&&t.slidePrev()),k("keyPress",r)}}function j(){t.keyboard.enabled||(E(n).on("keydown",x),t.keyboard.enabled=!0)}function N(){!t.keyboard.enabled||(E(n).off("keydown",x),t.keyboard.enabled=!1)}u("init",()=>{t.params.keyboard.enabled&&j()}),u("destroy",()=>{t.keyboard.enabled&&N()}),Object.assign(t.keyboard,{enable:j,disable:N})}var Y="/_nuxt/assets/icons8-f-cute.3b02a426.svg",Z="/_nuxt/assets/css3.20d99463.svg",ee="/_nuxt/assets/icons8-b-cute.19cdcf7e.svg",te="/_nuxt/assets/expressjs-icon.44e8ea18.svg",se="/_nuxt/assets/mongodb-icon.64a21d47.svg",ae="/_nuxt/assets/mariadb-icon.5b3b5ddf.svg",le="/_nuxt/assets/icons8-o-cute.44026c20.svg",ne="/_nuxt/assets/wordpress-icon.1dbcce02.svg",re="/_nuxt/assets/canva-icon.00b39470.svg",oe="/_nuxt/assets/vscode.ac6dde88.svg",ie="/_nuxt/assets/git.717a57ea.svg",de="/_nuxt/assets/digitalocean-icon.91247310.svg";const ce={head:{title:"skills",meta:[{hid:"description",name:"MEVN developer | website developer",content:"I know front end and some basic of backend. html, css, javascript, vscode, vue js, nuxt js, many more."}]},components:{Swiper:B,SwiperSlide:K},setup(){return{modules:[W,I,X]}}},me=e("section",{class:"bg-white"},[e("div",{class:"container px-4 mx-auto"},[e("div",{class:"flex flex-col justify-center"},[e("div",{class:"flex items-center justify-center"},[e("img",{class:"w-6 -mr-1",src:Y,alt:""}),e("h1",{class:"text-2xl font-semibold text-center text-red-500"},"RONT END")]),e("span",{class:"text-sm text-center text-black"},"MEVN Learner")]),e("div",{class:"flex flex-wrap items-center justify-center -mx-4 lg:-mx-24"},[e("div",{class:"w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0"},[e("div",{class:"flex flex-wrap items-start -mx-4"},[e("div",{class:"w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0"},[e("div",{class:"relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300"},[e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",src:O,alt:""}),e("h4",{class:"mb-1 text-sm font-medium font-heading"},"Advance"),e("h4",{class:"mb-4 text-sm font-medium font-heading"},[a("Semantic Tags Structure, SEO Tags "),e("span",{class:"lowercase"},"etc")]),e("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},"HTML 5")])]),e("div",{class:"w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20"},[e("div",{class:"relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300"},[e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[38%]",src:Z,alt:""}),e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[62%]",src:U,alt:""}),e("h4",{class:"mb-1 text-sm font-medium font-heading"},"Advance"),e("h4",{class:"mb-4 text-sm font-medium capitalize font-heading"},[a("class, id, flex, grid, animation, transition "),e("span",{class:"lowercase"},"etc")]),e("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},[a("CSS 3 "),e("span",{class:"text-indigo-400"},"||"),a(" TAILWINd CSS")])])]),e("div",{class:"w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mt-20"},[e("div",{class:"relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300"},[e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2",src:M,alt:""}),e("h4",{class:"mb-1 text-sm font-medium font-heading"},"Basic"),e("h4",{class:"mb-4 text-sm font-medium capitalize font-heading"},[a("DOM, loop,validation, condition,event "),e("span",{class:"lowercase"},"etc")]),e("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},"Java script")])]),e("div",{class:"w-full px-4 pb-4 md:w-1/2 lg:w-1/4"},[e("div",{class:"relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300"},[e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[40%]",src:R,alt:""}),e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[60%]",src:q,alt:""}),e("h4",{class:"mb-1 text-sm font-medium font-heading"},"Basic"),e("h4",{class:"mb-4 text-sm font-medium capitalize font-heading"},[a("fundamentals, advanced components, transitions & animations, vuex, form validation, routing "),e("span",{class:"lowercase"},"etc")]),e("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},[a("vue js "),e("span",{class:"text-indigo-400"},"||"),a(" nuxt js")])])])])])])])],-1),pe=e("section",{class:"bg-white"},[e("div",{class:"container px-4 mx-auto"},[e("div",{class:"flex items-center justify-center"},[e("img",{class:"w-6 -mr-1",src:ee,alt:""}),e("h1",{class:"flex justify-center text-2xl font-semibold text-black"},"ACK END")]),e("div",{class:"flex flex-wrap items-center justify-center -mx-4"},[e("div",{class:"w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0"},[e("div",{class:"flex flex-wrap items-start -mx-4"},[e("div",{class:"w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0"},[e("div",{class:"relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300"},[e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",src:te,alt:""}),e("h4",{class:"mb-4 text-sm font-medium capitalize font-heading"},"newbie"),e("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},"express js")])]),e("div",{class:"w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20"},[e("div",{class:"relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300"},[e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",src:se,alt:""}),e("h4",{class:"mb-1 text-sm font-medium capitalize font-heading"},"newbie"),e("h4",{class:"mb-4 text-sm font-medium capitalize font-heading"},"crud, connection"),e("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},"mongo db")])]),e("div",{class:"w-full px-4 md:w-1/2 lg:w-1/4 mb-14 md:mb-0 lg:mt-20"},[e("div",{class:"relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300"},[e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2",src:ae,alt:""}),e("h4",{class:"mb-1 text-sm font-medium capitalize font-heading"},"basic"),e("h4",{class:"mb-4 text-sm font-medium capitalize font-heading"},[a("crud oppression "),e("span",{class:"lowercase"},"etc")]),e("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},"maria db")])])])])])])],-1),fe=e("section",{class:"bg-white"},[e("div",{class:"container px-4 mx-auto"},[e("div",{class:"flex items-center justify-center"},[e("img",{class:"w-6 -mr-[3px]",src:le,alt:""}),e("h1",{class:"text-[#00749A] text-2xl justify-center flex font-semibold"},"THER")]),e("div",{class:"flex flex-wrap items-center justify-center -mx-4"},[e("div",{class:"w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0"},[e("div",{class:"flex flex-wrap items-start -mx-4"},[e("div",{class:"w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0"},[e("div",{class:"relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300"},[e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",src:ne,alt:""}),e("h4",{class:"mb-1 text-sm font-medium font-heading"},"Advance"),e("h4",{class:"mb-4 text-sm font-medium capitalize font-heading"},[a("theme create & edit, plugin "),e("span",{class:"lowercase"},"etc")]),e("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},"wordpress")])]),e("div",{class:"w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20"},[e("div",{class:"relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300"},[e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",src:re,alt:""}),e("h4",{class:"mb-1 text-sm font-medium font-heading"},"Advance"),e("h4",{class:"mb-4 text-sm font-medium capitalize font-heading"},[a("video banner & ads, image editor "),e("span",{class:"lowercase"},"etc")]),e("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},"canva")])]),e("div",{class:"w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20"},[e("div",{class:"relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300"},[e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[35%]",src:oe,alt:""}),e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[65%]",src:ie,alt:""}),e("h4",{class:"mb-1 text-sm font-medium font-heading"},"Advance"),e("h4",{class:"mb-4 text-sm font-medium capitalize font-heading"},[a("vscode, theme, plugin, shortcut, pull, put, repo, clone "),e("span",{class:"lowercase"},"etc")]),e("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},[a("vs code "),e("span",{class:"text-indigo-400"},"||"),a(" git")])])]),e("div",{class:"w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0"},[e("div",{class:"relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300"},[e("img",{class:"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",src:de,alt:""}),e("h4",{class:"mb-4 text-sm font-medium font-heading"},"Newbie"),e("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},"digital ocean")])])])])])])],-1);function ue(y,t,_,u,k,n){const d=V("swiper-slide"),x=V("swiper");return Q(),F(x,{navigation:!0,keyboard:{enabled:!0},pagination:{dynamicBullets:!0,clickable:!0},modules:u.modules,class:"mySwiper cursor-pointer select-none mt-10"},{default:b(()=>[v(d,null,{default:b(()=>[me]),_:1}),v(d,null,{default:b(()=>[pe]),_:1}),v(d,null,{default:b(()=>[fe]),_:1})]),_:1},8,["modules"])}var we=J(ce,[["render",ue]]);export{we as default};
