<template>
	<div class="pro_3">
		<canvas id="main_box" width="360" height="600"></canvas>
		<h3>Sign Up</h3>
		<div class="main_box" >
			<span class="user_photo">
				<img :src="this.images">
				<input type="file" @change="onFileChange" multiple name="">
			</span>
			<ul>
				<li class="name">
					<span>用户名</span>
					<input type="text" name="name" v-model="username"> 
				</li>
				<li class="email">
					<span>邮箱</span>
					<input type="text" name="email" v-model="email">
				</li>
				<li class="password">
					<span>密码</span>
					<input type="text" name="password" v-model="password">
				</li>
				<li class="password_again">
					<span>密码确认</span>
					<input type="text" name="password_again" v-model="password_again">
				</li>
			</ul>
			<input type="button" name="" value="完成" class="finish_btn" @click="loginMethods">
			<p class="toast" v-show="this.toast_info!=''">{{this.toast_info}}</p>
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
	  		msg:'当前是项目三页面',
	  		images: require("../assets/sign_up_user_photo.jpg"),
	  		toast_info:"",
	  		username:"",
	  		email:"",
	  		password:"",
	  		password_again:""
	    }
	  },
	  methods:{
	  	onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)return; 
            this.createImage(files);
        },
        createImage(file) {
            if(typeof FileReader==='undefined'){
                alert('您的浏览器不支持图片上传，请升级您的浏览器');
                return false;
            }
            var image = new Image();         
            var vm = this;
            var leng=file.length;
            for(var i=0;i<leng;i++){
                var reader = new FileReader();
                reader.readAsDataURL(file[i]); 
                reader.onload =function(e){
                	vm.images=[];
                	vm.images.push(e.target.result); 
                	console.log(vm.images);                           
                };                 
            }                        
        },
        username_fn:function(val){
        	return /^[A-Za-z0-9_\-\u4e00-\u9fa5]{1,10}$/.test(val);
        },
        password_fn:function(val){
        	//纯数字，纯字母，纯特殊数字
        	return /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/.test(val);
        },
        email_fn:function(val){
        	return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(val);
        },
        loginMethods:function(){
        	if(!this.username_fn(this.username)){
        		this.toast_info="用户名必须由数字、26个英文字母或下划线和中文组成的字符串";
        	}else if(!this.email_fn(this.email)){
        		this.toast_info="请输入正确的邮箱";
        	}else if(!this.password_fn(this.password)){
        		this.toast_info="密码可以是纯数字，纯字母，纯特殊字符";
        	}else if(this.password_again!=this.password){
        		this.toast_info="两次输入的密码不一致";
        	}else{
        		this.toast_info="以为真的能注册呢？逗你玩儿~"
        	}
        }
	  },
      mounted(){
      	let canvas=document.getElementById('main_box');
		let ctx=canvas.getContext('2d');
		ctx.fillStyle="#fff";
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
		border:2px solid #ccc;
		overflow:hidden;
		img{
			width: 100%;
			display:block;
			height:100%;
		}
		input{
			display:block;
			height:100%;
			opacity:0;
			position:absolute;
			top:0;
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
	.toast{
		width:80%;
		border-radius:0.5rem;
		background-color:#353333;
		position:fixed;
		left:50%;
		top:20%;
		margin-left:-45%;
		z-index: 6;
		color:#fff;
		padding:5%;
		line-height:1rem;
		font-size:0.9rem;
		opacity:0.8;
		text-align:center;
	}
</style>