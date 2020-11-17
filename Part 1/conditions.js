// SWITCH CASE ===========================================================
const phone = "IPHONE";

switch (phone) {
  case "IPHONE": {
    console.log("Your phone is Iphone");
    break;
  }
  case "NOKIA": {
    console.log("Your phone is Nokia");
    break;
  }
  default: {
    console.log("Your phone is not listed");
  }
}

// TERNARY OPERATOR ===========================================================
let harga = 5000;
// if (harga >= 5000) {
//   console.log("mahal");
// } else if (harga > 2000) {
//   console.log("sedang");
// } else {
//   console.log("murah");
// }

harga >= 5000
  ? console.log("mahal")
  : harga > 2000
  ? console.log("sedang")
  : console.log("murah");

// SHORT LOGIC ===========================================================
let test = null;
if (test) {
  console.log(true);
} else {
  console.log(false);
}

// TRUE = true | 1-9 | string apa saja yang penting ada isinya
// FALSE = false | 0 | null | undefined
let username = "Bagus";
// if (username) {
//   console.log(username);
// } else {
//   console.log("Anonymous");
// }
let checkUsername = 0 || undefined || null || false;
console.log(checkUsername);

// && = jika kondisinya masih true maka akan melanjutkan ke proses berikutnya, jika false maka nilai itu yang akan di tetapkan
// || = jika kondisinya false maka akan melanjut ke proses berikutnya, jika true maka nilai itu yang akan di tetapkan
