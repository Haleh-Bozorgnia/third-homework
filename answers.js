// Part I: HTML & CSS
// Prepare yourself for tomorrow's morning exercise! Watch the following videos on HTML and CSS. You will be working on practicing CSS in your Morning Exercise.

// Rank you comfort with the following material on a scale of 0 - 5:
// 5 - I got this! I am ready to code

// for (let i=1; i<=20; i++)
// {
//     console.log(i);
// }

// for (let i = 0; i <= 200; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// for (let i = 0; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// --------------------------------------------------
// Wild Wild Life
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant", 5000, "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
// // Plantee just had her birthday; change Plantee's array to reflect her being a year older.

// // Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City";
// console.log(wolfy);
// // Give D'Art a second hometown by adding "Hawkins"
// dart.splice(1, 0, "Hawkins");
// console.log(dart);
// // Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// wolfy.shift();
// wolfy.unshift("Gameboy");
// console.log(wolfy);
// ---------------------------------------------
const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let i = 0; i < turtles.length; i++) {
  turtles[i] = turtles[i].toUpperCase();
  console.log(turtles[i]);
}
