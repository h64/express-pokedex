const router = require('express').Router()
const { default: axios } = require('axios')
const db = require('../models')


router.get('/', async (req, res) => {
    if(!res.locals.user) {
        res.redirect('/auth/login')
    } else {
        try {
            const user = await db.user.findOne({
                where: { id: res.locals.user.id }, 
                include: db.pokemon
            })
    
            // console.log(user)
            res.render('pokemon/index', { pokemons: user.dataValues.pokemons } )
        } catch (err) {
            console.log(err)
        }
    }
})

router.post('/', async (req, res) => {
    try {
        const [newPokemon, created] = await db.pokemon.findOrCreate({
            where: { 
                name: req.body.name 
            }
        })
        // console.log(created);
        res.locals.user.addPokemon(newPokemon);
        res.redirect(`/pokemons`)
    } catch (err) {
        console.log(err)
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