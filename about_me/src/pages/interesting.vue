<template>
	<div class="interesting">
		{{msg}}
		<navlist></navlist>
	</div>
</template>
<script>
	import navlist from '../components/navlist'
	export default {
	  name: 'index',
	  data(){
	  	return{
	  		msg:'当前是个人兴趣页面'
	  	}
	  },
	  components:{
	  	navlist
	  }
	}
</script>
<style scoped lang="less">
	
</style>