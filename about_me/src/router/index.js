import Vue from 'vue'
import Router from 'vue-router'
import $ from 'n-zepto';
import index from '@/pages/index'
import baseinfo from '@/pages/baseinfo'
import load from '@/pages/load'
import interesting from '@/pages/interesting'
import pro_1 from '@/pages/pro_1'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(Router)
Vue.use(VueAwesomeSwiper)

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
    }
  ]
})
