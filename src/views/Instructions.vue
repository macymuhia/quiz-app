<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <JumbotronCanvas />
  </div>
</template>

<script>
// @ is an alias to /src
import JumbotronCanvas from '@/components/JumbotronCanvas.vue'

export default {
  name: 'InstructionsPage',

  components: {
    JumbotronCanvas
  }
}
</script>
