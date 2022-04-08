import{i as z,$ as F,n as B,S as Y,N as L,P as Q,a as X,b as H,_ as k,c as E,d as V,e as D,f as q}from"./nuxt-dc25c7b3.mjs";import{_ as J,x as U,j as K,s,k as v,l as g,q as W,y as u}from"./bootstrap-5e12956d.mjs";function Z(_){let{swiper:e,extendParams:M,on:b}=_;M({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let y=!1,T=!1;e.thumbs={swiper:null};function f(){const l=e.thumbs.swiper;if(!l)return;const t=l.clickedIndex,m=l.clickedSlide;if(m&&F(m).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof t=="undefined"||t===null)return;let c;if(l.params.loop?c=parseInt(F(l.clickedSlide).attr("data-swiper-slide-index"),10):c=t,e.params.loop){let o=e.activeIndex;e.slides.eq(o).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,o=e.activeIndex);const r=e.slides.eq(o).prevAll(`[data-swiper-slide-index="${c}"]`).eq(0).index(),w=e.slides.eq(o).nextAll(`[data-swiper-slide-index="${c}"]`).eq(0).index();typeof r=="undefined"?c=w:typeof w=="undefined"?c=r:w-o<o-r?c=w:c=r}e.slideTo(c)}function A(){const{thumbs:l}=e.params;if(y)return!1;y=!0;const t=e.constructor;if(l.swiper instanceof t)e.thumbs.swiper=l.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(z(l.swiper)){const m=Object.assign({},l.swiper);Object.assign(m,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(m),T=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",f),!0}function d(l){const t=e.thumbs.swiper;if(!t)return;const m=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView,c=e.params.thumbs.autoScrollOffset,o=c&&!t.params.loop;if(e.realIndex!==t.realIndex||o){let n=t.activeIndex,a,I;if(t.params.loop){t.slides.eq(n).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,n=t.activeIndex);const i=t.slides.eq(n).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),x=t.slides.eq(n).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof i=="undefined"?a=x:typeof x=="undefined"?a=i:x-n==n-i?a=t.params.slidesPerGroup>1?x:n:x-n<n-i?a=x:a=i,I=e.activeIndex>e.previousIndex?"next":"prev"}else a=e.realIndex,I=a>e.previousIndex?"next":"prev";o&&(a+=I==="next"?c:-1*c),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(a)<0&&(t.params.centeredSlides?a>n?a=a-Math.floor(m/2)+1:a=a+Math.floor(m/2)-1:a>n&&t.params.slidesPerGroup===1,t.slideTo(a,l?0:void 0))}let r=1;const w=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(r=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(r=1),r=Math.floor(r),t.slides.removeClass(w),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let n=0;n<r;n+=1)t.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+n}"]`).addClass(w);else for(let n=0;n<r;n+=1)t.slides.eq(e.realIndex+n).addClass(w)}b("beforeInit",()=>{const{thumbs:l}=e.params;!l||!l.swiper||(A(),d(!0))}),b("slideChange update resize observerUpdate",()=>{!e.thumbs.swiper||d()}),b("setTransition",(l,t)=>{const m=e.thumbs.swiper;!m||m.setTransition(t)}),b("beforeDestroy",()=>{const l=e.thumbs.swiper;!l||T&&l&&l.destroy()}),Object.assign(e.thumbs,{init:A,update:d})}function ee(_){let{swiper:e,extendParams:M,emit:b,once:y}=_;M({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function T(){const d=e.getTranslate();e.setTranslate(d),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function f(){const{touchEventsData:d,touches:l}=e;d.velocities.length===0&&d.velocities.push({position:l[e.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:l[e.isHorizontal()?"currentX":"currentY"],time:B()})}function A(d){let{currentPos:l}=d;const{params:t,$wrapperEl:m,rtlTranslate:c,snapGrid:o,touchEventsData:r}=e,n=B()-r.touchStartTime;if(l<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(l>-e.maxTranslate()){e.slides.length<o.length?e.slideTo(o.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(r.velocities.length>1){const p=r.velocities.pop(),h=r.velocities.pop(),$=p.position-h.position,R=p.time-h.time;e.velocity=$/R,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(R>150||B()-p.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,r.velocities.length=0;let a=1e3*t.freeMode.momentumRatio;const I=e.velocity*a;let i=e.translate+I;c&&(i=-i);let x=!1,j;const C=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let P;if(i<e.maxTranslate())t.freeMode.momentumBounce?(i+e.maxTranslate()<-C&&(i=e.maxTranslate()-C),j=e.maxTranslate(),x=!0,r.allowMomentumBounce=!0):i=e.maxTranslate(),t.loop&&t.centeredSlides&&(P=!0);else if(i>e.minTranslate())t.freeMode.momentumBounce?(i-e.minTranslate()>C&&(i=e.minTranslate()+C),j=e.minTranslate(),x=!0,r.allowMomentumBounce=!0):i=e.minTranslate(),t.loop&&t.centeredSlides&&(P=!0);else if(t.freeMode.sticky){let p;for(let h=0;h<o.length;h+=1)if(o[h]>-i){p=h;break}Math.abs(o[p]-i)<Math.abs(o[p-1]-i)||e.swipeDirection==="next"?i=o[p]:i=o[p-1],i=-i}if(P&&y("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(c?a=Math.abs((-i-e.translate)/e.velocity):a=Math.abs((i-e.translate)/e.velocity),t.freeMode.sticky){const p=Math.abs((c?-i:i)-e.translate),h=e.slidesSizesGrid[e.activeIndex];p<h?a=t.speed:p<2*h?a=t.speed*1.5:a=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&x?(e.updateProgress(j),e.setTransition(a),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating=!0,m.transitionEnd(()=>{!e||e.destroyed||!r.allowMomentumBounce||(b("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(j),m.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(b("_freeModeNoMomentumRelease"),e.updateProgress(i),e.setTransition(a),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,m.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(i),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&b("_freeModeNoMomentumRelease");(!t.freeMode.momentum||n>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:T,onTouchMove:f,onTouchEnd:A}})}var G="/_nuxt/assets/icons8-broadcasting.1904243b.svg",N="/_nuxt/assets/placeholder-photo.3df78d0e.png",se="/_nuxt/assets/dots.1c4c2d6c.svg",O="/_nuxt/assets/dots2.79aeb633.svg",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAYAAABqBU3hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAELSURBVHgB7ZTBrcIwDIZ/8+C969sAGKFMACMwAmcubIDYgANC3GAEmIDeQagbUDYIAxBjVJAqEaoaLHHpd6kUN84XJzF1hszQwEgPc2qHQpIrlU8TCmr4MpVAJVAJfF2gLo1l8DRKWOINiDBij//8GBPGBLRezgkNFnbHgk4YIhryVhbpvoqrj0B26WCIWkBqc4YVUk29AEwrcNIfASOGHUe1gCc7AdnMRicgZ5bMKYEN7vKHWFuBCaxgrJMpufIC2ftfwQLJ5X22mXIC2YQejPBAP1lQWk7gvvhjwoe4Gkmu3D0qEnDSqCf+F5HB4lmuBtr7GcX5QD309w8j2hnddm5gcGtetwsXil8BQ2ld5eFPsDUAAAAASUVORK5CYII=";Y.use([ee,L,Z,Q]);const te={head:{title:"Projects",meta:[{hid:"description",name:"MEVN developer | website developer",content:"I am create multiple websites and also modified existing websites."}]},components:{Swiper:X,SwiperSlide:H},data(){return{thumbsSwiper:null}},methods:{setThumbsSwiper(_){this.thumbsSwiper=_}}},ie={class:"bg-white xl:pt-20"},le={class:"container px-4 mx-auto"},ae={class:"relative flex flex-wrap -mx-4"},ne={class:"w-full px-4 lg:w-1/2"},re=s("div",{class:"text-center"},[s("h2",{class:"mb-20 font-medium xl:mt-8 xl:mb-16 text-9xl md:text-10xl xl:text-11xl font-heading"},"Projects")],-1),oe={class:"flex flex-wrap justify-center mb-20 -mx-1 xl:flex-nowrap lg:px-10"},ce=s("div",{class:"w-full px-1 mb-4 xl:w-auto xl:mb-0"},[s("div",{class:"px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300"},[s("div",{class:"flex items-center justify-center mb-8 -mt-8"},[s("h4",{class:"text-xl font-medium uppercase font-heading"},"Project TechnologieS"),s("img",{src:G,alt:""})]),s("div",{class:"flex flex-col justify-between sm:flex-row lg:mx-14 mx-5"},[s("div",null,[s("img",{class:"h-28 w-28 mx-auto mb-5",src:N,alt:""})]),s("div",{class:"flex flex-col"},[s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:k,alt:""}),u("html")]),s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:E,alt:""}),u("tailwind css")]),s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:V,alt:""}),u("java")])]),s("div",null,[s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:D,alt:""}),u("vue js")]),s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:q,alt:""}),u("nuxt js")])])]),s("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},"Founder")])],-1),me=s("div",{class:"w-full px-1 mb-4 xl:w-auto xl:mb-0"},[s("div",{class:"px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300"},[s("div",{class:"flex items-center justify-center mb-8 -mt-8"},[s("h4",{class:"text-xl font-medium uppercase font-heading"},"Project TechnologieS"),s("img",{src:G,alt:""})]),s("div",{class:"flex flex-col justify-between sm:flex-row lg:mx-14"},[s("div",null,[s("img",{class:"h-28 w-28 mx-auto mb-5",src:N,alt:""})]),s("div",{class:"flex flex-col"},[s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:k,alt:""}),u("html")]),s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:E,alt:""}),u("tailwind css")]),s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:V,alt:""}),u("java")])]),s("div",null,[s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:D,alt:""}),u("vue js")]),s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:q,alt:""}),u("nuxt js")])])]),s("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},"Founder")])],-1),ue=s("div",{class:"w-full px-1 mb-4 xl:w-auto xl:mb-0"},[s("div",{class:"px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300"},[s("div",{class:"flex items-center justify-center mb-8 -mt-8"},[s("h4",{class:"text-xl font-medium uppercase font-heading"},"Project TechnologieS"),s("img",{src:G,alt:""})]),s("div",{class:"flex flex-col justify-between sm:flex-row lg:mx-14"},[s("div",null,[s("img",{class:"h-28 w-28 mx-auto mb-5",src:N,alt:""})]),s("div",{class:"flex flex-col"},[s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:k,alt:""}),u("html")]),s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:E,alt:""}),u("tailwind css")]),s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:V,alt:""}),u("java")])]),s("div",null,[s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:D,alt:""}),u("vue js")]),s("h1",{class:"flex items-center uppercase"},[s("img",{class:"w-6 mr-2",src:q,alt:""}),u("nuxt js")])])]),s("span",{class:"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"},"Founder")])],-1),de=s("img",{class:"absolute top-0 hidden transform translate-x-1/2 xl:block left-1/2",src:se,alt:""},null,-1),pe={class:"w-full px-4 lg:w-1/2"},fe={class:"text-center lg:px-10 md:mb-16"},xe=s("h2",{class:"mt-8 font-medium text-9xl md:text-10xl xl:text-11xl font-heading"},"Details",-1),he=s("img",{class:"block mx-auto mb-12",src:O,alt:""},null,-1),be=s("div",{class:"flex items-start mb-10"},[s("img",{class:"rotate-180",src:S,alt:""}),s("div",{class:"max-w-sm mx-auto text-justify -mt-9"},[s("h1",{class:"mx-2 text-2xl font-medium text-blue-500 capitalize"},"project Ideas :-"),s("p",{class:"mx-2 text-2xl font-medium"}," Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia! ")]),s("img",{src:S,alt:""})],-1),we=s("img",{class:"block mx-auto mb-12",src:O,alt:""},null,-1),ve=s("div",{class:"flex items-start mb-10"},[s("img",{class:"rotate-180",src:S,alt:""}),s("div",{class:"max-w-sm mx-auto text-justify -mt-9"},[s("h1",{class:"mx-2 text-2xl font-medium text-blue-500 capitalize"},"project Ideas :-"),s("p",{class:"mx-2 text-2xl font-medium"}," Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia! ")]),s("img",{src:S,alt:""})],-1),ge=s("img",{class:"block mx-auto mb-12",src:O,alt:""},null,-1),_e=s("div",{class:"flex items-start mb-10"},[s("img",{class:"rotate-180",src:S,alt:""}),s("div",{class:"max-w-sm mx-auto text-justify -mt-9"},[s("h1",{class:"mx-2 text-2xl font-medium text-blue-500 capitalize"},"project Ideas :-"),s("p",{class:"mx-2 text-2xl font-medium"}," Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia! ")]),s("img",{src:S,alt:""})],-1),Ae=s("div",{class:"flex items-center justify-center -mx-4"},null,-1),ye=s("div",{class:"hidden h-1 md:block"},[s("div",{class:"w-64 mx-auto bg-gray-100 rounded-full h-1/2"},[s("div",{class:"w-1/3 h-full bg-purple-500 rounded-full"})])],-1);function Te(_,e,M,b,y,T){const f=U("swiper-slide"),A=U("swiper");return W(),K("section",ie,[s("div",le,[s("div",ae,[s("div",ne,[re,s("div",oe,[v(A,{spaceBetween:10,pagination:{dynamicBullets:!0,clickable:!0},modules:_.modules,thumbs:{swiper:y.thumbsSwiper},class:"mx-10 select-none mySwiper2"},{default:g(()=>[v(f,null,{default:g(()=>[ce]),_:1}),v(f,null,{default:g(()=>[me]),_:1}),v(f,null,{default:g(()=>[ue]),_:1})]),_:1},8,["modules","thumbs"])])]),de,s("div",pe,[s("div",fe,[xe,v(A,{onSwiper:T.setThumbsSwiper,spaceBetween:10,slidesPerView:1,freeMode:!1,watchSlidesProgress:!0,class:"mx-5 mySwiper"},{default:g(()=>[v(f,null,{default:g(()=>[he,be]),_:1}),v(f,null,{default:g(()=>[we,ve]),_:1}),v(f,null,{default:g(()=>[ge,_e]),_:1})]),_:1},8,["onSwiper"]),Ae]),ye])])])])}var Me=J(te,[["render",Te]]);export{Me as default};
