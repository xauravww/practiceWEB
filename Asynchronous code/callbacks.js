// In JavaScript, a callback is a function that is passed as an argument to another function and is executed after the completion of that function's task. It's a way to handle asynchronous operations, such as when data is loaded from a server or a user interacts with a webpage. Callbacks are used to ensure that certain code only runs when the desired operation has finished, making it a fundamental concept for managing asynchronous programming in JavaScript.

// let's create callback hell means multiple nested callbacks
// they can be handled easily using Promises

setTimeout(() => {
  console.log("executed 1st")
  setTimeout(() => {
    console.log("executed 2nd")
    setTimeout(() => {
      console.log("executed 3rd")
    }, 5000)
  }, 800)
}, 3000)
