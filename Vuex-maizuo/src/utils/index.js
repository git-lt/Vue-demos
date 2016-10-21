import Vue from 'vue'

/**
 * [_get 异步获取数据公共方法]
 * @param  {[String]} options.url    [api地址]
 * @param  {[String]} options.query  [查询参数]
 * @return {[Promise]}        [Promise]
 */
export const fetch = ({url, query}, commit) => {
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
