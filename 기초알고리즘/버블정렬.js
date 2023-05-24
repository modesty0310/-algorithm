/**
 * BubbleSort
 * O(N**2)
 * 큰 값을 오른쪽으로 옮기며 오른쪽으로 옳기며 정렬
 */

function bubbleSort (arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let arr = [3, 6, 1, 7, 9, 5, 2];
console.log(bubbleSort(arr));