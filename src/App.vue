<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <HelloWorld/>
  <p>Double count is {{ userStore.characters }}</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { useStore } from './store/index'



export default {
  setup() {
    const userStore = useStore();
    return { userStore };
  },
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
   
    this.userStore.getMultipleCharacters(3, 10)
        
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
