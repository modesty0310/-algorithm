function solution(numbers) {
  let answer = [];
  for(let i = 0; i < numbers.length; i++){
    for(let j = i+1; j < numbers.length; j++){
      answer.push(numbers[i]+numbers[j]);
    }
  }
  answer.sort((a, b) => a-b);
  let set = new Set(answer);
  answer = [...set];
  return answer;
}