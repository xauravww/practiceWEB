const modal = document.getElementById("modal")
const openModal = document.getElementById("open-modal-btn")
const closeModal = document.getElementById("close-modal-btn")
const overlay = document.getElementById("overlay")

openModal.addEventListener("click", () => {
  modal.classList.add("open")
  //   console.log("modal open")
  overlay.classList.add("open")
})

closeModal.addEventListener("click", closeModalFunc)
overlay.addEventListener("click", closeModalFunc)

function closeModalFunc() {
  modal.classList.remove("open")
  overlay.classList.remove("open")
}
