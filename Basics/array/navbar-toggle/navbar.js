const items = [
    "BRAND",
    "Maxime",
    "Mollitia",
    "Quas",
    "Quis",
    "Quos",
    "Earum",
    "Rem",
    "Aperiam"
]
const TOTAL = 9
const BTN_WIDTH = 25
let eWidth = 0
let dropOpen = false

function adapt(){
    for (let n = TOTAL; n >= 1; n--){
        console.log(n)
        estimateWidth(n)
        if (eWidth <= innerWidth) {
            showItems(n)
            break
        }
        else {
            showItems(1)
        }
    }
}


function estimateWidth(n){
    let text = ``
    let pad = 0
    for (let i = 0; i < n; i++) {
       text += items[i]
       pad += 2 * 10
    }
    eWidth = 11.5 * text.length + pad + BTN_WIDTH
    console.log(eWidth)

    
}


function showItems(n){
    navbar.innerHTML =``
    for(let i=0; i<n; i++){
        navbar.innerHTML += `<a href="">${items[i]}</a>`
    }
    let remaining = TOTAL - n
    if(remaining>0){
        navbar.innerHTML += `<button onclick="showRemainingItems(${remaining})"><span>${remaining}</span>=</button>`
    }
    console.log("remaining", remaining)
}

function showRemainingItems(n) {
    if(dropOpen){
        navbarDrop.innerHTML = ``
        dropOpen=false
    }
    else {
        dropOpen=true
        for (let i = TOTAL - n; i < TOTAL; i++) {
            navbar.innerHTML += `<a href="">${items[i]}</a>`
        }
    }

}