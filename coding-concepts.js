// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
// console.log(cohort.split(" "))

// a) Your answer: ["Hotel", "2023"]
// b) Verify and explain: ["Hotel", "2023"] the split method splits the string into an array without changing the original string

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 //console.log(greeter("LEARN Student"))

// a) Your answer: undefined 
// b) Verify and explain: undefined there is no return in the function

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
 //console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain:[11, 13, 15] using the .filter it will iterate through the array with only values that satisfy the condition

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 //console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: JavaScript you're calling the class (myCodingSkills) then the object (languages) indexing [0] which calls javascript since arrays start from 0

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: student: George, cohort: Hotel, year: 2023
// b) Verify and explain: Learn { student: 'George', cohort: 'Hotel', year: 2023 } I was right and wrong at the same time I forgot Learn and the brackets. Creating a new class LearnStudent then replacing name with George so you're calling the class and it's objects. just replacing the name since it's an open variable.
