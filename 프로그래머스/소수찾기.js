/*
문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 
return 하도록 solution 함수를 완성해주세요.

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
*/

function solution(numbers) {
  numbers = numbers.split('');
  var answer = [];
  //numbers 로 나올수 있는 숫자 조합 만들기, parseInt로 문자열 숫자로 바꾸기 (순열 사용)
  function permutation(arr, selectnum) {
    let result = [];
    if(selectnum === 1) return arr;

    arr.forEach((v, index, arr) => {
      let fixer = v;
      let restArr = arr.filter((_, idx) => index !== idx);
      let permutationArr = permutation(restArr, selectnum -1);
      let combineArr = permutationArr.map(v => [fixer,...v]);
      result.push(...combineArr);
    });

    return result;
  }

  for(let i = 1; i <= numbers.length; i++){
    if(i !== 1) {
      answer.push(...permutation(numbers, i).map(v => parseInt(v.join(''))));
    }else {
      answer.push(...permutation(numbers, i).map(v => parseInt(v)));
    }
  }
  // set으로 바꾸었다가 다시 리스트로 만들어서 중복 없애기
  let set = new Set(answer);
  answer = new Array(...set);
  // map, for 문 써서 소수인지 확인
  answer = answer.map((v, idx) => {
    let count = 0;
    for(let i = 1; i <= v; i++){
      if( v % i === 0 ) {
        count++;
      }
      if(count === 3) break
    }
    if(count === 2) return v 
  })
  answer =  answer.filter(v => v !== undefined);
  console.log(answer);
  return answer.length;
}


console.log(solution("12304"));