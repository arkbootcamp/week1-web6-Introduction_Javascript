// STRING =======================================================
let name = "Bagus";
console.log(typeof name);

// NUMBER =======================================================
let number = 012345;
console.log(typeof number);

// BOOLEAN ======================================================
let boolean = true;
console.log(typeof boolean);

// FUNCTION =====================================================
let functionData = function () {
  return "Oke !";
};
console.log(typeof functionData);

// OBJECT =======================================================
const objectData = {
  nama: "Bagus",
  hobby: ["futsal", "berenang"],
};
console.log(typeof objectData);

// OBJECT JUGA ===================================================
// array pada versi es6 masuk kedalam type data object
const arrayData = [
  {
    nama: "Bagus",
    hobby: ["futsal", "berenang"],
  },
];
console.log(typeof arrayData);

// NULL ==========================================================
let nullData = null;
console.log(nullData);

// UNDEFINED =====================================================
let undefinedData;
console.log(undefinedData);
