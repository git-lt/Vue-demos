import {
  CHANGE_LEFTNAV_STATE,
  START_LOADING,
  FINISH_LOADING
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
  }
}

export default mutations
