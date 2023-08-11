let a = 0

let b = a || 42 // Operador OU verifica quais são falsos e verdadeiros (0, null, undefined -> são falsos)

console.log({ a, b }) // b vai ser 42 porque 0 é falso

b = a ?? 42 // Operador ?? verifica apenas os null e undefined, ou seja, o 0 apareceria porque não é nenhum dos dois

console.log({a, b})

let c = false ?? 42 // c vai ser falso porque false não é nulo

console.log({c})