function manthattanDistance(array) {
    const result = (Math.abs(array[0][0] - array[1][0]) + Math.abs(array[0][1] - array[1][1]))
    return !isNaN(result) ? result : "Input nije valjan";
}

console.log(manthattanDistance([
        [3, 2],
        [5, 4]
    ])) //4
console.log(manthattanDistance([
        [5, "a"],
        [3, 2]
    ])) //Input nije valjan -> String nije podržan
console.log(manthattanDistance([
        [5, 4],
        [3, ]
    ])) //Input nije valjan -> Nedostaje vrijednost