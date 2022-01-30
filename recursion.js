// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }
// let arr = [2, 2, 2];
// console.log(multiply(arr, 3));

function sum(arr, n) {
  if (n <= 0) {
    // the function will be executed until n is equal to or less than 0.
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1]; //every time we call a function we access an element of the array and add each to other.
  }
}

let arr = [2, 2, 2];
console.log(sum(arr, 3));
