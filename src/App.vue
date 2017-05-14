<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "./assets/scss/_common.scss";
  #app {
    min-height: 100%;
  }
  body{
    background: rgb(226,227,228);
  }
</style>
