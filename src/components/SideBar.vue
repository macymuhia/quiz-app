<template>
    <div>
      <b-sidebar class="sidebar" id="sidebar-1" title="Sidebar" visible no-header width="12.5%">
        <b-img class="sidebar__logo" :src="require(`@/assets/shot.png`)" fluid ></b-img>
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
.side-bar {
  &__logo {
    width: 150px;
  }
}
</style>