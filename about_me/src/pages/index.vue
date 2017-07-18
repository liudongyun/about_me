<template>
	<div class="index">
		<div class="top_bg">
			<span class="user_photo">
				<img src="../assets/user_photo.jpg">
			</span>
		</div>
		<div class="index_base_info">
			<ul>
				<li>
					<span>姓名：</span>
					<span>刘冬芸</span>
				</li>
				<li>
					<span>性别：</span>
					<span>女</span>
				</li>
				<li>
					<span>年龄：</span>
					<span>28</span>
				</li>
				<li>
					<span>工作年限：</span>
					<span>4年</span>
				</li>
				<li>
					<span>毕业学校：</span>
					<span>天津理工大学</span>
				</li>
				<li>
					<span>所学专业:</span>
					<span>软件工程</span>
				</li>
				<li>
					<span>所在城市：</span>
					<span>北京</span>
				</li>
				<li>
					<span>联系方式：</span>
					<span>18614091602</span>
				</li>
				<li>
					<span>邮箱：</span>
					<span>liudongyun1215@sina.cn</span>
				</li>
			</ul>
		</div>

		<navlist></navlist>
	</div>
</template>
<script>
	import navlist from '../components/navlist'
	
	export default {
	  name: 'index',
	  data(){
	  	return{
	  		msg:'当前是首页(即基础信息页)'
	  	}
	  },
	  components:{
	  	navlist
	  }
	}
</script>
<style scoped lang="less">
	.top_bg{
		height:8rem;
		background:url('../assets/index_top_bg.jpg') no-repeat top center;
		background-size:100%;
		position:relative;
		.user_photo{
			width:4rem;
			height:4rem;
			border-radius:50%;
			border:0.2rem solid #fff;
			display:inline-block;
			position:absolute;
			bottom:-2rem;
			left:50%;
			margin-left:-2rem;
			background-color:#fff;
			overflow:hidden;
			img{
				width:100%;
				margin-top:-0.5rem
			}
		}
	}
	.index_base_info{
		margin:3rem auto 5rem;
		ul{
			padding:0 1rem;
			li{
				border:1px solid #afaaaa;
				background-color:#f3f2f2;
				margin:0.8rem 0;
				padding:0 0.5rem;
				border-radius:0.2rem;
				height:2rem;
				line-height:2rem;
			}
		}
	}
</style>