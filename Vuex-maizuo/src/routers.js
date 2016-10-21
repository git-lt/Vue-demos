export default [{
  path: '/',
  name: 'index',
  meta: '首页',
  component: require('./views/home/index')
},{
  path: '/film',
  name: 'film',
  meta: '影片',
  component: require('./views/film/film-view')
},{
  path: '/detail/:id',
  name: 'detail',
  meta: '影片详情',
  component: require('./views/film/detail')
},{
  path: '/login',
  name: 'login',
  meta: '登录',
  component: require('./views/member/login')
},{
  path: '/cinema',
  name: 'cinema',
  meta: '影院',
  component: require('./views/cinema/index')
},{
  path: '/card',
  name: 'card',
  meta: '卖座卡',
  component: require('./views/card/index')
},{
  path: '*',
  meta: '首页',
  component: require('./views/home/index')
}]
