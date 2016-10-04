<template>
  <div class="main-wrap flex flex-direc-y">
    <header class="site-header">
      <div class="header-inner flex flex-between-x">
        <div class="header-tit">
          <img class="logo" src="./assets/logo.png">Vue 示例
        </div>
        <div class="header-actions">
          <a href="#" class="btn header-btn">查看项目源码</a>
        </div>
      </div>
    </header>
    <div class="site-main cell">
      <div class="main-content flex">
        <div class="main-sidebar">
          <div class="inner">
            <ul class="sidebar-menus">
              <li class="sidebar-menu" v-for="menu in menus" :class="{active:current==$index}"><a class="menu-link" v-link="menu.url" @click="setCurr($index)">{{menu.text}}</a></li>
            </ul>
          </div>
        </div>
        <section class="main-examples cell flex">
            <router-view keep-alive></router-view>
        </section>
      </div>
    </div>
    <footer class="site-footer">
      底部菜单
    </footer>
  </div>
</template>

<script>

// {url:'#/todomvc', text:'Notice组件'}

// {url:'#/todomvc', text:'结合Jquery'}
// {url:'#/todomvc', text:'购物车'}
// {url:'#/todomvc', text:'过渡动画'}http://www.cnblogs.com/wrcold520/p/5531960.html
// {url:'#/todomvc', text:'路由切换'}
// {url:'#/todomvc', text:'CRUD'}http://codepen.io/JayceWu/pen/pbkYEA

  export default {
    name:'Main',
    ready(){
      let currRoute = this.$route.path;
      this.current = this.menus.findIndex(v=>v.url.indexOf(currRoute)>-1);
    },
    data(){
      return {
        menus:[
          {url:'/flex', text:'Flex布局'},
          {url:'/markdown', text:'Markdown'},
          {url:'/modal', text:'Modal组件'},
          {url:'/notice', text:'Notice组件'},
          {url:'/select2', text:'jQ组件select2'},
          {url:'/swiper', text:'jQ组件swipter'},
          {url:'/product', text:'购物车'},
          {url:'/todomvc?type=all', text:'TodoMVC'}
        ],
        current:0
      }
    },
    methods:{
      setCurr:function(i){
        this.current = i;
      }
    }
  }
</script>

<style lang="stylus">
.main-wrap
  height 100%
.site-header
  background-color #F4F3F0
.site-footer
  padding: 1.5rem;
  background: #404040;
  color: #999;
  font-size: .85em;
  text-align: center;
.site-main
  width: 85%;
  margin: 0 auto;

.header-inner
  padding 1em

.header-btn
  background-color: #46b980;
  color: #fff;

.main-content
  margin 30px 0

.main-sidebar
  width: 160px;
  min-height:500px;
  border:1px solid #eee;

.main-examples
  border:1px solid #ccc;

.sidebar-menu
  list-style none
  padding-left 1em
  line-height: 1.8em

.menu-link
  color:#7f8c8d
  display block
  cursor pointer
.sidebar-menu.active .menu-link
  color:#42b983
  font-weight: 600;
.logo
  width: 30px;
  height: 30px
  vertical-align bottom
</style>
