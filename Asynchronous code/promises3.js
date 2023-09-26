//craeting promise version of addEventListener

const button = document.querySelector("button")

function addEventListenerPromise(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, (e) => {
      resolve(e)
    })
  })
}

addEventListenerPromise(button, "click")
  .then((e) => {
    console.log("clicked")
    console.log(e)
  })
  .catch((err) => {
    console.error(err)
  })
