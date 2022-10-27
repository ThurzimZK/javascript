function addSquares(a, b){
    function square(x){ // raiz quadrada
        return x * x
    }
    return square(a) + square(b)
}

console.log(addSquares(2, 3));

// ou =====================

function adcQuadrada(a, b){
    const quadrada = (x) => x * x

    return quadrada(a) + quadrada(b)
}

console.log(adcQuadrada(3, 3));