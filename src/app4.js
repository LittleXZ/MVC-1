import './app4.css'

let yuan = document.querySelector(`#yuan`)
yuan.onmouseover = ()=>{
    yuan.classList.add(`active`)
}
yuan.onmouseout = ()=>{
    yuan.classList.remove(`active`)
}