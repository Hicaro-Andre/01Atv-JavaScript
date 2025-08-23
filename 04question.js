function calculadora(a, b, op) {
  let result;

  switch (op) {
    case "+":
      result = a + b;
      break;

    case "-":
      result = a - b;
      break;

    case "*":
      result = a * b;
      break;

    case "/":
      if (b === 0) {
        return "Erro: divisão por zero não é permitida";
      }
      result = a / b;
      break;

    default:
      result = "Operação inválida";
  }

  return result;
}

console.log(calculadora(10, 0, "/"));
