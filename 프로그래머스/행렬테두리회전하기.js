function solution(rows, columns, queries) {
  let answer = [];
  // 처음 배열 만들기
  let arr = Array.from(new Array(rows + 1), () =>
    new Array(columns + 1).fill(0)
  );

  for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= columns; j++){
      let num = ((i-1) * columns + j);
      arr[i][j] = num;
    }
  }

  queries.map(q => {
    let [x1, y1, x2, y2] = q;
    let stack = [];
    let temp = [];
    for(let i = y1; i < y2; i++) stack.push(arr[x1][i]);
    for(let i = x1; i < x2; i++) stack.push(arr[i][y2]);
    for(let i = y2; i > y1; i--) stack.push(arr[x2][i]);
    for(let i = x2; i > x1; i--) stack.push(arr[i][y1]);

    temp = stack.pop();
    stack.unshift(temp);
    answer.push(Math.min(...stack));

    for(let i = y1; i < y2; i++) arr[x1][i] = stack.shift();
    for(let i = x1; i < x2; i++) arr[i][y2] = stack.shift();
    for(let i = y2; i > y1; i--) arr[x2][i] = stack.shift();
    for(let i = x2; i > x1; i--) arr[i][y1] = stack.shift();
  })

  return answer;
}

console.log(solution(6,	6,	[[2,2,5,4],[3,3,6,6],[5,1,6,3]]));