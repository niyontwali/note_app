const numbers = [1,2,3,4,5,6,7,8]
// I want a new array containing only  only even numbers


const evenNumbers = numbers.find((number) => {
  return number % 2 === 0
})

// const evenNumbers = numbers.map((number) => {

// })

// const evenNumbers = numbers.filter ((number) => {
//   let newArray = []
//   // console.log(number % 2 === 0)
//   // step 1
//   if (number % 2 === 0) {
//     // step 2 - find ways to push those numbers in an array
//     return newArray.push(number)

//   }
// })

console.log(evenNumbers)
