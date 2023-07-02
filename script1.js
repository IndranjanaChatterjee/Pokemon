const search = document.getElementById("text");
click.addEventListener("click", () => {
    let val = search.value;
    console.log(val);
    
    
    let p = fetch(`https://pokeapi.co/api/v2/pokemon/${val}`);
    p.then((v) => {
        return v.json();
    }).then((e) => {
        console.log(e);
        document.getElementById("info").innerHTML = `<p>Name: ${e.name}</p>
        <p>Weight: ${e.weight}</p>
        <p>Type: ${e.types[0].type.name}</p>`;

        document.getElementById("img").src=`${e.sprites.front_default}`;

        document.getElementById("img").style.display="block";
        document.getElementById("text").value="";
    })
    })
