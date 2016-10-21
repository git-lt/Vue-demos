import { set } from 'vue'
import * as types from './mutation-types'

export default {
  // 获取所有消息
  [types.RECEIVE_ALL](state, { messages }){
    let latestMessage
    messages.forEach(message => {
      if(!state.threads[message.threadID]){
        createThread(state, message.threadID, message.threadName)
      }
      if(!latestMessage || message.timestamp > latestMessage.timestamp){
        latestMessage = message
      }
      addMessage(state, message)
    })
    setCurrentThread(state, latestMessage.threadID)
  },
  // 生成新的消息
  [types.RECEIVE_MESSAGE](state, { message }){
    addMessage(state, message)
  },
  // 切换聊天室
  [types.SWITCH_THREAD](state, { id }){
    setCurrentThread(state, id)
  }
}

function createThread (state, id, name){
  set(state.threads, id, {
    id,
    name,
    message: [],
    lastMessage: null
  })
}

function addMessage (state, message){
  message.isRead = message.threadID === state.currentThreadID
  const thread = state.threads[message.threadID]
  if(!thread.message.some(id => id === message.id)){
    thread.message.push(message.id)
    thread.lastMessage = message
  }

  set(state.message, message.id, message)
}

function setCurrentThread (state, id){
  state.currentThreadID = id
  if(!state.threads[id]){
    debugger;
  }
  state.threads[id].lastMessage.isRead = true
}
