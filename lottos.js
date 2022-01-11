function solution(lottos, win_nums) {
  let grade = [6,5,4,3,2,1];
  let correct =0;
  let random = 0;
  for(let i=0; i<lottos.length; i++ ){
    if(lottos.indexOf(win_nums[i]) != -1){
      correct += 1;
    }
    if(lottos[i] == 0){
      random += 1;
    }
  }
  let top = correct+random > 0 ? grade[correct+random-1] : 6;
  let bottom = correct ? grade[correct-1] : 6;
  var answer = [top, bottom];
  return answer;
}

console.log(solution(	[44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));