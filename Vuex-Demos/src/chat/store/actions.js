import * as api from '../api'
import * as types from './mutation-types'

// 获取所有历史消息
export const getAllMessages = ({ commit }) => {
  api
    .getAllMessages()
    .then(messages => {
      commit(types.RECEIVE_ALL, { messages })
    })
}

// 发送一条新消息
export const sendMessage = ({ commit }, payload) => {
  api
    .createMessage(payload)
    .then(message => {
      commit(types.RECEIVE_MESSAGE, {
        message
      })
    })
}

// 切换聊天室
export const switchThread = ({ commit }, payload) => {
  commit(types.SWITCH_THREAD, payload)
}
