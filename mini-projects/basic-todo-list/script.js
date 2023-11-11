const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
const taskContainer = document.querySelector(".task-container")

btn.addEventListener("click", () => {
  //   console.log("CLicked")

  const task = document.createElement("div")
  task.innerText = input.value
  task.classList.add("task-list-item")

  taskContainer.appendChild(task)

  //clear input
  console.log(task)
  input.value = ""

  //delete the  item when clicked

  task.addEventListener("click", () => {
    // taskContainer.removeChild(task)
    // or
    task.remove()
  })
})
