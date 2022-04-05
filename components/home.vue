<template>
  <div>
    <section id="home" class=" py-16 overflow-hidden 2xl:py-20">
      <div class="relative  shadow-2xl shadow-gray-900 rounded-b-10xl">
        <div class="container px-4 mx-auto relative">
          <!-- moon bg   -->
          <div class="absolute bg-moon hidden lg:block w-32 h-32  bg-no-repeat top-5 right-2 lg:right-7 lg:top-7"></div>
          <!-- moon bg   -->
          <div class="flex flex-wrap items-center py-10 mx-4 xl:bg-right " >
            <div class="w-full px-4 mb-24 lg:w-1/2 lg:mb-0 relative">

      <div class="absolute animate-slide-tl h-44 w-full bg-elephant bg-no-repeat bg-left-top bg-[length:400px_150px] "></div>


              <h1  class="relative max-w-xl mb-16 font-medium leading-none font-heading text-9xl md:text-10xl xl:text-11xl">
               
                <span>Hi, it's me <h2 class="animate-tracking-in-expand"><span class="underline text-blueGray-700">G</span>anpat <span class="underline text-blueGray-700">J</span>angra</h2> and I am a </span>
                <span class="relative inline-block">
                  <span class="absolute inset-0 xl:-left-8 xl:-right-8">
                    <img class="absolute inset-0 w-full max-w-non" src="~/assets/images/mycollection/lines-blue1.svg" alt="" /><img
                      class="absolute inset-0 w-full mt-1 lg:mt-2 xl:ml-4 max-w-none"
                      src="~/assets/images/mycollection/lines-blue2.svg"
                      alt="" />
                  </span>
                  <!-- full stack -->
                  <span class="relative z-10"> web dev.</span>
                </span>
              </h1>




              <div class="space-y-2">
                <div class="flex space-x-2 items-center">
                  <img class="w-10" src="~/assets/images/mycollection/Diploma.svg" alt="" />
                  <h1 class="text-xl capitalize">previous study</h1>
                </div>
                <p class="text-lg leading-snug lg:mb-24 text-darkBlueGray-400">In 2020, I complete my engineering.</p>
                <div class="flex space-x-2 items-center">
                  <img class="w-10" src="~/assets/images/mycollection/Light-Bulb.svg" alt="" />
                  <h1 class="text-xl capitalize">currently study</h1>
                </div>
                <p class="text-lg leading-snug lg:mb-24 text-darkBlueGray-400">leaning MEVN and communication skills in English language.</p>
                <div class="flex space-x-2 items-center">
                  <img class="w-10" src="~/assets/images/mycollection/Plane.svg" alt="" />

                  <h1 class="text-xl capitalize">future study</h1>
                </div>
                <p class="text-lg leading-snug lg:mb-24 text-darkBlueGray-400">BCA in Australia.</p>
              </div>
            </div>

            <div class="w-full px-4 lg:w-1/2 relative">
             <div class="hidden lg:block h-96 w-96 animate-slide-left absolute  bg-tiger bg-no-repeat bg-center"></div>
              <div class="relative mx-auto ">
                <div class="w-64 h-64 mx-auto border-4 border-gray-700 rounded-full">
                  <!-- profile image second circule  -->
                  <div class="w-56 h-56 mx-auto border-4 border-gray-400 rounded-full">
                    <!-- profile image third circule  -->
                    <div class="relative flex items-center justify-center w-48 h-48 mx-auto border-4 rounded-full backdrop-blur-sm">
                      <img class="w-36 -mt-9 " src="~/assets/images/mycollection/myAvatar.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-5 mx-4 z-10 lg:mx-7 relative">
            <h1 class="capitalize text-6xl font-semibold mb-5">Contact</h1>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center relative">
<!-- bg image  -->
            <div class="absolute h-80 w-44 bg-animal bg-no-repeat bg-[length:200px] bg-center animate-slide-tr"></div>
<!-- bg image  -->

              <div class="flex items-center w-full mb-6 xl:w-1/2 relative">
                <img class="mr-6 h-14" src="~/assets/images/mycollection/github-icon.svg" alt="" />
                <a class="text-3xl font-medium hover:text-blueGray-500" target="blankpage" href="https://github.com/GanpatJangra"
                  >Github

                  <h1 class="text-sm">@ganpatjangra</h1>
                </a>
              </div>
              <div class="flex items-center w-full mb-6 xl:w-1/2 relative">
                <img class="mr-6 h-14" src="~/assets/images/mycollection/linkedin-tile.svg" alt="" />
                <a class="text-3xl font-medium hover:text-blueGray-500" target="blankpage" href="https://www.linkedin.com/in/ganpat-jangra-4b3a9621a/"
                  >Linkdin
                  <h1 class="text-sm">@ganpatjangra</h1>
                </a>
              </div>
              <div class="flex items-center w-full mb-6 xl:w-1/2 relative">
                <img class="mr-6 h-14" src="~/assets/images/mycollection/gmail-icon.svg" alt="" />
                <a class="text-3xl font-medium hover:text-blueGray-500" target="blankpage" href="#"
                  >Mail
                  <h1 class="text-sm">ganpatjangra@gmail.com</h1>
                </a>
              </div>
              <div class="flex items-center w-full mb-6 xl:w-1/2 relative">
                <img class="mr-6 h-14" src="~/assets/images/mycollection/icon1.svg" alt="" />
                <a class="text-3xl font-medium hover:text-blueGray-500" target="blankpage" href="#"
                  >Call
                  <h1 class="text-sm">+91 8708423836</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "home",
  head: {
    title: "Home",
    meta: [
      {
        hid: "description",
        name: "MEVN developer | website developer",
        content: "I am create multiple websites and also modified existing websites.",
      },
    ],
  },
};
</script>
