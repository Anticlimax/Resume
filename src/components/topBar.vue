<template>
  <div id="topBar">
    <div class="text">Resume</div>
    <div v-if="logined" class="userActions">
      <span>你好, {{ user.username }}</span>
      <a href="#" class="registry">登出</a>
    </div>
    <div v-else class="userActions">
      <div class="btn-wrapper">
        <a href="#" class="login">登陆</a>
        <a href="#" class="registry" @click.prevent="signUpDialogVisible = true " >注册</a>
      </div>
      <myDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
        <signUpForm @success="login($event)"></signUpForm>
      </myDialog>
    </div>

  </div>
</template>
<script>

  import myDialog from './myDialog.vue'
  import signUpForm from './signUpForm.vue'

  export default {
    data(){
      return {
        signUpDialogVisible: false
      }
    },
    components:{
      myDialog,
      signUpForm
    },
    computed:{
      user(){
        return this.$store.state.user
      },
      logined(){
        return this.user.id
      }
    },
    methods:{
      login(user){
        this.signUpDialogVisible = false
        this.$store.commit('setUser',user)
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
        font-size: 18px;
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
    .actions{
      display: flex;
      .userActions{
        margin-left: 3em;
      }
    }
  }
</style>
