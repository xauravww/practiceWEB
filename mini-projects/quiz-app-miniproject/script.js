const ANSWER_LIST = ["Narendra Modi", "Yellow", "Three", "Delhi"]

const btn = document.querySelector(".btn")
const answer = document.querySelectorAll(".answer")
const successMsg = document.querySelector(".success-msg")
const answerWrapperSingle = document.querySelectorAll(".value-wrapper")
btn.addEventListener("click", (e) => {
  let correctCounter = 0
  e.preventDefault()
  console.log("clicked")
  const checked = document.querySelectorAll(".answer:checked")
  console.log(Array.from(checked).map((item) => item.value))

  const checkedArray = Array.from(checked)

  checkedArray.forEach((item, index) => {
    if (item.value === ANSWER_LIST[index]) {
      correctCounter++
      const answersBox = item.closest(".answers-box")

      const quizItem = answersBox.previousElementSibling
      console.log("greenElement", quizItem)
      quizItem.classList.remove("wrong")
      quizItem.classList.add("correct")
      //   greenElement.classList.add("correct")
    } else {
      const answersBox = item.closest(".answers-box")
      const quizItem = answersBox.previousElementSibling
      quizItem.classList.remove("correct")
      quizItem.classList.add("wrong")
      console.log("red", quizItem)
    }
  })
  if (correctCounter === ANSWER_LIST.length) {
    successMsg.classList.add("show")
    setTimeout(() => {
      successMsg.classList.remove("show")
    }, 4000)
  }
})

answerWrapperSingle.forEach((item) => {
  item.addEventListener("click", (e) => {
    const toCheckItem = e.target.children[1]
    toCheckItem.checked = true
    console.log(toCheckItem)
  })
})

console.log(answerWrapperSingle)
