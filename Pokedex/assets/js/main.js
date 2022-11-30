
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="numero">#${pokemon.number}</span>
            <span class="nome">${pokemon.name}</span>

                <div class="detalhes">
                    <ol class="elementos">
                        ${pokemon.types.map((type) => `<li class="elementos">${type}</li>`).join('')}                        
                    </ol>

                <img src="${pokemon.photo}" 
                     alt="${pokemon.name}">
                </div>                
        </li>
    `         
}

const pokemonList = document.getElementById('pokemonList')

    pokeApi.getPokemons().then((pokemons = []) => {

        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')        
   
    })  

    