let a = prompt("Unesi prvi broj");
let b = prompt("Unesi drugi broj");
let c = prompt("Unesi treći broj");
let d = prompt("Unesi četvrti broj");
let maks;

maks = a;

if (b > maks) {
    maks = b;
}
if (c > maks) {
    maks = c;
}
if (d > maks) {
    maks = d;
}

console.log("Najveći između njih je: " + maks);