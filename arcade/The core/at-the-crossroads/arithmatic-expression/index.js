function arithmeticExpression(a, b, c) {
    return a + b === c || a - b === c || a * b === c || a / b === c
}

// best solution
function arithmeticExpression(A, B, C) {
    return [...'+-*/'].some(op => eval(`${A}${op}${B}`) === C)
}

console.log(arithmeticExpression(2, 3, 5));
