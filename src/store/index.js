import { defineStore } from 'pinia';
import { getCharacters, getOneCharacter } from '@/api/getCharacters';
import { getEpisode } from '@/api/getEpisode'

export const useStore = defineStore('counter', {
  state: () => ({ 
    characters: [],
    searchName: null,
    
  }),
  getters: {

    getAll: (state)=>state.characters,

    getFiltred:(state)=>{
      return (name) => {
        console.log('name--', name)
        if (name.length == 0) return state.characters
          let arr = state.characters.filter(item=>{
          let curr = item.name.toLowerCase();
       
        
          let bool = curr.includes(name.toLowerCase())
          console.log(curr, name.toLowerCase(), bool)
          if (bool == true) return true;
        })
        return arr
      } 
    }
  },

  actions: {
    setSearch(name){
      console.log(name)
      this.searchName = name 
    },

    getMultipleCharacters(from, to) {
      getCharacters(from, to).then(response=>
        response.data.forEach(item=>{
          this.characters.push(item)
        })
      )  
    },

    getCharacter(id) {
      console.log('>>',id)
      getOneCharacter(id).then(response =>{
        this.characters = response.data;
        console.log('>>', this.characters)
      });
    },

    getEpisode(id) {
      getEpisode(id).then(data=>this.currEpisode=data)
    },
  },
})
