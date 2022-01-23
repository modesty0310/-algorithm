function solution(N, stages) {
  let answer = [];
  let failRate = [];
  for(let i = 1; i <= N; i++){
    failRate.push({
      ratio :stages.filter(v => v==i).length / stages.filter(v => v>=i).length,
      index: i
    });
  }
  failRate.sort((a,b) => {
    if(a.ratio < b.ratio){
      return 1
    }else if(a.ratio > b.ratio){
      return -1
    }else{
      if(a.index > b.index){
        return 1
      }else{
        return -1
      }
    }
  })
  failRate.map(v => {
    answer.push(v.index);
  })
  return answer;
}

console.log(solution(5,	[2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4,	[4,4,4,4,4]));