<template>
  <div class="text">
    <textarea
      placeholder="按 Ctrl + Enter 发送"
      v-model="content"
      @keyup="send"></textarea>
  </div>
</template>
<script>

  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        content: ''
      }
    },
    methods: {
      ...mapActions(['sendMessage']),
      send (e) {
        if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
          this.sendMessage(this.content)
          this.content = ''
        }
      }
    }
  }
</script>
<style lang="sass" scoped>

  .text {
    height: 160px;
    border-top: solid 1px #ddd;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;

    textarea {
      padding: 10px;
      height: 100%;
      width: 100%;
      border: none;
      outline: none;
      resize: none;
    }
  }
</style>
