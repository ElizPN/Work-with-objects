function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1); // Recursive call - when a function calls itself with progressively smaller values of n until it reaches 1.
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    let newArr = countdown(n - 1);
    newArr.unshift(n);
    return newArr;
  }
}
console.log(countdown(5));
