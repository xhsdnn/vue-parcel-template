<template>
  <div class="login">
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  components: { LoginForm }
};
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
}
</style>
