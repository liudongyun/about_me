<template>
	<div class="index">
		<div class="top_bg">
			<span class="user_photo">
				<img src="../assets/user_photo.jpg" v-on:click="test">
			</span>
		</div>

		<!-- {{ totalPrice }}
		<button v-on:click="addOne">增加</button>
		<button v-on:click="minusOne">减少</button> -->
		
		<div class="index_base_info">
			<ul>
				<li v-for="item in my_base_info">
					<span>{{item.name}}</span>
					<span>{{item.cont}}</span>
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script>
	export default {
	  name: 'index',
	  data(){
	  	return{
	  		my_base_info:[
	  			{
	  				'name':'姓名',
	  				'cont':'刘冬芸'
	  			},
	  			{
	  				'name':'性别',
	  				'cont':'女'
	  			},
	  			{
	  				'name':'年龄',
	  				'cont':'28'
	  			},
	  			{
	  				'name':'工作年限',
	  				'cont':'4年'
	  			},
	  			{
	  				'name':'毕业学校',
	  				'cont':'天津理工大学'
	  			},
	  			{
	  				'name':'所学专业',
	  				'cont':'软件工程'
	  			},
	  			{
	  				'name':'所在城市',
	  				'cont':'北京'
	  			},
	  			{
	  				'name':'联系方式',
	  				'cont':'18614091602'
	  			},
	  			{
	  				'name':'邮箱',
	  				'cont':'liudongyun1215@sina.cn'
	  			},
	  			{
	  				'name':'性格',
	  				'cont':'双重性格'
	  			}
	  		]
	  	}
	  },
	  methods:{
	  	test:function(){
	  		console.log($('.index').length);
	  	},
	  	addOne(){
	  		this.$store.dispatch('increase',this.price);
	  	},
	  	minusOne(){
	  		this.$store.dispatch('decrement',this.price);
	  	}
	  },
	  computed:{
	  	totalPrice(){
	  		return this.$store.state.totalPrice;
	  	}
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
				margin-top:-0.5rem;
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