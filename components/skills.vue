<template>
  <swiper :navigation="true" :keyboard="{ enabled: true }" :pagination="{ dynamicBullets: true, clickable: true }" :modules="modules" class="mt-10 cursor-pointer select-none mySwiper">
    <swiper-slide>
      <section class="bg-white">
        <div class="container px-4 mx-auto">
          <div class="flex flex-col justify-center">
            <!-- <div class="ml-2">
              <img class="w-5 -mb-[11px] mx-auto" src="~/assets/images/icons8/icons8-penguin.svg" alt="" />
            </div> -->
            <div class="flex items-center justify-center">
              <img class="w-6 -mr-1" src="~/assets/images/icons8/icons8-f-cute.svg " alt="" />
              <h1 class="text-2xl font-semibold text-center text-red-500">RONT END</h1>
            </div>
            <span class="text-sm text-center text-black">MEVN Learner</span>
          </div>
          <div class="flex flex-wrap items-center justify-center -mx-4 lg:-mx-24">
            <!-- html skills for slider  -->
            <div class="w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0">
              <div class="flex flex-wrap items-start -mx-4">
                <div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0">
                  <div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300">
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2" src="~/assets/images/mycollection/html-5.svg" alt="" />
                    <h4 class="mb-1 text-sm font-medium font-heading">Advance</h4>
                    <h4 class="mb-4 text-sm font-medium font-heading">Semantic Tags Structure, SEO Tags <span class="lowercase">etc</span></h4>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900/50">HTML 5</span>
                  </div>
                </div>

                <div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20">
                  <div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300">
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[38%]" src="~/assets/images/mycollection/css3.svg" alt="" />

                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[62%]" src="~/assets/images/mycollection/tailwindcss.svg" alt="" />
                    <h4 class="mb-1 text-sm font-medium font-heading">Advance</h4>
                    <h4 class="mb-4 text-sm font-medium capitalize font-heading">class, id, flex, grid, animation, transition <span class="lowercase">etc</span></h4>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900/50">CSS 3 <span class="text-[#38BDF8]">||</span> TAILWINd CSS</span>
                  </div>
                </div>
                <div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mt-20">
                  <div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300">
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2" src="~/assets/images/mycollection/javascript.svg" alt="" />
                    <h4 class="mb-1 text-sm font-medium font-heading">Basic</h4>
                    <h4 class="mb-4 text-sm font-medium capitalize font-heading">DOM, loop,validation, condition,event <span class="lowercase">etc</span></h4>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900/50">Java script</span>
                  </div>
                </div>
                <div class="w-full px-4 pb-4 md:w-1/2 lg:w-1/4">
                  <div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300">
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[40%]" src="~/assets/images/mycollection/vue.svg" alt="" />

                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[60%]" src="~/assets/images/mycollection/nuxt.svg" alt="" />

                    <h4 class="mb-1 text-sm font-medium font-heading">Basic</h4>
                    <h4 class="mb-4 text-sm font-medium capitalize font-heading">fundamentals, advanced components, transitions & animations, vuex, form validation, routing <span class="lowercase">etc</span></h4>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900/50">vue js <span class="text-[#00DC82]">||</span> nuxt js</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- skills for slider end  -->
          </div>
        </div>
      </section>
    </swiper-slide>
    <swiper-slide>
      <section class="bg-white">
        <div class="container px-4 mx-auto">
          <!-- <div class="mr-[64px]">
              <img class="w-5 -mb-[13px] mx-auto" src="~/assets/images/icons8/icons8-snoopy.svg" alt="" />
            </div> -->
          <div class="flex items-center justify-center">
            <img class="w-6 -mr-1" src="~/assets/images/icons8/icons8-b-cute.svg" alt="" />

            <h1 class="flex justify-center text-2xl font-semibold text-black">ACK END</h1>
          </div>
          <div class="flex flex-wrap items-center justify-center -mx-4">
            <!-- html skills for slider  -->
            <div class="w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0">
              <div class="flex flex-wrap items-start -mx-4">
                <div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0">
                  <div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300">
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2" src="~/assets/images/mycollection/expressjs-icon.svg" alt="" />
                    <h4 class="mb-4 text-sm font-medium capitalize font-heading">newbie</h4>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900/50">express js</span>
                  </div>
                </div>
                <div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20">
                  <div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300">
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2" src="~/assets/images/mycollection/mongodb-icon.svg" alt="" />
                    <h4 class="mb-1 text-sm font-medium capitalize font-heading">newbie</h4>
                    <h4 class="mb-4 text-sm font-medium capitalize font-heading">crud, connection</h4>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900/50">mongo db</span>
                  </div>
                </div>
                <div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 md:mb-0 lg:mt-20">
                  <div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300">
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2" src="~/assets/images/mycollection/mariadb-icon.svg" alt="" />
                    <h4 class="mb-1 text-sm font-medium capitalize font-heading">basic</h4>
                    <h4 class="mb-4 text-sm font-medium capitalize font-heading">crud oppression <span class="lowercase">etc</span></h4>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900/50">maria db</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </swiper-slide>
    <swiper-slide>
      <section class="bg-white">
        <div class="container px-4 mx-auto">
          <!-- <div class="ml-2">
              <img class="w-5 -mb-[11px] mx-auto" src="~/assets/images/icons8/icons8-penguin.svg" alt="" />
            </div> -->
          <div class="flex items-center justify-center">
            <img class="w-6 -mr-[3px]" src="~/assets/images/icons8/icons8-o-cute.svg" alt="" />

            <h1 class="text-[#00749A] text-2xl justify-center flex font-semibold">THER</h1>
          </div>
          <div class="flex flex-wrap items-center justify-center -mx-4">
            <!-- html skills for slider  -->
            <div class="w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0">
              <div class="flex flex-wrap items-start -mx-4">
                <div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0">
                  <div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300">
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2" src="~/assets/images/mycollection/wordpress-icon.svg" alt="" />
                    <h4 class="mb-1 text-sm font-medium font-heading">Advance</h4>
                    <h4 class="mb-4 text-sm font-medium capitalize font-heading">theme create & edit, plugin <span class="lowercase">etc</span></h4>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900/50">wordpress</span>
                  </div>
                </div>
                <div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20">
                  <div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300">
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2" src="~/assets/images/mycollection/canva-icon.svg" alt="" />
                    <h4 class="mb-1 text-sm font-medium font-heading">Advance</h4>
                    <h4 class="mb-4 text-sm font-medium capitalize font-heading">video banner & ads, image editor <span class="lowercase">etc</span></h4>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900/50">canva</span>
                  </div>
                </div>
                <!-- <div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 md:mb-0 lg:mt-20">
                  <div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300">
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2" src="~/assets/images/mycollection/vscode.svg" alt="">
                    <h4 class="mb-4 text-sm font-medium font-heading">Advance</h4>
                    <h4 class="mb-4 text-sm font-medium capitalize font-heading">.vscode, theme, plugin, shortcut <span class="lowercase">etc</span> </h4>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900/50 ">vs code</span>
                  </div>
                </div> -->
                <div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20">
                  <div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300">
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[35%]" src="~/assets/images/mycollection/vscode.svg" alt="" />
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[65%]" src="~/assets/images/mycollection/git.svg" alt="" />
                    <h4 class="mb-1 text-sm font-medium font-heading">Advance</h4>
                    <h4 class="mb-4 text-sm font-medium capitalize font-heading">vscode, theme, plugin, shortcut, pull, put, repo, clone <span class="lowercase">etc</span></h4>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900/50">vs code <span class="text-[#F34F29]">||</span> git</span>
                  </div>
                </div>
                <div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0">
                  <div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300">
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2" src="~/assets/images/mycollection/digitalocean-icon.svg" alt="" />
                    <h4 class="mb-4 text-sm font-medium font-heading">Newbie</h4>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900/50">digital ocean</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper";

export default {
  head: {
    title: "skills",
    meta: [
      {
        name: "MEVN developer | website developer",
        content: "I know front end and some basic of backend. html, css, javascript, vscode, vue js, nuxt js, many more.",
      },
    ],
  },

  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Keyboard],
    };
  },
};
</script>

<style>
.swiper-pagination-bullet {
  height: 15px;
  width: 15px;
  background-color: red;
}
.swiper-button-next,
.swiper-button-prev {
  color: gray;
  top: 5%;
  height: 100%;
  width: 80px;
}
.swiper-button-next:hover {
  opacity: 0.2;
  margin-bottom: 20px;
  background: #e9e9ef;
}

.swiper-button-prev:hover {
  opacity: 0.2;
  border-radius: 20px;
  background: #e9e9ef;
}
</style>
