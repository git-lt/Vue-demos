<template lang="html">
  <div class="message-section">
    <h3 class="message-thread-heading">{{ currentThread.name }}</h3>
    <ul class="message-list" ref="list">
      <Message
        v-for="msg in sortedMessages"
        :key="msg.id"
        :message="msg"
      ></Message>
    </ul>
    <textarea class="message-composer" @keyup.enter="sendMessage"></textarea>
  </div>
</template>

<script>
import Message from './Message.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MessageSection',
  computed: {
    ...mapGetters([
      'currentThread',
      'currentMessages'
    ]),
    // 消息换时间倒序排序
    sortedMessages(){
      return this.currentMessages
        .slice()
        .sort((a,b) => a.timestamp - b.timestamp)
    }
  },
  methods: {
    // 发送一条新消息
    sendMessage(e){
      const text = e.target.value
      if(text.trim()){
        this.$store.dispatch('sendMessage', {
          text,
          thread: this.currentThread
        })
        e.target.value = ''
      }
    }
  },
  watch:{
    // 监听最后一条消息发生变化，滚动条置底
    'currentThread.lastMessage':function (){
      this.$nextTick(() => {
        const ul = this.$refs.list
        ul.scrollTop = ul.scrollHeight
      })
    }
  },
  components: { Message }
}
</script>
