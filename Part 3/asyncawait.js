// EXPRESION FUNCTION
// const helloWorld = async () => {
//   let result = await doAsync();
//   console.log(result);
// };

// DECLARATION FUNCTION
async function helloWorld() {
  try {
    let result = await doAsync(); // result = 'Hello World' akan didapat selama 2 detik
    await showAsync(result); // console.log(result) akan berjalan  kurang 1 detik
  } catch (error) {
    console.log(error);
  }
}

// function doAsync() {
//   setTimeout(() => {
//     return "Hello World"; //UNDEFINED
//   }, 2000);
// }
const doAsync = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World"); // HELLO WORLD
    }, 2000);
    setTimeout(() => {
      reject(new Error("Data Gagal Diambil !")); // ERROR DATA GAGAL DITAMPILKAN
    }, 3000);
  });

function showAsync(result) {
  return console.log(result);
}

helloWorld();
