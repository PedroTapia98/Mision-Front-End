const fetchPokemon = () => {
    const pokeName = document.getElementById("Pokename");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200") {
            console.log(res);
            pokeImage("./pokemonSad.jpg");
        }
        else{
            return res.json();
        }        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        //console.log(pokeImg);
        let pokename = data.name;
        let pokesize = data.height;
        let pokeweight = data.pokeweight;

        let pokeHealth = data.stats["0"].base_stat;
        let pokeAttack = data.stats["1"].base_stat;
        let pokeDeffense = data.stats["2"].base_stat;
        let pokeSpecialHealth = data.stats["3"].base_stat;
        let pokeSpecialDeffense = data.stats["4"].base_stat;
        let pokeSpeed = data.stats["5"].base_stat;

        pokeImage(pokeImg);
        writePage(pokename, "Name: ", "pokeName_lbl", "");
        writePage(pokesize, "Size: ", "pokeSize_lbl", " cm");
        writePage(pokeweight, "Weight: ", "pokeWeight_lbl", " kg");

        writePage(pokeHealth, "Health = ", "pokeHealth_lbl", "");
        writePage(pokeAttack, "Attack = ", "pokeAttack_lbl", "");
        writePage(pokeDeffense, "Defense = ", "pokeDeffense_lbl", "");
        writePage(pokeSpecialHealth, "Special Attack = ", "pokeSpecialAttack_lbl", "");
        writePage(pokeSpecialDeffense, "Special Defense = ", "pokeSpecialDeffense_lbl", "");
        writePage(pokeSpeed, "Special Speed = ", "pokeSpeed_lbl", "");

        

    });
}

fetchPokemon();

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
const writePage = (name, text, element, secondaryText) => {
    document.getElementById(element).innerHTML = text + name + secondaryText;
}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png")

