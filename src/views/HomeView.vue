<template>  
<div class="contener__input">
  <label for="alive">Alive</label>
  <input type="checkbox" name="alive" id="1" value="alive" v-model="checkedFields" @change="select">
  <label for="dead">Dead</label>
  <input type="checkbox" name="dead" id="2" value="dead" v-model="checkedFields" @change="select">
  <label for="unknown">Unknown</label>
  <input type="checkbox" name="unknown" id="3" value="unknown" v-model="checkedFields" @change="select">
</div>

  {{ checkedFields }}
  
  <div class="content" >
    <div v-for="item in data" :key="item" class="content__item">
      <router-link :to="`/character/` + item.id">
        <img :src="item.image" :alt="item.id">
        <h2>{{ item.name }}</h2>
      </router-link>
      <div>{{ item.species }}</div>
      <div>Status: {{ item.status }}</div>
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
  props:{
    searchName: Object,
  },
  name: 'App',
  data(){
    return {
      from: null,
      to: null,
      data: this.userStore.getAll,
      checkedFields:[],
      oldData: this.userStore.getAll,
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll);
    this.userStore.getMultipleCharacters(0, 10); 
    this.from = 11;
    this.to = 12;
    
  },
  watch: {
    searchName: function(newName) {
      this.filter(newName)
    }
  },
  methods:{
    select(){
   
      let tt = [];
      let arr = [];
      console.log(this.oldData )
      if (this.checkedFields.length == 0) return this.oldData
      this.checkedFields.forEach(element => {
        tt = [];
        console.log('--*',element)
        tt = ass(this.oldData, element)
        console.log(tt)
        arr = arr.concat(tt)
        console.log(this.data)
      });
      this.data = arr;

      function ass(arr, item){
        let resArr = [];
        arr.forEach(element => {
          if (element.status.toLowerCase() == item) {
            resArr.push(element)
              
          }
        });
        return resArr
      }
    },
    filter(name){
      let arr1 = this.data;
      function  prom(name, arrP){
        console.log('name--', name)
        if (name.length == 0) return arr1
          let arr = arrP.filter(item=>{
          let curr = item.name.toLowerCase();
          let bool = curr.includes(name.toLowerCase())
          console.log(curr, name.toLowerCase(), bool)
          if (bool == true) return true;
        })
        return arr
      } 
      this.data = prom(name, this.data)
      this.oldData = prom(name, this.data)
      //this.data = this.userStore.getFiltred(name);
      //this.oldData = this.userStore.getFiltred(name);
    },

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
.contener__input{
  display: flex;
  padding-top: 20px;
  justify-content: center;
 
}
label {
   padding-left: 20px;
}
</style>
