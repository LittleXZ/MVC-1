import './app1.css'

let html = document.createElement(`section`)
html.innerHTML = `<div id="app1">
        <span id="text">100</span>
        <button id="jia">+1</button>
        <button id="jian">-1</button>
        <button id="cheng">x2</button>
        <button id="chu">÷2</button>
    </div>`
document.querySelector(`#wrap`).appendChild(html)

let app1_n
let app1 = document.querySelector(`#app1`)
let text = document.querySelector(`#text`)
let jia = document.querySelector(`#jia`)
let jian = document.querySelector(`#jian`)
let cheng = document.querySelector(`#cheng`)
let chu = document.querySelector(`#chu`)
let key = localStorage.getItem(`n`)

app1_n = Number(key || 100)
text.innerText = app1_n
let output = ()=>{
    localStorage.setItem(`n`,app1_n)
    text.innerText = app1_n
}
app1.addEventListener(`click`,(e)=>{
    if(e.target === jia){
        app1_n += 1
    }else if(e.target === jian){
        app1_n -= 1
    }else if(e.target === cheng){
        app1_n = app1_n*2
    }else if(e.target === chu){
        app1_n = app1_n/2
    }
    output()
})

