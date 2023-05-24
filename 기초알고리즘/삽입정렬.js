/**
 * Insertion Sort
 * O(N**2)
 * 좌측으로 작은 값을 옮기며 정렬
 */

function insetionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if(arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [3, 6, 1, 7, 9, 5, 2];
console.log(insetionSort(arr));