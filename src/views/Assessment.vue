<template>
  <div class="quiz-container">
    <div class="quiz-container_topbar">
      <TopBar />
      <hr class="quiz-container_topbar-border">
    </div>

    <div class="quiz-container_sidebar" id="side">
      <SideBar />
    </div>



    <div class="quiz-container_quizpage">
      <QuizPage />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar'
import SideBar from "@/components/SideBar";
import QuizPage from '@/components/QuizPage'

export default {
  name: 'AssessmentPage',

  components: {
    TopBar,
    SideBar,
    QuizPage
  }
}
</script>

<style lang="scss" scoped>
.quiz-container {
  display: grid;
  //background-color: #15202b;
  background-color: #f8f9fa;
  //border: 1px solid grey;
  grid-template-rows: 80px 960px;
  grid-template-columns: repeat(10, 10%);
  grid-gap: 1px;

  &_topbar {
    grid-row: 1 / 2;
    grid-column: 2 / -1;
    &-border {
      border: 3px solid #D4C2FC;
      width: 99.9%;
      margin: 0;
    }
  }
  &_sidebar#side {
    grid-row: 1 / -1;
    grid-column: 1 / 2;
    background-color: white;
  }
  &_quizpage {
    grid-row: 2;
    grid-column: 2 / -1;
  }
}
</style>