<template>
	<div class="baseinfo">
		<router-view></router-view>
		<ul>
			<li class="css_model">
				<router-link to="pro_1">vue-awesome-swiper</router-link>
			</li>
			<li class="js_model">
				<router-link to="pro_2">vue-mint-ui</router-link>
			</li>
			<li class="html_model">
				<router-link to="pro_3">canvas/upload/vue</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
	  name: 'baseinfo',
	  data(){
	  	return{
	  		msg:'当前是功力展示页面'
	  	}
	  }
	}
</script>
<style scoped lang="less">
	.baseinfo{
		margin-bottom:6rem;
		li{
			padding:4rem 1rem;
			margin-bottom:1rem;
			margin:1rem;
			border-radius:0.2rem;
			font-size:1.2rem;
			font-family:"微软雅黑";
			text-align:center;
		}
		.css_model{
			background:url('../assets/fj_1.jpg') no-repeat top center;
			background-size:100%;
			color:#fff;
		}
		.js_model{
			background:url('../assets/fj_2.jpg') no-repeat top center;
			background-size:100%;
			color:#fff;
		}
		.html_model{
			background:url('../assets/fj_3.jpg') no-repeat top center;
			background-size:100%;
			color:#fff;
		}
		.kj_model{
			background:url('../assets/fj_4.jpg') no-repeat top center;
			background-size:100%;
			color:#fff;
		}
		a{
			color:#fff;
			text-decoration:none;
		}
	}
</style>