<template>
  <form action="" class="flex flex-col justify-center items-center">
    <h2 class="mb-7 text-3xl font-sans font-bold text-gray-200">Sign in</h2>
    <Input-field />
    <Social />
  </form>
</template>

<script>
import InputField from './Input-field.vue'
import Social from './Social.vue'
export default {
components: { 'Input-field': InputField, Social}
}
</script>