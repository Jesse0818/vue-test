<template>
	<div class="aside">
			<p class="aside-header">爱心榜</p>
			<p class="border-bottom"></p>
             <marquee loop="-1" direction="up" height="1000px" hspace="10px">
                <p v-for="child in childList">爱心人士 帮助了 {{ child.name }}</p>
              </marquee>
              <div class="aside-footer">
              	
              </div>
    </div>

</template>


<script>
	export default{
		props:['childList'],
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	.aside-header{
		text-align: center;
		line-height: 40px;
		font-weight: 200;
		font-size: 40px;
		margin-top: 30px;
		margin-bottom: 0px;
	}
	.border-bottom{
		padding: 0px;
		margin-top: 15px;
		height: 2px;
		width: 75px;
		margin-left: 35%;
		margin-right: 35%;
		border-top: 3px solid #D3D3D3;
	}
	.aside {
		margin-left: 10px;
		color: #333;
		width: 300px;
		height: 1300px;
		text-align: center;
		background-color: #FAFAFA;
		line-height: 200px;
		border: 1px solid #DCDCDC;
		border-radius: 10px;
	}

	marquee{
		height: 650px;
	}

	marquee p {
		height: 20px;
		text-align: center;
	}

	.aside-footer{
		width: 100%;
		height: 400px;
	}


</style>