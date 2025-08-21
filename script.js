let btnon = document.querySelector('#on')
let div = document.querySelector('#light')
let body = document.querySelector('body')
let h1 = document.querySelector('h1')

btnon.addEventListener('click', function () {
    div.style.backgroundColor = "yellow"
    div.style.border = "2px solid yellow"
    div.style.boxShadow = "1px 1px 55px yellow"
    body.style.backgroundColor = "#333"
    h1.style.color = "rgb(255, 255, 125)"
})

let btnoff = document.querySelector('#off')
btnoff.addEventListener('click', function () {
    div.style.backgroundColor = "transparent"
    div.style.border = "1px solid white"
    div.style.boxShadow = "none"
    body.style.backgroundColor = "black"
    h1.style.color = "white"
})


