// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

// 입출력 예
// arr1	arr2	return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	[[3],[4]]	[[4],[6]]

///////////////////////////////////////////////////

function solution(arr1, arr2) {
  const answer = [[]];

  // 1. arr1 배열의 전체 배열들을 가져오고
  for (let i = 0; i < arr1.length; i++) {
    // 2. arr1 배열에서 가져온 배열들의 안쪽 데이터를 조회
    for (let l = 0; l < arr1[i].length; l++) {
      // 3. i와 l 인덱스로 값으로 각각의 위치에 해당되는 데이터들을 합
      const sum = arr1[i][l] + arr2[i][l];
      // 4. i에 해당되는 인덱스로 접근했을 때 배열이 없을 때는 빈 배열을 생성
      if (answer[i] === undefined) {
        answer[i] = [];
      }
      // 5. i와 l 인덱스 값으로 해당 위치에 데이터를 삽입
      answer[i][l] = sum;
    }
  }
  return answer;
}

//////////////////////////////////////레퍼런스 02 (map)

function solution(arr1, arr2) {
  return arr1.map((num1, i) => {
    return num1.map((num2, l) => {
      return num2 + arr2[i][l];
    });
  });
}
