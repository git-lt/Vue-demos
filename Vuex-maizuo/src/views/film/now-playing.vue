<template lang="html">
  <div class="film-list">
    <ul>
      <now-playing-item v-for="film in nowPlayingFilms" :film="film"></now-playing-item>
    </ul>
  </div>
</template>

<script>
import NowPlayingItem from './now-playing-item'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([ 'nowPlayingFilms' ])
  },
  components: {
    NowPlayingItem
  },
  mounted(){
    this.$store.dispatch('fetchNowPlayingLists',{page:1, count:10})
  }
}
</script>
