const IMAGES = [
    "first.jpg",  //0
    "second.jpg", //1
    "third.jpg"   //2
]
const TITLES  = [
    "Flowers",
    "House in Greece",
    "A mansion in the middle of nowhere"
]
let currentIndex = 0
const EFECTS = [
    "animate__bounceInLeft",
    "animate__bounceInRight",
    "animate__fadeInLeft",
    "animate__fadeInRight"
]
function showImage(n){
    let i = Math.round(Math.random() * 3)
    carouselSlides.innerHTML = `<img src="${IMAGES[n]}" class="animate__animated ${EFECTS[i]}"/>`
}
function showTitle(n){
    carouselTitles.innerHTML = `
    <h4>${TITLES[n]}</h4>
    `
    
}

function showIndicators(n){
    carouselIndicators.innerHTML =``
    for(let i=0; i<IMAGES.length; i++){
        if(i==n){
            carouselIndicators.innerHTML = `+`
        }
        else{
            carouselIndicators.innerHTML = `-`
        }
    }
}

function next(){
    if (currentIndex < 2){
        currentIndex++
        showImage(currentIndex)
        showIndicators(currentIndex)
        showTitle(currentIndex)
    }
}
function prev(){
    if(currentIndex > 0){
        currentIndex--
        showImage(currentIndex)
        showIndicators(currentIndex)
        showTitle(currentIndex)
    }
}



showImage(currentIndex)
showIndicators(currentIndex)
showTitle(currentIndex)


function play(){
    setInterval(next,3000)
}