// const grandpa = document.querySelector(".grand-parent")

// Selecting from grandpa to child elements
// grandpa.style.color = "red"

// const parent1 = grandpa.children[0]

// console.log(parent1)
// parent1.style.color = "green"

// const parent2 = parent1.nextElementSibling
// parent2.style.color = "blue"

// parent1.children[1].style.color = "purple"

//--------------- Selecting from child elements to Grandpa

const child1 = document.querySelector(".child-one")
child1.style.color = "red"

const parent1 = child1.parentElement

parent1.style.color = "green"
parent1.nextElementSibling.style.color = "darkgreen"

const grandpa = child1.closest(".grand-parent")
grandpa.style.color = "red"
