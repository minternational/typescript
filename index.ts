// NUMBER TYPE
let height: number = 180

height = 170

// FAIL BECAUSE TEXT IS NOT A NUMBER DECLARED IN LINE 5
height = "test"

// NO SPECIFIC TS DECLARATION
let age = 24

// ERROR EVEN WITHOUT SPECIFIC DECLARATION
// THIS IS INFERRED BECAUSE FIRST DECLARATION TO AGE
// IS A NUMBER AND TS INFERRING THE NUMBER TYPE
// AUTOMATICALLY EVEN WITHOUT DECLARATION
age = "24"

// ==================================================

// STRING TYPE
let myName: string = "Christopher"

myName = true
myName = "Christopher".length
myName = "Christopher".length === 0

// ==================================================

// BOOLEAN TYPE
let isAwesome = true

isAwesome = "Christopher".length === 0
isAwesome = 24

// ==================================================


