input = [...Array(50).keys()];
console.log(input);
console.log(sumaKvadrata(input))
console.log(novaSumaKvadrata(input))
console.log(sum(input))

function sumaKvadrata(input) {
    let sumaKvadrata = 0;
    for (n of input) {
        sumaKvadrata += n ** 2;
    }
    return sumaKvadrata;
}

//a sada nešto potpuno drukcije
function novaSumaKvadrata(input) {
    return input.reduce((sum, num) => sum + num ** 2);
}

// i rekurzija, samo za fanove
function sum(input) {
    if (input.length === 0) {
        return 0;
    } else {
        return input[0] ** 2 + sum(input.slice(1));
    }
}