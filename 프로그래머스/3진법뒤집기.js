function solution(n) {
  let answer = 0;
  let newN = n.toString(3).split('').reverse().join('');
  return answer = parseInt(newN,3);
}

console.log(solution(45));