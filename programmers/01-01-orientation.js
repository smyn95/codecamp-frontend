//로봇이 한번에 2칸씩 올라갈 수 있다면 100층까지 몇번 움직여야할까

let answer = 0 // 이동 횟수
let current = 1; // 로봇의 현재 위치

answer = answer +1;
current = current +2

// 49번 반복

if(current !== 100) {
    current = current +1;
    answer = answer +1;
}
// 50번

// for문 사용해서 풀어보기
let answer = 0; // 이동 횟수
const limit = 100; // 이동할 층

for(let i=1; i<limit; i=i+2){
    answer = answer +1;
}

// 다른 방법으로 풀어보기
const lomit = 100; // 이동할 층
const answer = Math.floor(limit/2);