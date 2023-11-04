import { defineStore } from 'pinia';
import { getCharacters, getOneCharacter } from '@/api/getCharacters';
import { getEpisode } from '@/api/getEpisode'

export const useStore = defineStore('counter', {
  state: () => ({ 
    characters: [],
    currEpisode: null,
    currImages: [],
    currCharacter: null,
  }),
  getters: {
    
  },

  actions: {
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
