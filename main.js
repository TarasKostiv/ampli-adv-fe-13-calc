const firstValue = document.querySelector("#fisrt-value");
const secondValue = document.querySelector("#second-value");
const resultBlock = document.querySelector("#result-block");

function mathOperation(whichOperation) {
  let result;
  switch (whichOperation) {
    case "+":
      result = Number(firstValue.value) + Number(secondValue.value);
      resultBlock.innerHTML =
        firstValue.value + " + " + secondValue.value + " = " + result;
      firstValue.value = null;
      secondValue.value = null;
      break;

    case "-":
      result = Number(firstValue.value) - Number(secondValue.value);
      resultBlock.innerHTML =
        firstValue.value + " - " + secondValue.value + " = " + result;
      firstValue.value = null;
      secondValue.value = null;
      break;

    case "*":
      result = Number(firstValue.value) * Number(secondValue.value);
      resultBlock.innerHTML =
        firstValue.value + " * " + secondValue.value + " = " + result;
      firstValue.value = null;
      secondValue.value = null;
      break;

    case "/":
      result = Number(firstValue.value) / Number(secondValue.value);
      resultBlock.innerHTML =
        firstValue.value + " / " + secondValue.value + " = " + result;
      firstValue.value = null;
      secondValue.value = null;
      break;

    case ">":
      if (Number(firstValue.value) > Number(secondValue.value)) {
        resultBlock.innerHTML =
          firstValue.value + " bigger than " + secondValue.value;
        // firstValue.value = null;
        // secondValue.value = null;
      } else if (Number(firstValue.value) < Number(secondValue.value)) {
        resultBlock.innerHTML =
          firstValue.value + " less than " + secondValue.value;
        // firstValue.value = null;
        // secondValue.value = null;
      } else {
        resultBlock.innerHTML = "Something wrong. Try again";
      }
      break;

    case "<":
      if (Number(firstValue.value) > Number(secondValue.value)) {
        resultBlock.innerHTML =
          secondValue.value + " less than " + firstValue.value;
        // firstValue.value = null;
        // secondValue.value = null;
      } else if (Number(firstValue.value) < Number(secondValue.value)) {
        resultBlock.innerHTML =
          secondValue.value + " bigger than " + firstValue.value;
        // firstValue.value = null;
        // secondValue.value = null;
      } else {
        resultBlock.innerHTML = "Something wrong. Try again";
      }
      break;

    case "=":
      if (Number(firstValue.value) === Number(secondValue.value)) {
        resultBlock.innerHTML = "Number equal";
        // firstValue.value = null;
        // secondValue.value = null;
      } else if (Number(firstValue.value) != Number(secondValue.value)) {
        resultBlock.innerHTML = "Number not equal";
        // firstValue.value = null;
        // secondValue.value = null;
      } else {
        resultBlock.innerHTML = "Something wrong. Try again";
      }
      break;

    case ">=":
      if (Number(firstValue.value) > Number(secondValue.value)) {
        resultBlock.innerHTML =
          firstValue.value + " bigger than " + secondValue.value;
        // firstValue.value = null;
        // secondValue.value = null;
      } else if (Number(firstValue.value) < Number(secondValue.value)) {
        resultBlock.innerHTML =
          firstValue.value + " less than " + secondValue.value;
        // firstValue.value = null;
        // secondValue.value = null;
      } else if (Number(firstValue.value) === Number(secondValue.value)) {
        resultBlock.innerHTML = "Number equal";
      } else {
        resultBlock.innerHTML = "Something wrong. Try again";
      }
      break;

    case "<=":
      if (Number(firstValue.value) > Number(secondValue.value)) {
        resultBlock.innerHTML =
          secondValue.value + " bigger than " + firstValue.value;
        firstValue.value = null;
        secondValue.value = null;
      } else if (Number(firstValue.value) < Number(secondValue.value)) {
        resultBlock.innerHTML =
          secondValue.value + " less than " + firstValue.value;
        firstValue.value = null;
        secondValue.value = null;
      } else if (Number(firstValue.value) === Number(secondValue.value)) {
        resultBlock.innerHTML = "Number equal";
        firstValue.value = null;
        secondValue.value = null;
      } else {
        resultBlock.innerHTML = "Something wrong. Try again";
      }
      break;

    case "reset":
      firstValue.value = null;
      secondValue.value = null;
      resultBlock.innerHTML = "Result";
  }
  // else if (
  //   secondValue.value === null ||
  //   firstValue.value === null ||
  //   (secondValue.value === null && firstValue.value === null)
  // ) {
  //   resultBlock.innerHTML = "Write numbers";
  // }
}
