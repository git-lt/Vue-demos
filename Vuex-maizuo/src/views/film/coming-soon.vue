<template lang="html">
  <div class="film-list">
    <ul>
      <coming-soon-item v-for="film in comingSoonFilms" :film="film"></coming-soon-item>
    </ul>
  </div>
</template>

<script>
import ComingSoonItem from './coming-soon-item'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([ 'comingSoonFilms' ])
  },
  components: {
    ComingSoonItem
  },
  mounted(){
    this.$store.dispatch('fetchComingSoonLists', { page: 1, count: 10 })
  }
}
</script>
