const getResultOperation = (total, next, operation) => {
  let firstNumber = Number(total);
  let secondNumber = Number(next);
  
  if (operation === "+") return (firstNumber + secondNumber).toString();
  if (operation === "-") return (firstNumber - secondNumber).toString();
  if (operation === "x" || operation === "*") return (firstNumber * secondNumber).toString();
  if (operation === "÷" || operation === "/") {
    if (secondNumber === 0) return "ERROR";
    else return (firstNumber / secondNumber).toString();
  }

  console.log("operation", operation);
  return `Unknown operation. ERROR.`;
}

export default function calculate(obj, buttonName) {
  const { next, total, operation } = obj;
  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null
    };
  }

  if(!isNaN(buttonName)){
    if (buttonName === "0" && next === "0") return {};
    if(operation){
      if(next) return { next: next + buttonName };
      else return { next: buttonName };
    }
    if(next) {
      let displayNumber = next === "0" ? buttonName : next + buttonName;
      return { next: displayNumber, total: null };
    }
    return {
      next: buttonName,
      total: null
    }
  }

  if (buttonName === "%") {
    if (operation && next) {
      const result = getResultOperation(total, next, operation);
      let percentage = (Number(result) / 100).toString();
      return {
        total: percentage,
        next: null,
        operation: null,
      };
    }
    if (next) {
      let percentage = (Number(next) / 100).toString();
      return { next: percentage };
    }
    return {};
  }

  if(buttonName === "."){
    if(next){
      if(next.includes(".")) return {};
      else return { next: next + "." };
    }
    return { next: "0." };
  }

  if (buttonName === "=") {
    if (next && operation) {
      return {
        total: getResultOperation(total, next, operation),
        next: null,
        operation: null,
      };
    } else return {};
  }

  if (buttonName === "+/-") {
    if (next) return { next: (-1 * Number.parseFloat(obj.next)).toString() };
    if (total) return { total: (-1 * Number.parseFloat(total)).toString() };
    return {};
  }

  if(operation) {
    return {
      total: getResultOperation(total, next, operation),
      next: null,
      operation: buttonName
    }
  }

  // The user hasn't typed a number yet, just save the operation
  if (!next) return { operation: buttonName };
  
  return {
    total: next,
    next: null,
    operation: buttonName
  }
}