<template>
  <div id="topBar">
    <div class="text">Resume</div>
    <div class="btn-wrapper">
      <a href="#" class="login">登陆</a>
      <a href="#" class="registry">注册</a>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>
<style scoped lang="scss">
  #topBar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 24px;
    font-family: "Microsoft YaHei UI";
    .btn-wrapper {
      display: flex;
      .login {
        display: block;
        font-size: 20px;
        color: white;
        background-color: #33CC99;
        padding: 6px 16px;
        text-decoration: none;
        margin-right: 16px;
        transition: all .3s;
        &:hover {
          background-color: #3399CC;
        }
      }
      .registry {
        display: block;
        font-size: 20px;
        color: black ;
        background-color: #99CCCC;
        padding: 6px 16px;
        text-decoration: none;
        transition: all .3s;
        &:hover {
          background-color: #cccccc;
        }
      }
    }
  }
</style>
