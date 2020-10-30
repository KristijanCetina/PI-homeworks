function min(a, b) {
    let min;
    if (a < b) {
        min = a
    } else if (b < a) {
        min = b;

    } else // a===b
    {
        min = "jednaki";
    }

    return min;
}

console.log(min(0, 4));
console.log(min(0, -4));
console.log(min(4, 4));