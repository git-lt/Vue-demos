const data = require('./mock-data')
const LATENCY = 16

export function getAllMessages(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(data)
    }, LATENCY)
  })
}

export function createMessage({ text, thread }){
  const timestamp = Date.now()
  const id = 'm_' + timestamp
  const message = {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    authorName: 'Evan'
  }

  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(message)
    }, LATENCY)
  })
}
