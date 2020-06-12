const firstValue = document.querySelector("#fisrt-value");
const secondValue = document.querySelector("#second-value");
const resultBlock = document.querySelector("#result-block");

function mathOperation(whichOperation) {
  let result;
  switch (whichOperation) {
    case "+":
      result = Number(firstValue.value) + Number(secondValue.value);
      resultBlock.innerHTML = result;
      firstValue.value = null;
      secondValue.value = null;
      break;

    case "-":
      result = Number(firstValue.value) - Number(secondValue.value);
      resultBlock.innerHTML = result;
      firstValue.value = null;
      secondValue.value = null;
      break;

    case "*":
      result = Number(firstValue.value) * Number(secondValue.value);
      resultBlock.innerHTML = result;
      firstValue.value = null;
      secondValue.value = null;
      break;

    case "/":
      result = Number(firstValue.value) / Number(secondValue.value);
      resultBlock.innerHTML = result;
      firstValue.value = null;
      secondValue.value = null;
      break;

    case ">":
      if (Number(firstValue.value) > Number(secondValue.value)) {
        resultBlock.innerHTML = "first number bigger than second number";
        firstValue.value = null;
        secondValue.value = null;
      } else if (Number(firstValue.value) < Number(secondValue.value)) {
        resultBlock.innerHTML = "second number bigger than fisrt number";
        firstValue.value = null;
        secondValue.value = null;
      } else {
        resultBlock.innerHTML = "error";
      }
      break;

    case "<":
      if (Number(firstValue.value) > Number(secondValue.value)) {
        resultBlock.innerHTML = "second  number less than fist number";
        firstValue.value = null;
        secondValue.value = null;
      } else if (Number(firstValue.value) < Number(secondValue.value)) {
        resultBlock.innerHTML = "first number less than second number";
        firstValue.value = null;
        secondValue.value = null;
      } else {
        resultBlock.innerHTML = "error";
      }
      break;

    case "=":
      if (Number(firstValue.value) === Number(secondValue.value)) {
        resultBlock.innerHTML = "number equal";
        firstValue.value = null;
        secondValue.value = null;
      } else if (Number(firstValue.value) != Number(secondValue.value)) {
        resultBlock.innerHTML = "number not equal";
        firstValue.value = null;
        secondValue.value = null;
      } else {
        resultBlock.innerHTML = "error";
      }
      break;

    case ">=":
      if (Number(firstValue.value) > Number(secondValue.value)) {
        resultBlock.innerHTML = "first number bigger than second number";
        firstValue.value = null;
        secondValue.value = null;
      } else if (Number(firstValue.value) < Number(secondValue.value)) {
        resultBlock.innerHTML = "second number bigger than fisrt number";
        firstValue.value = null;
        secondValue.value = null;
      } else if (Number(firstValue.value) === Number(secondValue.value)) {
        resultBlock.innerHTML = "number equal";
      } else {
        resultBlock.innerHTML = "error";
      }
      break;

    case "<=":
      if (Number(firstValue.value) > Number(secondValue.value)) {
        resultBlock.innerHTML = "second  number less than fist number";
        firstValue.value = null;
        secondValue.value = null;
      } else if (Number(firstValue.value) < Number(secondValue.value)) {
        resultBlock.innerHTML = "first number less than second number";
        firstValue.value = null;
        secondValue.value = null;
      } else if (Number(firstValue.value) === Number(secondValue.value)) {
        resultBlock.innerHTML = "number equal";
        firstValue.value = null;
        secondValue.value = null;
      } else {
        resultBlock.innerHTML = "error";
      }
      break;

    case "reset":
      firstValue.value = null;
      secondValue.value = null;
      resultBlock.innerHTML = "result";
  }
}
