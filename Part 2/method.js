const data = {
  name: "Bagus",
  age: 10,
  addLastName: function (lastName) {
    // console.log(`${this.name} ${lastName}`);
    // console.log("method sukses dijalankan");
    const biodata = `Hallo nama saya ${this.name} ${lastName} umur saya ${this.age} tahun`;
    return console.log(biodata);
  },
};

data.addLastName("Tri Harjanto");
