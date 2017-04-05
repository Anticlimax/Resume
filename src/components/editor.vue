<template>
  <div id="editor">
    <div class="nav">
      <ul>
        <li v-for="item in resume.config"
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
        <li v-for="item in resume.config" v-show="item.field === selected">
          <div class="resumeField" v-for="(value,key) in resume[item.field]">
            <label> {{ key }}</label>
            <input type="text" v-model="resume[item.field][key]">
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'editor',
    data(){
      return {
        selected: 'profile',
        resume: {
          config: [
            {field: 'profile', icon: 'id'},
            {field: 'workHistory', icon: 'work'},
            {field: 'education', icon: 'book'},
            {field: 'projects', icon: 'heart'},
            {field: 'awards', icon: 'cup'},
            {field: 'contacts', icon: 'phone'}
          ],
          profile: {
            name: '',
            city: '',
            title: ''
          },
          workHistory: {},
          education: {},
          projects: {},
          awards: {},
          contacts: {}

        }
      }
    },
    method: {}
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
