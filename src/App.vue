<template>
  <div id="app">
    <div id="nav">
      <nav-bar  ></nav-bar>
      <ismenu></ismenu>

      <keep-alive>
            <router-link to="/">Home</router-link>|
      </keep-alive>
      <router-link to="/about">About</router-link>

    </div>
    <router-view />
  </div>
</template>

<script>
import navBar from './views/nav-bar'
import ismenu from './views/menu'
export default {
  name: "home",
  components:{
    navBar,
    ismenu
  },
  methods:{ 
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav { 
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
