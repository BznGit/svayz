import axios from 'axios'

export  async function getEpisode(id){
    let data = {
       
    }
    await axios.get(`https://rickandmortyapi.com/api/episode/` + id)
    .then(response =>{
      data.currEpisode = response.data;
    })
    let arr = data.currEpisode.characters 
    let proxyArr = [];
    await  Promise.allSettled(arr.map(item=>
    axios.get(item))).then(data=>{
      data.forEach(element => {
        let regexp = /\D/g;   
        let  characterId = element.value.data.url.replace(regexp, "")
        proxyArr.push({
          characterId: characterId,
          img: element.value.data.image,
          name: element.value.data.name
        })
      });
    })
    data.currImages = proxyArr;
    return data
}

