<template>
  <div class="flex flex-col items-center">
    <p class="py-3 text-base font-sans font-medium">Or sign in with social plataforms</p>

    <div class="flex justify-center">
      <a v-for="icon in icons" :key="icon" href="" class="flex justify-center items-center h-11 w-11 my-0 mx-2 border border-black rounded-full no-underline text-base duration-300 hover:border-blue-400 hover:text-blue-400">
        <i class="text-gray-50 hover:text-blue-400 fab" :class="icon"></i>
      </a>
      <!-- <a href="" class="h-11 w-11 border border-black self-center">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="h-11 w-11 border border-black self-center">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="h-11 w-11 border border-black self-center">
        <i class="fab fa-linkedin-in"></i>
      </a> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: ["fa-facebook-f", "fa-twitter", "fa-google", "fa-linkedin-in"]
    }
  }
}
</script>