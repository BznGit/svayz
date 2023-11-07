import axios from 'axios'

export  function getOneLocation(id){
    console.log(id)
    return axios.get(`https://rickandmortyapi.com/api/location/` + id) 
}