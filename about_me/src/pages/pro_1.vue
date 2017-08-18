<template>
	<div class="pro_1">
		<swiper :options="swiperOption_up" ref="swiperOption_up">
		    <swiper-slide v-for="banner in banners">
		    	<img :src="banner.picname">
		    </swiper-slide>
		  </swiper>

		  <swiper :options="swiperOption_down" ref="swiperOption_down" class="swiperOption_down">
		    <swiper-slide v-for="banner in banners">
		    	<p>{{banner.cont}}</p>
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
			banners: [
				{
					picname:'../static/pic_1.jpg',
					cont:'内容一'
				},
				{
					picname:'../static/pic_2.jpg',
					cont:'内容二'
				},
				{
					picname:'../static/pic_3.jpg',
					cont:'内容三'
				}
			],
	        swiperOption_up: {
	        	slidesPerView:1.5,
	        	spaceBetween:38,
	        	slidesOffsetBefore:66,
	        	loop:true,
	        	loopAdditionalSlides:1,
	        	initialSlide:1
	        },
	        swiperOption_down: {
	        	loop:true,
	        	loopAdditionalSlides:1,
	        	initialSlide:1,
	        	effect: 'fade'
	        }
	    }
	  },
	  mounted(){
	  	const swiperOption_up = this.$refs.swiperOption_up.swiper
      	const swiperOption_down = this.$refs.swiperOption_down.swiper
      	swiperOption_up.params.control = swiperOption_down
      	swiperOption_down.params.control = swiperOption_up
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
	.swiperOption_down p{
		text-align:center;
		border:1px solid orange;
	}
	
</style>