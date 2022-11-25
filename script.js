var spieler = document.querySelector(".player");
spieler.style.top = "0px";

var spielfeld = document.querySelector(".playground");

var timer = new Timer(30);

function steuerung() {
  if (keyboard(38)) {
    spieler.style.top = parseInt(spieler.style.top) + 5 + "px";
  }
  if (keyboard(40)) {
    spieler.style.top = parseInt(spieler.style.top) - 5 + "px";
  }
}

function block_erstellen() {
  if (timer.ready()) {
    var h = document.createElement("div");
    h.classList.add("stein");
    h.style.top = "0px";
    h.style.left = "1920px";
    spielfeld.appendChild(h);
  }
}

function block_bewegen() {
  var steine = document.querySelectorAll(".stein");
  for (var stein of steine) {
    stein.style.left = parseInt(stein.style.left) - 5 + "px";
    if (parseInt(stein.style.left) < 0) {
      stein.parentNode.removeChild(stein);
    }
  }
}

function loop() {
  steuerung();
  block_erstellen();
  block_bewegen();
  //TODO
  //hintergrund scrolling
  //kollision
  //high score
  //
  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
