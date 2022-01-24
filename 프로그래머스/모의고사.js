function solution(answers) {
  let answer = [];
  const first = [1,2,3,4,5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5,];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let scores = [0,0,0]

  answers.map((a,i) => {
    checkAnswer(a,i);
  });

  let maxNum = Math.max(...scores);

  for(let i = 0; i < 3; i++){
    if(scores[i] == maxNum){
      answer.push(i+1)
    }
  }


  function checkAnswer(num, index) {
    if(num == first[index%(first.length)]){
      scores[0]++;
    }
    if(num == second[index%(second.length)]){
      scores[1]++;
    }
    if(num == third[index%(third.length)]){
      scores[2]++;
    }
  }

  return answer;
}

console.log(solution([1,2,3,4,5])); 
console.log(solution([1,3,2,4,2]));