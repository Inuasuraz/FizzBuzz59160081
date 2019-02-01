
class FizzBuzz{
    constructor(num){
        this.num = num
    }

checkNumber(num){
    if (num%3 == 0 && num%5 == 0) return "FizzBuzz"
    else if (num%3 == 0) return "Fizz"
    else if (num%5 == 0) return "Buzz"
    else return num
}

checkString(num){
    var numString = num.toString()

    if ((num%3 == 0 && num%5 == 0) || (numString.includes("3") && numString.includes("5"))) return "FizzBuzz"
    else if (num%3 == 0 || (numString.includes("3"))) return "Fizz"
    else if (num%5 == 0 || (numString.includes("5"))) return "Buzz"
    else return num
}

}

module.exports = FizzBuzz

// function fizzbuzz(num){
//     var numString = num.toString()

//     if ((num%3 == 0 && num%5 == 0) || (numString.includes("3") && numString.includes("5"))) return "FizzBuzz"
//     else if (num%3 == 0 || (numString.includes("3"))) return "Fizz"
//     else if (num%5 == 0 || (numString.includes("5"))) return "Buzz"
//     else return num
// }

// module.exports = FizzBuzz
