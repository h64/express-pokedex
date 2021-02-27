// Make sure to require your models in the files where they will be used.
const db = require('./models');

const pokemonCreateTest = async () => {
    const newPokemon = await db.pokemon.create({
        name: 'pikachu'
    })
    console.log('Created: ', newPokemon.name)
}
// pokemonCreateTest()

const pokemonFindTest = async () => {
    const foundPokemon = await db.pokemon.findOne({
        where: {
            name: 'pikachu'
        }
    })
    console.log('Found: ', foundPokemon.name)
}
// pokemonFindTest();

const userTest = async () => {
    try {
        const newUser = await db.user.create({
            username: "test",
            password: "test"
        })
        console.log('Created a new user!', newUser.username)


        const foundUser = await db.user.findOne({
            where: {
                username: "test"
            }
        })
        console.log('Found the user!', foundUser.username)
    } catch (err) {
        console.log(err)
    }
}
userTest();


