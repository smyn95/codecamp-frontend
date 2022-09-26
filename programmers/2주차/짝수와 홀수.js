// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

// 입출력 예
// num	return
// 3	"Odd"
// 4	"Even"

//////////////////////////////////////////if (조건문)
function solution(num) {
  let answer = '';

  if (num % 2 === 0) {
    // 짝수 : 나머지 값이 0일 경우
    answer = 'Even';
  } else {
    // 홀수 : 나머지 값이 1일 경우
    answer = 'Odd';
  }

  return answer;
}

////////////////////////////////////////레퍼런스 02 (삼항 연산자)

function solution(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}
