let popChange = 1;
let popCount = 0;

var popSound = new Audio('sound/mixkit-message-pop-alert-2354 (mp3cut.net).mp3');

function imgChange() {
    var Image_Id = document.getElementById('chi');
    if (Image_Id.src.match("images/chi1.png")) {
        Image_Id.src = "images/chi2.png";
    }
    else {
        Image_Id.src = "images/chi1.png";
    }
}        

function press() {
    document.getElementById("chi").src="images/chi2.png";
    setTimeout(function (){
        popCount++;
        document.getElementById("counter").innerHTML = popCount;
        popSound.play();
    }, 100); 
        
}
  
function release() {
    document.getElementById("chi").src="images/chi1.png";
}

  function pop() {
    // if (popChange === 1) {
    //     popChange = 2;
    // } else {
    //     popChange = 1;
    // }
    // alert("pop");
    document.getElementById("chi").src="images/chi2.png";
}
// document.getElementById("chi").addEventListener("click", pop);

