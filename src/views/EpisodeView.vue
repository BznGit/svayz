<template>
  <span v-if = "loading" >Идет загрузка...</span>
  <div v-if = "!loading" class="content">
    <h1>Episodes</h1>
    <h2>"{{data.currEpisode.name}}"</h2>
    <span>{{data.currEpisode.air_date}}</span>
    <div class="content-img">
      <div v-for="item in data.currImages" :key="item" class="content__item">
        <router-link :to="`/character/` + item.characterId">
          <img  :src="item.img" alt="item.name " class="">
          <span>{{ item.name }}</span>
        </router-link>
      </div>  
    </div>
   
  </div>
</template>
<script>

import { getEpisode } from '@/api/getEpisode'
export default {
  name: 'App',
  data(){
    return {
      data: null,
      loading: false,
     
    }
  },
  created(){
    this.loading = true;
    getEpisode(this.$route.params.id).then(data=>{
      this.loading = false
      this.data=data
      this.data.currImages
   
    })
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
.prelouder{
    display: flex;
    height: 20px;
    width: 20px;
    justify-self: center;
    align-self: center
 
}
.img{
  display: flex;
  width: 100px;
  height: 100px;
  justify-self: center;
  padding-left: auto;
  padding-right: auto;
}
</style>
