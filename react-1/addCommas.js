const addCommas = (num) => {

    if(Number.isInteger(num)){
      let arr = num.toString().split("")
   
    for(let i = arr.length-3 ; i > 0; i=i-3){
     arr.splice(i,0,",")
     
    }
    return  arr.join("")
    }
      else{
      let arr = num.toString().split(".")
      let arr1 = arr[0].split("")
      for(let i = arr1.length-3; i > 0; i = i-3){
        arr1.splice(i,0,",")
      }
     return arr1.join("").concat('.').concat(arr[1])
    }
  }
  addCommas(-1000000.7908)

module.exports = addCommas;