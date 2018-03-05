<template>
  <div>
<el-row :gutter="20" v-for="(childGroup, i) in childList" :key="i">
  <el-col :span="6" v-for="(child, index) in childGroup" :key="index" :offset="index > 0 ? 3 : 0">
    <div class="grid-content bg-purple">
     <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/hamburger.png" class="image">
      <div style="padding: 14px;">
        <span>{{ child.name }}</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
    </div></el-col>
</el-row>
</div>
</template>


<script>
export default {
  props:['childList'],
  data() {
    return {
      
    }
  },
  method:{

  },
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>


