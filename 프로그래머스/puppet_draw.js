function solution(board, moves) {
  let answer = 0;
  let basket = [];
  moves.forEach(m => {
    let j = 0;
    while(j < board.length-1 && board[j][m-1] == 0 ){
      j++
    }
    if(board[j][m-1] != 0){
      console.log('push : ' + board[j][m-1]);
      if(basket[basket.length-1] == board[j][m-1]){
        basket.pop()
        answer += 2;
      }else{
        basket.push(board[j][m-1]);
      }
      board[j][m-1] = 0;
    }
  })
  return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]));