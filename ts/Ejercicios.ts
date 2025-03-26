interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
}

type Bird = Animal & {
  canFly: boolean;
};

type Race = "Labrador" | "Husky" | "Chucho";

type Dog = Animal & {
  race: Race;
  age: number;
};

type Cat = Pick<Animal, "name" | "canSleep"> & {
  color: string;
};

type Snake = Omit<Animal, "name">;

const Dog: Dog = {
  name: "nombre",
  canDrink: true,
  canEat: true,
  canSleep: true,
  race: "Husky",
  age: 10,
};
const Bird: Bird = {
  name: "nombre",
  canDrink: true,
  canEat: true,
  canSleep: true,
  canFly: true,
};

const Cat: Cat = { name: "nombre", canSleep: true, color: "white" };
const Snake: Snake = { canDrink: true, canEat: true, canSleep: true };
