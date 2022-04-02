<template>
  <div>
    <section id="home" class="py-16 overflow-hidden 2xl:py-20">
      <div class="relative bg-gray-100 shadow-2xl shadow-gray-900 rounded-b-10xl">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-center py-10 mx-4">
            <div class="w-full px-4 mb-24 lg:w-1/2 lg:mb-0">
              <h1 class="max-w-xl mb-16 font-medium leading-none font-heading text-9xl md:text-10xl xl:text-11xl">
                <span>Hi, it's me <span class="underline text-blueGray-700">G</span>anpat <span class="underline text-blueGray-700">J</span>angra and I am a </span>
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
                <h1 class="text-xl capitalize">previous study</h1>
                <p class="text-lg leading-snug lg:mb-24 text-darkBlueGray-400">In 2020, I complete my engineering.</p>
                <h1 class="text-xl capitalize">currently study</h1>
                <p class="text-lg leading-snug lg:mb-24 text-darkBlueGray-400">leaning MEVN and communication skills in English language.</p>
                <h1 class="text-xl capitalize">future study</h1>
                <p class="text-lg leading-snug lg:mb-24 text-darkBlueGray-400">BCA in Australia.</p>
              </div>
            </div>

            <div class="w-full px-4 lg:w-1/2">
              <div class="relative mx-auto">
                <div class="w-64 h-64 mx-auto border-4 border-gray-700 rounded-full">
                  <!-- profile image second circule  -->
                  <div class="w-56 h-56 mx-auto border-4 border-gray-400 rounded-full">
                    <!-- profile image third circule  -->
                    <div class="relative flex items-center justify-center w-48 h-48 mx-auto border-4 rounded-full">
                      <img class="w-36 -mt-9" src="~/assets/images/mycollection/myAvatar.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-5 mx-4 lg:mx-7">
            <h1 class="capitalize text-6xl font-semibold mb-5">Contact</h1>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center">
              <div class="flex items-center w-full mb-6 xl:w-1/2">
                <img class="mr-6 h-14" src="~/assets/images/mycollection/github-icon.svg" alt="" />
                <a class="text-3xl font-medium hover:text-blueGray-500" target="blankpage" href="https://github.com/GanpatJangra"
                  >Github

                  <h1 class="text-sm">@ganpatjangra</h1>
                </a>
              </div>
              <div class="flex items-center w-full mb-6 xl:w-1/2">
                <img class="mr-6 h-14" src="~/assets/images/mycollection/linkedin-tile.svg" alt="" />
                <a class="text-3xl font-medium hover:text-blueGray-500" target="blankpage" href="https://www.linkedin.com/in/ganpat-jangra-4b3a9621a/"
                  >Linkdin
                  <h1 class="text-sm">@ganpatjangra</h1>
                </a>
              </div>
              <div class="flex items-center w-full mb-6 xl:w-1/2">
                <img class="mr-6 h-14" src="~/assets/images/mycollection/gmail-icon.svg" alt="" />
                <a class="text-3xl font-medium hover:text-blueGray-500" target="blankpage" href="#"
                  >Mail
                  <h1 class="text-sm">ganpatjangra@gmail.com</h1>
                </a>
              </div>
              <div class="flex items-center w-full mb-6 xl:w-1/2">
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
