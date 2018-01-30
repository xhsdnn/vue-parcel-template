<template>
    <div class="home">
        <div>
            <div class="pkg">📦</div>
            <h1> This is Home's page</h1>
        </div>
        <el-button type="primary" plain @click="goLogin">📦 返回</el-button>
    </div>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.home button {
  display: block;
  margin: 0 auto;
}
.home .pkg {
  font-size: 108px;
  font-weight: 600;
  display: flex;
  justify-content: center;
}
</style>
