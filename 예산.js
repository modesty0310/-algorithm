function solution(d, budget) {
  let answer = 0;
  d.sort((a,b) => a - b);
  let cost = 0;
  for(let i = 0; i < d.length; i++){
    if(cost + d[i] <= budget){
      cost += d[i];
      answer++
    }else{
      break
    }
  }
  return answer;
}

console.log(solution([1,3,2,5,4],	9));