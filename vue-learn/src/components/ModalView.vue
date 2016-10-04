<template>
  <div>
    <button href="javascript:;" class="btn-open-modal" id="showModal" @click="showModal=true">打开对话框</button>
    <c-modal :show.sync="showModal">
      <h3 slot="header">custom header</h3>
    </c-modal>
  </div>
</template>

<script>
import Vue from 'vue'
import Modal from './c-modal.vue'

export default {
  name: 'ModalView',
  components:{
    'c-modal':Modal
  },
  data(){
    return {
      showModal:false
    }
  }
}
</script>

<style>
.btn-open-modal {
  cursor: pointer;
  margin:20px;
  width: 140px;
  padding:1em 0;
  line-height: 1;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #c0ccda;
  color: #1f2d3d;
}
</style>
