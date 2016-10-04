<template>
  <div class="demo-select2">
    <h4>与jQuery插件select2混合使用</h4>
    <br>
    <p>选择的值是：{{selected}}</p>
    <select v-select="selected">
      <option value="1">中国</option>
      <option value="2">日本</option>
      <option value="3">美国</option>
      <option value="4">英国</option>
    </select>
  </div>
</template>

<script>
import Vue from 'vue'
let $ = require('jquery')
require('select2/dist/js/select2.js')

Vue.directive('select', {
  twoWay: true,
  priority: 1000,
  params:['options'],
  bind(){
    var _this = this;
    $(this.el).select2().on('change',()=>{
      _this.set(this.el.value);
    })
  },
  update(val){
    $(this.el).val(val).trigger('change');
  },
  unbind(){
    $(this.el).off().select2('destroy');
  }
})

export default {
  name:'v-select',
  data(){
    return {
      selected:'1',
    }
  }
}
</script>

<style>
@import '/static/select2.min.css';

.demo-select2 {width: 100%; padding:100px;}
.select2 { min-width: 200px;}
</style>
