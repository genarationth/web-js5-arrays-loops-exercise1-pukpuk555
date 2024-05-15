//1.1

let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

const alphabetLength = () => {
  console.log(myAlphabet.length);
};

alphabetLength();

// 1.2

let planets = ["M78", "Saiya", "Star Killer", "Namek", "Tatuin"];

planets.forEach(function (daw, index) {
  console.log(daw, `[${index}]`);
});

// 1.3
let myArr = [1, 2, "One", true];

myArr.forEach((value) => {
  console.log(value);
});
