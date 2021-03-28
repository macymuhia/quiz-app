<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="topnav">
      <b-navbar-brand class="topnav-menu">10:43</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

      <b-navbar-brand class="topnav-menu" right href="#"> {{currentUser.username}} </b-navbar-brand>

      <b-navbar-brand class="topnav-menu" right @click.prevent="logOut">Logout</b-navbar-brand>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'TopBar',
  components: {
  },

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },

  mounted() {
    if (!this.currentUser) {
      this.$router.push('/');
    }
  },

  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  height: 77px;
  background-color: #f8f9fa;
  //padding-bottom: 30px;
  &-menu {
    color: #525eb5;
    padding-right: 50px;
  }
  &-menu:hover {
    color: #525eb5;
    padding-right: 50px;
  }
}
</style>