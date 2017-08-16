<template>
	<div class="interesting">
		<dl>
			<dt class="gz"><img src="../assets/gz.jpg"></dt>
			<dd>
				喜欢古筝琴声的通透明亮与清脆悦耳，业余中的业余选手的我，与其为了一份证明而苦练《渔舟唱晚》《浏阳河》《春江花月夜》.....更喜欢现代流行曲和古乐的配合《突然好想你》《凉凉》......
			</dd>
		</dl>
		<dl>
			<dt class="ykll"><img src="../assets/ykll.jpg"></dt>
			<dd>
				边弹边唱，抑或轻快的心里小鹿乱撞，抑或忧伤的感慨
			</dd>
		</dl>
		<dl>
			<dt class="yy"><img src="../assets/yy.jpg"></dt>
			<dd>属于新进业余组种子选手,目前擅长在泳池里沉底和喝水.....</dd>
		</dl>
		<dl>
			<dt class="lx"><img src="../assets/lx.jpg"></dt>
			<dd>喜欢有目的性的做攻略，在有限的闲暇时间里去做自己喜欢的所有事情；喜欢无目的性的在一座城市里溜达，到一座山去体验"江上如此多娇"的磅礴气势</dd>
		</dl>
		<dl>
			<dt class="zx"><img src="../assets/zx.jpg"></dt>
			<dd>
				每个追星的大伙伴，小朋友，都是疯狂的，或是正式向着疯狂的方向狂奔着，那些“是电是光是心中唯一的神话”的男神女神，唱出了一代人的青春，让人沉迷......
			</dd>
		</dl>
		<dl>
			<dt class="chi"><img src="../assets/ms.jpg"></dt>
			<dd>重要的事情总是想说好几遍，爱吃的自己，不仅自己吃，还喜欢嘚瑟的发朋友圈拉仇恨......</dd>
		</dl>
	</div>
</template>
<script>
	export default {
	  name: 'index',
	  data(){
	  	return{
	  		msg:'当前是个人兴趣页面'
	  	}
	  }
	}
</script>
<style scoped lang="less">
	.interesting{
		margin:2rem auto 6rem;
		dl{
			display:flex;
			justify-content:space-between;
			margin:1rem;
		}
		dt{
			width:30%;
			height:4rem;
			overflow:hidden;
			img{
				width:100%;

			}
		}
		dd{
			width:68%;
			line-height:1.2rem;
		}
		.gz img{
			margin-top:-3rem;
		}
		.ykll img{
			margin-top:-0.8rem;
		}
		.yy img{
			margin-top:-0.5rem;
		}
		.lx img{
			margin-top:-2rem;
		}
		.chi img{
			margin-top:-0.7rem;
		}
	}
</style>