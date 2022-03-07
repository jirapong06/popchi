let popChange = 1;
let popCount = 0;

var popSound = new Audio('sound/mixkit-message-pop-alert-2354 (mp3cut.net).mp3');

function press() {
    document.getElementById("chi").src="images/chi2.png";
    popSound.play();
    popCount++;
    document.getElementById("counter").innerHTML = popCount;
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

