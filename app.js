let popChange = 1;
let popCount = 0;

var popSound = new Audio('sound/mixkit-message-pop-alert-2354 (mp3cut.net).mp3');

// function imgChange() {
//     var Image_Id = document.getElementById('chi');
//     if (Image_Id.src.match("images/chi1.png")) {
//         Image_Id.src = "images/chi2.png";
//     }
//     else {
//         Image_Id.src = "images/chi1.png";
//     }
// }        

function press() {
    document.getElementById("chi").src="./images/chi2.png";
    popCount++;
    document.getElementById("counter").innerHTML = popCount;
    popSound.play();
    
    // setTimeout(function (){
    //     document.getElementById("chi").src="images/chi1.png";
    // }, 100); 
        
}
  
function release() {
    // setTimeout(function (){
        document.getElementById("chi").src="./images/chi1.png";
    // }, 100); 
    // document.getElementById("chi").src="images/chi1.png";
}

// document.getElementById("chi").addEventListener("click", pop);

