<template>
	<div class="index">
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
	  		msg:'当前是首页'
	  	}
	  },
	  components:{
	  	navlist
	  }
	}
</script>
<style scoped lang="less">
	
</style>