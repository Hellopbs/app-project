import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path: "/home",
    component: Home,
    meta:{
      show:true
    }
  }, {
    path: "/search/:keyword",
    component: Search,
    meta: { show: true },
    name:"search"
  }, {
    path: "/login",
    component: Login,
    meta: { show: false }
  }, {
    path: "/register",
    component: Register,
    meta: { show: false }
  },{
    path: "*",
    redirect: "/home"
  }]
})