// CLASSES
/*
IN JAVASCRIPT:

class Car {
  constructor(model, color, age) {
    this.model = model,
    this.color = color,
    this.age = age
  }

  describe() {
    console.log(`A ${this.age} year old ${this.color} ${this.model}`)
  }
}

const myJaguar = new Car("Jaguar", "Green", 5)

console.log(myJaguar) // Car { model: "Jaguar", color: "Green", age: 5 }

myJaguar.describe() // A 5 year old Green Jaguar

*/


// IN TYPESCRIPT
class Car {
  public model: string // public IS THE DEFAULT KEY AND DOESN'T NEED TO BE SPECIFIED
  color: string // IS public BECAUSE public IS THE DEFAULT KEY
  age: number
  private peopleInPolicy: string[] = [] // private MAKES THIS INACCESSIBLE OUTSIDE THE CLASS
  readonly manufactureDate: string = "2019-11-05" // BECAUSE THIS VALUE NEVER EVER CHANGE YOU CAN MAKE IT readonly TO AVOID MUTATION
  constructor(model, color, age) {
    this.model = model,
    this.color = color,
    this.age = age
  }

  addPeopleToPolicy(name: string) {
    this.peopleInPolicy.push(name)
  }

  getPolicy() {
    console.log(this.peopleInPolicy)
  }

}

const myJaguar = new Car("Jaguar", "Green", 5)
myJaguar.addPeopleToPolicy("Christopher") // WORKS WITH private KEY
// OR
myJaguar.peopleInPolicy.push("Christopher") // DOESN'T WORK WITH private KEY


myJaguar.getPolicy() // NOW YOU CAN ACCESS POLICY OUTSIDE THE CLASS CONSTRUCTOR BUT NOT MUTATE IT!
myJaguar.manufactureDate = "Hello" // CAN'T GET MUTATED BECAUSE IT'S readonly

/* private AND readonly CAN GET COMBINED
*
* privat readonly ... MAKES IT ACCESSIBLE ONLY INSIDE THE CLASS BUT CAN NOT BE CHANGED EITHER
*
* */



// IF YOU WANT TO RUN THE FOLLOWING CODE COMMENT OUT LINE 26 TO 62
// MAKE IT MORE CLEAN LIKE THIS
class Vehicle {
  private peopleInPolicy: string[] = []
  readonly manufactureDate: string = "2019-11-05"
  constructor(
    model: string,
    color: string,
    age: number,
  ) {}

  addPeopleToPolicy(name: string) {
    this.peopleInPolicy.push(name)
  }

  getPolicy() {
    console.log(this.peopleInPolicy)
  }

}

const myJag = new Vehicle("Jaguar", "Green", 5)

myJag.addPeopleToPolicy("Christopher")
myJag.getPolicy()