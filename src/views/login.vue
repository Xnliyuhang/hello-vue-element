<template>
  <div class="login-back">
    <el-form ref="loginForm" :model="loginfo" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">登&nbsp;&nbsp;&nbsp;&nbsp;录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="邮箱/手机号" v-model="loginfo.username" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="密码" v-model="loginfo.password" />
      </el-form-item>

<!--      <el-form-item>-->
<!--            <el-checkbox class="checkbox">记住账号</el-checkbox>-->
<!--      </el-form-item>-->

      <el-form-item>
        <el-button type="primary" class="submit-btn" v-on:click="onSubmit('loginForm')">登录</el-button>
      </el-form-item>

      <el-row class="tips">
        <a href="/" class="link">
          立即注册
        </a>
        <span class="line">|</span>
        <a href="/" class="link">
          忘记密码
        </a>
      </el-row>
    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return{

            loginfo:{
              username: '',
              password: ''
            },

            // 表单验证，需要在 el-form-item 元素中增加 prop 属性
            rules: {
              username: [
                {required: true, message: '账号不可为空', trigger: 'blur'}
              ],
              password: [
                {required: true, message: '密码不可为空', trigger: 'blur'}
              ]
            },

            // 对话框显示和隐藏
            dialogVisible: false
          }
        },
      methods: {
        onSubmit(formName) {
          // 为表单绑定验证功能
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
              this.$router.push("/main");
            } else {
              this.dialogVisible = true;
              return false;
            }
          });
        }
      }
    }

</script>

<style scoped>
  @import '../assets/scss/login.scss';
</style>


