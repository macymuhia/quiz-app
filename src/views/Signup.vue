<template>
  <div>
    <JumbotronCanvas>
      <h3>Sign Up</h3>
      <div class="form-container">
        <b-form @submit="onSubmit">

          <b-form-group id="input-group-2" label="Username:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.username"
                placeholder="Enter username"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="input-group-1"
              label="Email:"
              label-for="input-1"
          >
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="input-group-3"
              label="Password:"
              label-for="input-1"
          >
            <b-form-input
                id="input-3"
                v-model="form.password"
                type="password"
                placeholder="Enter password"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="input-group-4"
              label="Confirm Password:"
              label-for="input-1"
          >
            <b-form-input
                id="input-3"
                v-model="form.password"
                type="password"
                placeholder="Enter password"
                required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" class="signup-btn">Sign Up</b-button>

        </b-form>
      </div>
    </JumbotronCanvas>
  </div>
</template>

<script>
import JumbotronCanvas from '@/components/JumbotronCanvas';

export default {
  name: 'SignupPage',

  components: {
    JumbotronCanvas
  },

  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },

  }

}
</script>

<style lang="scss" scoped>
.form-container {
  text-align: left;
  padding: 20px 30%;
}
.signup-btn {
  margin-top: 30px;
  background-color: #D4C2FC;
  border: none;
  color: #525eb5;
}
</style>