// 재귀함수 사용
function fiboRecursion(n) {
    if(n <= 1) return n;

    return fiboRecursion(n - 1) + fiboRecursion(n - 2)
}

// 반복문 사용
function fiboLoop(n) {
    const numArr = [0, 1];

    for(let i = 2; i <= n; i++) {
        numArr[i] = numArr[i - 1] + numArr[i - 2];
    }

    return numArr[n]
}

// 동적계획법
const memo = [0, 1];
function fiboDinamic(n) {
    if(memo[n] !== undefined) {
        return memo[n]
    }
    memo[n] = fiboDinamic(n - 1) + fiboDinamic(n - 2);
    return memo[n];
}

console.log(fiboRecursion(30));
console.log(fiboLoop(30));
console.log(fiboDinamic(30));