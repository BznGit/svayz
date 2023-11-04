<template>
<Header @search="search"/>
<router-view :searchName="searchName" />
</template>

<script>
 import Header from './components/headerComp.vue'; 
export default {

  name: 'App',
  components: {
    Header,
  },
  data(){
    return {
      searchName: null,
     
    }
  },
  methods:{
    search(name){
      console.log('name>', name)
      this.searchName = name
    }
  }
  
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
body{
  margin: 0;
}


</style>
