<template>
  <div class="chat">
    <div class="sidebar">
      <div class="card">
        <header>
          <img class="avatar" alt="墨白" src="../assets/header.jpeg">
          <p class="name">墨白</p>
        </header>
        <footer>
          <input class="search" type="text" placeholder="搜索好友">
        </footer>
      </div>
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
    </div>
    <div class="main"></div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.chat {
  margin: 20px auto;
  width: 800px;
  height: 600px;
  overflow: hidden;
  border-radius: 3px;

  .sidebar, .main {
    height: 100%;
  }
  .sidebar {
    float: left;
    width: 200px;
    color: #f4f4f4;
    background-color: #2e3238;
  }
  .main {
    position: relative;
    overflow: hidden;
    background-color: #eee;
  }
  .text {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .message {
    height: 'calc(100% - 160px)';
  }
}

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

.list {
  ul {
    padding: 0;
    list-style: none;
  }
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
