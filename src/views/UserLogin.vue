<template>
  <div>
    <div class="page-container">
      <NavigationBar></NavigationBar>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>登录</span>
            </div>
            <el-form :rules="rules" ref="Form" label-position="top"
            label-width="80px" :model="user">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="user.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="user.password"></el-input>
                </el-form-item>
                <el-form-item style="text-align: center;">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button >注册</el-button>
                </el-form-item>
            </el-form> 
        </el-card>
    </div>
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    async login() {
      await this.$refs.Form.validate();
      console.log('校验通过');
    },
  },
};
</script>
<style>
.page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix{
  text-align: center;
  padding: 10px;
}

.clearfix span {
  font-weight: 700px;
  font-size: 25px;
  color: #30cf79;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 480px;
}
</style>
