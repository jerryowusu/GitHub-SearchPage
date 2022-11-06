const people = [
    { name: 'adri'},
    { name: 'becky'},
    { name: 'chris'},
    { name: 'dillon'},
    { name: 'evan'},
    { name: 'frank'},
    { name: 'georgette'},
    { name: 'hugh'},
    { name: 'igor'},
    { name: 'jacoby'},
    { name: 'kristina'},
    { name: 'lemony'},
    { name: 'matilda'},
    { name: 'nile'},
    { name: 'ophelia'},
    { name: 'patrick'},
    { name: 'quincy'},
    { name: 'roslyn'},
    { name: 'solene'},
    { name: 'timothy'},
    { name: 'uff'},
    { name: 'violet'},
    { name: 'wyatt'},
    { name: 'x'},
    { name: 'yadri'},
    { name: 'zack'},
]


const searchInput = document.querySelector('.input')
// console.log(searchInput)

searchInput.addEventListener("input", (e) => {
    let value = e.target.value

    if(value && value.trim().length > 0) {
        value = value.trim().toLowerCase()

        renderList(people.filter(person => {
            return person.name.includes(value)
        }))
} else {
    clearList()
}

})

const clearButton = document.querySelector('#clear')
clearButton.addEventListener("click", () => {
    clearList()
})

function clearList() {
   list.innerHTML = "";
}


function renderList(results) {
    clearList()
    for(const person of results) {
        const resultItem = document.createElement("li")
        resultItem.classList.add("result-item")
        const text = document.createTextNode(person.name)
        resultItem.appendChild(text)
        list.appendChild(resultItem)
    }

    if (results.length === 0) {
        noResults()
    }
}

function noResults() {
    const error = document.createElement('li')

    error.classList.add('error-message')

    const text = document.createTextNode('No results found. Sorry!')

    error.appendChild(text)

    list.appendChild(error)
}

