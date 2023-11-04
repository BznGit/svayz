<template>
  <div class="header">
    <input type="text" placeholder="        Поиск" @input="searching">
    <router-link class="nav" to="/">Home</router-link>
    <router-link to="/character"></router-link>
    <div class="menu" @click="openEditMenu">
      <img src="../assets/menu.svg">
    </div>
  </div>

</template>

<script>
export default {
  name: 'HeaderMain',
  props: {
 
  },
  methods:{
    openEditMenu(){
      console.log('dede')
      this.$emit('open-menu')
    },
    searching(src){
      console.log(src.target.value)
      this.$emit('search', src.target.value)
    }
  },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  align-items: center;
  margin: 0 ;
  background-color: #273B69;
  height: 60px;
  justify-content: space-between;
}
input {
  display: flex;
  height: 50%;
  margin-left: 30px;
  background-color: #485073;
  border: 0px;
  color: white;
  width: 30%;
  border-radius: 5px;
 
}
input::-webkit-input-placeholder { color: white; }
.menu{
  display: flex;
  margin-right: 30px;
  width: 50px;
  cursor: pointer;
}
.menu:hover{
  transform: scale(1.2);
}
img{
  width: 40px;
}
.nav{
  color: aliceblue;
}
</style>
