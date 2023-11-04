<template>

<span v-if = "loading" >Идет загрузка...</span>
  <div v-if = "!loading" class="content">
    <h1>{{data.name}}</h1>
    <h2>{{data.species}}</h2>
    <div class="content__item">
       <img  :src="data.image" alt="item.name " >
    </div>Location: 
    <a :href="data.location.url">{{ data.location.name }}</a>

  </div>
</template>
<script>

import { getOneCharacter } from '@/api/getCharacters'

export default {
  
  name: 'App',
  data(){
    return {
      loading: false,
      data: null,
    }
  },
  created(){
    console.log(this.$route.params.id)
    this.loading = true;
    getOneCharacter(this.$route.params.id).then(data=>{
      this.loading = false
      this.data=data.data
      console.log(this.data)

   
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
  justify-content: center;
  align-items: center
  
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
