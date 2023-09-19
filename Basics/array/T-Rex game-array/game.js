// LEGEND:
// 0 - empty
// 1 - T-REX
// 2 - cactus
let gameMap = [0, 2, 0, 0, 1, 0, 0, 2, 0, 2]
let ti = 4
let dir = "left"

function drawMap(){
    map.innerHTML =``
        for(let i = 0; i < gameMap.length; i++){
        if(gameMap[i] == 0 ){
            map.innerHTML += `<div></div>`
        }
        else if(gameMap[i] == 1 ){
            map.innerHTML += `<div class="t-rex ${dir}"></div>`
        }
        else if(gameMap[i] == 2 ){
            map.innerHTML += `<div class="cactus"></div>`
        }
        
    }
}
drawMap()

function action() {
    switch(event.key){
        case "ArrowLeft" :
                gameMap[ti] = 0
                ti--
                gameMap[ti] = 1
                dir = "left"
                drawMap()
            break
        case "ArrowRight" :
                gameMap[ti] = 0
                ti++
                gameMap[ti] = 1
                dir = "right"
                drawMap()
            break
    }
}
