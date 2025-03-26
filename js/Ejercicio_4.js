/*1*/
const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  profession: "Barro man",
};

console.log(nombreUsuario(user));

function nombreUsuario(user) {
  const { name, last } = user;
  return "Me llamo ${name} ${last}";
}

/*2*/
const userTwo = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function calculateSalary(userTwo) {
  const MonthsInYear = 12;
  return userTwo.salary * MonthsInYear;
}

function userData(userTwo) {
  const annualSalary = calculateSalary(userTwo);
  const fullName = `${userTwo.name} ${userTwo.last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(userTwo));

/*3*/
const userThree = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esExtrangero(userThree) {
  if (userThree.nationality == "España" && userThree.age !== "30") {
    return "No es apto para la ayuda del gobierno";
  } else {
    return "Apto para la ayuda del gobierno";
  }
}

console.log(esExtrangero(userThree));
