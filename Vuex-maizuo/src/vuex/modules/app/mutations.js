import {
  CHANGE_LEFTNAV_STATE,
  START_LOADING,
  FINISH_LOADING,
  SET_TITLE
} from './mutation-types'

const mutations = {
  // 边栏菜单的展开和折叠
  [CHANGE_LEFTNAV_STATE](state, isShow){
    state.leftNavState = isShow
  },
  // 显示loading
  [START_LOADING](state){
    state.loading = true
  },
  // 关闭loading
  [FINISH_LOADING](state){
    state.loading = false
  },
  // 设置标题 [页面路由与title同步]
  [SET_TITLE](state, title){
    state.title = title || 'title'
    window && window.document && (window.document.title = state.title)
  }
}

export default mutations
