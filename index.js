const stringFirst = prompt("Enter first number!", "");
const stringSecond = prompt("Enter second number!", "");

if (stringFirst && stringSecond) {
  const numberOne = +stringFirst;
  const numberTwo = +stringSecond;

  if (!isNaN(numberOne) && !isNaN(numberTwo)) {
    let sum = numberOne + numberTwo;
    let subtraction = numberOne - numberTwo;
    let multiple = numberOne * numberTwo;
    let division = numberOne / numberTwo;
    alert(
      `${numberOne}+${numberTwo}=${sum}\n ${numberOne}-${numberTwo}=${subtraction}\n ${numberOne}*${numberTwo}=${multiple}\n ${numberOne}/${numberTwo}=${
        Number.isFinite(division) ? division : "not correct value"
      }`
    );
  } else {
    alert("Not two numbers!");
  }
} else {
  alert("Not enough data!");
}
