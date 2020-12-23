console.log("Hey I'm loaded up!")

const form = document.querySelector('#new-item-form')
const input = form.querySelector('input')
const xmasList = document.querySelector('ul')

form.addEventListener("submit", function(event) {
  event.preventDefault()
  const newItemText = input.value
  let li = document.createElement('li')
  li.innerHTML = newItemText
  xmasList.appendChild(li)
  input.value = ""
})

// let ul = document.createElement('ul')
//
// let li = document.createElement('li')
// li.innerHTML = (i + 1).toString()
// ul.appendChild(li)
//
// element.appendChild(ul)
