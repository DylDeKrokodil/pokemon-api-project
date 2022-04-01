let pokemons = [
    {
        name: "Mew",
        dex: 151,
        types: [{type:"Psychic"}],
    },
    {
        name: "Bulbasaur",
        dex: 1,
        types: [{type: "Grass"}, { type: "Poison"}],
    },
    {
        name: "Ivysaur",
        dex: 2,
        types: [{type: "Grass"}, { type: "Poison"}],
    },
];

export function GetPokemons() {
    return pokemons;
}

export function GetPokemon(dex) {
    return pokemons.find(
        (pokemon) => pokemon.dex === dex
    );
}