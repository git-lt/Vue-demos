import * as types from '../types.js'

const state = {
  versionId:'',
  colorId:'',
  packageId:'',
  productData:{},
  buyInfo:{}
}

const mutations = {
  [types.CHANGE_PRICE](state, id){
    state.versionId = id;
  },
  [types.CHANGE_COLOR](state, id){
    state.colorId = id;
  },
  [types.CHANGE_PACKAGE](state, id){
    state.packageId = id;
  },
  [types.GET_PRO_DETAIL](state, id){
    state.productData = {};
  },
  [types.ADD_TO_CART](state){
    state.buyInfo = {};
  },
}

export default {
  state,
  mutations
}
