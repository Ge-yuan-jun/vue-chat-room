<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  color: #4d4d4d;
  background: #f5f5f5 url('./assets/nodejs.png');
  background-size: cover;
}

ul {
  padding: 0;
  list-style: none;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
