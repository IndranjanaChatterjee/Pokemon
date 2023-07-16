let audio;
btn.addEventListener("click", () => {
  if (btn.innerText == "GO! POKEBALL") {
    audio = new Audio("ball.mp3");
    audio.play();
    document.getElementById("poke").src = "p2.png";
    document.getElementById("link").style.visibility = "visible";
    btn.innerText = "Close!Pokeball";
  } else {
    document.getElementById("poke").src = "p1.png";
    document.getElementById("link").style.visibility = "hidden";
    btn.innerText = "GO! POKEBALL";
  }
});
