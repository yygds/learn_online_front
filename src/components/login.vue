<template>
    <div class="login">
        <el-form :model="loginForm" status-icon :rules="rules2" ref="loginForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="userName">
            <el-input type="text" v-model="loginForm.userName" auto-complete="off"></el-input>
            </el-form-item>
    
            <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
            </el-form-item>
    
            <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
  </template>
   
  <script>
  import axios from 'axios'
  export default {
      data() {
        var validateuser = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'));
          } else {
            if (this.loginForm.checkPass !== '') {
              this.$refs.loginForm.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            callback();
          }
        };
        return {
          loginForm: {
            userName: '',
            password: ''
          },
          rules2: {
            userName: [
              { validator: validateuser, trigger: 'blur' }
            ],
            password: [
              { validator: validatePass, trigger: 'blur' }
            ],
            
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // alert('submit!');
              axios.get('/api/login', {
                params: {
                  userName: this.loginForm.userName,
                  password: this.loginForm.password
                }
              })
              .then(res => {
                console.log(res)
                if(res.data.state = 1) {
                  this.$router.push({path: '/home'})
                }
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
      }
    }
  </script>
   
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  background-size: cover;
  width: 400px;
  height: 300px;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 40px;
}
</style>