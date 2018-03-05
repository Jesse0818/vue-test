<template>
	<div class="content">
		<div class="avatar">
			<!-- <img src="" alt=""> -->
		</div>
		<my-card :childList="childList"></my-card>
	</div>
</template>



<script>
import Card from '../../components/Card'
import qs from 'qs'

export default{
	data(){
		return{
			childList:'',
			userInfo:''
		}
	},
	methods:{
		getUserData(){
			this.$axios.post('/api/user/profile',qs.stringify(
			{
				uid: this.$store.state.userid
			}
			))
			.then(res =>{
				this.userInfo = res.data['userInfo']
				// for(var i=0,len=res.data['childList'].length;i<len;i+=3){
				// 	this.childList.push(res.data['childList'].slice(i,i+3))
				// }
			})
		}
	},
	watch:{
		'$route': 'getUserData'
	},
	created(){
		this.getUserData()
	},
	components:{
		"my-card":Card
	}
}
</script>

<style scoped>
.content{
	height: 1000px;
	margin-left: 8%;
	margin-right: 8%;
	border: 1px solid black;
}

.avatar{
	margin: 200px auto;
	border-bottom: 1px solid black;
}


</style>