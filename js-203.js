let boardSize = 8;
let char = "# "; //must contain one empty space after char
let firstRowString = "";

if (boardSize > 1) {
    for (let i = 0; i < boardSize; i++) {
        firstRowString += char;
    }

    let secondRowString = firstRowString.slice(1, boardSize * 2) + char;

    for (let i = 0; i < boardSize / 2; i++) {
        console.log(firstRowString);
        console.log(secondRowString);
    }
} else {
    console.log("Bilo bi dobro da je ploča barem 2x2")
}