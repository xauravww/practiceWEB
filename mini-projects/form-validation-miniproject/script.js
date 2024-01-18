const username = document.querySelector(".username")
const password = document.querySelector(".password")
const confirmPassword = document.querySelector(".confirm-password")
const terms = document.querySelector(".terms")
const submit = document.querySelector(".btn")
const form = document.querySelector(".form")
const ul = document.querySelector(".ul")
const error = document.querySelector(".error-container")

error.style.display = "none"

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const isValid = validate()

  if (isValid) {
    window.location.href = "./success.html"
    console.log("Form submitted")
  }
})

form.addEventListener("change", (e) => {
  if (
    e.target === username ||
    e.target === password ||
    e.target === confirmPassword ||
    e.target === terms
  ) {
    validate()
  }
})

function validate() {
  const errors = []

  if (
    username.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
  ) {
    errors.push("Please fill in all fields")
  }

  if (username.value.length < 6) {
    errors.push("Username must be at least 6 characters")
  }

  if (password.value.length < 8) {
    errors.push("Password must be at least 8 characters")
  }

  if (password.value !== confirmPassword.value) {
    errors.push("Password must match")
  }

  if (!terms.checked) {
    errors.push("Please accept all terms and conditions")
  }

  if (errors.length > 0) {
    error.style.display = "block"
    ul.innerHTML = errors.map((errMsg) => `<li>${errMsg}</li>`).join("")
    return false
  }

  error.style.display = "none"
  ul.innerHTML = ""
  return true
}
