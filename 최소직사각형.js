function solution(sizes) {
  let answer = 0;
  let w = 0;
  let h =0;
  sizes.map(v => {
    v.sort((a,b) => a-b)
    w = w > v[0] ? w : v[0];
    h = h > v[1] ? h : v[1];
  })
  answer = w * h;
  return answer;
}