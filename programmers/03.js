function boolean(input1, input2) {
	if(input1 === true || input2 === true) {
    return 'true'
  }else if(!input1 && !input2) {
    return 'false'
  }
}

// function boolean(input1, input2) {
// 	if( !input1 && !input2 ) {
// 		return false;

// 	} else if( input1 || input2 ) {
// 		return true;
// 	}
// }

boolean(true,false)
boolean(false,true)
boolean(false,false)

//////////////////////////////////


function evenOdd(num) {

	if ( num === 0 ) {
		console.log("Zero");

	} else if ( num % 2 === 0 ) {
		// 어떠한 숫자를 2로 나눴을 때 나누어 떨어지는 경우 = 짝수
		console.log("Even");

	} else if ( num % 2 === 1 ) {
		// 어떠한 숫자를 2로 나눴을 때 나누어 떨어지지 않는 경우 = 홀수
		console.log("Odd");
	}
}
evenOdd(12)
evenOdd(15)
evenOdd(0)

//////////////////////////////////////

function temperatrue(num) {
  if(num >= 24){
    return '조금 덥습니다.'
  }else if( num >= 19 && num <= 23 ){
    return '날씨가 좋네요.'
  }else if( num <= 18){
    return '조금 춥네요'
  }
}

temperatrue(13)
temperatrue(20)
temperatrue(24)

////////////////////////////////////


// const monthList = {
//   1: 31,
//   2: 28,
//   3: 31,
//   4: 30,
//   5: 31,
//   6: 30,
//   7: 31,
//   8: 31,
//   9: 30,
//   10: 31,
//   11: 30,
//   12: 31
// }

const thirty = [4, 6, 9, 11]
const thirtyone = [1, 3, 5, 7, 8, 10, 12]
function days (month){
  if(thirty.includes(month)){
    return 30
  }else if(thirtyone.includes(month)){
    return 31
  }else {
    return 28
  }
  // return monthList[month] 
}

days(3)