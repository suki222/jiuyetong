<template>
  <div class="components_cellform">
    <div class="cell-form_bd" :class="{'right':isLink}">
      <div class="cell-form_item" v-for="item in list">
        <label class="cell-form_label" v-html="item.label"></label>:
        <span class="cell-form_value"
              :class="{'cell-form_value_red':item.type=='unLock',
              'cell-form_value_green':item.type=='Lock',
              'cell-form_value_gray':item.type=='Close'}"
              v-html="item.value"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mcellform',
    props: {
      list: Array,
      unLock: Boolean,
      isLink: Boolean
    },
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/scss/components/_mcellform.scss";
</style>
