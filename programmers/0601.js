function solution(n) {
  return (n + '')
    .split('')
    .reverse()
    .map((v) => +v);
  console.log(n);
}