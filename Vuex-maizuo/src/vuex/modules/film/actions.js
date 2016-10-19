import Vue from 'vue'

/**
 * [_get 异步获取数据公共方法]
 * @param  {[String]} options.url    [api地址]
 * @param  {[String]} options.query  [查询参数]
 * @return {[Promise]}        [Promise]
 */
const _get = ({url, query}, commit) => {
  if(commit) commit('START_LOADING')

  let _url
  if(query){
    _url =  `http://m.maizuo.com/v4/api${url}?${query}`
  } else {
    _url = `http://m.maizuo.com/v4/api${url}`
  }

  return Vue.http.get(_url)
    .then((res)=>{
      if( commit ) commit('FINISH_LOADING')
      if(res.status >= 200 && res.status < 300){
        return res.data
      }
      return Promise.reject(new Error(res.status))
    })
}

/**
 * [fetchComingSoonLists 即将开始电影列表]
 * @param  {[Function]} options.commit [store对象解构出来的函数]
 * @param  {[Number]} page   [页数]
 * @param  {[Number]} count  [每页数量]
 * @return {[Promise]}        [Promise]
 */
export const fetchComingSoonLists = ({ commit }, page, count) =>{
  const url = '/film/comming-soon'
  const query = `count=${count}&page=${page}&_t=` + new Date().getTime()

  return _get({url, query}, commit)
    .then((json)=>{
      if(json.status === 0){
        return commit('FETCH_COMING_SOON_SUCCESS', json.data)
      }
      return Promise.reject(new Error('FETCH_COMING_SOON failure'))
    })
    .catch((error)=>{
      return Promise.reject(error)
    })
}

/**
 * [fetchNowPlayingLists 获取正在热映电影列表]
 * @param  {[Function]} options.commit [store对象解构出来的函数]
 * @param  {[Number]} page   [页数]
 * @param  {[Number]} count  [每页数量]
 * @return {[Promise]}        [Promise]
 */
export const fetchNowPlayingLists = ({ commit }, page, count) => {
  const url = '/film/now-playing'
  const query = `count=${count}&page=${page}&_t=` + new Date().getTime()

  return _get({url, query}, commit)
    .then((json)=>{
      if(json.status === 0){
        return commit('FETCH_NOW_PLAYING_SUCCESS', json.data)
      }

      return Promise.reject(new Error('FETCH_NOW_PLAYING failure'))
    })
    .catch((error)=>{
      return Promise.reject(error)
    })
}

/**
 * [fetchFilmDetail 获取电影详情]
 * @param  {Function} options.commit [store对象解构出来的函数]
 * @param  {Number} id        电影id
 * @return {Promise}          Promise
 */
export const fetchFilmDetail = ({ commit }, id) => {
  const url = '/film/' + id
  const query = '_t=' + new Date().getTime()
  return _get({ url, query }, commit)
    .then((json)=>{
      if(json.status === 0){
        return commit('FETCH_DETAIL_SUCCESS', json.data)
      }

      return Promise.reject(new Error('FETCH_DETAIL failure'));
    })
    .catch((error)=>{
      return Promise.reject(error)
    })
}

/**
 * [fetchBillboards 获取广告]
 * @param  {[Number]} commit [store对象解构出来的函数]
 * @return {[Promise]}        [Promise]
 */
export const fetchBillboards = ({ commit }) => {
  const url = '/billboard/home'
  const query = '_t=' + new Date().getTime()
  return _get({url, query}, commit)
    .then((json)=>{
      if(json.status === 0){
        return commit('FETCH_BANNER_SUCCESS', json.data)
      }

      return Promise.reject(new Error('FETCH_BANNER failure'))
    })
    .catch((error)=>{
      return Promise.reject(error)
    })
}
