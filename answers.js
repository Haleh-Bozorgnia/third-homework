// Rank you comfort with the following material on a scale of 0 - 5:
// 5 - I got this! I am ready to code

////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i <= 200; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
////////////////////////////////
// Wild Wild Life
//////////////////////////////// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

wolfy[3] = "Gotham City";
console.log(wolfy);

dart.splice(1, 0, "Hawkins");
console.log(dart);

wolfy.shift();
wolfy.unshift("Gameboy");
console.log(wolfy);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let i = 0; i < turtles.length; i++) {
  turtles[i] = turtles[i].toUpperCase();
  console.log(turtles[i]);
}
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
console.log(favMovies.indexOf("Titanic"));
favMovies.sort();

favMovies.pop();

favMovies.push("Guardians of the Galaxy");

favMovies.reverse();

favMovies.shift();

favMovies.unshift();

let item = favMovies.indexOf("Django Unchained");
favMovies.splice(item, 0, "Avatar");

const finalResalt = favMovies.slice(0, favMovies.length / 2);
console.log(finalResalt);

////////////////////////////////
// Where is Waldo
////////////////////////////////// With the following multi-dimensional array
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
let index = whereIsWaldo.indexOf("Eggbert");
whereIsWaldo.splice(index, 1);

console.log(whereIsWaldo);
whereIsWaldo[2][2] = "No One";

console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////
for (let i = 0; i < 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");
}
const kittyTalk = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    let meow = Math.random() * 2;
    // console.log(meow);
    let newMeow = Math.round(meow);
    // console.log(newMeow);
    console.log(kittyTalk[newMeow]);
  }
}

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];
nums.sort();
console.log(nums);
let median = Math.floor(nums.length / 2);
console.log(nums[median]);
////////////////////////////////
// Alien Attire
// ////////////////////////////
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];
let indexShoe = kristynsCloset.indexOf("left shoe");
let kristynsShoe = kristynsCloset[indexShoe];
console.log(kristynsShoe);
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);
////////////////////////////////
// Dress Us Up
// ////////////////////////////
console.log(
  `Kristyn will wear " ${kristynsCloset[1]} with ${kristynsCloset[3]} and ${kristynsCloset[5]}`
);
console.log(
  `Thom will wear ${thomsCloset[1][1]} with ${thomsCloset[0][1]} and ${thomsCloset[2][0]}`
);
////////////////////////////////
// Dairty Laundry
// ////////////////////////////
for (let i = 0; i < kristynsCloset.length; i++) {
  console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}
////////////////////////////////
// Inventory
// ////////////////////////////
console.log(`Shirts : ${thomsCloset[0]}`);
console.log(`Pants : ${thomsCloset[1]}`);
console.log(`Accessories : ${thomsCloset[2]}`);
