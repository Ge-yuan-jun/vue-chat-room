/*
 * vuex配置文件
 * */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // 当前用户
  user: {
    userId: 1, // 用户id，唯一标识
    name: '墨白', // 用户昵称
    img: 'src/assets/header.jpeg' // 用户头像地址
  },
  sessions: [
    {
      id: 2,
      user: {
        name: '一只喵',
        img: 'src/assets/1.jpg'
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
        img: 'src/assets/2.png'
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
        img: 'src/assets/3.jpg'
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
  currentSessionId: 1
}

export default new Vuex.Store({
  state
})
