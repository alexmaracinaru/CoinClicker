console.log("test");
document.querySelector("#coin_container1").classList.add("falling");
document.querySelector("#coin_container2").classList.add("falling");
document.querySelector("#coin_container2").classList.add("speed1)");
document.querySelector("#coin_container1").classList.add("paused");
document.querySelector("#coin_container3 .sprite").classList.add("zoom");
document.querySelector("#bomb_container").classList.add("pause");
document.querySelector("#bomb_container .sprite").classList.add("explode");
document.querySelector("#game").classList.add("shake");
document.querySelector("#bomb_container").classList.add("falling");
document.querySelector("#bomb_container").classList.add("zoom");
document.querySelector("#bomb_container").classList.remove("explode");
document.querySelector("#bomb_container").classList.remove("paused");



function startCoins() {
  console.log("startCoins");
  document.querySelector("#coin_container1").classList.add("falling");
  document.querySelector("#coin_container2").classList.add("falling");
  document.querySelector("#coin_container3").classList.add("falling");
  document.querySelector("#coin_container1").classList.add("speed1");
  document.querySelector("#coin_container2").classList.add("speed2");
  document.querySelector("#coin_container3").classList.add("speed3");
}
startCoins()

function startBomb() {
  console.log("startBomb");
  document.querySelector("#bomb_container").classList.add("zoom");
  document - querySelector("#bomb_container").classList.add("falling");
}

function pauseCoin1() {
  console.log("pauseCoin1");
  document.querySelector("#coin_container1").classList.add("paused");
}

function coin2Clicked() {
  console.log("coin2Clicked");
  document.querySelector("#coin_container2").classList.add("paused");
  document.querySelector("#coin_container2").classList.add("zoom");
  document
    .querySelector("#coin_contained2")
    .addEventListener("click", coin2clicked);
}

function bombClicked() {
  console.log("bombClicked");
  document.querySelector("#bomb_container").classList.add("paused");
  document.querySelector("#bomb_container").classList.add("explode");
  document
    .querySelector("#coin_contained2")
    .addEventListener("click", bombClicked);
}

function explosion() {
  console.log("explosion");
  document.querySelector("#bomb_container").classList.add("shake");
}

function bombStart() {
  console.log("bombStart");
  document.querySelector("#bomb_container").classList.remove("explode");
  document.querySelector("#bomb_container").classList.remove("paused");
}

//ask Adam about this.

function loseEnergy() {
  energyLevel -= 10;
  energy.textContent = energyLevel;
  console.log("energyLevel: ") + energyLevel;
  if (energyLevel == 0) {
    gameOver();
  } else {
    restartKenny();
  }
}
function newposition() {}
