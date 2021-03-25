<template>
  <b-jumbotron class="jumbotron" header="Assessment">
    <p>
      This is a timed assessment that will be available for 40 minutes after you click the start assessment button below.
    </p>
    <p>
      The grading is automated, after you complete the assessment, wait for a minute or so and you will be re-directed to the results page.
    </p>
    <p>
    This will be based on your assessment, if you get a score about our set pass mark, you will in 2 working days receive an email scheduling you for a technical interview.
    </p>
    <p>
      You will be given the opportunity to submit once only. Ensure you have a stable internet connection before you start. You should not navigate away from the browser as this will end your session.
    </p>

    <router-link to="/assessment"><b-button class="jumbotron-btn">Start Quiz</b-button></router-link>

  </b-jumbotron>
</template>

<script>
export default {
  name: 'Instructions',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.jumbotron {
  background-color: #525eb5;
  color: white;
  width: 50%;
  margin: 150px auto;
  border-radius: 40% 5% 40% 5%;
}
.jumbotron-btn {
  margin-top: 50px;
  background-color: white;
  color: #525eb5;
}
.jumbotron-btn:hover {
  background-color: #D4C2FC;
  color: #525eb5;
}

</style>
