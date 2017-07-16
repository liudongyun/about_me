<template>
	<div class="index">
		{{msg}}
		<div class="lists_box">
			<ul>
				<li>content-1</li>
				<li>content-2</li>
				<li>content-3</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'index',
	  data(){
	  	return{
	  		msg:'当前是首页'
	  	}
	  }
	}
</script>
<style scoped lang="less">
	.lists_box{
		position:fixed;
		bottom:0;
		width:100%;
		ul{
			display:flex;
			justify-content:space-around;
			li{
				border:1px solid orange;
				padding:0.5rem 1rem;
			}
		}
	}
	
</style>