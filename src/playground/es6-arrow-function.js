function square (x) {
  return x * x;
};
/*
const squareArrow = (x) => {
  return x * x;
}
*/

console.log(square(5))

const squareArrow = (x) => x * x;
console.log(squareArrow(6))

const getFirstName = (fullName) => fullName.split(' ')[0]
console.log(getFirstName('Michael Koon'))