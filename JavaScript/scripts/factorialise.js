var inUser = parseInt(prompt("Podaj mi liczbę"));

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

var n = factorialize(inUser);
myArray = Array.from(n.toString()).map(Number);

console.log(
  `${myArray[myArray.length - 2]} ${myArray[myArray.length - 1]}`
);
