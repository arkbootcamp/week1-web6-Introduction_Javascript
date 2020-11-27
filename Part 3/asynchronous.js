// // proses 1
// console.log("Hello Process 1");

// // proses 2
// setTimeout(() => {
//   console.log(" Hello Process 2 After 2000ms");
// }, 2000);

// // proses 3
// console.log("Hello Process 3");

// ============================================
// SEBELUM ASYNCRONOUS DIHANDLE
// proses 1
let r = 7;
let phi = null;
console.log("Proses Deklarasi Berjalan !");
// proses 2
setTimeout(() => {
  console.log("Sedang mencari nilai phi !");
  if (r % 7 === 0) {
    phi = 22 / 7;
  } else {
    phi = 3.14;
  }
  console.log(`nilai phi = ${phi} `);
}, 2000);
// proses 3
console.log(`Hasil luas lingkaran adalah ${phi * r * r}`);
// ================================================================
// SETELAH ASYNCRONOUS DIHANDLE MENGGUNAKAN CALLBACK FUNCTION
const hitungLuasLingkaran = (callback) => {
  // proses 1
  let r = 7;
  let phi = null;
  console.log("Proses Deklarasi Berjalan !");
  // proses 2
  setTimeout(() => {
    console.log("Sedang mencari nilai phi !");
    if (r % 7 === 0) {
      phi = 22 / 7;
    } else {
      phi = 3.14;
    }
    console.log(`nilai phi = ${phi} `);
    callback(phi, r);
  }, 2000);
};
hitungLuasLingkaran((phi, r) => {
  // proses 3
  console.log(`Hasil luas lingkaran adalah ${phi * r * r}`);
});
