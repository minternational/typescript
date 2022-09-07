// INTERFACES

// OLD WAY:
const obj: {
  firstName: string,
  lastName: string,
  age: number,
  awesome: boolean
} = {
  firstName: "Christopher",
  lastName: "Kuehn",
  age: 36,
  awesome: true,
}


// WITH INTERFACES (ALWAYS RESOLVES IN AN > > OBJECT < <)
interface Person {
  firstName: string,
  lastName: string,
  age: number,
  awesome: boolean
}

const personObject: Person = {
  firstName: "Christopher",
  lastName: "Kuehn",
  age: 36,
  awesome: true
}


// ANOTHER WAY IS TYPE (COULD BE ANY TYPE (string, number, boolean, array) AND SO ON)
type Person2 = {
  firstName: string,
  lastName: string,
  age: number,
  awesome: boolean
}[] // object INSIDE OF array

const personObject2: Person2 = [
  {
    firstName: "Christopher",
    lastName: "Kuehn",
    age: 36,
    awesome: true
  }
]
