<template>
  <div class="chat">
    <div class="sidebar">
      <Card></Card>
      <List></List>
    </div>
    <div class="main">
      <Message></Message>
      <Txt></Txt>
    </div>
  </div>
</template>

<script>

import Card from './Card'
import List from './List'
import Message from './Message'
import Txt from './Text'

export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Card,
    List,
    Message,
    Txt
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

  .message {
  }
}

</style>
