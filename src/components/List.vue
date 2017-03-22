<template>
  <div class="list">
    <ul>
      <li class="active">
        <img class="avatar" width="30" height="30" src="../assets/header.jpeg">
        <p class="name">小墨白</p>
      </li>
      <li>
        <img class="avatar" width="30" height="30" src="../assets/header.jpeg">
        <p class="name">大墨白</p>
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
.list {
  li {
    padding: 12px 15px;
    border-bottom: 1px solid #292C33;
    cursor: pointer;
    transition: background-color .1s;
    &:hover {
        background-color: rgba(255, 255, 255, 0.03);
    }
    &.active {
        background-color: rgba(255, 255, 255, 0.1);
    }
  }
  .avatar, .name {
    vertical-align: middle;
  }
  .avatar {
    border-radius: 2px;
    width: 30px;
    height: 30px;
  }
  .name {
    display: inline-block;
    margin: 0 0 0 15px;
  }
}
</style>
