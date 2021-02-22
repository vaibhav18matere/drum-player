//adding event listener using querySelector

let numberOfButtons = document.querySelectorAll("button").length;


for (i = 0; i <= numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        
        var audi=new Audio("sounds/tom-1.mp3")
        audi.play();
    });

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