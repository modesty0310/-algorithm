function solution(s) {
  const number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let answer = s;
  number.forEach((num, i) => {
    let regex = new RegExp(num, "g")
    answer = answer.replace(regex, i)
  });
  return parseInt(answer);
}
// "2three45sixseven"
// console.log(solution("one4seveneight"));
// console.log(solution("2three45sixseven"));
console.log(solution("sixsixsix"));