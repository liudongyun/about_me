import Vue from 'vue'
import Router from 'vue-router'
import $ from 'n-zepto';
import index from '@/pages/index'
import baseinfo from '@/pages/baseinfo'
import load from '@/pages/load'
import interesting from '@/pages/interesting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
    	path:'/baseinfo',
    	name:'baseinfo',
    	components:{
    		default:baseinfo
    	}
    },
    {
    	path:'/load',
    	name:'load',
    	components:{
    		default:load
    	}
    },
    {
    	path:'/interesting',
    	name:'interesting',
    	components:{
    		default:interesting
    	}
    }
  ]
})
