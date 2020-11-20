function shortestOne(array) {
    let najkraćiString = "Input nije valjan";
    if (array.length) {
        najkraćiString = array[0];
        for (const string of array) {
            if (string.length > 0 && string.length < najkraćiString.length)
                najkraćiString = string;
        }
    }
    return najkraćiString;
}
console.log(shortestOne(["Aaaa", "Bbbbbb", "Ccc", "", "Ddddddd", "3"])) //3
console.log(shortestOne([])) //Input nije valjan