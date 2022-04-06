<template>
  <div :class="{ dark }" class="dark:bg-gray-400">
    <!-- <button @click="dark=!dark" class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in sticky fixed ">
    <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-elephant bg-center border-4 appearance-none cursor-pointer"/>
    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-500 cursor-pointer"></label>
</button> -->
    <skills></skills>
    <project></project>
    <home></home>
  </div>
</template>

<script>
// import { darkMode } from '~~/tailwind.config'
export default {
  name: "home",
  data() {
    return {
      dark: true,
    };
    // console.log(dark);
  },
  // methods: {
  //   darkmode(){
  //     this.dark = !this.dark
  //     console.log(this.dark);
  //     console.log(dark);
  //   }
  // },
};
</script>
