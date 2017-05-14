<template>
  <div class="view_registration_detail">
    <mTopNotice isCall>
      <p>这个就是个测试~</p>
    </mTopNotice>
    <div class="registration_detail_content">
      <div class="registration_detail_intro clearfix">
        <img src="../assets/img/logo.png">
        <p>尊敬的狗逼</br>您已完成签到~</p>
      </div>
      <mCellForm :list="infoList"></mCellForm>
      <div class="clearfix">
        <p class="registration_detail_signed">已签到:<span> 23</span></p>
        <p class="registration_detail_pm">签到排名: 第<span> 9 </span>名</p>
      </div>
      <div class="registration_detail_company_list clearfix" v-for="item in itemlist">
        <img src="../assets/img/logo.png">
        <div class="company_info">
          <p class="company_name">签到公司名称</p>
          <mCellForm :list="infoList"></mCellForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mTopNotice from './components/mTopNotice.vue'
  import mCellForm from './components/mCellForm.vue'
  export default {
    name: 'registrationdetail',
    data () {
      return {
        infoList: [
          {label: '签到时间', value: '2017.05.01'},
          {label: '签到人员', value: '王鑫'}
        ],
        itemlist: [
          {name: '签到公司名称'},
          {name: '签到公司名称'},
          {name: '签到公司名称'},
          {name: '签到公司名称'},
          {name: '签到公司名称'}
        ]
      }
    },
    components: {
      mTopNotice,
      mCellForm
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/scss/pages/_registrationdetail.scss";
</style>
