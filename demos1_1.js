input = {
    "prvi": 122,
    "drugi": 18,
    "treci": "NotAnInteger",
    "cetvrti": -2,
    "peti": 322,
    "sesti": 32.0,
};
// console.log(input);
console.log(sumaIntElemenata(input))

function sumaIntElemenata(input) {
    let sumaIntElemenata = 0;
    for (n in input) {
        if (!(isNaN(input[n]))) {
            sumaIntElemenata += input[n];
        }
    }
    return sumaIntElemenata;
}