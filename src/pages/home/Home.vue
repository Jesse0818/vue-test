<template>
  <div id="home">
    <my-header></my-header>	
    <my-carousel></my-carousel>
    <my-login></my-login>
    <my-register></my-register>
    <el-container> 
      <div class="main">	

          <my-cont :statistic="statistic" :childData="childList[index]"></my-cont>
          <el-pagination
            background
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="pageNum">
          </el-pagination>
      </div>
      <my-aside :childList="childList"></my-aside> 
     </el-container> 
    <my-footer></my-footer>
  </div>
</template>

<script>


  // 局部注册组件
  import Header from '../../components/Header'
  import Carousel from '../../components/Carousel'
  import Footer from '../../components/Footer'
  import Register from '../../components/Register'
  import Login from '../../components/Login'
  import Cont from '../../components/Cont'
  import Aside from '../../components/Aside'
  import qs from 'qs'
  import { getStore } from "../../utils/storage"


  export default{
     name: 'home',

     data(){
      return {
        childData:[],
        childList:[],
        statistic:'',
        pageNum:0,
        pageSize:3,
        index:0
      }
     },
     methods:{
        handleCurrentChange(val){
            this.index=val-1
        }  
     },
     mounted(){
      this.$axios.get('/api/index')
      .then(res => {
        this.pageNum=res.data['child'].length
        //this.childList=res.data['child']
        for(var i=0,len=res.data['child'].length;i<len;i+=3){
            this.childList.push(res.data['child'].slice(i,i+3))
        }
        this.statistic=res.data['statistic']
        // if(res.data['loginUser']){
        //   this.$store.commit("RECORD_USERINFO",res.data['loginUser'])
        // }
      })
      .catch(error =>{
        console.log(error)
      })
     },
     components:{
      "my-header":Header,
      "my-carousel":Carousel,
      "my-footer":Footer,
      "my-register":Register,
      "my-login":Login,
      "my-cont":Cont,
      "my-aside":Aside
    }
  }

</script>

  <style scoped> 
  #home{
    margin-left: 8%;
    margin-right: 8%;
  }
  .main{
    width: 100%;
    height: 1300px;
    background-color: #FAFAFA;
    /*border:1px solid red;*/
    border-radius: 10px;
    border: 1px solid  #DCDCDC;
  }
  .el-pagination{
    text-align: center;
  }



  </style>
