<template>
  <div id="topBar">
    <div class="text">Resume</div>
    <div v-if="logined" class="userActions">
      <span class="welcone">你好, {{ user.username }}</span>
      <a href="#" class="registry" @click.prevent="signOut">登出</a>
    </div>
    <div v-else class="userActions">
      <div class="btn-wrapper">
        <a href="#" class="login" @click.prevent="signInDialogVisible = true">登陆</a>
        <a href="#" class="registry" @click.prevent="signUpDialogVisible = true " >注册</a>
      </div>
      <myDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
        <signUpForm @success="signIn($event)"></signUpForm>
      </myDialog>
      <myDialog title="登陆" :visible="signInDialogVisible" @close="signInDialogVisible = false">
        <signInForm @success="signIn($event)"></signInForm>
      </myDialog>
    </div>

  </div>
</template>
<script>

  import myDialog from './myDialog.vue'
  import signUpForm from './signUpForm.vue'
  import signInForm from './signInForm.vue'
  import AV from '../lib/leancloud'

  export default {
    data(){
      return {
        signUpDialogVisible: false,
        signInDialogVisible: false
      }
    },
    components:{
      myDialog,
      signUpForm,
      signInForm
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
      signIn(user){
        this.signUpDialogVisible = false
        this.$store.commit('setUser',user)
      },
      signOut(){
        AV.User.logOut()
        this.$store.commit('removeUser')
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
        .welcome {
          margin-right: .5em;
        }
      }
    }
  }
</style>
