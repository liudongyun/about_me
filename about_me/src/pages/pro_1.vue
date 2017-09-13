<template>
	<div class="pro_1">
		<swiper :options="swiperOption_up" ref="swiperOption_up">
		    <swiper-slide v-for="banner in banners">
		    	<img :src="banner.picname">
		    </swiper-slide>
		</swiper>

	  	<swiper :options="swiperOption_down" ref="swiperOption_down" class="swiperOption_down">
		    <swiper-slide v-for="banner in banners">
		    	<p>{{banner.cont[0]}}</p>
		    	<p>{{banner.cont[1]}}</p>
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
					cont:['蝴蝶很美','终究蝴蝶飞不过沧海']
				},
				{
					picname:'../static/pic_2.jpg',
					cont:['风华是一指流砂','苍老是一段年华']
				},
				{
					picname:'../static/pic_3.jpg',
					cont:['人生若只如初见','当时只道是寻常']
				}
			],
	        swiperOption_up: {
	        	slidesPerView:1.5,
	        	spaceBetween:38,
	        	slidesOffsetBefore:66,
	        	loopAdditionalSlides:1,
	        	initialSlide:1,
	        	loop:true,
	        	height:360
	        },
	        swiperOption_down: {
	        	loop:true,
	        	effect:'fade',
	        	loopAdditionalSlides:1,
	        	initialSlide:1,
	        	fade:{
	        		crossFade:true
	        	},
	        	height:200
	        },
	        
	    }
	  },
	  methods:{
    	handleClick:function(){
    		this.$toast('Hello World');
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
		width:100%;
		padding-top:30px;
		background-color:#cee4e6;
	}
	.swiper-container:nth-child(2){
		height:200px;
	}
	
	.swiper-container img{
		width:100%;
		border:3px solid #fff;
	}
	.swiperOption_down p{
		text-align:center;
		height:30px;
		line-height:30px;
		font-size:16px;
		color:#fff;
		font-family:"微软雅黑"
	}
</style>