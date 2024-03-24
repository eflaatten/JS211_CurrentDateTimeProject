// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date().toLocaleString())

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const num = 5

const convertNum = (x) => {
  return x.toString()
}

console.log(convertNum(num))

// Write a JavaScript program to convert a string to the number.

const string = "15"

const convertString = (y) => {
  return parseInt(y)
}

console.log(convertString(string))

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

const checkDataType = (data) => {
  // return typeof type
  return typeof data
}

console.log(checkDataType(true))
console.log(checkDataType(null))
console.log(checkDataType(NaN))
console.log(checkDataType())
console.log(checkDataType(8))
console.log(checkDataType("Hello"))

// Write a JavaScript program that adds 2 numbers together.

const addNums = () => {
  let x = document.getElementById('numOne').value
  let y = document.getElementById('numTwo').value

  let result = Number(x) + Number(y)

  document.getElementById('result').innerHTML = result
  return result
}

// Write a JavaScript program that runs only when 2 things are true.


const bothAreTrue = (x, y) => {
  if(x && y){
    return true
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneAreTrue = (x, y) => {
  if(x || y){
    return true
  }
}

// Write a JavaScript program that runs when both things are not true.  

const noneAreTrue = (x, y) => {
  if(!x && !y){
    return true
  }
}

console.log(bothAreTrue(5, 5))
console.log(oneAreTrue(15, 0))
console.log(noneAreTrue(0, 0))

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
