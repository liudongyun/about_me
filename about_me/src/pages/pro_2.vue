<template>
	<div class="pro_2">
		<mt-button @click.native="openPicker" class="title">那年今日留下的印记(点击)</mt-button>
		<div class="cont">
			这里是内容 这里是内容 这里是内容 这里是内容 这里是内容 这里是内容 这里是内容 这里是内容 这里是内容 这里是内容 这里是内容 这里是内容 这里是内容 这里是内容 这里是内容 
		</div>
		<mt-datetime-picker
			ref="picker"
			type="date"
			v-model="pickerValue"
			:startDate="startDate"
			:endDate="endDate"
			year-format="{value} 年"
			month-format="{value} 月"
  			date-format="{value} 日"
  			@confirm="handleConfirm"
		>
		</mt-datetime-picker>
	</div>
</template>
<script> 
	import 'mint-ui/lib/style.css' 
	export default {
	  name: 'pro_2',
	  data(){
	  	return{
	  		msg:'当前是项目二页面',
	  		pickerValue:null,
	  		startDate:new Date('2016-1-1'),
	  		endDate:new Date('2017-10-1')
	    }
	  },
	  methods:{
    	openPicker(){
    		this.$refs.picker.open();
    	},
    	handleConfirm(value){
    		console.log(value.toString())
    	}
      }
	}
</script>
<style scoped lang="less">
	.title{
		margin:20px
	}
	.cont{
		font-size:14px;
		padding:20px;
		line-height:20px;
		font-family:"微软雅黑"
	}
</style>