<template>
	<div class="content">
		<div class="cont-header">
			<p id="header-title">爱心帮助</p>
			<p class="border-bottom"></p>
			<div>
				<p class="p-top">{{ statistic.donations }}</p>
				<p>帮助总额</p>
			</div>
			<div>
				<p class="p-top">{{ statistic.done }}</p>
				<p>成功帮助人数</p>
			</div>
			<div>
				<p class="p-top">{{ statistic.donaters }}</p>
				<p>爱心帮助人数</p>
			</div>
		</div>
		<div class="cont-item" v-for="(child, i) in childData" :key="i">
			<div class="item-left">
				<img src="../../static/images/p1.jpg" alt="">
			</div>
			<div class="item-right">
				<p id="description">{{ child.description }}</p>
				<p id="brief">
					当被问及梦想，米米说："我想当医生，因为医生能够治病。"简单朴实的话语背后是米米对亲人的渴望。
				</p>
				<p id="bottom">
					<router-link :to="{
						name:'detail',
						params: { cid: child.id } 
					}">
						<el-button type="text">查看详情</el-button>
					</router-link>
				</p>
			</div>
		</div>
	</div>	
</template>



<script>
	export default{
		props:['childData','statistic'],
		data(){
			return{
		
			}
		},
	}	


</script>


<style scoped>
	.content{
		height: 1250px;
	}
	.cont-header{
		height: 220px;
		width: 100%;
		/*border:1px solid rgb(235, 238, 250);*/
		border-radius: 10px;
		padding: 5px;
		margin-bottom: 10px;
	}
	#header-title{
		text-align: center;
		font-size: 40px;
		font-weight: 200;
		margin-bottom: 10px;
		margin-top: 15px;
	}
	.border-bottom{
		padding: 0px;
		margin-top: 0px;
		height: 2px;
		width: 100px;
		margin-left: 44.5%;
		margin-right: 44.5%;
		border-top: 3px solid #D3D3D3;
	}
	.cont-header div{
		float: left;
		height: 100px;
		width: 33%;
	}
	.cont-header div p{
		height: 30%;
		text-align: center;
		color: #999;
		margin-top: 0px;
		padding-top: 12px;
	}

	.p-top{
		height: 50%;
		text-align: center;
		color: green !important;
		font-size: 40px;
		margin-bottom: 5px;
		margin-top: 10px;
	}

	.cont-item:hover{
		/*transform: translateY(-2px);*/
  		box-shadow: 1px 1px 40px 0.1px #D3D3D3 inset ;
	}
	.cont-item{
		height: 300px;
		width: 98%;
		border:1px solid rgb(235, 238, 250);
		border-radius: 10px;
		padding: 5px;
		margin-left:4px;
		margin-bottom: 10px;
	}	
	.item-left{
		float: left;
		width: 50%;
		height: 100%;
		border-right: 1px solid rgb(235, 238, 250);
	}
	img{
		width: 100%;
		height: 100%;
	}
	.item-right{
		float: left;
		width: 49.7%;
		height: 100%;
	}
		
	#description{
		font-size: 22px;
		color: orange;
		font-weight: 400;
		text-align: center;
	}
	#brief{
		height: 160px;
		padding-left: 10px;
		padding-right: 10px;
	}
	#bottom{
		width: 100%;
		height: 30px;	
		padding-left: 330px;
	}

</style>