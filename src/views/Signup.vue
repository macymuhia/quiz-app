<template>
  <div>
    <JumbotronCanvas>
      <h3>Sign Up</h3>
      <div class="form-container">

        <b-form name="form" @submit.prevent="handleRegister">
          <div v-if="!successful">

          <b-form-group id="input-group-2" label="Username:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="user.username"
                v-validate="'required|min:3|max:20'"
                placeholder="Enter username"
                name="username"
            ></b-form-input>
              <div
                  v-if="submitted && errors.has('username')"
                  class="alert-danger"
              >{{errors.first('username')}}</div>
          </b-form-group>

          <b-form-group
              id="input-group-1"
              label="Email:"
              label-for="input-1"
          >
            <b-form-input
                id="input-1"
                v-model="user.email"
                v-validate="'required|email|max:50'"
                type="email"
                placeholder="Enter email"
                name="email"
            ></b-form-input>
            <div
                v-if="submitted && errors.has('email')"
                class="alert-danger"
            >{{errors.first('email')}}</div>
          </b-form-group>

          <b-form-group
              id="input-group-3"
              label="Password:"
              label-for="input-1"
          >
            <b-form-input
                id="input-3"
                v-model="user.password"
                v-validate="'required|min:6|max:40'"
                type="password"
                placeholder="Enter password"
                name="password"
            ></b-form-input>
            <div
                v-if="submitted && errors.has('password')"
                class="alert-danger"
            >{{errors.first('password')}}</div>
          </b-form-group>

          <b-button type="submit" class="signup-btn">Sign Up</b-button>
          </div>
        </b-form>
        <div
            v-if="message"
            class="alert"
            :class="successful ? 'alert-success' : 'alert-danger'"
        > {{ message }} </div>
      </div>
    </JumbotronCanvas>
  </div>
</template>

<script>
import JumbotronCanvas from '@/components/JumbotronCanvas';
import User from '@/models/user';

export default {
  name: 'SignupPage',

  components: {
    JumbotronCanvas
  },

  data() {
    return {
      user: new User('', '', '', ''),
      submitted: false,
      successful: false,
      message: ''
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      console.log(this.user.role);
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('auth/register', this.user).then(
              data => {
                this.message = data.message;
                this.successful = true;
                this.$router.push('/');
              },
              error => {
                this.message =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                this.successful = false;
              }
          );
        }
      });
    }
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },

  mounted() {
    if (this.loggedIn) {
      this.$router.push('/instructions');
    }
  },
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
.alert-danger {
  margin-top: 5px;
  padding: 0 10px;
  border-radius: 4px;
}
</style>