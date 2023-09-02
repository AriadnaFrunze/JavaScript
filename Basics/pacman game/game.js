let pac_x = 1
let pac_y = 1

let coin_x = Math.round(1 + Math.random() * 9)
let coin_y = Math.round(1 + Math.random() * 9)

let bomb_x = Math.round(1 + Math.random() * 9)
let bomb_y = Math.round(1 + Math.random() * 9)

let score = 0
let HP = 100

let coin_state = false
let bomb_state = false

function action() {
     
    switch(event.key){
        case"ArrowUp":  
            if(pac_y > 1) {
                pac_y--
            } 
        break
        case"ArrowDown":
            if(pac_y < 10) {
                pac_y++
            } 
        break
        case "ArrowRight": 
            if (pac_x < 10) {
                pac_x++
            }
        break
        case "ArrowLeft":
            if (pac_x > 1) {
                pac_x--
            }
        break
    }
    if (pac_x == coin_x && pac_y == coin_y){
        score += 10
    }
    if (pac_x == bomb_x && pac_y == bomb_y){
        HP -= 20
    }
    // if (pac_x == coin_x && pac_y == coin_y && !coin_state){
    //     score += 10
    //     coin_state = true
    // }
    // if (pac_x == bomb_x && pac_y == bomb_y && !bomb_state){
    //     HP -= 20
    //     bomb_state = true
    // }
    renderMap()

}

function renderMap() {
    gameMap.innerHTML = ``
    for(let y = 1; y <= 10; y++){
        for(let x = 1; x <= 10; x++){

            if(x == pac_x && y == pac_y){
                gameMap.innerHTML += `<div class="pac"></div>`
            }
            else if (x == coin_x && y == coin_y) {
                gameMap.innerHTML += `<div class="coin"></div>`
            }
            else if (x == bomb_x && y == bomb_y) {
                gameMap.innerHTML += `<div class="bomb"></div>`
            }
            // else if (coin_state = true) {
            //     gameMap.innerHTML += `<div class=""></div>`
            // }
            // else if (bomb_state = true) {
            //     gameMap.innerHTML += `<div class=""></div>`
            // }
            else{
                gameMap.innerHTML += `<div class=""></div>`
            }

        }
    }
    gameScore.innerHTML = `Score : ${score}`
    HP.innerHTML = `Health Points : ${HP}`
}
renderMap()