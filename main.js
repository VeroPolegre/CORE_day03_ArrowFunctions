//1.- Funciones flecha
const saludar = () => "Hola";
console.log(saludar());

const division = (a, b) => a / b;
console.log(division(4, 2));

const miNombre = (nombre) => `Mi nombre es ${nombre}`;
console.log(miNombre("Vero"));

const test2 = "Función test 2 ejecutada.";
const test1 = () => test2;
console.log(test1());

//2.- Foreach
let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

// const mayorDeVeinticinco = [];
// gente.forEach((persona) => {
//   if (persona.edad > 25) {
//     mayorDeVeinticinco.push(persona);
//   }
// });
// console.log(mayorDeVeinticinco);

// const gentePorJ = [];
// gente.forEach((persona) => {
//   if (persona.nombre.charAt(0) == "J") {  // o .nombre[0]
//     gentePorJ.push(persona);
//   }
// });
// console.log(gentePorJ);

//3.- Map
const mayorDeVeinticinco = gente.map((persona) => {
  if (persona.edad > 25) {
    return persona;
  }
});
console.log(mayorDeVeinticinco);

const gentePorJ = gente.map((persona) => {
  if (persona.nombre.charAt(0) == "J") {
    // o .nombre[0]
    return persona;
  }
});
console.log(gentePorJ);

// const numbers = [4, 5, 6, 7, 8, 9, 10];
// const numbersElevated = numbers.map((number) => number ** number);
// console.log(numbersElevated);

//4.- Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 != 0);
console.log(evenNumbers);

const foodList = [
  { name: "Tempeh", isVeggie: true },
  { name: "Cheesbacon burguer", isVeggie: false },
  { name: "Tofu burguer", isVeggie: true },
  { name: "Entrecot", isVeggie: false },
];
const veganFood = foodList
  .filter((food) => food.isVeggie === true)
  .forEach((food) => console.log(`Que rico ${food.name} me voy a comer!`));

//5.- Filter
const numeros = [39, 2, 4, 25, 62];
const multiplicationResult = numeros.reduce((a, b) => a * b);
console.log(multiplicationResult);

//Extra
//Extra Map
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const staffStrings = staff.map((person) => {
  return ` ${person.name} es ${person.role} y le gusta ${person.hobbies[0]} y ${person.hobbies[1]}`;
});
console.log(staffStrings);

const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"]; // o switch
const foodStrings = foodList2.map((food) => {
  if (food === "Pizza") {
    return `Como soy de Italia, amo comer ${food} `;
  } else if (food === "Ramen") {
    return `Como soy de Japón, amo comer ${food} `;
  } else if (food === "Paella") {
    return `Como soy de Valencia, amo comer ${food} `;
  } else {
    return `Aunque no como carne, el ${food} es sabroso`;
  }
});
console.log(foodStrings);

//Extra Filter
const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

const expensiveInventory = inventory.filter((stuff) => {
  //could be shorter
  if (stuff.price > 300) {
    return stuff;
  }
});
console.log(expensiveInventory);

const sentenceElements = [
  "Me",
  "llamo",
  ,
  "Vero",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

const sentenceString = sentenceElements.reduce((a, b) => a + " " + b);
console.log(sentenceString);
