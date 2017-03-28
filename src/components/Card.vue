<template>
  <div class="card">
    <header>
      <img class="avatar" :src="user.img">
      <p class="name">{{user.name}}</p>
    </header>
    <footer>
      <input
        class="search"
        type="text"
        placeholder="搜索好友"
        ref="search"
        @keyup="search">
    </footer>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    mounted () {
      console.log('1:', this.$refs.search.value)
    },
    computed: {
      ...mapGetters([
        'user',
        'filterKey'
      ])
    },
    methods: {
      ...mapActions([
        'search'
      ])
    }
  }
</script>

<style lang="sass" scoped>
.card {
    padding: 12px;
    border-bottom: solid 1px #24272C;
    footer {
      margin-top: 10px;
    }

    .avatar, .name {
      vertical-align: middle;
    }
    .avatar {
      border-radius: 2px;
      width: 40px;
      height: 40px;
    }
    .name {
      display: inline-block;
      margin: 0 0 0 15px;
      font-size: 16px;
    }
    .search {
      box-sizing: border-box;
      padding: 0 10px;
      width: 100%;
      font-size: 12px;
      color: #fff;
      height: 30px;
      line-height: 30px;
      border: solid 1px #3a3a3a;
      border-radius: 4px;
      outline: none;
      background-color: #26292E;
    }
}
</style>
