const myMap = new Map();
const user = new Object();

myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", user);
myMap.set("funcion", findAnimal());
myMap.set("color", "color");

function findAnimal() {}

/*1*/
console.log(myMapMap);
/*2*/
console.log(myMap.get("moroso"));
/*3*/
console.log(myMap.has("hola"));
/*4*/
console.log(myMap.size);
/*5*/
myMap.forEach((elemento) => {
  console.log(elemento);
});
/*6*/
myMap.delete("agarrado");
/*7*/
myMap.clear();
