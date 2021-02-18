//Calculator => JSES6

var firstNumber;
var secondNumber;
var userOperator;
var charOperator = ["+", "-", "*", "/"];

firstNumber = parseFloat(prompt("Podaj pierwszą liczbę"));
secondNumber = parseFloat(prompt("Podaj drugą liczbę"));
userOperator = prompt("Operacja (+, -, *, /)");

charOperator.forEach((element) => {
  if (element != userOperator) {
    console.log("Wystąpił błąd.");
  }
});

switch (userOperator) {
  case "+":
    var wynik = firstNumber + secondNumber;
    console.log("Wynik wynosi " + wynik.toString());
    break;
  case "-":
    var wynik = firstNumber - secondNumber;
    console.log("Wynik wynosi " + wynik.toString());
    break;
  case "*":
    var wynik = firstNumber * secondNumber;
    console.log("Wynik wynosi " + wynik.toString());
    break;
  case "/":
    if (secondNumber != 0) {
      var wynik = firstNumber / secondNumber;
      console.log("Wynik wynosi " + wynik.toString());
    } else {
      console.log("Nie można dzielić przez 0");
    }
    break;
  default:
    console.log("Podano złe dane");
    break;
}
