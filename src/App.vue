<template>
  <div id="page">
    <header>
      <TopBar></TopBar>
    </header>
    <main>
      <Editor></Editor>
      <Preview></Preview>
    </main>
  </div>
</template>
<script>

  import 'normalize.css/normalize.css'
  import './assets/reset.css'

  import Preview from './components/preview.vue'
  import Editor from './components/editor.vue'
  import TopBar from './components/topBar.vue'
  import icons from './assets/icons'
  import store from './store/index'
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'

  export default {
    name: 'app',
    store,
    components: {
      TopBar,
      Preview,
      Editor
    },
    created(){
      document.body.insertAdjacentHTML('afterbegin',icons)

      let state = localStorage.getItem('state')
      if(state){
        state = JSON.parse(state)
      }
      this.$store.commit('initState',state)
      this.$store.commit('setUser',getAVUser())
    }
  }
</script>
<style lang="scss">
  #page {
    height: 100vh;
    display: flex;
    flex-direction: column;

    background-color: #0099CC;
    font-size: 20px;
    >header {
      width: 100%;

      background-color: white;
      box-shadow: 1px 1px 3px 3px #336699;
      #topBar {
        min-width: 1024px;
        max-width: 1440px;
        height: 64px;
        margin: 0 auto;
      }
    }
    main {
      display: flex;
      flex-grow: 1;
      min-width: 1024px;
      max-width: 1440px;
      justify-content: space-around;
      padding: 16px;
      width: 100%;
      margin: 0 auto;
      #editor {
        min-width: 35%;
        height: 925px;
        margin-right: 16px;

        background-color: white;
        box-shadow: inset 1px 0px 2px 2px lightgray;


      }
      #preview {
        flex-grow: 1;
        height: 925px;

        background-color: white;
        box-shadow: inset 1px 0px 2px 2px lightgray;
        overflow: scroll;

      }
    }
    .button {
      width: 72px;
      height: 32px;
      border: none;
      cursor: pointer;
      font-size: 18px;
      background-color: #ddd;
      color: #222;
      text-decoration: none;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      &:hover {
        box-shadow: 1px 1px 1px hsla(0,0,0,.5);
      }
      &.primary{
        background-color: #02af5f;
        color: white;
      }
    }
  }


</style>
