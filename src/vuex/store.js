/**
 * Created by wujw on 17/2/7.
 */
import Vue from 'vue';
import Vuex from 'vuex';
// 告诉 vue “使用” vuex
Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
const state = {
  isLoading: false
};

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // 放置我们的状态变更函数
};

const store = new Vuex.Store({
  state,
  mutations
});

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, value) {
      state.isLoading = value;
    }
  }
});
export default store;
