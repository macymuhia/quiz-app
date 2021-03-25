<template>
  <div>
    <b-jumbotron class="quiz-canvas">
<!--      <p>Which is the hottest planet in the solar system?</p>-->
      <b-form-group label="Which is the hottest planet in the solar system?" v-slot="{ ariaDescribedby }">
        <b-form-radio-group
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="radios-stacked"
            stacked
        ></b-form-radio-group>
      </b-form-group>

    </b-jumbotron>
  </div>
</template>

<script>

export default {
  name: 'QuizCanvas',

  components: {
  },

  data() {
    return {
      selected: '',
      options: [
        { text: 'Mercury', value: 'first' },
        { text: 'Venus', value: 'second' },
        { text: 'Earth', value: 'third' },
        { text: 'Mars', value: 'forth' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.quiz-canvas {
  background-color: #525eb5;
  color: white;
  width: 75%;
  margin: 12px auto;
}
</style>