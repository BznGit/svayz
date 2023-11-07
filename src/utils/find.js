export function find(name, arr){
   
    if (name.length == 0) return arr
    let proxyArr = arr.filter(item=>{
    let curr = item.name.toLowerCase();
    let bool = curr.includes(name.toLowerCase())
    console.log(curr, name.toLowerCase(), bool)
    if (bool == true) return true;
    })
    return proxyArr
}

export function getSelect(chekedArr, data){
    let tt = [];
    let arr = [];
    if (chekedArr.length == 0) return data
    chekedArr.forEach(element => {
      tt = ass(data, element)
      arr = arr.concat(tt)
    });
  
    return arr;

    function ass(arr, item){
      let resArr = [];
      arr.forEach(element => {
        if (element.status.toLowerCase() == item) {
          resArr.push(element)   
        }
      });
      return resArr
    }
}