const input = document.getElementById("inputField")
const submit = document.getElementById("submit")



submit.addEventListener("click", (event) => {
    event.preventDefault()
    const text = input.value
    const response = document.getElementById("response")
    const area = document.createElement("p")
    area.className = "answer"
    area.textContent = text
    response.appendChild(area)

})