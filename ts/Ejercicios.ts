interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
}

type Bird = Animal & {
  canFly: boolean;
};

type Dog = Animal & {
  race: "Labrador" | "Husky" | "Chucho";
  age: number;
};

type Cat = Animal &
  Pick<Animal, "name"> & {
    color: string;
  };

type Snake = Animal & Omit<Animal, "name">;

const dog: Dog = {
  name: "nombre",
  canDrink: true,
  canEat: true,
  canSleep: true,
  race: "Husky",
  age: 10,
};
const bird: Bird = {
  name: "nombre",
  canDrink: true,
  canEat: true,
  canSleep: true,
  canFly: true,
};
//const cat: Cat = { name: "nombre", color: "white" };
//const snake: Snake = { canDrink: true, canEat: true, canSleep: true };
