function solution(nums) {
  var answer = 0;
  const count = nums.length/2;
  const numsSet = new Set(nums);
  const newNums = [...numsSet].length;
  answer = count > newNums ? newNums : count
  return answer;
}

solution([3,3,3,2,2,4])