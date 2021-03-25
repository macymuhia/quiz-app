<template>
    <div>
      <b-sidebar class="sidebar" id="sidebar-1" title="Sidebar" visible no-header width="10%">
        <b-img class="sidebar__logo" :src="require(`@/assets/shot.png`)" fluid ></b-img>
        <hr class="sidebar__hr">
        <div class="sidebar-menus">
          <div class="sidebar-menus_container">Question 1</div>
        </div>
      </b-sidebar>
    </div>
</template>

<script>

export default {
  name: 'SideBar',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  &__logo {
    width: 160px;
    margin-left: 5%;
  }
  &__hr {
    border: 3px solid #D4C2FC;
    width: 99.9%;
    margin: 0;
  }
  &-menus {
    background-color: #525EB5;
    padding: 6px 0;
    height: 100vh;
    color: white;
    &_container {
      background-color: #5764C1;
      height: 60px;
      padding-top: 15px;
      margin: 0 0 6px 0;
      text-align: center;
    }
  }
}
</style>