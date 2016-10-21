import Firebase from 'firebase'
import LRU from 'lru-cache'

const inBrowser = typeof window !== 'undefined'

const cache = inBrowser
  ? null
  : (process.__API_CACHE__ || (process.__API_CACHE__ = createCache()))

function createCache(){
  return LRU({
    max: 1000,
    maxAge: 1000 * 60 * 15
  })
}

const api = inBrowser
  ? new Firebase('https://hacker-news.firebaseio.com/v0')
  : (process.__API__ || (process.__API__ = createServerSideAPI()))

function createServerSideAPI(){
  const api = new Firebase('https://hacker-news.firebaseio.com/v0')

  api.__ids__ = {}
  ;['top', 'new', 'show', 'ask', 'job'].forEach(type => {
    api.child(`${type}stories`).on('value', snapshot =>{
      api.__ids__[type] = snapshot.val()
    })
  })

  warmCache()
  function warmCache(){
    fetchItems((api.__ids__.top || []).slice(0, 30))
    setTimeout(warmCache, 1000 * 60 * 15)
  }

  return api
}

function fetch (child){
  if(cache && cache.has(child)){
    return Promise.resolve(cache.get(child))
  }else{
    return new Promise((resolve, reject) => {
      api.child(child).once('value', snapshot => {
        const val = snapshot.val()
        if(val) val.__lastUpdated = Date.now()
        cache && cache.set(child, val)
        resolve(val)
      }, reject)
    })
  }
}

// type => ids
export function fetchIdsByType(type){
  return api.__ids__ && api.__ids__[type]
  ? Promise.resolve(api.__ids__[type])
  : fetch(`${type}stories`)
}
// ids => items
export function fetchItems(ids){
  return Promise.all(ids.map(id => fetchItem(id)))
}
// id => itemsPerPage
export function fetchItem(id){
  return fetch(`item/${id}`)
}
// id => user
export function fetchUser(id){
  return fetch(`user/${id}`)
}

export function watchList(type, cb){
  let first = true
  const ref = api.child(`${type}stories`)
  const handler = snapshot => {
    if(first){
      first = false
    }else{
      cb(snapshot.val())
    }
  }

  ref.on('value', handler)

  return ()=>{
    ref.off('value', handler)
  }
}
