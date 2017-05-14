import Vue from 'vue';
import Router from 'vue-router';
import store from '../vuex/store.js';
import Registration from '@/pages/Registration';// 签到页面
import RegistrationDetail from '@/pages/RegistrationDetail';// 签到成功页面

Vue.use(Router);

//  next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
//  next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
//  next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
const router = new Router({
  routes: [
    {
      path: '/',
      component: Registration
    },
    {
      path: '/RegistrationDetail',
      component: RegistrationDetail
    }
  ]
});
router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', true);
  next();
  // ...
});
router.afterEach(() => {
  setTimeout(() => {
    store.commit('updateLoadingStatus', false);
  }, 100);
});
export default router;
