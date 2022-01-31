function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    let newArr = rangeOfNumbers(startNum, endNum - 1);
    newArr.push(endNum);
    return newArr;
  }
}

console.log(rangeOfNumbers(6, 9));
