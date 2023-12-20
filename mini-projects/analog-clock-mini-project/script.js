const hour = document.querySelector("[data-hour]")
const minute = document.querySelector("[data-minute]")
const second = document.querySelector("[data-second]")

hour.style.setProperty("--rotation", 40)

setInterval(setClock, 1000)

function setClock() {
  const currentDate = new Date()
  //   console.log(currentDate)
  const secondRatio = currentDate.getSeconds() / 60

  const minuteRatio = (currentDate.getMinutes() + secondRatio) / 60
  const hourRatio = (currentDate.getHours() + minuteRatio) / 12
  //   console.log(secondRatio)
  setRotation(hour, hourRatio)
  setRotation(minute, minuteRatio)
  setRotation(second, secondRatio)
}

function setRotation(element, ratio) {
  element.style.setProperty("--rotation", ratio * 360)
}

setClock()
