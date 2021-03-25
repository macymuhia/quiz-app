<template>
  <div>
    <QuizCanvas />

    <b-button class="submit-btn" href="#">Submit</b-button>
    <div class="progressbar">
      <h5 class="progressbar-text">50% complete</h5>
      <b-progress value="50" max="100" style="background-color: #D4C2FC" class="mb-3 progressbar-bar"></b-progress>
    </div>
  </div>
</template>

<script>
import QuizCanvas from '@/components/QuizCanvas';

export default {
  name: 'QuizPage',

  components: {
    QuizCanvas
  }
}
</script>

<style lang="scss" scoped>
.submit-btn {
  background-color: #525eb5;
  color: white;
  border: none;
  margin-left: 12.5%;
}
//.progress.mb-3.progressbar-bar div.progress-bar {
//  background-color: #525eb5;
//}
//.progressbar {
//  background-color: #525eb5;
//}
.progressbar {
  width: 67.8%;
  margin: 20px auto;
  position: absolute;
  left: 21.4%;
  bottom: 0;
  &-text {
    font-size: 14px;
    color: #525eb5;
  }
  &-bar {
    //background-color: #D4C2FC;
  }
}
</style>