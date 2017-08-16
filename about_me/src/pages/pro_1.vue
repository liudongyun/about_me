<template>
	<div class="pro_1">
		<swiper :options="swiperOption"  ref="mySwiper" class="swiper-box">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="banner in banners" class="swiper-item">
            	<img :src="banner">
            </swiper-slide>   
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>
	</div>
</template>
<script>                      
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
	  name: 'pro_1',
	  components:{
	  	swiper,
	  	swiperSlide
	  },
	  data(){
	  	return{
	  		msg:'当前是项目一页面',
			banners: [ '../static/pic_1.jpg', '../static/pic_2.jpg'],
			components: {
			    swiper,
			    swiperSlide
			},
	        swiperOption: {  
	            //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
	            notNextTick: false,  
	            pagination: '.swiper-pagination',  
	            slidesPerView: 'auto',  
	            centeredSlides: true,  
	            paginationClickable: true,  
	            spaceBetween:0,  
	            direction : 'horizontal',
	            onSlideChangeEnd: swiper => {  
	                //这个位置放swiper的回调方法  
	                this.page = swiper.realIndex+1;  
	                this.index = swiper.realIndex;  
	            }  
            },
            computed:{
            	swiper(){
            		return this.$refs.mySwiper.swiper;
            	}
            }
	  	}
	  }
	}
</script>
<style scoped lang="less">
	
	.pro_1 .swiper-box>div{
		display:flex;
	}
</style>