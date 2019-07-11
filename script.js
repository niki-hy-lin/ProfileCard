function start() {
  var toggleSwitch = document.getElementById("slider");
  toggleSwitch.addEventListener("click", toggle);
};

function toggle() {
  var backColor = document.body.style.backgroundColor;
  document.body.style.backgroundColor = backColor === "black" ? "white" : "black";
};

start();

function pinkButton(){
  document.getElementById('card').className ='pinkCard';
  }

function orangeButton(){
  document.getElementById('card').className = 'orangeCard';
  }

function yellowButton(){
  document.getElementById('card').className = 'yellowCard';
  }