<template>
  <div id="editor">
    <div class="nav">
      <ul>
        <li v-for="item in resumeConfig"
            @click="selected = item.field"
            :class="{active: item.field === selected}">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ul>
    </div>
    <div class="main">
      <ul>
        <li v-for="item in resumeConfig" v-show="item.field === selected">
          <div v-if="item.type === 'array'">
            <h2>{{ item.field }}</h2>
            <div  v-for="(item1,i) in resume[item.field]">
              <div class="resumeField" v-for="(value,key) in item1">
                <label > {{ key }}</label>
                <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`,$event.target.value)">
              </div>
              <hr>
            </div>
            <button @click="addResumeSubfield(item.field)">新增</button>
          </div>
          <div class="resumeField" v-for="(value,key) in resume[item.field]" v-else="">
            <label> {{ key }}</label>
            <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`,$event.target.value)">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'editor',
    computed:{
      selected:{
        get(){
          return this.$store.state.selected
        },
        set(value){
          return this.$store.commit('switchTab',value)
        }
      },
      resume(){
          return this.$store.state.resume
      },
      resumeConfig(){
        return this.$store.state.resumeConfig
      }
    },
    methods: {
      changeResumeField(path,value){
        this.$store.commit('updateResume',{
          path,
          value
          })
      },
      addResumeSubfield(field){
        this.$store.commit('addResumeSubfield',{field})
      }
    }
  }
</script>
<style lang="scss" scoped>
  #editor {
    display: flex;
    .nav {
      width: 80px;

      background-color: black;
      ul {
        display: flex;
        width: 80px;
        flex-direction: column;
        li {
          height: 48px;
          margin-top: 16px;
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: center;
          fill: white;
          &.active {
            fill: black;
            background-color: white;
          }
        }
      }
    }
    .main {
      flex-grow: 1;
      padding: 24px;
      .resumeField{
        >label{
          display: block;
        }
        input[type=text]{
          margin: 16px 0;
          border: 1px solid #ddd;
          box-shadow: inset 0 1px 3px 0 rgba(0,0,0,.25);
          width: 100%;
          height: 40px;
          padding: 0 8px;
        }
      }
    }
    svg.icon{
      width:24px;
      height:24px;
    }

  }
</style>
