function merge(left, right) {
  const sortedArr = [];

  while( left.length && right.length ) {
    if(left[0] <= right[0]) {
      sortedArr.push(left.shift())
    }else {
      sortedArr.push(right.shift())
    }
  }

  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if(arr.length === 1) return arr;

  const middleIdx = Math.ceil(arr.length / 2);
  const left = arr.slice(0, middleIdx);
  const right = arr.slice(middleIdx);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([34,25,67,11,7,54,87,9]));