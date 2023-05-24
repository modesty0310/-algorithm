/**
 * SelectSort
 * O(N**2)
 * 한번씩 순회 하며 가장 작은 수를 맨 앞으로 보냄
 */

function selectSort (arr) {
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp
    }
    return arr;
}

let arr = [3, 6, 1, 7, 5, 9, 2];
console.log(selectSort(arr));