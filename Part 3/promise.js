// JIKA MENGGUNAKAN FUNCTION BIASA
// let getDataHobby2 = () => {
//   let success = true;
//   let data = ["Futsal", "Badminton"];
//   if (success) {
//     return data;
//   } else {
//     return new Error("Gagal Mengambil Data !");
//   }
// };
// console.log(getDataHobby2());

// JIKA MENGGUNAKAN FUNCTION PROMISE
let getDataHobby = () =>
  new Promise((resolve, reject) => {
    let success = true;
    let data = ["Futsal", "Badminton"];
    if (success) {
      // console.log("Berhasil");
      resolve(data);
    } else {
      // console.log("Gagal");
      reject(new Error("Gagal Mengambil Data !"));
    }
  });

getDataHobby()
  .then((result) => {
    // result.map ...
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// RESOLVE => THEN jika kondisi berhasil
// REJECT => CATCH jika kondisi gagal
