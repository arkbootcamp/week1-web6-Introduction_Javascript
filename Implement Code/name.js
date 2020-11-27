const biodata = () => {
  return console.log("Hello my name is Bagus !");
};

const hobby = ["membaca", "mewarnai"];

// module.exports = biodata;
// cara pertama untuk mengexport module lebih dari 1
// module.exports.biodata1 = biodata;
// module.exports.hobby = hobby;

module.exports = { biodata, hobby };
