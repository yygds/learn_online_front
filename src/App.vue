<template>
  <div id="app">
    <router-view/>
    <router-link to="/home">主页</router-link>
    <router-link to="/login">注册</router-link>
    <router-link to="/login">登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
