<template lang="html">
  <div class="img-responsive" :style="{'background-image':'url('+placeholder+')'}" style="background-size:100%;">
    <img style="width:100%; transition:all 1.2s ease"
     :src="src"
     @load="loaded"
     :style="{'opacity':finish?1:0}"
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      finish: false
    }
  },
  computed: {},
  methods: {
    loaded(){
      const self = this
      setTimeout(function(){
        self.finish = true
      }, 100)
    }
  },
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder:{
      type: String
    }
  }
}
</script>

<style lang="css">
</style>
