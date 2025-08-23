
function convertTemperatura (temperatura){

  let resultado = {}

  switch (temperatura.escala){

    case "C":
      resultado.valor = temperatura.valor * 1.8 + 32;
      resultado.escala = "F";
      break;

    case "F":
      resultado.valor = (temperatura.valor - 32)/1.8;
      resultado.escala = "C";
      break;

    default: 
      return "Escala inválida. Use 'C' para Celsius ou 'F' para Fahrenheit."
  }

  return resultado

}

console.log(convertTemperatura({ valor: 20, escala: "C" })); 