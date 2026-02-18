let scoreEl=document.getElementById("Hscore")
let scoreGl=document.getElementById("Gscore")
let hCount=0;
let gCount=0;
function homePointAdd(point){
    hCount+=point
    scoreEl.textContent= hCount
}


function guestPointAdd(point){
    gCount+=point
    scoreGl.textContent= gCount
}
