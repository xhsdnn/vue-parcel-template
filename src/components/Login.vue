<template>
    <div class="login">
        <div class="parcel-img">
            <img src="../../static/images/parcel.png" alt="">
        </div>
        <el-button type="primary" plain @click="goHome">📦 跳转</el-button>
    </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.login img {
  width: 400px;
}
.login button {
  display: block;
  margin: 0 auto;
}
</style>
