<template>
  <div class="loginBox">
    <el-form :model="loginForm" status-icon :rules="logins" ref="loginForm" label-width="100px" class="demo-loginForm">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input type="password" v-model="loginForm.pass" autocomplete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
    data() {
      var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
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
          pass: '',
          username: ''
        },
        logins: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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

<style scoped>
.loginBox {
  width: 100%;
  height: 100%;
  background-color: #37627d;
  text-align: center;
  padding-top: 150px;
  box-sizing: border-box;
}
.el-form {
  width: 450px;
  margin: 0px auto;
  margin-left: -100px;
}
.el-input {
  width: 350px
}
.el-button {
  width: 170px
}
</style>