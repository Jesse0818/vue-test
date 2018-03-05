
<template>
  <el-header class="container">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" id="logo"> 
        <router-link to="/" ><img src="../assets/flower.png" alt=""></router-link> 
      </el-menu-item>
      <el-menu-item index="2">处理中心</el-menu-item>
      <el-submenu index="3">
        <template slot="title">我的工作台</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项1</el-menu-item>
          <el-menu-item index="3-4-2">选项2</el-menu-item>
          <el-menu-item index="3-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4" @click="signIn" v-show="!islogin">登录</el-menu-item>
      <el-menu-item id="reg" index="5" @click="signUp" v-show="!islogin">注册</el-menu-item>
      <el-menu-item index="6" v-show="islogin">
        <el-popover
          ref="popover4"
          placement="bottom"
          width="150"
          trigger="hover">
          <div class="per">
              <router-link to="/user"><p>个人中心</p></router-link>
          </div>
          <div class="per">
              <p @click="logout" id="out">退出登录</p>
          </div>
        </el-popover>
        <el-button v-popover:popover4>{{ username }}</el-button>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>


<script>

import Bus from './bus.js'
import { mapState } from 'vuex'
import { getStore } from '../utils/storage'

export default {
  name: 'myheader',
  data() {
    return {
      activeIndex: '1',
      input: '',
    }
  },
  computed: mapState({
      islogin: function(state){
        if(state.username == ''){
          this.$store.commit('FLASH_USER')
        }
        return state.islogin
      },
      username: state => state.username
  }),
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    signIn(){
      Bus.$emit('in','true')
    },
    signUp(){
      Bus.$emit('up','true')
    },
    logout(){
      this.$axios.get('/api/user/logout')
      .then( res =>{
        this.$store.commit("LOG_OUT")
      })
      .then( res =>{
        this.$message({
          message: '已退出登录',
          type: 'success'
        })
      })
    }
  }
}

</script>

<style scoped>

.el-header{
  margin-bottom: 20px;
}

.container{
/*  margin-left: 8%;
  margin-right: 8%;*/
}

#logo{
  float: left;
  margin-right: 59%;
}

.per{
  font-size: 18px;
  text-align: center;
  margin-top: 4px;
  margin-left: 20px;
  margin-right: 20px;
  height: 30px;
}

#out:hover{
  color: black;
  cursor: pointer;
}

.el-menu--horizontal {
    border-bottom: 0px !important;
}

#logo.is-active {
    border-bottom: 0px !important;
}

a:link {
  color: grey;
  text-decoration: none; 
} 
a:visited { 
  color:grey;
  text-decoration: none; 
} 
a:hover { 
  color: black;
  text-decoration: none; 
} 


</style>
