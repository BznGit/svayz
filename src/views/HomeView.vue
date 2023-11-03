<template>
  <div class="content"  >
      <div v-for="item in userStore.characters" :key="item" class="content__item">
       <router-link :to="`/` + item.id">
        <img :src="item.image" :alt="item.id">
          <h2>{{ item.name }}</h2>
        </router-link>
        <span>{{ item.species }}</span>
        <div class="content-item__episode">
          <div v-for="(item1, index) in getArrr(item.episode)" :key="item1" >
            
            <a :href="item1">{{ index }}</a>
            <span>,</span>
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
      from: 0,
      to: 10
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll);
    this.userStore.getMultipleCharacters(0, 1); 
    this.from = 0;
    this.to = 1;
  },
  methods:{
    getArrr(arr){
      let newArr = []
      for(let i=0; i<5; i++){
        !arr[i]? '':arr[i]
        newArr.push(arr[i]) 
      } 
      return newArr
    },
    handleScroll(){
      console.log(window.screen.height);
      console.log(window.scrollY);
      if(window.scrollY > window.screen.height - 50 ){
        this.userStore.getMultipleCharacters(this.from, this.to);
        this.from+=1;
        this.to+=1; 
      }
    },
  }
}
</script>
<style>

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
