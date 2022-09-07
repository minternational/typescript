// ARRAYS
const arrayOfStrings = [
  "string1", "string2", "string3"
]

// IT'S LIKE
const arrayOfStrings2: string[] = ["string1", "string2", "string3"]

arrayOfStrings.push("string4")
arrayOfStrings.push(24) // EXPECTS A string ONLY

// WORKAROUND
const arrayOfStringsAndBooleans: (string | boolean)[] = ["string1", true, "string2", false]

arrayOfStringsAndBooleans.push("string3")
arrayOfStringsAndBooleans.push(true)
arrayOfStringsAndBooleans.push(24) // EXPECTS A boolean OR A string ONLY


// ARRAY OF OBJECTS
const arrayOfObjects: { name: string, age: number, awesome: boolean }[] = []

arrayOfObjects.push({
  name: "Christopher",
  age: 36,
  awesome: true
})


// ARRAY OF ARRAYS
const arrayOfArrays = [["string1", true, 24], ["string1.1", false]]

// IT'S LIKE:
const arrayOfArrays2: (string | boolean | number)[][] = []