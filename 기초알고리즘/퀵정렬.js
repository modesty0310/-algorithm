function quickSort(arr) {
    // 1. 배열의 길이가 1이면 리턴
    const length = arr.length;
    console.log(length);
    if(length <= 1) return arr;

    // 2. 기준값(pivot) 정하기 - 여기서는 배열의 첫값을 기준값으로 잡겠다.
    const pivot = arr[0];
    const left = [];
    const right = [];

    // 3. 배열을 순회하며 pivot보다 작은 값은 left, 큰 값은 right에 담는다
    for( let i = 1; i < length; i++ ) {
        if(arr[i] > pivot) {
            right.push(arr[i]);
        }else {
            left.push(arr[i]);
        }
    }

    // 4. left, right를 정렬한다.
    const lSorted = quickSort(left);
    const rSorted = quickSort(right);

    // 5. 정렬된 left, pivot, right를 담아서 리턴한다.
    return [...lSorted, pivot, ...rSorted];
}

const arr = [3,8,1,23,77,43,5,8,10,11];

console.log(quickSort(arr));