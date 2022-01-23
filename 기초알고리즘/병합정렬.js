function mergeSort (arr) {
  let arrLength = arr.length;
  let result = []
  if(arrLength <= 1){
    return arr;
  }

  let arrMiddleLength = parseInt(arrLength/2);
  let groupOne = mergeSort(arr.slice(0,arrMiddleLength));
  let groupTwo = mergeSort(arr.slice(arrMiddleLength,));

  while(groupOne.length != 0 && groupTwo.length != 0){
    if(groupOne[0] < groupTwo[0]){
      console.log(`groupOne : ${groupOne}, grouptwo : ${groupTwo}\n`);
      result.push(groupOne.shift());
    }else{
      console.log(`groupOne : ${groupOne}, grouptwo : ${groupTwo}\n`);
      result.push(groupTwo.shift());
    }
  }

  while(groupOne.length != 0){
    console.log(`groupOne : ${groupOne}, grouptwo : ${groupTwo}\n`);
    result.push(groupOne.shift());
  }

  while(groupTwo.length != 0){
    console.log(`groupOne : ${groupOne}, grouptwo : ${groupTwo}\n`);
    result.push(groupTwo.shift());
  }

  return result;
}

console.log(mergeSort([34,25,67,11,7,54,87,9]));