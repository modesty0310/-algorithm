/*
 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

1.엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
2.왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
3.오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
4.가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
  4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
*/

function solution(numbers, hand) {
  let answer = '';
  const keynum = {
    1: [0,0],
    2: [0,1],
    3: [0,2],
    4: [1,0],
    5: [1,1],
    6: [1,2],
    7: [2,0],
    8: [2,1],
    9: [2,2],
    '*': [3,0],
    0: [3,1],
    '#': [3,2],
  }
  const left = [1,4,7];
  const right = [3,6,9];
  let currentLeft = '*';
  let currentRight = '#';
  numbers.forEach(num => {
    if(left.indexOf(num) !== -1){
      currentLeft = num;
      answer = answer + 'L';
    }else if(right.indexOf(num) !== -1){
      currentRight = num;
      answer = answer + 'R';
    }else{
      let leftRange = Math.abs(keynum[num][0] - keynum[currentLeft][0]) + Math.abs(keynum[num][1] - keynum[currentLeft][1])
      let rightRange = Math.abs(keynum[num][0] - keynum[currentRight][0]) + Math.abs(keynum[num][1] - keynum[currentRight][1])
      if(leftRange - rightRange > 0) {
        currentRight = num;
        answer = answer + 'R';
      } else if(leftRange - rightRange < 0) {
        currentLeft = num;
        answer = answer + 'L';
      }else{
        if(hand == 'left'){
          currentLeft = num;
          answer = answer + 'L';
        }else{
          currentRight = num;
          answer = answer+'R';
        }
      }
    }
  })

  return answer;
}

console.log(solution(	[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));