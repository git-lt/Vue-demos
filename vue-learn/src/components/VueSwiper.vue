<template>
    <div class="demo-swiper">
        <h4>与swiper插件一起使用</h4><br>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide bg-c1 flex flex-center">Slide 1</div>
                <div class="swiper-slide bg-c2 flex flex-center">Slide 2</div>
                <div class="swiper-slide bg-c3 flex flex-center">Slide 3</div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
export default {
  name:'VueSwiper',
  ready () {
      this.$nextTick(()=>{
          let mySwiper = new Swiper ('.swiper-container', {
              direction: 'horizontal',
              loop: true,
              pagination: '.swiper-pagination',
              nextButton: '.swiper-button-next',
              prevButton: '.swiper-button-prev',
            })
      })
  }
}
</script>
<style>
    @import '/static/swiper.min.css';
    .demo-swiper { margin: auto;}
    .swiper-container {
        width: 600px;
        height: 300px;
    }
    .swiper-slide{ width: 100%; color:#fff;}
    .bg-c1 { background: #09c;}
    .bg-c2 { background: #f90;}
    .bg-c3 { background: #42B983;}
</style>
