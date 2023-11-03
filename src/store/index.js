import { defineStore } from 'pinia'
import axios from 'axios'

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
      let str = '';
      for(let i = from; i <= to; i++) str += i + ','
      axios.get(`https://rickandmortyapi.com/api/character/` + str)
      .then(response =>{
        response.data.forEach(item=>{
          this.characters.push(item)
        })  
      });
    },
    getCharacter(id) {
      console.log('>>',id)
      axios.get(`https://rickandmortyapi.com/api/character/` + id)
      .then(response =>{
        this.characters = response.data;
        console.log('>>', this.characters)
      });
    },
    getEpisode(id) {
      axios.get(`https://rickandmortyapi.com/api/episode/` + id)
      .then(response =>{
        console.log(response.data)
        this.currEpisode = response.data;
        return response.data.characters
      }).then(arr=>{   
        Promise.allSettled(arr.map(item=>{
          axios.get(item).then(res=>{
            let regexp = /\D/g;
            let  characterId = res.data.url.replace(regexp, "")
            this.currImages.push({
              characterId: characterId,
              img: res.data.image,
              name: res.data.name
            })
            console.log(this.currImages)
          })
        }))
      });
    },
  },
})
