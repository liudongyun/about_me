<template>
	<div class="load">
		<dl>
			<dt>2017</dt>
			<dd>有缘网-1</dd>
		</dl>
		<dl>
			<dt>2017</dt>
			<dd>有缘网-2</dd>
		</dl>
		<dl>
			<dt>2017</dt>
			<dd>有缘网-3</dd>
		</dl>
		<dl>
			<dt>2017</dt>
			<dd>有缘网-4</dd>
		</dl>
		<dl>
			<dt>2017</dt>
			<dd>有缘网-5</dd>
		</dl>
		<navlist></navlist>
	</div>
</template>
<script>
	import navlist from '../components/navlist'
	export default {
	  name: 'load',
	  data(){
	  	return{
	  		msg:'当前是心酸历程页面'
	  	}
	  },
	  components:{
	  	navlist
	  }
	}
</script>
<style scoped lang="less">
	.load{
		dl{
			width:50%;
			display:flex;
			justify-content:flex-start;
			dt{
				margin-right:1rem;
				border:1px solid red;
			}
		}
	}
</style>