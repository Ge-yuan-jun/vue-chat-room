<template>
<div class="message" v-scroll-bottom="message.message">
  <ul v-if="message">
    <li v-for="item in message.message">
      <p class="time">
        <span>{{ item.date | time }}</span>
      </p>
      <div class="main" :class="{ self: item.self }">
        <img class="avatar" :src="item.self ? user.img : message.user.img">
        <div class="text">{{ item.content }}</div>
      </div>
    </li>
  </ul>
</div>
</template>
<script>

  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'message',
        'user'
      ])
    },
    filters: {
      time (date) {
        if (typeof date === 'string') {
          date = new Date(date)
        }

        return `${date.getHours()}:${date.getMinutes()}`
      }
    },
    directives: {
      // 发送一条消息之后，自动上移
      'scroll-bottom' (el) {
        el.scrollTop = el.scrollHeight + el.clientHeight
      }
    }
  }
</script>
<style lang="sass" scoped>
.message {
    padding: 10px 15px;
    overflow-y: scroll;
    height: calc(100% - 160px);

    li {
        margin-bottom: 15px;
    }
    .time {
        margin: 7px 0;
        text-align: center;
        > span {
            display: inline-block;
            padding: 0 18px;
            font-size: 12px;
            color: #fff;
            border-radius: 2px;
            background-color: #dcdcdc;
        }
    }
    .avatar {
        width: 30px;
        height: 30px;
        float: left;
        margin: 0 10px 0 0;
        border-radius: 3px;
    }
    .text {
        display: inline-block;
        position: relative;
        padding: 0 10px;
        max-width: calc(100% - 40px);
        min-height: 30px;
        line-height: 2.5;
        font-size: 12px;
        text-align: left;
        word-break: break-all;
        background-color: #fafafa;
        border-radius: 4px;
        &:before {
            content: " ";
            position: absolute;
            top: 9px;
            right: 100%;
            border: 6px solid transparent;
            border-right-color: #fafafa;
        }
    }
    .self {
        text-align: right;
        .avatar {
            float: right;
            margin: 0 0 0 10px;
        }
        .text {
            background-color: #b2e281;
            &:before {
                right: inherit;
                left: 100%;
                border-right-color: transparent;
                border-left-color: #b2e281;
            }
        }
    }
}
</style>
