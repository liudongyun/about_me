<template>
	<div class="pro_4">
		<div id='map'></div>

		<script>
		//传入div的id值
		var map = new BMap.Map("map");

		//添加 地图类型(地图、卫星、三维) 控件
		map.addControl(new BMap.MapTypeControl());

		//添加 缩放地图的 + - 控件
		map.addControl(new BMap.NavigationControl({type: BMAP_NAVIGATION_CONTROL_ZOOM}));

		//设置中心点与缩放比例
		map.centerAndZoom(point, zoom);  //zoom范围1-19，其中19的比例尺最小
		</script>
	</div>
</template>
<script>
	
	export default {
	  name: 'pro_4',
	  components: {

	  },
	  data(){
	  	return{
	  		msg:'当前是项目四页面'
	    }
	  },
	  methods:{
	  	
	  }
	}
</script>
<style scoped lang="less">

</style>