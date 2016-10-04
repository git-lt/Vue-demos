<template>
  <div class="notice"
  v-if="show"
  transition="notice-slide"
  :style="setStyle"
  >
    <div class="notice-close"
      @click="close()"
      v-if="!options.autoClose"
    ></div>
    <div class="notice-content">
      {{{ options.content }}}
    </div>
    <div class="notice-countdown"
      v-if="show && options.autoClose && options.countdownBar"
      :style="setTime"
      :class="barControl"
    ></div>
  </div>
</template>

<script>
const COLORS = {
  'default':['#333','#fff'],
  'success':['#21E7B6','#fff'],
  'error':['#fc5050','#fff'],
  'info':['#769FCD','#fff'],
  'warning':['#fbff7c','#92253f'],
  'custom':['rgba(6,45,146,.6)','#03D6D2']
}
  export default {
    name:'c-notification',
    data(){
      return {
        timers:[],
        barControl:''
       }
    },
    props:{
      options:{
        type:Object,
        default:()=>{return {} }
      },
      show:{
        type: Boolean,
        default: false
      }
    },
    computed:{
      setStyle(){
        return {
          position:this.options.absolute ? 'absolute' : 'fixed',
          color: this.options.textColor || COLORS[this.options.type][1] || '#fff',
          background: this.options.bgColor|| COLORS[this.options.type][0] || '#333'
        }
      },
      setTime(){
        return {
          transition:`all ${(this.options.showTime / 1000) || 3}s linear`,
          background: this.options.barColor ||  COLORS[this.options.type][1] || '#fff'
        }
      }
    },
    methods:{
      autoClose(){
        if(!this.options.autoClose) return;

        if(this.options.countdownBar){
          setTimeout(()=>{
            this.barControl = 'notice-countdown-leave';
          },10)
        }

        const t = setTimeout(()=>{
          this.close()
        }, this.options.showTime || 3000)

        this.timers.push(t);
      },
      close(){
        this.show = false;
        this.options = {};
      }
    },
    watch:{
      // 当前配置变化后，重置数据，清除定时器，执行自动关闭的逻辑
      options(){
        this.barControl = '';
        this.timers.forEach(v => window.clearTimeout(v));
        this.timers.length = 0;
        this.autoClose();
      }
    }
  }
</script>

<style lang="stylus" scoped>
.notice
  width: 100%
  line-height 2
  top 0
  left 0
  bottom auto
  z-index 9999
  background #333
  color #fff
  overflow hidden

.notice-close
  display inline-block
  position absolute
  cursor: pointer
  width: 24px;
  height: 24px;
  top .8em
  right .5em
  &:before,&:after
    position absolute
    display block
    width 8px
    height 8px
    top 2px
    content ''
  &:before
    border-right:2px solid
    border-bottom 2px solid
    right: 11px
    transform-origin right bottom
    transform rotate(-45deg)
  &:after
    border-left:2px solid
    border-bottom 2px solid
    left: 11px
    transform-origin left bottom
    transform rotate(45deg)

.notice-content
  padding .5em 2em

.notice-countdown
  width: 100%
  height 4px
  background #000
  z-index 10000
  position fixed
  top 0
  left 0
  transform translateZ(0)

.notice-countdown-leave
  transform translate3d(-100%, 0, 0)

.notice-slide-transition
  transition all .25s ease-in
  transform translateZ(0)
.notice-slide-enter,.notice-slide-leave
  transform translate3d(0,-100%,0)

</style>
