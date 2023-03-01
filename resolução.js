function fibonacci(numero) {
  let primeiro = 0, segundo = 1, proximo;
  let sequencia = [primeiro, segundo];
  
  while (segundo <= numero) {
    proximo = primeiro + segundo;
    primeiro = segundo;
    segundo = proximo;
    sequencia.push(segundo);
  }
  
  if (sequencia.includes(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci.");
  } else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
  }
}

fibonacci(8); // Exemplo prático: verificar se o número 8 pertence à sequência de Fibonacci.
