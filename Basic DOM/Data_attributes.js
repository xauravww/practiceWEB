// const test = document.querySelector("[data-test]")

// test.dataset.testTwo = "555"
// console.log(test.dataset.test)

const btns = document.querySelectorAll("button")

btns.forEach((button) => {
  button.addEventListener("click", () => {
    const currentClicks = parseInt(button.dataset.clicks)
    button.dataset.clicks = currentClicks + 1
  })
})
