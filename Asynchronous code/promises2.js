// handling callback hell with promises

// setTimeout(() => {
//   console.log("1")
//   setTimeout(() => {
//     console.log("2")
//     setTimeout(() => {
//       console.log("3")
//     }, 250)
//   }, 250)
// }, 250)

// readability improved

setTimeoutPromise(250)
  .then(() => {
    console.log("1")
    return setTimeoutPromise(250)
  })
  .then(() => {
    console.log("2")
    return setTimeoutPromise(250)
  })
  .then(() => {
    console.log("3")
  })

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    // setTimeout(resolve("msg passed"), duration)
    setTimeout(resolve, duration)
  })
}
