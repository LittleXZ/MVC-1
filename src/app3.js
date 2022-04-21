import './app3.css'

let trans = document.querySelector(`#trans`)
trans.onclick = ()=>{
    if (trans.classList.contains(`active`)){
        trans.classList.remove(`active`)
    }else {
        trans.classList.add(`active`)
    }
}