// for (let i = 1; i <= 100; i++) {
//     let f = i % 3 == 0,
//         b = i % 5 == 0;
//     console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
// }

for (i = 0; i < 100;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i) // https://gist.github.com/jaysonrowe/1592432