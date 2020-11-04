// https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements-in-jav#:~:text=Both%20for..in%20and%20for,values%20of%20an%20iterable%20object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

let arr = ['el1', 'el2', 'el3'];

arr.novi = "test";

// elKey are the property keys
for (let elKey in arr) {
    console.log(elKey);
}
console.log("");

// elValue are the property values
for (let elValue of arr) {
    console.log(elValue)
}
console.log("");

console.log(arr.novi);
console.log("");

arr.forEach(element => {
    console.log(element);
});

osobe = [{
        ime: "Pero0",
        prezime: "Peric0",
        godiste: 1945
    },
    {
        ime: "Pero1",
        prezime: "Peric1",
        godiste: 1945
    },
    {
        ime: "Pero2",
        prezime: "Peric2",
        godiste: 1945
    }
];

osobe.forEach(osoba => {
    console.log(osoba.ime);
});
console.log("");

for (t in osobe) {
    console.log(t);
    console.log(osobe[t].ime);
}
console.log("");

for (osoba of osobe) {
    console.log(osoba.ime);
}
console.log("");

const array1 = [...Array(5).keys()];
console.log(array1);
console.log(array1.map(x => x ** 3));
console.log("");

const array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator * currentValue;

// 1 + 2 + 3 + 4
console.log(array2.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array2.reduce(reducer, 5));
// expected output: 15