// modify variabel const, let and var ? =======================================
// var = cangkupan luas | bisa di modifikasi
// var name = "Bagus";
// name = "Tri";

// let = cangkupan kecil | bisa di modifikasi
// let name = "Bagus";
// name = "Tri";

// const = cangkupan kecil | tidak bisa di modifikasi
// const name = "Bagus";
// name = "Tri";

// console.log(name);

//  BLOCK SCOPE ===============================================================
// const x = 10;
// if (x == 10) {
//   const x = 20;
//   console.log(x);
// }
// console.log(x);

// LET or CONST ? ===============================================================
// LET = ketika kita ingin mendeklarasikan variabel dan kita masih mau mengedit/modify isi yang ada didalamnya
// CONST = ketika kita ingin mendeklarasikan variabel dalam bentuk yang tidak akan diubah lagi
// let panjang = 10;
// let lebar = 5;
// let tinggi = 2;

// let perhitungan = panjang * lebar * tinggi;
// perhitungan = perhitungan / 2;
// // perhitungan /= 2;
// console.log(perhitungan);

// HOISTING VARIABEL VAR IN JAVASCRIPT =======================================
// console.log(hello); // undefined karena variabel var akan di jalankan sebelum project di eksekusi
// var hello = "hai";

// FUNCTION SCOPE ===========================================================
const name = "bagus";
function replaceName() {
  const name = "tri";
  console.log(name);
}
console.log(name);
replaceName();
