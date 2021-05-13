<template>
  <div class="mb-3 md:w-full flex flex-col justify-center items-center">
    <div class="max-w-380 w-full h-55 py-0 px-5 my-2 grid grid-cols-input align-center bg-gray rounded-full">
      <UserIcon class="w-5 h-55 text-center leading-55 text-gray-100 text-base"/>
      <input class="bg-transparent leading-4 text-gray-50 text-sm font-bold" type="text" placeholder="Username" />
    </div>
     <div class="max-w-380 w-full h-55 py-0 px-5 my-2 grid grid-cols-input align-center bg-gray rounded-full">
      <LockClosedIcon class="w-5 h-55 text-center leading-55 text-gray-100 text-base"/>
      <input class="bg-transparent leading-4 text-gray-50 text-sm font-bold" type="password" placeholder="Password" />
    </div>
    <input type="submit" value="LOGIN" class="w-36 mt-3 py-2 px-1.5 bg-green-300 hover:bg-green-400 focus:bg-green-600 cursor-pointer rounded-full font-sans font-semibold text-white" />
  </div>
</template>

<script>
import { UserIcon, LockClosedIcon } from '@heroicons/vue/solid'

export default {
  components: { UserIcon, LockClosedIcon },
}
</script>
