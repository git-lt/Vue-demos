import { fetch } from '../../../utils'

export const fetchCinemaLists = ({ commit })=>{
  const url = '/cinema'
  const query = `&_t=` + Date.now()

  return fetch({url, query}, commit)
    .then((json)=>{
      if(json.status === 0){
        return commit('FETCH_CINEMA_SUCCESS', json.data)
      }
      return Promise.reject(new Error('FETCH_CINEMA failure'))
    })
    .catch((error)=>{
      return Promise.reject(error)
    })
}
