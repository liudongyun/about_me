<template>
	<div class="load">
		<dl>
			<dt>2015.09-2017.09</dt>
			<dd class="dot_line">
				<em></em>
				<span></span>
			</dd>
			<dd class="intro">
				<span>有缘网</span>
				<span>婚恋交友</span>
			</dd>
		</dl>
		<dl>
			<dt>2015.01-2015.07</dt>
			<dd class="dot_line">
				<em></em>
				<span></span>
			</dd>
			<dd class="intro">
				<span>匠心阁</span>
				<span>办公装修</span>
			</dd>
		</dl>
		<dl>
			<dt>2014.03-2014.12</dt>
			<dd class="dot_line">
				<em></em>
				<span></span>
			</dd>
			<dd class="intro">
				<span>全星时空</span>
				<span>粉丝见面会</span>
			</dd>
		</dl>
		<dl>
			<dt>2013.09-2014.02</dt>
			<dd class="dot_line">
				<em></em>
				<span></span>
			</dd>
			<dd class="intro">
				<span>北京格尚科技</span>
				<span>购物分享网站</span>
			</dd>
		</dl>
		<dl>
			<dt>2013.01-2013.07</dt>
			<dd class="dot_line">
				<em></em>
			</dd>
			<dd class="intro">
				<span>天津乐之网络</span>
				<span>网站制作</span>
			</dd>
		</dl>
	</div>
</template>
<script>
	export default {
	  name: 'load',
	  data(){
	  	return{
	  		msg:'当前是心酸历程页面'
	  	}
	  }
	}
</script>
<style scoped lang="less">
	.load{
		display:flex;
		flex-direction:column;
		justify-content:center;
		margin:2rem auto 2rem;
		dl{
			width:100%;
			display:flex;
			justify-content:flex-start;
			height:6rem;
			padding-left:2rem;
			dt{
				margin-right:2rem;
			}
		}
		.dot_line{
			display:flex;
			flex-direction:column;
			align-items:center;
			em{
				width:0.4rem;
				height:0.4rem;
				border-radius:50%;
				background-color:#353333;
				display:block;
			}
			span{
				width:0.16rem;
				height:100%;
				display:block;
				background-color:#353333;
			}
		}
		.intro{
			display:flex;
			flex-direction:column;
			align-items:center;
			margin-left:2rem;
			span{
				height:1.2rem;
				line-height:1.2rem;
			}
		}
	}
</style>