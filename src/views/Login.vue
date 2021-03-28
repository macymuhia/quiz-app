<template>
  <div>
    <JumbotronCanvas>
      <h3>Login</h3>
      <div class="form-container">
        <b-form name="form" @submit.prevent="handleLogin">

          <b-form-group id="input-group-2" label="Username:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="user.username"
                v-validate="'required|min:3|max:20'"
                placeholder="Enter username"
                name="username"
            ></b-form-input>
            <div
                v-if="errors.has('username')"
                class="alert alert-danger"
                role="alert"
            >Username is required!</div>
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
                v-if="errors.has('password')"
                class="alert alert-danger"
                role="alert"
            >Password is required!</div>

          </b-form-group>

          <b-button type="submit" class="signup-btn">Login</b-button>

        </b-form>
        <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
      </div>
    </JumbotronCanvas>
  </div>
</template>

<script>
import JumbotronCanvas from '@/components/JumbotronCanvas';
import User from '../models/user';

export default {
  name: 'LoginPage',

  components: {
    JumbotronCanvas
  },

  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/instructions');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
              () => {
                this.$router.push('/instructions');
              },
              error => {
                this.loading = false;
                this.message =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
              }
          );
        }
      });
    }
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
.alert-danger {
  margin-top: 5px;
  padding: 0 10px;
  border-radius: 4px;
}
</style>