<template>
  <div class="demo-notice">
    <c-notification :options.sync='currNotice' :show.sync="showNotice" ></c-notification>
    <div class="inner">
      <h4>消息提醒组件</h4>
      <div class="btn-group">
        <button v-for="item of notices" class="btn" @click="show(item)">{{item.type}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from './c-notification'

export default {
  components:{
    'c-notification': Notification
  },
  data(){
    return {
      showNotice:false,
      currNotice:{},
      notices:[
        {
          type:'default',
          content:'消息提示 - 默认',
        },
        {
          type:'success',
          absolute:true,
          autoClose:true,
          countdownBar:true,
          content:'消息提示 - 成功',
        },
        {
          type:'warning',
          content:'消息提示 - 警告',
        },
        {
          type:'error',
          content:'消息提示 - 错误',
        },
        {
          type:'info',
          content:'消息提示 - 信息',
        },
        {
          type: 'custom',
          content: '<p><span style="font-family: anana;font-size: 1.5rem">Notification</span> is extremely flexible! You can use HTML to make any kind of notification.</p>',
          countdownBar: true,
          showTime: 5000,
          autoClose: true,
          bgColor: 'rgba(6,45,146,.6)',
          barColor: '#415F77',
          textColor: '#03D6D2',
        }
    ]
    }
  },
  methods:{
    show(notice){
      this.showNotice = true;
      this.currNotice = notice;
      console.log(this.showNotice)
    }
  }
}
</script>

<style scoped>
.demo-notice{
  overflow: hidden;
}
.demo-notice .inner{
  padding-top: 100px;
  text-align: center;
}
.btn {
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
.btn:nth-child(1):hover {
  border-color: #333;
  color:#000;
}
.btn:nth-child(2):hover {
  border-color: #21E7B6;
  color:#21E7B6;
}
.btn:nth-child(3):hover {
  border-color: #fbff7c;
  color:#92253f;
}
.btn:nth-child(4):hover {
  border-color: #fc5050;
  color:#fc5050;
}
.btn:nth-child(5):hover {
  border-color: #769FCD;
  color:#769FCD;
}
.btn:nth-child(6):hover {
  border-color: #03D6D2;
  color:#03D6D2;
}
</style>
