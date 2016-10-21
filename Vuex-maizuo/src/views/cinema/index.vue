<template lang="html">
  <div>
    <div v-for="(cinemas, districtName) in cinemaGroupObj">
      <div class="district">
        <div class="title" @click="toggle(districtName)"><span>{{districtName}}</span></div>
        <div class="content" v-show="currShow===districtName">
          <div class="cinema-wrap" v-for="cinema in cinemas">
            <div class="cinema">
              <div class="cinema-title">
                <div class="cinema-title-cinemaname">
                  <span>{{cinema.name}}</span>
                  <i class="iconfont icon-zuo book"></i>
                  <i class="iconfont icon-tong ticket"></i>
                </div>
                <div class="cinema-title-tip">
                  <span class="tip tip05" v-for="tip in cinema.labels">{{tip.name}}</span>
                </div>
                <div class="cinema-title-address">
                  <span>{{cinema.address}}</span>
                </div>
                <div class="cinema-title-location">
                  <span>距离未知</span>
                </div>
              </div>
              <div class="pull-right nav">
                <i class="iconfont icon-arrow-right book"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      currShow: ''
    }
  },
  methods:{
    toggle(name){
      this.currShow = this.currShow === name ? '' : name;
    }
  },
  computed:{
    ...mapGetters([ 'cinemaGroupObj' ])
  },
  mounted(){
    this.$store.dispatch('fetchCinemaLists')
  }
}
</script>

<style scoped>
.icon-zuo {
  font-size: 20px;
  color:#fc8558;
}
.icon-tong {
  font-size: 20px;
  color:#88aec8;
}
.district .title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding-left: 16px;
    background: #e1e1e1;
    margin-bottom: 1px;
    color: #636363;
    cursor: pointer;
}
.district .content {
  background: #fff;
}
.district .content .cinema-wrap {
    margin: 0 auto;
    border-bottom: 1px solid #e1e1e1;
    cursor: pointer;
    min-width: 320px;
}
.district .content .cinema-wrap .cinema {
    border-radius: 5px;
    padding: 10px 0 12px 16px;
    cursor: pointer;
    overflow: hidden;
}
.district .content .cinema-wrap .cinema .cinema-title {
    width: 75%;
    min-width: 230px;
    float: left;
    cursor: pointer;
    overflow: hidden;
}
.cinema .nav {
    padding-right: 15px;
    line-height: 36px;
    color: #c6c6c6;
}
.pull-right {
    float: right !important;
}
.nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.cinema-title-cinemaname {
    display: inline-block;
    font-size: 16px;
    width: 100%;
    margin-bottom: 5px;
}
.cinema-title-tip {
    display: inline-block;
    margin-bottom: 5px;
    font-size: 10px;
}
.cinema-title-location{
  font-size: 12px;
  color: #ccc;
}
.cinema-title-tip .tip {
    display: inline-block;
    border-radius: 3px;
    padding: 0 5px;
    margin: 0 5px;
    font-style: normal;
    color: #fff;
    height: 15px;
    line-height: 15px;
}
.cinema-title-tip .tip05 {
    background-color: #ff9658;
}
.cinema-title-address {
  font-size:12px;
  color: #ccc;
}
</style>
