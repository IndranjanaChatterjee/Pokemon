const search = document.getElementById("text");
let audio;
click.addEventListener("click", () => {
  let val = search.value;
  audio=new Audio("poke.mp3");
  audio.play();
  console.log(val);
  if (val == "" || val == null) {
    document.querySelector(".msg").style.display = "block";
    document.getElementById("info").style.display = "none";
    document.getElementById("img").style.display = "none";
    document.querySelector(".result").style.display = "none";
  } else {
    let p = fetch(`https://pokeapi.co/api/v2/pokemon/${val}`);
    p.then((v) => {
      return v.json();
    })
      .then((e) => {
        console.log(e);
        document.getElementById("info").innerHTML = `<p>Name: ${e.name}</p>
        <p>Weight: ${e.weight}Kg</p>
        <p>Type: ${e.types[0].type.name}</p>`;

        document.getElementById("img").src = `${e.sprites.front_default}`;

        document.getElementById("img").style.display = "block";
        document.getElementById("info").style.display = "block";
        document.querySelector(".msg").style.display = "none";
        document.querySelector(".result").style.display = "none";
        document.getElementById("text").value = "";
      })
      .catch((e) => {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".msg").style.display = "none";
        document.getElementById("info").style.display = "none";
        document.getElementById("img").style.display = "none";
        document.getElementById("text").value = "";
      });
  }
});
