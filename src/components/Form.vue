<template>
  <div class="relative w-full min-h-screen">
    <div class="absolute w-full h-full top-0 left-0 flex items-center justify-center">
        <Signin />
    </div>
  </div>
</template>

<script>
import Signin from './Signin.vue';

export default {
  components: { Signin },
};
</script>
