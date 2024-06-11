const btn = document.getElementById('btn')
const body = document.body
let textbaru

btn.style.background = 'white'

function newtext() {
    btn.style.background = 'blue'
    textbaru = document.createElement('p')
    textbaru.textContent = 'halo ak eko'
    body.append(textbaru)
}
// const textbaru = document.createElement('p')
function gantiwarna() {
    btn.style.background = 'red'
        textbaru.style.color = 'aqua'
   
}