<template>
  <section class="bg-white xl:pt-20">
    <div class="container px-4 mx-auto">
      <div class="relative flex flex-wrap -mx-4">
        <div class="w-full px-4 lg:w-1/2">
          <div class="text-center">
            <h2 class="mb-20 font-medium xl:mt-8 xl:mb-16 text-9xl md:text-10xl xl:text-11xl font-heading">Projects</h2>
          </div>
          <div class="flex flex-wrap justify-center mb-20 -mx-1 xl:flex-nowrap lg:px-10">
            <swiper
              :spaceBetween="10"
              :pagination="{ dynamicBullets: true, clickable: true }"
              :modules="modules"
              :thumbs="{ swiper: thumbsSwiper }"
              class="mx-10 select-none mySwiper2">
              <swiper-slide>
                <div class="w-full px-1 mb-4 xl:w-auto xl:mb-0">
                  <div class="px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300">
                    <h4 class="mb-5 -mt-5 text-xl font-medium font-heading">Project Technologies</h4>
                    <div class="flex flex-col justify-between sm:flex-row lg:mx-14">
                      <div>
                        <img class="w-20 h-20 mx-auto mb-5" src="../assets/images/team/placeholder-photo.png" alt="" />
                      </div>
                      <!-- <div class="flex sm:space-x-20 mb-14"> -->
                      <div class="flex flex-col">
                        <h1 class="flex items-center uppercase">
                          <img class="w-6 mr-2" src="../assets/images/mycollection/html-5.svg" alt="" />html
                        </h1>
                        <h1 class="flex items-center uppercase">
                          <img class="w-6 mr-2" src="../assets/images/mycollection/tailwindcss.svg" alt="" />tailwind css
                        </h1>
                        <h1 class="flex items-center uppercase">
                          <img class="w-6 mr-2" src="../assets/images/mycollection/javascript.svg" alt="" />java
                        </h1>
                      </div>
                      <div>
                        <h1 class="flex items-center uppercase">
                          <img class="w-6 mr-2" src="../assets/images/mycollection/vue.svg" alt="" />vue js
                        </h1>
                        <h1 class="flex items-center uppercase">
                          <img class="w-6 mr-2" src="../assets/images/mycollection/nuxt.svg" alt="" />nuxt js
                        </h1>
                      </div>
                      <!-- </div> -->
                    </div>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"
                      >Founder</span
                    >
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="w-full px-1 mb-4 xl:w-auto xl:mb-0">
                  <div class="px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300">
                    <h4 class="mb-5 -mt-5 text-xl font-medium font-heading">Project Technologies</h4>
                    <div class="flex flex-col items-center justify-between sm:flex-row">
                      <img class="w-20 pb-6 rounded-md sm:w-40" src="../assets/images/team/photo4.png" alt="" />

                      <div class="flex space-x-8 sm:space-x-20">
                        <div>
                          <h1 class="flex items-center uppercase">
                            <img class="w-6 mr-2" src="../assets/images/mycollection/html-5.svg" alt="" />html
                          </h1>
                          <h1 class="flex items-center uppercase">
                            <img class="w-6 mr-2" src="../assets/images/mycollection/tailwindcss.svg" alt="" />tailwind css
                          </h1>
                          <h1 class="flex items-center uppercase">
                            <img class="w-6 mr-2" src="../assets/images/mycollection/javascript.svg" alt="" />java
                          </h1>
                        </div>
                        <div>
                          <h1 class="flex items-center uppercase">
                            <img class="w-6 mr-2" src="../assets/images/mycollection/vue.svg" alt="" />vue js
                          </h1>
                          <h1 class="flex items-center uppercase">
                            <img class="w-6 mr-2" src="../assets/images/mycollection/nuxt.svg" alt="" />nuxt js
                          </h1>
                        </div>
                      </div>
                    </div>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"
                      >Founder</span
                    >
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="w-full px-1 mb-4 xl:w-auto xl:mb-0">
                  <div class="px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300">
                    <h4 class="mb-5 -mt-5 text-xl font-medium font-heading">Project Technologies</h4>
                    <div class="flex justify-between">
                      <div class="mx-auto">
                        <img class="w-20 h-20 mx-auto mb-5" src="../assets/images/team/placeholder-photo.png" alt="" />
                      </div>
                      <div class="flex sm:space-x-20 mb-14">
                        <div>
                          <h1 class="flex items-center uppercase">
                            <img class="w-6 mr-2" src="../assets/images/mycollection/html-5.svg" alt="" />html
                          </h1>
                          <h1 class="flex items-center uppercase">
                            <img class="w-6 mr-2" src="../assets/images/mycollection/tailwindcss.svg" alt="" />tailwind css
                          </h1>
                          <h1 class="flex items-center uppercase">
                            <img class="w-6 mr-2" src="../assets/images/mycollection/javascript.svg" alt="" />java
                          </h1>
                        </div>
                        <div>
                          <h1 class="flex items-center uppercase">
                            <img class="w-6 mr-2" src="../assets/images/mycollection/vue.svg" alt="" />vue js
                          </h1>
                          <h1 class="flex items-center uppercase">
                            <img class="w-6 mr-2" src="../assets/images/mycollection/nuxt.svg" alt="" />nuxt js
                          </h1>
                        </div>
                      </div>
                    </div>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"
                      >Founder</span
                    >
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <img class="absolute top-0 hidden transform translate-x-1/2 xl:block left-1/2" src="../assets/images/team/dots.svg" alt="" />

        <div class="w-full px-4 lg:w-1/2">
          <div class="text-center lg:px-10 md:mb-16">
            <h2 class="mt-8 font-medium text-9xl md:text-10xl xl:text-11xl font-heading">Details</h2>
            <swiper
              @swiper="setThumbsSwiper"
              :spaceBetween="10"
              :slidesPerView="1"
              :freeMode="false"
              :watchSlidesProgress="true"
              class="mx-5 mySwiper">
              <swiper-slide>
                <img class="block mx-auto mb-12" src="../assets/images/team/dots2.svg" alt="" />
                <div class="flex items-start mb-10">
                  <img class="rotate-180" src="../assets/images/team/quote.png" alt="" />
                  <div class="max-w-sm mx-auto text-justify -mt-9">
                    <h1 class="mx-2 text-2xl font-medium text-blue-500 capitalize">project Ideas :-</h1>
                    <p class="mx-2 text-2xl font-medium">
                      Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non
                      ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia!
                    </p>
                  </div>
                  <img src="../assets/images/team/quote.png" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide>
                <img class="block mx-auto mb-12" src="../assets/images/team/dots2.svg" alt="" />
                <div class="flex items-start mb-10">
                  <img class="rotate-180" src="../assets/images/team/quote.png" alt="" />
                  <div class="max-w-sm mx-auto text-justify -mt-9">
                    <h1 class="mx-2 text-2xl font-medium text-blue-500 capitalize">project Ideas :-</h1>
                    <p class="mx-2 text-2xl font-medium">
                      Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non
                      ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia!
                    </p>
                  </div>
                  <img src="../assets/images/team/quote.png" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide>
                <img class="block mx-auto mb-12" src="../assets/images/team/dots2.svg" alt="" />
                <div class="flex items-start mb-10">
                  <img class="rotate-180" src="../assets/images/team/quote.png" alt="" />
                  <div class="max-w-sm mx-auto text-justify -mt-9">
                    <h1 class="mx-2 text-2xl font-medium text-blue-500 capitalize">project Ideas :-</h1>
                    <p class="mx-2 text-2xl font-medium">
                      Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non
                      ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia!
                    </p>
                  </div>
                  <img src="../assets/images/team/quote.png" alt="" />
                </div>
              </swiper-slide>
            </swiper>
            <div class="flex items-center justify-center -mx-4"></div>
          </div>
          <div class="hidden h-1 md:block">
            <div class="w-64 mx-auto bg-gray-100 rounded-full h-1/2">
              <div class="w-1/3 h-full bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./style.css";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
};
</script>

<style>
.swiper-pagination-bullet {
  height: 15px;
  width: 15px;

  background-color: red;
}
</style>
