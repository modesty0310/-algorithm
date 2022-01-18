function solution(array, commands) {
  var answer = [];
  for(let i = 0; i < commands.length; i++){
    //sort() 함수는  ASCII 문자 순서로 정렬되어 숫자의 크기대로 나오지 않음
    answer.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b) => a - b)[commands[i][2]-1]);
  }
  
  return answer;
}