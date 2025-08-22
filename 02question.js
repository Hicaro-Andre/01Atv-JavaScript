
function verificarIdade(name, age) {
  if (age >= 18) {
    return `${name} tem ${age} anos - Maior de Idade`;
  } else {
    return `${name} tem ${age} anos - Menor de Idade`;
  }
}

console.log(verificarIdade("Hicaro", 17));