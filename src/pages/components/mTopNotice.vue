<template>
  <div class="components_topnotice">
    <div :class="{'top-notice_img':isCall}"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'mcellform',
    props: {
      isCall: Boolean
    },
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/scss/components/_mtopnotice.scss";
</style>
