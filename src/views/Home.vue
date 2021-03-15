<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <Instructions />
  </div>
</template>

<script>
// @ is an alias to /src
import Instructions from '@/components/Instructions.vue'

export default {
  name: 'Home',
  components: {
    Instructions
  }
}
</script>
