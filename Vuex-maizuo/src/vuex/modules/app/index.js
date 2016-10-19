import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  leftNavState: false, //边栏菜单展开状态
  loading: false //页面切换状态
}

export default{
  state,
  actions,
  getters,
  mutations
}
