// TYPE INFERENCE

// INFERRED height TO number
let height = 180

height = "200"

// MANUAL GIVEN TYPE
let height2: number = 120

height2 = "200"

// USE INFERRED TYPE AS MUCH AS POSSIBLE (BUT ASSIGN A VALUE TO IT)

// IN CASE YOU HAVE A VARIABLE WITHOUT A VALUE:

// TYPE OF ANY
let amount

// NO ERRORS AT ALL
amount = 120
amount = "Text"
amount = true
amount = {}
amount = []

// INSTEAD DO IT LIKE THIS:
let amount2: number

// ERRORS ALL THE WAY
amount2 = 120
amount2 = "Text"
amount2 = true
amount2 = {}
amount2 = []

// MULTIPLE TYPES

let amount3: number | string

// NO ERRORS FOR THE FIRST TWO TYPES
amount3 = 120
amount3 = "Text"

// ERROR BEGINS HERE
amount3 = true
amount3 = {}
amount3 = []

