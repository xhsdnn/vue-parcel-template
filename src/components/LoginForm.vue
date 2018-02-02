<template>
    <div class="login-form">
        <h2>Welcome 👏👏👏</h2>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.name" placeholder="root"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="form.pwd" placeholder="123"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button id="login" type="primary" @click="onLogin">马上登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        pwd: ""
      },
      visible: false
    };
  },
  methods: {
    onLogin() {
      if (this.form.name == "root" && this.form.pwd == "123") {
        document.removeEventListener("keydown", this.keydownFn);
        this.$router.push("/home");
      } else if (this.form.name != "root") {
        this.$message.error("请输入合法的用户名！");
      } else {
        this.$message.error("密码输入错误！");
      }
    },
    keydownFn(evt) {
      evt.keyCode == 13 && this.onLogin();
    }
  },
  mounted() {
    let _this = this;
    document.addEventListener("keydown", this.keydownFn, false);
  }
};
</script>

<style lang="less" scoped>
.login-form {
  background-color: #e9eef3;
  padding: 15px 30px;
  border-radius: 5px;
  h2 {
    text-align: center;
  }
}
</style>
