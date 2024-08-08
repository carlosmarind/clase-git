function square(number) {
    console.log(number);
    return Math.sqrt(number);
}

function squareRoot(number) {
    console.log(number);
    return Math.pow(number, 2);
}

function contarletras(texto) {
    console.log(texto);
    return texto.length;
}

export { square, squareRoot };
