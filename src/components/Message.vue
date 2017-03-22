<template>
<div class="message">
  <ul>
    <li>
      <p class="time">
        <span>15:49</span>
      </p>
      <div class="main self">
        <img class="avatar" src="../assets/header.jpeg">
        <div class="text">说些什么好呢？</div>
      </div>
    </li>
    <li>
      <p class="time">
        <span>14:21</span>
      </p>
      <div class="main">
        <img class="avatar" src="../assets/header.jpeg">
        <div class="text">说些什么好呢？</div>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
  export default {
    data () {
      return {
        msg: ''
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
