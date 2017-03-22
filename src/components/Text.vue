<template>
  <div class="text">
    <textarea placeholder="按 Ctrl + Enter 发送"></textarea>
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
