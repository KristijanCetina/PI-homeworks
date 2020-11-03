function isti_znakovi(ulazniString) {
    let char;
    let counter = 1;
    Array.from(ulazniString).forEach(element => {
        if (element == char) {
            counter++;
        } else {
            char = element;
            counter = 1;
        }
    });
    return counter;


}

console.log(isti_znakovi("aaabbcccc"));