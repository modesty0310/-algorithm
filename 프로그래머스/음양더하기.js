function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((num, index) => {
      parseInt(num)
      if(signs[index]){
          answer += num
      }else{
          answer -= num
      }
  })
  return answer;
}