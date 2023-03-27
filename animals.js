let animals = [{ type: "lion" }, "tiger"];
let clones = animals.slice();

// console.log(animals);
// console.log(animals[0].type);
console.log(clones);


clones[0].type = "bear";
// console.log(animals[0].type);

clones[1] = "sheep";

console.log("animals type:", animals[0].type, "clone type:", clones[0].type);

console.log("animals first el:", animals[1], "clone first el:", clones[1]);
