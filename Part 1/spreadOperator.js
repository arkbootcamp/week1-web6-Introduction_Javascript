// SPREAD OPERATOR ARRAY ==================================================
const hobby = ["swiming", "gaming"];
const newHobby = [...hobby, "karaoke", "hiking"];

console.log(newHobby);

const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr3 = [...arr1, 10, ...arr2];
console.log(arr3);

// SPREAD OPERATOR OBJECT ==================================================

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 50 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// CASE SPREAD OPERATOR ARRAY OBJECT ========================================
const obj = { key: "value1" };
// const array = [...obj];
// console.log(array); // error kecuali jika kita memberikan tambahan pembungkus berupa object juga
