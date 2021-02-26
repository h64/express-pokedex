// Make sure to require your models in the files where they will be used.
const db = require('./models');

const pokemonCreateTest = async () => {
    const newPokemon = await db.pokemon.create({
        name: 'pikachu'
    })
    console.log('Created: ', newPokemon.name)
}
pokemonCreateTest()

const pokemonFindTest = async () => {
    const foundPokemon = await db.pokemon.findOne({
        where: {
            name: 'pikachu'
        }
    })
    console.log('Found: ', foundPokemon.name)
}
pokemonFindTest();