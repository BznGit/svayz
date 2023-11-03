<template>
  <div class="content">
    <h1>Episodes</h1>
    <h2>"{{userStore.currEpisode.name}}"</h2>
    <span>{{userStore.currEpisode.air_date}}</span>
    <div class="content-img">
      <div v-for="item in userStore.currImages" :key="item" class="content__item">
      <router-link :to="`/character/` + item.characterId">
        <img  :src="item.img" alt="item.name " class="">
        <span>{{ item.name }}</span>
      </router-link>
        
    </div>  
    </div>
   
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
  beforeCreate(){
    console.log(this.$route.params.id)
    this.userStore.getEpisode(this.$route.params.id) 

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
