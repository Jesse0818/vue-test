<template>
	<div>
		<p>{{ childInfo.name }}</p>

	</div>

</template>



<script>
	import qs from 'qs'

	export default{
		data(){
			return {
				childInfo:''
			}
		},
		methods:{
			getChildData(){
				this.$axios.post('/api/child',qs.stringify(
				{
					cid: this.$route.params.cid
				}
				))
				.then(res =>{
					this.childInfo=res.data['childInfo']	
				})

			}
		},
		watch: {
      		'$route': 'getChildData'
    	},
    	created(){
    		this.getChildData()
    	}
	}
</script>


<style scoped>
	

</style>