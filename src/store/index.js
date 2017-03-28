/*
 * vuex配置文件
 * */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userHeader = require('../assets/header.jpeg')
const header1 = require('../assets/1.jpg')
const header2 = require('../assets/2.png')
const header3 = require('../assets/3.jpg')

const state = {
  // 当前用户
  user: {
    userId: 1, // 用户id，唯一标识
    name: '墨白', // 用户昵称
    img: userHeader // 用户头像地址
  },
  sessions: [
    {
      id: 2,
      user: {
        name: '一只喵',
        img: header1
      },
      message: [
        {
          content: '这是一个示例',
          date: new Date()
        },
        {
          content: '这又是一个示例',
          date: new Date()
        }
      ]
    },
    {
      id: 3,
      user: {
        name: 'vue',
        img: header2
      },
      message: [
        {
          content: 'vue的图标',
          date: new Date()
        }
      ]
    },
    {
      id: 4,
      user: {
        name: 'webpack',
        img: header3
      },
      message: [
        {
          content: '来自webpack的图标',
          date: new Date()
        }
      ]
    }
  ],
  // 选中的聊天窗口
  currentSessionId: 2,
  // 筛选
  filterKey: ''
}

const mutations = {
  // 初始化
  init (state) {
    let data = localStorage.getItem('vue-chat')
    if (data) {
      state.sessions = JSON.parse(data)
    }
  },

  // 发送消息
  send (state, content) {
    let session = state.sessions.find(item => item.id === state.currentSessionId)
    session.message.push({
      content,
      date: new Date()
    })
  },

  // 选择会话
  select_session (state, id) {
    state.currentSessionId = id
  },

  // 搜索
  setFilterKey (state, value) {
    state.filterKey = value
  }
}

const actions = {
  initData: ({ commit }) => commit('init'),
  sendMessage: ({ commit }, content) => commit('send', content),
  selectSession: ({ commit }, id) => commit('select_session', id),
  search: ({ commit }, value) => commit('setFilterKey', value)
}

const getters = {
  sessions: (state) => {
    let result = state.sessions.filter(session => session.user.name.includes(state.filterKey))
    return result
  },
  currentId: (state) => state.currentSessionId
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

store.watch(
  (state) => state.sessions,
  (val) => {
    console.log('change: ', val)
    localStorage.setItem('vue-chat', JSON.parse(val))
  }
)

export default store
