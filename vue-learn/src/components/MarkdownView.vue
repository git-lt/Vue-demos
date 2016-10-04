<template>
  <div id="editor">
    <textarea v-model="input" debounce="300"></textarea>
    <div v-html="input | marked"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name:'MarkdownView',
  data(){
    return {input:'# Hello'}
  },
  filters:{
    marked: marked
  }
}
</script>

<style scoped>
#editor {
  position: absolute;
  width: 100%;
  height:100%;
}
  textarea, #editor div {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 20px;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  code {
    color: #f66;
  }
</style>
