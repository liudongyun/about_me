<template>
	<div class="pro_1">
		<swiper :options="swiperOption_up" class="swiperOption_up">
		    <swiper-slide v-for="banner in banners">
		    	<img :src="banner">
		    </swiper-slide>
		  </swiper>

		  <swiper :options="swiperOption_down" class="swiperOption_down">
		    <swiper-slide v-for="banner in banners">
		    	<img :src="banner">
		    </swiper-slide>
		  </swiper>
	</div>
</template>
<script>     
	import '../assets/swiper.min.css'                 
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
	  name: 'pro_1',
	  components: {
	    swiper,
	    swiperSlide
	  },
	  data(){
	  	return{
	  		msg:'当前是项目一页面',
			banners: [ '../static/pic_1.jpg', '../static/pic_2.jpg','../static/pic_3.jpg'],
	        swiperOption_up: {
	        	slidesPerView:1.5,
	        	spaceBetween:38,
	        	slidesOffsetBefore:66,
	        	loop:true,
	        	loopAdditionalSlides:1,
	        	initialSlide:1,
	        	control: ['swiperOption_down']
	        },
	        swiperOption_down: {
	        	slidesPerView:1.5,
	        	spaceBetween:38,
	        	loop:true,
	        	loopAdditionalSlides:1,
	        	initialSlide:1,
	        	control: ['swiperOption_up']

	        }
	    }
	  },
	  mounted(){
	  	this.lunbo()
	  },
	  methods:{
	  	lunbo(){
	  		console.log('test')
	  		let swiper_up = new Swiper('.swiperOption_up',{

		  	})
		  	let swiper_down = new Swiper('.swiperOption_down',{
		  		initialSlide :2,
		  	})
	  		
		  	
		  	swiper_up.params.control = swiper_down 
	  	}
	  	
	  }
	}
</script>
<style scoped lang="less">
	.swiper-container{
		height:400px;
		width:100%;
		margin-top:30px;
	}
	.swiper-container img{
		width:100%;
	}
	
</style>