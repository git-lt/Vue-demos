import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import Hello from './components/Hello.vue'
import MarkdownView from './components/MarkdownView.vue'
import ModalView from './components/ModalView.vue'
import FlexView from './components/FlexView.vue'
import TodoMVC from './components/TodoMVC/app.vue'
import NotFound from './components/NotFound.vue'
import Notice from './components/Notice.vue'
import Select2 from './components/Select2.vue'
import VueSwiper from './components/VueSwiper.vue'
import VueProduct from './components/shopping-cart/Product.vue'

Vue.use(Router);

let router = new Router();

router.map({
  '/index': { component: Hello },
  '/markdown': { component: MarkdownView },
  '/modal': { component: ModalView },
  '/flex': { component: FlexView },
  '/todomvc': { component: TodoMVC},
  '/notice': { component: Notice },
  '/select2': { component: Select2 },
  '/swiper': { component: VueSwiper },
  '/product': { component: VueProduct },
})

router.redirect({
  '/':'/index'
})

router.start(App, '#container')

window.router = router;
