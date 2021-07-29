let btStart = document.getElementById('btStart')
let rules = document.getElementById('rules')
let scorePlace = document.getElementById('score')
let container = document.querySelector('.container')
let btRestart = document.querySelector('.restart')
let title = document.getElementById('title')

btStart.addEventListener('click', ()=>{
    btStart.style.display = 'none'
    rules.style.display = 'none'
    scorePlace.style.display = 'flex'
    container.style.display = 'flex'
    btRestart.style.display = 'flex'
    title.style.display = 'none'
})

