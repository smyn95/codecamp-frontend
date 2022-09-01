for(let i = 0; i < 5; i++){
  if( i === 3 ){
    break;
  }
  console.log(i)
}

//////////////////////////////

for(let i = 0; i < 5; i++){
  if( i === 3 ){ //3을 반환하지 않겠다
    continue;
  }
  console.log(i)
}

//////////////////////////////
const str = 'abcde'

for(let key in str){
  console.log(key,str[key])
}

//////////////////////////////
const obj = {
  name: "dd",
  age: 12
}

for(let data in obj){
  console.log(data,obj[data])
}

//////////////////////////////

const strs = 'abcde'

for(let key of strs){
  console.log(key)
}

//////////////////////////////