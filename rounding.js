const webPrice = 73.00;
const postotakPopusta = 5; // iznos u postocima. 5% se unosi kao 5
const faktorPopusta = 1-(postotakPopusta/100);
const pdvValue = 25;
const faktorPDV = 1+(pdvValue/100);

console.log("Web cijena: " + webPrice);
console.log("Redovna cijena s decimalama: " + webPrice / faktorPopusta);

const fullPrice = (webPrice / faktorPopusta).toFixed(2);
console.log("Redovna cijena: \t" + fullPrice);

const fullPriceW_oVAT = (fullPrice / faktorPDV).toFixed(2);
console.log("Cijena bez PDV-a:\t" + fullPriceW_oVAT);

const quantity = 12;
console.log(`Ukupno: ${fullPriceW_oVAT} * ${quantity} = ${fullPriceW_oVAT * quantity}`);