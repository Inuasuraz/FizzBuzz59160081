const FizzBuzz = require("./FizzBuzz")

//All Test Question 1

for (let i = 1; i <= 100; i++) {

    const fizzbuzz = new FizzBuzz(i);

    if (i%3 == 0 && i%5 == 0)  test("%3 and %5"+console.log("FizzBuzz"), () => { expect(fizzbuzz.checkNumber(i)).toBe("FizzBuzz") })

    else if (i%3 == 0 ) test("%3"+console.log("Fizz"), () => { expect(fizzbuzz.checkNumber(i)).toBe("Fizz")  })

    else if (i%5 == 0 ) test("%5"+console.log("Buzz"), () => {  expect(fizzbuzz.checkNumber(i)).toBe("Buzz") })

    else test("other answer"+console.log(i), () => {  expect(fizzbuzz.checkNumber(i)).toBe(i) })

}

// All Test Question 2

for (let i = 1 ; i <= 100; i++){

    const fizzbuzz = new FizzBuzz(i)

    var numString = i.toString()

    if ((i%3 == 0 && i%5 == 0) || (numString.includes("3") && numString.includes("5")))  test("%3 and %5 with include"+console.log("FizzBuzz"), () => { expect(fizzbuzz.checkString(i)).toBe("FizzBuzz") })

    else if (i%3 == 0 || (numString.includes("3"))) test("%3 with include"+console.log("Fizz"), () => { expect(fizzbuzz.checkString(i)).toBe("Fizz")  })

    else if (i%5 == 0 || (numString.includes("5"))) test("%5 with include"+console.log("Buzz"), () => {  expect(fizzbuzz.checkString(i)).toBe("Buzz") })

    else test("other answer"+console.log(i), () => {  expect(fizzbuzz.checkString(i)).toBe(i) })

}
