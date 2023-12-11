var btn = document.querySelectorAll(".drum").length

for(var i = 0; i < btn; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", click)
  
}
function click() {
    var ChangSound = this.innerHTML;
    keyClick(ChangSound)
   
}
document.addEventListener("keypress", test);

function test(e) {
   keyClick(e.key)
}
function keyClick(key) {
    switch (key) {
        case "A":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
            case "P":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
            case "U":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
            case "G":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
            case "I":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;
            case "R":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
             case "I":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;
    
        default: console.log("sound is not defind")
            
    }
    
}