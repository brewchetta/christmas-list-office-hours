console.log("Hey I'm loaded up!")

const form = document.querySelector('#new-item-form')
const input = form.querySelector('input')
const xmasList = document.querySelector('ul')

const colors = ['green', 'red', 'blue', 'orange', 'yellow']
let currentColor = 0

// this function gets a random color from the colors array
function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

// this function cycles through colors in the colors array
function nextColor() {
  currentColor += 1
  if (currentColor >= colors.length) {
    currentColor = 0
  }
  return colors[currentColor]
}

// this is a callback function for when the form submits
function handleSubmit(event) {
  // prevents the form from posting
  event.preventDefault()

  // get the item's text
  const newItemText = input.value

  // create a new element to add to the list
  let li = document.createElement('li')
  li.style.color = nextColor()
  li.innerHTML = newItemText
  xmasList.appendChild(li)

  // add a remove button to the new item
  const xButton = document.createElement('img')
  xButton.src = "images/red-x.png"
  xButton.className = "x-button"
  xButton.alt = "remove"
  xButton.addEventListener('click', e => li.remove() )
  li.appendChild(xButton)

  input.value = ""
}

// we actually attach the event listener here
form.addEventListener("submit", handleSubmit)

// <img class="x-button" src="images/red-x.png" alt="we shouldn't see this">
