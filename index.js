// Required DOM elements
const form = document.getElementById('add-todo')
const input = form.querySelector('input')
const todoList = document.getElementById('todo-list')

// Add submit event listener to the form
form.addEventListener('submit', function (e) {

    // Prevent default form behavior
    e.preventDefault()
    //console.log confirmation on submission
    console.log('submitted!')

    // Get and validate input value
    const text = input.value.trim()
    if (text === '') return

    // Create new list item elements (li & button)
    const li = document.createElement('li')
    const button = document.createElement('button')
    button.textContent = text

    // Add click event to button
    button.addEventListener('click', function () {

        // If already done => remove item from list
        if (button.style.textDecoration === 'line-through') {
            li.remove()
            //console.log confirmation on removal
            console.log('removed!')
        }
        // Else => mark as done w/ strikethrough
        else {
            button.style.textDecoration = 'line-through';
            //console.log confirmation on completion
            console.log('completed!')
        }

    })

    // Append elements to the list
    li.appendChild(button)
    todoList.appendChild(li)

    // Clear the input field
    input.value = ''

})