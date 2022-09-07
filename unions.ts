// UNIONS / UNION TYPES

// mathmaticion COULD BE A string OR A number
let mathematician = Math.random() < 0.5 ? 42 : "Euclid"
// WITH THIS YOU CAN ONLY USE METHODS WHICH WORKS ON strings AND number

// OR

let mathematician2: string | null = null

if (Math.random() > 0.5) {
  mathematician2 = 42
  mathematician2 = "String"
}

// NARROWING

let footballplayer: number | string

if (typeof footballplayer === "number") {

}

// ! MEANS = IT IS DEFINITELY NOT undefined
// ? MEANS = IT COULD BE undefined

// LITERAL TYPES

let footballplayer2: "Ronaldo"

footballplayer2 = "Pele"

// footballplayer2 COULD ONLY BE RONALDO (IT IS DECLARED WITH : NOT WITH =)

// TYPE ALIASES

// VERY EXHAUSTING TO TYPE EVERYTHING DOWN
// let firstServerStatus: boolean | number | string
// let secondServerStatus: boolean | number | string

// BETTER WAY:
type ServerStatus = boolean | number | string

let firstServerStatus: ServerStatus
let secondServerStatus: ServerStatus

// OR COMBINE IT:

type UndefinedServerStatus = undefined

let firstServerStatus2: ServerStatus | UndefinedServerStatus
let secondServerStatus2: ServerStatus | UndefinedServerStatus