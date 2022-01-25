function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
let obj = {
  gift: "skirt",
  name: "Liza",
  age: 28,
};
checkObj(obj, "gift");
