<template lang="html">
  <li
    class="thread-list-item"
    :class="{ active: active }"
    @click="switchThread({id: thread.id})"
    >
    <h5 class="thread-name">{{ thread.name }}</h5>
    <div class="thread-time">{{ thread.lastMessage.timestamp | time }}</div>
    <div class="thread-last-message">{{ thread.lastMessage.text }}</div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Thread',
  props: {
    thread: Object,
    active: Boolean
  },
  methods: {
    ...mapActions([
      'switchThread'
    ])
  },
}
</script>

<style lang="css">
</style>
