<template>
  <div class="loading_box">
    <van-loading type="spinner" color="black" size="30px"/>
  </div>
</template>
<style scoped>
  .loading_box{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9999;
    background: #ffffff;
  }
  .van-loading{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -15px;
    margin-top: -15px;
  }
</style>
