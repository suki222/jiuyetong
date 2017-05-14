<template>
  <div class="view_registration">
    <div class="registration_bg" v-for="item in itemlist">
      <div class="registration_content_bg" @click="onItemClick(item)">
        <p class="registration_title">
          {{item.title}}
        </p>
        <mCellForm :list="item.list" isLink></mCellForm>
      </div>
    </div>
  </div>
</template>

<script>
  import mCellForm from './components/mCellForm.vue'
  export default {
    name: 'registration',
    data () {
      return {
        itemlist: [
          {
            title: '就业通py培训会议',
            list: [
              {label: '签到通道', value: '尚未开启,请等待!', type: 'unLock'},
              {label: '会议主题', value: '如何诚信py!'},
              {label: '组织单位', value: '蛋疼故事会'},
              {label: '会议地点', value: '狗逼东的家'},
              {label: '会议时间', value: '2017-05-01'}
            ]
          },
          {
            title: '就业通py培训会议',
            list: [
              {label: '签到通道', value: '可以签到,已开启!', type: 'Lock'},
              {label: '会议主题', value: '如何诚信py!'},
              {label: '组织单位', value: '蛋疼故事会'},
              {label: '会议地点', value: '狗逼东的家'},
              {label: '会议时间', value: '2017-05-01'}
            ]
          },
          {
            title: '就业通py培训会议',
            list: [
              {label: '签到通道', value: '会议结束,已关闭!', type: 'Close'},
              {label: '会议主题', value: '如何诚信py!'},
              {label: '组织单位', value: '蛋疼故事会'},
              {label: '会议地点', value: '狗逼东的家'},
              {label: '会议时间', value: '2017-05-01'}
            ]
          }
        ]
      }
    },
    components: {
      mCellForm
    },
    methods: {
      onItemClick (item) {
        if (item.list[0].type === 'Lock') {
          this.$router.push({path: 'RegistrationDetail'})
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/scss/pages/_registration.scss";
</style>
