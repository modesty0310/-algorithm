function solution(numbers) {
  var answer = 0;
  let number = [1,2,3,4,5,6,7,8,9];
  number.forEach(num => {
      if(numbers.indexOf(num) == -1){
          answer += num
      }
  })
  
  return answer;
}