/*
네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 
그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 
다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.

전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 
벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.

"지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.

암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
*/

function solution(n, arr1, arr2) {
  let answer = Array.from(Array(n), () => new Array(1))
  // n * n 2진법으로 바꾸기
  for(let i = 0; i < n; i++){
    let binaryArr1 = arr1[i].toString(2).split('');
    let binaryArr2 = arr2[i].toString(2).split('');
    for(let j =0; j < n; j++){
      if(binaryArr1.length != n) binaryArr1.unshift('0');
      if(binaryArr2.length != n) binaryArr2.unshift('0');
      if(binaryArr1[j] == 1 || binaryArr2[j] == 1){
        answer[i] += '#';
      }else{
        answer[i] += ' ';
      }
    }
  }
  return answer;
}

// single vertical bar -> false인 값이 아닌 수로 | 사용시 2진법의 각자리 끼리 더한 수의 10진법 수를 반환
function solution2 (n, arr1, arr2) {
  // map 는 새로운 배열을 반환함.
  return arr1.map((a,i) => {
    return addZero(n, (a | arr2[i]).toString(2)).replace(/0/g,' ').replace(/1/g,'#');
  });
}

function addZero(n, a){
  // 특정 횟수 만큼 반복
  return '0'.repeat(n - a.length) + a; 
}

console.log(solution2(5
  ,[9, 20, 28, 18, 11]
  ,[30, 1, 21, 17, 28]));