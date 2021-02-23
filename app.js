//adding event listener using querySelector

let numberOfButtons = document.querySelectorAll("button").length;
console.log(numberOfButtons);

document.addEventListener("keypress", function(event){
    makeSound(event.key);
})

for (i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        let buttonInner = this.innerHTML
        // console.log(buttonInner);

        makeSound(buttonInner);


    });

}






function makeSound(key){
    switch (key) {
        case 'w':
            var audi1 = new Audio("sounds/tom-1.mp3")
            audi1.play();
            break;
    
        case 'e':
            var audi2 = new Audio("sounds/tom-2.mp3")
            audi2.play();
            break;
        case 'r':
            var audi3 = new Audio("sounds/tom-3.mp3")
            audi3.play();
            break;
        case 't':
            var audi4 = new Audio("sounds/tom-4.mp3")
            audi4.play();
            break;
        case 'y':
            var audi5= new Audio("sounds/crash.mp3")
            audi5.play();
            break;
    
        case 'o':
            var audi6 = new Audio("sounds/kick-bass.mp3")
            audi6.play();
            break;
        case 'u':
            var audi7 = new Audio("sounds/snare.mp3")
            audi7.play();
            break;
    
        default:console.log("sounds/crash.mp3");
            break;
    }
}













// let soundPlay=document.getElementsByClassName("drum");
// let soundList=Math.floor(Math.random()*4+1);
// let sounndSource="tom"+soundList+".mp3";
// let sound="sound/"+sounndSource;














//adding event listener using class names => GIVES SAME OUTPUT AS ABOVE

// let skim=document.getElementsByClassName('drum').length;

// for(i=0 ; i<=skim; i++){
//     document.getElementsByClassName('drum')[i].addEventListener('click', function(){
//         alert('clicked');
//     })

// }