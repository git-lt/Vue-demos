<template lang="html">
  <div class="thread-section">
    <div class="thread-count">
      <span  v-show="unreadCount">Unread thread: {{ unreadCount }}</span>
    </div>
    <ul class="thread-list">
      <thread
        v-for="thread in threads"
        :key="thread.id"
        :thread="thread"
        :active="thread.id === currentThread.id"
      ></thread>
    </ul>
  </div>
</template>

<script>
import Thread from './Thread.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ThreadSection',
  computed: {
    ...mapGetters([
      'threads',
      'currentThread'
    ]),
    unreadCount(){
      const threads = this.threads
      return Object.keys(threads).reduce((count, id) => {
        return threads[id].lastMessage.isRead ? count : count+1
      }, 0)
    }
  },
  components: {
    Thread
  }
}
</script>

<style lang="css">
</style>
