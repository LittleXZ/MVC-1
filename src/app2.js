import './app2.css'

let html = document.createElement(`section`)
html.innerHTML = `<div id="app2">
        <div id="navbar">
            <div id="tag1" class="tag tag-style">tag1</div>
            <div id="tag2" class="tag tag-style">tag2</div>
        </div>
        <div id="wrap-content">
            <div id="content1" class="content">content1</div>
            <div id="content2" class="content">content2</div>
        </div>
    </div>`
document.querySelector(`#wrap`).appendChild(html)

let navbar = document.querySelector(`#navbar`)
let wrapContent = document.querySelector(`#wrap-content`)
let index = localStorage.getItem(`index`) || 1
document.querySelector(`#content${index}`).classList.add(`active`)
document.querySelector(`#tag${index}`).classList.add(`active`)

navbar.childNodes.forEach((e)=>{
    if (e.nodeName === `#text`){
        navbar.removeChild(e)
    }
})
wrapContent.childNodes.forEach((e)=>{
    if (e.nodeName === `#text`){
        wrapContent.removeChild(e)
    }
})

navbar.addEventListener(`click`,(e)=>{
    let ele = e.currentTarget
    for (let i=0; i<ele.childNodes.length;i++){
        ele.childNodes[i].classList.remove(`active`)
    }
    for (let i=0; i<wrapContent.childNodes.length;i++){
        wrapContent.childNodes[i].classList.remove(`active`)
    }
    e.target.classList.add(`active`)
    index = Array.prototype.indexOf.call(ele.childNodes,e.target);
    index += 1
    document.querySelector(`#content${index}`).classList.add(`active`)
    localStorage.setItem(`index`,index)
})
