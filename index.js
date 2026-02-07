// Required DOM elements
const form = document.getElementById('add-todo')
const input = form.querySelector('input')
const todoList = document.getElementById('todo-list')

// Add submit event listener to the form


// Prevent default form behavior
form.addEventListener('submit', function (e)) {
  e.preventDefault()
}
//console.log confirmation
console.log('submitted')

// Get and validate input value


// Create new list item elements (li + button)


// Add click event to button
    // If already done → remove item from list
    // Else → mark as done w/ strikethrough


// Append elements to the list


// Clear the input field
