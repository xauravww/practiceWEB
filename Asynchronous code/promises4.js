Promise.all([Promise.resolve("1"), Promise.reject("2"), Promise.reject("3")])
  .then((msgs) => {
    console.log(msgs)
  })
  .catch((err) => {
    console.error(err)
  })

// Promise.all[ ] stops at first failed case

Promise.any([Promise.reject("1"), Promise.resolve("2"), Promise.reject("3")])
  .then((msgs) => {
    console.log(msgs)
  })
  .catch((err) => {
    console.error(err)
  })

//Promise.any[] stops where it found atleast 1 resolve

Promise.race([Promise.reject("1"), Promise.reject("2"), Promise.resolve("3")])
  .then((msgs) => {
    console.log(msgs)
  })
  .catch((err) => {
    console.error(err)
  })

//Promise.race[] only check at 1st position

Promise.allSettled([
  Promise.reject("1"),
  Promise.reject("2"),
  Promise.resolve("3")
])
  .then((msgs) => {
    console.log(msgs)
  })
  .catch((err) => {
    console.error(err)
  })

//   Promise.allSettled[] returns a arrya even if any one failed or not displaying reasons and success/failure of all

Promise.allSettled([
  Promise.reject("1"),
  Promise.reject("2"),
  Promise.resolve("3")
])
  .then((msgs) => {
    console.log(msgs)
  })
  .catch((err) => {
    console.error(err)
  })
  .finally(() => {
    console.log("always executes but don't take any parameters")
  })
