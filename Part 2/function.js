// DECLARATION FUNCTION = memiliki sifat hoisting yang dimana untuk fungsinya bisa diletakkan dimana saja
// test();
// function test() {
//   return console.log("Berhasil testing !");
// }
// test();

// EXPRESSION FUNCTION = fungsinya disimpan ke dalam variabel jadi pemanggilannya harus dibawah fungsi itu berasa
// const test = () => {
//   return console.log("Berhasil testing !");
// };
// test();

// =================================================================================================
const sum = (param) => {
  // console.log(param1); // 1
  // console.log(param2); // 2
  // console.log(param.param1); // 2
  // console.log(param.param2); // 1
  let penjumlahan = param.param1 + param.param2;
  let pengurangan = param.param1 - param.param2;
  return { penjumlahan, pengurangan };
};
console.log(sum({ param2: 1, param1: 2 }));

function loop() {
  let a = 0;
  for (let i = 0; i <= 5; i++) {
    a += i;
    // return tidak bisa diletakkan di dalam for karena fungsi akan membaca bahwa return sebagai akhir dari program
  }
  return a;
}
console.log(loop());
