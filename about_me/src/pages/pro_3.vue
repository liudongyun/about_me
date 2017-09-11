<template>
	<div class="pro_3">
		<canvas id="main_box" width="360" height="600"></canvas>
		<h3>Sign Up</h3>
		<div class="main_box" >
			<span class="user_photo"><img src="../assets/sign_up_user_photo.jpg"></span>
			<ul>
				<li class="name">
					<span>姓名</span>
					<input type="text" name="name">
				</li>
				<li class="email">
					<span>邮箱</span>
					<input type="text" name="email">
				</li>
				<li class="password">
					<span>输入密码</span>
					<input type="text" name="password">
				</li>
				<li class="password_again">
					<span>再次输入</span>
					<input type="text" name="password_again">
				</li>
			</ul>
			<input type="button" name="" value="完成" class="finish_btn">
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'pro_3',
	  components: {
	  },
	  data(){
	  	return{
	  		msg:'当前是项目三页面'
	    }
	  },
      mounted(){
      	let canvas=document.getElementById('main_box');
		let ctx=canvas.getContext('2d');
		ctx.fillStyle="#fff"
		ctx.beginPath();
		// ctx.strokeStyle="red";
		ctx.moveTo(0,160);
		ctx.lineTo(320,100);
		ctx.lineTo(320,568);
		ctx.lineTo(0,568);
		ctx.closePath();
		// ctx.stroke();
		ctx.fill();

      } 
	}
</script>
<style scoped lang="less">
	.pro_3{
		background:url('../assets/sign_up_bg.jpg') no-repeat;
		background-size:100%;
	}
	h3{
		position:absolute;
		left:0;
		top:0;
		z-index:9;
		width:100%;
		height:8rem;
		line-height:8rem;
		text-align:center;
		font-size:2rem;
		color:#fff;
	}
	.user_photo{
		position: absolute;
		left:50%;
		top:-3rem;
		width:4rem;
		height:4rem;
		margin-left:-2rem;
		border-radius:50%;
		border:2px solid #fff;
		overflow:hidden;
		img{
			height: 100%;
		}
	}
	.main_box{
		position:fixed;
		bottom:3rem;
		left:0;
		height:66%;
		width:100%;
		z-index:10;
		li{
			
			margin-top:2rem;
			display:flex;
			flex-direction:column;
			text-align:center;
			span{
				font-size:0.9rem;
				font-family:"微软雅黑";
				color:#999;
				height:1.5rem;
				line-height:1.5rem;
			}
			input{
				border:none;
				border-bottom:1px solid #ccc;
				margin:0 1rem;
				outline:none;
				text-align:center;
				height:1rem;
				line-height:1rem;
			}
		}
		.finish_btn{
			width:80%;
			height:2rem;
			line-height:2rem;
			margin:0 auto;
			background:#353333;
			color:#fff;
			border:none;
			display:block;
			margin-top:1rem;
		}
	}
	#main_box{
		position:relative;
		z-index:8
	}
</style>