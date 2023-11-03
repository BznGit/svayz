<template>
  <div class="content">
    <h1>deef{{userStore.currCharacter.name}}</h1>
  </div>
</template>
<script>

import { useStore } from '../store/index'

export default {
  setup() {
    const userStore = useStore();
    return { userStore };
  },
  name: 'App',
  data(){
    return {

    }
  },
  mounted(){
    console.log(this.$route.params.id)
    this.userStore.getCharacter(this.$route.params.id) 

  },

}
</script >
<style scoped>

.content{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 50px;
  
}
.content-img{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.content__item{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px;
  height: max-content;
  width: 200px;
}

img{
    display: block;
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}
</style>
