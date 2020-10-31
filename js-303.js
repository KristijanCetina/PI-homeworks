// ovo je fora ali ...
function ackermann(m, n) {
    return m === 0 ? n + 1 : ackermann(m - 1, n === 0 ? 1 : ackermann(m, n - 1)); // https://forum.freecodecamp.org/t/the-ackermann-function-looks-pretty-in-javascript/277225
}

// my implementation
function ack(m, n) {
    if (m == 0) {
        return n + 1;
    } else if (m > 0 && n === 0) {
        return ack(m - 1, 1);
    } else if (m > 0 && n > 0) {
        return ack(m - 1, ack(m, n - 1));
    } else {
        return "function not defined for negative number";
    }
}

// console.log(ackermann(0, 5)) // → 6
//     //console.log(ackermann(5, 0)) // → 65533 ((RangeError: Maximum call stack size exceeded))
// console.log(ackermann(3, 6)) // → 509
//console.log(ackermann(3, 3)) // → 61

console.log(ack(0, 5)) // → 6
    //console.log(ack(5, 0)) // → 65533  (RangeError: Maximum call stack size exceeded)
console.log(ack(3, 6)) // → 509
console.log(ack(3, 3)) // → 61