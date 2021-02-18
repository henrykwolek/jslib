var n = parseInt(prompt("Liczba testów n: "));

console.log(n);

function isPrime(userInput) {
  for (let j = 3; j < userInput; j++) {
    if (userInput % j == 0) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < n; i++) {
  var num = parseInt(prompt("Twoja liczba :"));
  if (isPrime(num) != false) {
    console.log(
      `Liczba ${num.toString()} jest liczbą pierwszą.`
    );
  } else {
    console.log(
      `Liczba ${num.toString()} NIE jest liczbą pierwszą.`
    );
  }
}
