<template>
  <div class="login_box">
    <div class="container username_box">
      <input type="text" class="username" placeholder="请输入账号">
    </div>
    <div class="container password_box">
      <input type="text" class="password" placeholder="请输入密码">
    </div>
    <div class="login_btn">
      <router-link :to="'/fundDetail'">登录</router-link>
    </div>
  </div>
</template>
<style scoped lang="less">
  @import "../../assets/css/system/login.less";
</style>
<script>
  export default {
    mounted() {
      document.body.style.height = document.body.clientHeight + 'px';
    }
  }
</script>

