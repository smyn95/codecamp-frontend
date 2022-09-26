// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

/////////////////////////////////( for : reverse 사용 )

function solution(n) {
  const answer = [];
  // 숫자 타입의 데이터를 문자열 타입으로 변환
  n = String(n);

  for (let i = 0; i < n.length; i++) {
    answer.push(Number(n[i]));
  }
  answer.reverse();

  return answer;
}

///////////////////////////////////////////레퍼런스 02 (for)

function solution(n) {
  const answer = [];
  // 숫자 타입의 데이터를 문자열 타입으로 변환
  n = String(n);

  // 최초식 : n의 length 값이 5를 가지면, 최초식의 인덱스 값은 4부터
  // 조건식 : 인덱스의 0번째 까지 ( 0번째를 포함 )
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }

  return answer;
}

//////////////////////////////////////////레퍼런스 03 (map)

function solution(n) {
  const answer = n
    .toString()
    .split('')
    .reverse()
    .map((el) => {
      return Number(el);
    });
  return answer;
}
