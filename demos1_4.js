input = [...Array(50).keys()];
console.log(input);
console.log(sumaKvadrata(input))

function sumaKvadrata(input) {
    let sumaKvadrata = 0;
    for (n of input) {
        sumaKvadrata += n ** 2;
    }
    return sumaKvadrata;
}