function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    // setTimeout(resolve("msg passed"), duration)
    setTimeout(resolve, duration)
  })
}

setTimeoutPromise(250)
  .then((msg) => {
    // console.log(msg)
    console.log("executed successfully")
  })
  .catch((err) => {})
