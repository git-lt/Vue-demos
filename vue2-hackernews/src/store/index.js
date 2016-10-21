import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItem, fetchItems, fetchIdsByType, fetchUser} from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    activeType:null,
    itemsPerPage:20,
    items:{},
    users:{},
    lists:{
      top:[],
      new:[],
      show:[],
      ask:[],
      job:[]
    }
  },
  actions:{
    FETCH_LIST_DATA:({ commit, dispatch, state },{ type })=>{
      // 设置当前分类类型
      // 根据类型获取分类数据
      // 设置当前分类的新闻列表ids
      // 根据ids获取新闻列表详情
      commit('SET_ACTIVE_TYPE', { type })
      return fetchIdsByType(type)
        .then(ids => commit('SET_LIST', { type, ids }))
        .then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
    },
    ENSURE_ACTIVE_ITEMS:({ dispatch, getters })=>{
      // 根据当前页的ids，获取列表信息
      return dispatch('FETCH_ITEMS',{
        ids: getters.activeIds
      })
    },
    FETCH_ITEMS:({ commit, state },{ ids })=>{
      // 去掉已经缓存过的新闻id
      ids = ids.filter(id => !state.items[id])
      // 根据新闻ids获取详情并缓存
      if(ids.length){
        return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
      }
    },
    FETCH_USER:({ commit, state }, { id })=>{
      // 根据用户id获取用户信息，并设置当前用户信息
      // 如果已经缓存，则直接返回用户信息
      return state.users[id]
      ? Promise.resolve(state.users[id])
      : fetchUser(id).then(user => commit('SET_USER', { user }))
    }
  },
  mutations:{
    // 设置当前的分类
    SET_ACTIVE_TYPE:(state, { type })=>{
      state.activeType = type
    },
    // 设置当前分类中的ids
    SET_LIST:(state, { type, ids })=>{
      state.lists[type] = ids
    },
    // 设置当前分类的新闻信息
    SET_ITEMS:(state, { items })=>{
      items.forEach(item => {
        if(item){
          Vue.set(state.items, item.id, item)
        }
      })
    },
    // 设置当前的用户信息
    SET_USER:(state, { user })=>{
      Vue.set(state.users, user.id, user)
    }
  },
  getters:{
    // 计算分页，返回当前页的列表的ids
    activeIds(state){
      const { activeType, itemsPerPage, lists } = state
      const page = Number(state.route.params.page) || 1
      if(activeType){
        const start = (page -1) * itemsPerPage
        const end = page * itemsPerPage
        return lists[activeType].slice(start, end)
      }else{
        return []
      }
    },
    activeItems(state, getters){
      // 过滤空数据
      // console.log(state.items)
      return getters.activeIds.map(id => state.items[id]).filter(_ => _)
    }
  }
})

export default store;
