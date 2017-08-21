import Vue from 'vue'
import Router from 'vue-router'
import $ from 'n-zepto';
import index from '@/pages/index'
import baseinfo from '@/pages/baseinfo'
import load from '@/pages/load'
import interesting from '@/pages/interesting'
import pro_1 from '@/pages/pro_1'
import pro_2 from '@/pages/pro_2'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Mint from 'mint-ui'

Vue.use(Router)
Vue.use(VueAwesomeSwiper)
Vue.use(Mint)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'index',
      component:index
    },
    {
      path:'/index',
      name:'index',
      component:index
    },
    {
    	path:'/baseinfo',
    	name:'baseinfo',
    	component:baseinfo
    },
    {
    	path:'/load',
    	name:'load',
    	component:load
    },
    {
    	path:'/interesting',
    	name:'interesting',
    	component:interesting
    },
    {
      path:'/pro_1',
      name:'pro_1',
      component:pro_1
    },
    {
      path:'/pro_2',
      name:'pro_2',
      component:pro_2
    }
  ]
})
