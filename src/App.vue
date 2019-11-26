<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link> |
      <router-link v-show="isLogin" to="/login">登录</router-link>
    </div>
    <router-view />
    <login msgg="sxl" ref="name"> </login>
  </div>
</template>
<script type="text/javascript">
import login from './views/login.vue'
export default {
  components: {
    login
  },
  data () {
    return {
      isLogin: true,
      msgg: '123'
    }
  },
  mounted () {
    this.$refs.name.na = 'refs传递过来的'
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
