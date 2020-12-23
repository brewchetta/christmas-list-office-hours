console.log("Hey I'm loaded up!")

const form = document.querySelector('#new-item-form')
const input = form.querySelector('input')
const xmasList = document.querySelector('ul')

function handleSubmit(event) {
  event.preventDefault()

  const newItemText = input.value

  let li = document.createElement('li')
  li.innerHTML = newItemText
  xmasList.appendChild(li)

  const xButton = document.createElement('img')
  xButton.src = "images/red-x.png"
  xButton.className = "x-button"
  xButton.alt = "remove"
  xButton.addEventListener('click', e => li.remove() )
  li.appendChild(xButton)

  input.value = ""
}

form.addEventListener("submit", handleSubmit)

// <img class="x-button" src="images/red-x.png" alt="we shouldn't see this">
