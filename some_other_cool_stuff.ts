// UNION TYPE
let numberOrStringOrBoolean: string | number | boolean = "Christopher"

numberOrStringOrBoolean = 25
numberOrStringOrBoolean = true

let array: (string | number | {})[] = ["", 4, null, undefined, {}]

let object: {
  hello: string | number
}

// LITERAL TYPES

let rainbowColor: "red" | "orange" | "yellow" | "blue" | 54 | ["color"] = "red"

rainbowColor = "orange"
rainbowColor = "yellow"
rainbowColor = 54
rainbowColor = ["color"]

rainbowColor = "pink" // NET SPECIFIED IN LINE 15
rainbowColor = 24 // NET SPECIFIED IN LINE 15
rainbowColor = { name: "Christopher", age: 36} // NET SPECIFIED IN LINE 15


// ENUM

enum RainbowTypes { // NOT REALLY AN OBJECT
  RED,
  ORANGE,
  YELLOW,
  BLUE,
}

const rainbowColors: RainbowTypes = RainbowTypes.RED


// OPTIONAL

let obj: {
  property: string,
  property2?: number // IT DOESN'T NEED TO BE PROVIDED IN THE OBJECT. ? MEANS IT CAN BE UNDEFINED
} = {property: "String"}