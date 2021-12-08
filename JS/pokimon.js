// Recuperation de l'element html
const poke_container = document.getElementById('poke_container');
const randompkm = document.getElementById('random');


// Reactualisation de la page pour changer l'equipe pokemon
function timedRefresh() {
	location.reload(true);
}

randompkm.addEventListener('click',function(){
	location.reload(true);
});



// Affichage d'un seul pokemon
const pokemons_number = 6;

// Affichage de la liste des pokemons
const fetchPokemon = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

// Recuperation de l'API
const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 898) + 1}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	cartePokemon(pokemon);
};


// Fonction de la creation de notre carte
function cartePokemon(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	// Appel des différentes ressources de l'API
	const type = pokemon.types[0].type.name;
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const height = pokemon.height;
	const weight = pokemon.weight;
	
	//Creation html de la carte pokemon
	const pokeInnerHTML = `
        <div class="pokimon">
			<h3>Pokemon Detail</h3>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/${pokemon.id}.png" alt="${name}" />
            <h5 class="number">#${pokemon.id.toString().padStart(3, '0')}</h5>
            <h5 class="name">${name}</h3>
            <p>Type: <span>${type}</span></p><br>
			<p>Taille: <span>${height}</span> m</p><br>
			<p>Poids: <span>${weight}</span> kg</p>
        </div>
    `;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
}

// Affichage
fetchPokemon();



// const search_term = document.getElementById('search_q')
// const search_btn = document.getElementById('search-btn')


// // api https://pokeapi.co/docs/v2#pokemon
// const getPokemonData = async term => {
//     document.getElementById('show_error').classList.remove('show')
//     document.getElementById('show_error').classList.add('hidden')
        
//     const url = `https://pokeapi.co/api/v2/pokemon/${term}`
//     const response = await fetch(url)

//     if(response.status == 404 || response.statusText == 'Not Found'){
//         document.getElementById('show_error').classList.add('show')
//         document.getElementById('show_error').classList.remove('hidden')
//         return
//     }

//     const pokemon = await response.json()
//     debugger

//     // update ui with data 
//     document.getElementById('update_img').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
//     document.getElementById('update_name').innerHTML = pokemon.name
//     document.getElementById('update_candy_title').innerHTML = `${pokemon.name} Candy`
//     document.getElementById('update_hp').innerHTML = `HP ${Math.floor((Math.random() * pokemon.stats[0].base_stat) + 1)}/${pokemon.stats[0].base_stat}`
//     document.getElementById('update_cp').innerHTML = `XP ${pokemon.base_experience}`
//     document.getElementById('update_type').innerHTML = `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`
//     document.getElementById('update_weight').innerHTML = `${pokemon.weight}kg`
//     document.getElementById('update_height').innerHTML = `0.${pokemon.height}m`
//     document.getElementById('update_stardust').innerHTML = Math.floor((Math.random() * 10000) + 1)
//     document.getElementById('update_candy').innerHTML = Math.floor((Math.random() * 200) + 1)

// }

// 