import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('counter', {
  state: () => ({ 
    characters: null 
  }),
  getters: {
    getCharacters: state => state.characters,
  },

  actions: {
    getMultipleCharacters(from, to) {
      let str = '';
      for(let i = from; i <= to; i++) str += i + ','
      console.log(str)
      axios.get(`https://rickandmortyapi.com/api/character/` + str)
      .then(response => (this.characters = response.data));
    },
  },
})
