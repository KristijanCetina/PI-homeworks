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

myObject = [{
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

myObject.forEach(element => {
    console.log(element.ime);
});
console.log("");

for (t in myObject) {
    console.log(t);
    console.log(myObject[t].ime);
}
console.log("");

for (x of myObject) {
    console.log(x.ime);
}