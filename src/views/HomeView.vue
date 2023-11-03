<template>
  <div class="content" >
    <div v-for="item in userStore.characters" :key="item" class="content__item">
      <router-link :to="`/character/` + item.id">
        <img :src="item.image" :alt="item.id">
        <h2>{{ item.name }}</h2>
      </router-link>
      <div>{{ item.species }}</div>
      <div class="content-item__episode">
        Episodes: &nbsp;
        <div v-for="item1 in getCountLinck(item.episode)" :key="item1">
          
          <router-link :to="`/episode/` + item1">{{ item1 }}</router-link>
          <span>&nbsp;</span>
        </div>
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
  components: {
    
  },
  data(){
    return {
      from: null,
      to: null
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll);
    this.userStore.getMultipleCharacters(0, 10); 
    this.from = 11;
    this.to = 12;
  },
  methods:{
    getCountLinck(arr){
      let newArr = []
      let limit = arr.length < 5? arr.length : 5
      for(let i = 0; i < limit; i++){  
        let regexp = /\D/g;
        let  episodeId = arr[i].replace(regexp, "")
        newArr.push(episodeId) 
      } 
      return newArr
    },
    handleScroll(){
      const height = document.body.offsetHeight
      const screenHeight = window.innerHeight
      const scrolled = window.scrollY
      const threshold = height - screenHeight / 4
      const position = scrolled + screenHeight
      if (position >= threshold) {
            this.userStore.getMultipleCharacters(this.from, this.to);
            this.from+=2;
            this.to+=2; 
            console.log(this.from, this.to);
      }
    },
  }
}
</script>
<style scoped>

.content{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;
  
}
.content__item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  height: max-content;
  width: 200px;
}
.content-item__episode{
  display: flex;
  padding-top: 5px;
  flex-direction: row;
  justify-content:center;
}
img{
    display: block;
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}
</style>
