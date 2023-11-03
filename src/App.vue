<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
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
  margin-top: 60px;
}
</style>
