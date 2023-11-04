import axios from 'axios'

export  function getCharacters(from, to){
    let str = '';
    for(let i = from; i <= to; i++) str += i + ','
    return axios.get(`https://rickandmortyapi.com/api/character/` + str) 
}

export  function getOneCharacter(id){
    return axios.get(`https://rickandmortyapi.com/api/character/` + id) 
}