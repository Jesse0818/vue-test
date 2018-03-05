
<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in images" :key="item">
       <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>

  export default{
    data(){
      return{
        images:["/static/images/p1.jpg","/static/images/p2.jpg","/static/images/p3.jpg","/static/images/p4.jpg"]
      }
    }
    
  }


</script>

<style>
  
  .el-carousel__container{
    height: 550px;
  }
  .el-carousel{
    border: 1px solid   #DCDCDC;
    border-radius: 10px;
    padding-top: 0px;
    background-color: #FAFAFA;
    margin-bottom: 10px;
  }

  .el-carousel__item img{
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
