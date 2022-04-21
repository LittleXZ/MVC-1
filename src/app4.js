import './app4.css'

let html = document.createElement(`section`)
html.innerHTML = `<div id="app4">
        <div id="yuan"></div>
    </div>`
document.querySelector(`#wrap`).appendChild(html)

let yuan = document.querySelector(`#yuan`)
yuan.onmouseover = ()=>{
    yuan.classList.add(`active`)
}
yuan.onmouseout = ()=>{
    yuan.classList.remove(`active`)
}