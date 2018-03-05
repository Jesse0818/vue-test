  <template>
    <div>
      <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->
      <el-dialog title="登录" :visible.sync="loginFormVisible" center width="30%">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitLogin('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </div>
      </el-dialog>
    </div>
  </template>

  <script>
  import Bus from './bus.js'
  import qs from 'qs'


  export default {
    name: 'login',
    data() {
      var username = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入用户名'))
        }else{
          callback()
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      return {
        loginFormVisible:false,
        formLabelWidth: '120px',
        ruleForm: {
          password: '',
          username: ''
        },
        rules: {
          username: [
          { validator: username, trigger: 'blur' }
          ],
          password: [
          { validator: validatePass, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitLogin(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post("/api/user/dologin",qs.stringify(
            { 
              username:this.ruleForm.username,
              password:this.ruleForm.password
            })
            )
            .then(res=>{
              if(res.data['res']==='用户名不存在'){
                this.$message({
                  message: '用户名不存在',
                  type: 'warning'
                })
              }else if(res.data['res']==='登录成功'){
                this.$message({
                  message: '登录成功',
                  type: 'success'
                })
                this.$store.commit('RECORD_USERINFO',res.data['user'])
                this.loginFormVisible=false
              }else if(res.data['res']==='密码错误'){
                this.$message({
                  message: '密码错误',
                  type: 'error'
                })
              }
            })
            .catch(error=>{
              console.log(error)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    },
    mounted(){
      Bus.$on('in', (e) => {
       this.loginFormVisible = true;
     })
    }
  }
  </script>



  <style scoped>
  
  
  .demo-ruleForm{
    margin-right: 50px;
    text-align: center;
  }


  </style>