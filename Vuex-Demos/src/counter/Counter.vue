<template lang="html">
  <div class="demo-box">
    点击次数: {{ $store.state.count }} 次, 现在是{{ evenOrOdd }}
    <br>
    <button @click="increment">加1</button>
    <button @click="decrement">减1</button>
    <button @click="incrementIfOdd">加1（如果是奇数）</button>
    <button @click="incrementAsync">加1（异步）<span v-show="$store.state.loading" class="loading"></span></button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([ 'evenOrOdd' ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<style lang="css">
.demo-box {
  margin: 30px auto;
  width: 60%;
}
.loading {
  display: inline-block;
  vertical-align: middle;
  border-width:.18em;
  border-style:solid;
  border-color:#fff rgba(0,0,0,.1) rgba(0,0,0,.2) rgba(0,0,0,.2);
  border-radius: 50%;
  width: 1em;
  height: 1em;
  animation: loading-spin .6s infinite linear;
}
button {
  padding: 5px 8px;
  line-height: 1.5;
  border-radius: 3px;
  margin: 10px 2px;
  text-align: center;
  transition: all .3s ease-in;
  background-color: #42B983;
  color:#fff;
  cursor: pointer;
  outline:none;
  border:none;
}
button:hover {
  background-color: #34986B;
}
@keyframes loading-spin{0% {transform:rotate(0degb)} 100% {transform:rotate(360deg)} }
</style>
