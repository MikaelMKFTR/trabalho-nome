const nomes = ["Mikael", "Avelino", "Lima"]
nomes.push("Silva")
const lista = document.getElementById("lista")

for (let nome of nomes){
    lista.innerHTML += `<li>${nome}</li>`
}

const form = document.getElementById("form")
const input = document.getElementById("nome")

form.addEventListener("submit", function(event){
    event.preventDefault()
    nomes.push(input.value)
    lista.innerHTML += `<li>${input.value}</li>`
    input.value = ""
})
