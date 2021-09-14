import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//you can replace -> const routes = [{
.........
}]  to routes//

export default new Router({
  routes: [
    {
      path:'',
      //缺省值自动转换成/Home
      redirect:'/home'  },
      {
        path:'/cart',
        component: ()=> import('../View/cart/Cart.vue')
      },
      {
        path:'/category',
        component: ()=> import('../View/category/Category.vue')
      },
      {
        path:'/profile',
        component: ()=> import('../View/profile/Profile.vue')
      },
      {
        path:'/home',
        component: ()=> import('../View/Home/Home.vue')
      },
  ],
  // mode:history
})
