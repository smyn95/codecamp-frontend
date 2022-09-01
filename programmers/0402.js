function countLetter(str) {
  str = str.toLowerCase() // toUpperCase()
   console.log(str)
   let answer = 0
   for(let i = 0; i<str.length; i++){
     if(str[i] === 'a' || str[i]==='A') answer++
     // console.log(i,str[i])
   }
   return answer
 }
 countLetter("I am from Korea") 
 countLetter("A day without laughter is a day wasted.")

 //////////////////////////////

 function makeNumber(num) {
	let str = "";
	for( let i = 1; i <= num; i++ ) {
		str += i // str = str + i;

    if( i !== num ) {
			str += "-" // str = str + "-"
    }	
	}
  return str
}

makeNumber(5)
makeNumber(7)

//////////////////////////////

function makeOdd(num) {
	let str = '';

	for( let i = 1; i <= num; i++ ) {
		if( i % 2 === 1 ) {
			str += i;
		}
	}
  return num
}

makeOdd(9) 
makeOdd(7) 

/////////////////////////////

function bigNum(str) {
	let biggest = 0;

	for( let i = 0; i < str.length; i++ ) {
		if( Number(str[i]) > biggest ) {
			biggest = Number(str[i])
    }
  }
	
	return biggest
}

bigNum("12345") 
bigNum("87135") 