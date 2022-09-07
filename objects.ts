// OBJECTS

const obj = {
  firstName: "Christopher",
  lastName: "Kuehn",
  age: 36,
  awesome: true
}

const obj2: {
  firstName: string;
  lastName: string;
  age: number;
  awesome: boolean;
} = obj

obj2.age = 24
obj2.age = true     // EXPECTS number
obj2.name = "Hanno" // name IS NOT INSIDE THE object
