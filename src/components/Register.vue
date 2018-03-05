<template>
  <div>
    <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->
    <el-dialog title="注册" :visible.sync="registerFormVisible" center width="30%">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="email" v-model="ruleForm.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  import Bus from './bus.js'
  import qs from 'qs'

  export default {
    name: 'register',
    data() {
      var username = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入用户名'));
        }else{
          callback();
        }
      };
      var email=(rule,value,callback)=>{
        if(!value){
          return callback(new Erroe('请输入邮箱'));
        }else{
          callback();
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(value.length<6){
          callback(new Error('密码不得小于6位'))
        }else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        registerFormVisible:false,
        formLabelWidth: '120px',
        ruleForm: {
          password: '',
          email:'',
          checkPass: '',
          username: ''
        },
        rules: {
          username: [
            { validator: username, trigger: 'blur' }
          ],
          email: [
            { validator: email, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
     methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post("/api/user/doregister",qs.stringify( 
            { 
              username: this.ruleForm.username,
              email: this.ruleForm.email,
              password: this.ruleForm.password
            })
            )
            .then(res =>{
               if(res.data['res'] === '该用户名已存在'){
                this.$message({
                  message: '该用户名已存在',
                  type: 'warning'
                }); 
              }else if(res.data['res'] === '该邮箱已被注册'){
                this.$message({
                  message: '该邮箱已被注册',
                  type: 'warning'
                });
              }else if(res.data['res'] === '注册成功'){
                this.$message({
                  message: '注册成功',
                  type: 'success'
                })
                this.registerFormVisible = false
              }
            })
            .catch(error=>{
              console.log(error)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted(){
      Bus.$on('up', (e) => {
         this.registerFormVisible = true;
      })
    }
  };
</script>

<style scoped>
  .demo-ruleForm{
    margin-right: 50px;
  }
</style>