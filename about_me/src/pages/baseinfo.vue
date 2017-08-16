<template>
	<div class="baseinfo">

		<ul>
			<li class="css_model">
				<router-link :to="{path:'pro_1'}">诗和远方</router-link>
			</li>
			<li class="js_model">
				<span>js(javascript/jquery/zepto)</span>
			</li>
			<li class="html_model">
				<span>html(jade/html)</span>
			</li>
			<li class="kj_model">
				<span>框架(vue/angular/react)</span>
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
	}
</style>