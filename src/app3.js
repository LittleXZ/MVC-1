import './app3.css'

let html = document.createElement(`section`)
html.innerHTML = `<div id="app3">
        <div id="trans"></div>
    </div>`
document.querySelector(`#wrap`).appendChild(html)

let trans = document.querySelector(`#trans`)
trans.onclick = ()=>{
    if (trans.classList.contains(`active`)){
        trans.classList.remove(`active`)
    }else {
        trans.classList.add(`active`)
    }
}