const router = require('express').Router()
const { default: axios } = require('axios')
const db = require('../models')


router.get('/', async (req, res) => {
    try {
        const pokemons = await db.pokemon.findAll({ raw: true })
        // console.log(pokemons)
        
        res.render('pokemon/index', { pokemons: pokemons })
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})

router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const [newPokemon, created] = await db.pokemon.findOrCreate({
            where: { name: req.body.name }
        })
        // console.log(newPokemon)
        // console.log(created)

        res.redirect('/pokemons')
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})


router.get('/:name', async (req, res) => {
    try {
        const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/${req.params.name}`
        const response = await axios.get(pokeApiUrl)
        const pokemon = response.data

        res.render('pokemon/show', { pokemon: pokemon })
    } catch (err) {

    }
})

module.exports = router;