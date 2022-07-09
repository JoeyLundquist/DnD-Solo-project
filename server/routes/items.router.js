const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/search/:value', rejectUnauthenticated, (req, res) => {
    let itemsArray = [];
    axios.get(`https://www.dnd5eapi.co/api/magic-items/?name=${req.params.value}`)
    .then(response => {
        let arr = response.data
        console.log('this is list', arr)
            arr.results.map(i => itemsArray.push(i))
        axios.get(`https://www.dnd5eapi.co/api/equipment/?name=${req.params.value}`)
            .then(results => {
                console.log('this is results.data',results.data)
                results.data.results.map(item => itemsArray.push(item))
                console.log('This is item array',itemsArray)
                res.send(itemsArray)
            })
            .catch(err => console.error('Failed second axios', err))
        
    })
    .catch(error => console.log('Failed to get list', error))
});

router.post('/details/', rejectUnauthenticated, (req, res) =>{
    console.log(req.body.url)
    axios.get(`https://www.dnd5eapi.co${req.body.url}`)
        .then(apiRes => {
            res.send(apiRes.data)
        })
        .catch(err => {
            res.sendStatus(500)
            console.log('Failed to GET item details', err)
        })
})

//Routes to fetch items in inventory
router.get('/inventory/:id', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `
        SELECT *
        FROM characters_items
        WHERE id = $1
    `
    pool.query(sqlQuery, [req.params.id])
        .then(dbRes => res.send(dbRes.rows))
        .catch(err => {
            res.sendStatus(500)
            console.log('Failed to get inventory', err)
        })
})


router.post('/', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `
        INSERT INTO characters_items
        (character_id, item_name, api_id)
        VALUES ($1, $2, $3)
    `
    const sqlParams = [
        1,
        req.body.name,
        req.body.url
    ]
    if(!req.body.name){
        console.log('No item selected')
        return
    }
    
    pool.query(sqlQuery, sqlParams)
        .then(dbRes => {
            res.sendStatus(201)
        })
        .catch(err => {
            console.log('Failed to POST item to inv', err)
        })

});

module.exports = router;
