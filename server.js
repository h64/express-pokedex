/* Required Modules and Variables */
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const rowdy = require('rowdy-logger')
const axios = require('axios')

const app = express()
const rowdyResults = rowdy.begin(app)
const PORT = process.env.PORT || 3000

/* Middleware and config */
app.set('view engine', 'ejs')

/* Controllers */


/* Routes */
app.get('/', async (req, res) => {
    try {
        const pokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=151'
        const response = await axios.get(pokeURL)
        const pokemons = response.data.results
        
        res.render('index', { pokemons: pokemons })
    } catch (err) {
        console.log(err)
        res.render('index', { pokemons: [] })
    }
})


app.listen(PORT, () => {
    rowdyResults.print()
})