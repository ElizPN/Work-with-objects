function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));

//recursion version:

function sumNum(n) {
  if (n < 1) {
    return n;
  } else {
    return n + sumNum(n - 1);
  }
}
console.log(sumNum(100));
